"use client";

import TimelineStepCard from "@/components/ui/TimelineStepCard";
import { timelineSteps } from "@/lib/data/projectTimeline";
import FadeIn from "@/components/animation/FadeIn";
import StaggerContainer, { StaggerItem } from "@/components/animation/StaggerContainer";

export default function ProjectTimeline() {
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-[1632px] px-6 md:px-9">
        <FadeIn direction="up">
          <h2 className="text-center font-heading text-4xl font-semibold tracking-[-0.02em] text-white md:text-6xl">
            How a <span className="font-accent italic text-accent-from">Project</span> Runs
          </h2>
        </FadeIn>

        <StaggerContainer staggerChildren={0.15} className="mt-16 grid grid-cols-1 gap-4 md:mt-20 md:grid-cols-3">
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