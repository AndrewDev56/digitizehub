"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import WorkPrincipleCard from "@/components/ui/WorkPrincipleCard";
import { workPrinciples } from "@/lib/data/howWeWork";
import FadeIn from "@/components/animation/FadeIn";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function HowWeWork() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

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
            end: () => `+=${Math.max(track.scrollWidth - window.innerWidth + 400, 800)}`,
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
      className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-background "
    >
      {/* Ambient background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-30"
      >
        <div className="size-[650px] rounded-full bg-accent-to/15 blur-[140px] md:size-[850px]" />
      </div>

      <div className="relative z-10 w-full">
        {/* Header */}
        <div className="mx-auto max-w-[1632px] px-6 text-center md:px-9">
          <FadeIn direction="up">
            <h2 className="font-heading text-4xl font-normal tracking-[-0.02em] text-white sm:text-5xl md:text-7xl">
              How We <span className="font-accent italic ">Work</span>
            </h2>
          </FadeIn>
        </div>

        {/* Horizontal Pinning Track */}
        <div className="relative mt-16 w-full overflow-hidden md:mt-20">
          <div
            ref={trackRef}
            className="flex items-center gap-0 px-6 sm:px-12 md:px-24 will-change-transform"
          >
            {workPrinciples.map((principle, index) => (
              <div
                key={principle.number}
                className="flex shrink-0 items-center"
              >
                <WorkPrincipleCard principle={principle} />

                {index < workPrinciples.length - 1 && (
                  <div
                    aria-hidden
                    className="flex shrink-0 items-center px-4 md:px-8 text-white/20"
                  >
                    <span className="h-px w-8 md:w-16 border-t border-dashed border-white/25 block" />
                    <span className="ml-1 text-sm font-light text-white/30">→</span>
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
