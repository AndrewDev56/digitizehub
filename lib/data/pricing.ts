export type PricingPlan = {
  name: string;
  icon: string;
  badge?: string;
  price: string;
  priceLabel: string;
  features: string[];
  featured: boolean;
};

// Transcribed from a low-resolution screenshot — structure (icon, inline
// price + CTA, feature count) is confident; exact feature wording for
// Custom in particular is uncertain since it looked nearly identical to
// Launch at this resolution. Verify once you can send a clearer crop or
// Figma access resets.
export const pricingPlans: PricingPlan[] = [
  {
    name: "Launch",
    icon: "/icons/rocket-tilted.png",
    price: "1,499",
    priceLabel: "Starting at",
    featured: false,
    features: [
      "Up to 3 custom pages",
      "Responsive website design",
      "Basic on-page SEO setup",
      "Contact form integration",
      "Speed & security optimization",
      "Launch support included",
    ],
  },
  {
    name: "Growth",
    icon: "/icons/growth.png",
    badge: "Most Popular",
    price: "3,499",
    priceLabel: "Starting at",
    featured: true,
    features: [
      "Up to 10 custom pages",
      "Custom UI/UX design",
      "Advanced SEO optimization",
      "CMS with easy content editing",
      "Analytics & conversion tracking",
      "30 days post-launch support",
    ],
  },
  {
    name: "Custom",
    icon: "/icons/custom.png",
    price: "1,499",
    priceLabel: "Starting at",
    featured: false,
    features: [
      "Up to 5 custom pages",
      "Responsive website design",
      "Basic on-page SEO setup",
      "Contact form integration",
      "Speed & security optimization",
      "Launch support included",
    ],
  },
];  