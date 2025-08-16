export const normalizeTRPhone = (input = "") => {
  const digits = String(input).replace(/\D/g, "");
  if (digits.startsWith("90") && digits.length === 12) return "+" + digits;
  if (digits.startsWith("0") && digits.length === 11)  return "+90" + digits.slice(1);
  if (digits.length === 10 && digits.startsWith("5"))  return "+90" + digits;
  if (digits.length === 12 && digits.startsWith("90")) return "+" + digits;
  if (digits.length === 13 && digits.startsWith("90")) return "+" + digits;
  if (/^\+90\d{10}$/.test(input)) return input;
  return input;
};

export const isValidTRPhone = (input = "") => {
  const n = normalizeTRPhone(input);
  return /^\+90(5\d{9})$/.test(n); 
};

export const normalizeIBAN = (iban = "") => String(iban).replace(/\s+/g, "").toUpperCase();

export const isValidTRIBAN = (iban = "") => {
  const i = normalizeIBAN(iban);
  if (!/^TR\d{24}$/.test(i)) return false;

  const rearranged = i.slice(4) + i.slice(0, 4);
  let total = "";
  for (const ch of rearranged) {
    const code = ch.charCodeAt(0);
    if (code >= 65 && code <= 90) { // A-Z
      total += String(code - 55);
    } else {
      total += ch;
    }
  }
  let remainder = 0;
  for (let idx = 0; idx < total.length; idx += 7) {
    const block = String(remainder) + total.slice(idx, idx + 7);
    remainder = Number(block) % 97;
  }
  return remainder === 1;
};
