// Cloudflare Pages Function: /api/contact/submit
import { dispatchCloudflareEmail } from '../_emailHelper';
import {
  renderInquiryReceiptTemplate,
  renderAdminInquiryAlertTemplate
} from '../../../src/templates/index.ts';

export async function onRequestPost(context: any) {
  try {
    const request = context.request;
    const env = context.env;
    const body = await request.json();
    const { name, email, contact, phone, subject: clientSubject, message } = body;

    const userEmail = email || contact || '';
    if (!userEmail) {
      return new Response(JSON.stringify({ success: false, error: 'Email address is required.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const inquiryId = `PTM-INQ-${Math.floor(10000 + Math.random() * 90000)}`;
    const customerName = name || 'Valued Client';
    const messageSubject = clientSubject ? `Inquiry Received: ${clientSubject} - Phresh Tech Media` : `Inquiry Received #${inquiryId} - Phresh Tech Media`;

    const customerText = `Hello ${customerName},\n\nThank you for reaching out to Phresh Tech Media Services.\n\nInquiry Ref: #${inquiryId}\nSubject: ${clientSubject || 'General Consultation'}\nMessage Details:\n${message || ''}\n\nOur engineering and design directors will review your inquiry and respond within 24 hours.\n\nStay Phresh!\nPhresh Tech Team\nphreshtechmediaservices@gmail.com | Kasenge - Nakawuka Road, Kampala, Uganda`;

    const customerHtml = renderInquiryReceiptTemplate({
      inquiryId,
      name: customerName,
      email: userEmail,
      phone: phone || '',
      organization: 'General Client',
      subject: clientSubject || 'General Consultation & Inquiries',
      message: message || 'No message content provided.'
    });

    // 1. Dispatch confirmation to sender
    const mailResult = await dispatchCloudflareEmail(env, {
      to: userEmail,
      subject: messageSubject,
      textBody: customerText,
      htmlBody: customerHtml,
      replyTo: 'phreshtechmediaservices@gmail.com',
      customerName
    });

    // 2. Dispatch notification to Admin
    const adminSub = `📩 New Inquiry Alert #${inquiryId}: ${clientSubject || customerName}`;
    const adminTxt = `New Inquiry Received!\n\nInquiry ID: #${inquiryId}\nName: ${customerName}\nEmail: ${userEmail}\nPhone: ${phone || 'N/A'}\nSubject: ${clientSubject || 'General Inquiry'}\n\nMessage:\n${message || ''}\n\nClick Reply to email ${userEmail} directly.`;

    const adminHtml = renderAdminInquiryAlertTemplate({
      inquiryId,
      name: customerName,
      email: userEmail,
      phone: phone || '',
      organization: 'Website Inquiry',
      subject: clientSubject || 'General Consultation',
      message: message || 'No message provided.'
    });

    const adminEmail = (env && env.ADMIN_NOTIFICATION_EMAIL) || 'phreshtechmediaservices@gmail.com';
    dispatchCloudflareEmail(env, {
      to: adminEmail,
      subject: adminSub,
      textBody: adminTxt,
      htmlBody: adminHtml,
      replyTo: userEmail,
      customerName
    }).catch(e => console.error('Admin inquiry alert error:', e));

    return new Response(JSON.stringify({
      success: true,
      inquiryId,
      message: `Thank you ${customerName}. Your message has been logged and confirmation was dispatched.`,
      emailDispatchedFrom: 'phreshtechmediaservices@gmail.com',
      provider: mailResult.provider
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error: any) {
    console.error('Contact submission error:', error);
    return new Response(JSON.stringify({
      success: false,
      error: error.message || 'Failed to submit contact message'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
