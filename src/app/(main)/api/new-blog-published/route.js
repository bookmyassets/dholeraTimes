// File: /app/api/new-blog-published/route.js
import { NextResponse } from 'next/server';

const SANITY_WEBHOOK_SECRET = process.env.SANITY_WEBHOOK_SECRET;

export async function POST(request) {
  try {
    // Verify the request if using a webhook secret
    if (SANITY_WEBHOOK_SECRET) {
      const secret = request.headers.get('sanity-webhook-secret');
      if (secret !== SANITY_WEBHOOK_SECRET) {
        return NextResponse.json(
          { error: 'Invalid webhook secret' },
          { status: 401 }
        );
      }
    }

    const body = await request.json();
    console.log('Sanity webhook received:', body);

    // Extract post information from Sanity webhook payload
    const postData = {
      id: body._id,
      title: body.title,
      slug: body.slug?.current,
      category: body.category, // Assuming you have a 'category' field
      publishedAt: body.publishedAt || new Date().toISOString(),
      isNew: body._type === 'post' && body._createdAt === body._updatedAt
    };

    // Only proceed if this is a new post publication in one of our categories
    if (!postData.isNew || !['blog', 'projects', 'latest-news'].includes(postData.category)) {
      console.log('Not a new post in target categories - skipping notification');
      return NextResponse.json(
        { success: true, message: 'Not a new post in target categories' },
        { status: 200 }
      );
    }

    if (!postData.title || !postData.slug || !postData.category) {
      console.error('Missing required post data');
      return NextResponse.json(
        { error: 'Missing required post data' },
        { status: 400 }
      );
    }

    // Construct the post URL based on category
    let postUrl;
    switch(postData.category) {
      case 'blog':
        postUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/dholera-updates/blogs/${postData.slug}`;
        break;
      case 'projects':
        postUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/projects/${postData.slug}`;
        break;
      case 'latest-news':
        postUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/dholera-updates/latest-news/${postData.slug}`;
        break;
      default:
        postUrl = `${process.env.NEXT_PUBLIC_SITE_URL}`;
    }

    console.log(`New ${postData.category} post detected: "${postData.title}" - ${postUrl}`);

    // Call your Google Apps Script web app to trigger notifications
    const scriptUrl = process.env.GOOGLE_APPS_SCRIPT_WEBHOOK_URL;
    if (!scriptUrl) {
      console.error('Missing Google Apps Script URL');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    const scriptResponse = await fetch(scriptUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        postTitle: postData.title,
        postUrl: postUrl,
        category: postData.category,
        // secret: process.env.APPS_SCRIPT_SECRET
      }),
    });

    if (!scriptResponse.ok) {
      const errorText = await scriptResponse.text();
      console.error('Failed to trigger Apps Script:', errorText);
      throw new Error('Failed to trigger notifications');
    }

    console.log('Successfully triggered WhatsApp notifications');
    return NextResponse.json(
      { success: true, message: 'Notifications triggered' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error handling post publication:', error);
    return NextResponse.json(
      { 
        error: 'Error handling webhook',
        details: error.message 
      },
      { status: 500 }
    );
  }
}

export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, sanity-webhook-secret',
    },
  });
}