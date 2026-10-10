"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import FadeIn from "@/components/animation/FadeIn";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const storySteps = [
  {
    side: "left",
    text: "Digitize Hub started because we kept meeting the same business owner. They had paid an agency, waited months, and ended up with a slow site, a bill they did not understand, and nobody who could tell them what happened after launch.",
  },
  {
    side: "right",
    text: "So we built the opposite. Fixed quotes before anything starts. One team that designs, builds, deploys, ranks, and maintains, so nobody can point at anybody else when something breaks. And when the project ends, every file and account is yours.",
  },
  {
    side: "left",
    text: "Today, we operate across Calgary and Georgia as a unified team. We stay by our clients' side long after deployment, ensuring every digital product remains blazing fast, secure, and engineered for real growth.",
  },
];

export default function OurStory() {
  const containerRef = useRef<HTMLElement | null>(null);
  const timelineRef = useRef<HTMLDivElement | null>(null);
  const lineProgressRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const items = gsap.utils.toArray<HTMLElement>(".story-timeline-item");

      // Animate each timeline item as it enters the viewport on scroll
      items.forEach((item) => {
        const side = item.dataset.side;
        const xOffset = side === "left" ? -40 : 40;
        const node = item.querySelector(".story-node");
        const line = item.querySelector(".story-connector");
        const text = item.querySelector(".story-text");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });

        tl.fromTo(
          item,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
        )
          .fromTo(
            text,
            { opacity: 0, x: xOffset },
            { opacity: 1, x: 0, duration: 0.6, ease: "power2.out" },
            "-=0.4"
          )
          .fromTo(
            line,
            { scaleX: 0 },
            {
              scaleX: 1,
              transformOrigin: side === "left" ? "right center" : "left center",
              duration: 0.4,
              ease: "power2.out",
            },
            "-=0.4"
          )
          .fromTo(
            node,
            { scale: 0, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.35, ease: "back.out(2)" },
            "-=0.2"
          );
      });

      // Animate vertical center line progress as user scrolls through the timeline container
      if (timelineRef.current && lineProgressRef.current) {
        gsap.fromTo(
          lineProgressRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            transformOrigin: "top center",
            ease: "none",
            scrollTrigger: {
              trigger: timelineRef.current,
              start: "top 75%",
              end: "bottom 75%",
              scrub: 0.5,
            },
          }
        );
      }
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative isolate overflow-visible py-24 md:py-32"
    >
      {/* Ambient Eclipse Glow - Left */}
      <div
        aria-hidden="true"
        data-gsap-ambient
        data-gsap-scale="1.1"
        data-gsap-opacity="0.85"
        data-gsap-duration="10"
        className="pointer-events-none absolute top-[10%] -left-[100px] sm:-left-[160px] md:-left-[220px] z-0 w-[450px] sm:w-[650px] md:w-[850px] lg:w-[1000px] select-none opacity-80"
      >
        <Image
          src="/images/ellipse-left.png"
          alt=""
          width={1000}
          height={1000}
          className="h-auto w-full object-contain pointer-events-none"
        />
      </div>

      {/* Ambient Eclipse Glow - Right / Bottom */}
      <div
        aria-hidden="true"
        data-gsap-ambient
        data-gsap-scale="1.12"
        data-gsap-opacity="0.85"
        data-gsap-duration="8"
        className="pointer-events-none absolute -bottom-[100px] -right-[100px] md:-right-[180px] z-0 w-[420px] sm:w-[600px] md:w-[800px] lg:w-[950px] select-none opacity-80"
      >
        <Image
          src="/images/ellipse-right.png"
          alt=""
          width={950}
          height={950}
          className="h-auto w-full object-contain pointer-events-none"
        />
      </div>

      <div className="relative mx-auto max-w-[1100px] px-6 md:px-9">
        {/* Section Header */}
        <FadeIn direction="up">
          <h2 className="text-center font-heading text-3xl font-normal tracking-[-0.02em] text-white md:text-6xl">
            Our <span className="font-accent italic">Story</span>
          </h2>
        </FadeIn>

        {/* Vertical Timeline with alternating Left & Right paragraphs */}
        <div ref={timelineRef} className="relative mt-20 md:mt-28">
          {/* Central Vertical Line (Background Track) */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-4 bottom-4 left-4 -translate-x-1/2 w-px bg-white/10 md:left-1/2"
          />

          {/* Central Vertical Line (Animated Progress Fill) */}
          <div
            ref={lineProgressRef}
            aria-hidden="true"
            className="pointer-events-none absolute top-4 bottom-4 left-4 -translate-x-1/2 w-px bg-gradient-to-b from-brand-red via-brand-red to-accent-to shadow-[0_0_8px_rgba(255,46,0,0.6)] md:left-1/2"
          />

          <div className="flex flex-col gap-16 md:gap-24">
            {storySteps.map((step, index) => {
              const isLeft = step.side === "left";

              return (
                <div
                  key={index}
                  data-side={step.side}
                  className={`story-timeline-item relative flex flex-col md:flex-row md:items-center ${
                    isLeft ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  {/* Timeline Node/Dot positioned on the center line */}
                  <div className="story-node absolute left-4 -translate-x-1/2 md:left-1/2 flex items-center justify-center size-4 rounded-full border-2 border-brand-red bg-[#0a0a0a] shadow-[0_0_12px_rgba(255,46,0,0.8)] z-10">
                    <span className="size-1.5 rounded-full bg-brand-red animate-pulse" />
                  </div>

                  {/* Horizontal Connector Line */}
                  <div
                    className={`story-connector hidden md:block absolute top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-white/20 to-brand-red/60 ${
                      isLeft
                        ? "right-1/2 w-[60px] lg:w-[90px]"
                        : "left-1/2 w-[60px] lg:w-[90px]"
                    }`}
                  />

                  {/* Paragraph Box */}
                  <div
                    className={`story-text pl-10 md:pl-0 w-full md:w-[44%] lg:w-[42%] ${
                      isLeft ? "md:pr-10 lg:md:pr-14 md:text-left" : "md:pl-10 lg:md:pl-14 md:text-left"
                    }`}
                  >
                    <p className="font-body text-sm leading-relaxed text-white/75 md:text-base lg:text-[17px] font-normal">
                      {step.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Quote Banner */}
        <FadeIn direction="up" delay={0.3} className="relative mt-24 md:mt-32">
          <span
            aria-hidden
            className="pointer-events-none absolute -top-8 right-0 font-heading text-8xl text-white/5 select-none md:text-9xl"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="229" height="180" viewBox="0 0 229 180" fill="none">
<path d="M9.05348 0V13.2036C27.5155 20.0299 41.9833 30.8084 52.457 45.5389C62.9306 60.0898 68.1674 75.2695 68.1674 91.0778C68.1674 94.491 67.6349 97.006 66.5698 98.6227C65.8597 99.7006 65.0609 100.24 64.1732 100.24C63.2857 100.24 61.9543 99.6108 60.1791 98.3533C54.4984 94.2216 47.3089 92.1557 38.6105 92.1557C28.4919 92.1557 19.5271 96.3772 11.7163 104.82C3.90543 113.084 0 122.964 0 134.461C0 146.497 4.52675 157.096 13.5802 166.257C22.4562 175.419 33.2849 180 46.0663 180C60.9779 180 73.8481 173.802 84.6767 161.407C95.5054 149.012 100.92 132.395 100.92 111.557C100.92 87.3054 93.5527 65.5689 78.8186 46.3473C64.0845 27.1257 40.8295 11.6766 9.05348 0ZM137.134 0V13.2036C155.596 20.0299 170.064 30.8084 180.537 45.5389C191.011 60.0898 196.248 75.2695 196.248 91.0778C196.248 94.491 195.715 97.006 194.65 98.6227C193.94 99.7006 193.141 100.24 192.253 100.24C191.366 100.24 190.034 99.6108 188.259 98.3533C182.579 94.2216 175.389 92.1557 166.691 92.1557C156.572 92.1557 147.607 96.3772 139.797 104.82C131.986 113.084 128.08 122.964 128.08 134.461C128.08 146.497 132.607 157.096 141.66 166.257C150.536 175.419 161.365 180 174.147 180C189.058 180 201.928 173.802 212.757 161.407C223.586 149.012 229 132.395 229 111.557C229 87.3054 221.633 65.5689 206.899 46.3473C192.165 27.1257 168.91 11.6766 137.134 0Z" fill="url(#paint0_linear_310_1626)"/>
<defs>
<linearGradient id="paint0_linear_310_1626" x1="39" y1="11.0001" x2="194" y2="166" gradientUnits="userSpaceOnUse">
<stop stop-color="white" stop-opacity="0.02"/>
<stop offset="1" stop-color="white" stop-opacity="0.07"/>
</linearGradient>
</defs>
</svg>
          </span>
          <p className="max-w-2xl font-accent text-2xl text-white italic md:text-7xl">
            <span className="font-heading not-italic font-semibold ">
              One Team
            </span>{" "}
            from first sketch to still running{" "}
            <span className="font-heading not-italic font-semibold text-accent-to">
              Two Years
            </span>{" "}
            later.
          </p>
        </FadeIn>
         {/* Ambient Eclipse Glow - Right / Bottom */}
     
      </div>
       <div
        aria-hidden="true"
        data-gsap-ambient
        data-gsap-scale="1.12"
        data-gsap-opacity="0.85"
        data-gsap-duration="8"
        className="pointer-events-none absolute -top-[0px] -right-[100px] md:-right-[180px] z-0 w-[420px] sm:w-[600px] md:w-[800px] lg:w-[1150px] select-none opacity-80"
      >
        <Image
          src="/images/ellipse-right.png"
          alt=""
          width={950}
          height={950}
          className="h-auto w-full object-contain pointer-events-none"
        />
      </div>
    </section>
  );
}