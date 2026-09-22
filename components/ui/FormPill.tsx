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
      className={`rounded-[30px] border-[0.5px] px-[30px] py-4 font-body text-lg whitespace-nowrap ${
        selected
          ? "border-white bg-white text-[#111]"
          : "border-white/40 bg-white/[0.04] text-white"
      }`}
    >
      {label}
    </button>
  );
}