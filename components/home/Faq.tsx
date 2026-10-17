"use client";

import { useState } from "react";
import FaqCard from "@/components/ui/FaqCard";
import { faqItems } from "@/lib/data/faq";
import FadeIn from "@/components/animation/FadeIn";

export default function Faq({ page = false }: { page?: boolean }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const leftColItems = faqItems.slice(0, 3);
  const rightColItems = faqItems.slice(3, 6);
  const Title = page ? "h1" : "h2";

  return (
    <section
      className={`relative isolate overflow-visible ${
        page ? "pt-[140px] pb-section md:pt-[180px]" : "py-section"
      }`}
    >
      <div className="mx-auto max-w-[1632px] px-6 md:px-9">
        <FadeIn direction="up">
          <Title className="font-heading text-[28px] font-semibold tracking-[-0.02em] text-white sm:text-4xl md:text-6xl">
            Frequently Asked{" "}
            <span className="font-accent italic ">Questions</span>
          </Title>
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