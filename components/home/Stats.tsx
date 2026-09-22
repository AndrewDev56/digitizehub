import Image from "next/image";
import FloatingChip from "@/components/ui/FloatingChip";
import { heroChips } from "@/lib/data/heroChips";
import { stats } from "@/lib/data/stats";

export default function Stats() {
  return (
    <section className="relative isolate overflow-hidden bg-background pb-24 md:pb-32">
      <div className="relative mx-auto hidden h-[100px] w-full max-w-[1920px] lg:block mt-[40px]">
        {heroChips.map((chip, index) => (
          <FloatingChip
            key={`${chip.label}-${index}`}
            label={chip.label}
            className="absolute -translate-x-1/2"
            style={{
              left: `${chip.left}%`,
              top: `${chip.top}px`,
              transform: `translateX(-50%) rotate(${chip.rotate}deg)`,
            }}
          />
        ))}
      </div>

      <div className="mx-auto flex max-w-[1632px] flex-wrap items-center justify-center gap-3 px-6 lg:hidden">
        {heroChips.map((chip, index) => (
          <FloatingChip
            key={`${chip.label}-${index}`}
            label={chip.label}
            style={{ transform: `rotate(${chip.rotate}deg)` }}
          />
        ))}
      </div>

      <div className="mx-auto mt-16 max-w-[1632px] px-6 md:px-9 lg:mt-10">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-3 md:gap-8">
          {stats.map((stat) => (
            <div key={stat.title} className="flex flex-col items-center text-center">
              <Image
                src={stat.graphic}
                alt={stat.title}
                width={stat.graphicWidth}
                height={stat.graphicHeight}
                className="h-[100px] w-auto md:h-[140px]"
              />
              <h3 className="mt-6 font-heading text-xl font-semibold tracking-[-0.01em] text-white">
                {stat.title}
              </h3>
              <p className="mt-3 max-w-xs font-body text-base leading-[1.3] text-white/80">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}