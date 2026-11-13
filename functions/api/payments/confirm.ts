// Cloudflare Pages Function: /api/payments/confirm
import { dispatchCloudflareEmail } from '../_emailHelper';
import { renderPaymentReceiptTemplate } from '../../../src/templates/index.ts';

export async function onRequestPost(context: any) {
  try {
    const request = context.request;
    const env = context.env;
    const body = await request.json();

    const { reference, gatewayRef, clientName, clientEmail, clientPhone, serviceDescription, amount, currency = "UGX", paymentMethod = "mtn_momo" } = body;

    const paymentId = reference || `PTM-PAY-${Math.floor(100000 + Math.random() * 900000)}`;
    const numAmount = Number(amount || 0);

    const methodLabel = paymentMethod === "mtn_momo" 
      ? "MTN Mobile Money" 
      : paymentMethod === "airtel_money" 
        ? "Airtel Money" 
        : "Visa / Mastercard Card Checkout";

    const customerSubject = `Payment Receipt #${paymentId} - Phresh Tech Media Services`;
    const customerText = `Hello ${clientName || 'Valued Client'},\n\nThank you for your payment to Phresh Tech Media Services.\n\nReceipt Number: ${paymentId}\nService: ${serviceDescription || 'Phresh Tech Media Services'}\nAmount Paid: ${currency} ${numAmount.toLocaleString()}\nMethod: ${methodLabel}\nDate: ${new Date().toLocaleDateString()}\nStatus: PAID\n\nOur team has recorded your payment and work will proceed as agreed.\n\nWarm regards,\nPhresh Tech Media Services\nphreshtechmediaservices@gmail.com | Kampala, Uganda`;

    const receiptHtml = renderPaymentReceiptTemplate({
      paymentRef: paymentId,
      gatewayRef: paymentId,
      clientName: clientName || 'Valued Client',
      clientEmail: clientEmail,
      clientPhone: clientPhone || '',
      serviceDescription: serviceDescription || 'Agreed Phresh Tech Media Services',
      amount: numAmount,
      currency,
      paymentMethod: methodLabel
    });

    // 1. Dispatch Customer Receipt
    await dispatchCloudflareEmail(env, {
      to: clientEmail,
      subject: customerSubject,
      textBody: customerText,
      htmlBody: receiptHtml,
      replyTo: 'phreshtechmediaservices@gmail.com',
      customerName: clientName
    });

    // 2. Dispatch Admin Notification
    const adminEmail = (env && env.ADMIN_NOTIFICATION_EMAIL) || 'phreshtechmediaservices@gmail.com';
    const adminSubject = `Payment Received #${paymentId}: ${currency} ${numAmount.toLocaleString()} - ${clientName}`;
    const adminText = `Payment Confirmation\n\nReceipt: ${paymentId}\nClient: ${clientName} (${clientEmail}, ${clientPhone || 'N/A'})\nService: ${serviceDescription}\nAmount: ${currency} ${numAmount.toLocaleString()}\nMethod: ${methodLabel}\nStatus: PAID`;

    dispatchCloudflareEmail(env, {
      to: adminEmail,
      subject: adminSubject,
      textBody: adminText,
      htmlBody: receiptHtml,
      replyTo: clientEmail,
      customerName: clientName
    }).catch(e => console.error('Admin payment alert error:', e));

    return new Response(JSON.stringify({
      success: true,
      message: `Payment #${paymentId} confirmed! Official itemized receipt email dispatched to ${clientEmail}.`,
      payment: {
        id: paymentId,
        gateway_reference: gatewayRef,
        client_name: clientName,
        client_email: clientEmail,
        amount: numAmount,
        currency,
        status: "COMPLETED"
      }
    }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error: any) {
    console.error("Payment confirmation error:", error);
    return new Response(JSON.stringify({ success: false, error: error.message || "Failed to confirm payment" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
