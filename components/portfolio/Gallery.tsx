"use client";

import { useLayoutEffect, useMemo, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
import FadeIn from "@/components/animation/FadeIn";
import StaggerContainer, {
  StaggerItem,
} from "@/components/animation/StaggerContainer";
import GallerySidebar from "@/components/portfolio/GallerySidebar";
import GalleryTile from "@/components/portfolio/GalleryTile";
import {
  portfolioGallery,
  type PortfolioCategory,
} from "@/lib/data/portfolioGallery";

export default function Gallery() {
  const [active, setActive] = useState<"all" | PortfolioCategory>("all");

  const items = useMemo(
    () =>
      active === "all"
        ? portfolioGallery
        : portfolioGallery.filter((item) => item.category === active),
    [active],
  );

  useLayoutEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      ScrollTrigger.getAll().forEach((trigger) => {
        const target = trigger.trigger;
        if (target && !document.contains(target)) {
          trigger.kill();
        }
      });
      ScrollTrigger.refresh();

      const maxScroll = Math.max(
        0,
        document.documentElement.scrollHeight - window.innerHeight,
      );
      if (window.scrollY > maxScroll) {
        window.scrollTo({ top: maxScroll, behavior: "auto" });
      }
    });

    return () => window.cancelAnimationFrame(frame);
  }, [active, items.length]);

  return (
    <section className="relative isolate overflow-hidden pb-24 md:pb-32">
      <div
        aria-hidden="true"
        data-gsap-ambient
        data-gsap-scale="1.1"
        data-gsap-opacity="0.8"
        data-gsap-duration="10"
        className="pointer-events-none absolute top-[30%] -left-[100px] sm:-left-[160px] md:-left-[200px] z-0 w-[420px] sm:w-[600px] md:w-[780px] lg:w-[950px] select-none opacity-75"
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
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-heading text-3xl leading-tight font-semibold tracking-[-0.02em] text-white sm:text-4xl md:text-5xl lg:text-[56px]">
              Creative Work Built With{" "}
              <span className="font-accent font-normal italic">Strategy</span>,{" "}
              <span className="font-accent font-normal italic">Design</span>{" "}
              &amp; Business Goals In Mind
            </h2>
            <p className="mx-auto mt-5 max-w-2xl font-body text-sm text-white/70 md:text-lg">
              Each project below was built to generate leads, build a brand, or
              convert. Not just to look finished.
            </p>
          </div>
        </FadeIn>

        <div className="mt-12 grid grid-cols-1 gap-10 md:mt-16 md:grid-cols-[280px_1fr] md:items-start md:gap-12 lg:grid-cols-[300px_1fr] lg:gap-16">
          <FadeIn direction="right" className="md:sticky md:top-24">
            <GallerySidebar active={active} onChange={setActive} />
          </FadeIn>

          <StaggerContainer
            key={active}
            staggerChildren={0.08}
            className="min-h-0 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 md:gap-6"
          >
            {items.map((item) => (
              <StaggerItem key={item.id}>
                <GalleryTile item={item} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
