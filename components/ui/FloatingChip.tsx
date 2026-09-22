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
    <div
      className={`inline-flex items-center gap-[10px] rounded-full bg-white/86 py-[10px] pr-[24px] pl-[10px] backdrop-blur-[5px] ${className}`}
      style={style}
    >
      <span className="flex size-[36px] shrink-0 items-center justify-center rounded-full bg-[#111111]">
        <Image
          src="/icons/Arrow_Right.png"
          alt=""
          width={18}
          height={18}
          className="h-[50%] w-[50%]"
        />
      </span>
      <span className="whitespace-nowrap font-tag text-[16px] font-semibold tracking-[-0.02em] text-black">
        {label}
      </span>
    </div>
  );
}