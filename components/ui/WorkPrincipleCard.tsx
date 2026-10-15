"use client";

import type { WorkPrinciple } from "@/lib/data/howWeWork";

export default function WorkPrincipleCard({
  principle,
}: {
  principle: WorkPrinciple;
}) {
  return (
    <div
      className="group relative flex h-[190px] w-[320px] sm:w-[360px] md:w-[400px] flex-col justify-between overflow-hidden rounded-[20px] border border-white/10 bg-white/[0.03]  p-7 shadow-xl backdrop-blur-md transition-all duration-300 "
    >
      <span
        aria-hidden
        className="pointer-events-none absolute bottom-2 right-6 md:right-8 font-body text-[70px] md:text-[80px] font-black leading-none tracking-[-0.04em] text-right select-none bg-gradient-to-b from-white/60 to-white/20 bg-clip-text text-transparent opacity-10"
      >
        {principle.number}
      </span>

      <div className="relative z-10">
        <h3 className="font-heading text-lg font-semibold text-white md:text-xl">
          {principle.title}
        </h3>
        <p className="mt-3 font-body text-sm leading-relaxed text-white/60  transition-colors">
          {principle.description}
        </p>
      </div>
    </div>
  );
}
