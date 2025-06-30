// api/webhook/sanity/route.js
import { NextResponse } from 'next/server';
import { google } from 'googleapis';
import crypto from 'crypto';

// WhatsApp API configuration
const WHATSAPP_API_URL = process.env.WHATSAPP_API_URL;
const WHATSAPP_TOKEN = process.env.WHATSAPP_TOKEN;

// Google Sheets configuration
const GOOGLE_CLIENT_SHEET_ID_NOTIFICATION = process.env.GOOGLE_CLIENT_SHEET_ID_NOTIFICATION;
const GOOGLE_CLIENT_EMAIL_DAILY_NOTIFICATION = process.env.GOOGLE_CLIENT_EMAIL_DAILY_NOTIFICATION;
const GOOGLE_CLIENT_PRIVATE_KEY_NOTIFICATION = process.env.GOOGLE_CLIENT_PRIVATE_KEY_NOTIFICATION?.replace(/\\n/g, '\n');
const SANITY_WEBHOOK_SECRET = process.env.SANITY_WEBHOOK_SECRET;

function verifySanitySignature(request, body) {
  if (!SANITY_WEBHOOK_SECRET) return true; // Skip if no secret configured
  
  const signature = request.headers.get('sanity-webhook-signature');
  const generatedSignature = crypto
    .createHmac('sha256', SANITY_WEBHOOK_SECRET)
    .update(body)
    .digest('hex');
  
  return signature === `sha256=${generatedSignature}`;
}

// WhatsApp message sender
async function sendWhatsAppMessage(phone, message) {
  if (!WHATSAPP_API_URL || !WHATSAPP_TOKEN) {
    throw new Error('WhatsApp API configuration missing');
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
    throw new Error(`WhatsApp API error: ${response.status}`);
  }

  return await response.json();
}

// Message template creator
function createMessage(type, name, data) {
  const baseGreeting = `Hi ${name},`;
  const urlText = data.url ? `\n\nRead more: ${data.url}` : '';

  switch (type) {
    case 'blog':
      return `${baseGreeting} 📝 New Blog Published on Dholera Times!\n\n"${data.title}"\n\n${
        data.excerpt || ''
      }${urlText}\n\nStay updated with latest insights!`;
    case 'project':
      return `${baseGreeting} 🏗️ New Project Update!\n\n"${data.title}"\n\n${
        data.description || ''
      }${urlText}\n\nDiscover the latest developments!`;
    case 'news':
      return `${baseGreeting} 📰 Breaking News!\n\n"${data.title}"\n\n${
        data.summary || ''
      }${urlText}\n\nStay informed about updates!`;
    default:
      return `${baseGreeting} New update: ${data.title}${urlText}`;
  }
}

// Google Sheets subscriber fetcher
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
  const nameIndex = headers.indexOf('name');
  const phoneIndex = headers.indexOf('phone');
  const statusIndex = headers.indexOf('Status');

  if (nameIndex === -1 || phoneIndex === -1 || statusIndex === -1) {
    throw new Error('Required columns not found in sheet');
  }

  return rows.slice(1).reduce((subscribers, row, index) => {
    if (row[statusIndex] === 'SENT' && row[phoneIndex] && row[nameIndex]) {
      subscribers.push({
        name: row[nameIndex],
        phone: row[phoneIndex],
        rowIndex: index + 2, // +1 for header row, +1 for 1-based index
      });
    }
    return subscribers;
  }, []);
}

