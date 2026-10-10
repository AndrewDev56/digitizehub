"use client";

import type { WorkPrinciple } from "@/lib/data/howWeWork";

export default function WorkPrincipleCard({
  principle,
}: {
  principle: WorkPrinciple;
}) {
  return (
    <div
      className="group relative flex h-[190px] w-[320px] sm:w-[360px] md:w-[400px] flex-col justify-between overflow-hidden rounded-[20px] border border-white/[0.08] bg-[#0e0e11]/90 p-7 shadow-xl backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:bg-[#141418]"
    >
      {/* Large Watermark Number */}
      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-2 right-4 font-heading text-6xl font-bold text-white/[0.05] select-none md:text-7xl transition-colors duration-300 group-hover:text-white/[0.09]"
      >
        {principle.number}
      </span>

      {/* Card Content */}
      <div className="relative z-10">
        <h3 className="font-heading text-lg font-semibold text-white md:text-xl">
          {principle.title}
        </h3>
        <p className="mt-3 font-body text-sm leading-relaxed text-white/60 group-hover:text-white/80 transition-colors">
          {principle.description}
        </p>
      </div>
    </div>
  );
}