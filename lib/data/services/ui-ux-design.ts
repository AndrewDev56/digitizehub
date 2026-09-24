import type { ServiceDetailContent } from "@/lib/data/serviceDetail";
import type { AboutService } from "@/lib/data/aboutServices";

export const uiUxDesignContent: ServiceDetailContent = {
  slug: "ui-ux-design",
  eyebrowTags: ["Websites", "Apps", "Deployment", "SEO", "Branding", "Social"],
  heroTitle: [
    [{ text: "Hire Top " }, { text: "UI / UX", italic: true }, { text: " Design" }],
    [{ text: "Company in USA" }],
  ],
  heroSubtext:
    "Leading UI/UX design agency Calgary and Georgia, helping startups, SMEs, and enterprises craft intuitive digital experiences. From responsive websites to mobile-first apps, our human-centered design approach combines functionality, aesthetics, and conversion strategy.",
  auditCtaTitle: [
    [{ text: "Not Sure Where to Start? Get a" }],
    [{ text: "Website Audit", italic: true }, { text: " First." }],
  ],
  auditCtaBody:
    "We go through your site page by page and send a plain English report: what is costing you customers, what to fix first, and what it should cost. Delivered in [X] business days for [Price]. If you hire us after, the fee comes off your project.",
};

const sharedFeatures = [
  "Custom Design",
  "Mobile First Build",
  "Copy Help",
  "On-page SEO",
  "Speed Testing",
  "30 Days Support",
];
const sharedDescription =
  "We design conversion-focused websites that are responsive, accessible, and purpose-built. Whether it's a corporate site, e-commerce storefront, or product landing page, our UI/UX team ensures your digital presence aligns with your brand and user goals.";

// Both rows use the same ui-ux-vid.mp4 since only one file was given —
// tell me if each row should actually have its own separate video.
export const uiUxShowcaseRows: AboutService[] = [
  {
    titleLines: [[{ text: "Websites", italic: true }, { text: " Design Services" }]],
    description: sharedDescription,
    features: sharedFeatures,
    duration: "Typically 3 to 6 Weeks",
    media: "/videos/services/ui-ux-vid.mp4",
    mediaType: "video",
    imagePosition: "left",
  },
  {
    titleLines: [[{ text: "Mobile", italic: true }, { text: " Design Services" }]],
    description: sharedDescription,
    features: sharedFeatures,
    duration: "Typically 3 to 6 Weeks",
    media: "/videos/services/ui-ux-vid.mp4",
    mediaType: "video",
    imagePosition: "right",
  },
];