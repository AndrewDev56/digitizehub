import type { InquiryPayload } from "@/lib/inquiry";
import { sendInquiryViaEmailApi } from "@/lib/emailApi";

export async function sendInquiryEmail(payload: InquiryPayload) {
  await sendInquiryViaEmailApi(payload);
}
