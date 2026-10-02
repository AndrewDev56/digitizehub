import type { ServiceDetailContent } from "@/lib/data/serviceDetail";
import type { AboutService } from "@/lib/data/aboutServices";

export const brandingContent: ServiceDetailContent = {
  slug: "branding",
  eyebrowTags: ["Websites", "Apps", "Deployment", "SEO", "Branding", "Social"],
  heroH1: [[{ text: "Branding & Logo", italic: true }, { text: " Design Services." }]],
  heroSubtext:
    "Digitize Hub is a branding and logo design agency in Calgary and Atlanta helping businesses across Canada and the USA look as good as they really are. We design logos, colour palettes, and complete brand identities that people recognize, remember, and trust.",
  heroImageAlt: "Branding and logo design services showing a brand identity system by Digitize Hub",
  heroTitle: [
    [{ text: "Hire a Top " }, { text: "Branding", italic: true }, { text: " Agency" }],
    [{ text: "in Canada & the USA" }],
  ],
  heroBody:
    "A strong brand makes every ad, website, and sales call work harder. We build brand identities with strategy behind them, so your business looks consistent and credible everywhere it shows up.",
  captivatingTitle: [
    [{ text: "Captivating " }, { text: "Brand Identity", italic: true }],
    [{ text: "& Logo Design" }],
  ],
  captivatingBody:
    "Looking for logo designers who understand your market, not just your colour preferences? Our team researches your audience and competitors first, then designs custom logos and brand systems for startups, local businesses, and established companies ready for a refresh.",
  captivatingPills: ["Logo Design", "Brand Identity", "Brand Guidelines", "Rebranding"],
  servicesTitle: [[{ text: "Our " }, { text: "Branding", italic: true }, { text: " Services" }]],
  processTitle: [[{ text: "Our " }, { text: "Branding", italic: true }, { text: " Process" }]],
  processSteps: [
    {
      title: "Brand Discovery",
      copy: "We learn your story, your customers, and your competitors through a short questionnaire and a discovery call. This tells us what your brand must say and how it should stand apart.",
    },
    {
      title: "Strategy & Moodboards",
      copy: "We define your brand personality and visual direction, then share moodboards so you approve the look and feel before any logo is drawn. No guessing, no wasted revision rounds.",
    },
    {
      title: "Logo & Identity Design",
      copy: "Our designers create original logo concepts, refine your favourite, and extend it into colours, typography, and supporting graphics that work on screen and in print.",
    },
    {
      title: "Guidelines & Handoff",
      copy: "You receive final files in every format you need, plus brand guidelines showing your team how to use the logo, colours, and fonts. Every file and right is yours.",
    },
  ],
  industriesTitle: [[{ text: "Branding", italic: true }, { text: " that Fits Your Industry" }]],
  industriesChips: [
    "Real Estate",
    "Hospitality",
    "Healthcare",
    "E-Commerce",
    "Fintech",
    "Manufacturing",
    "Agriculture",
    "Entertainment",
    "Energy",
    "Logistics",
  ],
  industriesBody:
    "Your brand should feel right to your customers. We design identities that match the trust, energy, or premium feel your industry expects, while still standing out from every competitor.",
  caseStudiesTitle: [[{ text: "Branding & Logo", italic: true }, { text: " Design Case Studies" }]],
  auditCtaTitle: [
    [{ text: "Not Sure Where to Start? Get a" }],
    [{ text: "Website Audit", italic: true }, { text: " First." }],
  ],
  auditCtaBody:
    "We go through your site page by page and send a plain English report: what is costing you customers, what to fix first, and what it should cost. Delivered in [X] business days for [Price]. If you hire us after, the fee comes off your project.",
};

// Both rows use the same Branding-logo-design.mp4 since only one branding video asset exists —
// tell me if Logo Design and Brand Identity should each get their own separate video.
// Card 1 timeline is marked [confirm] in the source content doc — check before publishing.
export const brandingShowcaseRows: AboutService[] = [
  {
    titleLines: [[{ text: "Logo", italic: true }, { text: " Design Services" }]],
    description:
      "We design custom logos that are simple, memorable, and built to work everywhere, from a mobile app icon to a storefront sign. Every concept is drawn for your business, never pulled from a template or stock library.",
    features: [
      "Custom Concepts",
      "Wordmark & Icon",
      "Revision Rounds",
      "Colour Variations",
      "All File Formats",
      "Full Ownership",
    ],
    duration: "Typically 1 to 2 Weeks",
    video: "/videos/Branding-logo-design.mp4",
    imagePosition: "left",
  },
  {
    titleLines: [[{ text: "Brand Identity", italic: true }, { text: " Design Services" }]],
    description:
      "We turn your logo into a complete brand system: colour palette, typography, imagery style, and brand voice. Your team gets clear guidelines, so every website, post, and print piece looks like it came from the same company.",
    features: [
      "Colour & Type System",
      "Brand Guidelines",
      "Stationery Design",
      "Social Templates",
      "Brand Voice",
      "Full Ownership",
    ],
    duration: "Typically 2 to 4 Weeks",
    video: "/videos/Branding-logo-design.mp4",
    imagePosition: "right",
  },
];
