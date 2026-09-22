"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface AnimatedCounterProps {
  value: string; // e.g. "98%", "$10M+", "500+", "4.9/5", "100%"
  className?: string;
}

export default function AnimatedCounter({ value, className = "" }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });
  const [displayValue, setDisplayValue] = useState<string>("0");

  useEffect(() => {
    if (!isInView) return;

    // Parse prefix, number, suffix (e.g., "$", "10", "M+", or "", "98", "%")
    const match = value.match(/^([^0-9.]*)([0-9.]+)(.*)$/);
    if (!match) {
      setDisplayValue(value);
      return;
    }

    const prefix = match[1];
    const targetNum = parseFloat(match[2]);
    const suffix = match[3];
    const isFloat = match[2].includes(".");
    const duration = 1500; // ms
    const frameDuration = 1000 / 60;
    const totalFrames = Math.round(duration / frameDuration);

    let frame = 0;
    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      // Ease out quad
      const currentProgress = 1 - Math.pow(1 - progress, 3);
      const currentNum = targetNum * currentProgress;

      if (frame >= totalFrames) {
        setDisplayValue(`${prefix}${isFloat ? targetNum.toFixed(1) : Math.round(targetNum)}${suffix}`);
        clearInterval(counter);
      } else {
        setDisplayValue(`${prefix}${isFloat ? currentNum.toFixed(1) : Math.round(currentNum)}${suffix}`);
      }
    }, frameDuration);

    return () => clearInterval(counter);
  }, [isInView, value]);

  return (
    <span ref={ref} className={className}>
      {displayValue}
    </span>
  );
}
