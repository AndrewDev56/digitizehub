"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function RotatingWord({
  words,
  className = "",
}: {
  words: string[];
  className?: string;
}) {
  const root = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const media = gsap.matchMedia();

      media.add("(prefers-reduced-motion: no-preference)", () => {
        const options = gsap.utils.toArray<HTMLElement>("[data-word]", root.current);
        if (options.length < 2) return;

        gsap.set(options.slice(1), { yPercent: 110, autoAlpha: 0 });
        const timeline = gsap.timeline({ repeat: -1 });

        options.forEach((option, index) => {
          const next = options[(index + 1) % options.length];
          timeline
            .to(option, { yPercent: -110, autoAlpha: 0, duration: 0.45, ease: "power2.in" }, "+=1.8")
            .fromTo(
              next,
              { yPercent: 110, autoAlpha: 0 },
              { yPercent: 0, autoAlpha: 1, duration: 0.45, ease: "power2.out" },
              "<",
            );
        });
      });

      return () => media.revert();
    },
    { scope: root },
  );

  return (
    <span
      ref={root}
      data-gsap-ignore
      aria-label={words[0]}
      className={`inline-grid overflow-hidden align-bottom ${className}`}
    >
      {words.map((word, index) => (
        <span
          key={word}
          data-word
          aria-hidden="true"
          className="col-start-1 row-start-1"
          style={{ visibility: index === 0 ? "visible" : "hidden" }}
        >
          {word}
        </span>
      ))}
    </span>
  );
}