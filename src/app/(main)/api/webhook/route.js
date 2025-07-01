import { NextResponse } from 'next/server';
import { google } from 'googleapis';
import crypto from 'crypto';

// === 🔧 Configuration ===
const WHATSAPP_API_URL = process.env.WHATSAPP_API_URL;
const WHATSAPP_TOKEN = process.env.WHATSAPP_TOKEN;
const GOOGLE_CLIENT_SHEET_ID_NOTIFICATION = process.env.GOOGLE_CLIENT_SHEET_ID_NOTIFICATION;
const GOOGLE_CLIENT_EMAIL_DAILY_NOTIFICATION = process.env.GOOGLE_CLIENT_EMAIL_DAILY_NOTIFICATION;
const GOOGLE_CLIENT_PRIVATE_KEY_NOTIFICATION = process.env.GOOGLE_CLIENT_PRIVATE_KEY_NOTIFICATION?.replace(/\\n/g, '\n');
const SANITY_WEBHOOK_SECRET = process.env.SANITY_WEBHOOK_SECRET;

// === ✅ Verify Sanity webhook signature ===
function verifySanitySignature(request, body) {
  if (!SANITY_WEBHOOK_SECRET) return true; // skip verification if not set

  const signature = request.headers.get('sanity-webhook-signature');
  const generatedSignature = crypto
    .createHmac('sha256', SANITY_WEBHOOK_SECRET)
    .update(body)
    .digest('hex');

  return signature === `sha256=${generatedSignature}`;
}

// === 📞 Send WhatsApp message ===
async function sendWhatsAppMessage(phone, message) {
  if (!WHATSAPP_API_URL || !WHATSAPP_TOKEN) {
    throw new Error('Missing WhatsApp API config');
  }

  const response = await fetch(WHATSAPP_API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      token: WHATSAPP_TOKEN,
      to: phone,
      body: message,
    }),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`WhatsApp API error: ${response.status} ${text}`);
  }

  return await response.json();
}

// === 📝 Create message text ===
function createMessage(type, name, data) {
  const greeting = `Hi ${name},`;
  const urlPart = data.url ? `\n\nRead more: ${data.url}` : '';

  switch (type) {
    case 'blog':
      return `${greeting} 📝 New Blog Published on Dholera Times!\n\n"${data.title}"\n\n${data.excerpt || ''}${urlPart}\n\nStay updated!`;
    case 'project':
      return `${greeting} 🏗️ New Project Update!\n\n"${data.title}"\n\n${data.description || ''}${urlPart}\n\nCheck it out!`;
    case 'news':
      return `${greeting} 📰 Breaking News!\n\n"${data.title}"\n\n${data.summary || ''}${urlPart}\n\nStay informed!`;
    default:
      return `${greeting} New update: ${data.title}${urlPart}`;
  }
}

// === 📊 Fetch subscribers from Google Sheets ===
async function getSubscribers() {
  const auth = new google.auth.JWT({
    email: GOOGLE_CLIENT_EMAIL_DAILY_NOTIFICATION,
    key: GOOGLE_CLIENT_PRIVATE_KEY_NOTIFICATION,
    scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
  });

  const sheets = google.sheets({ version: 'v4', auth });
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: GOOGLE_CLIENT_SHEET_ID_NOTIFICATION,
    range: 'A:Z',
  });

  const rows = response.data.values || [];
  if (rows.length === 0) return [];

  const headers = rows[0];
  const nameIdx = headers.indexOf('name');
  const phoneIdx = headers.indexOf('phone');

  if (nameIdx === -1 || phoneIdx === -1) {
    throw new Error('Missing required columns in sheet');
  }

  return rows.slice(1).map((row, i) => ({
    name: row[nameIdx],
    phone: row[phoneIdx],
    rowIndex: i + 2, // +1 for header, +1 because Sheets are 1-based
  })).filter(sub => sub.name && sub.phone);
}

