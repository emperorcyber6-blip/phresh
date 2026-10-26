// Cloudflare Pages Function: /api/inquiries
export async function onRequestPost(context: any) {
  try {
    const request = context.request;
    const body = await request.json();
    const { name, email, phone, organization, service, requirements, budget, timeline } = body;

    const refId = `PTM-INQ-${Math.floor(100000 + Math.random() * 900000)}`;

    return new Response(JSON.stringify({
      success: true,
      refId,
      message: `Inquiry ${refId} received successfully.`,
      dispatchedTo: email
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error: any) {
    return new Response(JSON.stringify({
      success: false,
      error: error.message || 'Failed to process inquiry'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
