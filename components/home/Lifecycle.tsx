import Image from "next/image";
import { lifecycleSteps } from "@/lib/data/lifecycleSteps";
import LifecycleStepCard from "@/components/ui/LifecycleStepCard";

/**
 * Rebuilt from a screenshot of the real Figma frame — a cascading diagonal
 * list (each step indented further right, connected by small curved arrow
 * icons), a dark text card top-right, and a decorative chrome/metallic
 * graphic filling the right side. Exact spacing/colors are estimated from
 * the screenshot; re-verify against the real nodes once Figma access is
 * back (still rate-limited as of this section).
 */
export default function Lifecycle() {
  return (
    <section className="relative isolate overflow-hidden  py-24 md:py-32"
      style={{ backgroundColor: "#000000" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-40 size-[500px] rounded-full bg-accent-to/20 blur-[120px]"
      />

      <div className="relative mx-auto max-w-[1632px] px-6 md:px-9">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-xl">
            <h2 className="font-heading text-4xl font-normal tracking-[-0.02em] text-white md:text-6xl">
              The Lifecycle <span className="font-accent italic">Chain</span>
            </h2>
            <p className="mt-4 font-body text-base text-white/70 md:text-xl">
              One team from first sketch to still running two years later
            </p>
          </div>

          {/* Dark text card — copy not legible in the screenshot, needs
              confirming against Figma once access is back. */}
          <div className="max-w-sm rounded-2xl bg-white/5 p-6 font-body text-sm leading-relaxed text-white/70 backdrop-blur">
            What agencies build, you own — join, charge, keep running, and
            improve, without starting from scratch.
          </div>
        </div>

        <div className="relative mt-20 md:mt-28">
          {/* Decorative chrome graphic */}
          <div className="pointer-events-none absolute -top-10 -right-[240px] hidden h-[700px] w-[700px] lg:block">
            <Image
              src="/images/lifecycle-bg-image.png"
              alt=""
              fill
              className="object-contain opacity-90"
            />
          </div>
          <div className="flex flex-col gap-8">
            {lifecycleSteps.map((step, index) => (
              <div
                key={step.title}
                style={{ marginLeft: `${60 + index * 220}px` }}
                className="max-w-md"
              >
                <LifecycleStepCard
                  step={step}
                  isLast={index === lifecycleSteps.length - 1}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}