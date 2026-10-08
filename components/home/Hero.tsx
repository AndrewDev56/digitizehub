"use client";

import Image from "next/image";
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
      <div
        aria-hidden
        data-gsap-ambient
        data-gsap-scale="1.2"
        data-gsap-opacity="0.25"
        data-gsap-duration="8"
        className="pointer-events-none absolute -top-[300px] -right-[300px] size-[650px] rounded-full bg-accent-to/20 blur-[130px]"
      />
      <div
        aria-hidden
        data-gsap-ambient
        data-gsap-scale="1.1"
        data-gsap-opacity="0.22"
        data-gsap-duration="10"
        className="pointer-events-none absolute top-[500px] -left-[300px] size-[650px] rounded-full bg-accent-from/15 blur-[130px]"
      />

      <div className="relative mx-auto max-w-[1632px] px-6 md:px-9">
        <FadeIn direction="down" delay={0.1}>
          <p className="text-center font-body text-sm tracking-[0.01em] text-white/70 md:text-[18px]">
            Web, Apps and SEO&nbsp; · &nbsp;Calgary and Georgia
          </p>
        </FadeIn>

        <h1 data-gsap-ignore className="mx-auto mt-6 max-w-[1356px] text-center font-heading text-[38px] leading-[1.15] font-semibold tracking-[-0.02em] text-white sm:text-6xl lg:text-[90px] lg:leading-[104px]">
            We{" "}
            <span className="font-accent font-bold italic text-white">
              Design it
            </span>
            ,{" "}
            <span className="font-accent font-bold italic text-white">
              Build it
            </span>
            ,{" "}
            <span className="font-accent font-bold italic text-white">
              Launch it
            </span>
            , & Get it Found.
        </h1>

        <StaggerContainer staggerChildren={0.15} delayChildren={0.4} className="mt-8 grid grid-cols-1 gap-12 md:mt-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {trustColumns.map((column) => (
            <StaggerItem
              key={column.lines[0]}
              className="flex flex-col items-start gap-6"
            >
              <div className="flex items-start gap-2 self-stretch">
                <Image
                  src="/icons/star.png"
                  alt=""
                  width={18}
                  height={18}
                  className="mt-1 size-[18px] shrink-0 animate-pulse"
                />
                <p className="text-left font-tag text-sm leading-[1.3] font-medium text-white md:text-[18px] lg:max-w-[390px]">
                  {column.lines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </p>
              </div>

              <div className="flex w-full flex-wrap justify-start gap-[6px]">
                {column.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
            </StaggerItem>
          ))}

          <StaggerItem className="flex flex-col items-center gap-10 md:col-span-2 lg:col-span-1 lg:items-end lg:gap-[40px]">
            <div className="flex items-center gap-[18px]">
              <Image
                src="/images/Trustpilot_Logo.png"
                alt="Trustpilot"
                width={162}
                height={40}
                className="h-[34px] w-auto md:h-10 transition-transform hover:scale-105"
              />
              <span aria-hidden className="h-[38px] w-px bg-white/10" />
              <Image
                src="/images/Clutch_Logo.png"
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

      <div
        data-gsap-bob
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
      </div>
    </section>
  );
}