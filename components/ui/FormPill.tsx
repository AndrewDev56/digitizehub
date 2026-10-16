export default function FormPill({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-[30px] border-[0.5px] px-4 py-2.5 font-body text-sm whitespace-nowrap sm:px-[30px] sm:py-4 sm:text-lg ${
        selected
          ? "border-white bg-white text-[#111]"
          : "border-white/40 bg-white/[0.04] text-white"
      }`}
    >
      {label}
    </button>
  );
}