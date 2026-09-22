"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type FloatingChipProps = {
  label: string;
  className?: string;
  style?: React.CSSProperties;
};

export default function FloatingChip({
  label,
  className = "",
  style,
}: FloatingChipProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 15 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      whileHover={{ scale: 1.08, y: -4, transition: { duration: 0.2 } }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`inline-flex items-center gap-[10px] rounded-full bg-white/90 py-[10px] pr-[24px] pl-[10px] backdrop-blur-[8px] shadow-lg cursor-pointer transition-shadow hover:shadow-xl hover:bg-white ${className}`}
      style={style}
    >
      <span className="flex size-[36px] shrink-0 items-center justify-center rounded-full bg-[#111111] transition-transform duration-300 group-hover:rotate-45">
        <Image
          src="/icons/Arrow_Right.png"
          alt=""
          width={18}
          height={18}
          className="h-[50%] w-[50%]"
        />
      </span>
      <span className="whitespace-nowrap font-tag text-[16px] font-semibold tracking-[-0.02em] text-black">
        {label}
      </span>
    </motion.div>
  );
}