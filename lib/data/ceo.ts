export type Ceo = {
  name: string;
  role: string;
  photo: string;
  bio?: string;
};

export const ceoIntro =
  "You will talk to the people doing the work. We are a 25 person team across Calgary and Atlanta, and someone replies to every inquiry within one business day.";

export const ceos: Ceo[] = [
  {
    name: "Raheel Karim",
    role: "Founder & CEO",
    photo: "/images/founder.png",
  },
  {
    name: "Raheel Karim",
    role: "Founder & CEO",
    photo: "/images/founder2.png",
    bio: "Phasellus posuere ultrices malesuada. Suspendisse nisl nisl, accumsan eu condimentum in, tempus sed quam nulla purus, finibus sit amet pulvinar ac eget lectus elit amet.",
  },
];  