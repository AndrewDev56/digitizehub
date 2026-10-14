"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const paragraphText =
  "When design, build, deployment, and SEO sit in four different companies, every problem becomes somebody else's fault. Here they sit in one, so there is one number to call and one team accountable for the result.";

export default function WhyOneTeam() {
  const containerRef = useRef<HTMLElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);

  useGSAP(
    () => {
      const words = paragraphRef.current?.querySelectorAll<HTMLSpanElement>(
        ".scroll-highlight-word"
      );
      if (!words || words.length === 0) return;

      gsap.fromTo(
        words,
        {
          opacity: 0.25,
          color: "rgba(255, 255, 255, 0.25)",
        },
        {
          opacity: 1,
          color: "#ffffff",
          stagger: 0.08,
          ease: "none",
          scrollTrigger: {
            trigger: paragraphRef.current,
            start: "top 80%",
            end: "bottom 45%",
            scrub: 0.5,
          },
        }
      );
    },
    { scope: containerRef }
  );

  const words = paragraphText.split(" ");

  return (
    <section ref={containerRef} className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-[1356px] px-6 text-center md:px-9">
        <h2 className="font-heading text-3xl font-normal tracking-[-0.02em] text-white md:text-7xl">
          Why <span className="font-accent italic">One Team</span> For All
          Services
        </h2>

        <p className="mt-6 font-body text-lg font-medium text-white md:text-2xl">
          One team from first sketch to still running two years later
        </p>

        <p
          ref={paragraphRef}
          data-gsap-ignore
          className="mx-auto mt-10 max-w-6xl  text-2xl leading-[1.6] italic md:text-5xl"
        >
          {words.map((word, index) => (
            <span
              key={index}
              className="scroll-highlight-word inline text-[#222222] will-change-[color,opacity]"
            >
              {word}{" "}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}