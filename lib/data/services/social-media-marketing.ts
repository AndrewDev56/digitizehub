import type { ServiceDetailContent } from "@/lib/data/serviceDetail";
import type { AboutService } from "@/lib/data/aboutServices";

export const socialMediaMarketingContent: ServiceDetailContent = {
  slug: "social-media-marketing",
  eyebrowTags: ["Websites", "Apps", "Deployment", "SEO", "Branding", "Social"],
  heroH1: [[{ text: "Social Media", italic: true }, { text: " Marketing Services." }]],
  heroSubtext:
    "Digitize Hub is a social media marketing agency in Calgary and Atlanta helping brands across Canada and the USA turn attention into customers. We plan, design, publish, and run paid campaigns on Instagram, Facebook, and LinkedIn, and we report in leads, not likes.",
  heroImageAlt: "Social media marketing services showing branded Instagram and Facebook posts by Digitize Hub",
  heroTitle: [
    [{ text: "Hire a Top " }, { text: "Social Media", italic: true }, { text: " Marketing" }],
    [{ text: "Agency in Canada & the USA" }],
  ],
  heroBody:
    "Posting every day means nothing if nobody buys. We build social media strategies tied to your sales goals, so every post, story, and ad has a clear job to do.",
  captivatingTitle: [
    [{ text: "Captivating " }, { text: "Social Media", italic: true }],
    [{ text: "Content & Campaigns" }],
  ],
  captivatingBody:
    "Looking for a social media team that understands both content and conversion? We create scroll-stopping posts, reels, and ad creatives for local businesses, e-commerce brands, and B2B companies, then track what each one brings back in reach, leads, and sales.",
  captivatingPills: ["Content Creation", "Community Management", "Paid Ads", "Monthly Reporting"],
  servicesTitle: [[{ text: "Our " }, { text: "Social Media", italic: true }, { text: " Marketing Services" }]],
  processTitle: [[{ text: "Our " }, { text: "Social Media", italic: true }, { text: " Marketing Process" }]],
  processSteps: [
    {
      title: "Audit & Research",
      copy: "We review your current profiles, competitors, and audience to see what works, what does not, and where your customers spend time online. You get a clear picture before any money is spent.",
    },
    {
      title: "Strategy & Content Plan",
      copy: "We set goals tied to your business, pick the right platforms, and build a monthly content calendar with themes, post formats, and campaign dates, all approved by you before anything goes live.",
    },
    {
      title: "Create & Publish",
      copy: "Our designers and writers produce posts, reels, and ad creatives in your brand style. We schedule them at the best times and manage comments and messages every day.",
    },
    {
      title: "Track & Improve",
      copy: "Every month you get a plain-English report on reach, engagement, leads, and cost per lead. We double down on what works and replace what does not.",
    },
  ],
  industriesTitle: [[{ text: "Social Media", italic: true }, { text: " that Fits Your Industry" }]],
  industriesChips: [
    "E-Commerce",
    "Hospitality",
    "Real Estate",
    "Healthcare",
    "Fintech",
    "Entertainment",
    "Agriculture",
    "Manufacturing",
    "Restaurants & Food",
    "Fitness & Wellness",
  ],
  industriesBody:
    "What works for a restaurant fails for a B2B manufacturer. We match platforms, content style, and ad targeting to how your customers actually discover and choose businesses like yours.",
  caseStudiesTitle: [[{ text: "Social Media", italic: true }, { text: " Marketing Case Studies" }]],
  auditCtaTitle: [
    [{ text: "Not Sure Where to Start? Get a" }],
    [{ text: "Website Audit", italic: true }, { text: " First." }],
  ],
  auditCtaBody:
    "We go through your site page by page and send a plain English report: what is costing you customers, what to fix first, and what it should cost. Delivered in [X] business days for [Price]. If you hire us after, the fee comes off your project.",
};

// Both rows use the same "Social Media.mp4" since only one social video asset exists —
// tell me if the two service cards should each get their own separate video.
export const socialMediaMarketingShowcaseRows: AboutService[] = [
  {
    titleLines: [[{ text: "Social Media", italic: true }, { text: " Management Services" }]],
    description:
      "We run your social media accounts from start to finish. Our team plans a monthly content calendar, designs on-brand posts and reels, writes captions, schedules everything, and replies to comments and messages so customers always hear back.",
    features: [
      "Content Calendar",
      "Post & Reel Design",
      "Caption Writing",
      "Scheduling",
      "Community Replies",
      "Monthly Report",
    ],
    duration: "Monthly Plan, No Lock-in",
    video: "/videos/Social Media.mp4",
    imagePosition: "left",
  },
  {
    titleLines: [[{ text: "Paid Social", italic: true }, { text: " Advertising Services" }]],
    description:
      "We plan and manage paid campaigns on Meta and LinkedIn that reach the right people at the right cost. From audience targeting to ad creatives and A/B testing, every campaign is measured in leads and sales, not vanity metrics.",
    features: [
      "Meta Ads",
      "LinkedIn Ads",
      "Audience Targeting",
      "Ad Creatives",
      "A/B Testing",
      "Lead Tracking",
    ],
    duration: "Monthly Plan, Ad Spend Billed Separately",
    video: "/videos/Social Media.mp4",
    imagePosition: "right",
  },
];
