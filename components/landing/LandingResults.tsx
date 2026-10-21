"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import FadeIn from "@/components/animation/FadeIn";
import { landingResults, landingResultsIntro } from "@/lib/data/landing";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function SliderArrow({
  direction,
  onClick,
}: {
  direction: "prev" | "next";
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-label={direction === "prev" ? "Previous result" : "Next result"}
      onClick={onClick}
      className="flex size-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.08] text-white/90 shadow-lg transition-all duration-300 active:scale-95"
    >
      <svg
        className="size-4"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {direction === "prev" ? (
          <>
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </>
        ) : (
          <>
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </>
        )}
      </svg>
    </button>
  );
}

function ResultCard({
  item,
  className = "",
}: {
  item: (typeof landingResults)[number];
  className?: string;
}) {
  return (
    <article
      className={`overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.04] shadow-xl backdrop-blur-md md:flex md:h-[320px] md:rounded-[28px] lg:h-[340px] ${className}`}
    >
      <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden bg-white/5 md:aspect-auto md:h-full md:w-[46%]">
        <Image
          src={item.image}
          alt={`${item.name} project`}
          fill
          sizes="(max-width: 768px) 100vw, 420px"
          className="object-cover object-top"
        />
      </div>

      <div className="grid min-w-0 flex-1 gap-4 p-5 sm:p-6 md:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] md:gap-6 md:p-6">
        <ul className="flex flex-col gap-2.5">
          {item.stats.map((stat) => (
            <li key={stat.label}>
              <p className="font-heading text-xl font-semibold tracking-[-0.03em] text-white md:text-[26px]">
                {stat.value}
              </p>
              <p className="mt-0.5 font-body text-xs text-white/55">{stat.label}</p>
            </li>
          ))}
        </ul>

        <div className="flex min-w-0 flex-col">
          <p className="font-accent text-3xl leading-none text-brand-red">“</p>
          <p className="mt-1 line-clamp-4 font-body text-sm leading-relaxed text-white/80">
            {item.quote}
          </p>
          <div className="mt-auto flex items-center gap-3 pt-4">
            <span className="relative size-11 shrink-0 overflow-hidden rounded-full border border-white/10">
              <Image src={item.avatar} alt="" fill sizes="44px" className="object-cover" />
            </span>
            <div>
              <p className="font-heading text-sm font-semibold text-white md:text-base">{item.name}</p>
              <p className="font-body text-xs text-white/50 md:text-sm">{item.role}</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function LandingResults() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef(0);
  const [index, setIndex] = useState(0);

  const goTo = (next: number) => {
    const total = landingResults.length;
    setIndex(((next % total) + total) % total);
  };

  useGSAP(
    () => {
      const section = sectionRef.current;
      const track = trackRef.current;
      if (!section || !track) return;

      const getScrollAmount = () => {
        const offset = window.innerWidth < 768 ? 40 : 160;
        return -(track.scrollWidth - window.innerWidth + offset);
      };

      const media = gsap.matchMedia();

      media.add("(min-width: 768px)", () => {
        const tween = gsap.to(track, {
          x: getScrollAmount,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () =>
              `+=${Math.max(track.scrollWidth - window.innerWidth + 400, 800)}`,
            pin: true,
            pinSpacing: true,
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });

        const refresh = () => ScrollTrigger.refresh();
        track.querySelectorAll("img").forEach((image) => {
          if (!image.complete) image.addEventListener("load", refresh, { once: true });
        });

        return () => {
          tween.scrollTrigger?.kill();
          tween.kill();
        };
      });

      return () => media.revert();
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-0 flex-col justify-start overflow-hidden bg-background py-20 md:min-h-screen md:pt-28 md:pb-10"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-30"
      >
        <div className="size-[650px] rounded-full bg-accent-to/15 blur-[140px] md:size-[850px]" />
      </div>

      <div className="relative z-10 w-full">
        <div className="mx-auto max-w-[1632px] px-6 text-center md:px-9">
          <FadeIn direction="up">
            <p className="font-body text-sm tracking-[0.08em] text-white/50 uppercase">
              {landingResultsIntro.eyebrow}
            </p>
            <h2
              data-gsap-ignore
              className="mt-3 font-heading text-3xl leading-tight font-semibold tracking-[-0.02em] text-white sm:text-4xl md:text-[48px]"
            >
              {landingResultsIntro.titleLead}{" "}
              <span className="font-accent font-normal italic">
                {landingResultsIntro.titleAccent}
              </span>
            </h2>
            <p className="mx-auto mt-3 max-w-5xl font-body text-sm leading-relaxed text-white/70 md:text-xl">
              {landingResultsIntro.copy}
            </p>
          </FadeIn>
        </div>

        <div data-gsap-ignore className="mx-auto mt-10 w-full max-w-[420px] px-4 md:hidden">
          <div className="flex items-center gap-3">
            <SliderArrow direction="prev" onClick={() => goTo(index - 1)} />

            <div
              className="min-w-0 flex-1 overflow-hidden"
              onTouchStart={(event) => {
                touchStartX.current = event.changedTouches[0]?.clientX ?? 0;
              }}
              onTouchEnd={(event) => {
                const delta = (event.changedTouches[0]?.clientX ?? 0) - touchStartX.current;
                if (delta > 40) goTo(index - 1);
                if (delta < -40) goTo(index + 1);
              }}
            >
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${index * 100}%)` }}
              >
                {landingResults.map((item) => (
                  <div key={item.name} className="w-full shrink-0 px-1">
                    <ResultCard item={item} />
                  </div>
                ))}
              </div>
            </div>

            <SliderArrow direction="next" onClick={() => goTo(index + 1)} />
          </div>

          <div className="mt-6 flex items-center justify-center gap-2.5">
            {landingResults.map((item, i) => (
              <button
                key={item.name}
                type="button"
                aria-label={`Go to ${item.name}`}
                onClick={() => setIndex(i)}
                className={`size-2 rounded-full transition-all duration-300 ${
                  i === index
                    ? "scale-125 bg-brand-red shadow-[0_0_8px_rgba(255,0,54,0.6)]"
                    : "bg-white/20"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="relative mt-8 hidden w-full overflow-hidden md:block">
          <div
            ref={trackRef}
            className="flex items-stretch gap-6 px-6 will-change-transform sm:px-12 md:gap-8 md:px-24"
          >
            {landingResults.map((item) => (
              <div key={item.name} className="w-[min(980px,82vw)] shrink-0">
                <ResultCard item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
