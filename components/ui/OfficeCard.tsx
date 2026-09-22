import Image from "next/image";
import type { Office } from "@/lib/data/offices";

/**
 * Confirmed via Figma REST API (node 62:1794): rgba(255,255,255,0.05) fill,
 * rgba(255,255,255,0.08) border, 60x60px rounded-square icon badges,
 * red (#ff0036) "View on map" link bottom-right.
 */
export default function OfficeCard({ office }: { office: Office }) {
  return (
    <div className="rounded-[24px] border border-white/[0.08] bg-white/5 p-6 md:rounded-[40px] md:p-10">
      <h3 className="font-heading text-2xl font-semibold text-white md:text-4xl">
        {office.city}
      </h3>

      <div aria-hidden className="mt-6 h-px w-full bg-white/10 md:mt-8" />

      <div className="mt-6 flex items-center gap-4 md:mt-8">
        <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white/[0.06] md:size-[60px]">
          <Image src="/icons/telephone.png" alt="" width={20} height={20} className="size-[24px]" />
        </span>
        <span className="font-body text-base font-light text-white md:text-2xl">
          {office.phone}
        </span>
      </div>

      <div aria-hidden className="mt-6 h-px w-full bg-white/10 md:mt-8" />

      <div className="mt-6 flex items-center gap-4 md:mt-8">
        <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white/[0.06] md:size-[60px]">
          <Image src="/icons/message.png" alt="" width={20} height={20} className="size-[24px]" />
        </span>
        <span className="font-body text-sm leading-[1.4] font-light text-white md:text-2xl">
          {office.address}
        </span>
      </div>

      <div aria-hidden className="mt-6 h-px w-full bg-white/10 md:mt-8" />

      
     <a   href={office.mapUrl}
        target="_blank"
        rel="noreferrer"
        className="mt-6 flex items-center justify-end gap-2 font-body text-sm font-medium text-[#ff0036] md:mt-8 md:text-lg"
      >
        View on map
        <Image src="/icons/Arrow_Right_red.png" alt="" width={18} height={18} className="size-[18px]" />
      </a>
    </div>
  );
}