export type FaqItem = {
  question: string;
  answer: string;
  confirmed: boolean;
};

// Questions transcribed directly from your Figma screenshot. Only card 1's
// answer is visible in the screenshot — the rest are placeholder answers
// pending a clearer crop or Figma access.
export const faqItems: FaqItem[] = [
  {
    question: "How much does a website cost?",
    answer:
      "Our websites start at [Price] CAD, fixed before work begins. The exact number depends on pages and features, and you get it in writing after one call. No hourly billing.",
    confirmed: true,
  },
  {
    question: "Do you build mobile apps too?",
    answer: "Placeholder answer — not visible in the screenshot.",
    confirmed: false,
  },
  {
    question: "What is the difference between on-page and off-page SEO?",
    answer: "Placeholder answer — not visible in the screenshot.",
    confirmed: false,
  },
  {
    question: "How long does a project take?",
    answer: "Placeholder answer — not visible in the screenshot.",
    confirmed: false,
  },
  {
    question: "Who owns the website when it is done?",
    answer: "Placeholder answer — not visible in the screenshot.",
    confirmed: false,
  },
  {
    question: "Do you work outside Calgary and Atlanta?",
    answer: "Placeholder answer — not visible in the screenshot.",
    confirmed: false,
  },
];