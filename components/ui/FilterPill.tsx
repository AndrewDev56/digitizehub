export default function FilterPill({
  label,
  count,
  active = false,
}: {
  label: string;
  count: number;
  active?: boolean;
}) {
  return (
    <button
      type="button"
      className={`rounded-[30px] px-[22px] py-4 font-body text-base whitespace-nowrap shadow-[0_6px_16px_0_rgba(0,0,0,0.08)] ${
        active
          ? "font-semibold text-[#111]"
          : "font-medium text-white opacity-80"
      }`}
      style={{
        backgroundColor: active ? "#ffffff" : "rgba(255,255,255,0.08)",
        letterSpacing: active ? "-0.16px" : undefined,
      }}
    >
      {label} ({count})
    </button>
  );
}