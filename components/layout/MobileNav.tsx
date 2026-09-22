"use client";

import { useState } from "react";
import Link from "next/link";
import type { NavLink } from "@/lib/data/navLinks";

export default function MobileNav({ links }: { links: NavLink[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="relative z-50 flex size-10 flex-col items-center justify-center gap-[5px]"
      >
        <span
          className={`h-[2px] w-6 bg-white transition-transform ${
            open ? "translate-y-[3.5px] rotate-45" : ""
          }`}
        />
        <span
          className={`h-[2px] w-6 bg-white transition-transform ${
            open ? "-translate-y-[3.5px] -rotate-45" : ""
          }`}
        />
      </button>

      {open && (
        <div className="fixed inset-0 top-0 z-40 flex flex-col items-center justify-center gap-8 bg-background/98">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-heading text-2xl font-semibold text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}