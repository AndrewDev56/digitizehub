"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { TimelineStep } from "@/lib/data/projectTimeline";

export default function TimelineStepCard({ step }: { step: TimelineStep }) {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.25 }}
      className="group relative flex h-[150px] flex-col justify-between overflow-hidden rounded-2xl bg-white/[0.03] border border-white/10 p-6 transition-all duration-300 hover:border-accent-from/40 hover:bg-white/[0.06] hover:shadow-[0_10px_30px_rgba(255,82,119,0.1)]"
    >
      <span
        aria-hidden
        className="pointer-events-none absolute -top-3 right-3 font-heading text-7xl font-bold text-white/5 select-none md:text-8xl transition-colors duration-300 group-hover:text-accent-from/15"
      >
        {step.number}
      </span>

      <div className="relative flex items-center gap-3">
        <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-white/10 transition-colors duration-300 group-hover:bg-accent-to">
          <Image
            src="/icons/rocket.png"
            alt=""
            width={16}
            height={16}
            className="size-4 opacity-90 transition-transform duration-300 group-hover:scale-110"
          />
        </span>
        <h3 className="font-heading text-base font-semibold text-white md:text-lg">
          {step.title}
        </h3>
      </div>

      <span className="relative font-body text-xs font-medium text-white/50 group-hover:text-white/80 transition-colors">
        {step.duration}
      </span>
    </motion.div>
  );
}