// === ✅ Update status column in Google Sheets ===
async function updateDeliveryStatus(contentType, contentId, subscribers) {
  const auth = new google.auth.JWT({
    email: GOOGLE_CLIENT_EMAIL_DAILY_NOTIFICATION,
    key: GOOGLE_CLIENT_PRIVATE_KEY_NOTIFICATION,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  const sheets = google.sheets({ version: 'v4', auth });
  const columnName = `${contentType}_${contentId}`;

  // Get header row to check if column exists
  const headerRes = await sheets.spreadsheets.values.get({
    spreadsheetId: GOOGLE_CLIENT_SHEET_ID_NOTIFICATION,
    range: '1:1',
  });
  const headers = headerRes.data.values?.[0] || [];
  let colIdx = headers.indexOf(columnName);

  if (colIdx === -1) {
    // Add new header
    colIdx = headers.length;
    const columnLetter = String.fromCharCode(65 + colIdx);
    await sheets.spreadsheets.values.update({
      spreadsheetId: GOOGLE_CLIENT_SHEET_ID_NOTIFICATION,
      range: `${columnLetter}1`,
      valueInputOption: 'RAW',
      resource: { values: [[columnName]] },
    });
  }

  // Batch update status as 'SENT'
  const columnLetter = String.fromCharCode(65 + colIdx);
  const updates = subscribers.map(sub => ({
    range: `${columnLetter}${sub.rowIndex}`,
    values: [['SENT']],
  }));

  if (updates.length > 0) {
    await sheets.spreadsheets.values.batchUpdate({
      spreadsheetId: GOOGLE_CLIENT_SHEET_ID_NOTIFICATION,
      resource: { valueInputOption: 'RAW', data: updates },
    });
  }
}

// === 🌱 Generate content URL ===
function generateContentUrl(contentType, slug) {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://dholeratimes.com';
  const path = contentType === 'blog'
    ? `dholera-updates/blogs/${slug}`
    : contentType === 'news'
    ? `dholera-updates/latest-news/${slug}`
    : `projects/${slug}`;
  return `${base}/${path}`;
}

// === 🔄 Process webhook payload ===
async function processWebhook(payload) {
  const { _type, _id, title, slug, publishedAt } = payload;
  if (!publishedAt) {
    console.log('⏭ Skipping draft/unpublished content');
    return;
  }

  const contentType =
    ['post', 'blog'].includes(_type) ? 'blog' :
    _type === 'project' ? 'project' :
    _type === 'news' ? 'news' : null;

  if (!contentType) {
    console.log(`⚠️ Unsupported content type: ${_type}`);
    return;
  }

  const subscribers = await getSubscribers();
  if (subscribers.length === 0) {
    console.log('ℹ️ No subscribers found');
    return;
  }

  const contentUrl = generateContentUrl(contentType, slug?.current || _id);
  const contentData = {
    title,
    url: contentUrl,
    excerpt: payload.excerpt,
    description: payload.description,
    summary: payload.summary,
  };

  const BATCH_SIZE = 5;
  for (let i = 0; i < subscribers.length; i += BATCH_SIZE) {
    const batch = subscribers.slice(i, i + BATCH_SIZE);
    const results = await Promise.all(batch.map(sub =>
      sendWhatsAppMessage(sub.phone, createMessage(contentType, sub.name, contentData))
        .then(() => ({ success: true, sub }))
        .catch(error => ({ success: false, sub, error }))
    ));

    results.forEach(({ success, sub, error }) => {
      if (success) {
        console.log(`✅ Sent to ${sub.name} (${sub.phone})`);
      } else {
        console.error(`❌ Failed for ${sub.name}:`, error.message);
      }
    });

    if (i + BATCH_SIZE < subscribers.length) {
      await new Promise(r => setTimeout(r, 2000)); // rate limit
    }
  }

  await updateDeliveryStatus(contentType, _id, subscribers);
  console.log(`🎉 Completed sending to ${subscribers.length} users`);
}

// === 🚀 POST webhook handler ===
export async function POST(request) {
  const body = await request.text();

  if (!verifySanitySignature(request, body)) {
    return NextResponse.json({ error: 'Invalid signature' }, { status: 401 });
  }

  let payload;
  try {
    payload = JSON.parse(body);
  } catch (e) {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  try {
    await processWebhook(payload);
    return NextResponse.json({ received: true, processed: true });
  } catch (error) {
    console.error('❌ Processing error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// === 🧪 GET test handler ===
export async function GET() {
  return NextResponse.json({
    status: 'active',
    whatsappConfigured: !!WHATSAPP_API_URL,
    googleSheetsConfigured: !!GOOGLE_CLIENT_SHEET_ID_NOTIFICATION,
    sanityWebhookSecured: !!SANITY_WEBHOOK_SECRET,
    message: 'Webhook is running 🚀'
  });
}