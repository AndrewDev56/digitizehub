"use client";

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
    <section ref={root} className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-[1632px] px-6 md:px-9">
        <FadeIn direction="up">
          <div className="flex flex-col items-center gap-4 text-center">
            <span className="font-tag text-sm tracking-[0.02em] text-accent-to uppercase">
              Our Portfolio
            </span>
            <h2 className="max-w-2xl font-heading text-4xl font-semibold tracking-[-0.02em] text-white md:text-6xl">
              Selected Work
            </h2>
          </div>
        </FadeIn>

        <div className="mt-16 flex flex-col gap-6 md:mt-20">
          <div className="flex flex-col gap-6 md:flex-row">
            <PortfolioCard item={portfolioLarge} className="md:flex-[940]" />
            <PortfolioCard item={portfolioMedium} className="md:flex-[666]" />
          </div>

          <PortfolioCard item={portfolioWide} />

          <div className="flex flex-col gap-6 md:flex-row">
            {portfolioHalves.map((item) => (
              <PortfolioCard key={item.image} item={item} className="md:flex-1" />
            ))}
          </div>
        </div>

        <FadeIn direction="up" delay={0.2} className="mt-16 flex justify-center md:mt-20">
          <Button href="/work">View All Work</Button>
        </FadeIn>
      </div>
    </section>
  );
}