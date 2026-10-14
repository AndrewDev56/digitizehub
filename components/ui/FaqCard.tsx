"use client";

import { useState } from "react";
import type { FaqItem } from "@/lib/data/faq";

export default function FaqCard({
  item,
  isOpen,
  onToggle,
  defaultOpen = false,
}: {
  item: FaqItem;
  isOpen?: boolean;
  onToggle?: () => void;
  defaultOpen?: boolean;
}) {
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const open = isOpen !== undefined ? isOpen : internalOpen;

  const handleToggle = () => {
    if (onToggle) {
      onToggle();
    } else {
      setInternalOpen((v) => !v);
    }
  };

  return (
    <div
      className="break-inside-avoid rounded-[20px] md:rounded-[24px] border border-white/10 bg-white/[0.04] backdrop-blur-md p-6 sm:p-7 md:p-8 transition-all duration-300 cursor-pointer"
      onClick={handleToggle}
    >
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          handleToggle();
        }}
        className="flex w-full items-center justify-between text-left cursor-pointer"
        aria-expanded={open}
      >
        <span className="font-heading text-lg sm:text-xl md:text-2xl font-medium tracking-tight text-white">
          {item.question}
        </span>
      </button>

      <div
        aria-hidden={!open}
        className="grid transition-[grid-template-rows] duration-300 ease-in-out motion-reduce:transition-none"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          {/* One line after question */}
          <div aria-hidden className="my-5 sm:my-6 h-px w-full bg-white/10" />

          <p className="font-body text-sm sm:text-base md:text-lg font-normal leading-[1.65] text-white/70">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}