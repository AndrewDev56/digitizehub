"use client";

import Image from "next/image";
import Button from "@/components/ui/Button";
import LandingForm from "@/components/landing/LandingForm";
import { landingHero, type SelectedPackage } from "@/lib/data/landing";

export default function LandingHero({
  selectedPackage,
  onExploreServices,
  onGetStarted,
}: {
  selectedPackage: SelectedPackage | null;
  onExploreServices: () => void;
  onGetStarted: () => void;
}) {

  return (
    <section className="relative isolate overflow-visible pt-[120px] pb-16 md:pt-[180px] md:pb-24">
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

      <div className="relative mx-auto grid max-w-[1632px] items-center gap-10 px-6 md:px-9 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,480px)] lg:gap-16">
        <div className="text-left">
          <p className="font-body text-sm tracking-[0.02em] text-white/70 md:text-lg">
            Web, Apps and SEO&nbsp; · &nbsp;United States of America
          </p>
          <h1 className="mt-5 font-heading text-[30px] leading-[1.15] font-semibold tracking-[-0.02em] text-white sm:text-[42px] md:text-5xl lg:text-[64px] lg:leading-[1.12]">
            Launch A Stronger{" "}
            <span className="font-accent italic">Digital Presence</span> That Brings You More{" "}
            <span className="font-accent italic">Leads</span>
          </h1>
          <p className="mt-6 max-w-xl font-body text-sm leading-relaxed text-white/80 md:text-lg">
            {landingHero.copy}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button onClick={onGetStarted}>Let’s Get Started</Button>
            <Button variant="secondary" onClick={onExploreServices}>
              Explore Our Services
            </Button>
          </div>
        </div>

        <LandingForm selectedPackage={selectedPackage} />
      </div>
    </section>
  );
}
