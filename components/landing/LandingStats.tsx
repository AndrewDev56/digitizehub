"use client";

import { useState } from "react";
import FadeIn from "@/components/animation/FadeIn";
import StaggerContainer, { StaggerItem } from "@/components/animation/StaggerContainer";
import AnimatedCounter from "@/components/animation/AnimatedCounter";
import { landingCounters } from "@/lib/data/landing";

export default function LandingStats() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="relative isolate overflow-visible py-16 md:py-24">
      <FadeIn direction="up">
        <div className="mx-auto max-w-[1632px] px-6 text-center md:px-9">
          <p className="font-body text-sm tracking-[0.08em] text-white/50 uppercase">
            Our Growth In Numbers
          </p>
          <h2 className="mt-3 font-heading text-3xl leading-tight font-semibold tracking-[-0.02em] text-white sm:text-4xl md:text-5xl">
            Helping Brands{" "}
            <span className="font-accent font-normal italic">Build, Launch & Grow</span>{" "}
            With Confidence
          </h2>
          <p className="mx-auto mt-4 max-w-3xl font-body text-sm leading-relaxed text-white/75 md:text-lg">
            Our work is focused on creating digital solutions that help businesses improve
            visibility, build trust, generate leads and turn online visitors into real
            customers.
          </p>
        </div>
      </FadeIn>

      <div className="mx-auto mt-10 max-w-[1632px] px-6 md:mt-16 md:px-9">
        <StaggerContainer
          staggerChildren={0.2}
          className="grid grid-cols-1 gap-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8"
        >
          {landingCounters.map((stat, index) => {
            const isHovered = hovered === index;
            return (
              <StaggerItem
                key={stat.label}
                className="group flex cursor-pointer flex-col items-center text-center"
              >
                <div
                  onMouseEnter={() => setHovered(index)}
                  onMouseLeave={() => setHovered(null)}
                  className="flex w-full flex-col items-center"
                >
                  <div className="flex h-[72px] items-center justify-center sm:h-[100px] md:h-[140px]">
                    <AnimatedCounter
                      value={stat.value}
                      className={`font-heading text-5xl leading-none font-bold tracking-[-0.03em] select-none transition-colors duration-300 sm:text-7xl md:text-8xl lg:text-[90px] ${
                        isHovered ? "text-white" : "text-[#9A9A9A]"
                      }`}
                    />
                  </div>
                  <h3 className="mt-6 font-heading text-xl font-semibold tracking-[-0.01em] text-white">
                    {stat.label}
                  </h3>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
