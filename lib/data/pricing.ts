export type PricingPlan = {
  name: string;
  icon: string;
  badge?: string;
  price: string;
  priceLabel: string;
  features: string[];
  featured: boolean;
};

export type PricingService = {
  id: string;
  label: string;
  tagline: string;
  showBilling: boolean;
  plans: PricingPlan[];
};

const launchIcon = "/icons/rocket-tilted.png";
const growthIcon = "/icons/growth.png";
const customIcon = "/icons/custom.png";

const tiers = {
  launch: (features: string[]): PricingPlan => ({
    name: "Launch",
    icon: launchIcon,
    price: "[Price]",
    priceLabel: "Starting at",
    featured: false,
    features,
  }),
  growth: (features: string[]): PricingPlan => ({
    name: "Growth",
    icon: growthIcon,
    badge: "Most Popular",
    price: "[Price]",
    priceLabel: "Starting at",
    featured: true,
    features,
  }),
  custom: (features: string[]): PricingPlan => ({
    name: "Custom",
    icon: customIcon,
    price: "[Price]",
    priceLabel: "Starting at",
    featured: false,
    features,
  }),
};

export const pricingServices: PricingService[] = [
  {
    id: "website-design",
    label: "Website Design",
    tagline:
      "No hourly billing. No lock in. Every file, account, and password is yours at handover.",
    showBilling: false,
    plans: [
      tiers.launch([
        "Up to 5 custom pages",
        "Responsive website design",
        "Basic on-page SEO setup",
        "Contact form integration",
        "Speed & security optimization",
        "Launch support included",
      ]),
      tiers.growth([
        "Up to 15 custom pages",
        "Custom UI/UX design",
        "Advanced SEO optimization",
        "CMS with easy content editing",
        "Analytics & conversion tracking",
        "30 days post-launch support",
      ]),
      tiers.custom([
        "15+ pages, scoped to your business",
        "E-commerce, booking or client portal",
        "Custom features and integrations",
        "Full SEO setup with schema markup",
        "Copywriting for key pages",
        "60 days support and team training",
      ]),
    ],
  },
  {
    id: "mobile-app-design",
    label: "Mobile App Design",
    tagline:
      "One fixed price per app design project. No hourly billing. Every screen, file and prototype is yours at handover.",
    showBilling: false,
    plans: [
      tiers.launch([
        "Up to 10 app screens",
        "iOS or Android design",
        "Basic user flow mapping",
        "Clickable prototype",
        "Figma design files handover",
        "14 days post-delivery support",
      ]),
      tiers.growth([
        "Up to 30 app screens",
        "iOS and Android design",
        "UX research and user personas",
        "Interactive prototype with animations",
        "Design system and components",
        "30 days post-delivery support",
      ]),
      tiers.custom([
        "30+ screens, scoped to your app",
        "Full product UX strategy",
        "Usability testing with real users",
        "Admin panel or web dashboard design",
        "Developer handoff with full specs",
        "Priority support and design updates",
      ]),
    ],
  },
  {
    id: "branding",
    label: "Branding",
    tagline:
      "One fixed price per brand project. No hourly billing. Every logo file and full ownership rights are yours at handover.",
    showBilling: false,
    plans: [
      tiers.launch([
        "3 custom logo concepts",
        "2 revision rounds",
        "Primary colour palette",
        "Font pairing",
        "All file formats (PNG, SVG, PDF)",
        "Full ownership rights",
      ]),
      tiers.growth([
        "5 custom logo concepts",
        "4 revision rounds",
        "Complete brand identity system",
        "Brand guidelines document",
        "Business card and stationery design",
        "Social media profile kit",
      ]),
      tiers.custom([
        "Brand strategy and positioning",
        "Logo, identity and brand voice",
        "Detailed brand guidelines book",
        "Full stationery and marketing collateral",
        "Social media template kit",
        "Packaging or signage design",
      ]),
    ],
  },
  {
    id: "social-media-marketing",
    label: "Social Media Marketing",
    tagline:
      "Monthly plans. No lock in. Ad spend is paid directly to the platforms, in your name.",
    showBilling: true,
    plans: [
      tiers.launch([
        "2 platforms managed",
        "12 posts per month",
        "Monthly content calendar",
        "Caption and hashtag writing",
        "Basic community replies",
        "Monthly performance report",
      ]),
      tiers.growth([
        "3 platforms managed",
        "20 posts and 4 reels per month",
        "Paid ads on 1 platform",
        "Daily community management",
        "Audience targeting and A/B testing",
        "Bi-weekly performance report",
      ]),
      tiers.custom([
        "4+ platforms managed",
        "30 posts and 8 reels per month",
        "Meta and LinkedIn ads management",
        "Influencer and UGC coordination",
        "Dedicated account manager",
        "Weekly reports and strategy calls",
      ]),
    ],
  },
  {
    id: "seo",
    label: "Search Engine Optimization",
    tagline:
      "Monthly plans. No lock in. Every account, report and piece of content is yours.",
    showBilling: true,
    plans: [
      tiers.launch([
        "Up to 10 target keywords",
        "Technical SEO audit",
        "On-page optimization for 5 pages",
        "Google Business Profile setup",
        "Search Console and Analytics setup",
        "Monthly ranking report",
      ]),
      tiers.growth([
        "Up to 30 target keywords",
        "On-page optimization for 15 pages",
        "2 SEO blog posts per month",
        "Quality backlink building",
        "Local citations and GBP optimization",
        "Monthly report on traffic and leads",
      ]),
      tiers.custom([
        "50+ target keywords",
        "Full-site technical SEO",
        "4 SEO blog posts per month",
        "Advanced link building and digital PR",
        "Competitor tracking and analysis",
        "Dedicated SEO manager and strategy calls",
      ]),
    ],
  },
];

export const pricingPlans: PricingPlan[] = pricingServices[0].plans;
