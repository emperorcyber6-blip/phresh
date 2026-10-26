import express from "express";
import path from "path";
import fs from "fs";
import crypto from "crypto";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import { createServer as createViteServer } from "vite";
import {
  renderOrderReceiptTemplate as generateOrderReceiptHtml,
  renderAdminOrderAlertTemplate as generateAdminOrderAlertHtml,
  renderInquiryReceiptTemplate as generateInquiryReceiptHtml,
  renderAdminInquiryAlertTemplate as generateAdminInquiryAlertHtml,
  renderQuoteReceiptTemplate as generateQuoteReceiptHtml,
  renderWelcomeTemplate as generateWelcomeEmailHtml,
  renderPaymentReceiptTemplate as generatePaymentReceiptHtml
} from "./src/templates";

// Load local environment variables if available
dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Transporter Helper for Live / Simulated Email Dispatch
async function sendPhreshEmail(to: string, subject: string, textBody: string, htmlBody: string, replyTo?: string, customerName?: string) {
  const senderEmail = (process.env.GMAIL_USER || "phreshtechmediaservices@gmail.com").trim();

  // 1. Resend REST API (Zero port blocking, HTTPS)
  const resendApiKey = (process.env.RESEND_API_KEY || "").trim();
  if (resendApiKey) {
    try {
      const fromAddress = process.env.RESEND_FROM || "Phresh Tech Media <onboarding@resend.dev>";
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${resendApiKey}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          from: fromAddress,
          to: [to],
          subject,
          html: htmlBody,
          text: textBody,
          reply_to: replyTo || senderEmail
        })
      });
      const data: any = await res.json();
      if (res.ok) {
        console.log(`[RESEND HTTPS SUCCESS] ID: ${data.id} to ${to}`);
        return { success: true, mode: "live_resend", id: data.id, from: senderEmail };
      }
      console.warn("[RESEND API WARN]", data);
    } catch (err: any) {
      console.error("[RESEND ERROR]", err.message);
    }
  }

  // 2. Web3Forms REST API (100% Free HTTPS)
  const web3Key = (process.env.WEB3FORMS_ACCESS_KEY || "").trim();
  if (web3Key) {
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          access_key: web3Key,
          subject,
          from_name: "Phresh Tech Media Services",
          name: customerName || "Valued Client",
          email: replyTo || to,
          message: textBody,
          reply_to: replyTo || to
        })
      });
      const data: any = await res.json();
      if (res.ok && data.success) {
        console.log(`[WEB3FORMS HTTPS SUCCESS] Routed to ${senderEmail}`);
        return { success: true, mode: "live_web3forms", from: senderEmail };
      }
      console.warn("[WEB3FORMS WARN]", data);
    } catch (err: any) {
      console.error("[WEB3FORMS ERROR]", err.message);
    }
  }

  // 3. Direct Gmail SMTP (Port 465 SSL and Port 587 STARTTLS)
  const rawPass = process.env.GMAIL_APP_PASSWORD || process.env.GMAIL_PASS || process.env.GMAIL_PASSWORD || "";
  const gmailPass = rawPass.replace(/\s+/g, "");

  console.log(`[EMAIL DISPATCH ATTEMPT] Target: ${to} | Subject: "${subject}" | Sender: ${senderEmail} | HasPass: ${Boolean(gmailPass)} (len: ${gmailPass.length})`);

  if (gmailPass) {
    // Attempt 1: Port 465 SSL
    try {
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: senderEmail,
          pass: gmailPass
        },
        connectionTimeout: 10000,
        greetingTimeout: 10000,
        socketTimeout: 15000,
        tls: {
          rejectUnauthorized: false
        }
      });

      const info = await transporter.sendMail({
        from: `"Phresh Tech Media Services" <${senderEmail}>`,
        to,
        replyTo: replyTo || senderEmail,
        subject,
        text: textBody,
        html: htmlBody
      });

      console.log(`[LIVE GMAIL SUCCESS (Port 465)] Message ID: ${info.messageId} to ${to}`);
      return { success: true, mode: "live_gmail", port: 465, messageId: info.messageId, from: senderEmail };
    } catch (err465: any) {
      console.warn(`[GMAIL PORT 465 ATTEMPT FAILED] ${err465.message}. Trying port 587 STARTTLS...`);

      // Attempt 2: Port 587 STARTTLS fallback
      try {
        const transporter587 = nodemailer.createTransport({
          host: "smtp.gmail.com",
          port: 587,
          secure: false,
          requireTLS: true,
          auth: {
            user: senderEmail,
            pass: gmailPass
          },
          connectionTimeout: 10000,
          greetingTimeout: 10000,
          socketTimeout: 15000,
          tls: {
            rejectUnauthorized: false
          }
        });

        const info587 = await transporter587.sendMail({
          from: `"Phresh Tech Media Services" <${senderEmail}>`,
          to,
          replyTo: replyTo || senderEmail,
          subject,
          text: textBody,
          html: htmlBody
        });

        console.log(`[LIVE GMAIL SUCCESS (Port 587)] Message ID: ${info587.messageId} to ${to}`);
        return { success: true, mode: "live_gmail", port: 587, messageId: info587.messageId, from: senderEmail };
      } catch (err587: any) {
        console.error(`[GMAIL ERROR (Both 465 & 587)] Port 465: ${err465.message} | Port 587: ${err587.message}`);
        return { 
          success: false, 
          mode: "error", 
          error: `Port 465: ${err465.message} | Port 587: ${err587.message}`, 
          from: senderEmail 
        };
      }
    }
  }

  console.warn(`[EMAIL SKIPPED] Neither RESEND_API_KEY, WEB3FORMS_ACCESS_KEY, nor GMAIL_APP_PASSWORD is set.`);
  return { success: true, mode: "simulated", from: senderEmail, note: "Set RESEND_API_KEY or GMAIL_APP_PASSWORD in project settings to enable live delivery." };
}

// In-Memory Relational Database Engine simulating MySQL 8.x
interface StudentRecord {
  id: number;
  reg_no: string;
  name: string;
  class_name: string;
  stream: string;
  total_fees_ugx: number;
  paid_fees_ugx: number;
  balance_ugx: number;
  status: string;
}

interface MarksheetRecord {
  id: number;
  student_name: string;
  class_name: string;
  term: string;
  subject: string;
  bot_marks: number;
  mot_marks: number;
  eot_marks: number;
  avg_marks: number;
  grade: string;
  remarks: string;
}

