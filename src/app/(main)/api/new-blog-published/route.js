import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    // Verify webhook secret
    const secret = request.headers.get('sanity-webhook-secret');
    if (secret !== process.env.SANITY_WEBHOOK_SECRET) {
      return NextResponse.json(
        { error: 'Invalid webhook secret' },
        { status: 401 }
      );
    }

    const body = await request.json();
    console.log('Sanity webhook received:', body);

    // Extract post data
    const postData = {
      id: body._id,
      title: body.title,
      slug: body.slug?.current,
      category: body.category,
      isNew: body._type === 'post' && body._createdAt === body._updatedAt
    };

    // Validate required fields
    if (!postData.title || !postData.slug || !postData.category) {
      return NextResponse.json(
        { error: 'Missing required post data' },
        { status: 400 }
      );
    }

    // Only process blog/projects/news posts
    if (!['Blog', 'Project', 'News'].includes(postData.category)) {
      return NextResponse.json(
        { success: true, message: 'Not a target category' },
        { status: 200 }
      );
    }

    // Build URL based on category
    const postUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/${postData.category}/${postData.slug}`;

    // Trigger WhatsApp notifications
    const scriptResponse = await fetch(process.env.GOOGLE_APPS_SCRIPT_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        postTitle: postData.title,
        postUrl: postUrl,
        category: postData.category,
        secret: process.env.APPS_SCRIPT_SECRET
      }),
    });

    if (!scriptResponse.ok) {
      throw new Error('Failed to trigger notifications');
    }

    return NextResponse.json(
      { success: true, message: 'Notifications triggered' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: error.message },
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