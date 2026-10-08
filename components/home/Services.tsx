"use client";

import { useState } from "react";
import Link from "next/link";
import { services } from "@/lib/data/services";
import FadeIn from "@/components/animation/FadeIn";
import StaggerContainer, { StaggerItem } from "@/components/animation/StaggerContainer";

export default function Services() {
  const listedServices = services.slice(1);
  const [activeHref, setActiveHref] = useState(listedServices[0].href);
  const active =
    listedServices.find((service) => service.href === activeHref) ??
    listedServices[0];

  return (
    <section className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-[1632px] px-6 md:px-9">
        <FadeIn direction="up">
          <div className="text-center">
            <h2 className="mt-4 font-heading text-4xl font-semibold tracking-[-0.02em] text-white md:text-6xl">
              What We Do
            </h2>
            <span className="font-tag text-sm tracking-[0.02em] text-white/60 uppercase block mt-2">
              One team from first sketch to still running two years later
            </span>
          </div>
        </FadeIn>

        <div className="mt-16 grid grid-cols-1 gap-12 md:mt-20 lg:grid-cols-2 lg:gap-16 items-center">
          <StaggerContainer staggerChildren={0.12} className="flex flex-col">
            {listedServices.map((service) => (
              <StaggerItem key={service.href} className="border-b border-white/10">
                <Link
                  href={service.href}
                  onMouseEnter={() => setActiveHref(service.href)}
                  onFocus={() => setActiveHref(service.href)}
                  className="group flex items-center justify-between py-6 duration-300 md:py-8"
                >
                  <span className="text-left font-heading text-xl font-semibold text-white md:text-3xl">
                    {service.title}
                  </span>
                  <span className="ml-4 shrink-0 text-3xl leading-none text-white opacity-50 transition-all duration-300 group-hover:rotate-45 group-hover:opacity-100">
                    →
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn direction="left" delay={0.2}>
            <Link
              href={active.href}
              className="relative block aspect-[4/3] overflow-hidden rounded-[30px] transition-transform duration-300 hover:scale-[1.02] md:rounded-[40px] border border-white/10 shadow-2xl group cursor-pointer"
            >
              <video
                key={active.video}
                src={active.video}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-108"
              />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 flex items-center justify-between">
                <h3 className="font-heading text-2xl font-semibold text-white md:text-3xl">
                  {active.title}
                </h3>
                <span className="flex size-12 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md transition-all duration-300 group-hover:bg-accent-to group-hover:scale-110">
                  ↗
                </span>
              </div>
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
