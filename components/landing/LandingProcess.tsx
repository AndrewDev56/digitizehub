"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import FadeIn from "@/components/animation/FadeIn";
import { landingProcess, landingProcessIntro } from "@/lib/data/landing";

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
      aria-label={direction === "prev" ? "Previous step" : "Next step"}
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

function ProcessCard({
  step,
  className = "",
}: {
  step: (typeof landingProcess)[number];
  className?: string;
}) {
  return (
    <article
      className={`flex w-[min(280px,calc(100vw-3rem))] flex-col rounded-[20px] border border-white/10 bg-white/[0.03] p-6 shadow-xl backdrop-blur-md sm:w-[360px] sm:p-7 md:w-[400px] ${className}`}
    >
      <div className="relative size-24">
        <Image
          src={step.icon}
          alt=""
          fill
          sizes="56px"
          className="object-contain"
        />
      </div>
      <h3 className="mt-5 font-heading text-lg font-semibold text-white md:text-[30px]">
        {step.title}
      </h3>
      <p className="mt-3 font-body text-lg leading-relaxed text-white/60">
        {step.copy}
      </p>
    </article>
  );
}

export default function LandingProcess() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef(0);
  const [index, setIndex] = useState(0);

  const goTo = (next: number) => {
    const total = landingProcess.length;
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
            <p className="font-body text-sm tracking-[0.08em] text-white/50 uppercase">
              {landingProcessIntro.eyebrow}
            </p>
            <h2 className="mt-3 font-heading text-3xl leading-tight font-semibold tracking-[-0.02em] text-white sm:text-4xl md:text-5xl">
              {landingProcessIntro.titleLead}{" "}
              <span className="font-accent font-normal italic">
                {landingProcessIntro.titleAccent}
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-5xl font-body text-sm leading-relaxed text-white/70 md:text-xl">
              {landingProcessIntro.copy}
            </p>
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
                {landingProcess.map((step) => (
                  <div key={step.title} className="w-full shrink-0 px-1">
                    <ProcessCard step={step} className="!w-full" />
                  </div>
                ))}
              </div>
            </div>

            <SliderArrow direction="next" onClick={() => goTo(index + 1)} />
          </div>

          <div className="mt-6 flex items-center justify-center gap-2.5">
            {landingProcess.map((step, i) => (
              <button
                key={step.title}
                type="button"
                aria-label={`Go to ${step.title}`}
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

        <div className="relative mt-16 hidden w-full overflow-hidden md:block">
          <div
            ref={trackRef}
            className="flex items-stretch gap-0 px-6 will-change-transform sm:px-12 md:px-24"
          >
            {landingProcess.map((step, i) => (
              <div key={step.title} className="flex shrink-0 items-center">
                <ProcessCard step={step} />

                {i < landingProcess.length - 1 && (
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
