export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  image: string; // path under /public, e.g. "/blog/social-media.jpg"
}

export const blogPosts: BlogPost[] = [
  {
    slug: "what-businesses-should-know",
    title: "What Businesses Should Know",
    excerpt:
      "Social media in 2026 is not about posting more. It is about posting with more purpose. Businesses are competing with creators, AI-generated…",
    date: "May 20, 2026",
    tags: ["Mobile App", "UI/UX", "Development"],
    image: "/blog/what-businesses-should-know.jpg",
  },
  {
    slug: "how-to-turn-visitors-into-leads",
    title: "How To Turn Visitors Into Leads",
    excerpt:
      "A beautiful website is not always a successful website. Many businesses spend money on modern design, animations, images, and stylish sections,…",
    date: "May 20, 2026",
    tags: ["Mobile App", "UI/UX", "Development"],
    image: "/blog/how-to-turn-visitors-into-leads.jpg",
  },
  {
    slug: "how-businesses-can-get-found-in-2026",
    title: "How Businesses Can Get Found In 2026",
    excerpt:
      "Search is changing fast. People are no longer only typing short keywords into Google and clicking through a list of websites…",
    date: "May 20, 2026",
    tags: ["Mobile App", "UI/UX", "Development"],
    image: "/blog/how-businesses-can-get-found-in-2026.jpg",
  },
];