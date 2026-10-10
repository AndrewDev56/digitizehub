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
    <section className="relative isolate pt-[140px] pb-16 md:pt-[220px] md:pb-[60px]">
      {/* Animated background ambient glow - Top Right Navbar area */}
      <div
        aria-hidden="true"
        data-gsap-ambient
        data-gsap-scale="1.12"
        data-gsap-opacity="0.95"
        data-gsap-duration="8"
        className="pointer-events-none absolute -top-[60px] md:-top-[100px] -right-[60px] md:-right-[100px] z-0 w-[420px] sm:w-[580px] md:w-[750px] lg:w-[950px] select-none opacity-85"
      >
        <Image
          src="/images/ellipse-top-right.png"
          alt=""
          width={950}
          height={950}
          priority
          className="h-auto w-full object-contain pointer-events-none"
        />
      </div>

      {/* Animated background ambient glow - Left / Icons & Stats section */}
      <div
        aria-hidden="true"
        data-gsap-ambient
        data-gsap-scale="1.1"
        data-gsap-opacity="0.9"
        data-gsap-duration="10"
        className="pointer-events-none absolute top-[420px] sm:top-[460px] md:top-[500px] lg:top-[540px] -left-[80px] sm:-left-[120px] md:-left-[160px] z-0 w-[420px] sm:w-[580px] md:w-[750px] lg:w-[950px] select-none opacity-80"
      >
        <Image
          src="/images/ellipse-left.png"
          alt=""
          width={950}
          height={950}
          className="h-auto w-full object-contain pointer-events-none"
        />
      </div>
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
            </span>,{" "}<br/>
            
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

      <button
        type="button"
        onClick={() => {
          document.getElementById("stats-section")?.scrollIntoView({ behavior: "smooth" });
        }}
        data-gsap-bob
        aria-label="Scroll to next section"
        className="group relative mx-auto mt-10 flex flex-col items-center gap-2 cursor-pointer transition-transform duration-300 hover:scale-105 active:scale-95 focus:outline-none md:mt-[30px]"
      >
        <span className="font-heading text-sm tracking-[0.1em] text-white/56 uppercase transition-colors duration-200 group-hover:text-white md:text-base">
          Discover
        </span>
        <Image
          src="/icons/Down_Arrow_5.svg"
          alt=""
          width={40}
          height={40}
          className="size-8 opacity-70 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-1 md:size-10"
        />
      </button>
    </section>
  );
}