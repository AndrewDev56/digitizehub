export type Service = {
  title: string;
  href: string;
};

// PLACEHOLDER structure — confirmed from earlier layout scan: "Website
// Design" renders with a large image, the rest are link rows with a
// divider + arrow icon (hover reveals an image, not yet wired here).
export const services: Service[] = [
  { title: "Website Design", href: "/services/website-design" },
  { title: "Mobile App Design", href: "/services/mobile-app-design" },
  { title: "Website Development", href: "/services/website-development" },
  { title: "Branding", href: "/services/branding" },
  { title: "Graphic Design", href: "/services/graphic-design" },
  { title: "Motion Graphics", href: "/services/motion-graphics" },
];  