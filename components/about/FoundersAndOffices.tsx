"use client";

import Image from "next/image";
import { ceos, ceoIntro } from "@/lib/data/ceo";
import { offices } from "@/lib/data/offices";
import CeoCard from "@/components/ui/CeoCard";
import OfficeCard from "@/components/ui/OfficeCard";
import FadeIn from "@/components/animation/FadeIn";
import StaggerContainer, { StaggerItem } from "@/components/animation/StaggerContainer";

export default function FoundersAndOffices() {
  return (
    <section className="relative isolate overflow-visible py-20 md:py-32">
      {/* Ambient Eclipse Glow - Left */}
      <div
        aria-hidden="true"
        data-gsap-ambient
        data-gsap-scale="1.1"
        data-gsap-opacity="0.85"
        data-gsap-duration="10"
        className="pointer-events-none absolute top-[20%] -left-[120px] sm:-left-[180px] md:-left-[240px] z-0 w-[450px] sm:w-[650px] md:w-[850px] lg:w-[1000px] select-none opacity-80"
      >
        <Image
          src="/images/ellipse-left.png"
          alt=""
          width={1000}
          height={1000}
          className="h-auto w-full object-contain pointer-events-none"
        />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-9">
        {/* ================= MEET OUR FOUNDERS ================= */}
        <div>
          {/* Header Row */}
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-start">
            <FadeIn direction="up">
              <h2 className="font-heading text-3xl font-semibold tracking-[-0.02em] text-white sm:text-5xl md:text-6xl">
                Meet Our <span className="font-accent italic font-normal">Founders</span>
              </h2>
            </FadeIn>

            <FadeIn direction="up" delay={0.15}>
              <p className="max-w-md font-body text-xs leading-relaxed text-white/70 sm:text-sm md:text-base">
                {ceoIntro}
              </p>
            </FadeIn>
          </div>

          {/* Staggered Founders Grid */}
          <div className="mt-14 grid grid-cols-1 items-start gap-8 md:mt-16 md:grid-cols-2 md:gap-10">
            <FadeIn direction="up" delay={0.2}>
              <CeoCard ceo={ceos[0]} />
            </FadeIn>

            <FadeIn direction="up" delay={0.35} className="md:mt-24 lg:mt-32">
              <CeoCard ceo={ceos[1]} />
            </FadeIn>
          </div>
        </div>

        {/* ================= OUR TWO OFFICES ================= */}
        <div className="mt-28 md:mt-40">
          {/* Centered Offices Heading */}
          <FadeIn direction="up">
            <h2 className="text-center font-heading text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl md:text-5xl">
              Our Two <span className="font-accent italic font-normal">Offices</span>
            </h2>
          </FadeIn>

          {/* 2-Card Office Grid */}
          <StaggerContainer
            staggerChildren={0.15}
            className="mt-12 grid grid-cols-1 gap-6 md:mt-14 md:grid-cols-2 md:gap-8 max-w-[1200px] mx-auto"
          >
            {offices.map((office) => (
              <StaggerItem key={office.city}>
                <OfficeCard office={office} />
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Bottom Descriptive Note */}
          <FadeIn direction="up" delay={0.25}>
            <p className="mx-auto mt-10 max-w-xl text-center font-body text-xs font-light leading-relaxed text-white/60 sm:text-sm md:mt-12">
              A real address in each country means someone answers in your time zone, and you always know who you are dealing with.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}