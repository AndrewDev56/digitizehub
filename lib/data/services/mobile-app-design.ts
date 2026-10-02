import type { ServiceDetailContent } from "@/lib/data/serviceDetail";
import type { AboutService } from "@/lib/data/aboutServices";

export const mobileAppDesignContent: ServiceDetailContent = {
  slug: "mobile-app-design",
  eyebrowTags: ["Websites", "Apps", "Deployment", "SEO", "Branding", "Social"],
  heroH1: [[{ text: "Mobile App", italic: true }, { text: " Design Services." }]],
  heroSubtext:
    "Digitize Hub designs mobile apps people keep on their home screen. From our Calgary and Atlanta offices, we help startups and growing businesses across Canada and the USA plan, design, and prototype iOS and Android apps that are simple to use and built to grow.",
  heroImageAlt: "Mobile app design services showing iOS and Android app screens by Digitize Hub",
  heroTitle: [
    [{ text: "Hire a Top " }, { text: "Mobile App", italic: true }, { text: " Design" }],
    [{ text: "Company in Canada & the USA" }],
  ],
  heroBody:
    "Your app has seconds to earn a place on someone's phone. We design every tap, swipe, and screen around real user behavior, so people sign up, come back, and recommend it.",
  captivatingTitle: [
    [{ text: "User-Friendly " }, { text: "Mobile App", italic: true }],
    [{ text: "UI & UX Design" }],
  ],
  captivatingBody:
    "Looking for app designers who think beyond pretty screens? Our mobile UI/UX team designs native-feeling experiences for consumer apps, booking apps, marketplaces, and internal business tools, with every flow mapped, prototyped, and tested before developers write any code.",
  captivatingPills: ["App UI Design", "UX Research", "Prototyping", "Design Systems"],
  servicesTitle: [[{ text: "Our " }, { text: "Mobile App", italic: true }, { text: " Design Services" }]],
  processTitle: [[{ text: "Our " }, { text: "Mobile App", italic: true }, { text: " Design Process" }]],
  processSteps: [
    {
      title: "Discovery & Research",
      copy: "We start by understanding your business, your users, and your competitors. Through stakeholder calls, user personas, and app store research, we define what your app must do and why people will choose it.",
    },
    {
      title: "User Flows & Wireframes",
      copy: "We map every journey, from onboarding to checkout, and turn it into wireframes. This blueprint keeps the app simple, removes extra steps, and makes new features easy to add later.",
    },
    {
      title: "UI Design & Prototype",
      copy: "We design high-fidelity screens in your brand style and link them into a clickable prototype, so you can try the app on your phone and share it with users or investors.",
    },
    {
      title: "Testing & Handoff",
      copy: "We test the prototype with real users, refine anything confusing, and hand over organized Figma files, assets, and specs for iOS and Android so developers build exactly what was designed.",
    },
  ],
  industriesTitle: [[{ text: "App Design", italic: true }, { text: " that Fits Your Industry" }]],
  industriesChips: [
    "Fintech",
    "Healthcare",
    "E-Commerce",
    "Hospitality",
    "Logistics",
    "Real Estate",
    "Entertainment",
    "Agriculture",
    "On-Demand Services",
    "Fitness & Wellness",
  ],
  industriesBody:
    "Every industry has its own users and rules. We shape app flows around how your customers actually behave, from secure fintech logins to quick hospitality bookings and real-time delivery tracking.",
  caseStudiesTitle: [[{ text: "Mobile App", italic: true }, { text: " Design Case Studies" }]],
  auditCtaTitle: [
    [{ text: "Not Sure Where to Start? Get a" }],
    [{ text: "Website Audit", italic: true }, { text: " First." }],
  ],
  auditCtaBody:
    "We go through your site page by page and send a plain English report: what is costing you customers, what to fix first, and what it should cost. Delivered in [X] business days for [Price]. If you hire us after, the fee comes off your project.",
};

// Both rows use the same home-screen-app.mp4 since only one mobile-app video asset exists —
// tell me if iOS and Android should each get their own separate video.
// Timelines on both cards are marked [confirm] in the source content doc — check before publishing.
export const mobileAppShowcaseRows: AboutService[] = [
  {
    titleLines: [[{ text: "iOS", italic: true }, { text: " App Design Services" }]],
    description:
      "We design iPhone and iPad apps that feel at home on Apple devices. Following Apple's Human Interface Guidelines, our designers create clean, intuitive screens that move smoothly through App Store review and keep users engaged after download.",
    features: [
      "Custom App UI",
      "User Flow Mapping",
      "Clickable Prototype",
      "Dark Mode Ready",
      "App Store Screens",
      "30 Days Support",
    ],
    duration: "Typically 4 to 8 Weeks",
    video: "/videos/home-screen-app.mp4",
    imagePosition: "left",
  },
  {
    titleLines: [[{ text: "Android", italic: true }, { text: " App Design Services" }]],
    description:
      "We design Android apps that look sharp and work smoothly across hundreds of screen sizes. Built on Material Design principles, our layouts adapt to phones and tablets while keeping your brand consistent and user journeys short.",
    features: [
      "Material Design UI",
      "Responsive Layouts",
      "Clickable Prototype",
      "Design System",
      "Play Store Screens",
      "30 Days Support",
    ],
    duration: "Typically 4 to 8 Weeks",
    video: "/videos/home-screen-app.mp4",
    imagePosition: "right",
  },
];
