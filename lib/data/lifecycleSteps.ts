export type LifecycleStep = {
  title: string;
  description: string;
  confirmed: boolean;
};

// Figma nodes 1:633/637/638/644/645/651/652. Titles + "Design"'s
// description are Figma-confirmed. Build/Deploy/Rank descriptions are
// transcribed from your screenshot at low resolution — re-verify exact
// wording once Figma access is back.
export const lifecycleSteps: LifecycleStep[] = [
  {
    title: "Design",
    description: "Ideas shaped into user-first experience.",
    confirmed: true,
  },
  {
    title: "Build",
    description: "Software products built for performance.",
    confirmed: false,
  },
  {
    title: "Deploy",
    description: "Launch smoothly with zero surprises.",
    confirmed: false,
  },
  {
    title: "Rank",
    description: "Get found by the right audience.",
    confirmed: false,
  },
];