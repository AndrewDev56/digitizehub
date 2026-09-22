"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Tag from "@/components/ui/Tag";
import type { PortfolioItem } from "@/lib/data/portfolio";

export default function PortfolioCard({
  item,
  className = "",
}: {
  item: PortfolioItem;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={`group relative w-full overflow-hidden rounded-[30px] md:rounded-[60px] border border-white/10 bg-neutral-900 shadow-xl cursor-pointer ${className}`}
      style={{ aspectRatio: `${item.imageWidth} / ${item.imageHeight}` }}
    >
      <Image
        src={item.image}
        alt={item.title}
        fill
        sizes="(min-width: 768px) 50vw, 100vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
      />

      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/90 via-black/50 to-transparent transition-opacity duration-300 group-hover:opacity-95"
      />

      <div className="absolute top-5 right-5 flex flex-wrap justify-end gap-2 md:top-8 md:right-8 z-10">
        {item.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>

      <div className="absolute bottom-5 left-5 right-5 md:bottom-8 md:left-8 md:right-8 z-10 flex items-center justify-between">
        <h3 className="font-heading text-xl font-semibold text-white md:text-3xl transition-transform duration-300 group-hover:translate-x-2">
          {item.title}
        </h3>
        <span className="flex size-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:bg-accent-to">
          ↗
        </span>
      </div>
    </motion.div>
  );
}