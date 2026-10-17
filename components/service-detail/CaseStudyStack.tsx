"use client";

import { useEffect, useRef } from "react";
import type { PortfolioItem } from "@/lib/data/portfolio";

function StackVideo({ src, title }: { src: string; title: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      src={src}
      muted
      loop
      playsInline
      preload="metadata"
      aria-label={`${title} case study`}
      className="absolute inset-0 size-full object-cover"
    />
  );
}

export default function CaseStudyStack({ items }: { items: PortfolioItem[] }) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const wrappers = Array.from(root.querySelectorAll<HTMLElement>("[data-stack-item]"));
    let frame = 0;

    const update = () => {
      wrappers.forEach((wrapper, index) => {
        const card = wrapper.querySelector<HTMLElement>("[data-stack-card]");
        if (!card) return;

        const cardRect = card.getBoundingClientRect();
        let covered = 0;

        for (let nextIndex = index + 1; nextIndex < wrappers.length; nextIndex += 1) {
          const nextCard = wrappers[nextIndex].querySelector<HTMLElement>("[data-stack-card]");
          if (!nextCard) continue;
          const nextRect = nextCard.getBoundingClientRect();
          const span = Math.max(1, cardRect.height * 0.85);
          const progress = Math.min(1, Math.max(0, (cardRect.bottom - nextRect.top) / span));
          covered += progress;
        }

        const width = Math.max(0.72, 1 - covered * 0.12);
        card.style.width = `${width * 100}%`;
      });
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        update();
      });
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [items.length]);

  return (
    <div ref={rootRef} className="mt-16 pb-24 2xl:mt-[100px] md:pb-32">
      {items.map((item, index) => (
        <div
          key={`${item.video}-${item.title}`}
          data-stack-item
          className="sticky h-[64vh] sm:h-[70vh] md:h-[98vh]"
          style={{
            top: `calc(5.5rem + ${index * 2}rem)`,
            zIndex: index + 1,
          }}
        >
          <article
            data-stack-card
            className="relative mx-auto h-[52vh] w-full origin-top overflow-hidden rounded-[20px] border border-white/10 bg-[#111111] shadow-[0_24px_80px_rgba(0,0,0,0.45)] sm:h-[58vh] sm:rounded-[30px] md:h-[80vh]"
          >
            <StackVideo src={item.video} title={item.title} />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent"
            />
            <div className="absolute inset-x-6 bottom-6 flex items-end justify-between gap-5 md:inset-x-12 md:bottom-12">
              <div>
                <p className="font-tag text-xs uppercase tracking-[0.08em] text-white/70">
                  {item.tags.join(" · ")}
                </p>
                <h3 className="mt-2 font-heading text-xl font-semibold text-white sm:mt-3 sm:text-3xl md:text-5xl">
                  {item.title}
                </h3>
              </div>
            </div>
          </article>
        </div>
      ))}
    </div>
  );
}
