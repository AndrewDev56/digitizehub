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
      className="break-inside-avoid rounded-2xl border border-white/20 bg-white/[0.45] p-4 transition-all duration-300 hover:border-white/40"
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-3 text-left"
        aria-expanded={open}
      >
        <span className="font-heading text-base font-semibold text-white md:text-lg">
          {item.question}
        </span>
        <span
          className="flex size-6 shrink-0 items-center justify-center rounded-full bg-black/10 font-heading text-lg leading-none text-white"
        >
          {open ? "−" : "+"}
        </span>
      </button>

      <div
        aria-hidden={!open}
        className="grid transition-[grid-template-rows] duration-300 ease-in-out motion-reduce:transition-none"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p className="mt-3 font-body text-sm leading-relaxed text-white/80 md:text-base">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}