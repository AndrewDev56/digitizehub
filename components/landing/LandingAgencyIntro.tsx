"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import FadeIn from "@/components/animation/FadeIn";
import { landingAgencyIntro } from "@/lib/data/landing";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

export default function LandingAgencyIntro({ onStart }: { onStart: () => void }) {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      const heading = headingRef.current;
      if (!heading) return;

      const media = gsap.matchMedia();

      media.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(heading, { color: "#ffffff" });
      });

      media.add("(prefers-reduced-motion: no-preference)", () => {
        const split = SplitText.create(heading, {
          type: "words",
          aria: "hidden",
        });

        gsap.set(split.words, { color: "rgba(255,255,255,0.18)" });

        gsap
          .timeline({
            scrollTrigger: {
              trigger: heading,
              start: "top 85%",
              end: "bottom 40%",
              scrub: 0.6,
            },
          })
          .to(split.words, {
            color: "#ffffff",
            stagger: 0.05,
            ease: "none",
            duration: 0.35,
          })
          .to(split.words, {
            color: "#ffffff",
            stagger: 0.05,
            ease: "none",
            duration: 0.35,
          });

        return () => split.revert();
      });

      return () => media.revert();
    },
    { dependencies: [] },
  );

  return (
    <section className="relative isolate overflow-visible py-16 md:py-24" data-gsap-ignore>
      <div className="mx-auto grid max-w-[1632px] items-center gap-10 px-6 md:px-9 lg:grid-cols-[minmax(0,1.4fr)_minmax(220px,360px)] lg:gap-16">
        <div>
          <h2
            ref={headingRef}
            data-gsap-ignore
            className="font-heading text-2xl leading-[1.25] font-semibold tracking-[-0.02em] text-white sm:text-3xl md:text-[40px] md:leading-[1.2]"
          >
            {landingAgencyIntro.copy}
          </h2>
          <button
            type="button"
            onClick={onStart}
            className="group mt-8 inline-flex items-center gap-3 font-heading text-sm font-semibold tracking-[-0.01em] text-white transition-colors hover:text-brand-red md:text-base"
          >
            <span
              aria-hidden
              className="h-px w-8 bg-white transition-colors group-hover:bg-brand-red"
            />
            {landingAgencyIntro.cta}
          </button>
        </div>

        <FadeIn direction="left" className="flex justify-center lg:justify-end">
          <Image
            src="/images/logo.png"
            alt="Digitize Hub"
            width={256}
            height={114}
            className="h-auto w-[180px] sm:w-[220px] md:w-[256px]"
          />
        </FadeIn>
      </div>
    </section>
  );
}
