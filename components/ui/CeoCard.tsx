import Image from "next/image";
import type { Ceo } from "@/lib/data/ceo";

export default function CeoCard({ ceo }: { ceo: Ceo }) {
  return (
    <div className="relative min-h-[380px] sm:min-h-[420px] md:min-h-[460px] overflow-hidden rounded-[28px] sm:rounded-[36px] md:rounded-[40px] bg-gradient-to-br from-[#ffeef0] via-[#ffd7df] to-[#f7b3c2] p-8 sm:p-10 md:p-11 shadow-2xl flex flex-col justify-between">
      {/* Ambient soft glow overlays */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 top-1/3 size-[300px] rounded-full bg-rose-300/40 blur-[80px]"
      />

      {/* Founder Photo positioned on right side */}
      <div className="absolute right-0 bottom-0 h-[82%] sm:h-[85%] md:h-[88%] w-[60%] sm:w-[58%] md:w-[68%] pointer-events-none select-none">
        <Image
          src={ceo.photo}
          alt={ceo.name}
          fill
          priority
          className="object-contain object-bottom object-right"
          sizes="(min-width: 1024px) 450px, (min-width: 768px) 400px, 55vw"
        />
      </div>

      {/* Card Content (Left Column) */}
      <div className="relative z-10 flex flex-col max-w-[55%] sm:max-w-[52%]">
        <h3 className="font-heading text-2xl sm:text-3xl md:text-[34px] font-semibold tracking-tight text-[#111] leading-tight">
          {ceo.name}
        </h3>
        <p className="mt-1 font-body text-xs sm:text-sm font-medium text-[#111]/70">
          {ceo.role}
        </p>

        {ceo.bio && (
          <p className="mt-8 sm:mt-10 font-body text-xs sm:text-[13px] font-normal leading-relaxed text-[#111]/80">
            {ceo.bio}
          </p>
        )}
      </div>

      {/* LinkedIn Action Button */}
      <div className="relative z-10 mt-8 sm:mt-10">
        <a
          href="#"
          aria-label={`${ceo.name} on LinkedIn`}
          className="flex size-11 sm:size-12 md:size-14 items-center justify-center rounded-full bg-white shadow-lg transition-transform duration-300 hover:scale-110 active:scale-95"
        >
          <Image
            src="/icons/linkedin.png"
            alt=""
            width={20}
            height={20}
            className="size-5 sm:size-6"
          />
        </a>
      </div>
    </div>
  );
}