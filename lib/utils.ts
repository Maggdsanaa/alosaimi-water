import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function buildWhatsAppLink(message: string, phone?: string) {
  const rawPhone =
    phone ||
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ||
    "967700000000";

  const cleanPhone = rawPhone.replace(/[^0-9]/g, "");

  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
}
