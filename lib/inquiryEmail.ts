import type { InquiryPayload } from "@/lib/inquiry";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function escapeText(value: string) {
  return value.replace(/\r/g, "").trim();
}

export function inquiryEmailSubject(payload: InquiryPayload) {
  return `New website inquiry from ${escapeText(payload.name)}`;
}

export function formatInquiryHtml(payload: InquiryPayload) {
  const name = escapeHtml(payload.name);
  const email = escapeHtml(payload.email);
  const phone = escapeHtml(payload.phone);
  const company = escapeHtml(payload.company);
  const designation = escapeHtml(payload.designation);
  const hearAbout = escapeHtml(payload.hearAbout);
  const budget = escapeHtml(payload.budget);
  const details = escapeHtml(payload.details).replace(/\n/g, "<br/>");
  const source = payload.source === "service" ? "Service page form" : "Contact page";
  const services = payload.needs
    .map((need) => `<span class="badge">${escapeHtml(need)}</span>`)
    .join(" ");

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: Helvetica, Arial, sans-serif; background-color: #0b0b0d; color: #e5e7eb; margin: 0; padding: 20px; }
        .container { max-width: 600px; margin: 0 auto; background: #111113; border-radius: 16px; overflow: hidden; border: 1px solid #2a2a2e; }
        .header { background: linear-gradient(135deg, #ff0036, #7a001a); padding: 32px 24px; text-align: center; color: #ffffff; }
        .header h1 { margin: 0; font-size: 24px; font-weight: 700; }
        .header p { margin: 6px 0 0; font-size: 14px; opacity: 0.9; }
        .content { padding: 28px 24px; }
        .section-title { font-size: 13px; font-weight: 700; color: #ff0036; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 12px; }
        .table-data { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
        .table-data td { padding: 10px 12px; border-bottom: 1px solid #232327; font-size: 14px; }
        .table-data td.label { font-weight: 600; color: #9ca3af; width: 40%; }
        .table-data td.value { color: #f9fafb; }
        .badge { display: inline-block; background: #2a000b; color: #ffb3c2; padding: 4px 10px; border-radius: 12px; font-size: 12px; font-weight: 600; margin: 2px; }
        .notes-box { background: #18181b; border-left: 4px solid #ff0036; padding: 14px 16px; border-radius: 8px; font-size: 14px; color: #d1d5db; line-height: 1.6; }
        .footer { background: #0b0b0d; padding: 18px 24px; text-align: center; font-size: 12px; color: #6b7280; border-top: 1px solid #232327; }
        a { color: #ff0036; text-decoration: none; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>New website inquiry</h1>
          <p>Digitize Hub ${escapeHtml(source)}</p>
        </div>
        <div class="content">
          <div class="section-title">Client information</div>
          <table class="table-data">
            <tr><td class="label">Full name</td><td class="value"><strong>${name}</strong></td></tr>
            <tr><td class="label">Email</td><td class="value"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td class="label">Phone</td><td class="value"><a href="tel:${phone}">${phone}</a></td></tr>
            <tr><td class="label">Company</td><td class="value">${company}</td></tr>
            <tr><td class="label">Designation</td><td class="value">${designation}</td></tr>
            <tr><td class="label">Heard about us</td><td class="value">${hearAbout}</td></tr>
          </table>
          <div class="section-title">Project</div>
          <table class="table-data">
            <tr><td class="label">Budget</td><td class="value">${budget}</td></tr>
          </table>
          <div class="section-title">Requested services</div>
          <div style="margin-bottom: 24px;">${services}</div>
          <div class="section-title">Project details</div>
          <div class="notes-box">${details}</div>
        </div>
        <div class="footer">
          <p>This message was sent from the Digitize Hub website.</p>
        </div>
      </div>
    </body>
    </html>
  `;
}
