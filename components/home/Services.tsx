"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { services } from "@/lib/data/services";
import FadeIn from "@/components/animation/FadeIn";
import StaggerContainer, { StaggerItem } from "@/components/animation/StaggerContainer";

export default function Services() {
  const [activeHref, setActiveHref] = useState(services[1].href);
  const active =
    services.find((service) => service.href === activeHref) ??
    services[0];

  return (
    <section className="relative isolate overflow-visible py-20 md:py-28 lg:py-32">
      {/* Animated background ambient glow - Top Left corner */}
      <div
        aria-hidden="true"
        data-gsap-ambient
        data-gsap-scale="1.1"
        data-gsap-opacity="0.85"
        data-gsap-duration="10"
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

      <div className="relative z-10 mx-auto max-w-[1632px] px-6 md:px-9">
        <FadeIn direction="up">
          <div className="text-center">
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-normal tracking-[-0.02em] text-white">
              What We <span className="font-accent font-normal italic text-white">Do</span>
            </h2>
            <p className="mt-2 font-body text-xs sm:text-sm text-white/70 font-normal">
              One team from first sketch to still running two years later
            </p>
          </div>
        </FadeIn>

        <div className="mt-14 grid grid-cols-1 gap-12 md:mt-20 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Services List on Left */}
          <StaggerContainer staggerChildren={0.1} className="flex flex-col">
            {services.map((service) => {
              const isActive = service.href === active.href;
              return (
                <StaggerItem key={service.href} className="border-b border-white/10">
                  <Link
                    href={service.href}
                    onMouseEnter={() => setActiveHref(service.href)}
                    onFocus={() => setActiveHref(service.href)}
                    className="group flex items-center justify-between py-5 md:py-7 transition-all duration-300"
                  >
                    <span
                      className={`text-left font-heading text-xl sm:text-2xl md:text-[28px] transition-colors duration-300 ${
                        isActive
                          ? "font-medium text-white"
                          : "font-normal text-white/40 group-hover:text-white"
                      }`}
                    >
                      {service.title}
                    </span>
                    <span
                      className={`ml-4 shrink-0 text-2xl md:text-3xl leading-none transition-all duration-300 ${
                        isActive
                          ? "-rotate-45 text-white opacity-100"
                          : "rotate-0 text-white/30 opacity-60 group-hover:-rotate-45 group-hover:text-white group-hover:opacity-100"
                      }`}
                    >
                      →
                    </span>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

          {/* Video Preview on Right */}
          <FadeIn direction="left" delay={0.2}>
            <Link
              href={active.href}
              className="relative block aspect-[4/3] sm:aspect-[16/11] overflow-hidden rounded-[24px] sm:rounded-[36px] md:rounded-[44px] transition-transform duration-300 hover:scale-[1.01] border border-white/10 shadow-2xl group cursor-pointer"
            >
              <video
                key={active.video}
                src={active.video}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
