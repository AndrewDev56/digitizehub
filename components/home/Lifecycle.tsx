import { lifecycleSteps } from "@/lib/data/lifecycleSteps";
import LifecycleStepCard from "@/components/ui/LifecycleStepCard";

const indentClasses = [
  "ml-0",
  "lg:ml-[50px] xl:ml-[100px] 2xl:ml-[160px]",
  "lg:ml-[120px] xl:ml-[300px] 2xl:ml-[510px]",
  "lg:ml-[300px] xl:ml-[500px] 2xl:ml-[860px]",
];

export default function Lifecycle() {
  return (
    <section className="relative isolate overflow-hidden py-24 md:py-32" style={{ backgroundColor: '#000000' }}>
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-24 left-[10%] size-[360px] rounded-full bg-accent-to/20 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-110 -right-30 hidden h-[700px] w-[476px] opacity-90 lg:block"
      >
        <video
          src="/videos/lifecycle-video.mp4"
          poster="/images/lifecycle-bg-image.png"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="absolute inset-0 size-full object-contain"
        />
      </div>

      <div className="relative mx-auto max-w-[1632px] px-6 md:px-9">
        <h2 className="font-heading text-4xl font-normal tracking-[-0.02em] text-white md:text-6xl">
          The Lifecycle <span className="font-accent italic">Chain</span>
        </h2>
        <p className="mt-4 font-body text-lg font-medium tracking-[-0.01em] text-white md:mt-6 md:text-2xl">
          One team from first sketch to still running two years later
        </p>

        <div className="relative mt-8 md:mt-12">
          <div className="mb-10 max-w-[666px] rounded-[30px] bg-white/12 p-6 font-body text-base leading-[1.5] text-white/80 md:mb-0 md:ml-auto md:p-10">
            Most agencies hand you files and disappear. We design it, build
            it, put it live on infrastructure we manage, rank it, and keep it
            running. One team, one invoice, one person to call.
          </div>

          <div className="flex flex-col gap-4 md:gap-6">
            {lifecycleSteps.map((step, index) => (
              <div key={step.title} className={indentClasses[index]}>
                <LifecycleStepCard
                  step={step}
                  isFirst={index === 0}
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