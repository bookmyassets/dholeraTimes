// api/webhook/sanity/route.js
import { NextResponse } from 'next/server';
import { google } from 'googleapis';
import { JWT } from 'google-auth-library';

// WhatsApp API configuration
const WHATSAPP_API_URL = process.env.WHATSAPP_API_URL;
const WHATSAPP_TOKEN = process.env.WHATSAPP_TOKEN;

// Google Sheets configuration
const GOOGLE_CLIENT_SHEET_ID_NOTIFICATION = process.env.GOOGLE_CLIENT_SHEET_ID_NOTIFICATION;
const GOOGLE_CLIENT_EMAIL_DAILY_NOTIFICATION = process.env.GOOGLE_CLIENT_EMAIL_DAILY_NOTIFICATION;
const GOOGLE_CLIENT_PRIVATE_KEY_NOTIFICATION = process.env.GOOGLE_CLIENT_PRIVATE_KEY_NOTIFICATION?.replace(/\\n/g, '\n');

// Function to send WhatsApp message
async function sendWhatsAppMessage(phone, message) {
  try {
    const response = await fetch(WHATSAPP_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token: WHATSAPP_TOKEN,
        to: phone,
        body: message,
      }),
    });

    const result = await response.json();
    console.log('✅ WhatsApp API Response:', result);
    return result;
  } catch (error) {
    console.error('❌ Error sending WhatsApp message:', error);
    throw error;
  }
}

// Function to create message templates
function createMessage(type, name, data) {
  const baseGreeting = `Hi ${name},`;
  
  switch (type) {
    case 'blog':
      return `${baseGreeting} 📝 New Blog Published on Dholera Times!

"${data.title}"

${data.excerpt ? data.excerpt + '\n\n' : ''}Read more: ${data.url}

Stay updated with latest insights about Dholera Smart City!`;

    case 'project':
      return `${baseGreeting} 🏗️ New Project Update from Dholera Times!

"${data.title}"

${data.description ? data.description + '\n\n' : ''}Learn more: ${data.url}

Discover the latest developments in Dholera Smart City!`;

    case 'news':
      return `${baseGreeting} 📰 Breaking News from Dholera Times!

"${data.title}"

${data.summary ? data.summary + '\n\n' : ''}Read full story: ${data.url}

Stay informed about Dholera Smart City updates!`;

    default:
      return `${baseGreeting} New update from Dholera Times: ${data.title}${data.url ? '\n\nRead more: ' + data.url : ''}`;
  }
}

// Function to get subscribers from Google Sheets
async function getSubscribers() {
  try {
    const auth = new google.auth.JWT({
      email: GOOGLE_CLIENT_EMAIL_DAILY_NOTIFICATION,
      key: GOOGLE_CLIENT_PRIVATE_KEY_NOTIFICATION,
      scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    
    // Get all data from the sheet
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: GOOGLE_CLIENT_SHEET_ID_NOTIFICATION,
      range: 'A:Z', // Get all columns
    });

    const rows = response.data.values;
    if (!rows || rows.length === 0) {
      return [];
    }

    const headers = rows[0];
    const nameIndex = headers.indexOf('name');
    const phoneIndex = headers.indexOf('phone');
    const statusIndex = headers.indexOf('Status');

    if (nameIndex === -1 || phoneIndex === -1 || statusIndex === -1) {
      throw new Error('Required columns (name, phone, Status) not found');
    }

    // Filter subscribers who have received welcome message
    const activeSubscribers = [];
    for (let i = 1; i < rows.length; i++) {
      const row = rows[i];
      if (row[statusIndex] === 'SENT' && row[phoneIndex] && row[nameIndex]) {
        activeSubscribers.push({
          name: row[nameIndex],
          phone: row[phoneIndex],
          rowIndex: i + 1 // 1-based index for Google Sheets
        });
      }
    }
    
    return activeSubscribers;
  } catch (error) {
    console.error('❌ Error fetching subscribers:', error);
    throw error;
  }
}

