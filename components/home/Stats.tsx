"use client";

import { useState } from "react";
import FloatingChip from "@/components/ui/FloatingChip";
import { heroChips } from "@/lib/data/heroChips";
import { stats } from "@/lib/data/stats";
import StaggerContainer, { StaggerItem } from "@/components/animation/StaggerContainer";
import AnimatedCounter from "@/components/animation/AnimatedCounter";

export default function Stats() {
  const [hoveredCol, setHoveredCol] = useState<number | null>(null);

  // Helper to determine column index for each chip
  const getChipCol = (index: number) => {
    if (index === 0) return 0;
    if (index === 1 || index === 2) return 1;
    return 2;
  };

  // Helper to compute dynamic transform for desktop chips
  const getChipTransform = (index: number, baseRotate: number) => {
    const colIndex = getChipCol(index);
    const isHovered = hoveredCol === colIndex;

    if (!isHovered) {
      return `translateX(-50%) rotate(${baseRotate}deg)`;
    }

    // Chip 0 (single tag above column 1)
    if (index === 0) {
      return `translateX(-50%) translateY(-6px) rotate(-1deg) scale(1.06)`;
    }

    // Left chips in 2-chip pairs (move right + rotate closer)
    if (index === 1 || index === 3) {
      return `translateX(calc(-50% + 26px)) translateY(-4px) rotate(-1deg) scale(1.06)`;
    }

    // Right chips in 2-chip pairs (move left + rotate closer)
    return `translateX(calc(-50% - 26px)) translateY(-4px) rotate(1deg) scale(1.06)`;
  };

  return (
    <section id="stats-section" className="relative isolate pb-24 md:pb-32">

      {/* Desktop Hero Chips Bar */}
      <div className="relative mx-auto translate-x-28 hidden h-[100px] w-full max-w-[1920px] lg:block mt-[40px]">
        {heroChips.map((chip, index) => {
          const colIndex = getChipCol(index);
          const isHovered = hoveredCol === colIndex;
          return (
            <div
              key={`${chip.label}-${index}`}
              onMouseEnter={() => setHoveredCol(colIndex)}
              onMouseLeave={() => setHoveredCol(null)}
              className="absolute cursor-pointer transition-all duration-500 ease-out"
              style={{
                left: `${chip.left}%`,
                top: `${chip.top}px`,
                transform: getChipTransform(index, chip.rotate),
                zIndex: isHovered ? 30 : 10,
              }}
            >
              <FloatingChip label={chip.label} />
            </div>
          );
        })}
      </div>

      {/* Mobile Chips List */}
      <div className="mx-auto flex max-w-[1632px] flex-wrap items-center justify-center gap-3 px-6 lg:hidden">
        {heroChips.map((chip, index) => {
          const colIndex = getChipCol(index);
          const isHovered = hoveredCol === colIndex;
          const rotate = isHovered ? chip.rotate / 3 : chip.rotate;
          return (
            <div
              key={`${chip.label}-${index}`}
              onMouseEnter={() => setHoveredCol(colIndex)}
              onMouseLeave={() => setHoveredCol(null)}
              className="transition-transform duration-300"
              style={{
                transform: `rotate(${rotate}deg) ${isHovered ? "scale(1.05)" : "scale(1)"}`,
              }}
            >
              <FloatingChip label={chip.label} />
            </div>
          );
        })}
      </div>

      {/* Stats Counter Columns */}
      <div className="mx-auto mt-16 max-w-[1632px] px-6 md:px-9 lg:mt-10">
        <StaggerContainer staggerChildren={0.2} className="grid grid-cols-1 gap-16 md:grid-cols-3 md:gap-8">
          {stats.map((stat, index) => {
            const isHovered = hoveredCol === index;
            return (
              <StaggerItem
                key={stat.title}
                className="group flex flex-col items-center text-center cursor-pointer"
              >
                <div
                  onMouseEnter={() => setHoveredCol(index)}
                  onMouseLeave={() => setHoveredCol(null)}
                  className="w-full flex flex-col items-center"
                >
                  <div className="flex h-[100px] items-center justify-center md:h-[140px]">
                    <AnimatedCounter
                      value={stat.value}
                      className={`font-heading text-7xl font-bold tracking-[-0.03em] transition-colors duration-300 md:text-8xl lg:text-[130px] leading-none select-none ${
                        isHovered ? "text-white" : "text-[#9A9A9A]"
                      }`}
                    />
                  </div>
                  <h3
                    className={`mt-6 font-heading text-xl font-semibold tracking-[-0.01em] transition-colors duration-300 ${
                      isHovered ? "text-white" : "text-white"
                    }`}
                  >
                    {stat.title}
                  </h3>
                  <p className="mt-3 max-w-xs font-body text-base leading-[1.3] text-white/80">
                    {stat.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}