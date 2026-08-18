/**
 * Phresh Tech Media Services - Responsive HTML Email Templates
 * Brand Palette:
 * - Primary Navy: #0B1B3D
 * - Accent Crimson: #8B0000
 * - WhatsApp Forest: #1E7E34
 * - Neutral Canvas: #F1F5F9 / #FFFFFF
 */

export interface OrderItem {
  id: string;
  name: string;
  price: number;
  qty: number;
  category?: string;
}

export interface OrderReceiptParams {
  orderId: string;
  customerName: string;
  customerEmail: string;
  customerPhone?: string;
  organization?: string;
  items: OrderItem[];
  specificDetails?: string;
  totalUGX: number;
  date?: string;
}

export interface InquiryReceiptParams {
  inquiryId?: string;
  name: string;
  email: string;
  phone?: string;
  organization?: string;
  subject?: string;
  message?: string;
  date?: string;
}

export interface QuoteReceiptParams {
  quoteId: string;
  clientName: string;
  email: string;
  phone?: string;
  organization?: string;
  servicesSummary: string;
  selectedPillars?: string[];
  totalPriceUGX: number;
  specificRequirements?: string;
  date?: string;
}

export interface WelcomeEmailParams {
  name: string;
  email: string;
  phone?: string;
  organization?: string;
  date?: string;
}

/**
 * 1. Customer Order Receipt & Confirmation HTML Email Template
 */
