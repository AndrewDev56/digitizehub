export type PortfolioCategory =
  | "website-design"
  | "mobile-app"
  | "branding"
  | "logo"
  | "creatives"
  | "animation";

export type PortfolioGalleryItem = {
  id: string;
  category: PortfolioCategory;
  src: string;
  type: "image" | "video";
  alt: string;
};

export const portfolioCategories: {
  id: "all" | PortfolioCategory;
  label: string;
}[] = [
  { id: "all", label: "All" },
  { id: "website-design", label: "Website Design" },
  { id: "mobile-app", label: "Mobile App" },
  { id: "branding", label: "Branding" },
  { id: "logo", label: "Logo" },
  { id: "creatives", label: "Creatives" },
  { id: "animation", label: "Animation" },
];

const numbered = (
  category: PortfolioCategory,
  folder: string,
  files: string[],
  alt: string,
): PortfolioGalleryItem[] =>
  files.map((file, index) => ({
    id: `${category}-${index + 1}`,
    category,
    src: `/portfolio/${folder}/${file}`,
    type: file.endsWith(".mp4") ? "video" : "image",
    alt: `${alt} ${index + 1}`,
  }));

export const portfolioGallery: PortfolioGalleryItem[] = [
  ...numbered(
    "creatives",
    "creatives",
    [
      "01.png",
      "02.png",
      "03.png",
      "04.png",
      "05.png",
      "06.png",
      "07.png",
      "08.png",
      "09.png",
      "10.png",
      "11.png",
    ],
    "Social creative",
  ),
  ...numbered(
    "website-design",
    "website-design",
    [
      "01.jpg",
      "02.jpg",
      "03.jpg",
      "04.jpg",
      "05.jpg",
      "06.jpg",
      "07.jpg",
      "08.jpg",
    ],
    "Website design",
  ),
  ...numbered(
    "mobile-app",
    "mobile-app",
    [
      "01.png",
      "02.png",
      "03.png",
      "04.webp",
      "05.png",
      "06.png",
      "07.png",
      "08.webp",
      "09.webp",
      "10.webp",
      "11.png",
      "12.webp",
      "13.webp",
      "14.webp",
    ],
    "Mobile app design",
  ),
  ...numbered(
    "branding",
    "branding",
    [
      "01.png",
      "02.png",
      "03.png",
      "04.png",
      "05.png",
      "06.png",
      "07.png",
      "08.png",
      "09.png",
      "10.png",
      "11.png",
      "12.png",
      "13.png",
    ],
    "Brand identity",
  ),
  ...numbered(
    "logo",
    "logos",
    [
      "01.webp",
      "02.webp",
      "03.webp",
      "04.webp",
      "05.webp",
      "06.webp",
      "07.webp",
      "08.webp",
      "09.webp",
      "10.webp",
      "11.webp",
      "12.webp",
      "13.webp",
    ],
    "Logo design",
  ),
  ...numbered(
    "animation",
    "animation",
    [
      "animation-2.mp4",
      "animation-3.mp4",
      "animation-4.mp4",
      "animation-5.mp4",
      "animation-6.mp4",
      "animation-7.mp4",
      "animation-8.mp4",
      "animation-9.mp4",
    ],
    "Motion design",
  ),
];

export const portfolioCategoryCounts: Record<string, number> = {
  all: portfolioGallery.length,
  ...Object.fromEntries(
    portfolioCategories
      .filter((category) => category.id !== "all")
      .map((category) => [
        category.id,
        portfolioGallery.filter((item) => item.category === category.id).length,
      ]),
  ),
};
