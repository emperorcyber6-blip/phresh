// Cloudflare Pages Function: /api/quote/submit
import { dispatchCloudflareEmail } from '../_emailHelper';
import { renderQuoteReceiptTemplate } from '../../../src/templates/index.ts';

export async function onRequestPost(context: any) {
  try {
    const request = context.request;
    const env = context.env;
    const body = await request.json();
    const { clientName, email, organization, phone, items, totalPriceUGX, selectedPillars, specificRequirements } = body;

    const quoteId = `PTM-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    const recipientEmail = email || 'phreshtechmediaservices@gmail.com';
    const customerName = clientName || 'Valued Client';
    const servicesSummary = Array.isArray(items) ? items.join(', ') : 'Custom Service Order';

    const subject = `Official Project Quote & Estimate #${quoteId} - Phresh Tech Media`;
    const textBody = `Hello ${customerName},\n\nThank you for requesting an estimate proposal from Phresh Tech Media Services.\n\nQuote Reference: #${quoteId}\nScope of Services: ${servicesSummary}\nEstimated Budget: UGX ${Number(totalPriceUGX || 0).toLocaleString()}\n${specificRequirements ? `Specific Requirements: ${specificRequirements}\n\n` : ''}Our technical directors will follow up with you to finalize your project specifications.\n\nStay Phresh!\nPhresh Tech Team\nphreshtechmediaservices@gmail.com | Kampala, Uganda`;

    const htmlBody = renderQuoteReceiptTemplate({
      quoteId,
      clientName: customerName,
      email: recipientEmail,
      phone: phone || '',
      organization: organization || 'Valued Client',
      servicesSummary,
      selectedPillars: Array.isArray(selectedPillars) ? selectedPillars : [],
      totalPriceUGX: Number(totalPriceUGX || 0),
      specificRequirements: specificRequirements || ''
    });

    const mailResult = await dispatchCloudflareEmail(env, {
      to: recipientEmail,
      subject,
      textBody,
      htmlBody,
      replyTo: 'phreshtechmediaservices@gmail.com',
      customerName
    });

    return new Response(JSON.stringify({
      success: true,
      quoteId,
      message: `Quote #${quoteId} prepared and dispatched.`,
      provider: mailResult.provider
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error: any) {
    console.error('Quote error:', error);
    return new Response(JSON.stringify({
      success: false,
      error: error.message || 'Failed to submit quote'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
