"use client";

import Button from "@/components/ui/Button";
import LogoMarquee from "@/components/home/LogoMarquee";
import FadeIn from "@/components/animation/FadeIn";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-background pt-[160px] pb-16 md:pt-[240px] md:pb-[60px]">
      <motion.div
        aria-hidden
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -top-[300px] -right-[300px] size-[600px] rounded-full bg-accent-to/15 blur-[120px]"
      />

      <div className="relative mx-auto max-w-[1100px] px-6 text-center md:px-9">
        <FadeIn direction="down">
          <p className="font-body text-sm tracking-[0.01em] text-white/70 md:text-[18px]">
            Web, Apps and SEO&nbsp; · &nbsp;Calgary and Georgia
          </p>
        </FadeIn>

        <FadeIn direction="up" delay={0.15}>
          <h1 className="mx-auto mt-6 font-heading text-[34px] leading-[1.2] font-semibold tracking-[-0.02em] text-white sm:text-5xl lg:text-[64px] lg:leading-[1.15]">
            Six Years, 200 Projects,{" "}
            <span className="font-accent italic text-accent-from">Two Countries, One Team.</span>
          </h1>
        </FadeIn>

        <FadeIn direction="up" delay={0.25}>
          <p className="mx-auto mt-6 max-w-lg font-body text-sm text-white/60 md:text-base">
            DigitizeHub is a full service digital agency with offices in
            Calgary and Georgia.
          </p>
        </FadeIn>

        <FadeIn direction="up" delay={0.35} className="mt-10 flex justify-center">
          <Button href="/contact">Tell Us About Your Project</Button>
        </FadeIn>
      </div>

      <div className="mt-16 md:mt-20">
        <LogoMarquee />
      </div>
    </section>
  );
}