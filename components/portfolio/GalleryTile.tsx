"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import type { PortfolioGalleryItem } from "@/lib/data/portfolioGallery";
import { portfolioCategories } from "@/lib/data/portfolioGallery";

export default function GalleryTile({ item }: { item: PortfolioGalleryItem }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isVideo = item.type === "video";
  const label =
    portfolioCategories.find((category) => category.id === item.category)
      ?.label ?? item.category;

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !isVideo) return;

    const tryPlay = () => {
      video.muted = true;
      video.play().catch(() => {});
    };

    tryPlay();
    video.addEventListener("canplay", tryPlay);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          tryPlay();
        } else {
          video.pause();
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(video);

    return () => {
      video.removeEventListener("canplay", tryPlay);
      observer.disconnect();
    };
  }, [isVideo, item.src]);

  return (
    <article className="group relative aspect-[4/3] w-full overflow-hidden rounded-[24px] border border-white/10 bg-neutral-900 shadow-xl md:rounded-[30px]">
      {isVideo ? (
        <video
          ref={videoRef}
          src={item.src}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-label={item.alt}
          className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      ) : (
        <Image
          src={item.src}
          alt={item.alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      )}

      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />

      <span className="absolute bottom-4 left-4 rounded-full bg-white/95 px-3 py-1.5 font-tag text-xs font-semibold tracking-[-0.01em] text-black opacity-0 shadow-md transition-opacity duration-300 group-hover:opacity-100 sm:px-4 sm:py-2 sm:text-sm">
        {label}
      </span>
    </article>
  );
}
