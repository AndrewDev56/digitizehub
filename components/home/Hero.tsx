"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Tag from "@/components/ui/Tag";
import LogoMarquee from "@/components/home/LogoMarquee";
import { trustColumns } from "@/lib/data/heroTrust";
import FadeIn from "@/components/animation/FadeIn";
import StaggerContainer, { StaggerItem } from "@/components/animation/StaggerContainer";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-background pt-[140px] pb-16 md:pt-[220px] md:pb-[60px]">
      {/* Animated background ambient glow */}
      <motion.div
        aria-hidden
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -top-[300px] -right-[300px] size-[650px] rounded-full bg-accent-to/20 blur-[130px]"
      />
      <motion.div
        aria-hidden
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.15, 0.22, 0.15],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute top-[500px] -left-[300px] size-[650px] rounded-full bg-accent-from/15 blur-[130px]"
      />

      <div className="relative mx-auto max-w-[1632px] px-6 md:px-9">
        <FadeIn direction="down" delay={0.1}>
          <p className="text-center font-body text-sm tracking-[0.01em] text-white/70 md:text-[18px]">
            Web, Apps and SEO&nbsp; · &nbsp;Calgary and Georgia
          </p>
        </FadeIn>

        <FadeIn direction="up" delay={0.25} duration={0.7}>
          <h1 className="mx-auto mt-6 max-w-[1356px] text-center font-heading text-[38px] leading-[1.15] font-semibold tracking-[-0.02em] text-white sm:text-6xl lg:text-[90px] lg:leading-[104px]">
            We{" "}
            <span className="font-accent font-bold italic bg-gradient-to-r from-white via-pink-200 to-accent-from bg-clip-text text-transparent">
              Design it
            </span>
            ,{" "}
            <span className="font-accent font-bold italic bg-gradient-to-r from-white via-pink-200 to-accent-from bg-clip-text text-transparent">
              Build it
            </span>
            ,{" "}
            <span className="font-accent font-bold italic bg-gradient-to-r from-white via-pink-200 to-accent-from bg-clip-text text-transparent">
              Launch it
            </span>
            , & Get it Found.
          </h1>
        </FadeIn>

        <StaggerContainer staggerChildren={0.15} delayChildren={0.4} className="mt-14 grid grid-cols-1 gap-12 md:mt-[70px] md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {trustColumns.map((column) => (
            <StaggerItem
              key={column.lines[0]}
              className="flex flex-col items-center gap-6 lg:items-start"
            >
              <div className="flex flex-col items-center gap-[18px] lg:items-end lg:self-stretch">
                <Image
                  src="/icons/star.png"
                  alt=""
                  width={18}
                  height={18}
                  className="size-[18px] self-center lg:self-start animate-pulse"
                />
                <p className="text-center font-tag text-sm leading-[1.5] font-medium text-white md:text-[18px] lg:max-w-[390px] lg:text-right">
                  {column.lines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-[6px] lg:justify-start">
                {column.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
            </StaggerItem>
          ))}

          <StaggerItem className="flex flex-col items-center gap-10 md:col-span-2 lg:col-span-1 lg:items-end lg:gap-[40px]">
            <div className="flex items-center gap-[18px]">
              <Image
                src="/images/trustpilot_logo.png"
                alt="Trustpilot"
                width={162}
                height={40}
                className="h-[34px] w-auto md:h-10 transition-transform hover:scale-105"
              />
              <span aria-hidden className="h-[38px] w-px bg-white/10" />
              <Image
                src="/images/clutch_logo.png"
                alt="Clutch"
                width={94}
                height={26}
                className="h-[22px] w-auto md:h-[26px] transition-transform hover:scale-105"
              />
            </div>

            <Button href="/contact">Book A Call</Button>
          </StaggerItem>
        </StaggerContainer>
      </div>

      <div className="mt-16 md:mt-[60px]">
        <LogoMarquee />
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="relative mt-10 flex flex-col items-center gap-2 md:mt-[30px]"
      >
        <span className="font-heading text-sm tracking-[0.1em] text-white/56 uppercase md:text-base">
          Discover
        </span>
        <Image
          src="/icons/Down_Arrow_5.svg"
          alt=""
          width={40}
          height={40}
          className="size-8 opacity-70 md:size-10"
        />
      </motion.div>
    </section>
  );
}