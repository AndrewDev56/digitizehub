"use client";

import { useState } from "react";
import FaqCard from "@/components/ui/FaqCard";
import FadeIn from "@/components/animation/FadeIn";
import { faqItems } from "@/lib/data/faq";

export default function ServiceDetailFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const items = faqItems.slice(0, 6);
  const half = Math.ceil(items.length / 2);
  const leftColItems = items.slice(0, half);
  const rightColItems = items.slice(half);

  return (
    <section aria-labelledby="service-faq-title" className="relative isolate overflow-visible py-section bg-background">
      <div className="mx-auto max-w-[1632px] px-6 md:px-9 2xl:px-0">
        <FadeIn direction="up">
          <h2
            id="service-faq-title"
            className="font-heading text-[28px] leading-[1.15] font-semibold tracking-[-0.02em] text-white sm:text-4xl md:text-6xl lg:text-7xl 2xl:text-8xl"
          >
            If You&apos;re <span className="font-accent italic">Wondering</span>,
            <br />
            We&apos;re <span className="font-accent italic">Answering</span>
          </h2>
        </FadeIn>

        <FadeIn direction="up" delay={0.2}>
          <div className="mt-10 grid grid-cols-1 gap-5 md:mt-14 md:grid-cols-2 md:gap-7 items-start">
            <div className="flex flex-col gap-5 md:gap-7">
              {leftColItems.map((item, i) => {
                const itemIndex = i;
                return (
                  <FaqCard
                    key={`${item.question}-${itemIndex}`}
                    item={item}
                    isOpen={openIndex === itemIndex}
                    onToggle={() =>
                      setOpenIndex(openIndex === itemIndex ? null : itemIndex)
                    }
                  />
                );
              })}
            </div>

            <div className="flex flex-col gap-5 md:gap-7">
              {rightColItems.map((item, i) => {
                const itemIndex = i + half;
                return (
                  <FaqCard
                    key={`${item.question}-${itemIndex}`}
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