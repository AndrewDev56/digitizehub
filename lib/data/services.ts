export type Service = {
  title: string;
  href: string;
  video: string;
};

// "Website Design" rendered with a large image by default, the rest are
// link rows with a divider + arrow icon; hover/focus swaps the preview
// to that row's own video.
export const services: Service[] = [
  { title: "Website Design", href: "/services/website-design", video: "/videos/website-that-sell.mp4" },
  { title: "Mobile App Design", href: "/services/mobile-app-design", video: "/videos/home-screen-app.mp4" },
  { title: "Website Development", href: "/services/website-development", video: "/videos/home-website-design-video.mp4" },
  { title: "Branding", href: "/services/branding", video: "/videos/Branding-logo-design.mp4" },
  { title: "Graphic Design", href: "/services/graphic-design", video: "/videos/Social Media.mp4" },
  { title: "Motion Graphics", href: "/services/motion-graphics", video: "/videos/seo.mp4" },
];
