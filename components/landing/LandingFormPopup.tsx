"use client";

import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import LandingForm from "@/components/landing/LandingForm";
import { landingHero, type SelectedPackage } from "@/lib/data/landing";

const highlights = [
  "Reply within one business day",
  "US-based digital team",
  "No-obligation project consult",
];

export default function LandingFormPopup({
  open,
  onClose,
  selectedPackage,
}: {
  open: boolean;
  onClose: () => void;
  selectedPackage: SelectedPackage | null;
}) {
  const titleId = useId();
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const previousFocus = useRef<HTMLElement | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;

    previousFocus.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.Tawk_API?.hideWidget?.();

    const focusTimer = window.setTimeout(() => {
      const field = document.getElementById("popup-name");
      if (field instanceof HTMLElement) field.focus();
      else closeRef.current?.focus();
    }, 40);

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) return;

      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        'button:not([disabled]), input, select, textarea, [href], [tabindex]:not([tabindex="-1"])',
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      window.clearTimeout(focusTimer);
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = originalOverflow;
      window.Tawk_API?.showWidget?.();
      previousFocus.current?.focus();
    };
  }, [open, onClose]);

  if (!mounted || !open) return null;

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <button
        type="button"
        aria-label="Close form"
        onClick={onClose}
        className="absolute inset-0 bg-black/75 backdrop-blur-md"
      />

      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="landing-popup-in relative z-10 grid max-h-[calc(100dvh-2rem)] w-full max-w-[980px] overflow-y-auto rounded-[28px] border border-white/12 bg-[#0a0a0c] shadow-[0_40px_120px_rgba(0,0,0,0.55)] md:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] md:overflow-hidden"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 -right-16 size-[320px] rounded-full bg-brand-red/25 blur-[110px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-24 -left-20 size-[280px] rounded-full bg-brand-red/15 blur-[100px]"
        />

        <h2 id={titleId} className="sr-only">
          Let’s do something great together
        </h2>

        <div className="relative hidden flex-col justify-between overflow-hidden border-r border-white/8 bg-white/[0.03] px-8 py-10 md:flex lg:px-10">
          <Image
            src="/images/ellipse-left.png"
            alt=""
            width={520}
            height={520}
            className="pointer-events-none absolute -bottom-16 -left-20 w-[420px] opacity-70"
          />
          <div className="relative">
            <p className="font-body text-sm tracking-[0.08em] text-white/50 uppercase">Get Started</p>
            <p className="mt-4 font-heading text-[34px] leading-[1.15] font-semibold tracking-[-0.03em] text-white lg:text-[40px]">
              Let’s do something{" "}
              <span className="font-accent font-normal italic ">great</span> together
            </p>
            <p className="mt-4 font-body text-sm leading-relaxed text-white/70 lg:text-base">
              {landingHero.formCopy}
            </p>
          </div>

          <ul className="relative mt-10 space-y-3">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-3 font-body text-sm text-white/80">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-red/15 text-[11px] font-heading font-semibold text-white">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative overflow-y-auto no-scrollbar px-5 py-6 sm:px-8 sm:py-8 md:max-h-[min(920px,calc(100vh-2rem))] md:px-10 md:pt-14 md:pb-10">
          <div className="mb-5 flex items-start justify-between gap-4 md:hidden">
            <div>
              <p className="font-body text-xs tracking-[0.08em] text-white/50 uppercase">Get Started</p>
              <p className="mt-2 font-heading text-[26px] leading-tight font-semibold tracking-[-0.02em] text-white">
                Let’s do something{" "}
                <span className="font-accent font-normal italic text-brand-red">great</span> together
              </p>
            </div>
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Close form"
              className="flex size-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-white/80 transition-colors hover:border-white/30 hover:bg-white/10 hover:text-white"
            >
              <CloseIcon />
            </button>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close form"
            className="absolute top-5 right-5 hidden size-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-white/80 transition-colors hover:border-white/30 hover:bg-white/10 hover:text-white md:flex"
          >
            <CloseIcon />
          </button>

          <LandingForm selectedPackage={selectedPackage} idPrefix="popup" variant="plain" />
        </div>
      </div>
    </div>,
    document.body,
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4" fill="none" stroke="currentColor" strokeWidth="2.25">
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}
