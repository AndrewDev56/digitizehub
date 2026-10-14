export type FaqItem = {
  question: string;
  answer: string;
  confirmed: boolean;
};

// Questions transcribed directly from your Figma screenshot. Only card 1's
// answer is visible in the screenshot — the rest are placeholder answers
// pending a clearer crop or Figma access.
export const faqItems: FaqItem[] = [
  // Left Column
  {
    question: "How much does a website cost?",
    answer:
      "Our websites start at [Price] CAD, fixed before work begins. The exact number depends on pages and features, and you get it in writing after one call. No hourly billing.",
    confirmed: true,
  },
  {
    question: "How long does a project take?",
    answer:
      "Most website projects launch within 3 to 6 weeks, depending on complexity. We set clear milestones from day one so you always know what to expect.",
    confirmed: true,
  },
  {
    question: "Do you work outside Calgary and Atlanta?",
    answer:
      "Yes. While our core teams are in Calgary and Atlanta, we collaborate seamlessly with clients across North America, Europe, and worldwide.",
    confirmed: true,
  },

  // Right Column
  {
    question: "Do you build mobile apps too?",
    answer:
      "Yes. We design and build iOS and Android mobile apps using React Native and Flutter, with intuitive UI/UX and seamless cloud backend integrations.",
    confirmed: true,
  },
  {
    question: "What is the difference between on-page and off-page SEO?",
    answer:
      "On-page SEO optimizes elements on your website like copy, structure, speed, and meta tags. Off-page SEO builds authority through backlinks, citations, and digital PR.",
    confirmed: true,
  },
  {
    question: "Who owns the website when it is done?",
    answer:
      "You do — 100%. All source code, design assets, domains, and hosting configurations belong completely to you with zero lock-in.",
    confirmed: true,
  },
];