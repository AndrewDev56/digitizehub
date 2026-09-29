"use client";

import { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right" | "none";
  delay?: number;
  duration?: number;
  className?: string;
  viewport?: { once?: boolean; margin?: string };
  once?: boolean;
  distance?: number;
  scale?: number;
}

export default function FadeIn({
  children,
  direction = "up",
  delay = 0,
  duration = 0.5,
  className = "",
  viewport,
  once = viewport?.once ?? true,
  distance = 30,
  scale = 1,
}: FadeInProps) {
  return (
    <div
      data-gsap-reveal
      data-gsap-direction={direction}
      data-gsap-delay={delay}
      data-gsap-duration={duration}
      data-gsap-distance={distance}
      data-gsap-scale={scale}
      data-gsap-once={once}
      className={className}
    >
      {children}
    </div>
  );
}