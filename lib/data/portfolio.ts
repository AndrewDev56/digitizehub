export type PortfolioItem = {
  title: string;
  tags: string[];
  mockupTags?: string[];
  image: string;
  video: string;
  /** Real Figma layer dimensions — used to derive the aspect ratio, not for next/image width/height. */
  imageWidth: number;
  imageHeight: number;
};

// Figma nodes 1:612, 1:601, 1:590, 1:568, 1:579. Only card 1 has a real
// title ("Sapforce") in the file — the rest literally said "Project Title";
// filled in with placeholder names below, swap for real project names when known.
// Videos reused from the service pages, matched by tag — not real footage
// of these specific client projects. Swap in real project clips when available.
export const portfolioLarge: PortfolioItem = {
  title: "Sapforce",
  tags: ["Website", "UI/UX", "Animation"],
  image: "/images/portfolio-image-1.png",
  video: "/videos/website-that-sell.mp4",
  imageWidth: 940,
  imageHeight: 700,
};

export const portfolioMedium: PortfolioItem = {
  title: "Packsy",
  tags: ["Mobile Apps", "UI/UX", "Animation"],
  image: "/images/portfolio-image-2.png",
  video: "/videos/home-screen-app.mp4",
  imageWidth: 666,
  imageHeight: 700,
};

export const portfolioWide: PortfolioItem = {
  title: "Finovate",
  tags: ["Products", "UI/UX", "Motion Graphics"],
  image: "/images/portfolio-image-3.png",
  video: "/videos/home-website-design-video.mp4",
  imageWidth: 1632,
  imageHeight: 900,
};

export const portfolioHalves: PortfolioItem[] = [
  {
    title: "Orbitly",
    tags: ["Mobile App", "UI/UX", "Animation"],
    image: "/images/portfolio-image-4.png",
    video: "/videos/home-website-design-video.mp4",
    imageWidth: 804,
    imageHeight: 600,
  },
  {
    title: "Routely",
    tags: ["Products", "UI/UX", "Interaction"],
    image: "/images/portfolio-image-5.png",
    video: "/videos/home-screen-app.mp4",
    imageWidth: 804,
    imageHeight: 600,
  },
];
