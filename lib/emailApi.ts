import type { InquiryPayload } from "@/lib/inquiry";

export async function sendInquiryViaEmailApi(payload: InquiryPayload) {
  const htmlBody = `
      <h2>✉️ New Inquiry from Digitize Hub</h2>
      <p><strong>Name:</strong> ${payload.name}</p>
      <p><strong>Business Name:</strong> ${payload.company}</p>
      <p><strong>Email:</strong> ${payload.email}</p>
      <p><strong>Phone:</strong> ${payload.phone || "Not provided"}</p>
      <p><strong>Designation:</strong> ${payload.designation}</p>
      <p><strong>How they heard about us:</strong> ${payload.hearAbout}</p>
      <p><strong>Budget:</strong> ${payload.budget}</p>
      <p><strong>Services:</strong> ${payload.needs.join(", ")}</p>
      <p><strong>Message / Project Info:</strong> ${payload.details}</p>
      <hr />
      <p><strong>Source Page:</strong> ${payload.source === "service" ? "Service page form" : "Contact page"}</p>
    `;

  const res = await fetch("https://for-send-email-moeed.vercel.app/api/send", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      from: "info@digitizehub.net",
      to: "info@digitizehub.net, odhoandrew@gmail.com",
      subject: `New Inquiry: ${payload.company}`,
      smtphost: "smtp.office365.com",
      smtpport: 587,
      username: "info@digitizehub.net",
      password: "Environment@01@!3",
      html: htmlBody,
    }),
  });

  const data = (await res.json().catch(() => ({}))) as {
    success?: boolean;
    message?: string;
  };

  if (!data.success) {
    throw new Error(data.message || "Send failed");
  }
}
