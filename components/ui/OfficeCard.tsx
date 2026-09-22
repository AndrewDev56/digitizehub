"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Office } from "@/lib/data/offices";

export default function OfficeCard({ office }: { office: Office }) {
  return (
    <motion.div
      whileHover={{ y: -4, transition: { duration: 0.25 } }}
      className="group rounded-[24px] border border-white/[0.08] bg-white/5 p-6 md:rounded-[40px] md:p-10 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.07] hover:shadow-2xl"
    >
      <h3 className="font-heading text-2xl font-semibold text-white md:text-4xl transition-colors group-hover:text-accent-from">
        {office.city}
      </h3>

      <div aria-hidden className="mt-6 h-px w-full bg-white/10 md:mt-8" />

      <div className="mt-6 flex items-center gap-4 md:mt-8">
        <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white/[0.06] md:size-[60px] transition-transform duration-300 group-hover:scale-110">
          <Image src="/icons/telephone.png" alt="" width={20} height={20} className="size-[24px]" />
        </span>
        <span className="font-body text-base font-light text-white md:text-2xl">
          {office.phone}
        </span>
      </div>

      <div aria-hidden className="mt-6 h-px w-full bg-white/10 md:mt-8" />

      <div className="mt-6 flex items-center gap-4 md:mt-8">
        <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white/[0.06] md:size-[60px] transition-transform duration-300 group-hover:scale-110">
          <Image src="/icons/message.png" alt="" width={20} height={20} className="size-[24px]" />
        </span>
        <span className="font-body text-sm leading-[1.4] font-light text-white md:text-2xl">
          {office.address}
        </span>
      </div>

      <div aria-hidden className="mt-6 h-px w-full bg-white/10 md:mt-8" />

      <a
        href={office.mapUrl}
        target="_blank"
        rel="noreferrer"
        className="mt-6 flex items-center justify-end gap-2 font-body text-sm font-medium text-[#ff0036] md:mt-8 md:text-lg transition-transform duration-300 group-hover:translate-x-1"
      >
        View on map
        <Image src="/icons/Arrow_Right_red.png" alt="" width={18} height={18} className="size-[18px]" />
      </a>
    </motion.div>
  );
}