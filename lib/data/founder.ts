export type Founder = {
  name: string;
  role: string;
  photo: string;
  bio?: string;
};

export const founderIntro =
  "You will talk to the people doing the work. We are a 25 person team across Calgary and Atlanta, and someone replies to every inquiry within one business day.";

// Second slide's bio is a placeholder — swap in the real copy when available.
export const founders: Founder[] = [
  {
    name: "Raheel Karim",
    role: "Founder & CEO",
    photo: "/images/founder.png",
  },
  {
    name: "Raheel Karim",
    role: "Founder & CEO",
    photo: "/images/founder2.png",
    bio: "Fifteen years in digital product and growth, building teams that ship fast without losing the craft.",
  },
];
