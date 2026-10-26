/**
 * Phresh Tech Media Services - Official Payment Receipt Template
 * Brand Identity:
 *  - Primary Navy: #0B1B3D
 *  - Emerald Green: #1E7E34
 *  - Crimson Accent: #8B0000
 *  - Neutral Off-white: #F8FAFC
 */

export interface PaymentReceiptTemplateData {
  paymentRef: string;
  gatewayRef?: string;
  clientName: string;
  clientEmail: string;
  clientPhone?: string;
  serviceDescription: string;
  amount: number;
  currency: string;
  paymentMethod: string;
  date?: string;
}

export function renderPaymentReceiptTemplate(data: PaymentReceiptTemplateData): string {
  const currentDate = data.date || new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  const formattedAmount = `${data.currency} ${data.amount.toLocaleString()}`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Payment Receipt #${data.paymentRef} - Phresh Tech Media Services</title>
</head>
<body style="margin: 0; padding: 0; background-color: #F1F5F9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1E293B;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #F1F5F9; padding: 32px 16px;">
    <tr>
      <td align="center">
        <!-- Main Card Container -->
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width: 600px; width: 100%; background-color: #FFFFFF; border-radius: 20px; overflow: hidden; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.08); border: 1px solid #E2E8F0;">
          
          <!-- Header Banner -->
          <tr>
            <td style="background: linear-gradient(135deg, #0B1B3D 0%, #152e61 100%); padding: 36px 32px; text-align: left; border-bottom: 4px solid #1E7E34;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <h1 style="margin: 0; color: #FFFFFF; font-size: 22px; font-weight: 900; letter-spacing: -0.5px;">PHRESH TECH MEDIA SERVICES</h1>
                    <p style="margin: 4px 0 0 0; color: #34D399; font-size: 11px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase;">Direct Client Payment Confirmation</p>
                  </td>
                  <td align="right" valign="top">
                    <span style="display: inline-block; background-color: rgba(30, 126, 52, 0.25); color: #34D399; border: 1px solid #34D399; padding: 6px 14px; border-radius: 9999px; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px;">
                      ✓ Payment Verified
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Body Content -->
          <tr>
            <td style="padding: 32px;">
              
              <!-- Greeting & Reference Bar -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 24px;">
                <tr>
                  <td>
                    <p style="margin: 0; font-size: 15px; color: #334155;">Hello <strong>${data.clientName}</strong>,</p>
                    <p style="margin: 6px 0 0 0; font-size: 13px; color: #64748B; line-height: 1.5;">
                      Your agreed payment has been successfully completed and confirmed through our secure payment gateway. Thank you for partnering with Phresh Tech Media Services.
                    </p>
                  </td>
                </tr>
              </table>

              <!-- Receipt Highlight Box -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 14px; padding: 20px; margin-bottom: 24px;">
                <tr>
                  <td width="50%" style="padding-bottom: 12px;">
                    <span style="display: block; font-size: 11px; text-transform: uppercase; color: #64748B; font-weight: 700;">Payment Reference</span>
                    <strong style="font-size: 14px; color: #0B1B3D; font-family: monospace;">${data.paymentRef}</strong>
                  </td>
                  <td width="50%" style="padding-bottom: 12px; text-align: right;">
                    <span style="display: block; font-size: 11px; text-transform: uppercase; color: #64748B; font-weight: 700;">Date & Time</span>
                    <span style="font-size: 12px; color: #334155;">${currentDate}</span>
                  </td>
                </tr>
                <tr>
                  <td width="50%">
                    <span style="display: block; font-size: 11px; text-transform: uppercase; color: #64748B; font-weight: 700;">Payment Method</span>
                    <span style="font-size: 13px; color: #0B1B3D; font-weight: 600;">${data.paymentMethod}</span>
                  </td>
                  <td width="50%" style="text-align: right;">
                    <span style="display: block; font-size: 11px; text-transform: uppercase; color: #64748B; font-weight: 700;">Gateway Ref</span>
                    <span style="font-size: 12px; color: #475569; font-family: monospace;">${data.gatewayRef || 'N/A'}</span>
                  </td>
                </tr>
              </table>

              <!-- Project & Amount Summary -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border: 1px solid #E2E8F0; border-radius: 14px; overflow: hidden; margin-bottom: 24px;">
                <tr style="background-color: #0B1B3D; color: #FFFFFF;">
                  <th align="left" style="padding: 12px 16px; font-size: 11px; text-transform: uppercase; letter-spacing: 0.5px;">Agreed Service / Project Description</th>
                  <th align="right" style="padding: 12px 16px; font-size: 11px; text-transform: uppercase; letter-spacing: 0.5px;">Amount Paid</th>
                </tr>
                <tr>
                  <td style="padding: 16px; font-size: 13px; color: #1E293B; border-bottom: 1px solid #E2E8F0;">
                    <strong>${data.serviceDescription}</strong>
                    <div style="font-size: 11px; color: #64748B; margin-top: 4px;">Direct payment authorized following consultation with Phresh Tech Media.</div>
                  </td>
                  <td align="right" style="padding: 16px; font-size: 15px; font-weight: 800; color: #0B1B3D; border-bottom: 1px solid #E2E8F0; font-family: monospace;">
                    ${formattedAmount}
                  </td>
                </tr>
                <tr style="background-color: #ECFDF5;">
                  <td style="padding: 14px 16px; font-size: 13px; font-weight: 800; color: #065F46;">
                    Total Confirmed Amount:
                  </td>
                  <td align="right" style="padding: 14px 16px; font-size: 18px; font-weight: 900; color: #047857; font-family: monospace;">
                    ${formattedAmount}
                  </td>
                </tr>
              </table>

              <!-- Client Details -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 24px; font-size: 12px; color: #475569;">
                <tr>
                  <td>
                    <strong>Client Name:</strong> ${data.clientName}<br>
                    <strong>Email:</strong> ${data.clientEmail}<br>
                    ${data.clientPhone ? `<strong>Phone:</strong> ${data.clientPhone}<br>` : ''}
                    <strong>Status:</strong> <span style="color: #047857; font-weight: 700;">Completed & Stamped</span>
                  </td>
                </tr>
              </table>

              <!-- Technical & Contact Information -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #F8FAFC; border-left: 4px solid #1E7E34; padding: 14px 16px; border-radius: 0 10px 10px 0; margin-bottom: 24px;">
                <tr>
                  <td>
                    <p style="margin: 0; font-size: 12px; color: #334155; line-height: 1.5;">
                      <strong>Next Steps:</strong> Our technical & operations team has been notified of this payment. Work will proceed in accordance with our agreed project timeline.
                    </p>
                  </td>
                </tr>
              </table>

              <!-- Director Contacts -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="font-size: 11px; color: #64748B; border-top: 1px solid #E2E8F0; padding-top: 16px;">
                <tr>
                  <td>
                    <strong>Mulindwa Ibrahim (Ibra)</strong> — Software Engineering Director (+256 702 083515 / +256 747 311209)<br>
                    <strong>Steven Bagalana (Steve)</strong> — Operations & Print Press Director (+256 777 139918 / +256 757 848094)<br>
                    <strong>Office Hotline:</strong> +256 741 145595 | <strong>Email:</strong> phreshtechmediaservices@gmail.com<br>
                    Kasenge - Nakawuka Road, Kampala, Uganda
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #08132B; color: #94A3B8; padding: 20px 32px; text-align: center; font-size: 11px;">
              © ${new Date().getFullYear()} Phresh Tech Media Services (phreshtechmedia.com). All Rights Reserved.
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
