import Image from "next/image";

type FloatingChipProps = {
  label: string;
  className?: string;
  style?: React.CSSProperties;
};

export default function FloatingChip({
  label,
  className = "",
  style,
}: FloatingChipProps) {
  return (
    <span
      data-gsap-reveal
      data-gsap-scale="0.8"
      className={`inline-flex items-center gap-[9px] rounded-full bg-white/90 px-[10px] py-[6px] font-tag text-base font-semibold tracking-[-0.02em] text-black backdrop-blur-[8px] shadow-lg transition-transform duration-300 hover:-translate-y-1 ${className}`}
      style={style}
    >
      <span className="flex size-[34px] shrink-0 items-center justify-center rounded-full bg-black">
        <Image
          src="/icons/counter-icon.png"
          alt=""
          width={16}
          height={16}
          className="size-4 object-contain brightness-0 invert"
        />
      </span>
      {label}
    </span>
  );
}