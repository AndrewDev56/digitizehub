export type Service = {
  title: string;
  href: string;
  video: string;
};

// "Website Design" rendered with a large image by default, the rest are
// link rows with a divider + arrow icon; hover/focus swaps the preview
// to that row's own video.
export const services: Service[] = [
  { title: "UI & UX Design", href: "/services/ui-ux-design", video: "/videos/website-that-sell.mp4" },
  { title: "Mobile App Design", href: "/services/mobile-app-design", video: "/videos/home-screen-app.mp4" },
  { title: "Branding & Logo Design", href: "/services/branding", video: "/videos/Branding-logo-design.mp4" },
  { title: "Social Media Marketing", href: "/services/social-media-marketing", video: "/videos/Social Media.mp4" },
  { title: "Search Engine Optimization", href: "/services/seo", video: "/videos/seo.mp4" },
];
