"use client";

import Image from "next/image";
import {
  teamRow1,
  teamRow2,
  teamRow3,
  teamRow4,
  GridItem,
} from "@/lib/data/teamGrid";
import FadeIn from "@/components/animation/FadeIn";

function CardItem({ item, index }: { item: GridItem; index: number }) {
  if (item.type === "empty") {
    const isWide = item.span === "wide";
    return (
      <div
        aria-hidden="true"
        className={`shrink-0 rounded-[20px] border border-white/[0.08] bg-white/[0.04] backdrop-blur-md transition-colors duration-300 hover:border-white/15 ${
          isWide
            ? "h-[130px] w-[270px] sm:h-[145px] sm:w-[305px] md:h-[160px] md:w-[340px]"
            : "size-[130px] sm:size-[145px] md:size-[160px]"
        }`}
      />
    );
  }

  return (
    <div
      tabIndex={0}
      role="group"
      aria-label={`${item.name}, ${item.role}`}
      className={`group relative size-[130px] shrink-0 cursor-pointer overflow-hidden rounded-[20px] border border-white/[0.08] ${item.bgColor || "bg-[#18181b]"} shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-300 hover:z-20 hover:scale-[1.04] hover:border-white/30 hover:shadow-[0_20px_40px_rgba(255,0,54,0.18)] focus:outline-none focus:ring-2 focus:ring-accent-from sm:size-[145px] md:size-[160px]`}
    >
      <Image
        src={item.image}
        alt={item.name}
        fill
        sizes="(max-width: 640px) 130px, (max-width: 768px) 145px, 160px"
        className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
      />

      {/* Hover Info Overlay */}
      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/40 to-transparent p-3 opacity-0 backdrop-blur-[2px] transition-all duration-300 group-hover:opacity-100 sm:p-3.5">
        <p className="font-heading text-xs font-semibold leading-tight text-white sm:text-sm">
          {item.name}
        </p>
        <p className="mt-0.5 font-body text-[10px] font-medium leading-tight text-accent-from sm:text-xs">
          {item.role}
        </p>
      </div>
    </div>
  );
}


function SlidingRow({
  items,
  animationClass,
}: {
  items: GridItem[];
  animationClass: string;
}) {
  // Repeat items multiple times so the infinite scroll animation seamlessly tiles without gaps
  const quadItems = [...items, ...items, ...items, ...items];

  return (
    <div className="relative flex w-full overflow-hidden">
      <div
        className={`flex w-max gap-3.5 sm:gap-4 md:gap-5 pause-on-hover ${animationClass}`}
      >
        {quadItems.map((item, idx) => (
          <CardItem key={`${item.id}-${idx}`} item={item} index={idx} />
        ))}
      </div>
    </div>
  );
}

export default function TeamShowcase() {
  return (
    <section className="relative isolate overflow-visible bg-background py-24 md:py-32">

      {/* Shaded Ellipse Center Image */}
      <div
        aria-hidden="true"
        data-gsap-ambient
        data-gsap-scale="1.1"
        data-gsap-opacity="0.9"
        data-gsap-duration="10"
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[850px] md:w-[1150px] lg:w-[1400px] select-none opacity-80"
      >
        <Image
          src="/images/ellipse-center.png"
          alt=""
          width={1400}
          height={1400}
          priority
          className="h-auto w-full object-contain pointer-events-none"
        />
      </div>


      {/* Section Header */}
      {/* <div className="relative z-10 mx-auto mb-14 max-w-[1450px] px-6 text-center md:mb-20 md:px-9">
        <FadeIn direction="up">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 backdrop-blur-md">
            <span className="size-1.5 rounded-full bg-accent-to animate-pulse" />
            <span className="font-tag text-xs font-medium tracking-wider text-white/80 uppercase">
              The Collective
            </span>
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={0.1}>
          <h2 className="mt-5 font-heading text-4xl font-semibold tracking-[-0.02em] text-white md:text-6xl">
            The Minds Behind the{" "}
            <span className="font-accent italic text-accent-from">Craft</span>
          </h2>
        </FadeIn>

        <FadeIn direction="up" delay={0.2}>
          <p className="mx-auto mt-4 max-w-2xl font-body text-base text-white/60 md:text-lg">
            A multidisciplinary collective of visionary designers, architects, and engineers dedicated to crafting world-class digital products.
          </p>
        </FadeIn>
      </div> */}

      {/* Sliding Rows Grid with Edge Gradient Mask */}
      <div
        className="relative flex flex-col gap-3.5 sm:gap-4 md:gap-5"
        style={{
          maskImage:
            "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.85) 6%, #000 12%, #000 88%, rgba(0,0,0,0.85) 94%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.85) 6%, #000 12%, #000 88%, rgba(0,0,0,0.85) 94%, transparent 100%)",
        }}
      >
        {/* Row 1: Sliding to the RIGHT */}
        <SlidingRow items={teamRow1} animationClass="animate-slide-right-slow" />

        {/* Row 2: Sliding to the LEFT */}
        <SlidingRow items={teamRow2} animationClass="animate-slide-left-slow" />

        {/* Row 3: Sliding to the RIGHT */}
        <SlidingRow items={teamRow3} animationClass="animate-slide-right-mid" />

        {/* Row 4: Sliding to the LEFT */}
        <SlidingRow items={teamRow4} animationClass="animate-slide-left-mid" />
      </div>
    </section>
  );
}
