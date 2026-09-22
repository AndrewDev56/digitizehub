export type Stat = {
  graphic: string;
  graphicWidth: number;
  graphicHeight: number;
  title: string;
  description: string;
};

// Confirmed via Figma REST API (node 86:1789): the numbers are exported
// graphic assets, not live text — export URLs below (valid ~7 days).
export const stats: Stat[] = [
  {
    graphic: "/images/two-hundred.png",
    graphicWidth: 432,
    graphicHeight: 140,
    title: "Successful Projects Delivered",
    description:
      "From startups to enterprise brands, we've crafted digital experiences that deliver measurable results.",
  },
  {
    graphic: "/images/years.png",
    graphicWidth: 317,
    graphicHeight: 140,
    title: "Years of Design Excellence",
    description:
      "Six years of creating intuitive, high-converting websites and digital products.",
  },
  {
    graphic: "/images/client-success.png",
    graphicWidth: 362,
    graphicHeight: 140,
    title: "Client Satisfaction Rate",
    description:
      "Long-term partnerships built on trust, quality, and exceptional user experiences.",
  },
];