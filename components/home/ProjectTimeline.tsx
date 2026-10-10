"use client";

import Image from "next/image";
import TimelineStepCard from "@/components/ui/TimelineStepCard";
import { timelineSteps } from "@/lib/data/projectTimeline";
import FadeIn from "@/components/animation/FadeIn";
import StaggerContainer, { StaggerItem } from "@/components/animation/StaggerContainer";

export default function ProjectTimeline() {
  return (
    <section className="relative isolate overflow-visible py-24 md:py-32">
      {/* Ambient Eclipse Glow - Left */}
      <div
        aria-hidden="true"
        data-gsap-ambient
        data-gsap-scale="1.1"
        data-gsap-opacity="0.8"
        data-gsap-duration="10"
        className="pointer-events-none absolute top-1/2 -translate-y-1/2 -left-[100px] sm:-left-[160px] md:-left-[200px] z-0 w-[420px] sm:w-[600px] md:w-[780px] lg:w-[950px] select-none opacity-75"
      >
        <Image
          src="/images/ellipse-left.png"
          alt=""
          width={950}
          height={950}
          className="h-auto w-full object-contain pointer-events-none"
        />
      </div>
      <div className="mx-auto max-w-[1632px] px-6 md:px-9">
        <FadeIn direction="up">
          <h2 className="text-center font-heading text-4xl font-semibold tracking-[-0.02em] text-white md:text-6xl">
            How a <span className="font-accent italic ">Project</span> Runs
          </h2>
        </FadeIn>

        <StaggerContainer staggerChildren={0.15} className="mt-16 grid grid-cols-1 gap-6 2xl:-mx-9 md:mt-20 md:grid-cols-3">
          {timelineSteps.map((step) => (
            <StaggerItem key={step.number}>
              <TimelineStepCard step={step} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn direction="up" delay={0.3}>
          <p className="mt-10 text-center font-body text-sm text-white/50">
            Fixed price quotes before work starts. You own everything we make.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}