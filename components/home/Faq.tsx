"use client";

import FaqCard from "@/components/ui/FaqCard";
import { faqItems } from "@/lib/data/faq";
import FadeIn from "@/components/animation/FadeIn";

export default function Faq() {
  return (
    <section className="bg-background py-section">
      <div className="mx-auto max-w-[1632px] px-6 md:px-9">
        <FadeIn direction="up">
          <h2 className="font-heading text-4xl font-semibold tracking-[-0.02em] text-white md:text-6xl">
            Frequently Asked{" "}
            <span className="font-accent italic text-accent-from">Questions</span>
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