// File: app/api/submit-channel-partner/route.js
import { NextResponse } from 'next/server';

export async function POST(request) {
  console.log('=== API Route Called ===');
  
  try {
    // Parse the request body
    const body = await request.json();
    console.log('Request body received:', body);

    // Check if googleapis is available
    let google;
    try {
      const googleapis = await import('googleapis');
      google = googleapis.google;
      console.log('Google APIs imported successfully');
    } catch (importError) {
      console.error('Failed to import googleapis:', importError);
      return NextResponse.json(
        { 
          message: 'Server dependency error',
          error: 'Failed to import googleapis',
          details: importError.message
        },
        { status: 500 }
      );
    }

    // Log environment variables (safely)
    //console.log('Environment check:');
    //console.log('GOOGLE_CLIENT_EMAIL_DAILY_NOTIFICATION exists:', !!process.env.GOOGLE_CLIENT_EMAIL_DAILY_NOTIFICATION);
    //console.log('GOOGLE_CLIENT_PRIVATE_KEY_NOTIFICATION exists:', !!process.env.GOOGLE_CLIENT_PRIVATE_KEY_NOTIFICATION);
    //console.log('GOOGLE_CLIENT_SHEET_ID_NOTIFICATION exists:', !!process.env.GOOGLE_CLIENT_SHEET_ID_NOTIFICATION);
    
    if (process.env.GOOGLE_CLIENT_EMAIL_DAILY_NOTIFICATION) {
      console.log('GOOGLE_CLIENT_EMAIL_DAILY_NOTIFICATION preview:', process.env.GOOGLE_CLIENT_EMAIL_DAILY_NOTIFICATION.substring(0, 20) + '...');
    }
    if (process.env.GOOGLE_CLIENT_SHEET_ID_NOTIFICATION) {
      console.log('GOOGLE_CLIENT_SHEET_ID_NOTIFICATION preview:', process.env.GOOGLE_CLIENT_SHEET_ID_NOTIFICATION.substring(0, 20) + '...');
    }

    // Validate environment variables
    if (!process.env.GOOGLE_CLIENT_EMAIL_DAILY_NOTIFICATION || !process.env.GOOGLE_CLIENT_PRIVATE_KEY_NOTIFICATION || !process.env.GOOGLE_CLIENT_SHEET_ID_NOTIFICATION) {
      console.error('Missing environment variables');
      return NextResponse.json(
        { 
          message: 'Server configuration error',
          error: 'Missing required environment variables',
          missing: {
            email: !process.env.GOOGLE_CLIENT_EMAIL_DAILY_NOTIFICATION_DAILY_NOTIFICATION,
            key: !process.env.GOOGLE_CLIENT_PRIVATE_KEY_NOTIFICATION,
            sheetId: !process.env.GOOGLE_CLIENT_SHEET_ID_NOTIFICATION
          }
        },
        { status: 500 }
      );
    }

    // Validate request data
    const { 
      timestamp,
      name,
      phone,
      source,
    } = body;

    if (!name || !phone) {
      console.log('Validation failed - missing required fields');
      return NextResponse.json(
        { 
          message: 'Validation error',
          error: 'Name and phone are required',
          received: { name: !!name, phone: !!phone }
        },
        { status: 400 }
      );
    }

    console.log('Creating Google Auth...');
    
    // Create Google Auth with error handling
    let auth;
    try {
      auth = new google.auth.GoogleAuth({
        credentials: {
          client_email: process.env.GOOGLE_CLIENT_EMAIL_DAILY_NOTIFICATION,
          private_key: process.env.GOOGLE_CLIENT_PRIVATE_KEY_NOTIFICATION.replace(/\\n/gm, '\n'),
        },
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
      });
      console.log('Google Auth created successfully');
    } catch (authError) {
      console.error('Google Auth creation failed:', authError);
      return NextResponse.json(
        { 
          message: 'Authentication error',
          error: 'Failed to create Google Auth',
          details: authError.message
        },
        { status: 500 }
      );
    }

    console.log('Creating Google Sheets client...');
    
    let sheets;
    try {
      sheets = google.sheets({ version: 'v4', auth });
      console.log('Google Sheets client created successfully');
    } catch (sheetsError) {
      console.error('Google Sheets client creation failed:', sheetsError);
      return NextResponse.json(
        { 
          message: 'Google Sheets client error',
          error: 'Failed to create Google Sheets client',
          details: sheetsError.message
        },
        { status: 500 }
      );
    }

    const spreadsheetId = process.env.GOOGLE_CLIENT_SHEET_ID_NOTIFICATION;

    // Prepare data for the sheet
    const rowData = [
      timestamp || new Date().toISOString(),
      name,
      phone,
      source || 'Daily Notification',
    ];

    console.log('Data to be written:', rowData);
    console.log('Attempting to write to Google Sheets...');

    // Try to append data to Google Sheet
    let result;
    try {
      result = await sheets.spreadsheets.values.append({
        spreadsheetId,
        range: 'Dholera-Times-Notification!A:H', // Make sure 'CP' is the correct sheet name
        valueInputOption: 'USER_ENTERED',
        insertDataOption: 'INSERT_ROWS',
        requestBody: {
          values: [rowData],
        },
      });
      console.log('Google Sheets write successful:', result.data);
    } catch (sheetsWriteError) {
      console.error('Google Sheets write failed:', sheetsWriteError);
      
      // Try with a different range if 'CP' sheet doesn't exist
      if (sheetsWriteError.message?.includes('Unable to parse range')) {
        console.log('Trying with Sheet1 instead of CP...');
        try {
          result = await sheets.spreadsheets.values.append({
            spreadsheetId,
            range: 'Sheet1!A:H',
            valueInputOption: 'USER_ENTERED',
            insertDataOption: 'INSERT_ROWS',
            requestBody: {
              values: [rowData],
            },
          });
        //  console.log('Google Sheets write successful with Sheet1:', result.data);
        } catch (fallbackError) {
          console.error('Fallback to Sheet1 also failed:', fallbackError);
          return NextResponse.json(
            { 
              message: 'Sheet access error',
              error: 'Cannot access the specified sheet',
              details: `Original error: ${sheetsWriteError.message}, Fallback error: ${fallbackError.message}`
            },
            { status: 500 }
          );
        }
      } else {
        return NextResponse.json(
          { 
            message: 'Google Sheets write error',
            error: sheetsWriteError.message,
            code: sheetsWriteError.code || 'SHEETS_ERROR'
          },
          { status: 500 }
        );
      }
    }

    console.log('=== API Route Success ===');
    return NextResponse.json({ 
      success: true,
      message: 'Form submitted successfully',
      updatedRows: result.data.updates?.updatedRows || 1
    });

  } catch (error) {
    console.error('=== API Route Error ===');
    console.error('Error type:', error.name);
    console.error('Error message:', error.message);
    console.error('Error stack:', error.stack);
    
    return NextResponse.json(
      { 
        message: 'Internal server error',
        error: error.message,
        type: error.name || 'UnknownError'
      },
      { status: 500 }
    );
  }
}

// Handle OPTIONS requests for CORS
export async function OPTIONS(request) {
  return new Response(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}