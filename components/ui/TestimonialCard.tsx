"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Testimonial } from "@/lib/data/testimonials";

export default function TestimonialCard({
  testimonial,
  active,
}: {
  testimonial: Testimonial;
  active: boolean;
}) {
  return (
    <motion.div
      layout
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={`relative flex shrink-0 snap-center flex-col justify-between gap-8 overflow-hidden rounded-[24px] p-6 transition-all duration-300 md:p-8 cursor-pointer ${
        active
          ? "w-[500px] opacity-100 md:w-[600px] shadow-2xl scale-[1.02]"
          : "w-[280px] opacity-60 md:w-[320px] hover:opacity-85"
      }`}
      style={{
        background: active
          ? "linear-gradient(118deg, #ff5277 2.73%, #ff0036 97.52%)"
          : "rgba(255,255,255,0.05)",
      }}
    >
      <div className="flex items-center gap-3">
        <span
          className="flex size-9 shrink-0 items-center justify-center rounded-full font-tag text-xs font-semibold text-black shadow-inner"
          style={{ backgroundColor: testimonial.avatarColor }}
        >
          {testimonial.initials}
        </span>
        <div>
          <p
            className={`font-heading text-sm font-semibold ${active ? "text-white" : "text-white/80"}`}
          >
            {testimonial.name}
          </p>
          <p
            className={`font-body text-xs ${active ? "text-white/80" : "text-white/40"}`}
          >
            {testimonial.role}
          </p>
        </div>
      </div>

      <p
        className={`font-body text-base leading-snug font-medium italic ${active ? "text-white" : "text-white/50"}`}
      >
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      <div className="flex items-center gap-2">
        <span
          className={`font-heading text-sm font-bold ${active ? "text-white" : "text-white/70"}`}
        >
          {testimonial.rating}
        </span>
        <div className="flex flex-col">
          <span
            className={`font-tag text-xs ${active ? "text-white/80" : "text-white/40"}`}
          >
            {testimonial.source}
          </span>
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Image
                key={i}
                src="/icons/white-star.png"
                alt=""
                width={10}
                height={10}
                className={active ? "" : "opacity-40"}
              />
            ))}
          </div>
        </div>
      </div>

      <span
        aria-hidden
        className={`pointer-events-none absolute right-6 bottom-6 font-heading text-6xl select-none ${
          active ? "text-white/20" : "text-white/5"
        }`}
      >
        &rdquo;
      </span>
    </motion.div>
  );
}