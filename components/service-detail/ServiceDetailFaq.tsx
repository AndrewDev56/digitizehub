"use client";

import { useState } from "react";

const faqItems = [
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
    question: "How long does a typical design project take?",
    answer: "We share a timeline and clear milestones before starting so you know what to expect.",
  },
];

export default function ServiceDetailFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section aria-labelledby="service-faq-title" className="bg-background 2xl:mt-[450px]">
      <div className="mx-auto max-w-[1632px] px-6 md:px-9 2xl:px-0">
        <h2 id="service-faq-title" className="max-w-[845px] font-heading text-[42px] leading-[1.05] font-semibold tracking-[-0.01em] text-white md:text-6xl 2xl:text-[100px]">
          If You&apos;re Wondering,
          <br />
          We&apos;re Answering
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-4 md:mt-16 md:grid-cols-2 md:gap-x-8 2xl:mt-[100px] 2xl:grid-cols-[796px_804px] 2xl:gap-x-8 2xl:gap-y-10">
          {faqItems.map((item, index) => {
            const open = openIndex === index;
            return (
              <article key={`${item.question}-${index}`} className="min-h-[88px] rounded-[20px] border border-white/10 bg-[#111111] p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.03)] md:min-h-[104px] md:p-6">
                <button type="button" aria-expanded={open} onClick={() => setOpenIndex(open ? null : index)} className="flex w-full items-center justify-between gap-5 text-left">
                  <span className="font-heading text-base font-semibold text-white md:text-lg">{item.question}</span>
                  <span aria-hidden className="shrink-0 font-body text-2xl leading-none text-accent-to">{open ? "−" : "+"}</span>
                </button>
                {open && <p className="mt-4 max-w-[700px] font-body text-sm leading-6 text-white/70 md:text-base">{item.answer}</p>}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}