export function generateOrderReceiptHtml(params: OrderReceiptParams): string {
  const {
    orderId,
    customerName,
    customerEmail,
    customerPhone = "N/A",
    organization = "Valued Client",
    items = [],
    specificDetails = "",
    totalUGX = 0,
    date = new Date().toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" })
  } = params;

  const formattedTotal = Number(totalUGX).toLocaleString();

  const itemRowsHtml = items.map((item, idx) => {
    const itemTotal = (item.price * item.qty).toLocaleString();
    const unitPrice = Number(item.price).toLocaleString();
    const rowBg = idx % 2 === 0 ? "#ffffff" : "#f8fafc";
    return `
      <tr style="background-color: ${rowBg}; border-bottom: 1px solid #e2e8f0;">
        <td style="padding: 12px 14px; vertical-align: middle;">
          <strong style="color: #0B1B3D; font-size: 13px; display: block; margin-bottom: 2px;">${item.name}</strong>
          <span style="display: inline-block; background-color: #f1f5f9; color: #8B0000; font-size: 10px; font-weight: 700; padding: 2px 6px; border-radius: 4px; border: 1px solid #fed7d7; text-transform: uppercase;">
            Phresh Service
          </span>
        </td>
        <td align="center" style="padding: 12px 8px; font-size: 12px; font-weight: 700; color: #0B1B3D; vertical-align: middle;">
          ${item.qty}
        </td>
        <td align="right" style="padding: 12px 10px; font-size: 12px; font-family: monospace; color: #475569; vertical-align: middle;">
          UGX ${unitPrice}
        </td>
        <td align="right" style="padding: 12px 14px; font-size: 13px; font-weight: 800; font-family: monospace; color: #0B1B3D; vertical-align: middle;">
          UGX ${itemTotal}
        </td>
      </tr>
    `;
  }).join("");

  const whatsappText = encodeURIComponent(`Hello Phresh Tech Media Services, following up on Order #${orderId} for ${customerName} (Total: UGX ${formattedTotal}).`);

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Official Order Receipt - Phresh Tech Media Services</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f1f5f9; font-family: 'Segoe UI', Arial, -apple-system, BlinkMacSystemFont, sans-serif; -webkit-font-smoothing: antialiased; color: #1e293b;">
  <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f1f5f9; padding: 24px 12px;">
    <tr>
      <td align="center">
        <!-- Main Wrapper Card -->
        <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 620px; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 25px rgba(11, 27, 61, 0.08); border: 1px solid #cbd5e1;">
          
          <!-- Brand Header Banner (#0B1B3D + #8B0000 Accent) -->
          <tr>
            <td style="background: linear-gradient(135deg, #0B1B3D 0%, #162a56 100%); padding: 32px 24px 24px 24px; text-align: center; border-bottom: 5px solid #8B0000;">
              <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td align="center">
                    <div style="display: inline-block; background-color: #8B0000; color: #ffffff; font-size: 10px; font-weight: 900; letter-spacing: 1.5px; padding: 4px 14px; border-radius: 20px; text-transform: uppercase; margin-bottom: 10px;">
                      Official Order Receipt & Inquiry
                    </div>
                    <h1 style="color: #ffffff; margin: 0 0 6px 0; font-size: 23px; font-weight: 900; letter-spacing: -0.5px; text-transform: uppercase; line-height: 1.2;">
                      PHRESH TECH MEDIA SERVICES
                    </h1>
                    <p style="color: #cbd5e1; margin: 0; font-size: 12px; font-weight: 500; letter-spacing: 0.3px;">
                      Educational Software • Commercial Printing • Graphic Design • Web Hosting
                    </p>
                    <p style="color: #94a3b8; margin: 4px 0 0 0; font-size: 11px;">
                      Kasenge - Nakawuka Road, Wakiso District / Kampala, Uganda
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Receipt Metadata Bar -->
          <tr>
            <td style="background-color: #f8fafc; padding: 14px 24px; border-bottom: 1px solid #e2e8f0;">
              <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td style="font-size: 12px; color: #475569;">
                    <span style="color: #64748b;">Order Reference:</span> 
                    <strong style="color: #8B0000; font-family: monospace; font-size: 13px;">#${orderId}</strong>
                  </td>
                  <td align="right" style="font-size: 12px; color: #475569;">
                    <span style="color: #64748b;">Date:</span> 
                    <strong style="color: #0B1B3D;">${date}</strong>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Greeting Section -->
          <tr>
            <td style="padding: 24px 24px 16px 24px;">
              <h2 style="color: #0B1B3D; margin: 0 0 8px 0; font-size: 18px; font-weight: 800;">
                Hello ${customerName},
              </h2>
              <p style="color: #334155; margin: 0; font-size: 13px; line-height: 1.6;">
                Thank you for choosing <strong>Phresh Tech Media Services</strong>. We have successfully recorded your order and catalog selections. Our engineering, production, and print press teams are reviewing your specifications.
              </p>
            </td>
          </tr>

          <!-- Client Information Card -->
          <tr>
            <td style="padding: 0 24px 16px 24px;">
              <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 14px 16px;">
                <tr>
                  <td width="50%" style="vertical-align: top; padding-right: 12px;">
                    <span style="font-size: 10px; font-weight: 800; color: #8B0000; text-transform: uppercase; letter-spacing: 0.5px; display: block; margin-bottom: 4px;">Client / Institution</span>
                    <strong style="color: #0B1B3D; font-size: 13px; display: block;">${customerName}</strong>
                    <span style="color: #64748b; font-size: 12px; display: block;">${organization}</span>
                  </td>
                  <td width="50%" style="vertical-align: top; padding-left: 12px; border-left: 1px solid #e2e8f0;">
                    <span style="font-size: 10px; font-weight: 800; color: #0B1B3D; text-transform: uppercase; letter-spacing: 0.5px; display: block; margin-bottom: 4px;">Contact Routing</span>
                    <span style="color: #334155; font-size: 12px; display: block;">✉️ ${customerEmail}</span>
                    <span style="color: #334155; font-size: 12px; font-family: monospace; display: block;">📞 ${customerPhone}</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Itemized Service Order Table -->
          <tr>
            <td style="padding: 0 24px 20px 24px;">
              <div style="font-size: 12px; font-weight: 800; color: #0B1B3D; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 0.5px; display: flex; align-items: center; gap: 6px;">
                📋 Itemized Service & Product Breakdown
              </div>
              <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse; border: 1px solid #cbd5e1; border-radius: 8px; overflow: hidden;">
                <thead>
                  <tr style="background-color: #0B1B3D; color: #ffffff;">
                    <th align="left" style="padding: 10px 14px; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.5px;">Item Description</th>
                    <th align="center" style="padding: 10px 8px; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.5px;">Qty</th>
                    <th align="right" style="padding: 10px 10px; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.5px;">Rate (UGX)</th>
                    <th align="right" style="padding: 10px 14px; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.5px;">Amount (UGX)</th>
                  </tr>
                </thead>
                <tbody>
                  ${itemRowsHtml}
                </tbody>
              </table>
            </td>
          </tr>

          <!-- Grand Total Summary Box (#0B1B3D & #8B0000) -->
          <tr>
            <td style="padding: 0 24px 20px 24px;">
              <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background: linear-gradient(135deg, #0B1B3D 0%, #162a56 100%); border-left: 6px solid #8B0000; border-radius: 8px; padding: 18px 20px;">
                <tr>
                  <td style="color: #ffffff;">
                    <span style="font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #94a3b8; display: block; font-weight: 700; margin-bottom: 2px;">Grand Total Amount</span>
                    <strong style="font-size: 23px; font-weight: 900; color: #ffffff; letter-spacing: -0.5px;">UGX ${formattedTotal}</strong>
                  </td>
                  <td align="right" style="vertical-align: middle;">
                    <span style="background-color: #8B0000; color: #ffffff; font-size: 10px; font-weight: 900; padding: 6px 14px; border-radius: 6px; text-transform: uppercase; letter-spacing: 0.5px; display: inline-block;">
                      Receipt Confirmed
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Specific Project Requirements / Custom Notes -->
          ${specificDetails ? `
          <tr>
            <td style="padding: 0 24px 20px 24px;">
              <div style="background-color: #fff8f8; border: 1px solid #fed7d7; border-left: 4px solid #8B0000; border-radius: 8px; padding: 14px 16px;">
                <strong style="color: #8B0000; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; display: block; margin-bottom: 5px;">
                  📌 Project Specifications & Custom Requirements
                </strong>
                <p style="color: #334155; font-size: 12px; margin: 0; line-height: 1.5; white-space: pre-wrap;">${specificDetails}</p>
              </div>
            </td>
          </tr>
          ` : ''}

          <!-- Direct Actions (WhatsApp & Email Direct Dispatch) -->
          <tr>
            <td align="center" style="padding: 0 24px 24px 24px;">
              <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="margin: 0 auto;">
                <tr>
                  <td style="padding-right: 8px;">
                    <a href="https://wa.me/256757848094?text=${whatsappText}" target="_blank" style="background-color: #1E7E34; color: #ffffff; text-decoration: none; font-size: 12px; font-weight: 800; padding: 12px 20px; border-radius: 8px; display: inline-block; text-transform: uppercase; letter-spacing: 0.5px; box-shadow: 0 2px 6px rgba(30,126,52,0.3);">
                      💬 Connect on WhatsApp
                    </a>
                  </td>
                  <td style="padding-left: 8px;">
                    <a href="mailto:phreshtechmediaservices@gmail.com?subject=Regarding%20Order%20${orderId}" style="background-color: #8B0000; color: #ffffff; text-decoration: none; font-size: 12px; font-weight: 800; padding: 12px 20px; border-radius: 8px; display: inline-block; text-transform: uppercase; letter-spacing: 0.5px; box-shadow: 0 2px 6px rgba(139,0,0,0.3);">
                      ✉️ Reply by Email
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Directors Contact & Physical Headquarters Footer -->
          <tr>
            <td style="background-color: #f1f5f9; padding: 22px 24px; border-top: 2px solid #e2e8f0; font-size: 11px; color: #64748b; line-height: 1.6;">
              <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td width="50%" style="vertical-align: top; padding-right: 10px;">
                    <strong style="color: #0B1B3D; display: block; font-size: 12px; margin-bottom: 2px;">Mulindwa Ibrahim (Ibra)</strong>
                    <span style="color: #1E7E34; font-weight: bold; display: block; font-size: 10px; text-transform: uppercase;">Software Engineering Director</span>
                    <span style="font-family: monospace; color: #334155; font-weight: 600;">+256 702 083515 / +256 747 311209</span>
                  </td>
                  <td width="50%" style="vertical-align: top; padding-left: 10px; border-left: 1px solid #e2e8f0;">
                    <strong style="color: #0B1B3D; display: block; font-size: 12px; margin-bottom: 2px;">Steven Bagalana (Steve)</strong>
                    <span style="color: #8B0000; font-weight: bold; display: block; font-size: 10px; text-transform: uppercase;">Operations & Print Press Director</span>
                    <span style="font-family: monospace; color: #334155; font-weight: 600;">+256 777 139918 / +256 757 848094</span>
                  </td>
                </tr>
                <tr>
                  <td colspan="2" style="padding-top: 16px; border-top: 1px solid #e2e8f0; margin-top: 12px;">
                    <p style="margin: 0; color: #475569; font-size: 11px;">
                      <strong>📍 Physical Headquarters:</strong> Kasenge - Nakawuka Road, Wakiso District / Kampala, Uganda
                    </p>
                    <p style="margin: 4px 0 0 0; color: #475569; font-size: 11px;">
                      <strong>✉️ Official Email:</strong> <a href="mailto:phreshtechmediaservices@gmail.com" style="color: #0B1B3D; font-weight: bold; text-decoration: underline;">phreshtechmediaservices@gmail.com</a>
                    </p>
                    <p style="margin: 8px 0 0 0; color: #94a3b8; font-size: 10px;">
                      © ${new Date().getFullYear()} Phresh Tech Media Services. All rights reserved. Registered Enterprise in Uganda.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

/**
 * 2. Admin Alert for New Customer Order (Includes Reply-To link to customer)
 */
export function generateAdminOrderAlertHtml(params: OrderReceiptParams): string {
  const {
    orderId,
    customerName,
    customerEmail,
    customerPhone = "N/A",
    organization = "General Client",
    items = [],
    specificDetails = "",
    totalUGX = 0,
    date = new Date().toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" })
  } = params;

  const formattedTotal = Number(totalUGX).toLocaleString();

  const itemRowsHtml = items.map((item, idx) => {
    const itemTotal = (item.price * item.qty).toLocaleString();
    const unitPrice = Number(item.price).toLocaleString();
    const rowBg = idx % 2 === 0 ? "#ffffff" : "#f8fafc";
    return `
      <tr style="background-color: ${rowBg}; border-bottom: 1px solid #e2e8f0;">
        <td style="padding: 10px 12px;">
          <strong style="color: #0B1B3D; font-size: 12px;">${item.name}</strong>
        </td>
        <td align="center" style="padding: 10px 8px; font-size: 12px; font-weight: bold; color: #0B1B3D;">${item.qty}</td>
        <td align="right" style="padding: 10px 8px; font-size: 12px; font-family: monospace; color: #64748b;">UGX ${unitPrice}</td>
        <td align="right" style="padding: 10px 12px; font-size: 12px; font-weight: 800; font-family: monospace; color: #0B1B3D;">UGX ${itemTotal}</td>
      </tr>
    `;
  }).join("");

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Admin Notification - New Order #${orderId}</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f1f5f9; font-family: 'Segoe UI', Arial, sans-serif; color: #1e293b;">
  <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f1f5f9; padding: 20px 10px;">
    <tr>
      <td align="center">
        <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #cbd5e1;">
          
          <!-- Admin Banner in #0B1B3D with #8B0000 accent -->
          <tr>
            <td style="background-color: #0B1B3D; padding: 22px 20px; border-bottom: 4px solid #8B0000; text-align: left;">
              <span style="background-color: #8B0000; color: #ffffff; font-size: 10px; font-weight: 900; padding: 3px 8px; border-radius: 4px; text-transform: uppercase;">
                Incoming Order Alert
              </span>
              <h2 style="color: #ffffff; margin: 8px 0 0 0; font-size: 19px; font-weight: 900;">
                📦 New Order: #${orderId}
              </h2>
              <p style="color: #94a3b8; margin: 4px 0 0 0; font-size: 12px;">
                Placed by ${customerName} on ${date}
              </p>
            </td>
          </tr>

          <!-- Client Details -->
          <tr>
            <td style="padding: 20px;">
              <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 12px 16px;">
                <tr>
                  <td width="50%" style="vertical-align: top;">
                    <span style="color: #64748b; font-size: 11px; text-transform: uppercase; font-weight: 700;">Customer Name</span>
                    <strong style="color: #0B1B3D; font-size: 14px; display: block;">${customerName}</strong>
                    <span style="color: #475569; font-size: 12px;">Org: ${organization}</span>
                  </td>
                  <td width="50%" style="vertical-align: top;">
                    <span style="color: #64748b; font-size: 11px; text-transform: uppercase; font-weight: 700;">Contact Information</span>
                    <span style="color: #0B1B3D; font-size: 13px; font-weight: 600; display: block;">${customerEmail}</span>
                    <span style="color: #475569; font-size: 12px; font-family: monospace;">Phone: ${customerPhone}</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Itemized Table -->
          <tr>
            <td style="padding: 0 20px 16px 20px;">
              <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse; border: 1px solid #cbd5e1; border-radius: 6px; overflow: hidden;">
                <thead>
                  <tr style="background-color: #0B1B3D; color: #ffffff;">
                    <th align="left" style="padding: 8px 12px; font-size: 11px; text-transform: uppercase;">Item</th>
                    <th align="center" style="padding: 8px; font-size: 11px; text-transform: uppercase;">Qty</th>
                    <th align="right" style="padding: 8px; font-size: 11px; text-transform: uppercase;">Rate</th>
                    <th align="right" style="padding: 8px 12px; font-size: 11px; text-transform: uppercase;">Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  ${itemRowsHtml}
                </tbody>
              </table>
            </td>
          </tr>

          <!-- Total -->
          <tr>
            <td style="padding: 0 20px 20px 20px;">
              <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #0B1B3D; border-left: 5px solid #8B0000; border-radius: 6px; padding: 14px 18px; color: #ffffff;">
                <tr>
                  <td>
                    <span style="font-size: 11px; color: #94a3b8; text-transform: uppercase;">Order Total</span>
                    <strong style="font-size: 20px; display: block; color: #ffffff;">UGX ${formattedTotal}</strong>
                  </td>
                  <td align="right">
                    <a href="mailto:${customerEmail}?subject=Regarding%20Your%20Order%20${orderId}%20-%20Phresh%20Tech" style="background-color: #8B0000; color: #ffffff; text-decoration: none; padding: 8px 14px; border-radius: 6px; font-size: 11px; font-weight: bold; text-transform: uppercase;">
                      Reply to Client
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          ${specificDetails ? `
          <!-- Custom Specs -->
          <tr>
            <td style="padding: 0 20px 20px 20px;">
              <div style="background-color: #fff8f8; border: 1px solid #fed7d7; border-left: 4px solid #8B0000; border-radius: 6px; padding: 12px 14px;">
                <strong style="color: #8B0000; font-size: 11px; text-transform: uppercase;">Custom Notes & Specifications:</strong>
                <p style="color: #334155; font-size: 12px; margin: 4px 0 0 0;">${specificDetails}</p>
              </div>
            </td>
          </tr>
          ` : ''}

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

/**
 * 3. Customer Inquiry Acknowledgement & Consultation Receipt HTML Template
 */
export function generateInquiryReceiptHtml(params: InquiryReceiptParams): string {
  const {
    inquiryId = `PTM-INQ-${Math.floor(10000 + Math.random() * 90000)}`,
    name,
    email,
    phone = "N/A",
    organization = "Valued Client",
    subject = "General Service & Technical Consultation",
    message = "No specific message provided.",
    date = new Date().toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" })
  } = params;

  const whatsappText = encodeURIComponent(`Hello Phresh Tech Media, following up on Inquiry #${inquiryId} regarding "${subject}".`);

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Inquiry Confirmation - Phresh Tech Media Services</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f1f5f9; font-family: 'Segoe UI', Arial, -apple-system, BlinkMacSystemFont, sans-serif; color: #1e293b;">
  <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f1f5f9; padding: 24px 12px;">
    <tr>
      <td align="center">
        <!-- Main Card -->
        <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 620px; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 25px rgba(11, 27, 61, 0.08); border: 1px solid #cbd5e1;">
          
          <!-- Header Banner in #0B1B3D with #8B0000 Accent -->
          <tr>
            <td style="background: linear-gradient(135deg, #0B1B3D 0%, #162a56 100%); padding: 32px 24px 24px 24px; text-align: center; border-bottom: 5px solid #8B0000;">
              <div style="display: inline-block; background-color: #8B0000; color: #ffffff; font-size: 10px; font-weight: 900; letter-spacing: 1.5px; padding: 4px 14px; border-radius: 20px; text-transform: uppercase; margin-bottom: 10px;">
                Inquiry Acknowledgement & Receipt
              </div>
              <h1 style="color: #ffffff; margin: 0 0 6px 0; font-size: 23px; font-weight: 900; letter-spacing: -0.5px; text-transform: uppercase;">
                PHRESH TECH MEDIA SERVICES
              </h1>
              <p style="color: #cbd5e1; margin: 0; font-size: 12px; font-weight: 500;">
                Educational Software • Commercial Printing • Graphic Design • Web Hosting
              </p>
              <p style="color: #94a3b8; margin: 4px 0 0 0; font-size: 11px;">
                Kasenge - Nakawuka Road, Wakiso / Kampala, Uganda
              </p>
            </td>
          </tr>

          <!-- Metadata Bar -->
          <tr>
            <td style="background-color: #f8fafc; padding: 14px 24px; border-bottom: 1px solid #e2e8f0;">
              <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td style="font-size: 12px; color: #475569;">
                    <span style="color: #64748b;">Inquiry Reference:</span>
                    <strong style="color: #8B0000; font-family: monospace; font-size: 13px;">#${inquiryId}</strong>
                  </td>
                  <td align="right" style="font-size: 12px; color: #475569;">
                    <span style="color: #64748b;">Received:</span>
                    <strong style="color: #0B1B3D;">${date}</strong>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Body Content -->
          <tr>
            <td style="padding: 24px 24px 16px 24px;">
              <h2 style="color: #0B1B3D; margin: 0 0 8px 0; font-size: 18px; font-weight: 800;">
                Hello ${name},
              </h2>
              <p style="color: #334155; margin: 0; font-size: 13px; line-height: 1.6;">
                Thank you for reaching out to <strong>Phresh Tech Media Services</strong>. We have received your consultation request regarding <strong>${subject}</strong>.
              </p>
            </td>
          </tr>

          <!-- Structured Inquiry Card -->
          <tr>
            <td style="padding: 0 24px 20px 24px;">
              <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f8fafc; border: 1px solid #cbd5e1; border-left: 5px solid #8B0000; border-radius: 8px; padding: 16px 18px;">
                <tr>
                  <td>
                    <span style="font-size: 10px; font-weight: 800; color: #8B0000; text-transform: uppercase; letter-spacing: 0.5px; display: block; margin-bottom: 4px;">Inquiry Topic</span>
                    <strong style="color: #0B1B3D; font-size: 14px; display: block; margin-bottom: 8px;">${subject}</strong>
                    
                    <span style="font-size: 10px; font-weight: 800; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px; display: block; margin-bottom: 4px;">Message Details</span>
                    <p style="color: #334155; font-size: 12px; margin: 0; line-height: 1.6; background: #ffffff; padding: 12px; border-radius: 6px; border: 1px solid #e2e8f0; white-space: pre-wrap;">${message}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Response SLA Badge (#0B1B3D) -->
          <tr>
            <td style="padding: 0 24px 20px 24px;">
              <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #0B1B3D; border-radius: 8px; padding: 14px 18px; color: #ffffff;">
                <tr>
                  <td>
                    <strong style="font-size: 12px; color: #38bdf8; display: block; text-transform: uppercase; margin-bottom: 2px;">⚡ Guaranteed Turnaround</strong>
                    <span style="font-size: 12px; color: #cbd5e1;">Our software & print directors review all submissions and will get back to you within 24 hours.</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Action Buttons -->
          <tr>
            <td align="center" style="padding: 0 24px 24px 24px;">
              <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="margin: 0 auto;">
                <tr>
                  <td style="padding-right: 8px;">
                    <a href="https://wa.me/256757848094?text=${whatsappText}" target="_blank" style="background-color: #1E7E34; color: #ffffff; text-decoration: none; font-size: 12px; font-weight: 800; padding: 12px 20px; border-radius: 8px; display: inline-block; text-transform: uppercase; letter-spacing: 0.5px;">
                      💬 WhatsApp Inquiries
                    </a>
                  </td>
                  <td style="padding-left: 8px;">
                    <a href="tel:+256702083515" style="background-color: #8B0000; color: #ffffff; text-decoration: none; font-size: 12px; font-weight: 800; padding: 12px 20px; border-radius: 8px; display: inline-block; text-transform: uppercase; letter-spacing: 0.5px;">
                      📞 Call Direct Line
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Institutional Footer -->
          <tr>
            <td style="background-color: #f1f5f9; padding: 22px 24px; border-top: 2px solid #e2e8f0; font-size: 11px; color: #64748b; line-height: 1.6;">
              <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td width="50%" style="vertical-align: top; padding-right: 10px;">
                    <strong style="color: #0B1B3D; display: block; font-size: 12px; margin-bottom: 2px;">Mulindwa Ibrahim (Ibra)</strong>
                    <span style="color: #1E7E34; font-weight: bold; display: block; font-size: 10px; text-transform: uppercase;">Software Engineering Director</span>
                    <span style="font-family: monospace; color: #334155; font-weight: 600;">+256 702 083515 / +256 747 311209</span>
                  </td>
                  <td width="50%" style="vertical-align: top; padding-left: 10px; border-left: 1px solid #e2e8f0;">
                    <strong style="color: #0B1B3D; display: block; font-size: 12px; margin-bottom: 2px;">Steven Bagalana (Steve)</strong>
                    <span style="color: #8B0000; font-weight: bold; display: block; font-size: 10px; text-transform: uppercase;">Operations & Print Press Director</span>
                    <span style="font-family: monospace; color: #334155; font-weight: 600;">+256 777 139918 / +256 757 848094</span>
                  </td>
                </tr>
                <tr>
                  <td colspan="2" style="padding-top: 16px; border-top: 1px solid #e2e8f0; margin-top: 12px;">
                    <p style="margin: 0; color: #475569; font-size: 11px;">
                      <strong>📍 Physical Headquarters:</strong> Kasenge - Nakawuka Road, Wakiso District / Kampala, Uganda
                    </p>
                    <p style="margin: 4px 0 0 0; color: #475569; font-size: 11px;">
                      <strong>✉️ Official Email:</strong> <a href="mailto:phreshtechmediaservices@gmail.com" style="color: #0B1B3D; font-weight: bold; text-decoration: underline;">phreshtechmediaservices@gmail.com</a>
                    </p>
                    <p style="margin: 8px 0 0 0; color: #94a3b8; font-size: 10px;">
                      © ${new Date().getFullYear()} Phresh Tech Media Services. All rights reserved.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

/**
 * 4. Admin Alert for New Web Inquiry
 */
export function generateAdminInquiryAlertHtml(params: InquiryReceiptParams): string {
  const {
    inquiryId = `PTM-INQ-${Math.floor(10000 + Math.random() * 90000)}`,
    name,
    email,
    phone = "N/A",
    organization = "General Client",
    subject = "General Service Inquiry",
    message = "No message provided.",
    date = new Date().toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" })
  } = params;

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Admin Alert - New Inquiry #${inquiryId}</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f1f5f9; font-family: 'Segoe UI', Arial, sans-serif; color: #1e293b;">
  <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f1f5f9; padding: 20px 10px;">
    <tr>
      <td align="center">
        <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #cbd5e1;">
          
          <tr style="background-color: #0B1B3D; border-bottom: 4px solid #8B0000;">
            <td style="padding: 22px 20px;">
              <span style="background-color: #8B0000; color: #ffffff; font-size: 10px; font-weight: 900; padding: 3px 8px; border-radius: 4px; text-transform: uppercase;">
                New Website Lead
              </span>
              <h2 style="color: #ffffff; margin: 8px 0 0 0; font-size: 19px; font-weight: 900;">
                📩 Inquiry: ${subject}
              </h2>
              <p style="color: #94a3b8; margin: 4px 0 0 0; font-size: 12px;">
                Ref: #${inquiryId} • Received ${date}
              </p>
            </td>
          </tr>

          <tr>
            <td style="padding: 20px;">
              <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px; margin-bottom: 16px;">
                <p style="margin: 0 0 6px 0; font-size: 13px;"><strong>Sender Name:</strong> ${name}</p>
                <p style="margin: 0 0 6px 0; font-size: 13px;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                <p style="margin: 0 0 6px 0; font-size: 13px;"><strong>Phone:</strong> ${phone}</p>
                <p style="margin: 0; font-size: 13px;"><strong>Organization:</strong> ${organization}</p>
              </div>

              <div style="background-color: #fff8f8; border-left: 4px solid #8B0000; padding: 14px; border-radius: 6px;">
                <strong style="color: #8B0000; font-size: 11px; text-transform: uppercase;">Message Content:</strong>
                <p style="color: #334155; font-size: 13px; margin: 6px 0 0 0; line-height: 1.5; white-space: pre-wrap;">${message}</p>
              </div>

              <div style="margin-top: 20px; text-align: center;">
                <a href="mailto:${email}?subject=Re:%20${encodeURIComponent(subject)}%20-%20Phresh%20Tech%20Media" style="background-color: #0B1B3D; color: #ffffff; text-decoration: none; padding: 10px 18px; border-radius: 6px; font-size: 12px; font-weight: bold; text-transform: uppercase; display: inline-block;">
                  ✉️ Reply Directly to ${name}
                </a>
              </div>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

/**
 * 5. Project Quote Estimator Receipt HTML Template
 */
export function generateQuoteReceiptHtml(params: QuoteReceiptParams): string {
  const {
    quoteId,
    clientName,
    email,
    phone = "N/A",
    organization = "Valued Client",
    servicesSummary,
    selectedPillars = [],
    totalPriceUGX = 0,
    specificRequirements = "",
    date = new Date().toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" })
  } = params;

  const formattedTotal = Number(totalPriceUGX).toLocaleString();
  const whatsappText = encodeURIComponent(`Hello Phresh Tech Media Services, following up on Quote #${quoteId} for ${clientName} (UGX ${formattedTotal}).`);

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Project Quote Estimate - Phresh Tech Media Services</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f1f5f9; font-family: 'Segoe UI', Arial, sans-serif; color: #1e293b;">
  <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f1f5f9; padding: 24px 12px;">
    <tr>
      <td align="center">
        <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 620px; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 25px rgba(11, 27, 61, 0.08); border: 1px solid #cbd5e1;">
          
          <!-- Header (#0B1B3D + #8B0000) -->
          <tr>
            <td style="background: linear-gradient(135deg, #0B1B3D 0%, #162a56 100%); padding: 32px 24px 24px 24px; text-align: center; border-bottom: 5px solid #8B0000;">
              <div style="display: inline-block; background-color: #8B0000; color: #ffffff; font-size: 10px; font-weight: 900; letter-spacing: 1.5px; padding: 4px 14px; border-radius: 20px; text-transform: uppercase; margin-bottom: 10px;">
                Official Project Quote & Estimate
              </div>
              <h1 style="color: #ffffff; margin: 0 0 6px 0; font-size: 23px; font-weight: 900; letter-spacing: -0.5px; text-transform: uppercase;">
                PHRESH TECH MEDIA SERVICES
              </h1>
              <p style="color: #cbd5e1; margin: 0; font-size: 12px;">
                Kasenge - Nakawuka Road, Kampala, Uganda • phreshtechmediaservices@gmail.com
              </p>
            </td>
          </tr>

          <!-- Metadata -->
          <tr>
            <td style="background-color: #f8fafc; padding: 14px 24px; border-bottom: 1px solid #e2e8f0;">
              <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td style="font-size: 12px; color: #475569;">
                    <span style="color: #64748b;">Quote Reference:</span>
                    <strong style="color: #8B0000; font-family: monospace; font-size: 13px;">#${quoteId}</strong>
                  </td>
                  <td align="right" style="font-size: 12px; color: #475569;">
                    <span style="color: #64748b;">Date:</span>
                    <strong style="color: #0B1B3D;">${date}</strong>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Greeting & Details -->
          <tr>
            <td style="padding: 24px;">
              <h2 style="color: #0B1B3D; margin: 0 0 8px 0; font-size: 18px; font-weight: 800;">
                Hello ${clientName},
              </h2>
              <p style="color: #334155; margin: 0 0 16px 0; font-size: 13px; line-height: 1.6;">
                Thank you for requesting an estimated project proposal from Phresh Tech Media Services. Below is the itemized summary of your custom configuration:
              </p>

              <!-- Services Breakdown Box -->
              <div style="background-color: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; padding: 16px; margin-bottom: 16px;">
                <span style="font-size: 11px; font-weight: 800; color: #8B0000; text-transform: uppercase; display: block; margin-bottom: 6px;">Scope of Services</span>
                <strong style="font-size: 14px; color: #0B1B3D; display: block; line-height: 1.4;">${servicesSummary}</strong>
                ${selectedPillars.length > 0 ? `
                  <div style="margin-top: 10px; display: flex; flex-wrap: wrap; gap: 6px;">
                    ${selectedPillars.map(p => `<span style="background-color: #0B1B3D; color: #ffffff; font-size: 10px; font-weight: bold; padding: 3px 8px; border-radius: 4px;">${p}</span>`).join(" ")}
                  </div>
                ` : ''}
              </div>

              <!-- Estimated Grand Total -->
              <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background: linear-gradient(135deg, #0B1B3D 0%, #162a56 100%); border-left: 6px solid #8B0000; border-radius: 8px; padding: 18px 20px; margin-bottom: 16px;">
                <tr>
                  <td style="color: #ffffff;">
                    <span style="font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #94a3b8; display: block; font-weight: 700;">Estimated Project Budget</span>
                    <strong style="font-size: 23px; font-weight: 900; color: #ffffff;">UGX ${formattedTotal}</strong>
                  </td>
                  <td align="right">
                    <span style="background-color: #8B0000; color: #ffffff; font-size: 10px; font-weight: 900; padding: 6px 12px; border-radius: 6px; text-transform: uppercase;">
                      Valid 30 Days
                    </span>
                  </td>
                </tr>
              </table>

              ${specificRequirements ? `
              <div style="background-color: #fff8f8; border-left: 4px solid #8B0000; padding: 12px 14px; border-radius: 6px; margin-bottom: 20px;">
                <strong style="color: #8B0000; font-size: 11px; text-transform: uppercase;">Specific Requirements:</strong>
                <p style="color: #334155; font-size: 12px; margin: 4px 0 0 0;">${specificRequirements}</p>
              </div>
              ` : ''}

              <!-- Actions -->
              <div style="text-align: center; margin-top: 20px;">
                <a href="https://wa.me/256757848094?text=${whatsappText}" target="_blank" style="background-color: #1E7E34; color: #ffffff; text-decoration: none; font-size: 12px; font-weight: 800; padding: 12px 20px; border-radius: 8px; display: inline-block; text-transform: uppercase; margin-right: 8px;">
                  💬 Finalize Quote on WhatsApp
                </a>
                <a href="tel:+256702083515" style="background-color: #0B1B3D; color: #ffffff; text-decoration: none; font-size: 12px; font-weight: 800; padding: 12px 20px; border-radius: 8px; display: inline-block; text-transform: uppercase;">
                  📞 Speak with Director
                </a>
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f1f5f9; padding: 20px 24px; border-top: 2px solid #e2e8f0; font-size: 11px; color: #64748b;">
              <p style="margin: 0; color: #475569;">
                <strong>Phresh Tech Media Services:</strong> Kasenge - Nakawuka Road, Kampala, Uganda | +256 702 083515 / +256 757 848094
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

/**
 * 6. Welcome & Onboarding HTML Email Template
 */
export function generateWelcomeEmailHtml(params: WelcomeEmailParams): string {
  const {
    name,
    email,
    organization = "Valued Client"
  } = params;

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to Phresh Tech Media Services</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f1f5f9; font-family: 'Segoe UI', Arial, sans-serif; color: #1e293b;">
  <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f1f5f9; padding: 24px 12px;">
    <tr>
      <td align="center">
        <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 620px; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 25px rgba(11, 27, 61, 0.08); border: 1px solid #cbd5e1;">
          
          <tr style="background: linear-gradient(135deg, #0B1B3D 0%, #162a56 100%); border-bottom: 5px solid #8B0000; text-align: center;">
            <td style="padding: 32px 24px 24px 24px;">
              <div style="display: inline-block; background-color: #8B0000; color: #ffffff; font-size: 10px; font-weight: 900; letter-spacing: 1.5px; padding: 4px 14px; border-radius: 20px; text-transform: uppercase; margin-bottom: 10px;">
                Welcome to the Network
              </div>
              <h1 style="color: #ffffff; margin: 0 0 6px 0; font-size: 23px; font-weight: 900; letter-spacing: -0.5px; text-transform: uppercase;">
                PHRESH TECH MEDIA SERVICES
              </h1>
              <p style="color: #cbd5e1; margin: 0; font-size: 12px;">
                Educational Software • Commercial Printing • Graphic Design • Web Hosting
              </p>
            </td>
          </tr>

          <tr>
            <td style="padding: 24px;">
              <h2 style="color: #0B1B3D; margin: 0 0 10px 0; font-size: 18px; font-weight: 800;">
                Welcome, ${name}!
              </h2>
              <p style="color: #334155; font-size: 13px; line-height: 1.6; margin: 0 0 16px 0;">
                Thank you for connecting with <strong>Phresh Tech Media Services</strong>. We are proud to partner with schools, colleges, and enterprises across Uganda to deliver reliable software solutions, pristine commercial printing, 3D vector graphics, and high-speed web hosting.
              </p>

              <!-- Services Highlights -->
              <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; margin-bottom: 20px;">
                <strong style="color: #0B1B3D; font-size: 12px; text-transform: uppercase; display: block; margin-bottom: 8px;">What We Can Build For You:</strong>
                <ul style="margin: 0; padding-left: 18px; color: #475569; font-size: 12px; line-height: 1.7;">
                  <li><strong>Phresh Rank Core & EduLedger:</strong> NCDC Competence Marks Systems & School Fee ERPs</li>
                  <li><strong>Commercial Print Press:</strong> Duplicate carbonless receipt books, PVC IDs, full-color banners</li>
                  <li><strong>Graphic Design Studio:</strong> 3D Vector School Crests, Logo design & Brand manuals</li>
                  <li><strong>Web Design & Hosting:</strong> Custom School Portals, cPanel SSD hosting & SSL</li>
                </ul>
              </div>

              <div style="text-align: center; margin-top: 10px;">
                <a href="https://wa.me/256757848094?text=Hello%20Phresh%20Tech%20Media%20Services" target="_blank" style="background-color: #1E7E34; color: #ffffff; text-decoration: none; font-size: 12px; font-weight: 800; padding: 12px 20px; border-radius: 8px; display: inline-block; text-transform: uppercase; margin-right: 8px;">
                  💬 Direct WhatsApp Chat
                </a>
                <a href="mailto:phreshtechmediaservices@gmail.com" style="background-color: #8B0000; color: #ffffff; text-decoration: none; font-size: 12px; font-weight: 800; padding: 12px 20px; border-radius: 8px; display: inline-block; text-transform: uppercase;">
                  ✉️ Email Our Team
                </a>
              </div>
            </td>
          </tr>

          <tr>
            <td style="background-color: #f1f5f9; padding: 20px 24px; border-top: 2px solid #e2e8f0; font-size: 11px; color: #64748b;">
              <p style="margin: 0; color: #475569;">
                <strong>Kasenge - Nakawuka Road, Kampala, Uganda</strong> | <a href="mailto:phreshtechmediaservices@gmail.com" style="color: #0B1B3D; font-weight: bold;">phreshtechmediaservices@gmail.com</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}
