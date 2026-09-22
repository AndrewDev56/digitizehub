export type Founder = {
  name: string;
  role: string;
  photo: string;
  bio: string;
};

// Confirmed via Figma REST API (node 60:1788) — both cards literally say
// "Raheel Karim" with lorem ipsum bios in the file itself.
export const founders: Founder[] = [
  {
    name: "Raheel Karim",
    role: "Founder & CEO",
    photo: "/images/founder.png",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer convallis, metus ac euismod tincidunt, ante nulla mattis est, ac fermentum ipsum nisl non nulla.",
  },
  {
    name: "Raheel Karim",
    role: "Founder & CEO",
    photo: "/images/founder2.png",
    bio: "Phasellus posuere ultrices malesuada. Suspendisse nisl nisl, accumsan eu condimentum in, tempus sed quam nulla purus, finibus sit amet pulvinar ac eget lectus elit amet.",
  },
];