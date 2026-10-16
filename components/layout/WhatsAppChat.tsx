"use client";

import { useEffect, useId, useRef, useState } from "react";
import { whatsappDisplay, whatsappHref } from "@/lib/data/whatsapp";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="currentColor"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.25"
      strokeLinecap="round"
    >
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

export default function WhatsAppChat() {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div
      ref={rootRef}
      className="pointer-events-none fixed right-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-40 flex flex-col items-end gap-3 sm:right-6 sm:bottom-6"
    >
      {open && (
        <div
          id={panelId}
          role="dialog"
          aria-label="WhatsApp chat"
          className="pointer-events-auto w-[min(100vw-2rem,340px)] overflow-hidden rounded-[28px] border border-white/12 bg-[#111111]/95 shadow-[0_24px_80px_rgba(0,0,0,0.55)] backdrop-blur-md"
        >
          <div className="flex items-center gap-3 bg-[#1f2c34] px-4 py-3.5">
            <span className="relative flex size-11 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white">
              <WhatsAppIcon className="size-[22px]" />
              <span className="absolute right-0 bottom-0 size-2.5 rounded-full border-2 border-[#1f2c34] bg-[#25D366]" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="font-heading text-[15px] font-semibold text-white">
                DigitizeHub
              </p>
              <p className="font-body text-xs text-white/55">
                Typically replies within minutes
              </p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close WhatsApp chat"
              className="flex size-9 shrink-0 items-center justify-center rounded-full text-white/70 transition-colors hover:bg-white/10 hover:text-white"
            >
              <CloseIcon className="size-4" />
            </button>
          </div>

          <div className="px-4 py-5">
            <p className="max-w-[90%] rounded-2xl rounded-tl-sm bg-[#1f2c34] px-3.5 py-3 font-body text-sm leading-relaxed text-white/90">
              Hi there. How can we help with your website, app, or SEO project?
            </p>
            <p className="mt-3 font-body text-xs text-white/40">
              {whatsappDisplay}
            </p>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex h-12 items-center justify-center gap-2.5 rounded-full bg-[#25D366] px-4 font-heading text-sm font-semibold text-[#073b27] shadow-[0_10px_24px_rgba(37,211,102,0.28)] transition-all hover:bg-[#2ee075] active:scale-[0.98]"
            >
              <WhatsAppIcon className="size-5" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      )}

      <button
        type="button"
        aria-label={open ? "Close WhatsApp chat" : "Open WhatsApp chat"}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((current) => !current)}
        className="pointer-events-auto relative flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_32px_rgba(37,211,102,0.4)] transition-transform hover:scale-105 active:scale-95 sm:size-[60px]"
      >
        {!open && (
          <span
            aria-hidden
            className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/45 [animation-duration:2.4s] motion-reduce:hidden"
          />
        )}
        <span className="relative flex size-full items-center justify-center">
          {open ? (
            <CloseIcon className="size-6 text-white" />
          ) : (
            <WhatsAppIcon className="size-8 sm:size-9" />
          )}
        </span>
      </button>
    </div>
  );
}
