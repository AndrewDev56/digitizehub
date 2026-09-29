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
      className="break-inside-avoid rounded-2xl border border-white/20 p-5 transition-all duration-300 hover:border-white/40"
      style={{
        background: open
          ? "linear-gradient(135deg, rgba(255,255,255,0.18) 0%, rgba(255,82,119,0.1) 100%)"
          : "linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.02) 100%)",
      }}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-3 text-left"
        aria-expanded={open}
      >
        <span className="font-heading text-[15px] font-semibold text-white md:text-base">
          {item.question}
        </span>
        <span
          className={`flex size-6 shrink-0 items-center justify-center rounded-full bg-white/10 text-white text-lg leading-none transition-transform duration-200 ${open ? "rotate-45" : ""}`}
        >
          +
        </span>
      </button>

      <div
        aria-hidden={!open}
        className="grid transition-[grid-template-rows] duration-300 ease-in-out motion-reduce:transition-none"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
            <p className="mt-3 font-body text-[13px] leading-relaxed text-white/70 md:text-sm">
              {item.answer}
            </p>
        </div>
      </div>
    </div>
  );
}