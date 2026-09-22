"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { lifecycleSteps } from "@/lib/data/lifecycleSteps";
import LifecycleStepCard from "@/components/ui/LifecycleStepCard";
import FadeIn from "@/components/animation/FadeIn";
import StaggerContainer, { StaggerItem } from "@/components/animation/StaggerContainer";

export default function Lifecycle() {
  return (
    <section
      className="relative isolate overflow-hidden py-24 md:py-32"
      style={{ backgroundColor: "#000000" }}
    >
      <motion.div
        aria-hidden
        animate={{ opacity: [0.15, 0.3, 0.15], scale: [1, 1.15, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -bottom-40 -left-40 size-[500px] rounded-full bg-accent-to/20 blur-[120px]"
      />

      <div className="relative mx-auto max-w-[1632px] px-6 md:px-9">
        <FadeIn direction="up">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-xl">
              <h2 className="font-heading text-4xl font-normal tracking-[-0.02em] text-white md:text-6xl">
                The Lifecycle <span className="font-accent italic text-accent-from">Chain</span>
              </h2>
              <p className="mt-4 font-body text-base text-white/70 md:text-xl">
                One team from first sketch to still running two years later
              </p>
            </div>

            <div className="max-w-sm rounded-2xl bg-white/5 p-6 font-body text-sm leading-relaxed text-white/80 backdrop-blur border border-white/10 shadow-lg">
              What agencies build, you own — join, charge, keep running, and
              improve, without starting from scratch.
            </div>
          </div>
        </FadeIn>

        <div className="relative mt-16 md:mt-28">
          {/* Decorative chrome graphic with floating motion */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute -top-10 -right-[240px] hidden h-[700px] w-[700px] lg:block opacity-90"
          >
            <Image
              src="/images/lifecycle-bg-image.png"
              alt=""
              fill
              className="object-contain"
            />
          </motion.div>

          <StaggerContainer staggerChildren={0.25} className="flex flex-col gap-8">
            {lifecycleSteps.map((step, index) => (
              <StaggerItem
                key={step.title}
                className="max-w-md w-full lg:w-auto"
              >
                <div
                  className="lg:block hidden"
                  style={{ marginLeft: `${Math.min(index * 180, 540)}px` }}
                >
                  <LifecycleStepCard
                    step={step}
                    isLast={index === lifecycleSteps.length - 1}
                  />
                </div>
                <div className="block lg:hidden">
                  <LifecycleStepCard
                    step={step}
                    isLast={index === lifecycleSteps.length - 1}
                  />
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}