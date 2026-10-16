export type FaqItem = {
  question: string;
  answer: string;
  confirmed?: boolean;
};

export const faqItems: FaqItem[] = [
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
  {
    question: "Will your team also implement the design?",
    answer:
      "Yes. Our team can take the approved design through development and launch, so you are not left handing files to a third party.",
    confirmed: true,
  },
  {
    question: "Do your designs include mobile responsiveness?",
    answer:
      "Yes. Every website and product we design is built to work on phones, tablets, and desktops from the start.",
    confirmed: true,
  },
  {
    question: "How do we get started?",
    answer:
      "Book a 20 minute call. We will look at what you have, tell you what it needs, and send a fixed quote before any work begins.",
    confirmed: true,
  },
  {
    question: "Do you work with companies outside Canada and the USA?",
    answer:
      "Yes. Our offices are in Calgary and Atlanta, and we work with clients globally.",
    confirmed: true,
  },
];