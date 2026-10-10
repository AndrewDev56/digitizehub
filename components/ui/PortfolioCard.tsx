"use client";

import { useRef } from "react";
import Image from "next/image";
import type { PortfolioItem } from "@/lib/data/portfolio";

export default function PortfolioCard({
  item,
  className = "",
}: {
  item: PortfolioItem;
  className?: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div
      data-work-card
      data-gsap-stagger-item
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`group relative w-full overflow-hidden rounded-[24px] sm:rounded-[36px] md:rounded-[48px] border border-white/10 bg-neutral-900 shadow-xl cursor-pointer transition-transform duration-500 hover:-translate-y-1 ${className}`}
      style={{ aspectRatio: `${item.imageWidth} / ${item.imageHeight}` }}
    >
      {/* Static Image Thumbnail - Visible at base */}
      {item.image && (
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="absolute inset-0 size-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      )}

      {/* Video Container with Expanding Circle Wipe Transition on Hover */}
      <div className="absolute inset-0 size-full overflow-hidden transition-[clip-path] duration-700 ease-in-out [clip-path:circle(0%_at_50%_50%)] group-hover:[clip-path:circle(150%_at_50%_50%)]">
        <video
          ref={videoRef}
          src={item.video}
          loop
          muted
          playsInline
          preload="metadata"
          aria-label={`${item.title} preview`}
          className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>


      {/* Gradient Backdrop on Hover */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 transition-opacity duration-400 group-hover:opacity-100"
      />

      {/* Top Right Tags - Staggered slide-in from right on hover */}
      <div className="absolute top-4 right-4 z-10 flex flex-wrap justify-end gap-1.5 sm:gap-2 md:top-6 md:right-6 pointer-events-none group-hover:pointer-events-auto">
        {item.tags.map((tag, index) => (
          <span
            key={tag}
            style={{
              transitionDelay: `${index * 80 + 50}ms`,
            }}
            className="inline-flex translate-x-8 items-center justify-center rounded-full bg-white/95 px-3 py-1.5 font-tag text-xs font-semibold tracking-[-0.01em] whitespace-nowrap text-black shadow-md backdrop-blur-md opacity-0 transition-all duration-400 ease-out group-hover:translate-x-0 group-hover:opacity-100 sm:px-4 sm:py-2 md:px-5 md:py-2 md:text-sm hover:bg-white"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Bottom Left Title - Word by word staggered reveal on hover */}
      <div className="absolute bottom-4 left-4 z-10 md:bottom-6 md:left-6">
        <h3 className="flex flex-wrap gap-x-2 font-heading text-base font-medium text-white sm:text-2xl md:text-4xl">
          {item.title.split(" ").map((word, wordIndex) => (
            <span
              key={`${word}-${wordIndex}`}
              className="inline-block overflow-hidden pb-1"
            >
              <span
                style={{
                  transitionDelay: `${wordIndex * 70 + 80}ms`,
                }}
                className="inline-block translate-y-full opacity-0 transition-all duration-400 ease-out group-hover:translate-y-0 group-hover:opacity-100"
              >
                {word}
              </span>
            </span>
          ))}
        </h3>
      </div>
    </div>
  );
}
