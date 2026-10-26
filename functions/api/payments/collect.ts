// Cloudflare Pages Function: /api/payments/collect
import { dispatchCloudflareEmail } from '../_emailHelper';
import { renderPaymentReceiptTemplate } from '../../../src/templates/index.ts';

export async function onRequestPost(context: any) {
  try {
    const request = context.request;
    const env = context.env;
    const body = await request.json();

    const { name, email, phone, amount, currency = "UGX", description, paymentMethod = "mtn_momo", reference } = body;

    if (!name || !email) {
      return new Response(JSON.stringify({ success: false, error: "Client name and email address are required." }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }

    const numAmount = Number(amount);
    if (isNaN(numAmount) || numAmount <= 0) {
      return new Response(JSON.stringify({ success: false, error: "Please enter a valid payment amount." }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }

    if (currency === "UGX" && numAmount < 1000) {
      return new Response(JSON.stringify({ success: false, error: "Minimum payment amount is UGX 1,000." }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }

    const paymentRef = reference || `PTM-PAY-${Math.floor(100000 + Math.random() * 900000)}`;
    const cleanPhone = (phone || "").replace(/\s+/g, "");

    let gatewayRef = `HP-GW-${Date.now()}`;
    let isLiveHivePay = false;

    // Check HivePay production/live API key
    const hiveApiKey = (env && env.HIVEPAY_API_KEY) || (typeof process !== "undefined" ? process.env?.HIVEPAY_API_KEY : "");
    if (hiveApiKey && paymentMethod !== "card") {
      try {
        const response = await fetch("https://hivepay.site/api/v1/collect-money", {
          method: "POST",
          headers: {
            "X-API-Key": hiveApiKey.trim(),
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            phone_number: cleanPhone,
            amount: numAmount,
            description: `${description ? description.slice(0, 40) : 'Service Payment'} - ${name}`,
            reference: paymentRef
          })
        });
        const hiveData: any = await response.json();
        if (response.ok && (hiveData.gateway_reference || hiveData.reference)) {
          gatewayRef = hiveData.gateway_reference || hiveData.reference;
          isLiveHivePay = true;
          console.log(`[HIVEPAY USSD SENT] Ref: ${gatewayRef} for ${cleanPhone}`);
        }
      } catch (err: any) {
        console.error("[HIVEPAY EDGE ERROR]", err.message);
      }
    }

    const paymentRecord = {
      id: paymentRef,
      gateway_reference: gatewayRef,
      client_name: name,
      client_email: email,
      client_phone: cleanPhone,
      service_description: description || "Agreed Phresh Tech Media Services & System Consultation",
      amount: numAmount,
      currency,
      payment_method: paymentMethod,
      status: "PENDING",
      created_at: new Date().toISOString()
    };

    return new Response(JSON.stringify({
      success: true,
      paymentRef,
      gatewayRef,
      mode: isLiveHivePay ? "live_hivepay" : "sandbox",
      instructions: paymentMethod === "card"
        ? "Please enter your card details to complete payment."
        : `USSD Push prompt sent to ${cleanPhone || 'your mobile phone'}. Please check your phone and enter your Mobile Money PIN to approve payment of ${currency} ${numAmount.toLocaleString()}.`,
      payment: paymentRecord
    }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error: any) {
    console.error("Payment error:", error);
    return new Response(JSON.stringify({ success: false, error: error.message || "Failed to initiate payment" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
