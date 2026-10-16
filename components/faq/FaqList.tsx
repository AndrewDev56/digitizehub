"use client";

import { useState } from "react";
import Image from "next/image";
import FaqCard from "@/components/ui/FaqCard";
import { faqItems } from "@/lib/data/faq";
import FadeIn from "@/components/animation/FadeIn";

export default function FaqList() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const half = Math.ceil(faqItems.length / 2);
  const leftColItems = faqItems.slice(0, half);
  const rightColItems = faqItems.slice(half);

  return (
    <section className="relative isolate overflow-hidden pb-24 md:pb-32">
      <div
        aria-hidden="true"
        data-gsap-ambient
        data-gsap-scale="1.1"
        data-gsap-opacity="0.8"
        data-gsap-duration="10"
        className="pointer-events-none absolute top-[20%] -left-[100px] z-0 w-[420px] select-none opacity-75 sm:-left-[160px] md:-left-[200px] sm:w-[600px] md:w-[780px] lg:w-[950px]"
      >
        <Image
          src="/images/ellipse-left.png"
          alt=""
          width={950}
          height={950}
          className="pointer-events-none h-auto w-full object-contain"
        />
      </div>

      <div className="relative mx-auto max-w-[1632px] px-4 sm:px-6 md:px-9">
        <FadeIn direction="up">
          <div className="mt-2 grid grid-cols-1 items-start gap-5 md:grid-cols-2 md:gap-7">
            <div className="flex flex-col gap-5 md:gap-7">
              {leftColItems.map((item, i) => (
                <FaqCard
                  key={item.question}
                  item={item}
                  isOpen={openIndex === i}
                  onToggle={() =>
                    setOpenIndex(openIndex === i ? null : i)
                  }
                />
              ))}
            </div>

            <div className="flex flex-col gap-5 md:gap-7">
              {rightColItems.map((item, i) => {
                const itemIndex = i + half;
                return (
                  <FaqCard
                    key={item.question}
                    item={item}
                    isOpen={openIndex === itemIndex}
                    onToggle={() =>
                      setOpenIndex(openIndex === itemIndex ? null : itemIndex)
                    }
                  />
                );
              })}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
