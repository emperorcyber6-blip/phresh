// Cloudflare Pages Function: /api/orders/place
import { dispatchCloudflareEmail } from '../_emailHelper';
import {
  renderOrderReceiptTemplate,
  renderAdminOrderAlertTemplate
} from '../../../src/templates/index.ts';

export async function onRequestPost(context: any) {
  try {
    const request = context.request;
    const env = context.env;
    const body = await request.json();
    const { user, cartItems, specificDetails, totalUGX } = body;

    if (!user || !user.email) {
      return new Response(JSON.stringify({ success: false, error: 'User email is required to place an order.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    if (!cartItems || !Array.isArray(cartItems) || cartItems.length === 0) {
      return new Response(JSON.stringify({ success: false, error: 'Cart is empty.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const orderId = `PTM-ORD-${Math.floor(10000 + Math.random() * 90000)}`;
    const customerEmail = user.email;
    const customerName = user.name || 'Valued Client';
    const customerPhone = user.phone || 'N/A';
    const customerOrg = user.organization || 'General Client';

    const itemsSummary = cartItems.map((i: any) => `${i.name} (x${i.qty || 1})`).join(', ');
    const itemsListText = cartItems
      .map((item: any) => `- ${item.name} (Qty: ${item.qty || 1}) - UGX ${((item.price || 0) * (item.qty || 1)).toLocaleString()}`)
      .join('\n');

    const customerSubject = `Official Order Receipt & Inquiry Confirmation #${orderId} - Phresh Tech Media`;
    const customerText = `Hello ${customerName},\n\nThank you for placing your order with Phresh Tech Media Services.\n\nOrder Reference: #${orderId}\nItems: ${itemsSummary}\nEstimated Total: UGX ${Number(totalUGX || 0).toLocaleString()}\n${specificDetails ? `Specific Details: ${specificDetails}\n\n` : ''}Our engineering and print press directors are reviewing your order specifications and will contact you shortly.\n\nStay Phresh!\nPhresh Tech Team\nphreshtechmediaservices@gmail.com | Kampala, Uganda`;

    const customerHtml = renderOrderReceiptTemplate({
      orderId,
      customerName,
      customerEmail,
      customerPhone,
      organization: customerOrg,
      items: cartItems.map((i: any) => ({
        id: i.id,
        name: i.name,
        price: Number(i.price || 0),
        qty: Number(i.qty || 1)
      })),
      specificDetails: specificDetails || '',
      totalUGX: totalUGX || 0
    });

    // 1. Dispatch Customer Receipt
    const customerMailResult = await dispatchCloudflareEmail(env, {
      to: customerEmail,
      subject: customerSubject,
      textBody: customerText,
      htmlBody: customerHtml,
      replyTo: 'phreshtechmediaservices@gmail.com',
      customerName
    });

    // 2. Dispatch Admin Notification
    const adminSubject = `📦 New Order Alert #${orderId} - ${customerName} (${customerOrg})`;
    const adminText = `New Order Received!\n\nOrder ID: #${orderId}\nCustomer: ${customerName}\nEmail: ${customerEmail}\nPhone: ${customerPhone}\nOrganization: ${customerOrg}\n\nItems Ordered:\n${itemsListText}\n\nTotal: UGX ${Number(totalUGX || 0).toLocaleString()}\nCustom Requirements:\n${specificDetails || 'None provided'}\n\nReply directly to ${customerEmail}`;

    const adminHtml = renderAdminOrderAlertTemplate({
      orderId,
      customerName,
      customerEmail,
      customerPhone,
      organization: customerOrg,
      items: cartItems.map((i: any) => ({
        id: i.id,
        name: i.name,
        price: Number(i.price || 0),
        qty: Number(i.qty || 1)
      })),
      specificDetails: specificDetails || '',
      totalUGX: totalUGX || 0
    });

    const adminEmail = (env && env.ADMIN_NOTIFICATION_EMAIL) || 'phreshtechmediaservices@gmail.com';
    dispatchCloudflareEmail(env, {
      to: adminEmail,
      subject: adminSubject,
      textBody: adminText,
      htmlBody: adminHtml,
      replyTo: customerEmail,
      customerName
    }).catch(e => console.error('Admin order alert error:', e));

    return new Response(JSON.stringify({
      success: true,
      orderId,
      message: `Order #${orderId} confirmed! Official itemized receipt email dispatched to ${customerEmail}.`,
      provider: customerMailResult.provider,
      dispatchedTo: customerEmail
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error: any) {
    console.error('Order processing error:', error);
    return new Response(JSON.stringify({
      success: false,
      error: error.message || 'Failed to process order'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
