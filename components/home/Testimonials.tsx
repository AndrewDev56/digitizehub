"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { testimonials } from "@/lib/data/testimonials";

gsap.registerPlugin(useGSAP);

export default function Testimonials() {
  const [index, setIndex] = useState(0);
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

    const xOut = dir * -50;
    const xIn = dir * 50;

    // Smooth exit
    gsap.to(el, {
      opacity: 0,
      x: xOut,
      duration: 0.28,
      ease: "power2.in",
      onComplete: () => {
        setIndex(newIndex);
        // Position at entrance offset before fading in
        gsap.set(el, { x: xIn, opacity: 0 });
        // Smooth entrance
        gsap.to(el, {
          opacity: 1,
          x: 0,
          duration: 0.45,
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
    <section className="relative isolate overflow-visible pt-24 pb-16 md:pt-32 md:pb-24 2xl:mt-[260px] 2xl:pt-0">
      {/* Ambient Eclipse Glow - Left */}
      {/* <div
        aria-hidden="true"
        data-gsap-ambient
        data-gsap-scale="1.1"
        data-gsap-opacity="0.8"
        data-gsap-duration="10"
        className="pointer-events-none absolute top-1/2 -translate-y-1/2 -left-[100px] sm:-left-[160px] md:-left-[200px] z-0 w-[420px] sm:w-[600px] md:w-[780px] lg:w-[950px] select-none opacity-75"
      >
        <Image
          src="/images/ellipse-left.png"
          alt=""
          width={950}
          height={950}
          className="h-auto w-full object-contain pointer-events-none"
        />
      </div> */}

      <div className="relative z-10 mx-auto max-w-[1450px] px-6 2xl:px-0">
        {/* Animated Slide Content */}
        <div ref={contentRef} className="will-change-transform">
          <blockquote className="min-h-[140px] sm:min-h-[120px] md:min-h-[160px] flex items-center justify-center text-center font-heading text-[26px] leading-[1.35] font-light tracking-[-0.03em] text-white sm:text-[32px] md:text-[42px] 2xl:text-[52px]">
            &ldquo;{testimonial.quote.replace(/^[“"]|[”"]$/g, "")}&rdquo;
          </blockquote>

          {/* Author Details */}
          <div className="mt-10 flex items-center justify-center gap-4 2xl:mt-16">
            <span
              aria-hidden
              className="flex size-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-[#111113] text-sm font-semibold text-white shadow-md"
            >
              {testimonial.initials}
            </span>
            <div className="text-left">
              <p className="font-heading text-base font-semibold text-white">
                {testimonial.name}
              </p>
              <p className="font-body text-xs sm:text-sm text-white/60">
                {testimonial.role}
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Controls & Animated Indicator Dots */}
        <div className="mt-10 flex items-center justify-center gap-6 2xl:mt-14">
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={() => goTo(index - 1)}
            className="group flex size-11 items-center justify-center rounded-full border border-white/10 bg-[#111113] text-white/80 transition-all duration-300 hover:scale-110 hover:border-white/30 hover:bg-white hover:text-black active:scale-95 cursor-pointer"
          >
            <span className="text-lg leading-none transition-transform duration-300 group-hover:-translate-x-0.5">
              &larr;
            </span>
          </button>

          {/* Dot Indicators */}
          <div className="flex items-center gap-2.5">
            {testimonials.map((item, i) => {
              const isActive = i === index;
              return (
                <button
                  key={item.name}
                  type="button"
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => animateSlide(i, i > index ? 1 : -1)}
                  className={`h-2.5 rounded-full transition-all duration-500 ease-out cursor-pointer ${
                    isActive
                      ? "w-8 bg-brand-red shadow-[0_0_10px_rgba(255,46,0,0.6)]"
                      : "w-2.5 bg-white/20 hover:bg-white/40"
                  }`}
                />
              );
            })}
          </div>

          <button
            type="button"
            aria-label="Next testimonial"
            onClick={() => goTo(index + 1)}
            className="group flex size-11 items-center justify-center rounded-full border border-white/10 bg-[#111113] text-white/80 transition-all duration-300 hover:scale-110 hover:border-white/30 hover:bg-white hover:text-black active:scale-95 cursor-pointer"
          >
            <span className="text-lg leading-none transition-transform duration-300 group-hover:translate-x-0.5">
              &rarr;
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
