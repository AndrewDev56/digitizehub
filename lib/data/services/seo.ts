import type { ServiceDetailContent } from "@/lib/data/serviceDetail";
import type { AboutService } from "@/lib/data/aboutServices";

export const seoContent: ServiceDetailContent = {
  slug: "seo",
  eyebrowTags: ["Websites", "Apps", "Deployment", "SEO", "Branding", "Social"],
  heroH1: [[{ text: "Search Engine", italic: true }, { text: " Optimization Services." }]],
  heroSubtext:
    "Digitize Hub is an SEO agency in Calgary and Atlanta helping businesses across Canada and the USA get found by customers who are already searching. We combine technical SEO, on-page optimization, and off-page authority building to grow rankings, traffic, and real enquiries.",
  heroImageAlt: "SEO services dashboard showing ranking and organic traffic growth by Digitize Hub",
  heroTitle: [
    [{ text: "Hire a Top " }, { text: "SEO", italic: true }, { text: " Company" }],
    [{ text: "in Canada & the USA" }],
  ],
  heroBody:
    "Ranking on page two is almost the same as not ranking at all. We find the keywords your customers use, fix what holds your site back, and build the authority Google needs to trust you.",
  captivatingTitle: [
    [{ text: "Result-Driven " }, { text: "SEO", italic: true }],
    [{ text: "That Brings Customers" }],
  ],
  captivatingBody:
    "Looking for an SEO company that explains what it is doing and why? We optimize websites for local businesses, e-commerce stores, and B2B companies, and send monthly plain-English reports showing rankings, traffic, and the leads your search visibility brings in.",
  captivatingPills: ["Technical SEO", "Local SEO", "Keyword Research", "Link Building"],
  servicesTitle: [[{ text: "Our " }, { text: "SEO", italic: true }, { text: " Services" }]],
  processTitle: [[{ text: "Our " }, { text: "SEO", italic: true }, { text: " Process" }]],
  processSteps: [
    {
      title: "SEO Audit & Research",
      copy: "We audit your site's technical health, content, and backlinks, then research the keywords your customers search and the competitors ranking for them. You see exactly where you stand.",
    },
    {
      title: "Strategy & Keyword Mapping",
      copy: "We build a clear plan that assigns target keywords to each page, sets priorities by revenue impact, and lists the fixes, content, and links needed to win each ranking.",
    },
    {
      title: "Optimization & Content",
      copy: "We fix technical issues, improve speed, optimize existing pages, and write new SEO content that answers your customers' questions better than the pages ranking above you today.",
    },
    {
      title: "Authority & Reporting",
      copy: "We earn quality backlinks, build citations, and strengthen your Google Business Profile. Every month you get a plain-English report on rankings, traffic, and leads.",
    },
  ],
  industriesTitle: [[{ text: "SEO", italic: true }, { text: " that Fits Your Industry" }]],
  industriesChips: [
    "Real Estate",
    "Healthcare",
    "E-Commerce",
    "Manufacturing",
    "Logistics",
    "Oil & Gas",
    "Energy",
    "Hospitality",
    "Fintech",
    "Agriculture",
  ],
  industriesBody:
    "Every industry searches differently. We target the keywords, local signals, and content your buyers rely on, whether they are booking a clinic, comparing suppliers, or searching for a home.",
  caseStudiesTitle: [[{ text: "SEO", italic: true }, { text: " Case Studies" }]],
  auditCtaTitle: [
    [{ text: "Not Sure Where to Start? Get a" }],
    [{ text: "Website Audit", italic: true }, { text: " First." }],
  ],
  auditCtaBody:
    "We go through your site page by page and send a plain English report: what is costing you customers, what to fix first, and what it should cost. Delivered in [X] business days for [Price]. If you hire us after, the fee comes off your project.",
};

// Both rows use the same seo.mp4 since only one SEO video asset exists —
// tell me if On-Page and Off-Page should each get their own separate video.
// Both timelines are marked [confirm] in the source content doc — check before publishing.
export const seoShowcaseRows: AboutService[] = [
  {
    titleLines: [[{ text: "On-Page", italic: true }, { text: " SEO Services" }]],
    description:
      "We make your website easy for Google to crawl, understand, and rank. Our team fixes technical issues, improves page speed, maps keywords to the right pages, and optimizes titles, headings, content, and schema markup across your site.",
    features: [
      "Technical SEO Audit",
      "Keyword Mapping",
      "Page Speed Fixes",
      "Content Optimization",
      "Schema Markup",
      "Monthly Report",
    ],
    duration: "Monthly Plan, First Results in 3 to 6 Months",
    video: "/videos/seo.mp4",
    imagePosition: "left",
  },
  {
    titleLines: [[{ text: "Off-Page", italic: true }, { text: " SEO Services" }]],
    description:
      "We build the trust signals that push your site above competitors. From quality backlinks and local citations to Google Business Profile optimization and review strategy, we grow your authority safely, without spammy shortcuts that risk penalties.",
    features: [
      "Quality Backlinks",
      "Local Citations",
      "Google Business Profile",
      "Review Strategy",
      "Competitor Analysis",
      "Monthly Report",
    ],
    duration: "Monthly Plan, First Results in 3 to 6 Months",
    video: "/videos/seo.mp4",
    imagePosition: "right",
  },
];
