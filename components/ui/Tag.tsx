export default function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex shrink-0 items-center justify-center rounded-[30px] bg-white/8 px-4 py-[9px] font-tag text-sm tracking-[-0.01em] whitespace-nowrap text-white md:px-6 md:py-[11px] md:text-[18px]">
      {children}
    </span>
  );
}