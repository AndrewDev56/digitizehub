export function contactEndpoint() {
  return (
    process.env.NEXT_PUBLIC_EMAIL_API_URL ||
    process.env.NEXT_PUBLIC_CONTACT_ENDPOINT ||
    "https://for-send-email-moeed.vercel.app/api/send"
  );
}
