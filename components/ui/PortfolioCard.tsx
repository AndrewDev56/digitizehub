"use client";

import type { PortfolioItem } from "@/lib/data/portfolio";

export default function PortfolioCard({
  item,
  className = "",
}: {
  item: PortfolioItem;
  className?: string;
}) {
  return (
    <div
      data-work-card
      data-gsap-stagger-item
      className={`group relative w-full overflow-hidden rounded-[30px] md:rounded-[60px] border border-white/10 bg-neutral-900 shadow-xl cursor-pointer transition-transform duration-500 hover:-translate-y-1 ${className}`}
      style={{ aspectRatio: `${item.imageWidth} / ${item.imageHeight}` }}
    >
      <video
        src={item.video}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        aria-label={`${item.title} preview`}
        className="absolute inset-0 size-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
      />

      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/90 via-black/50 to-transparent transition-opacity duration-300 group-hover:opacity-95"
      />

      {item.mockupTags && (
        <div className="absolute top-5 left-5 z-10 flex flex-wrap gap-2 md:top-8 md:left-8">
          {item.mockupTags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center justify-center rounded-[30px] bg-white px-4 py-2 font-tag text-sm tracking-[-0.01em] whitespace-nowrap text-black md:px-5 md:py-2.5 md:text-base"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      <div className="absolute bottom-5 left-5 right-5 z-10 flex items-end justify-between gap-3 md:bottom-8 md:left-8 md:right-8">
        <h3
          className={`shrink-0 font-heading font-semibold text-white transition-transform duration-300 group-hover:translate-x-2 ${
            item.title === "Sapforce"
              ? "text-3xl md:text-5xl"
              : item.title === "Packsy"
                ? "text-2xl md:text-4xl"
                : "text-xl md:text-3xl"
          }`}
        >
          {item.title}
        </h3>
        <div className="flex max-w-[70%] flex-wrap justify-end gap-2">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className={`inline-flex items-center justify-center rounded-[30px] px-4 py-[9px] font-tag text-sm tracking-[-0.01em] whitespace-nowrap md:px-6 md:py-[11px] md:text-[18px] ${
                item.title === "Packsy"
                  ? "bg-white text-black"
                  : "bg-white/8 text-white"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}