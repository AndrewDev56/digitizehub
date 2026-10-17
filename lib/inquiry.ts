import { parseUsPhone, US_PHONE_MESSAGE } from "@/lib/phone";

export type InquiryPayload = {
  source: "contact" | "service";
  name: string;
  email: string;
  phone: string;
  company: string;
  designation: string;
  hearAbout: string;
  needs: string[];
  budget: string;
  details: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function asString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function asStringArray(value: unknown) {
  if (!Array.isArray(value)) return [];
  return value.filter((item): item is string => typeof item === "string" && item.trim().length > 0);
}

export function parseInquiry(body: Record<string, unknown>): InquiryPayload {
  return {
    source: body.source === "service" ? "service" : "contact",
    name: asString(body.name),
    email: asString(body.email),
    phone: asString(body.phone),
    company: asString(body.company),
    designation: asString(body.designation),
    hearAbout: asString(body.hearAbout),
    needs: asStringArray(body.needs),
    budget: asString(body.budget),
    details: asString(body.details),
  };
}

export function inquiryError(payload: InquiryPayload) {
  if (payload.needs.length === 0) {
    return "Please select at least one service you need.";
  }
  if (!payload.budget) {
    return "Please select your project budget.";
  }
  if (!payload.company) {
    return "Please provide your company name.";
  }
  if (payload.name.length < 2) {
    return "Please enter your full name.";
  }
  if (!emailPattern.test(payload.email)) {
    return "Please provide a valid email address.";
  }
  if (!parseUsPhone(payload.phone)) {
    return US_PHONE_MESSAGE;
  }
  if (!payload.designation) {
    return "Please provide your designation.";
  }
  if (!payload.hearAbout) {
    return "Please tell us how you heard about us.";
  }
  if (!payload.details) {
    return "Please add your project details.";
  }
  return "";
}
