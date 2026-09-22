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
      { label: "Website Design", href: "/services/website-design" },
      { label: "Mobile App Design", href: "/services/mobile-app-design" },
      { label: "Website Development", href: "/services/website-development" },
      { label: "Branding", href: "/services/branding" },
      { label: "Graphic Design", href: "/services/graphic-design" },
      { label: "Motion Graphics", href: "/services/motion-graphics" },
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