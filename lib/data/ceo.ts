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
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer convallis, metus ac eleifend tincidunt, ante nulla mattis est, ac fermentum ipsum nisi non odio.",
  },
  {
    name: "Tajdin Modi",
    role: "Founder & CEO",
    photo: "/images/founder2.png",
    bio: "Phasellus posuere elit nec metus venenatis. Suspendisse nisi nisi, accumsan eu condimentum in, scelerisque quam nulla purus. Tristique elit amet pulvinar ac eget tellus elit amet.",
  },
];  