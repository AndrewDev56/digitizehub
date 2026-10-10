"use client";

import Image from "next/image";
import FaqCard from "@/components/ui/FaqCard";
import { faqItems } from "@/lib/data/faq";
import FadeIn from "@/components/animation/FadeIn";

export default function Faq() {
  return (
    <section className="relative isolate overflow-visible py-section">
      {/* Ambient Eclipse Glow - Right */}
      {/* <div
        aria-hidden="true"
        data-gsap-ambient
        data-gsap-scale="1.1"
        data-gsap-opacity="0.8"
        data-gsap-duration="10"
        className="pointer-events-none absolute top-1/2 -translate-y-1/2 -right-[100px] sm:-right-[160px] md:-right-[200px] z-0 w-[420px] sm:w-[600px] md:w-[780px] lg:w-[950px] select-none opacity-75"
      >
        <Image
          src="/images/ellipse-right.png"
          alt=""
          width={950}
          height={950}
          className="h-auto w-full object-contain pointer-events-none"
        />
      </div> */}
      <div className="mx-auto max-w-[1632px] px-6 md:px-9">
        <FadeIn direction="up">
          <h2 className="font-heading text-4xl font-semibold tracking-[-0.02em] text-white md:text-6xl">
            Frequently Asked{" "}
            <span className="font-accent italic ">Questions</span>
          </h2>
        </FadeIn>

        <FadeIn direction="up" delay={0.2}>
          <div className="mt-8 columns-1 gap-4 md:mt-10 md:columns-2 [&>*]:mb-4">
            {faqItems.map((item, index) => (
              <FaqCard key={item.question} item={item} defaultOpen={index === 0} />
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}