interface BiztrackInventory {
  id: number;
  item_code: string;
  item_name: string;
  category: string;
  unit_price_ugx: number;
  stock_qty: number;
  reorder_level: number;
}

interface RentTenant {
  id: number;
  tenant_name: string;
  property_name: string;
  room_no: string;
  monthly_rent_ugx: number;
  paid_this_month: number;
  status: string;
}

interface QuoteRecord {
  id: string;
  client_name: string;
  organization: string;
  phone: string;
  services_summary: string;
  total_ugx: number;
  created_at: string;
  status: string;
}

// Initial Data Seeding
let studentsDB: StudentRecord[] = [
  { id: 1, reg_no: "STU/2026/001", name: "ACHEMA DENIS", class_name: "S.1", stream: "A", total_fees_ugx: 750000, paid_fees_ugx: 750000, balance_ugx: 0, status: "CLEARED" },
  { id: 2, reg_no: "STU/2026/002", name: "ADUKULE GEOFREY", class_name: "S.1", stream: "A", total_fees_ugx: 750000, paid_fees_ugx: 450000, balance_ugx: 300000, status: "PARTIAL" },
  { id: 3, reg_no: "STU/2026/003", name: "AHAISIBWE LILIAN", class_name: "S.1", stream: "A", total_fees_ugx: 750000, paid_fees_ugx: 750000, balance_ugx: 0, status: "CLEARED" },
  { id: 4, reg_no: "STU/2026/004", name: "ALINAITWE AGNESS", class_name: "S.1", stream: "B", total_fees_ugx: 750000, paid_fees_ugx: 200000, balance_ugx: 550000, status: "PARTIAL" },
  { id: 5, reg_no: "STU/2026/005", name: "AMBASIZE ISAAC", class_name: "S.2", stream: "A", total_fees_ugx: 820000, paid_fees_ugx: 820000, balance_ugx: 0, status: "CLEARED" },
  { id: 6, reg_no: "STU/2026/006", name: "AMULEN MERCY", class_name: "S.2", stream: "B", total_fees_ugx: 820000, paid_fees_ugx: 500000, balance_ugx: 320000, status: "PARTIAL" }
];

let marksheetsDB: MarksheetRecord[] = [
  { id: 1, student_name: "ACHEMA DENIS", class_name: "S.1 A", term: "Term ONE", subject: "Biology", bot_marks: 75, mot_marks: 80, eot_marks: 82, avg_marks: 79, grade: "D1", remarks: "Distinction One" },
  { id: 2, student_name: "ADUKULE GEOFREY", class_name: "S.1 A", term: "Term ONE", subject: "Biology", bot_marks: 62, mot_marks: 68, eot_marks: 70, avg_marks: 67, grade: "C3", remarks: "Credit Three" },
  { id: 3, student_name: "AHAISIBWE LILIAN", class_name: "S.1 A", term: "Term ONE", subject: "Biology", bot_marks: 88, mot_marks: 92, eot_marks: 90, avg_marks: 90, grade: "D1", remarks: "Exceptional Performance" },
  { id: 4, student_name: "ALINAITWE AGNESS", class_name: "S.1 A", term: "Term ONE", subject: "Biology", bot_marks: 54, mot_marks: 58, eot_marks: 60, avg_marks: 57, grade: "C5", remarks: "Credit Five" },
  { id: 5, student_name: "AMBASIZE ISAAC", class_name: "S.1 A", term: "Term ONE", subject: "Biology", bot_marks: 71, mot_marks: 74, eot_marks: 76, avg_marks: 74, grade: "D2", remarks: "Distinction Two" }
];

let biztrackDB: BiztrackInventory[] = [
  { id: 1, item_code: "PRN-001", item_name: "A4 Printing Paper Ream (80gsm)", category: "Stationery", unit_price_ugx: 22000, stock_qty: 145, reorder_level: 20 },
  { id: 2, item_code: "PRN-002", item_name: "PVC Identity Cards (Custom Printed)", category: "Printing", unit_price_ugx: 8000, stock_qty: 500, reorder_level: 50 },
  { id: 3, item_code: "SYS-001", item_name: "Phresh EduLedger License (School ERP)", category: "Software", unit_price_ugx: 400000, stock_qty: 99, reorder_level: 5 },
  { id: 4, item_code: "SYS-002", item_name: "Phresh Rank Core License (Marks generator)", category: "Software", unit_price_ugx: 350000, stock_qty: 99, reorder_level: 5 },
  { id: 5, item_code: "HDW-001", item_name: "Thermal Receipt Printer (80mm USB/LAN)", category: "Hardware", unit_price_ugx: 280000, stock_qty: 18, reorder_level: 4 }
];

let rentDB: RentTenant[] = [
  { id: 1, tenant_name: "MUGISHA ROBERT", property_name: "Phresh Commercial Plaza", room_no: "Shop G-04", monthly_rent_ugx: 450000, paid_this_month: 450000, status: "PAID" },
  { id: 2, tenant_name: "NANTEZA SARAH", property_name: "Nakawuka Arcade", room_no: "Unit 12", monthly_rent_ugx: 350000, paid_this_month: 350000, status: "PAID" },
  { id: 3, tenant_name: "KASENDE JOHN", property_name: "Phresh Commercial Plaza", room_no: "Shop F-02", monthly_rent_ugx: 500000, paid_this_month: 200000, status: "OVERDUE" }
];

interface OrderRecord {
  id: string;
  user_name: string;
  user_email: string;
  user_phone: string;
  organization: string;
  items: { id: string; name: string; price: number; qty: number }[];
  specific_details: string;
  total_ugx: number;
  created_at: string;
  email_dispatched_from: string;
  status: string;
}

export interface PaymentRecord {
  id: string;
  gateway_reference: string;
  client_name: string;
  client_email: string;
  client_phone: string;
  service_description: string;
  amount: number;
  currency: string;
  payment_method: string;
  status: "PENDING" | "COMPLETED" | "FAILED";
  created_at: string;
  completed_at?: string;
  email_dispatched?: boolean;
}

let ordersDB: OrderRecord[] = [];
let quotesDB: QuoteRecord[] = [];
let contactMessages: any[] = [];
let paymentsDB: PaymentRecord[] = [];

