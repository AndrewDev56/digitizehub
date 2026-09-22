import Image from "next/image";
import type { Founder } from "@/lib/data/founders";

/**
 * Confirmed via Figma REST API (node 60:1788): white card, black text,
 * soft pink glow blobs bleeding in from the edges (recreated as CSS blur
 * rather than the exact ellipse SVGs), photo absolutely positioned
 * bottom-right and bleeding past the card edge, clipped by overflow-hidden.
 */
export default function FounderCard({ founder }: { founder: Founder }) {
  return (
    <div className="relative aspect-[786/716] w-full overflow-hidden rounded-[32px] bg-white md:rounded-[40px]">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-1/4 -right-1/4 size-2/3 rounded-full bg-[#ff5277]/25 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-[10%] -left-[13%] size-1/4 rounded-full bg-[#ff5277]/20 blur-2xl"
      />

      <div className="absolute top-[6%] left-[6%] z-10 max-w-[42%]">
        <h3 className="font-heading text-xl font-semibold tracking-[-0.02em] text-[#111] md:text-3xl">
          {founder.name}
        </h3>
        <p className="mt-1 font-body text-sm font-light text-[#111] md:text-lg">
          {founder.role}
        </p>
        <p className="mt-6 font-body text-xs leading-[1.4] font-medium text-[#111] md:text-base">
          {founder.bio}
        </p>
      </div>

      <div className="absolute right-[-10%] bottom-0 h-[100%] w-[73%]">
        <Image
          src={founder.photo}
          alt={founder.name}
          fill
          sizes="(min-width: 768px) 786px, 100vw"
          className="object-cover object-bottom"
        />
      </div>

      
     <a   href="#"
        aria-label="LinkedIn"
        className="absolute bottom-[7%] left-[6%] z-10 flex size-10 items-center justify-center rounded-full bg-[#ff9fb6] md:size-[80px]"
      >
        <Image
          src="/icons/linkedin.png"
          alt=""
          width={80}
          height={80}
           className="size-[80px]"
        />
      </a>
    </div>
  );
}