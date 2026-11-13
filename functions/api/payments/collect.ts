// Cloudflare Pages Function: /api/payments/collect
function normalizeUgPhone(rawPhone: string): string {
  const digits = String(rawPhone || "").replace(/[^\d+]/g, "");
  if (digits.startsWith("+256") && digits.length >= 13) {
    return "0" + digits.slice(4);
  }
  if (digits.startsWith("256") && digits.length >= 12) {
    return "0" + digits.slice(3);
  }
  if (/^7\d{8}$/.test(digits)) {
    return "0" + digits;
  }
  return digits.replace(/^\+/, "");
}

async function computeHmacSha256Hex(secret: string, message: string): Promise<string> {
  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    enc.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const sig = await crypto.subtle.sign("HMAC", key, enc.encode(message));
  return Array.from(new Uint8Array(sig))
    .map(b => b.toString(16).padStart(2, "0"))
    .join("");
}

export async function onRequestPost(context: any) {
  try {
    const request = context.request;
    const env = context.env || {};
    const body = await request.json();

    const { name: rawName, clientName, email: rawEmail, clientEmail, phone, amount, currency = "UGX", description, paymentMethod = "mtn_momo", reference } = body;
    const name = (rawName || clientName || "").trim();
    const email = (rawEmail || clientEmail || "").trim();

    if (!name || !email) {
      return new Response(JSON.stringify({ success: false, error: "Please enter your name and email address." }), {
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

    if (currency === "UGX" && numAmount < 500) {
      return new Response(JSON.stringify({ success: false, error: "Minimum Mobile Money payment is UGX 500." }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }

    if (paymentMethod === "card") {
      return new Response(JSON.stringify({
        success: false,
        error: "Direct bank card checkout is arranged through our office desk. Please choose MTN MoMo or Airtel Money, or call +256 741 145595."
      }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }

    const cleanPhone = normalizeUgPhone(phone || "");
    if (!/^07\d{8}$/.test(cleanPhone)) {
      return new Response(JSON.stringify({
        success: false,
        error: "Please enter a valid 10-digit Ugandan phone number starting with 07 (for example 0777 123 456 or 0747 311 209)."
      }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }

    const paymentRef = reference || `PTM-PAY-${Date.now().toString().slice(-6)}-${Math.floor(100 + Math.random() * 900)}`;

    const apiKey = String(env.HIVEPAY_API_KEY || "ph_4MGP50Ghc7ws0SanNo1D4ID5wfoeXhad").trim();
    const apiSecret = String(env.HIVEPAY_API_SECRET || "zW5FTfCSeWV7ePMrDcVzNNSthP30u1dXCa0uImSjPIrHf0PVTNaF3M6rymgFeO22").trim();
    const accountNumber = String(env.HIVEPAY_ACCOUNT_NUMBER || "HP2610222987").trim();

    const payload = JSON.stringify({
      amount: Math.round(numAmount),
      description: `${description ? description.slice(0, 40) : "Service Payment"} - ${name}`,
      reference: paymentRef,
      phone_number: cleanPhone
    });

    const headers: Record<string, string> = {
      "X-API-Key": apiKey,
      "Content-Type": "application/json",
      "Accept": "application/json"
    };
    if (apiSecret) {
      headers["X-API-Secret"] = apiSecret;
      headers["X-Signature"] = await computeHmacSha256Hex(apiSecret, payload);
    }
    if (accountNumber) {
      headers["X-Account-Number"] = accountNumber;
    }

    const response = await fetch("https://hivepay.site/api/v1/collect-money", {
      method: "POST",
      headers,
      body: payload
    });

    const rawText = await response.text();
    let hiveData: any = {};
    try {
      hiveData = JSON.parse(rawText);
    } catch {
      hiveData = { message: rawText };
    }

    if (!response.ok || hiveData.success === false || !(hiveData.gateway_reference || hiveData.reference || hiveData.checkout_url)) {
      const rawErr = hiveData.message || hiveData.error || "";
      const friendlyError = rawErr && !/hivepay/i.test(rawErr)
        ? rawErr
        : "Could not send the Mobile Money prompt to that number. Please double-check the number and try again.";
      return new Response(JSON.stringify({ success: false, error: friendlyError }), {
        status: response.status >= 400 && response.status < 500 ? response.status : 502,
        headers: { "Content-Type": "application/json" }
      });
    }

    return new Response(JSON.stringify({
      success: true,
      paymentRef,
      mode: "live",
      instructions: `Check your phone (${cleanPhone}) and enter your Mobile Money PIN to approve ${currency} ${numAmount.toLocaleString()}.`,
      payment: {
        id: paymentRef,
        confirmation_code: paymentRef,
        client_name: name,
        client_email: email,
        client_phone: cleanPhone,
        service_description: description || "Agreed Phresh Tech Media Services",
        amount: numAmount,
        currency,
        payment_method: paymentMethod,
        status: "PENDING",
        created_at: new Date().toISOString()
      }
    }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error: any) {
    return new Response(JSON.stringify({ success: false, error: "Could not reach Mobile Money right now. Please try again." }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
