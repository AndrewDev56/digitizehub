"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import TestimonialCard from "@/components/ui/TestimonialCard";
import { testimonials } from "@/lib/data/testimonials";
import FadeIn from "@/components/animation/FadeIn";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollerRef = useRef<HTMLDivElement>(null);

  const goTo = (index: number) => {
    const clamped = Math.max(0, Math.min(testimonials.length - 1, index));
    setActiveIndex(clamped);
    const card = scrollerRef.current?.children[clamped] as
      | HTMLElement
      | undefined;
    card?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  };

  return (
    <section className="overflow-hidden bg-background py-24 md:py-32">
      <FadeIn direction="up">
        <div className="mx-auto flex max-w-[1632px] flex-col gap-10 px-6 md:px-9 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="max-w-xl font-heading text-3xl font-semibold tracking-[-0.02em] text-white md:text-5xl">
              Join 179+ companies{" "}
              <span className="font-accent italic text-accent-from">who&apos;ve built and scaled</span>{" "}
              with DigitizeHub team
            </h2>
            <p className="mt-4 font-body text-white/60 md:text-lg">
              One team from first sketch to still running two years later
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={() => goTo(activeIndex - 1)}
              className="flex size-11 items-center justify-center rounded-full border border-white/20 transition-all hover:bg-white/10 hover:scale-105 active:scale-95"
            >
              <Image
                src="/icons/Arrow_Left.png"
                alt=""
                width={16}
                height={16}
                className="size-4"
              />
            </button>
            <button
              type="button"
              aria-label="Next testimonial"
              onClick={() => goTo(activeIndex + 1)}
              className="flex size-11 items-center justify-center rounded-full bg-accent-to transition-all hover:bg-accent-from hover:scale-105 active:scale-95 shadow-lg shadow-accent-to/30"
            >
              <Image
                src="/icons/arrow-right-white.png"
                alt=""
                width={16}
                height={16}
                className="size-4"
              />
            </button>
          </div>
        </div>
      </FadeIn>

      <div
        ref={scrollerRef}
        className="mt-16 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-4 md:mt-20 md:px-9 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={testimonial.name}
            testimonial={testimonial}
            active={index === activeIndex}
          />
        ))}
      </div>
    </section>
  );
}