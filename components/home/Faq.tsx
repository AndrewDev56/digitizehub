"use client";

import { useState } from "react";
import Image from "next/image";
import FaqCard from "@/components/ui/FaqCard";
import { faqItems } from "@/lib/data/faq";
import FadeIn from "@/components/animation/FadeIn";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const leftColItems = faqItems.slice(0, 3);
  const rightColItems = faqItems.slice(3, 6);

  return (
    <section className="relative isolate overflow-visible py-section">
      <div className="mx-auto max-w-[1632px] px-6 md:px-9">
        <FadeIn direction="up">
          <h2 className="font-heading text-4xl font-semibold tracking-[-0.02em] text-white md:text-6xl">
            Frequently Asked{" "}
            <span className="font-accent italic ">Questions</span>
          </h2>
        </FadeIn>

        <FadeIn direction="up" delay={0.2}>
          <div className="mt-10 grid grid-cols-1 gap-5 md:mt-14 md:grid-cols-2 md:gap-7 items-start">
            <div className="flex flex-col gap-5 md:gap-7">
              {leftColItems.map((item, i) => {
                const itemIndex = i;
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

            <div className="flex flex-col gap-5 md:gap-7">
              {rightColItems.map((item, i) => {
                const itemIndex = i + 3;
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