// Function to update delivery status in sheets
async function updateDeliveryStatus(subscribers, contentType, contentId) {
  try {
    const auth = new google.auth.JWT({
      email: GOOGLE_CLIENT_EMAIL_DAILY_NOTIFICATION,
      key: GOOGLE_CLIENT_PRIVATE_KEY_NOTIFICATION,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    const statusColumn = `${contentType}_${contentId}`;
    
    // First, get current headers
    const headerResponse = await sheets.spreadsheets.values.get({
      spreadsheetId: GOOGLE_CLIENT_SHEET_ID_NOTIFICATION,
      range: '1:1',
    });

    const headers = headerResponse.data.values?.[0] || [];
    let statusColumnIndex = headers.indexOf(statusColumn);
    
    // Add status column header if it doesn't exist
    if (statusColumnIndex === -1) {
      statusColumnIndex = headers.length;
      const columnLetter = String.fromCharCode(65 + statusColumnIndex); // A=65
      
      await sheets.spreadsheets.values.update({
        spreadsheetId: GOOGLE_CLIENT_SHEET_ID_NOTIFICATION,
        range: `${columnLetter}1`,
        valueInputOption: 'RAW',
        requestBody: {
          values: [[statusColumn]]
        }
      });
    }
    
    // Update status for each subscriber
    const updates = subscribers.map(subscriber => {
      const columnLetter = String.fromCharCode(65 + statusColumnIndex);
      return {
        range: `${columnLetter}${subscriber.rowIndex}`,
        values: [['SENT']]
      };
    });

    if (updates.length > 0) {
      await sheets.spreadsheets.values.batchUpdate({
        spreadsheetId: GOOGLE_CLIENT_SHEET_ID_NOTIFICATION,
        requestBody: {
          valueInputOption: 'RAW',
          data: updates
        }
      });
    }
  } catch (error) {
    console.error('❌ Error updating delivery status:', error);
  }
}

// Function to generate URL for content
function generateContentUrl(contentType, slug) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://dholeratimes.com';
  return `${baseUrl}/${contentType}/${slug}`;
}

// Main webhook handler
export async function POST(request) {
  try {
    // Verify webhook signature (recommended for security)
    const signature = request.headers.get('sanity-webhook-signature');
    // Add signature verification here if needed
    
    const body = await request.json();
    console.log('📥 Sanity webhook received:', body);
    
    // Extract document information
    const { _type, _id, title, slug, publishedAt } = body;
    
    // Only process published documents
    if (!publishedAt) {
      return NextResponse.json({ message: 'Document not published yet' });
    }
    
    // Determine content type
    let contentType;
    switch (_type) {
      case 'post':
      case 'blog':
        contentType = 'blog';
        break;
      case 'project':
        contentType = 'project';
        break;
      case 'news':
        contentType = 'news';
        break;
      default:
        return NextResponse.json({ message: `Unsupported content type: ${_type}` });
    }
    
    // Get subscribers
    const subscribers = await getSubscribers();
    
    if (subscribers.length === 0) {
      return NextResponse.json({ message: 'No active subscribers found' });
    }
    
    // Prepare content data
    const contentData = {
      title: title,
      url: generateContentUrl(contentType, slug?.current || _id),
      excerpt: body.excerpt,
      description: body.description,
      summary: body.summary,
    };
    
    // Send messages to all subscribers
    let sentCount = 0;
    let failedCount = 0;
    
    for (const subscriber of subscribers) {
      try {
        const message = createMessage(contentType, subscriber.name, contentData);
        await sendWhatsAppMessage(subscriber.phone, message);
        sentCount++;
        console.log(`📤 Message sent to ${subscriber.name} (${subscriber.phone})`);
        
        // Add small delay to avoid rate limiting
        await new Promise(resolve => setTimeout(resolve, 1000));
      } catch (error) {
        console.error(`❌ Failed to send message to ${subscriber.name}:`, error);
        failedCount++;
      }
    }
    
    // Update delivery status in sheets
    await updateDeliveryStatus(subscribers, contentType, _id);
    
    console.log(`✅ Messages sent: ${sentCount}, Failed: ${failedCount}`);
    
    return NextResponse.json({
      success: true,
      message: `${contentType} notification sent`,
      sent: sentCount,
      failed: failedCount,
      total: subscribers.length
    });
    
  } catch (error) {
    console.error('❌ Webhook error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Handle other HTTP methods
export async function GET() {
  return NextResponse.json({ message: 'Sanity webhook endpoint is active' });
}