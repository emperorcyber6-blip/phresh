// Cloudflare Pages Function: /api/payments/status/:ref
import { dispatchCloudflareEmail } from '../../_emailHelper';
import { renderPaymentReceiptTemplate } from '../../../../src/templates/index.ts';

export async function onRequestGet(context: any) {
  try {
    const request = context.request;
    const env = context.env || {};
    const url = new URL(request.url);
    const ref = decodeURIComponent((context.params && context.params.ref) || url.pathname.split("/").pop() || "");

    if (!ref) {
      return new Response(JSON.stringify({ success: false, error: "Payment reference is missing." }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }

    const apiKey = String(env.HIVEPAY_API_KEY || "ph_4MGP50Ghc7ws0SanNo1D4ID5wfoeXhad").trim();
    const apiSecret = String(env.HIVEPAY_API_SECRET || "zW5FTfCSeWV7ePMrDcVzNNSthP30u1dXCa0uImSjPIrHf0PVTNaF3M6rymgFeO22").trim();
    const accountNumber = String(env.HIVEPAY_ACCOUNT_NUMBER || "HP2610222987").trim();

    const headers: Record<string, string> = {
      "X-API-Key": apiKey,
      "Accept": "application/json"
    };
    if (apiSecret) headers["X-API-Secret"] = apiSecret;
    if (accountNumber) headers["X-Account-Number"] = accountNumber;

    const checkRes = await fetch(`https://hivepay.site/api/v1/transaction-status?reference=${encodeURIComponent(ref)}`, {
      headers
    });

    if (!checkRes.ok) {
      return new Response(JSON.stringify({ success: false, error: "Payment record not found." }), {
        status: 404,
        headers: { "Content-Type": "application/json" }
      });
    }

    const checkData: any = await checkRes.json();
    const rawStatus = String(checkData.status || "").toLowerCase();

    let status: "PENDING" | "COMPLETED" | "FAILED" = "PENDING";
    let failureReason: string | null = null;

    if (["success", "completed", "approved", "successful", "paid"].includes(rawStatus)) {
      status = "COMPLETED";
    } else if (["failed", "cancelled", "canceled", "rejected", "expired", "timeout", "declined"].includes(rawStatus)) {
      status = "FAILED";
      failureReason = rawStatus === "cancelled" || rawStatus === "canceled"
        ? "The Mobile Money prompt was cancelled on your phone."
        : rawStatus === "expired" || rawStatus === "timeout"
          ? "The Mobile Money prompt timed out before PIN confirmation."
          : "Payment was not completed on your phone. Please check your PIN or Mobile Money balance and try again.";
    }

    const clientName = url.searchParams.get("name") || "Valued Client";
    const clientEmail = url.searchParams.get("email") || "phreshtechmediaservices@gmail.com";
    const serviceDescription = url.searchParams.get("desc") || "Agreed Phresh Tech Media Services";
    const amount = Number(checkData.amount || 0);
    const currency = checkData.currency || "UGX";
    const paymentMethod = String(checkData.network || "").toUpperCase().includes("AIRTEL") ? "airtel_money" : "mtn_momo";
    const methodLabel = paymentMethod === "airtel_money" ? "Airtel Money" : "MTN Mobile Money";

    if (status === "COMPLETED" && clientEmail) {
      const receiptHtml = renderPaymentReceiptTemplate({
        paymentRef: checkData.reference || ref,
        gatewayRef: checkData.reference || ref,
        clientName,
        clientEmail,
        clientPhone: checkData.phone_number || "",
        serviceDescription,
        amount,
        currency,
        paymentMethod: methodLabel
      });

      const textBody = `Hello ${clientName},\n\nThank you for your payment to Phresh Tech Media Services.\n\nReceipt Number: ${checkData.reference || ref}\nService: ${serviceDescription}\nAmount Paid: ${currency} ${amount.toLocaleString()}\nMethod: ${methodLabel}\nStatus: PAID\n\nWarm regards,\nPhresh Tech Media Services`;

      try {
        await dispatchCloudflareEmail(env, {
          to: clientEmail,
          subject: `Payment Receipt #${checkData.reference || ref} - Phresh Tech Media Services`,
          textBody,
          htmlBody: receiptHtml,
          replyTo: "phreshtechmediaservices@gmail.com",
          customerName: clientName
        });
      } catch {
        // ignore email send error on edge
      }
    }

    return new Response(JSON.stringify({
      success: true,
      status,
      failure_reason: failureReason,
      payment: {
        id: checkData.reference || ref,
        confirmation_code: checkData.reference || ref,
        client_name: clientName,
        client_email: clientEmail,
        client_phone: checkData.phone_number || "",
        service_description: serviceDescription,
        amount,
        currency,
        payment_method: paymentMethod,
        status,
        failure_reason: failureReason,
        created_at: checkData.created_at || new Date().toISOString()
      }
    }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error: any) {
    return new Response(JSON.stringify({ success: false, error: "Could not check payment status." }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
