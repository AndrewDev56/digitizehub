"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { clientLogos } from "@/lib/data/clientLogos";

gsap.registerPlugin(useGSAP);

export default function LogoMarquee() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const track = root.current?.querySelector<HTMLElement>("[data-marquee-track]");
      const firstGroup = root.current?.querySelector<HTMLElement>("[data-marquee-group]");
      const secondGroup = firstGroup?.nextElementSibling;
      if (!track || !firstGroup || !(secondGroup instanceof HTMLElement)) return;

      const media = gsap.matchMedia();
      media.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(secondGroup, { display: "none" });
      });
      media.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.to(track, {
          x: () => -(firstGroup.offsetWidth + parseFloat(getComputedStyle(track).columnGap)),
          duration: 32,
          ease: "none",
          repeat: -1,
        });
      });

      return () => media.revert();
    },
    { scope: root },
  );

  return (
    <div
      ref={root}
      className="relative w-full overflow-hidden py-10 md:h-[150px] md:py-0"
      style={{
        maskImage:
          "linear-gradient(90deg, transparent 0%, #000 8%, #000 92%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(90deg, transparent 0%, #000 8%, #000 92%, transparent 100%)",
      }}
    >
      <div data-marquee-track className="flex h-full w-max items-center gap-16">
        {[0, 1].map((group) => (
          <div
            key={group}
            data-marquee-group
            aria-hidden={group === 1 ? true : undefined}
            className="flex shrink-0 items-center gap-16"
          >
            {clientLogos.map((logo, index) => (
              <Image
                key={`${logo.src}-${index}`}
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                aria-hidden
                className="h-[32px] w-auto shrink-0 opacity-40 md:h-[42px] object-contain"
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}