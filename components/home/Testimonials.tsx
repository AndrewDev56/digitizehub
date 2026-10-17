"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { testimonials } from "@/lib/data/testimonials";

gsap.registerPlugin(useGSAP);

export default function Testimonials() {
  const [index, setIndex] = useState(3);
  const [direction, setDirection] = useState(1);
  const contentRef = useRef<HTMLDivElement>(null);
  const isAnimating = useRef(false);

  const testimonial = testimonials[index];

  const animateSlide = (newIndex: number, dir: number) => {
    if (isAnimating.current || newIndex === index) return;
    isAnimating.current = true;
    setDirection(dir);

    const el = contentRef.current;
    if (!el) {
      setIndex(newIndex);
      isAnimating.current = false;
      return;
    }

    const xOut = dir * -40;
    const xIn = dir * 40;

    gsap.to(el, {
      opacity: 0,
      x: xOut,
      duration: 0.25,
      ease: "power2.in",
      onComplete: () => {
        setIndex(newIndex);
        gsap.set(el, { x: xIn, opacity: 0 });
        gsap.to(el, {
          opacity: 1,
          x: 0,
          duration: 0.4,
          ease: "power3.out",
          onComplete: () => {
            isAnimating.current = false;
          },
        });
      },
    });
  };

  const goTo = (next: number) => {
    const target = (next + testimonials.length) % testimonials.length;
    const dir = next > index || (index === testimonials.length - 1 && next === 0 && target === 0) ? 1 : -1;
    animateSlide(target, dir);
  };

  return (
    <section className="relative isolate overflow-visible py-16 md:py-24 2xl:mt-[60px]">
      <div className="relative z-10 mx-auto max-w-[1450px] px-4 sm:px-8 md:px-12 2xl:px-0">
        <div className="relative flex items-center justify-between gap-2 sm:gap-4 md:gap-8">
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={() => goTo(index - 1)}
            className="group flex size-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.08] text-white/90 shadow-lg transition-all duration-300 hover:scale-105 hover:border-brand-red hover:bg-brand-red hover:text-white hover:shadow-[0_0_24px_rgba(255,46,0,0.4)] active:scale-95 cursor-pointer sm:size-11 md:size-12"
          >
            <svg
              className="size-4 sm:size-5 transition-transform duration-300 group-hover:-translate-x-0.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
          </button>

          <div
            ref={contentRef}
            className="container mx-auto min-w-0 px-1 text-center will-change-transform sm:px-6 md:px-8"
          >
            <blockquote className="font-heading text-[15px] font-normal leading-[1.45] tracking-[-0.015em] text-white sm:text-2xl md:text-3xl lg:text-[32px] 2xl:text-[46px]">
              &ldquo;{testimonial.quote.replace(/^[“"]|[”"]$/g, "")}&rdquo;
            </blockquote>

            <div className="mt-8 sm:mt-10 md:mt-12 flex items-center justify-center gap-3.5 sm:gap-4">
              <span
                aria-hidden
                className="flex size-12 sm:size-16 shrink-0 items-center justify-center rounded-full font-heading text-base font-semibold text-white shadow-md select-none"
                style={{ backgroundColor: testimonial.avatarColor }}
              >
                {testimonial.initials}
              </span>
              <div className="text-left">
                <p className="font-heading text-base sm:text-lg md:text-2xl font-medium text-white">
                  {testimonial.name}
                </p>
                <p className="mt-0.5 font-body text-xs sm:text-base text-white/50 tracking-wide">
                  {testimonial.role}
                </p>
              </div>
            </div>
          </div>

          <button
            type="button"
            aria-label="Next testimonial"
            onClick={() => goTo(index + 1)}
            className="group flex size-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.08] text-white/90 shadow-lg transition-all duration-300 hover:scale-105 hover:border-brand-red hover:bg-brand-red hover:text-white hover:shadow-[0_0_24px_rgba(255,46,0,0.4)] active:scale-95 cursor-pointer sm:size-11 md:size-12"
          >
            <svg
              className="size-4 sm:size-5 transition-transform duration-300 group-hover:translate-x-0.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>

        <div className="mt-10 sm:mt-12 md:mt-14 flex items-center justify-center gap-2.5">
          {testimonials.map((item, i) => {
            const isActive = i === index;
            return (
              <button
                key={item.name}
                type="button"
                aria-label={`Go to testimonial ${i + 1}`}
                onClick={() => animateSlide(i, i > index ? 1 : -1)}
                className={`size-2 rounded-full transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-brand-red shadow-[0_0_8px_rgba(255,46,0,0.6)] scale-125"
                    : "bg-white/20 hover:bg-white/40"
                }`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
