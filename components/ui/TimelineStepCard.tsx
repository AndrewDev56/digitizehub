import Image from "next/image";
import type { TimelineStep } from "@/lib/data/projectTimeline";

export default function TimelineStepCard({ step }: { step: TimelineStep }) {
  return (
    <div className="relative flex h-[140px] flex-col justify-between overflow-hidden rounded-2xl bg-white/5 p-6">
      <span
        aria-hidden
        className="pointer-events-none absolute -top-2 right-3 font-heading text-7xl font-semibold text-white/5 select-none md:text-8xl"
      >
        {step.number}
      </span>

      <div className="relative flex items-center gap-3">
        <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-white/10">
          <Image
            src="/icons/rocket.png"
            alt=""
            width={16}
            height={16}
            className="size-4 opacity-90"
          />
        </span>
        <h3 className="font-heading text-base font-medium text-white md:text-lg">
          {step.title}
        </h3>
      </div>

      <span className="relative font-body text-xs text-white/40">
        {step.duration}
      </span>
    </div>
  );
}