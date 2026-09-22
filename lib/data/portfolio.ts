export type PortfolioItem = {
  title: string;
  tags: string[];
  image: string;
  /** Real Figma layer dimensions — used to derive the aspect ratio, not for next/image width/height. */
  imageWidth: number;
  imageHeight: number;
};

// Figma nodes 1:612, 1:601, 1:590, 1:568, 1:579. All static images, no video.
// Only card 1 has a real title ("Sapforce") in the file — the rest literally
// say "Project Title"; swap in real names when you have them.
export const portfolioLarge: PortfolioItem = {
  title: "Sapforce",
  tags: ["E-commerce", "Web Development"],
  image: "/images/portfolio-image-1.png",
  imageWidth: 940,
  imageHeight: 700,
};

export const portfolioMedium: PortfolioItem = {
  title: "Project Title",
  tags: ["Mobile App", "UI/UX", "Animation"],
  image: "/images/portfolio-image-2.png",
  imageWidth: 666,
  imageHeight: 700,
};

export const portfolioWide: PortfolioItem = {
  title: "Project Title",
  tags: ["Motion Graphics", "UI/UX", "Website"],
  image: "/images/portfolio-image-3.png",
  imageWidth: 1632,
  imageHeight: 900,
};

export const portfolioHalves: PortfolioItem[] = [
  {
    title: "Project Title",
    tags: ["Animation", "UI/UX", "Website"],
    image: "/images/portfolio-image-4.png",
    imageWidth: 804,
    imageHeight: 600,
  },
  {
    title: "Project Title",
    tags: ["Animation", "UI/UX", "Mobile App"],
    image: "/images/portfolio-image-5.png",
    imageWidth: 804,
    imageHeight: 600,
  },
];