// Update delivery status in Google Sheets
async function updateDeliveryStatus(subscribers, contentType, contentId) {
  const auth = new google.auth.JWT({
    email: GOOGLE_CLIENT_EMAIL_DAILY_NOTIFICATION,
    key: GOOGLE_CLIENT_PRIVATE_KEY_NOTIFICATION,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  const sheets = google.sheets({ version: 'v4', auth });
  const statusColumn = `${contentType}_${contentId}`;

  // Get or create status column
  const headerResponse = await sheets.spreadsheets.values.get({
    spreadsheetId: GOOGLE_CLIENT_SHEET_ID_NOTIFICATION,
    range: '1:1',
  });

  const headers = headerResponse.data.values?.[0] || [];
  let statusColumnIndex = headers.indexOf(statusColumn);

  if (statusColumnIndex === -1) {
    statusColumnIndex = headers.length;
    const columnLetter = String.fromCharCode(65 + statusColumnIndex);
    
    await sheets.spreadsheets.values.update({
      spreadsheetId: GOOGLE_CLIENT_SHEET_ID_NOTIFICATION,
      range: `${columnLetter}1`,
      valueInputOption: 'RAW',
      resource: { values: [[statusColumn]] },
    });
  }

  // Prepare batch update
  const updates = subscribers.map(subscriber => ({
    range: `${String.fromCharCode(65 + statusColumnIndex)}${subscriber.rowIndex}`,
    values: [['SENT']],
  }));

  if (updates.length > 0) {
    await sheets.spreadsheets.values.batchUpdate({
      spreadsheetId: GOOGLE_CLIENT_SHEET_ID_NOTIFICATION,
      resource: { valueInputOption: 'RAW', data: updates },
    });
  }
}

// Generate content URL
function generateContentUrl(contentType, slug) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://dholeratimes.com';
  return `${baseUrl}/${contentType}/${slug}`;
}

// Process webhook in background
async function processWebhook(payload) {
  console.log('🔍 Processing webhook payload:', payload);

  const { _type, _id, title, slug, publishedAt } = payload;
  if (!publishedAt) return;

  // Determine content type
  const contentType = 
    ['post', 'blog'].includes(_type) ? 'blog' :
    _type === 'project' ? 'project' :
    _type === 'news' ? 'news' : null;

  if (!contentType) {
    console.log(`⚠️ Unsupported content type: ${_type}`);
    return;
  }

  // Get active subscribers
  const subscribers = await getSubscribers();
  if (subscribers.length === 0) {
    console.log('ℹ️ No active subscribers found');
    return;
  }

  // Prepare content data
  const contentData = {
    title,
    url: generateContentUrl(contentType, slug?.current || _id),
    excerpt: payload.excerpt,
    description: payload.description,
    summary: payload.summary,
  };

  // Process subscribers in batches with rate limiting
  const BATCH_SIZE = 5;
  for (let i = 0; i < subscribers.length; i += BATCH_SIZE) {
    const batch = subscribers.slice(i, i + BATCH_SIZE);
    const batchPromises = batch.map(subscriber => 
      sendWhatsAppMessage(subscriber.phone, createMessage(contentType, subscriber.name, contentData))
        .then(() => ({ success: true, subscriber }))
        .catch(error => ({ success: false, subscriber, error }))
    );

    const results = await Promise.all(batchPromises);
    results.forEach(({ success, subscriber, error }) => {
      if (success) {
        console.log(`✅ Sent to ${subscriber.name} (${subscriber.phone})`);
      } else {
        console.error(`❌ Failed for ${subscriber.name}:`, error.message);
      }
    });

    if (i + BATCH_SIZE < subscribers.length) {
      await new Promise(resolve => setTimeout(resolve, 2000)); // Rate limiting
    }
  }

  // Update delivery status
  await updateDeliveryStatus(subscribers, contentType, _id);
  console.log(`🎉 Completed processing for ${subscribers.length} subscribers`);
}

// Webhook handler
export async function POST(request) {
  const body = await request.text();
  
  // Verify signature
  if (!verifySanitySignature(request, body)) {
    console.error('❌ Invalid webhook signature');
    return NextResponse.json({ error: 'Invalid signature' }, { status: 401 });
  }

  // Parse payload
  let payload;
  try {
    payload = JSON.parse(body);
    console.log('📥 Received valid webhook payload');
  } catch (e) {
    console.error('❌ Error parsing payload:', e);
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  // Forward to Google Apps Script webhook
  try {
    const scriptUrl = process.env.GOOGLE_SCRIPT_WEBHOOK_URL;
    const response = await fetch(scriptUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    
    if (!response.ok) {
      throw new Error(`Google Script error: ${response.status}`);
    }
    
    const result = await response.json();
    console.log('✅ Forwarded to Google Script:', result);
    
    return NextResponse.json({ 
      received: true, 
      processed: true,
      scriptResult: result 
    });
  } catch (error) {
    console.error('❌ Error forwarding to Google Script:', error);
    return NextResponse.json(
      { error: 'Failed to process webhook', details: error.message },
      { status: 500 }
    );
  }
}

// Test endpoint
export async function GET() {
  return NextResponse.json({
    status: 'active',
    services: {
      whatsapp: !!WHATSAPP_API_URL,
      googleSheets: !!GOOGLE_CLIENT_SHEET_ID_NOTIFICATION,
      webhookSecurity: !!SANITY_WEBHOOK_SECRET,
    },
    message: 'Sanity webhook endpoint is operational',
  });
}