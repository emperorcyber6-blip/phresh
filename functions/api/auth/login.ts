// Cloudflare Pages Function: /api/auth/login
import { dispatchCloudflareEmail } from '../_emailHelper';
import { renderWelcomeTemplate } from '../../../src/templates/index.ts';

export async function onRequestPost(context: any) {
  try {
    const request = context.request;
    const env = context.env;
    const body = await request.json();
    const { name, email, phone, organization } = body;

    if (!email) {
      return new Response(JSON.stringify({ success: false, error: 'Email address is required to log in.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const clientName = name || 'Valued Client';
    const clientPhone = phone || '+256 700 000000';
    const clientOrg = organization || 'General Client';

    const subject = 'Welcome to Phresh Tech Media Services';
    const textBody = `Hello ${clientName},\n\nThank you for connecting with Phresh Tech Media Services. We have received your profile regarding our Educational Software, Commercial Printing, Graphic Design, and Managed Hosting services.\n\nOur team is currently reviewing your profile, and we will get back to you shortly.\n\nStay Phresh!\nPhresh Tech Team\nphreshtechmediaservices@gmail.com | Kampala, Uganda`;

    const htmlBody = renderWelcomeTemplate({
      name: clientName,
      email,
      phone: clientPhone,
      organization: clientOrg
    });

    // Dispatch Welcome Email
    dispatchCloudflareEmail(env, {
      to: email,
      subject,
      textBody,
      htmlBody,
      replyTo: 'phreshtechmediaservices@gmail.com',
      customerName: clientName
    }).catch(e => console.error('Welcome email dispatch error:', e));

    return new Response(JSON.stringify({
      success: true,
      user: {
        id: `usr_${Date.now()}`,
        name: clientName,
        email,
        phone: clientPhone,
        organization: clientOrg,
        createdAt: new Date().toISOString()
      },
      message: `Welcome ${clientName}! Signed in successfully.`
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error: any) {
    console.error('Auth error:', error);
    return new Response(JSON.stringify({
      success: false,
      error: error.message || 'Authentication error'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
