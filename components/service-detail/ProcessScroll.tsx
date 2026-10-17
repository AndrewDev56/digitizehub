"use client";

import { useRef, type ReactNode } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { ProcessStep } from "@/lib/data/serviceDetail";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function ProcessScroll({
  title,
  steps,
}: {
  title: ReactNode;
  steps: ProcessStep[];
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const track = trackRef.current;
      if (!section || !track || steps.length < 2) return;

      const media = gsap.matchMedia();

      media.add("(prefers-reduced-motion: no-preference)", () => {
        const getDistance = () => Math.max(0, track.scrollWidth - section.clientWidth);

        const tween = gsap.to(track, {
          x: () => -getDistance(),
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${Math.max(getDistance() + window.innerHeight * 0.35, window.innerHeight)}`,
            pin: true,
            pinSpacing: true,
            scrub: 0.65,
            anticipatePin: 1,
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
    { scope: sectionRef, dependencies: [steps.length], revertOnUpdate: true },
  );

  return (
    <section
      ref={sectionRef}
      data-gsap-ignore
      className="relative overflow-hidden bg-background"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute top-[200px] -left-[150px] size-[400px] rounded-full bg-red-600/50 blur-[120px] 2xl:size-[600px] 2xl:blur-[160px]"
      />
      <div className="relative py-24 md:py-32">
        <div className="mx-auto w-full max-w-[1632px] px-4 md:px-9 2xl:px-0">
          <h2 className="font-heading text-[28px] leading-[1.15] font-semibold tracking-[-0.01em] text-white sm:text-4xl md:text-6xl 2xl:text-[76px]">
            {title}
          </h2>
        </div>
        <div className="mt-12 min-h-0 2xl:mt-[52px]">
          <div
            ref={trackRef}
            className="flex w-max items-stretch gap-4 px-4 will-change-transform md:gap-6 md:px-9 2xl:gap-[60px] 2xl:px-[max(0px,calc((100vw-1632px)/2))]"
          >
            {steps.map((step) => (
              <article
                key={step.title}
                className="flex w-[min(85vw,36rem)] shrink-0 flex-col rounded-[30px] border border-white/8 bg-white/4 p-7 md:w-[min(70vw,32rem)] md:p-10 2xl:w-[560px]"
              >
                <div className="flex size-14 items-center justify-center rounded-2xl bg-white/10 md:size-16 2xl:size-[100px] 2xl:rounded-[14px]">
                  <Image src={step.image} alt="" width={50} height={50} className="size-7 md:size-8 2xl:size-[50px]" />
                </div>
                <div className="mt-8 md:mt-10">
                  <h3 className="font-heading text-2xl font-semibold text-white md:text-[30px]">{step.title}</h3>
                  <p className="mt-4 max-w-sm font-body text-base leading-7 text-white/65 md:text-[18px]">{step.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
