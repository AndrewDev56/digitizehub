const US_PHONE_MESSAGE = "Please enter a valid US phone number.";

function digitsOnly(value: string) {
  return value.replace(/\D/g, "");
}

function nationalDigits(value: string) {
  const digits = digitsOnly(value).slice(0, 11);
  return digits.startsWith("1") ? digits.slice(1, 11) : digits.slice(0, 10);
}

export function formatUsPhoneInput(value: string) {
  const rawDigits = digitsOnly(value).slice(0, 11);
  const country = rawDigits.startsWith("1");
  const national = nationalDigits(value);

  let formatted = "";
  if (national.length > 0 && national.length < 4) {
    formatted = `(${national}`;
  } else if (national.length >= 4 && national.length < 7) {
    formatted = `(${national.slice(0, 3)}) ${national.slice(3)}`;
  } else if (national.length >= 7) {
    formatted = `(${national.slice(0, 3)}) ${national.slice(3, 6)}-${national.slice(6)}`;
  }

  if (!formatted) {
    return country ? "+1 " : "";
  }

  return country ? `+1 ${formatted}` : formatted;
}

export function parseUsPhone(value: string) {
  const trimmed = value.trim();
  if (!trimmed) return "";

  const national = nationalDigits(trimmed);
  if (!/^[2-9]\d{2}[2-9]\d{6}$/.test(national)) {
    return null;
  }

  return `+1${national}`;
}

export function usPhoneError(value: string) {
  if (!value.trim()) return "";
  return parseUsPhone(value) ? "" : US_PHONE_MESSAGE;
}

export { US_PHONE_MESSAGE };
