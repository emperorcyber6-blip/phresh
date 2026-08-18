import { OrderReceiptTemplateData } from './index';

/**
 * Responsive HTML Order Receipt Template
 * Primary Brand Colors:
 * - Deep Navy: #0B1B3D
 * - Rich Crimson: #8B0000
 * - WhatsApp Emerald: #1E7E34
 * - Background Canvas: #F1F5F9
 *
 * Includes placeholders for Order ID, customer details, itemized breakdown, and grand total.
 */
export function renderOrderReceiptTemplate(data: OrderReceiptTemplateData): string {
  const {
    orderId,
    customerName,
    customerEmail,
    customerPhone = 'N/A',
    organization = 'Valued Client',
    items = [],
    specificDetails = '',
    totalUGX = 0,
    date = new Date().toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }),
  } = data;

  const formattedTotal = Number(totalUGX).toLocaleString();

  const itemRowsHtml = items
    .map((item, idx) => {
      const lineTotal = (item.price * item.qty).toLocaleString();
      const unitPrice = Number(item.price).toLocaleString();
      const rowBg = idx % 2 === 0 ? '#ffffff' : '#f8fafc';
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
        <td align="right" style="padding: 12px 10px; font-size: 12px; font-family: monospace, Courier, monospace; color: #475569; vertical-align: middle;">
          UGX ${unitPrice}
        </td>
        <td align="right" style="padding: 12px 14px; font-size: 13px; font-weight: 800; font-family: monospace, Courier, monospace; color: #0B1B3D; vertical-align: middle;">
          UGX ${lineTotal}
        </td>
      </tr>
      `;
    })
    .join('');

  const whatsappMsg = encodeURIComponent(
    `Hello Phresh Tech Media Services, following up on Order #${orderId} for ${customerName} (Total: UGX ${formattedTotal}).`
  );

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Official Order Receipt #${orderId} - Phresh Tech Media Services</title>
  <style>
    body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
    table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
    img { -ms-interpolation-mode: bicubic; border: 0; outline: none; text-decoration: none; }
    @media only screen and (max-width: 600px) {
      .mobile-padding { padding-left: 14px !important; padding-right: 14px !important; }
      .mobile-stack { display: block !important; width: 100% !important; border-left: none !important; border-top: 1px solid #e2e8f0 !important; padding-left: 0 !important; padding-top: 10px !important; margin-top: 10px !important; }
      .mobile-title { font-size: 20px !important; }
      .mobile-btn { display: block !important; width: 100% !important; margin-bottom: 8px !important; }
    }
  </style>
</head>
<body style="margin: 0; padding: 0; background-color: #f1f5f9; font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, Roboto, Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased; color: #1e293b;">
  <!-- Outer Wrapper Table -->
  <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f1f5f9; padding: 24px 12px;">
    <tr>
      <td align="center">
        <!-- Main Email Container (Max 620px) -->
        <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 620px; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 6px 24px rgba(11, 27, 61, 0.08); border: 1px solid #cbd5e1;">
          
          <!-- BRAND HEADER: #0B1B3D with #8B0000 accent border -->
          <tr>
            <td style="background: linear-gradient(135deg, #0B1B3D 0%, #162a56 100%); padding: 32px 24px 24px 24px; text-align: center; border-bottom: 5px solid #8B0000;" class="mobile-padding">
              <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td align="center">
                    <div style="display: inline-block; background-color: #8B0000; color: #ffffff; font-size: 10px; font-weight: 900; letter-spacing: 1.5px; padding: 4px 14px; border-radius: 20px; text-transform: uppercase; margin-bottom: 10px;">
                      Official Order Receipt & Inquiry
                    </div>
                    <h1 class="mobile-title" style="color: #ffffff; margin: 0 0 6px 0; font-size: 23px; font-weight: 900; letter-spacing: -0.5px; text-transform: uppercase; line-height: 1.2;">
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

          <!-- METADATA BAR (Order ID & Date) -->
          <tr>
            <td style="background-color: #f8fafc; padding: 14px 24px; border-bottom: 1px solid #e2e8f0;" class="mobile-padding">
              <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td style="font-size: 12px; color: #475569;">
                    <span style="color: #64748b;">Order Reference:</span>
                    <strong style="color: #8B0000; font-family: monospace, Courier, monospace; font-size: 13px;">#${orderId}</strong>
                  </td>
                  <td align="right" style="font-size: 12px; color: #475569;">
                    <span style="color: #64748b;">Date:</span>
                    <strong style="color: #0B1B3D;">${date}</strong>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- GREETING & INTRO -->
          <tr>
            <td style="padding: 24px 24px 16px 24px;" class="mobile-padding">
              <h2 style="color: #0B1B3D; margin: 0 0 8px 0; font-size: 18px; font-weight: 800;">
                Hello ${customerName},
              </h2>
              <p style="color: #334155; margin: 0; font-size: 13px; line-height: 1.6;">
                Thank you for placing your order with <strong>Phresh Tech Media Services</strong>. We have logged your service selections. Our engineering, production, and print press teams are reviewing your order specifications.
              </p>
            </td>
          </tr>

          <!-- CUSTOMER / INSTITUTION DETAILS -->
          <tr>
            <td style="padding: 0 24px 16px 24px;" class="mobile-padding">
              <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 14px 16px;">
                <tr>
                  <td width="50%" style="vertical-align: top; padding-right: 10px;" class="mobile-stack">
                    <span style="font-size: 10px; font-weight: 800; color: #8B0000; text-transform: uppercase; letter-spacing: 0.5px; display: block; margin-bottom: 4px;">Client / Institution</span>
                    <strong style="color: #0B1B3D; font-size: 13px; display: block;">${customerName}</strong>
                    <span style="color: #64748b; font-size: 12px; display: block;">${organization}</span>
                  </td>
                  <td width="50%" style="vertical-align: top; padding-left: 10px; border-left: 1px solid #e2e8f0;" class="mobile-stack">
                    <span style="font-size: 10px; font-weight: 800; color: #0B1B3D; text-transform: uppercase; letter-spacing: 0.5px; display: block; margin-bottom: 4px;">Contact Routing</span>
                    <span style="color: #334155; font-size: 12px; display: block;">✉️ ${customerEmail}</span>
                    <span style="color: #334155; font-size: 12px; font-family: monospace; display: block;">📞 ${customerPhone}</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- ITEMIZED ITEMS TABLE -->
          <tr>
            <td style="padding: 0 24px 20px 24px;" class="mobile-padding">
              <div style="font-size: 12px; font-weight: 800; color: #0B1B3D; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 0.5px;">
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

          <!-- GRAND TOTAL SUMMARY BOX (#0B1B3D + #8B0000) -->
          <tr>
            <td style="padding: 0 24px 20px 24px;" class="mobile-padding">
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

          <!-- SPECIFIC DETAILS (Optional) -->
          ${
            specificDetails
              ? `
          <tr>
            <td style="padding: 0 24px 20px 24px;" class="mobile-padding">
              <div style="background-color: #fff8f8; border: 1px solid #fed7d7; border-left: 4px solid #8B0000; border-radius: 8px; padding: 14px 16px;">
                <strong style="color: #8B0000; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; display: block; margin-bottom: 5px;">
                  📌 Project Specifications & Custom Notes
                </strong>
                <p style="color: #334155; font-size: 12px; margin: 0; line-height: 1.5; white-space: pre-wrap;">${specificDetails}</p>
              </div>
            </td>
          </tr>
          `
              : ''
          }

          <!-- ACTIONS: WhatsApp and Email Reply -->
          <tr>
            <td align="center" style="padding: 0 24px 24px 24px;" class="mobile-padding">
              <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="margin: 0 auto;">
                <tr>
                  <td style="padding-right: 8px;" class="mobile-btn">
                    <a href="https://wa.me/256757848094?text=${whatsappMsg}" target="_blank" style="background-color: #1E7E34; color: #ffffff; text-decoration: none; font-size: 12px; font-weight: 800; padding: 12px 20px; border-radius: 8px; display: inline-block; text-transform: uppercase; letter-spacing: 0.5px; box-shadow: 0 2px 6px rgba(30,126,52,0.3);">
                      💬 Connect on WhatsApp
                    </a>
                  </td>
                  <td style="padding-left: 8px;" class="mobile-btn">
                    <a href="mailto:phreshtechmediaservices@gmail.com?subject=Regarding%20Order%20${orderId}" style="background-color: #8B0000; color: #ffffff; text-decoration: none; font-size: 12px; font-weight: 800; padding: 12px 20px; border-radius: 8px; display: inline-block; text-transform: uppercase; letter-spacing: 0.5px; box-shadow: 0 2px 6px rgba(139,0,0,0.3);">
                      ✉️ Reply by Email
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- DIRECTORS & FOOTER: #0B1B3D / #8B0000 / #1E7E34 -->
          <tr>
            <td style="background-color: #f1f5f9; padding: 22px 24px; border-top: 2px solid #e2e8f0; font-size: 11px; color: #64748b; line-height: 1.6;" class="mobile-padding">
              <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td width="50%" style="vertical-align: top; padding-right: 10px;" class="mobile-stack">
                    <strong style="color: #0B1B3D; display: block; font-size: 12px; margin-bottom: 2px;">Mulindwa Ibrahim (Ibra)</strong>
                    <span style="color: #1E7E34; font-weight: bold; display: block; font-size: 10px; text-transform: uppercase;">Software Engineering Director</span>
                    <span style="font-family: monospace; color: #334155; font-weight: 600;">+256 702 083515 / +256 747 311209</span>
                  </td>
                  <td width="50%" style="vertical-align: top; padding-left: 10px; border-left: 1px solid #e2e8f0;" class="mobile-stack">
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
</html>`;
}
