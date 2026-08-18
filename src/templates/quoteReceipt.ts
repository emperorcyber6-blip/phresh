import { QuoteTemplateData } from './index';

/**
 * Responsive HTML Project Quote & Estimator Template
 * Brand Colors: #0B1B3D (Navy), #8B0000 (Crimson), #1E7E34 (Emerald)
 */
export function renderQuoteReceiptTemplate(data: QuoteTemplateData): string {
  const {
    quoteId,
    clientName,
    email,
    phone = 'N/A',
    organization = 'Valued Client',
    servicesSummary,
    selectedPillars = [],
    totalPriceUGX = 0,
    specificRequirements = '',
    date = new Date().toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }),
  } = data;

  const formattedTotal = Number(totalPriceUGX).toLocaleString();
  const whatsappMsg = encodeURIComponent(
    `Hello Phresh Tech Media Services, following up on Quote #${quoteId} for ${clientName} (UGX ${formattedTotal}).`
  );

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Project Quote Estimate #${quoteId} - Phresh Tech Media Services</title>
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
          
          <!-- Header (#0B1B3D + #8B0000) -->
          <tr>
            <td style="background: linear-gradient(135deg, #0B1B3D 0%, #162a56 100%); padding: 32px 24px 24px 24px; text-align: center; border-bottom: 5px solid #8B0000;" class="mobile-padding">
              <div style="display: inline-block; background-color: #8B0000; color: #ffffff; font-size: 10px; font-weight: 900; letter-spacing: 1.5px; padding: 4px 14px; border-radius: 20px; text-transform: uppercase; margin-bottom: 10px;">
                Official Project Quote & Estimate
              </div>
              <h1 class="mobile-title" style="color: #ffffff; margin: 0 0 6px 0; font-size: 23px; font-weight: 900; letter-spacing: -0.5px; text-transform: uppercase;">
                PHRESH TECH MEDIA SERVICES
              </h1>
              <p style="color: #cbd5e1; margin: 0; font-size: 12px;">
                Kasenge - Nakawuka Road, Kampala, Uganda • phreshtechmediaservices@gmail.com
              </p>
            </td>
          </tr>

          <!-- Metadata -->
          <tr>
            <td style="background-color: #f8fafc; padding: 14px 24px; border-bottom: 1px solid #e2e8f0;" class="mobile-padding">
              <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td style="font-size: 12px; color: #475569;">
                    <span style="color: #64748b;">Quote Reference:</span>
                    <strong style="color: #8B0000; font-family: monospace, Courier, monospace; font-size: 13px;">#${quoteId}</strong>
                  </td>
                  <td align="right" style="font-size: 12px; color: #475569;">
                    <span style="color: #64748b;">Date:</span>
                    <strong style="color: #0B1B3D;">${date}</strong>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding: 24px;" class="mobile-padding">
              <h2 style="color: #0B1B3D; margin: 0 0 8px 0; font-size: 18px; font-weight: 800;">
                Hello ${clientName},
              </h2>
              <p style="color: #334155; margin: 0 0 16px 0; font-size: 13px; line-height: 1.6;">
                Thank you for requesting an estimated project proposal from <strong>Phresh Tech Media Services</strong>. Below is the itemized summary of your custom configuration:
              </p>

              <!-- Services Breakdown Box -->
              <div style="background-color: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; padding: 16px; margin-bottom: 16px;">
                <span style="font-size: 11px; font-weight: 800; color: #8B0000; text-transform: uppercase; display: block; margin-bottom: 6px;">Scope of Services</span>
                <strong style="font-size: 14px; color: #0B1B3D; display: block; line-height: 1.4;">${servicesSummary}</strong>
                ${
                  selectedPillars.length > 0
                    ? `
                  <div style="margin-top: 10px;">
                    ${selectedPillars
                      .map(
                        (p) =>
                          `<span style="background-color: #0B1B3D; color: #ffffff; font-size: 10px; font-weight: bold; padding: 3px 8px; border-radius: 4px; display: inline-block; margin-right: 4px; margin-bottom: 4px;">${p}</span>`
                      )
                      .join('')}
                  </div>
                `
                    : ''
                }
              </div>

              <!-- Estimated Grand Total Box -->
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

              ${
                specificRequirements
                  ? `
              <div style="background-color: #fff8f8; border-left: 4px solid #8B0000; padding: 12px 14px; border-radius: 6px; margin-bottom: 20px;">
                <strong style="color: #8B0000; font-size: 11px; text-transform: uppercase;">Specific Requirements:</strong>
                <p style="color: #334155; font-size: 12px; margin: 4px 0 0 0;">${specificRequirements}</p>
              </div>
              `
                  : ''
              }

              <!-- Actions -->
              <div style="text-align: center; margin-top: 20px;">
                <a href="https://wa.me/256757848094?text=${whatsappMsg}" target="_blank" style="background-color: #1E7E34; color: #ffffff; text-decoration: none; font-size: 12px; font-weight: 800; padding: 12px 20px; border-radius: 8px; display: inline-block; text-transform: uppercase; margin-right: 8px;">
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
            <td style="background-color: #f1f5f9; padding: 20px 24px; border-top: 2px solid #e2e8f0; font-size: 11px; color: #64748b;" class="mobile-padding">
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
</html>`;
}
