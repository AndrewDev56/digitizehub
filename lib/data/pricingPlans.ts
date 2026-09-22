export type PricingPlan = {
  name: string;
  icon: string;
  badge?: string;
  price: string;
  features: string[];
  featured: boolean;
};

// Confirmed via Figma REST API (node 1:3030). Custom's feature list is
// literally identical to Launch's in the Figma file — not an error on my
// end, worth flagging to whoever owns the design.
export const pricingPlans: PricingPlan[] = [
  {
    name: "Launch",
    icon: "/icons/rocket-tilted.png",
    price: "1,499",
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
  {
    name: "Growth",
    icon: "/icons/growth.png",
    badge: "Most Popular",
    price: "3,499",
    featured: true,
    features: [
      "Up to 15 custom pages",
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