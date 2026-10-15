export type WorkProject = {
  image: string;
  tags: string[];
};

const description =
  "Most agencies stop at handover. We stay on the hook for what happens after.";

export const workProjects: WorkProject[] = [
  { image: "/images/portfolio-image-1.png", tags: ["Website", "UI/UX", "Animation"] },
  { image: "/images/portfolio-image-3.png", tags: ["Mobile App", "UI/UX", "Development"] },
  { image: "/images/portfolio-image-2.png", tags: ["Website", "UI/UX", "Animation"] },
  { image: "/images/portfolio-image-4.png", tags: ["Mobile App", "UI/UX", "Development"] },
  { image: "/images/portfolio-image-3.png", tags: ["Mobile App", "UI/UX", "Development"] },
  { image: "/images/portfolio-image-1.png", tags: ["Website", "UI/UX", "Animation"] },
  { image: "/images/portfolio-image-4.png", tags: ["Mobile App", "UI/UX", "Development"] },
  { image: "/images/portfolio-image-2.png", tags: ["Website", "UI/UX", "Animation"] },
];

export { description as workProjectDescription };