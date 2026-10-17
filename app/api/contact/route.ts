import { NextResponse } from "next/server";
import { sendInquiryEmail } from "@/lib/mail";
import { inquiryError, parseInquiry } from "@/lib/inquiry";
import { parseUsPhone } from "@/lib/phone";

export async function POST(request: Request) {
  let body: Record<string, unknown>;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const payload = parseInquiry(body);
  const error = inquiryError(payload);
  if (error) {
    return NextResponse.json({ error }, { status: 400 });
  }

  payload.phone = parseUsPhone(payload.phone) || payload.phone;

  try {
    await sendInquiryEmail(payload);
    return NextResponse.json({
      success: true,
      message: "Your inquiry has been submitted successfully.",
    });
  } catch (sendError) {
    const errorMessage = sendError instanceof Error ? sendError.message : "Failed to send email.";
    console.error("Contact form send failed:", errorMessage);
    const smtpAuthDisabled = /5\.7\.139|SmtpClientAuthentication is disabled/i.test(errorMessage);
    return NextResponse.json(
      {
        error: smtpAuthDisabled
          ? "Microsoft 365 still has SMTP Authentication off for info@digitizehub.net. Enable Authenticated SMTP in GoDaddy Email & Office and in Microsoft 365 admin, wait a few minutes, then try again."
          : `Error submitting request: ${errorMessage}`,
      },
      { status: 500 },
    );
  }
}
