import { InquiryTemplateData } from './index';

/**
 * Responsive HTML Customer Inquiry Receipt & Acknowledgement Template
 * Brand Colors: #0B1B3D (Navy), #8B0000 (Crimson), #1E7E34 (WhatsApp Green)
 */
export function renderInquiryReceiptTemplate(data: InquiryTemplateData): string {
  const {
    inquiryId = `PTM-INQ-${Math.floor(10000 + Math.random() * 90000)}`,
    name,
    email,
    phone = 'N/A',
    organization = 'Valued Client',
    subject = 'General Service & Technical Consultation',
    message = 'No specific message provided.',
    date = new Date().toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }),
  } = data;

  const whatsappMsg = encodeURIComponent(
    `Hello Phresh Tech Media, following up on Inquiry #${inquiryId} regarding "${subject}".`
  );

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Inquiry Confirmation #${inquiryId} - Phresh Tech Media Services</title>
  <style>
    @media only screen and (max-width: 600px) {
      .mobile-padding { padding-left: 14px !important; padding-right: 14px !important; }
      .mobile-stack { display: block !important; width: 100% !important; border-left: none !important; border-top: 1px solid #e2e8f0 !important; padding-left: 0 !important; padding-top: 10px !important; margin-top: 10px !important; }
      .mobile-title { font-size: 20px !important; }
    }
  </style>
</head>
<body style="margin: 0; padding: 0; background-color: #f1f5f9; font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, Roboto, sans-serif; color: #1e293b;">
  <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f1f5f9; padding: 24px 12px;">
    <tr>
      <td align="center">
        <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 620px; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 25px rgba(11, 27, 61, 0.08); border: 1px solid #cbd5e1;">
          
          <!-- Header Banner in #0B1B3D with #8B0000 Accent -->
          <tr>
            <td style="background: linear-gradient(135deg, #0B1B3D 0%, #162a56 100%); padding: 32px 24px 24px 24px; text-align: center; border-bottom: 5px solid #8B0000;" class="mobile-padding">
              <div style="display: inline-block; background-color: #8B0000; color: #ffffff; font-size: 10px; font-weight: 900; letter-spacing: 1.5px; padding: 4px 14px; border-radius: 20px; text-transform: uppercase; margin-bottom: 10px;">
                Inquiry Acknowledgement & Receipt
              </div>
              <h1 class="mobile-title" style="color: #ffffff; margin: 0 0 6px 0; font-size: 23px; font-weight: 900; letter-spacing: -0.5px; text-transform: uppercase;">
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
            <td style="background-color: #f8fafc; padding: 14px 24px; border-bottom: 1px solid #e2e8f0;" class="mobile-padding">
              <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td style="font-size: 12px; color: #475569;">
                    <span style="color: #64748b;">Inquiry Reference:</span>
                    <strong style="color: #8B0000; font-family: monospace, Courier, monospace; font-size: 13px;">#${inquiryId}</strong>
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
            <td style="padding: 24px 24px 16px 24px;" class="mobile-padding">
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
            <td style="padding: 0 24px 20px 24px;" class="mobile-padding">
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

          <!-- SLA Banner -->
          <tr>
            <td style="padding: 0 24px 20px 24px;" class="mobile-padding">
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
            <td align="center" style="padding: 0 24px 24px 24px;" class="mobile-padding">
              <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="margin: 0 auto;">
                <tr>
                  <td style="padding-right: 8px;">
                    <a href="https://wa.me/256757848094?text=${whatsappMsg}" target="_blank" style="background-color: #1E7E34; color: #ffffff; text-decoration: none; font-size: 12px; font-weight: 800; padding: 12px 20px; border-radius: 8px; display: inline-block; text-transform: uppercase; letter-spacing: 0.5px;">
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

          <!-- Footer -->
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
