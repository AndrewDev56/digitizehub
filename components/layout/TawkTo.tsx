"use client";

import { useEffect } from "react";

const TAWK_SRC = "https://embed.tawk.to/6a0e306c31de891c3487da92/1jp3mqacb";
const TAWK_SCRIPT_ID = "tawk-to-script";

declare global {
  interface Window {
    Tawk_API?: {
      hideWidget?: () => void;
      showWidget?: () => void;
      maximize?: () => void;
      [key: string]: unknown;
    };
    Tawk_LoadStart?: Date;
  }
}

export function openTawkChat() {
  const api = window.Tawk_API;
  if (typeof api?.maximize !== "function") return false;
  api.showWidget?.();
  api.maximize();
  return true;
}

export default function TawkTo() {
  useEffect(() => {
    if (document.getElementById(TAWK_SCRIPT_ID)) return;

    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();

    const script = document.createElement("script");
    script.id = TAWK_SCRIPT_ID;
    script.async = true;
    script.src = TAWK_SRC;
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    document.body.appendChild(script);
  }, []);

  return null;
}
