export interface AppPricingPlan {
  name: string;
  icon: string; // path under /public, e.g. "/icons/rocket.png"
  popular?: boolean;
  priceMonthly: number;
  /** Placeholder — no quarterly figures were in the Figma frame. Replace with real numbers. */
  priceQuarterly: number;
  features: string[];
}

const quarterlyFromMonthly = (monthly: number) => Math.round(monthly * 3 * 0.9);

export const appPricingPlans: AppPricingPlan[] = [
  {
    name: "Basic App",
    icon: "/icons/rocket.png",
    priceMonthly: 999,
    priceQuarterly: quarterlyFromMonthly(999),
    features: [
      "UI/UX Design",
      "Up to 5 app screens",
      "Android or iOS development",
      "User login & signup",
      "Basic database setup",
      "Forms and standard interactions",
    ],
  },
  {
    name: "Advanced App",
    icon: "/icons/growth.png",
    popular: true,
    priceMonthly: 2999,
    priceQuarterly: quarterlyFromMonthly(2999),
    features: [
      "Custom UI/UX Design in Figma",
      "Up to 15 app screens",
      "Android & iOS development",
      "User authentication and profiles",
      "Custom database and backend setup",
      "Admin dashboard",
    ],
  },
  {
    name: "Premium App",
    icon: "/icons/custom.png",
    priceMonthly: 6999,
    priceQuarterly: quarterlyFromMonthly(6999),
    features: [
      "Fully custom UI/UX Design",
      "Up to 30 app screens",
      "Android & iOS development",
      "Custom backend architecture",
      "Advanced admin dashboard",
      "Multiple user roles and permissions",
    ],
  },
];