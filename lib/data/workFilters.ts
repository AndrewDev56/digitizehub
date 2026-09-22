export type FilterPillData = {
  label: string;
  count: number;
  active?: boolean;
};

export const industryFilters: FilterPillData[] = [
  { label: "All Industries", count: 71 },
  { label: "Website", count: 15 },
  { label: "SaaS", count: 9 },
  { label: "AI", count: 6 },
  { label: "Other", count: 13 },
];

export const serviceFilters: FilterPillData[] = [
  { label: "All Services", count: 19 },
  { label: "Web 3.0", count: 11 },
  { label: "SaaS", count: 9 },
  { label: "UI/UX", count: 27, active: true },
  { label: "Animation", count: 9 },
  { label: "Fintech", count: 7 },
  { label: "Redesign", count: 10 },
  { label: "Branding", count: 39 },
  { label: "UI/UX", count: 39 },
  { label: "Web Development", count: 13 },
  { label: "Mobile App", count: 21 },
];