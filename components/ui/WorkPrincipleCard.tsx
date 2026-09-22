import type { WorkPrinciple } from "@/lib/data/howWeWork";

export default function WorkPrincipleCard({
  principle,
}: {
  principle: WorkPrinciple;
}) {
  return (
    <div className="relative flex h-[160px] flex-col justify-between overflow-hidden rounded-2xl bg-white/5 p-6">
      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-4 right-3 font-heading text-7xl font-semibold text-white/5 select-none md:text-8xl"
      >
        {principle.number}
      </span>

      <div className="relative">
        <h3 className="font-heading text-lg font-medium text-white md:text-xl">
          {principle.title}
        </h3>
        <p className="mt-2 max-w-[220px] font-body text-sm text-white/50">
          {principle.description}
        </p>
      </div>
    </div>
  );
}