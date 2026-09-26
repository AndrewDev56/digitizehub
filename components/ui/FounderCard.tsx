"use client";

import { useState } from "react";
import Image from "next/image";
import { founders } from "@/lib/data/founders";

export default function FounderCard() {
  const [activeIndex, setActiveIndex] = useState(0);
  const founder = founders[activeIndex];

  const goTo = (index: number) => {
    setActiveIndex((index + founders.length) % founders.length);
  };

  return (
    <div
      className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl md:aspect-[16/11]"
      style={{ background: "linear-gradient(160deg, #ffd9e5 0%, #ff5277 100%)" }}
    >
      <div className="absolute right-0 bottom-0 h-[85%] w-[65%]">
        <Image
          src={founder.photo}
          alt={founder.name}
          fill
          className="object-contain object-bottom"
          priority
        />
      </div>

      <div className="absolute top-6 left-6 z-10 max-w-[55%]">
        <h3 className="font-heading text-xl font-semibold text-black md:text-2xl">
          {founder.name}
        </h3>
        <p className="font-body text-sm text-black/70">{founder.role}</p>

        {founder.bio && (
          <p className="mt-6 font-body text-xs leading-relaxed text-black/70 md:text-sm">
            {founder.bio}
          </p>
        )}
      </div>

      <div className="absolute bottom-6 left-6 z-10 flex items-center gap-4">
        
       <a   href="#"
          aria-label="LinkedIn"
          className="flex size-9 items-center justify-center rounded-full bg-white transition-transform hover:scale-110"
        >
          <Image src="/icons/linkedin.png" alt="" width={16} height={16} className="size-4" />
        </a>
      </div>

      <div className="absolute right-6 bottom-6 z-10 flex items-center gap-2">
        <button
          type="button"
          aria-label="Previous"
          onClick={() => goTo(activeIndex - 1)}
          className="flex size-7 items-center justify-center rounded-full bg-black/10 text-black"
        >
          ‹
        </button>
        <div className="flex gap-1.5">
          {founders.map((_, index) => (
            <span
              key={index}
              className={`size-1.5 rounded-full ${
                index === activeIndex ? "bg-black" : "bg-black/40"
              }`}
            />
          ))}
        </div>
        <button
          type="button"
          aria-label="Next"
          onClick={() => goTo(activeIndex + 1)}
          className="flex size-7 items-center justify-center rounded-full bg-black/10 text-black"
        >
          ›
        </button>
      </div>
    </div>
  );
}