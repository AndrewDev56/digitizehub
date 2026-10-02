import type { ServiceDetailContent } from "@/lib/data/serviceDetail";
import type { AboutService } from "@/lib/data/aboutServices";

export const uiUxDesignContent: ServiceDetailContent = {
  slug: "ui-ux-design",
  eyebrowTags: ["Websites", "Apps", "Deployment", "SEO", "Branding", "Social"],
  heroH1: [[{ text: "UI & UX", italic: true }, { text: " Design Services." }]],
  heroSubtext:
    "Digitize Hub is a UI/UX design agency in Calgary and Atlanta helping startups, SMEs, and enterprises across Canada and the USA design digital products people enjoy using. From websites to SaaS dashboards, our research-led UX design turns confused visitors into confident customers.",
  heroImageAlt: "UI/UX design services by Digitize Hub showing a website and dashboard interface",
  heroTitle: [
    [{ text: "Hire a Top " }, { text: "UI / UX", italic: true }, { text: " Design Company" }],
    [{ text: "in Canada & the USA" }],
  ],
  heroBody:
    "Work with a UX design team that starts with your users, not trends. We plan, design, and test every screen so your website or product is easy to use and built to convert.",
  captivatingTitle: [
    [{ text: "Captivating " }, { text: "UI & UX", italic: true }],
    [{ text: "Design That Converts" }],
  ],
  captivatingBody:
    "Looking for UI/UX designers who understand both your users and your business goals? Our team designs custom user experiences for SaaS platforms, websites, web apps, and enterprise systems. Every layout is backed by research, tested before launch, and handed over ready for development.",
  captivatingPills: ["User Research", "Wireframing", "Prototyping", "Usability Testing"],
  servicesTitle: [[{ text: "Our " }, { text: "UI / UX", italic: true }, { text: " Design Services" }]],
  processTitle: [[{ text: "Our " }, { text: "UI / UX", italic: true }, { text: " Design Process" }]],
  processSteps: [
    {
      title: "In-depth Research",
      copy: "We begin by understanding your business, target audience, and competitors. Through stakeholder interviews, user personas, and market research, we identify the exact design challenges and opportunities.",
    },
    {
      title: "Planning & Blueprints",
      copy: "Based on the insights, we build user flows, sitemaps, and wireframes, the blueprint of your digital experience. This keeps the interface intuitive, conversion-friendly, and easy to scale.",
    },
    {
      title: "UI Design & Prototyping",
      copy: "We turn approved wireframes into high-fidelity screens in your brand style. Clickable prototypes let you test the real experience and lock decisions before a single line of code is written.",
    },
    {
      title: "Testing & Handoff",
      copy: "We test with real users, fix what slows them down, and deliver organized Figma files, a component library, and specs your developers can build from without guesswork.",
    },
  ],
  industriesTitle: [[{ text: "UX", italic: true }, { text: " that Fits Your Industry" }]],
  industriesChips: [
    "SaaS Products",
    "Fintech",
    "Healthcare",
    "E-Commerce",
    "Logistics",
    "Real Estate",
    "Manufacturing",
    "Hospitality",
    "Energy",
    "Entertainment",
  ],
  industriesBody:
    "We prioritize usability and conversion. Our UI/UX designers tailor every decision to your industry, its users, and its rules, so every flow feels familiar and trustworthy from the first click.",
  caseStudiesTitle: [[{ text: "UI & UX", italic: true }, { text: " Design Case Studies" }]],
  auditCtaTitle: [
    [{ text: "Not Sure Where to Start? Get a" }],
    [{ text: "Website Audit", italic: true }, { text: " First." }],
  ],
  auditCtaBody:
    "We go through your site page by page and send a plain English report: what is costing you customers, what to fix first, and what it should cost. Delivered in [X] business days for [Price]. If you hire us after, the fee comes off your project.",
};

// Card 2 timeline is marked [confirm] in the source content doc — check before publishing.
export const uiUxShowcaseRows: AboutService[] = [
  {
    titleLines: [[{ text: "Website", italic: true }, { text: " UX Design Services" }]],
    description:
      "We design conversion-focused websites that are responsive, accessible, and purpose-built. Whether it is a corporate site, an e-commerce store, or a product landing page, our UI/UX team aligns every page with your brand and your visitors' goals.",
    features: [
      "Custom Design",
      "Mobile-First Layouts",
      "UX Copy Help",
      "On-Page SEO Ready",
      "Speed Testing",
      "30 Days Support",
    ],
    duration: "Typically 3 to 6 Weeks",
    video: "/videos/home-website-design-video.mp4",
    imagePosition: "left",
  },
  {
    titleLines: [[{ text: "SaaS & Web App", italic: true }, { text: " Design Services" }]],
    description:
      "We design dashboards, portals, and web apps that make complex workflows feel simple. From onboarding flows to admin panels, our UX designers cut clicks and confusion, helping users reach value faster and stay with your product longer.",
    features: [
      "UX Audit",
      "User Flows",
      "Wireframes",
      "Interactive Prototype",
      "Design System",
      "Developer Handoff",
    ],
    duration: "Typically 4 to 8 Weeks",
    video: "/videos/home-screen-app.mp4",
    imagePosition: "right",
  },
];
