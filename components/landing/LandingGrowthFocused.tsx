"use client";

import Image from "next/image";
import FadeIn from "@/components/animation/FadeIn";
import { landingGrowthFocused } from "@/lib/data/landing";

export default function LandingGrowthFocused() {
  return (
    <section className="relative isolate overflow-visible pb-16 md:pb-24">
      {/* <div
        aria-hidden="true"
        data-gsap-ambient
        data-gsap-scale="1.1"
        data-gsap-opacity="0.8"
        data-gsap-duration="10"
        className="pointer-events-none absolute top-0 -right-[100px] z-0 w-[420px] opacity-70 select-none sm:w-[600px] md:w-[780px]"
      >
        <Image
          src="/images/ellipse-top-right.png"
          alt=""
          width={780}
          height={780}
          className="pointer-events-none h-auto w-full object-contain"
        />
      </div> */}

      <div className="relative mx-auto max-w-[1632px] px-6 md:px-9">
        <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16">
          <FadeIn direction="right">
            <p className="font-body text-sm tracking-[0.08em] text-brand-red uppercase">
              {landingGrowthFocused.eyebrow}
            </p>
            <h2
              data-gsap-ignore
              className="mt-3 max-w-xl font-heading text-3xl leading-tight font-semibold tracking-[-0.02em] text-white sm:text-4xl md:text-5xl"
            >
              {landingGrowthFocused.titleLead}{" "}
              <span className="font-accent font-normal italic">
                {landingGrowthFocused.titleAccent}
              </span>
            </h2>
          </FadeIn>
          <FadeIn direction="left">
            <p className="font-body text-sm leading-relaxed text-white/70 md:text-lg lg:pt-10">
              {landingGrowthFocused.copy}
            </p>
          </FadeIn>
        </div>

        <FadeIn direction="up" delay={0.1} className="mt-10 md:mt-14">
          <div data-gsap-bob className="relative mx-auto w-full">
            <Image
              src={landingGrowthFocused.image.src}
              alt={landingGrowthFocused.image.alt}
              width={landingGrowthFocused.image.width}
              height={landingGrowthFocused.image.height}
              className="h-auto w-full object-contain"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
