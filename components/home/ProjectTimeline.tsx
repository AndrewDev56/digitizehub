import TimelineStepCard from "@/components/ui/TimelineStepCard";
import { timelineSteps } from "@/lib/data/projectTimeline";

export default function ProjectTimeline() {
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-[1632px] px-6 md:px-9">
        <h2 className="text-center font-heading text-4xl font-semibold tracking-[-0.02em] text-white md:text-6xl">
          How a <span className="font-accent italic">Project</span> Runs
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-4 md:mt-20 md:grid-cols-3">
          {timelineSteps.map((step) => (
            <TimelineStepCard key={step.number} step={step} />
          ))}
        </div>

        <p className="mt-10 text-center font-body text-sm text-white/40">
          Fixed price quotes before work starts. You own everything we make.
        </p>
      </div>
    </section>
  );
}