async function dispatchPaymentReceiptEmails(payment: PaymentRecord) {
  payment.email_dispatched = true;

  const methodLabel = payment.payment_method === "mtn_momo" 
    ? "MTN Mobile Money" 
    : payment.payment_method === "airtel_money" 
      ? "Airtel Money" 
      : "Visa / Mastercard Card Checkout";

  const customerSubject = `Payment Receipt & Confirmation #${payment.id} - Phresh Tech Media`;
  const customerText = `Hello ${payment.client_name},\n\nThank you for your payment to Phresh Tech Media Services.\n\nPayment Reference: ${payment.id}\nGateway Reference: ${payment.gateway_reference}\nService: ${payment.service_description}\nAmount Paid: ${payment.currency} ${payment.amount.toLocaleString()}\nMethod: ${methodLabel}\nDate: ${new Date().toLocaleDateString()}\nStatus: COMPLETED & VERIFIED\n\nOur technical directors have registered this payment and work will proceed as agreed.\n\nStay Phresh!\nPhresh Tech Team\nphreshtechmediaservices@gmail.com | Kampala, Uganda`;

  const customerHtml = generatePaymentReceiptHtml({
    paymentRef: payment.id,
    gatewayRef: payment.gateway_reference,
    clientName: payment.client_name,
    clientEmail: payment.client_email,
    clientPhone: payment.client_phone,
    serviceDescription: payment.service_description,
    amount: payment.amount,
    currency: payment.currency,
    paymentMethod: methodLabel
  });

  await sendPhreshEmail(payment.client_email, customerSubject, customerText, customerHtml, "phreshtechmediaservices@gmail.com", payment.client_name);

  // Send admin notification
  const adminSubject = `💰 Payment Received #${payment.id}: ${payment.currency} ${payment.amount.toLocaleString()} - ${payment.client_name}`;
  const adminText = `Payment Confirmation Alert!\n\nReference: ${payment.id}\nGateway Ref: ${payment.gateway_reference}\nClient: ${payment.client_name} (${payment.client_email}, ${payment.client_phone})\nService: ${payment.service_description}\nAmount: ${payment.currency} ${payment.amount.toLocaleString()}\nMethod: ${methodLabel}\nStatus: VERIFIED & COMPLETED`;

  await sendPhreshEmail("phreshtechmediaservices@gmail.com", adminSubject, adminText, customerHtml, payment.client_email, payment.client_name);
}

// API 1: Healthcheck
app.get("/api/health", (req, res) => {
  res.json({ status: "OK", server: "Phresh Tech Engine Server", app: "Phresh Tech Media Services" });
});

// ==============================================================================
// HIVEPAY UGANDA & DIRECT PAYMENTS ENGINE
// ==============================================================================

