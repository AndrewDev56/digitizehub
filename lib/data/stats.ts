export type Stat = {
  value: string;
  tags: string[];
  graphic?: string;
  graphicWidth?: number;
  graphicHeight?: number;
  title: string;
  description: string;
};

// Confirmed via Figma REST API (node 86:1789)
export const stats: Stat[] = [
  {
    value: "200+",
    tags: ["Mobile Apps"],
    graphic: "/images/two-hundred.png",
    graphicWidth: 432,
    graphicHeight: 140,
    title: "Successful Projects Delivered",
    description:
      "From startups to enterprise brands, we've crafted digital experiences that deliver measurable results.",
  },
  {
    value: "06+",
    tags: ["UI/UX Design", "Apps Development"],
    graphic: "/images/years.png",
    graphicWidth: 317,
    graphicHeight: 140,
    title: "Years of Design Excellence",
    description:
      "Six years of creating intuitive, high-converting websites and digital products.",
  },
  {
    value: "99%",
    tags: ["Web Development", "UI/UX Design"],
    graphic: "/images/client-success.png",
    graphicWidth: 362,
    graphicHeight: 140,
    title: "Client Satisfaction Rate",
    description:
      "Long-term partnerships built on trust, quality, and exceptional user experiences.",
  },
];