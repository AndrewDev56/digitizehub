export type LifecycleStep = {
  title: string;
  description: string;
  confirmed: boolean;
};

// Confirmed via Figma REST API (node 101:2961) — all four descriptions are
// exact matches.
export const lifecycleSteps: LifecycleStep[] = [
  {
    title: "Design",
    description: "Ideas shaped into user-first experiences.",
    confirmed: true,
  },
  {
    title: "Build",
    description: "Reliable products built for performance.",
    confirmed: true,
  },
  {
    title: "Deploy",
    description: "Launch smoothly with zero surprises.",
    confirmed: true,
  },
  {
    title: "Rank",
    description: "Get found by the right audience.",
    confirmed: true,
  },
];  