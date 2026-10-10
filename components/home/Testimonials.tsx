"use client";

import { useState } from "react";
import { testimonials } from "@/lib/data/testimonials";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const testimonial = testimonials[index];

  const goTo = (next: number) => {
    setIndex((next + testimonials.length) % testimonials.length);
  };

  return (
    <section className="bg-background pt-24 md:pt-32 2xl:mt-[260px] 2xl:pt-0">
      <div className="mx-auto max-w-[1450px] px-6 2xl:px-0">
        <blockquote className="text-center font-heading text-[28px] leading-[1.45] font-light tracking-[-0.03em] text-white md:text-[42px] 2xl:text-[54px]">
          “{testimonial.quote}”
        </blockquote>

        <div className="mt-10 flex items-center justify-center gap-4 2xl:mt-16">
          <span
            aria-hidden
            className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#111111] text-sm font-semibold text-white"
          >
            {testimonial.initials}
          </span>
          <div className="text-left">
            <p className="font-heading text-base font-semibold text-white">
              {testimonial.name}
            </p>
            <p className="font-body text-sm text-white/60">{testimonial.role}</p>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-6 2xl:mt-10">
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={() => goTo(index - 1)}
            className="flex size-10 items-center justify-center rounded-full bg-[#111111] text-white transition-opacity"
          >
            ←
          </button>
          <div className="flex items-center gap-[10px]">
            {testimonials.map((item, i) => (
              <span
                key={item.name}
                aria-hidden
                className={`size-[10px] rounded-full transition-colors ${i === index ? "bg-accent-to" : "bg-white/20"}`}
              />
            ))}
          </div>
          <button
            type="button"
            aria-label="Next testimonial"
            onClick={() => goTo(index + 1)}
            className="flex size-10 items-center justify-center rounded-full bg-[#111111] text-white transition-opacity"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
