import { WelcomeTemplateData } from './index';

/**
 * Responsive HTML Welcome / Client Onboarding Template
 * Brand Colors: #0B1B3D (Navy), #8B0000 (Crimson), #1E7E34 (Emerald)
 */
export function renderWelcomeTemplate(data: WelcomeTemplateData): string {
  const { name, email, organization = 'Valued Client' } = data;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to Phresh Tech Media Services</title>
  <style>
    @media only screen and (max-width: 600px) {
      .mobile-padding { padding-left: 14px !important; padding-right: 14px !important; }
      .mobile-title { font-size: 20px !important; }
    }
  </style>
</head>
<body style="margin: 0; padding: 0; background-color: #f1f5f9; font-family: 'Segoe UI', Arial, sans-serif; color: #1e293b;">
  <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f1f5f9; padding: 24px 12px;">
    <tr>
      <td align="center">
        <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 620px; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 25px rgba(11, 27, 61, 0.08); border: 1px solid #cbd5e1;">
          
          <tr style="background: linear-gradient(135deg, #0B1B3D 0%, #162a56 100%); border-bottom: 5px solid #8B0000; text-align: center;">
            <td style="padding: 32px 24px 24px 24px;" class="mobile-padding">
              <div style="display: inline-block; background-color: #8B0000; color: #ffffff; font-size: 10px; font-weight: 900; letter-spacing: 1.5px; padding: 4px 14px; border-radius: 20px; text-transform: uppercase; margin-bottom: 10px;">
                Welcome to the Network
              </div>
              <h1 class="mobile-title" style="color: #ffffff; margin: 0 0 6px 0; font-size: 23px; font-weight: 900; letter-spacing: -0.5px; text-transform: uppercase;">
                PHRESH TECH MEDIA SERVICES
              </h1>
              <p style="color: #cbd5e1; margin: 0; font-size: 12px;">
                Educational Software • Commercial Printing • Graphic Design • Web Hosting
              </p>
            </td>
          </tr>

          <tr>
            <td style="padding: 24px;" class="mobile-padding">
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
            <td style="background-color: #f1f5f9; padding: 20px 24px; border-top: 2px solid #e2e8f0; font-size: 11px; color: #64748b;" class="mobile-padding">
              <p style="margin: 0; color: #475569;">
                <strong>Kasenge - Nakawuka Road, Kampala, Uganda</strong> • phreshtechmediaservices@gmail.com
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
