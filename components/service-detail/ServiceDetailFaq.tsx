"use client";

import { useState } from "react";
import FaqCard from "@/components/ui/FaqCard";
import FadeIn from "@/components/animation/FadeIn";
import type { FaqItem } from "@/lib/data/faq";

const faqItems: FaqItem[] = [
  {
    question: "How long does a typical design project take?",
    answer: "The timeline depends on the scope. We agree on milestones before the work begins.",
  },
  {
    question: "What results can I expect from better UI/UX design?",
    answer: "A clearer product experience, smoother user flows, and interfaces shaped around your business goals.",
  },
  {
    question: "Do you help with content as part of UI/UX design?",
    answer: "Yes. We can organize and refine content so it supports the experience and the user's next step.",
  },
  {
    question: "Do you only work with companies in USA?",
    answer: "No, we work with clients globally — from the US and UK to the UAE and Southeast Asia.",
  },
  {
    question: "Can I hire your UI/UX designers on a contract basis?",
    answer: "Contact us with your project needs and we can discuss the right engagement model.",
  },
  {
    question: "How do you ensure the design aligns with our goals?",
    answer: "We start by understanding your users and business goals, then validate decisions throughout the process.",
  },
  {
    question: "Will your team also implement the design?",
    answer: "Yes. Our team can take the approved design through development and launch.",
  },
  {
    question: "Do your designs include mobile responsiveness?",
    answer: "Yes. Responsive behavior is considered throughout the design process.",
  },
  {
    question: "Do you provide UX audits for existing products?",
    answer: "Yes. We review existing experiences and identify practical opportunities to improve them.",
  },
  {
    question: "What design tools does your team use?",
    answer: "We primarily design in Figma, creating complete design systems, high-fidelity prototypes, and developer-ready handoffs.",
  },
];

export default function ServiceDetailFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const half = Math.ceil(faqItems.length / 2);
  const leftColItems = faqItems.slice(0, half);
  const rightColItems = faqItems.slice(half);

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