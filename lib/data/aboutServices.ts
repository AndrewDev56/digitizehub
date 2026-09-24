export type TitleSegment = { text: string; italic?: boolean };

export type AboutService = {
  titleLines: TitleSegment[][];
  description: string;
  features: string[];
  duration: string;
  video: string;
  imagePosition: "left" | "right";
};

// Confirmed via Figma REST API (node 64:1795).
export const aboutServices: AboutService[] = [
  {
    titleLines: [[{ text: "Websites", italic: true }, { text: " that Sell" }]],
    description:
      "For businesses whose site should be bringing in customers and is not.",
    features: [
      "Custom Design",
      "Mobile First Build",
      "Copy Help",
      "On-page SEO",
      "Speed Testing",
      "30 Days Support",
    ],
    duration: "Typically 3 to 6 Weeks",
    video: "/videos/website-that-sell.mp4",
    imagePosition: "left",
  },
  {
    titleLines: [
      [{ text: "Apps", italic: true }, { text: " People Keep on" }],
      [{ text: "the Home Screen" }],
    ],
    description: "For businesses whose customers are on their phones all day.",
    features: [
      "iOS & Android",
      "UI/UX Design",
      "Analytics",
      "Store Submission",
      "Speed Testing",
      "Updates",
    ],
    duration: "Typically 8 to 16 Weeks",
    video: "/videos/home-screen-app.mp4",
    imagePosition: "right",
  },
  {
    titleLines: [
      [
        { text: "Branding", italic: true },
        { text: " and " },
        { text: "Logo", italic: true },
        { text: " Design" },
      ],
    ],
    description: "For businesses that are better than they look.",
    features: [
      "Logo and Wordmark Design",
      "Color Palette",
      "Typography System",
      "Brand Guidelines",
      "Business Stationery",
      "Social Media Brand Assets",
    ],
    duration: "Typically 2 to 4 Weeks",
    video: "/videos/branding-logo-design.mp4",
    imagePosition: "left",
  },
  {
    titleLines: [[{ text: "Social", italic: true }, { text: " Media Marketing" }]],
    description: "For businesses that want attention that turns into customers.",
    features: [
      "Social Media Strategy",
      "Content Creation & Design",
      "Content Scheduling",
      "Community Management",
      "Paid Advertising Campaigns",
      "Monthly Performance Reporting",
    ],
    duration: "Ongoing Monthly Service.",
    video: "/videos/Social Media.mp4",
    imagePosition: "right",
  },
  {
    titleLines: [
      [{ text: "Search Engine " }, { text: "Optimization", italic: true }],
    ],
    description: "For businesses that need customers, not compliments.",
    features: [
      "Technical SEO Audit",
      "Keyword Research & Strategy",
      "On-page Optimization",
      "Content Optimization",
      "Local SEO & Google Business Profile",
      "Monthly Performance Reporting",
    ],
    duration: "Ongoing Monthly Service.",
    video: "/videos/seo.mp4",
    imagePosition: "left",
  },
];