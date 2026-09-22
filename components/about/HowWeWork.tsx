"use client";

import { useRef } from "react";
import WorkPrincipleCard from "@/components/ui/WorkPrincipleCard";
import { workPrinciples } from "@/lib/data/howWeWork";

export default function HowWeWork() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeftStart = useRef(0);

  const onPointerDown = (e: React.PointerEvent) => {
    const el = scrollerRef.current;
    if (!el) return;
    isDragging.current = true;
    startX.current = e.clientX;
    scrollLeftStart.current = el.scrollLeft;
    el.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    const el = scrollerRef.current;
    if (!el || !isDragging.current) return;
    const delta = e.clientX - startX.current;
    el.scrollLeft = scrollLeftStart.current - delta;
  };

  const onPointerUp = () => {
    isDragging.current = false;
  };

  return (
    <section className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-[1632px] px-6 md:px-9">
        <h2 className="text-center font-heading text-3xl font-normal tracking-[-0.02em] text-white md:text-5xl">
          How We <span className="font-accent italic">Work</span>
        </h2>

        <div
          ref={scrollerRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerLeave={onPointerUp}
          className="mt-16 flex snap-x snap-mandatory items-stretch gap-0 overflow-x-auto pb-4 md:mt-20 [scrollbar-width:none] active:cursor-grabbing [&::-webkit-scrollbar]:hidden"
          style={{ cursor: "grab" }}
        >
          {workPrinciples.map((principle, index) => (
            <div key={principle.number} className="flex shrink-0 items-center">
              <div className="w-[300px] shrink-0 snap-start md:w-[400px]">
                <WorkPrincipleCard principle={principle} />
              </div>

              {index < workPrinciples.length - 1 && (
                <div
                  aria-hidden
                  className="mx-2 h-px w-10 shrink-0 border-t border-dashed border-white/20 md:w-16"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}