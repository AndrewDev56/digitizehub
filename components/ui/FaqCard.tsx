"use client";

import { useState } from "react";
import type { FaqItem } from "@/lib/data/faq";

export default function FaqCard({
  item,
  defaultOpen = false,
}: {
  item: FaqItem;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div
  className="break-inside-avoid rounded-2xl border border-white/20 p-5"
  style={{
    background:
      "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.02) 100%)",
  }}
>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full text-left"
        aria-expanded={open}
      >
        <span className="font-heading text-[15px] font-semibold text-white md:text-base">
          {item.question}
        </span>
      </button>

      {open && (
        <p className="mt-3 font-body text-[13px] leading-relaxed text-white/45 md:text-sm">
          {item.answer}
        </p>
      )}
    </div>
  );
}