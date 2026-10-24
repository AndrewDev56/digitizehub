export type FaqItem = {
  question: string;
  answer: string;
  confirmed?: boolean;
};

export const faqItems: FaqItem[] = [
  {
    question: "How much does a website cost?",
    answer:
      "It depends on how many pages you need and which features matter to your business, such as booking, e-commerce, or a client portal. After a free 20-minute call, we send you a fixed quote in writing before any work begins. There’s no hourly billing and no surprise invoices, so the price we agree on is the price you pay.",
    confirmed: true,
  },
  {
    question: "How long does a project take?",
    answer:
      "Most websites launch within 5 to 9 weeks, depending on scope and how quickly content and feedback come in. Mobile apps typically take 8 to 16 weeks. You’ll get a clear timeline with milestones at the start, so you always know what’s happening and what’s next.",
    confirmed: true,
  },
  {
    question: "Do you work outside the United States?",
    answer:
      "Yes. Our main base is in the Atlanta area, and we also have an office in Calgary, so we serve clients across the US. We work with businesses worldwide too, with calls scheduled around your time zone.",
    confirmed: true,
  },
  {
    question: "Do you build mobile apps too?",
    answer:
      "Yes. We design and develop iOS and Android apps, from the first wireframe to App Store and Google Play launch. Using React Native and Flutter, we build one app that runs smoothly on both platforms, which saves you time and budget.",
    confirmed: true,
  },
  {
    question: "What is the difference between on-page and off-page SEO?",
    answer:
      "On-page SEO is everything we improve on your website itself: page speed, content, keywords, titles, and technical structure, so Google can understand and rank it. Off-page SEO builds your reputation across the web through quality backlinks, local listings, and your Google Business Profile. You need both to rank well in your market.",
    confirmed: true,
  },
  {
    question: "Who owns the website when it is done?",
    answer:
      "You do, 100%. Once the project is complete, the source code, design files, domain, and all accounts are yours. If you choose an ongoing maintenance or hosting plan with us, you can still move everything elsewhere at any time, with no lock-in.",
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
];