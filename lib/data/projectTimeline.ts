export type TimelineStep = {
  number: string;
  title: string;
  duration: string;
};

// Transcribed directly from your Figma screenshot — titles and durations
// confirmed, exact icon asset still pending (using a shared rocket icon
// placeholder, same icon repeats across all 6 in the screenshot).
export const timelineSteps: TimelineStep[] = [
  { number: "01", title: "Research", duration: "about 1 week" },
  { number: "02", title: "Strategy and Structure", duration: "3 to 5 days" },
  { number: "03", title: "Content and Design", duration: "1 to 2 weeks" },
  { number: "04", title: "Development", duration: "2 to 4 weeks" },
  { number: "05", title: "Testing and Go Live", duration: "3 to 5 days" },
  { number: "06", title: "Maintenance", duration: "ongoing, optional" },
];