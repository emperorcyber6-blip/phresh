import { OrderReceiptTemplateData } from './index';

/**
 * Responsive HTML Admin Order Alert Template
 * Sent to phreshtechmediaservices@gmail.com with direct Reply-To configuration
 */
export function renderAdminOrderAlertTemplate(data: OrderReceiptTemplateData): string {
  const {
    orderId,
    customerName,
    customerEmail,
    customerPhone = 'N/A',
    organization = 'General Client',
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
        <td style="padding: 10px 12px;">
          <strong style="color: #0B1B3D; font-size: 12px;">${item.name}</strong>
        </td>
        <td align="center" style="padding: 10px 8px; font-size: 12px; font-weight: bold; color: #0B1B3D;">${item.qty}</td>
        <td align="right" style="padding: 10px 8px; font-size: 12px; font-family: monospace, Courier, monospace; color: #64748b;">UGX ${unitPrice}</td>
        <td align="right" style="padding: 10px 12px; font-size: 12px; font-weight: 800; font-family: monospace, Courier, monospace; color: #0B1B3D;">UGX ${lineTotal}</td>
      </tr>
      `;
    })
    .join('');

  return `<!DOCTYPE html>
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
          
          <!-- Banner in #0B1B3D with #8B0000 accent -->
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
                    <span style="color: #475569; font-size: 12px; font-family: monospace, Courier, monospace;">Phone: ${customerPhone}</span>
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

          ${
            specificDetails
              ? `
          <tr>
            <td style="padding: 0 20px 20px 20px;">
              <div style="background-color: #fff8f8; border: 1px solid #fed7d7; border-left: 4px solid #8B0000; border-radius: 6px; padding: 12px 14px;">
                <strong style="color: #8B0000; font-size: 11px; text-transform: uppercase;">Custom Notes & Specifications:</strong>
                <p style="color: #334155; font-size: 12px; margin: 4px 0 0 0;">${specificDetails}</p>
              </div>
            </td>
          </tr>
          `
              : ''
          }

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
