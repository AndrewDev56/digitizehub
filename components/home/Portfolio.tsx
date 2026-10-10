"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "@/components/ui/Button";
import PortfolioCard from "@/components/ui/PortfolioCard";
import FadeIn from "@/components/animation/FadeIn";
import {
  portfolioLarge,
  portfolioMedium,
  portfolioWide,
  portfolioHalves,
} from "@/lib/data/portfolio";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Portfolio() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const cards = root.current?.querySelectorAll<HTMLElement>("[data-work-card]");
      if (!cards?.length) return;

      const media = gsap.matchMedia();
      media.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.set(cards, { autoAlpha: 0, y: 24 });
        ScrollTrigger.batch(cards, {
          interval: 0.12,
          batchMax: 3,
          start: "top 88%",
          once: true,
          onEnter: (batch) =>
            gsap.to(batch, {
              autoAlpha: 1,
              y: 0,
              duration: 0.65,
              stagger: 0.08,
              ease: "power2.out",
              overwrite: true,
            }),
        });
      });

      return () => media.revert();
    },
    { scope: root },
  );

  return (
    <section ref={root} className="relative isolate overflow-visible py-20 md:py-28">
      {/* Animated background ambient glow - Top Left corner */}
      <div
        aria-hidden="true"
        data-gsap-ambient
        data-gsap-scale="1.1"
        data-gsap-opacity="0.85"
        data-gsap-duration="9"
        className="pointer-events-none absolute -top-[120px] md:-top-[180px] -left-[100px] sm:-left-[140px] md:-left-[180px] z-0 w-[420px] sm:w-[580px] md:w-[750px] lg:w-[920px] select-none opacity-80"
      >
        <Image
          src="/images/ellipse-left.png"
          alt=""
          width={950}
          height={950}
          className="h-auto w-full object-contain pointer-events-none"
        />
      </div>

      <div className="relative mx-auto max-w-[1632px] px-6 md:px-9">
        <FadeIn direction="up">
          <div className="flex flex-col items-start text-left">
            <span className="font-body text-sm tracking-[0.01em] text-white/70">
              Our Portfolio
            </span>
            <h2 className="mt-2 font-heading text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl md:text-5xl lg:text-6xl">
              Selected{" "}
              <span className="font-accent font-normal italic text-white">
                Work
              </span>
            </h2>
          </div>
        </FadeIn>

        <div className="mt-12 flex flex-col gap-6 md:mt-16">
          <div className="flex flex-col gap-6 md:flex-row">
            <PortfolioCard item={portfolioLarge} className="md:flex-[940]" />
            <PortfolioCard item={portfolioMedium} className="md:flex-[666]" />
          </div>

          <PortfolioCard item={portfolioWide} />

          <div className="flex flex-col gap-6 md:flex-row">
            {portfolioHalves.map((item, index) => (
              <PortfolioCard
                key={`${item.title}-${index}`}
                item={item}
                className="md:flex-1"
              />
            ))}
          </div>
        </div>

        <FadeIn direction="up" delay={0.2} className="mt-12 flex justify-center md:mt-16">
          <Button href="/work">Explore All Work</Button>
        </FadeIn>
      </div>
    </section>
  );
}