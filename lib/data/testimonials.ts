export type Testimonial = {
  initials: string;
  avatarColor: string;
  name: string;
  role: string;
  quote: string;
  rating: string;
  source: string;
};

// Only card 1 (Sarah Chen) is fully legible in the screenshot — everything
// else is still placeholder pending more screenshots from you.
export const testimonials: Testimonial[] = [
  {
    initials: "SC",
    avatarColor: "#d9d4e3",
    name: "Sarah Chen",
    role: "CEO, TechFlow Singapore",
    quote:
      "Working with Digitize Hub gave our brand the professional online presence it was missing. Their team created a polished website that reflected our identity and made our menu and story easier to explore.",
    rating: "5.0",
    source: "Clutch",
  },
  {
    initials: "JT",
    avatarColor: "#8b5cf6",
    name: "Jason Torres",
    role: "CEO, PayShield USA",
    quote: "“Working with Digitize Hub gave our brand the professional online presence it was missing. Their team created a polished website that reflected our identity and made our menu and story easier to explore.”",
    rating: "5.0",
    source: "Clutch",
  },
  {
    initials: "MO",
    avatarColor: "#8b5cf6",
    name: "Michael Osei",
    role: "COO, Placeholder Group",
    quote:
      "The team communicated clearly at every step and delivered exactly on time.",
    rating: "5.0",
    source: "Clutch",
  },
];