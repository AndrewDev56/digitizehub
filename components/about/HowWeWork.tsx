"use client";

import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import WorkPrincipleCard from "@/components/ui/WorkPrincipleCard";
import { workPrinciples } from "@/lib/data/howWeWork";
import FadeIn from "@/components/animation/FadeIn";

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
      aria-label={direction === "prev" ? "Previous principle" : "Next principle"}
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

export default function HowWeWork() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef(0);
  const [index, setIndex] = useState(0);

  const goTo = (next: number) => {
    const total = workPrinciples.length;
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
      className="relative flex min-h-0 flex-col justify-center overflow-hidden bg-background py-20 md:min-h-screen md:py-0"
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
            <h2 className="font-heading text-3xl font-normal tracking-[-0.02em] text-white sm:text-5xl md:text-7xl">
              How We <span className="font-accent italic ">Work</span>
            </h2>
          </FadeIn>
        </div>

        <div
          data-gsap-ignore
          className="mx-auto mt-10 w-full max-w-[420px] px-4 md:hidden"
        >
          <div className="flex items-center gap-3">
            <SliderArrow direction="prev" onClick={() => goTo(index - 1)} />

            <div
              className="min-w-0 flex-1 overflow-hidden"
              onTouchStart={(event) => {
                touchStartX.current = event.changedTouches[0]?.clientX ?? 0;
              }}
              onTouchEnd={(event) => {
                const delta =
                  (event.changedTouches[0]?.clientX ?? 0) - touchStartX.current;
                if (delta > 40) goTo(index - 1);
                if (delta < -40) goTo(index + 1);
              }}
            >
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${index * 100}%)` }}
              >
                {workPrinciples.map((principle) => (
                  <div
                    key={principle.number}
                    className="w-full shrink-0 px-1"
                  >
                    <WorkPrincipleCard
                      principle={principle}
                      className="!h-auto min-h-[190px] !w-full"
                    />
                  </div>
                ))}
              </div>
            </div>

            <SliderArrow direction="next" onClick={() => goTo(index + 1)} />
          </div>

          <div className="mt-6 flex items-center justify-center gap-2.5">
            {workPrinciples.map((principle, i) => (
              <button
                key={principle.number}
                type="button"
                aria-label={`Go to ${principle.title}`}
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

        <div className="relative mt-20 hidden w-full overflow-hidden md:block">
          <div
            ref={trackRef}
            className="flex items-center gap-0 px-6 will-change-transform sm:px-12 md:px-24"
          >
            {workPrinciples.map((principle, i) => (
              <div key={principle.number} className="flex shrink-0 items-center">
                <WorkPrincipleCard principle={principle} />

                {i < workPrinciples.length - 1 && (
                  <div
                    aria-hidden
                    className="flex shrink-0 items-center px-4 text-white/20 md:px-8"
                  >
                    <span className="block h-px w-8 border-t border-dashed border-white/25 md:w-16" />
                    <span className="ml-1 text-sm font-light text-white/30">
                      →
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
