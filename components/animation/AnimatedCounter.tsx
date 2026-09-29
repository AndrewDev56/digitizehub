"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface AnimatedCounterProps {
  value: string;
  className?: string;
}

export default function AnimatedCounter({ value, className = "" }: AnimatedCounterProps) {
  const element = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const match = value.match(/^([^0-9.]*)([0-9][0-9,]*(?:\.[0-9]+)?)(.*)$/);
      if (!match || !element.current) return;

      const [, prefix, number, suffix] = match;
      const target = Number(number.replace(/,/g, ""));
      const decimalPlaces = number.includes(".") ? number.split(".")[1].length : 0;
      const proxy = { value: 0 };
      const format = (amount: number) =>
        `${prefix}${amount.toLocaleString("en-US", {
          minimumFractionDigits: decimalPlaces,
          maximumFractionDigits: decimalPlaces,
        })}${suffix}`;
      const media = gsap.matchMedia();

      media.add("(prefers-reduced-motion: reduce)", () => {
        element.current!.textContent = value;
      });

      media.add("(prefers-reduced-motion: no-preference)", () => {
        element.current!.textContent = format(0);
        gsap.to(proxy, {
          value: target,
          duration: 1.5,
          ease: "power3.out",
          onUpdate: () => {
            element.current!.textContent = format(proxy.value);
          },
          scrollTrigger: {
            trigger: element.current,
            start: "top 90%",
            once: true,
          },
        });
      });

      return () => media.revert();
    },
    { scope: element, dependencies: [value], revertOnUpdate: true },
  );

  return (
    <span ref={element} data-gsap-ignore className={className}>
      {value}
    </span>
  );
}