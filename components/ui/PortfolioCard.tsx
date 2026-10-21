"use client";

import { useEffect, useRef, useState } from "react";
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
  const [canHover, setCanHover] = useState(true);

  useEffect(() => {
    const media = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setCanHover(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || canHover) return;

    const play = () => {
      video.muted = true;
      video.playsInline = true;
      void video.play().catch(() => {});
    };

    play();

    const onReady = () => play();
    video.addEventListener("loadeddata", onReady);
    video.addEventListener("canplay", onReady);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) play();
          else video.pause();
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(video);

    return () => {
      video.removeEventListener("loadeddata", onReady);
      video.removeEventListener("canplay", onReady);
      observer.disconnect();
    };
  }, [canHover, item.video]);

  const handleMouseEnter = () => {
    if (!canHover || !videoRef.current) return;
    videoRef.current.currentTime = 0;
    void videoRef.current.play().catch(() => {});
  };

  const handleMouseLeave = () => {
    if (!canHover) return;
    videoRef.current?.pause();
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
      {item.image && (
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="absolute inset-0 size-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      )}

      <div
        className={`absolute inset-0 size-full overflow-hidden transition-[clip-path] duration-700 ease-in-out ${
          canHover
            ? "[clip-path:circle(0%_at_50%_50%)] group-hover:[clip-path:circle(150%_at_50%_50%)]"
            : "[clip-path:circle(150%_at_50%_50%)]"
        }`}
      >
        <video
          ref={videoRef}
          src={item.video}
          loop
          muted
          playsInline
          autoPlay={!canHover}
          preload={canHover ? "metadata" : "auto"}
          aria-label={`${item.title} preview`}
          className={`size-full object-cover transition-transform duration-700 ease-out ${
            canHover ? "group-hover:scale-105" : ""
          }`}
        />
      </div>

      <div
        aria-hidden
        className={`absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-400 ${
          canHover ? "opacity-0 group-hover:opacity-100" : "opacity-100"
        }`}
      />

      <div
        className={`absolute top-4 right-4 z-10 flex flex-wrap justify-end gap-1.5 sm:gap-2 md:top-6 md:right-6 ${
          canHover ? "pointer-events-none group-hover:pointer-events-auto" : ""
        }`}
      >
        {item.tags.map((tag, index) => (
          <span
            key={tag}
            style={{
              transitionDelay: canHover ? `${index * 80 + 50}ms` : "0ms",
            }}
            className={`inline-flex items-center justify-center rounded-full bg-white/95 px-3 py-1.5 font-tag text-xs font-semibold tracking-[-0.01em] whitespace-nowrap text-black shadow-md backdrop-blur-md transition-all duration-400 ease-out sm:px-4 sm:py-2 md:px-5 md:py-2 md:text-sm hover:bg-white ${
              canHover
                ? "translate-x-8 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                : "translate-x-0 opacity-100"
            }`}
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="absolute bottom-4 left-4 z-10 md:bottom-6 md:left-6">
        <h3 className="flex flex-wrap gap-x-2 font-heading text-base font-medium text-white sm:text-2xl md:text-4xl">
          {item.title.split(" ").map((word, wordIndex) => (
            <span
              key={`${word}-${wordIndex}`}
              className="inline-block overflow-hidden pb-1"
            >
              <span
                style={{
                  transitionDelay: canHover ? `${wordIndex * 70 + 80}ms` : "0ms",
                }}
                className={`inline-block transition-all duration-400 ease-out ${
                  canHover
                    ? "translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
                    : "translate-y-0 opacity-100"
                }`}
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

