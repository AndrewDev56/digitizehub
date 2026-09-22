export type WorkPrinciple = {
  number: string;
  title: string;
  description: string;
  confirmed: boolean;
};

// Screenshot was cut off on the right — card 3's description is
// reconstructed from partial visible text, and there may be a 4th card
// beyond the crop. Confirm both once you can send a wider screenshot.
export const workPrinciples: WorkPrinciple[] = [
  {
    number: "01",
    title: "Fixed Price Promise",
    description: "Fixed quotes before work starts.",
    confirmed: true,
  },
  {
    number: "02",
    title: "One Team, End to End",
    description: "One team owns the whole chain, from design to the server it runs on.",
    confirmed: true,
  },
  {
    number: "03",
    title: "Honest Recommendations",
    description: "We say no when we can't help you, even when it costs a sale.",
    confirmed: false,
  },
];