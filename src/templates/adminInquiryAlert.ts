import { InquiryTemplateData } from './index';

/**
 * Responsive HTML Admin Inquiry Alert Template
 * Alerts management on new inbound website inquiries
 */
export function renderAdminInquiryAlertTemplate(data: InquiryTemplateData): string {
  const {
    inquiryId = `PTM-INQ-${Math.floor(10000 + Math.random() * 90000)}`,
    name,
    email,
    phone = 'N/A',
    organization = 'General Client',
    subject = 'General Service Inquiry',
    message = 'No message provided.',
    date = new Date().toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }),
  } = data;

  return `<!DOCTYPE html>
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
                <a href="mailto:${email}?subject=Re:%20${encodeURIComponent(
    subject
  )}%20-%20Phresh%20Tech%20Media" style="background-color: #0B1B3D; color: #ffffff; text-decoration: none; padding: 10px 18px; border-radius: 6px; font-size: 12px; font-weight: bold; text-transform: uppercase; display: inline-block;">
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
</html>`;
}
