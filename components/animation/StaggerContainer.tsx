"use client";

import { ReactNode } from "react";

interface StaggerContainerProps {
  children: ReactNode;
  staggerChildren?: number;
  delayChildren?: number;
  className?: string;
  viewport?: { once?: boolean; margin?: string; amount?: number };
}

export default function StaggerContainer({
  children,
  staggerChildren = 0.1,
  delayChildren = 0,
  className = "",
}: StaggerContainerProps) {
  return (
    <div
      data-gsap-stagger
      data-gsap-stagger-amount={staggerChildren}
      data-gsap-delay={delayChildren}
      className={className}
    >
      {children}
    </div>
  );
}

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
}

export function StaggerItem({
  children,
  className = "",
  direction: _direction = "up",
  distance: _distance = 25,
}: StaggerItemProps) {
  return (
    <div data-gsap-stagger-item className={className}>
      {children}
    </div>
  );
}