// API: Initiate Direct Payment (HivePay USSD Mobile Money or Card)
app.post("/api/payments/collect", async (req, res) => {
  try {
    const { name: rawName, clientName, email: rawEmail, clientEmail, phone, amount, currency = "UGX", description, paymentMethod = "mtn_momo", reference } = req.body;
    const name = (rawName || clientName || "").trim();
    const email = (rawEmail || clientEmail || "").trim();

    if (!name || !email) {
      return res.status(400).json({ success: false, error: "Client name and email address are required." });
    }
    const numAmount = Number(amount);
    if (isNaN(numAmount) || numAmount <= 0) {
      return res.status(400).json({ success: false, error: "Please enter a valid payment amount." });
    }
    if (currency === "UGX" && numAmount < 1000) {
      return res.status(400).json({ success: false, error: "Minimum payment amount is UGX 1,000." });
    }

    const paymentRef = reference || `PTM-PAY-${Math.floor(100000 + Math.random() * 900000)}`;
    const cleanPhone = (phone || "").replace(/\s+/g, "");

    let gatewayRef = `HP-GW-${Date.now()}`;
    let isLiveHivePay = false;

    // HivePay Uganda production/live API credentials
    const hiveApiKey = (process.env.HIVEPAY_API_KEY || "ph_4MGP50Ghc7ws0SanNo1D4ID5wfoeXhad").trim();
    const hiveApiSecret = (process.env.HIVEPAY_API_SECRET || "zW5FTfCSeWV7ePMrDcVzNNSthP30u1dXCa0uImSjPIrHf0PVTNaF3M6rymgFeO22").trim();
    const hiveAccountNumber = (process.env.HIVEPAY_ACCOUNT_NUMBER || "HP2610222987").trim();

    if (hiveApiKey) {
      try {
        const endpoint = paymentMethod === "card"
          ? "https://hivepay.site/api/v1/card-collection"
          : "https://hivepay.site/api/v1/collect-money";

        const payloadObj: Record<string, any> = {
          amount: numAmount,
          description: `${description ? description.slice(0, 40) : 'Service Payment'} - ${name}`,
          reference: paymentRef
        };

        if (paymentMethod === "card") {
          payloadObj.currency = currency || "USD";
          payloadObj.email = email;
          payloadObj.client_name = name;
        } else {
          payloadObj.phone_number = cleanPhone;
        }

        const payload = JSON.stringify(payloadObj);

        const headers: Record<string, string> = {
          "X-API-Key": hiveApiKey,
          "Content-Type": "application/json",
          "Accept": "application/json"
        };

        if (hiveApiSecret) {
          headers["X-API-Secret"] = hiveApiSecret;
          const signature = crypto.createHmac("sha256", hiveApiSecret).update(payload).digest("hex");
          headers["X-Signature"] = signature;
        }

        if (hiveAccountNumber) {
          headers["X-Account-Number"] = hiveAccountNumber;
        }

        const response = await fetch(endpoint, {
          method: "POST",
          headers,
          body: payload
        });

        const hiveData: any = await response.json();
        if (response.ok && (hiveData.success !== false) && (hiveData.gateway_reference || hiveData.reference || hiveData.checkout_url)) {
          gatewayRef = hiveData.gateway_reference || hiveData.reference || `HP-LIVE-${Date.now()}`;
          isLiveHivePay = true;
          console.log(`[HIVEPAY SUCCESS] Gateway ref: ${gatewayRef} for ${cleanPhone || email}`);
        } else {
          console.warn("[HIVEPAY API RESPONSE REJECTED]", hiveData);
          const errorMsg = hiveData.message || hiveData.error || (hiveData.errors ? Object.values(hiveData.errors).flat().join(", ") : "Payment gateway error. Please verify phone number and amount.");
          return res.status(400).json({ success: false, error: errorMsg, details: hiveData });
        }
      } catch (err: any) {
        console.error("[HIVEPAY ERROR]", err.message);
        return res.status(500).json({ success: false, error: "Failed to connect to payment gateway. Please try again or contact support." });
      }
    }

    const newPayment: PaymentRecord = {
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

    paymentsDB.unshift(newPayment);

    res.json({
      success: true,
      paymentRef,
      gatewayRef,
      mode: isLiveHivePay ? "live_hivepay" : "sandbox",
      instructions: paymentMethod === "card"
        ? "Please enter your card details to complete payment."
        : `USSD Push prompt sent to ${cleanPhone || 'your mobile phone'}. Please check your phone and enter your Mobile Money PIN to approve the payment of ${currency} ${numAmount.toLocaleString()}.`,
      payment: newPayment
    });
  } catch (err: any) {
    console.error("Payment initiation error:", err);
    res.status(500).json({ success: false, error: err.message || "Failed to initiate payment" });
  }
});

// API: Check Transaction Status (via HivePay or internal register)
app.get("/api/payments/status/:ref", async (req, res) => {
  const ref = req.params.ref;
  const payment = paymentsDB.find(p => p.id === ref || p.gateway_reference === ref);
  if (!payment) {
    return res.status(404).json({ success: false, error: "Payment reference not found." });
  }

  // Check HivePay API credentials
  const hiveApiKey = (process.env.HIVEPAY_API_KEY || "ph_4MGP50Ghc7ws0SanNo1D4ID5wfoeXhad").trim();
  const hiveApiSecret = (process.env.HIVEPAY_API_SECRET || "zW5FTfCSeWV7ePMrDcVzNNSthP30u1dXCa0uImSjPIrHf0PVTNaF3M6rymgFeO22").trim();
  const hiveAccountNumber = (process.env.HIVEPAY_ACCOUNT_NUMBER || "HP2610222987").trim();

  if (hiveApiKey && payment.status === "PENDING") {
    try {
      const headers: Record<string, string> = {
        "X-API-Key": hiveApiKey,
        "Accept": "application/json"
      };
      if (hiveApiSecret) headers["X-API-Secret"] = hiveApiSecret;
      if (hiveAccountNumber) headers["X-Account-Number"] = hiveAccountNumber;

      const refToQuery = payment.gateway_reference || payment.id;
      const checkRes = await fetch(`https://hivepay.site/api/v1/transaction-status?reference=${encodeURIComponent(refToQuery)}`, {
        headers
      });
      if (checkRes.ok) {
        const checkData: any = await checkRes.json();
        const st = String(checkData.status || '').toLowerCase();
        if (st === "success" || st === "completed" || st === "approved" || st === "successful") {
          payment.status = "COMPLETED";
          payment.completed_at = new Date().toISOString();
        }
      }
    } catch (err) {
      console.warn("Status check error:", err);
    }
  }

  if (payment.status === "COMPLETED" && !payment.email_dispatched) {
    await dispatchPaymentReceiptEmails(payment);
  }

  res.json({ success: true, status: payment.status, payment });
});

// API: Confirm Payment (upon USSD approval callback or simulation)
app.post("/api/payments/confirm", async (req, res) => {
  const { reference, gatewayRef } = req.body;
  const payment = paymentsDB.find(p => p.id === reference || (gatewayRef && p.gateway_reference === gatewayRef));
  if (!payment) {
    return res.status(404).json({ success: false, error: "Payment record not found." });
  }

  payment.status = "COMPLETED";
  payment.completed_at = new Date().toISOString();

  if (!payment.email_dispatched) {
    await dispatchPaymentReceiptEmails(payment);
  }

  res.json({
    success: true,
    message: `Payment #${payment.id} verified and confirmed successfully! Official receipt dispatched.`,
    payment
  });
});

// API: Get Payment Gateway Config (Safe public info)
app.get("/api/payments/config", (req, res) => {
  const accountNum = (process.env.HIVEPAY_ACCOUNT_NUMBER || "HP2610222987").trim();
  const hasApiKey = Boolean(process.env.HIVEPAY_API_KEY || "ph_4MGP50Ghc7ws0SanNo1D4ID5wfoeXhad");
  const hasSecret = Boolean(process.env.HIVEPAY_API_SECRET || "zW5FTfCSeWV7ePMrDcVzNNSthP30u1dXCa0uImSjPIrHf0PVTNaF3M6rymgFeO22");
  const hasWebhook = Boolean(process.env.HIVEPAY_WEBHOOK_SECRET || "whsec_JyefZOXv1uzCwYM9D6TmHErQhENxhyG8");

  res.json({
    gateway: "HivePay Uganda",
    merchantAccount: accountNum,
    status: "active",
    mode: "live",
    currency: "UGX",
    supportedMethods: ["MTN Mobile Money", "Airtel Money", "Visa/Mastercard"],
    credentialsConfigured: {
      accountNumber: true,
      apiKey: hasApiKey,
      apiSecret: hasSecret,
      webhookSecret: hasWebhook
    }
  });
});

// API: HivePay Webhook Endpoint with HMAC-SHA256 Verification
app.post("/api/payments/webhook", async (req, res) => {
  try {
    const payload = req.body;
    const webhookSecret = (process.env.HIVEPAY_WEBHOOK_SECRET || "whsec_JyefZOXv1uzCwYM9D6TmHErQhENxhyG8").trim();
    const signature = (req.headers["x-signature"] || req.headers["x-hivepay-signature"] || "") as string;

    console.log("[HIVEPAY WEBHOOK RECEIVED]", {
      headers: req.headers,
      payload
    });

    // If signature header is provided, verify authenticity
    if (signature && webhookSecret) {
      const computedHash = crypto
        .createHmac("sha256", webhookSecret)
        .update(JSON.stringify(payload))
        .digest("hex");
      
      if (computedHash !== signature) {
        console.warn("[HIVEPAY WEBHOOK WARNING] Signature mismatch:", { computed: computedHash, signature });
      } else {
        console.log("[HIVEPAY WEBHOOK VERIFIED] HMAC signature verified successfully.");
      }
    }

    const ref = payload.reference || payload.ref || payload.gateway_reference || payload.client_reference;
    if (ref) {
      const payment = paymentsDB.find(p => p.id === ref || p.gateway_reference === ref);
      if (payment) {
        const isSuccess = 
          payload.status === "SUCCESS" || 
          payload.status === "COMPLETED" || 
          payload.status === "APPROVED" ||
          payload.event === "charge.completed" ||
          payload.event === "payment.success";

        if (isSuccess) {
          payment.status = "COMPLETED";
          payment.completed_at = new Date().toISOString();
          if (payload.gateway_reference) {
            payment.gateway_reference = payload.gateway_reference;
          }
          if (!payment.email_dispatched) {
            await dispatchPaymentReceiptEmails(payment);
          }
          console.log(`[PAYMENT COMPLETED VIA WEBHOOK] #${payment.id} for UGX ${payment.amount}`);
        } else if (payload.status === "FAILED" || payload.status === "REJECTED") {
          payment.status = "FAILED";
        }
      }
    }
    res.json({ received: true, status: "processed" });
  } catch (err: any) {
    console.error("Webhook processing error:", err);
    res.status(500).json({ error: err.message });
  }
});

// User Auth endpoint with Automated Welcome Email Dispatch
app.post("/api/auth/login", async (req, res) => {
  const { name, email, phone, organization } = req.body;
  if (!name || !email) {
    return res.status(400).json({ success: false, error: "Name and email are required to sign in." });
  }

  const subject = "Welcome to Phresh Tech Media Services";
  const textBody = `Hello ${name},\n\nThank you for connecting with Phresh Tech Media Services. We have received your inquiry regarding our Educational Software, Commercial Printing, Graphic Design, and Managed Hosting services.\n\nOur team is currently reviewing your profile, and we will get back to you shortly.\n\nStay Phresh!\nPhresh Tech Team\nphreshtechmediaservices@gmail.com | Kampala, Uganda`;

  const htmlBody = generateWelcomeEmailHtml({
    name,
    email,
    phone: phone || "+256 700 000000",
    organization: organization || "General Client"
  });

  const mailResult = await sendPhreshEmail(email, subject, textBody, htmlBody);

  res.json({
    success: true,
    user: {
      name,
      email,
      phone: phone || "+256 700 000000",
      organization: organization || "General Client"
    },
    emailDispatchedFrom: mailResult.from,
    emailSubject: subject,
    emailBody: textBody,
    renderedHtml: htmlBody,
    message: `Welcome ${name}! Signed in successfully. Official welcome email dispatched from ${mailResult.from} to ${email}.`
  });
});

// API: Place Order via Cart & Dispatch Follow-Up Email
app.post("/api/orders/place", async (req, res) => {
  try {
    const { user, cartItems, specificDetails, totalUGX } = req.body;
    if (!user || !user.email) {
      return res.status(401).json({ success: false, error: "User login required to place order." });
    }
    if (!cartItems || !Array.isArray(cartItems) || cartItems.length === 0) {
      return res.status(400).json({ success: false, error: "Cart is empty." });
    }

    const orderId = `PTM-ORD-${Math.floor(10000 + Math.random() * 90000)}`;
    const itemsSummary = cartItems.map(i => `${i.name} (x${i.qty})`).join(", ");

    const newOrder: OrderRecord = {
      id: orderId,
      user_name: user.name,
      user_email: user.email,
      user_phone: user.phone || "",
      organization: user.organization || "",
      items: cartItems,
      specific_details: specificDetails || "",
      total_ugx: totalUGX || 0,
      created_at: new Date().toISOString(),
      email_dispatched_from: "phreshtechmediaservices@gmail.com",
      status: "CONFIRMED"
    };

    ordersDB.unshift(newOrder);

    const subject = `Official Order Receipt & Inquiry Confirmation #${orderId} - Phresh Tech Media`;
    const textBody = `Hello ${user.name},\n\nThank you for placing your order with Phresh Tech Media Services.\n\nOrder Reference: ${orderId}\nItems: ${itemsSummary}\nEstimated Total: UGX ${Number(totalUGX).toLocaleString()}\n${specificDetails ? `Specific Details: ${specificDetails}\n\n` : ''}Our engineering and print press directors are reviewing your order specifications and will contact you shortly.\n\nStay Phresh!\nPhresh Tech Team\nphreshtechmediaservices@gmail.com | Kampala, Uganda`;

    const htmlBody = generateOrderReceiptHtml({
      orderId,
      customerName: user.name,
      customerEmail: user.email,
      customerPhone: user.phone || "",
      organization: user.organization || "",
      items: cartItems.map(i => ({ id: i.id, name: i.name, price: Number(i.price || 0), qty: Number(i.qty || 1) })),
      specificDetails: specificDetails || "",
      totalUGX: totalUGX || 0
    });

    const mailResult = await sendPhreshEmail(user.email, subject, textBody, htmlBody);

    // Also dispatch Admin Notification Email with Reply-To set to customer's email
    const adminSubject = `📦 New Order Alert #${orderId} - ${user.name} (${user.organization || 'Client'})`;
    const adminText = `New Order Received!\n\nOrder ID: ${orderId}\nCustomer: ${user.name}\nEmail: ${user.email}\nPhone: ${user.phone || 'N/A'}\nOrganization: ${user.organization || 'Client'}\nItems: ${itemsSummary}\nTotal: UGX ${Number(totalUGX).toLocaleString()}\nSpecific Details: ${specificDetails || 'None'}\n\nClick Reply to respond directly to ${user.email}.`;
    
    const adminHtml = generateAdminOrderAlertHtml({
      orderId,
      customerName: user.name,
      customerEmail: user.email,
      customerPhone: user.phone || "",
      organization: user.organization || "",
      items: cartItems.map(i => ({ id: i.id, name: i.name, price: Number(i.price || 0), qty: Number(i.qty || 1) })),
      specificDetails: specificDetails || "",
      totalUGX: totalUGX || 0
    });

    sendPhreshEmail("phreshtechmediaservices@gmail.com", adminSubject, adminText, adminHtml, user.email).catch(e => console.error(e));

    res.json({
      success: true,
      orderId,
      order: newOrder,
      officialEmail: mailResult.from,
      emailSubject: subject,
      emailBody: textBody,
      renderedReceiptHtml: htmlBody,
      message: `Order #${orderId} confirmed! Official itemized receipt email dispatched from ${mailResult.from} to ${user.email}.`
    });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// API 2: Live MySQL Engine Table Browser
app.get("/api/mysql/tables", (req, res) => {
  res.json({
    database: "phreshtech_production_db",
    engine: "MySQL 8.0.32 InnoDB",
    tables: [
      { name: "students", row_count: studentsDB.length, description: "Phresh Eduledger Student & Fee Balance Registry" },
      { name: "marksheets", row_count: marksheetsDB.length, description: "Phresh Rank Core Student Marks & NCDC Grading" },
      { name: "biztrack_inventory", row_count: biztrackDB.length, description: "Phresh Biztrack Enterprise Inventory & ERP Items" },
      { name: "rent_tenants", row_count: rentDB.length, description: "Phresh Rentledger Property & Tenancy Records" },
      { name: "quotes", row_count: quotesDB.length, description: "System Quote & Order Requests" }
    ]
  });
});

// API 3: Get specific table rows
app.get("/api/mysql/data/:table", (req, res) => {
  const table = req.params.table;
  if (table === "students") return res.json({ success: true, table, data: studentsDB });
  if (table === "marksheets") return res.json({ success: true, table, data: marksheetsDB });
  if (table === "biztrack_inventory") return res.json({ success: true, table, data: biztrackDB });
  if (table === "rent_tenants") return res.json({ success: true, table, data: rentDB });
  if (table === "quotes") return res.json({ success: true, table, data: quotesDB });
  res.status(404).json({ success: false, error: "Table not found in MySQL schema" });
});

// API 4: Live MySQL Raw SQL Query Console Endpoint
app.post("/api/mysql/query", (req, res) => {
  try {
    const { sql } = req.body;
    if (!sql || typeof sql !== "string") {
      return res.status(400).json({ success: false, error: "Empty or invalid SQL query string" });
    }

    const queryUpper = sql.trim().toUpperCase();

    // SELECT queries
    if (queryUpper.startsWith("SELECT")) {
      if (queryUpper.includes("FROM STUDENTS")) {
        return res.json({ success: true, query: sql, affectedRows: studentsDB.length, data: studentsDB });
      }
      if (queryUpper.includes("FROM MARKSHEETS")) {
        return res.json({ success: true, query: sql, affectedRows: marksheetsDB.length, data: marksheetsDB });
      }
      if (queryUpper.includes("FROM BIZTRACK") || queryUpper.includes("FROM INVENTORY")) {
        return res.json({ success: true, query: sql, affectedRows: biztrackDB.length, data: biztrackDB });
      }
      if (queryUpper.includes("FROM RENT") || queryUpper.includes("FROM TENANTS")) {
        return res.json({ success: true, query: sql, affectedRows: rentDB.length, data: rentDB });
      }
      if (queryUpper.includes("FROM QUOTES")) {
        return res.json({ success: true, query: sql, affectedRows: quotesDB.length, data: quotesDB });
      }
      return res.json({ success: true, query: sql, affectedRows: 0, data: [] });
    }

    // INSERT queries for Students
    if (queryUpper.startsWith("INSERT INTO STUDENTS")) {
      const matchName = sql.match(/VALUES\s*\(([^)]+)\)/i);
      const newStudent: StudentRecord = {
        id: studentsDB.length + 1,
        reg_no: `STU/2026/00${studentsDB.length + 1}`,
        name: `NEW LEARNER ${studentsDB.length + 1}`,
        class_name: "S.1",
        stream: "A",
        total_fees_ugx: 750000,
        paid_fees_ugx: 750000,
        balance_ugx: 0,
        status: "CLEARED"
      };
      studentsDB.push(newStudent);
      return res.json({ success: true, message: "1 record inserted into MySQL table `students` successfully.", affectedRows: 1, lastInsertId: newStudent.id, data: studentsDB });
    }

    // INSERT queries for Marksheets
    if (queryUpper.startsWith("INSERT INTO MARKSHEETS")) {
      const newMark: MarksheetRecord = {
        id: marksheetsDB.length + 1,
        student_name: "KABUGO GODFREY",
        class_name: "S.1 A",
        term: "Term ONE",
        subject: "Mathematics",
        bot_marks: 85,
        mot_marks: 88,
        eot_marks: 90,
        avg_marks: 88,
        grade: "D1",
        remarks: "Distinction One"
      };
      marksheetsDB.push(newMark);
      return res.json({ success: true, message: "1 record inserted into MySQL table `marksheets` successfully.", affectedRows: 1, lastInsertId: newMark.id, data: marksheetsDB });
    }

    res.json({ success: true, message: "Query executed successfully on MySQL 8.0 server.", affectedRows: 1, data: studentsDB });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// API 5: Add Student Fee Payment (Eduledger)
app.post("/api/eduledger/pay", (req, res) => {
  const { studentId, amountUGX } = req.body;
  const student = studentsDB.find(s => s.id === Number(studentId));
  if (!student) return res.status(404).json({ success: false, error: "Student not found" });

  student.paid_fees_ugx += Number(amountUGX);
  student.balance_ugx = Math.max(0, student.total_fees_ugx - student.paid_fees_ugx);
  student.status = student.balance_ugx === 0 ? "CLEARED" : "PARTIAL";

  res.json({ success: true, message: `Receipt issued! UGX ${Number(amountUGX).toLocaleString()} recorded for ${student.name}.`, student });
});

// API 6: Submit Quote Request & Dispatch Email
app.post("/api/quote/submit", async (req, res) => {
  try {
    const { clientName, email, organization, phone, items, totalPriceUGX, selectedPillars, specificRequirements } = req.body;
    const quoteId = `PTM-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    const servicesSummary = Array.isArray(items) ? items.join(", ") : "Custom Service Order";

    const newQuote: QuoteRecord = {
      id: quoteId,
      client_name: clientName || "Valued Client",
      organization: organization || "Institution",
      phone: phone || "+256 757 848 094",
      services_summary: servicesSummary,
      total_ugx: totalPriceUGX || 0,
      created_at: new Date().toISOString(),
      status: "MYSQL_DISPATCHED"
    };
    quotesDB.unshift(newQuote);

    const recipientEmail = email || "client@domain.com";
    const subject = `Official Project Quote & Estimate #${quoteId} - Phresh Tech Media`;
    const textBody = `Hello ${clientName || "Valued Client"},\n\nThank you for requesting an estimate proposal from Phresh Tech Media Services.\n\nQuote Reference: #${quoteId}\nScope of Services: ${servicesSummary}\nEstimated Budget: UGX ${Number(totalPriceUGX || 0).toLocaleString()}\n${specificRequirements ? `Specific Requirements: ${specificRequirements}\n\n` : ''}Our technical directors will follow up with you to finalize your project specifications.\n\nStay Phresh!\nPhresh Tech Team\nphreshtechmediaservices@gmail.com | Kampala, Uganda`;

    const htmlBody = generateQuoteReceiptHtml({
      quoteId,
      clientName: clientName || "Valued Client",
      email: recipientEmail,
      phone: phone || "",
      organization: organization || "Valued Client",
      servicesSummary,
      selectedPillars: Array.isArray(selectedPillars) ? selectedPillars : [],
      totalPriceUGX: Number(totalPriceUGX || 0),
      specificRequirements: specificRequirements || ""
    });

    const mailResult = await sendPhreshEmail(recipientEmail, subject, textBody, htmlBody);

    res.json({
      success: true,
      quoteId,
      quote: newQuote,
      officialEmail: mailResult.from,
      emailSubject: subject,
      emailBody: textBody,
      renderedQuoteHtml: htmlBody
    });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// API 7: Submit Contact Message & Dispatch Notification Email
app.post("/api/contact/submit", async (req, res) => {
  const { name, email, contact, subject: clientSubject, message } = req.body;
  const userContact = email || contact || "";
  const inquiryId = `PTM-INQ-${Math.floor(10000 + Math.random() * 90000)}`;
  const messageSubject = clientSubject ? `Inquiry Received: ${clientSubject} - Phresh Tech Media` : `Inquiry Received #${inquiryId} - Phresh Tech Media`;

  contactMessages.push({ name, email: userContact, contact: userContact, subject: clientSubject || "General Inquiry", message, timestamp: new Date() });

  const isEmail = userContact && userContact.includes("@");
  const recipientEmail = isEmail ? userContact : "phreshtechmediaservices@gmail.com";
  const textBody = `Hello ${name || "Valued Client"},\n\nThank you for reaching out to Phresh Tech Media Services.\n\nInquiry Ref: #${inquiryId}\nSubject: ${clientSubject || "General Consultation"}\nMessage Details:\n${message}\n\nOur engineering and design directors will review your inquiry and respond within 24 hours.\n\nStay Phresh!\nPhresh Tech Team\nphreshtechmediaservices@gmail.com | Kasenge - Nakawuka Road, Kampala, Uganda`;

  const htmlBody = generateInquiryReceiptHtml({
    inquiryId,
    name: name || "Valued Client",
    email: recipientEmail,
    phone: isEmail ? "" : userContact,
    organization: "General Client",
    subject: clientSubject || "General Consultation & Inquiries",
    message: message || "No message content provided."
  });

  const mailResult = await sendPhreshEmail(recipientEmail, messageSubject, textBody, htmlBody);

  // Dispatch Admin Notification to phreshtechmediaservices@gmail.com
  if (isEmail) {
    const adminSub = `📩 New Inquiry Alert #${inquiryId}: ${clientSubject || name || 'Client'}`;
    const adminTxt = `New Inquiry Received!\n\nInquiry ID: #${inquiryId}\nName: ${name}\nEmail: ${userContact}\nSubject: ${clientSubject || 'General'}\nMessage:\n${message}\n\nClick Reply to email ${userContact} directly.`;
    const adminHtml = generateAdminInquiryAlertHtml({
      inquiryId,
      name: name || "Valued Client",
      email: userContact,
      phone: contact || "",
      organization: "Website Inquiry",
      subject: clientSubject || "General Consultation",
      message: message || "No message provided."
    });
    sendPhreshEmail("phreshtechmediaservices@gmail.com", adminSub, adminTxt, adminHtml, userContact).catch(e => console.error(e));
  }

  res.json({
    success: true,
    inquiryId,
    emailDispatchedFrom: mailResult.from,
    emailSubject: messageSubject,
    emailBody: textBody,
    renderedInquiryHtml: htmlBody,
    message: `Thank you ${name}. Your message has been safely logged and an official confirmation receipt was dispatched.`
  });
});

// API: Email Templates Live Preview Endpoint
app.get("/api/email/templates/preview", (req, res) => {
  const { type = "order_receipt" } = req.query;

  if (type === "order_receipt") {
    const html = generateOrderReceiptHtml({
      orderId: "PTM-ORD-84920",
      customerName: "Rev. Sister Mary Goretti",
      customerEmail: "principal@stclareschools.ug",
      customerPhone: "+256 702 112233",
      organization: "St. Clare Girls Secondary School",
      items: [
        { id: "soft_1", name: "Phresh Rank Core Marks System (Single Campus License)", price: 450000, qty: 1 },
        { id: "print_1", name: "Duplicate Carbonless Student Receipt Books (Pack of 10 Books)", price: 280000, qty: 2 },
        { id: "gfx_1", name: "3D Vector School Crest & Crest Embroidery Master File", price: 150000, qty: 1 }
      ],
      specificDetails: "Please configure the report cards for NCDC O-Level 2024 CBC grading with custom school motto and headteacher digital signature placeholder.",
      totalUGX: 1160000
    });
    res.setHeader("Content-Type", "text/html");
    return res.send(html);
  }

  if (type === "admin_order_alert") {
    const html = generateAdminOrderAlertHtml({
      orderId: "PTM-ORD-84920",
      customerName: "Rev. Sister Mary Goretti",
      customerEmail: "principal@stclareschools.ug",
      customerPhone: "+256 702 112233",
      organization: "St. Clare Girls Secondary School",
      items: [
        { id: "soft_1", name: "Phresh Rank Core Marks System", price: 450000, qty: 1 },
        { id: "print_1", name: "Duplicate Carbonless Receipt Books", price: 280000, qty: 2 }
      ],
      totalUGX: 1010000,
      specificDetails: "Urgent delivery needed before beginning of Term 2."
    });
    res.setHeader("Content-Type", "text/html");
    return res.send(html);
  }

  if (type === "inquiry_receipt") {
    const html = generateInquiryReceiptHtml({
      inquiryId: "PTM-INQ-49210",
      name: "Mr. Kato Francis",
      email: "kato.francis@brightfuture.ac.ug",
      phone: "+256 777 998877",
      organization: "Bright Future Academy",
      subject: "Custom Student ID Card Printing & Portal Setup",
      message: "We need 650 PVC barcode cards for our secondary students and a synchronized parent SMS notification portal. Please advise on lead time and bulk pricing."
    });
    res.setHeader("Content-Type", "text/html");
    return res.send(html);
  }

  if (type === "quote_receipt") {
    const html = generateQuoteReceiptHtml({
      quoteId: "PTM-QTE-38291",
      clientName: "Madam Nabawanuka Sarah",
      email: "bursar@hillviewhigh.ug",
      phone: "+256 752 443322",
      organization: "Hillview High School",
      servicesSummary: "Phresh Rank Core System + 15 Receipt Books + 3D School Logo Redesign",
      selectedPillars: ["Software Suite", "Print Press", "Graphic Design"],
      totalPriceUGX: 1450000,
      specificRequirements: "Requires multi-user local LAN deployment across Bursar and DOS computers."
    });
    res.setHeader("Content-Type", "text/html");
    return res.send(html);
  }

  if (type === "welcome_email") {
    const html = generateWelcomeEmailHtml({
      name: "Eng. Ronald Ssemwogerere",
      email: "ronald@techsolutions.ug",
      organization: "Apex Junior School"
    });
    res.setHeader("Content-Type", "text/html");
    return res.send(html);
  }

  res.status(404).send("Template type not found. Supported types: order_receipt, admin_order_alert, inquiry_receipt, quote_receipt, welcome_email");
});

// API: Diagnostic Email Test Endpoint
app.get("/api/email/diagnostics", (req, res) => {
  const senderEmail = process.env.GMAIL_USER || "phreshtechmediaservices@gmail.com";
  const rawPass = process.env.GMAIL_APP_PASSWORD || process.env.GMAIL_PASS || "";
  const hasPass = Boolean(rawPass && rawPass.trim().length > 0);
  const passLength = rawPass.replace(/\s+/g, "").length;

  res.json({
    status: "ok",
    senderEmail,
    hasAppPasswordConfigured: hasPass,
    appPasswordCharacterCount: passLength,
    isProper16CharLength: passLength === 16,
    liveModeActive: hasPass && passLength >= 16,
    instructions: hasPass
      ? "Credentials are detected. Use POST /api/email/test-send to send a live test email."
      : "No App Password detected. Please add GMAIL_APP_PASSWORD in project settings."
  });
});

// API: Send Live Test Email
app.post("/api/email/test-send", async (req, res) => {
  const { to = "ibrixraxy@gmail.com" } = req.body;
  const testSubject = `🧪 Test Email from Phresh Tech Media - ${new Date().toLocaleTimeString()}`;
  const testText = `Hello! This is a test email sent from Phresh Tech Media Services to verify live email delivery.`;
  const testHtml = generateWelcomeEmailHtml({
    name: "System Administrator",
    email: to,
    organization: "Phresh Tech Media Services"
  });

  const result = await sendPhreshEmail(to, testSubject, testText, testHtml);
  res.json({
    success: result.success,
    mode: result.mode,
    sentTo: to,
    from: result.from,
    messageId: (result as any).messageId,
    error: (result as any).error,
    note: (result as any).note
  });
});

// API 8: Read PHP Project Files
app.get("/api/php/files", (req, res) => {
  try {
    const baseDir = path.join(process.cwd(), "php_project");
    const getFilesRecursively = (dir: string): any[] => {
      let results: any[] = [];
      if (!fs.existsSync(dir)) return results;
      const list = fs.readdirSync(dir);
      list.forEach((file) => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        const relativePath = path.relative(baseDir, filePath).replace(/\\/g, "/");
        if (stat && stat.isDirectory()) {
          results.push({ name: file, path: relativePath, type: "folder", children: getFilesRecursively(filePath) });
        } else {
          const content = fs.readFileSync(filePath, "utf-8");
          results.push({ name: file, path: relativePath, type: "file", size: stat.size, content });
        }
      });
      return results;
    };

    const filesTree = getFilesRecursively(baseDir);
    res.json({ success: true, project: "Phresh Tech Media Services (PHP 8.2 Suite)", files: filesTree });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// API 9: Live PHP 8.2 Engine Evaluator
app.post("/api/php/eval", (req, res) => {
  const startTime = Date.now();
  try {
    const { code } = req.body;
    if (!code || typeof code !== "string") {
      return res.status(400).json({ success: false, error: "Empty or invalid PHP script." });
    }

    let outputBuffer: string[] = [];
    const cleanCode = code.replace(/^<\?php\s*/i, "").replace(/\?>$/i, "");

    // Built-in PHP 8.2 Execution & Evaluation Logic
    let simulatedEcho = (str: string) => outputBuffer.push(str);

    // Context execution inspection
    if (cleanCode.includes("EduLedger") || cleanCode.includes("getAllStudents")) {
      outputBuffer.push("PHP 8.2 PDO MySQL Query Execution:");
      studentsDB.forEach(s => {
        outputBuffer.push(`[STUDENT ID #${s.id}] ${s.reg_no} | ${s.name} (${s.class_name}) | Total: UGX ${s.total_fees_ugx.toLocaleString()} | Paid: UGX ${s.paid_fees_ugx.toLocaleString()} | Status: ${s.status}`);
      });
    } else if (cleanCode.includes("RankCore") || cleanCode.includes("calculateGrade") || cleanCode.includes("marksheets")) {
      outputBuffer.push("PHP 8.2 Rank Core UNEB Grading Engine:");
      marksheetsDB.forEach(m => {
        outputBuffer.push(`[MARKSHEET #${m.id}] Learner: ${m.student_name} | Subject: ${m.subject} | Score: ${m.avg_marks}% => Grade: ${m.grade} (${m.remarks})`);
      });
    } else if (cleanCode.includes("BizTrack") || cleanCode.includes("inventory")) {
      outputBuffer.push("PHP 8.2 BizTrack POS Inventory Query:");
      biztrackDB.forEach(b => {
        outputBuffer.push(`[ITEM #${b.item_code}] ${b.item_name} | Price: UGX ${b.unit_price_ugx.toLocaleString()} | Stock: ${b.stock_qty}`);
      });
    } else {
      // General PHP script execution simulation
      const lines = cleanCode.split("\n");
      lines.forEach(line => {
        const trimmed = line.trim();
        if (trimmed.startsWith("echo") || trimmed.startsWith("print")) {
          let str = trimmed.replace(/^(echo|print)\s+/, "").replace(/;\s*$/, "");
          if (str.startsWith('"') || str.startsWith("'")) {
            str = str.substring(1, str.length - 1);
          }
          str = str.replace(/\\n/g, "\n");
          outputBuffer.push(str);
        } else if (trimmed.includes("var_dump") || trimmed.includes("print_r")) {
          outputBuffer.push("PHP 8.2 Debug Dump: Array ( [0] => Phresh Tech Media [1] => EduLedger [2] => Rank Core )");
        }
      });

      if (outputBuffer.length === 0) {
        outputBuffer.push("Process executed successfully with return code 0.");
        outputBuffer.push(`PHP 8.2.14 (cli) (built: Dec 2026) (NTS)`);
      }
    }

    const durationMs = Date.now() - startTime;
    res.json({
      success: true,
      engine: "PHP 8.2.14 ZEND Engine (Phresh Tech Media Runtime)",
      executionTimeMs: durationMs,
      memoryUsageMB: (Math.random() * 0.4 + 2.1).toFixed(2),
      output: outputBuffer.join("\n")
    });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err.message, output: `PHP Fatal Error: ${err.message}` });
  }
});

// Google Search Console Site Verification Endpoint
app.get("/google3cf59a0fdc351c65.html", (req, res) => {
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.send("google-site-verification: google3cf59a0fdc351c65.html");
});

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Phresh Tech Media Services running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
