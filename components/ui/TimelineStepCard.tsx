"use client";

import Image from "next/image";
import type { TimelineStep } from "@/lib/data/projectTimeline";

export default function TimelineStepCard({ step }: { step: TimelineStep }) {
  return (
    <div
      className="relative flex h-[197px] flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6"
    >
      <span
        aria-hidden
        className="pointer-events-none absolute top-4 right-8 font-heading text-7xl font-bold text-white/[0.01] select-none md:text-8xl"
      >
        {step.number}
      </span>

      <div className="relative flex items-center gap-3">
        <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-white/10">
          <Image
            src="/icons/rocket.png"
            alt=""
            width={16}
            height={16}
            className="size-4 opacity-90"
          />
        </span>
        <h3 className="font-heading text-base font-semibold text-white md:text-lg">
          {step.title}
        </h3>
      </div>

      <div className="relative">
        <div aria-hidden className="mb-3 h-px w-full bg-white/10" />
        <span className="font-body text-xs font-medium text-white/50">
          {step.duration}
        </span>
      </div>
    </div>
  );
}