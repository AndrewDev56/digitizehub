export interface TeamMember {
  id: string;
  type: "member";
  name: string;
  role: string;
  image: string;
  bgColor?: string;
}

export interface EmptySlot {
  id: string;
  type: "empty";
  span?: "single" | "wide";
}

export type GridItem = TeamMember | EmptySlot;


export const teamRow1: GridItem[] = [
  { id: "e1-1", type: "empty", span: "single" },
  {
    id: "m1-1",
    type: "member",
    name: "Elena Rostova",
    role: "Head of Product Design",
    image: "/images/row-1-1.png",
    bgColor: "bg-[#e8f0fe]",
  },
  { id: "e1-2", type: "empty", span: "single" },
  {
    id: "m1-2",
    type: "member",
    name: "Sarah Jenkins",
    role: "Creative Director",
    image: "/images/row-1-2.png",
    bgColor: "bg-[#c026d3]",
  },
  { id: "e1-3", type: "empty", span: "single" },
  {
    id: "m1-3",
    type: "member",
    name: "Devon Vance",
    role: "Senior AI Engineer",
    image: "/images/row-1-3.png",
    bgColor: "bg-[#38bdf8]",
  },
  { id: "e1-4", type: "empty", span: "single" },
  { id: "e1-5", type: "empty", span: "single" },
  {
    id: "m1-4",
    type: "member",
    name: "Chloe Dupont",
    role: "UI/UX Specialist",
    image: "/images/row-1-4.png",
    bgColor: "bg-[#0284c7]",
  },
  { id: "e1-6", type: "empty", span: "single" },
];

export const teamRow2: GridItem[] = [
  {
    id: "m2-0",
    type: "member",
    name: "Marcus Thorne",
    role: "Tech Lead & Architect",
    image: "/images/row-2-1.png",
    bgColor: "bg-[#1e293b]",
  },
  {
    id: "m2-1",
    type: "member",
    name: "Nadia Lin",
    role: "Design System Lead",
    image: "/images/row-2-2.png",
    bgColor: "bg-[#0d9488]",
  },
  { id: "e2-1", type: "empty", span: "single" },
  {
    id: "m2-2",
    type: "member",
    name: "Amara Okonjo",
    role: "UX Researcher",
    image: "/images/row-2-3.png",
    bgColor: "bg-[#f472b6]",
  },
  { id: "e2-2", type: "empty", span: "wide" },
  {
    id: "m2-3",
    type: "member",
    name: "Lucas Meyer",
    role: "Full-Stack Engineer",
    image: "/images/row-2-4.png",
    bgColor: "bg-[#334155]",
  },
  { id: "e2-3", type: "empty", span: "single" },
  {
    id: "m2-4",
    type: "member",
    name: "Victoria Hayes",
    role: "Brand Strategist",
    image: "/images/row-2-5.png",
    bgColor: "bg-[#18181b]",
  },
  { id: "e2-4", type: "empty", span: "single" },
];

export const teamRow3: GridItem[] = [
  { id: "e3-1", type: "empty", span: "single" },
  {
    id: "m3-1",
    type: "member",
    name: "Alexei Petrov",
    role: "Chief Technology Officer",
    image: "/images/row-3-1.png",
    bgColor: "bg-[#374151]",
  },
  {
    id: "m3-2",
    type: "member",
    name: "Khadija Nour",
    role: "Motion & 3D Designer",
    image: "/images/row-3-2.png",
    bgColor: "bg-[#eab308]",
  },
  { id: "e3-2", type: "empty", span: "single" },
  {
    id: "m3-3",
    type: "member",
    name: "Julian Rivera",
    role: "Mobile App Architect",
    image: "/images/row-3-3.png",
    bgColor: "bg-[#3b82f6]",
  },
  { id: "e3-3", type: "empty", span: "single" },
  {
    id: "m3-4",
    type: "member",
    name: "Sofia Lindqvist",
    role: "Product Manager",
    image: "/images/row-3-4.png",
    bgColor: "bg-[#f59e0b]",
  },
  { id: "e3-4", type: "empty", span: "wide" },
  { id: "e3-5", type: "empty", span: "single" },
];

export const teamRow4: GridItem[] = [
  {
    id: "m4-1",
    type: "member",
    name: "Liam O'Connor",
    role: "DevOps & Cloud Lead",
    image: "/images/row-4-1.png",
    bgColor: "bg-[#f87171]",
  },
  {
    id: "m4-2",
    type: "member",
    name: "Diana Zhang",
    role: "Principal Frontend Architect",
    image: "/images/row-4-2.png",
    bgColor: "bg-[#1e1b4b]",
  },
  { id: "e4-1", type: "empty", span: "wide" },
  { id: "e4-2", type: "empty", span: "single" },
  {
    id: "m4-3",
    type: "member",
    name: "Arthur Pendelton",
    role: "Backend & Security Engineer",
    image: "/images/row-4-3.png",
    bgColor: "bg-[#09090b]",
  },
  { id: "e4-4", type: "empty", span: "single" },
  {
    id: "m4-4",
    type: "member",
    name: "Zoe Washington",
    role: "Growth & Analytics Lead",
    image: "/images/row-4-4.png",
    bgColor: "bg-[#fda4af]",
  },
  { id: "e4-5", type: "empty", span: "single" },
];

