"use client";

import Image from "next/image";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/animation/FadeIn";

export default function LandingLeadAsset({ onStart }: { onStart: () => void }) {
  return (
    <section className="relative isolate overflow-visible py-16 md:py-24">
      {/* <div
        aria-hidden="true"
        data-gsap-ambient
        data-gsap-scale="1.1"
        data-gsap-opacity="0.8"
        data-gsap-duration="10"
        className="pointer-events-none absolute top-0 -right-[100px] z-0 w-[420px] sm:w-[600px] md:w-[780px] select-none opacity-70"
      >
        <Image
          src="/images/ellipse-top-right.png"
          alt=""
          width={780}
          height={780}
          className="h-auto w-full object-contain pointer-events-none"
        />
      </div> */}

      <div className="relative mx-auto grid max-w-[1632px] items-center gap-10 px-6 md:px-9 lg:grid-cols-2 lg:gap-16">
        <FadeIn direction="right" distance={40} scale={0.96} className="order-1">
          <div data-gsap-bob className="relative mx-auto w-full max-w-[640px] lg:max-w-none">
            <Image
              src="/images/team-of-experts.webp"
              alt="Analytics dashboard with leads, traffic, and conversion insights"
              width={1100}
              height={760}
              className="h-auto w-full object-contain"
            />
          </div>
        </FadeIn>

        <FadeIn direction="left" className="order-2">
          <p className="font-body text-sm tracking-[0.08em] text-white/50 uppercase">
            We Are The Team Of Experts
          </p>
          <h2 className="mt-3 font-heading text-3xl leading-tight font-semibold tracking-[-0.02em] text-white sm:text-4xl md:text-5xl">
            Turn Your Website Into{" "}
            <span className="font-accent font-normal italic">A Lead Generation Asset</span>
          </h2>
          <p className="mt-5 font-body text-base leading-relaxed text-white/75 md:text-lg">
            If your website looks outdated, loads slowly or fails to generate inquiries, you are losing opportunities every day. Digitize Hub helps businesses improve structure, messaging, design and conversion flow so visitors understand your value faster and take action with confidence.
          </p>
          <div className="mt-8">
            <Button onClick={onStart}>Start Your Project</Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
