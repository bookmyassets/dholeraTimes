export async function POST(req) {
  const { event_name, event_id, event_time, user_data } = await req.json();

  const accessToken =
    "EAAfBSmbsjZB8BOZCeFZBOXAE0ZCuAHOIUd0onpMLZA1X9EFuQgOW7GYfaWQpwrcUIZCeazYEu9n1s8Ss3KTVaJffzBwkvXCyHi5KXgyoVc07DuZBNlvUMRyoalTJWdgcmBEt6STdNsrHIA0oqZAYF0Vi43UDIWCidvazhl8ThiZBmMJ8kXYqEs6PZCF7olKHAAuGZC4vAZDZD"; // Replace with your actual token
  const pixelId = "69746600964977"; // Replace with your actual Pixel ID

  const eventData = {
    data: [
      {
        event_name,
        event_time: event_time || Math.floor(new Date().getTime() / 1000),
        event_id,
        user_data,
        action_source: "website",
      },
    ],
  };

  const response = await fetch(
    `https://graph.facebook.com/v18.0/${pixelId}/events?access_token=${accessToken}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(eventData),
    }
  );

  const responseData = await response.json();
  return new Response(JSON.stringify(responseData), { status: 200 });
}