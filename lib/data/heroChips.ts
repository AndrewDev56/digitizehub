export type HeroChip = {
  label: string;
  left: number;
  top: number;
  rotate: number;
};

// Confirmed via Figma REST API (node 86:1789). Left-to-right screen order.
export const heroChips: HeroChip[] = [
  { label: "Mobile Apps", left: 7.5, top: 0, rotate: -8 },
  { label: "UI/UX Design", left: 40.1, top: -1, rotate: -8 },
  { label: "Apps Development", left: 51.4, top: 0, rotate: 8 },
  { label: "Web Development", left: 69.5, top: -6, rotate: -8 },
  { label: "UI/UX Design", left: 83.5, top: 1, rotate: 8 },
];