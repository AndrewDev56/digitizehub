export type PortfolioItem = {
  title: string;
  tags: string[];
  mockupTags?: string[];
  image: string;
  video: string;
  imageWidth: number;
  imageHeight: number;
};

export const portfolioLarge: PortfolioItem = {
  title: "Sapforce",
  tags: ["Website", "UI/UX", "Animation"],
  image: "/images/portfolio-image-1.png",
  video: "/videos/home-video.mp4",
  imageWidth: 940,
  imageHeight: 700,
};

export const portfolioMedium: PortfolioItem = {
  title: "Packsy",
  tags: ["Mobile Apps", "UI/UX", "Animation"],
  image: "/images/portfolio-image-2.png",
  video: "/videos/home-videyddj.mp4",
  imageWidth: 666,
  imageHeight: 700,
};

export const portfolioWide: PortfolioItem = {
  title: "Finovate",
  tags: ["Products", "UI/UX", "Motion Graphics"],
  image: "/images/portfolio-image-3.png",
  video: "/videos/home-screen-apprrrr.mp4",
  imageWidth: 1632,
  imageHeight: 900,
};

export const portfolioHalves: PortfolioItem[] = [
  {
    title: "Orbitly",
    tags: ["Mobile App", "UI/UX", "Animation"],
    image: "/images/portfolio-image-4.png",
    video: "/videos/home-screen-app.mp4",
    imageWidth: 804,
    imageHeight: 600,
  },
  {
    title: "Routely",
    tags: ["Products", "UI/UX", "Interaction"],
    image: "/images/portfolio-image-5.png",
    video: "/videos/home-screen-apprrrggg.mp4",
    imageWidth: 804,
    imageHeight: 600,
  },
];
