"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Button from "@/components/ui/Button";
import type { NavLink } from "@/lib/data/navLinks";

export default function MobileNav({ links }: { links: NavLink[] }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <div className="lg:hidden">
      {/* Hamburger / Close Toggle Button */}
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="relative z-50 flex size-11 items-center justify-center rounded-full border border-white/15 bg-black/60 backdrop-blur-md transition-all duration-300 hover:border-white/30 active:scale-95 cursor-pointer"
      >
        <div className="flex flex-col items-center justify-center gap-[6px]">
          <span
            className={`h-[2px] w-5 rounded-full bg-white transition-all duration-300 ease-out ${
              open ? "translate-y-[4px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-[2px] w-5 rounded-full bg-white transition-all duration-300 ease-out ${
              open ? "-translate-y-[4px] -rotate-45" : ""
            }`}
          />
        </div>
      </button>

      {/* Full-Screen Drawer Overlay */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 top-0 z-40 flex min-h-screen w-full flex-col justify-between overflow-y-auto bg-[#08080a]/95 px-8 pt-28 pb-10 backdrop-blur-2xl transition-all duration-500 animate-in fade-in"
        >
          {/* Ambient Background Glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-20 -right-20 size-[320px] rounded-full bg-brand-red/20 blur-[100px]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-10 -left-20 size-[300px] rounded-full bg-brand-red/15 blur-[100px]"
          />

          {/* Navigation Links */}
          <div className="relative z-10 flex flex-col gap-6 pt-4">
            {links.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`group relative flex items-center justify-between font-heading text-3xl font-semibold tracking-tight transition-all duration-300 ${
                    isActive ? "text-white" : "text-white/70 hover:text-white"
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive ? (
                    <span className="flex size-2 rounded-full bg-brand-red shadow-[0_0_10px_rgba(255,0,54,1)]" />
                  ) : (
                    <span className="text-xl text-white/30 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1">
                      &rarr;
                    </span>
                  )}
                </Link>
              );
            })}
          </div>

          {/* Bottom Actions & Details */}
          <div className="relative z-10 mt-12 flex flex-col gap-6 border-t border-white/10 pt-8">
            <Button
              href="/contact"
              size="md"
              className="w-full !justify-between !px-6 shadow-xl"
              onClick={() => setOpen(false)}
            >
              Contact Us
            </Button>

            <div className="flex flex-col gap-1 text-center font-body text-xs text-white/50">
              <p>Calgary &amp; Georgia · Full-Service Digital Agency</p>
              <p className="text-white/40">&copy; {new Date().getFullYear()} DigitizeHub. All rights reserved.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}