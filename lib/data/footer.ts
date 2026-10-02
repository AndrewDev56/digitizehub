export type FooterColumn = {
  title: string;
  links: { label: string; href: string }[];
};

export const footerColumns: FooterColumn[] = [
  {
    title: "Industries",
    links: [
      { label: "Agriculture", href: "/industries/agriculture" },
      { label: "E-Commerce", href: "/industries/ecommerce" },
      { label: "Energy", href: "/industries/energy" },
      { label: "Entertainment", href: "/industries/entertainment" },
      { label: "Fintech", href: "/industries/fintech" },
      { label: "Health Care", href: "/industries/health-care" },
      { label: "Hospitality", href: "/industries/hospitality" },
      { label: "Logistics", href: "/industries/logistics" },
      { label: "Manufacturing", href: "/industries/manufacturing" },
      { label: "Oil & Gas", href: "/industries/oil-gas" },
      { label: "Real Estate", href: "/industries/real-estate" },
    ],
  },
  {
    title: "Our Services",
    links: [
      { label: "UI & UX Design", href: "/services/ui-ux-design" },
      { label: "Mobile App Design", href: "/services/mobile-app-design" },
      { label: "Branding & Logo Design", href: "/services/branding" },
      { label: "Social Media Marketing", href: "/services/social-media-marketing" },
      { label: "Search Engine Optimization", href: "/services/seo" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Work", href: "/work" },
      { label: "About", href: "/about" },
      { label: "Pricing", href: "/pricing" },
      { label: "Blog", href: "/blog" },
      { label: "FAQ's", href: "/faq" },
      { label: "Contact", href: "/contact" },
    ],
  },
];