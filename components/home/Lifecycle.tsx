import Image from "next/image";
import { lifecycleSteps } from "@/lib/data/lifecycleSteps";

export default function Lifecycle() {
  return (
    <section className="relative isolate overflow-visible py-20 md:py-28 lg:py-32">
      {/* Animated background ambient glow - Bottom Left corner */}
      <div
        aria-hidden="true"
        data-gsap-ambient
        data-gsap-scale="1.1"
        data-gsap-opacity="0.85"
        data-gsap-duration="10"
        className="pointer-events-none absolute -bottom-[160px] md:-bottom-[240px] -left-[100px] sm:-left-[140px] md:-left-[180px] z-0 w-[450px] sm:w-[600px] md:w-[780px] lg:w-[950px] select-none opacity-80"
      >
        <Image
          src="/images/ellipse-left.png"
          alt=""
          width={950}
          height={950}
          className="h-auto w-full object-contain pointer-events-none"
        />
      </div>

      {/* 3D Metallic Chrome Sculpture on the Right */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-12 md:top-16 -right-12 md:-right-20 lg:-right-52 z-0 hidden h-[750px] lg:h-[860px] w-[500px] lg:w-[806px] opacity-90 lg:block"
      >
        <video
          src="/videos/lifecycle-video.mp4"
          poster="/images/lifecycle-bg-image.png"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="absolute inset-0 size-full rotate-[-90deg] object-contain"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1632px] px-6 md:px-9">
        {/* Section Header & Frosted Glass Card */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 md:gap-12">
          <div className="max-w-xl">
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-normal tracking-[-0.02em] text-white">
              The Lifecycle <span className="font-accent font-normal italic text-white">Chain</span>
            </h2>
            <p className="mt-3 font-body text-sm sm:text-base text-white/70 font-normal">
              One team from first sketch to still running two years later
            </p>
          </div>

          {/* Frosted Glass Info Card Overlapping Video */}
          <div className="relative z-10 rounded-[24px] sm:rounded-[30px] border border-white/15 bg-white/[0.08] backdrop-blur-xl p-6 sm:p-8 max-w-[500px] shadow-2xl">
            <p className="font-body text-xs sm:text-sm md:text-base leading-[1.6] text-white/80">
              Most agencies hand you files and disappear. We design it, build
              it, put it live on infrastructure we manage, rank it, and keep it
              running. One team, one invoice, one person to call.
            </p>
          </div>
        </div>

        {/* Stepped Cascade Chain Steps */}
        <div className="mt-14 md:mt-20 flex flex-col gap-8 md:gap-12">
          {lifecycleSteps.map((step, index) => {
            const isFirst = index === 0;
            const isLast = index === lifecycleSteps.length - 1;

            const indentClasses = [
              "lg:ml-0",
              "lg:ml-[160px] xl:ml-[220px]",
              "lg:ml-[320px] xl:ml-[440px]",
              "lg:ml-[480px] xl:ml-[660px]",
            ][index];

            return (
              <div
                key={step.title}
                className={`flex items-start gap-4 sm:gap-6 ${indentClasses}`}
              >
                {!isFirst && (
                  <div className="hidden lg:flex shrink-0 pt-1 items-center justify-center">
                    <Image
                      src="/icons/lifecycle-arrow.svg"
                      alt=""
                      width={70}
                      height={70}
                      className="size-[55px] xl:size-[68px] opacity-80"
                    />
                  </div>
                )}

                <div className="flex flex-col">
                  <h3 className="font-accent text-4xl sm:text-5xl md:text-6xl font-normal italic text-white tracking-wide">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 font-body text-xs sm:text-sm md:text-base italic text-white/70">
                    {step.description}
                  </p>
                  {!isLast && (
                    <div
                      aria-hidden="true"
                      className="mt-4 sm:mt-5 h-px w-[220px] sm:w-[280px] md:w-[320px] bg-white/10"
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}