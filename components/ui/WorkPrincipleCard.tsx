"use client";

import { motion } from "framer-motion";
import type { WorkPrinciple } from "@/lib/data/howWeWork";

export default function WorkPrincipleCard({
  principle,
}: {
  principle: WorkPrinciple;
}) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="group relative flex h-[160px] flex-col justify-between overflow-hidden rounded-2xl bg-white/[0.04] border border-white/10 p-6 transition-all duration-300 hover:border-accent-from/40 hover:bg-white/[0.08]"
    >
      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-4 right-3 font-heading text-7xl font-bold text-white/5 select-none md:text-8xl transition-colors group-hover:text-accent-from/15"
      >
        {principle.number}
      </span>

      <div className="relative z-10">
        <h3 className="font-heading text-lg font-semibold text-white md:text-xl transition-colors group-hover:text-accent-from">
          {principle.title}
        </h3>
        <p className="mt-2 max-w-[240px] font-body text-sm text-white/60 group-hover:text-white/80 transition-colors">
          {principle.description}
        </p>
      </div>
    </motion.div>
  );
}