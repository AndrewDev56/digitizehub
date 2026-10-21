"use client";

import { useState } from "react";
import Image from "next/image";
import FadeIn from "@/components/animation/FadeIn";
import { landingTechIntro, landingTechStack } from "@/lib/data/landing";

export default function LandingTechStack() {
  const [activeId, setActiveId] = useState(landingTechStack[0].id);
  const group = landingTechStack.find((item) => item.id === activeId) ?? landingTechStack[0];

  return (
    <section id="tech-stack" className="relative isolate overflow-visible py-16 md:py-24">
      <div
        aria-hidden="true"
        data-gsap-ambient
        data-gsap-scale="1.1"
        data-gsap-opacity="0.8"
        data-gsap-duration="10"
        className="pointer-events-none absolute top-0 -left-[100px] z-0 w-[420px] opacity-70 select-none sm:w-[600px] md:w-[780px]"
      >
        <Image
          src="/images/ellipse-left.png"
          alt=""
          width={780}
          height={780}
          className="pointer-events-none h-auto w-full object-contain"
        />
      </div>

      <div className="relative mx-auto max-w-[1632px] px-6 md:px-9">
        <FadeIn direction="up" className="mx-auto max-w-4xl text-center">
          <p className="font-body text-sm tracking-[0.08em] text-white/50 uppercase">
            {landingTechIntro.eyebrow}
          </p>
          <h2
            data-gsap-ignore
            className="mt-3 font-heading text-3xl leading-tight font-semibold tracking-[-0.02em] text-white sm:text-4xl md:text-[48px]"
          >
            {landingTechIntro.titleLead}{" "}
            <span className="font-accent font-normal italic">{landingTechIntro.titleAccent}</span>{" "}
            {landingTechIntro.titleEnd}
          </h2>
          <p className="mx-auto mt-4 max-w-5xl font-body text-sm leading-relaxed text-white/70 md:text-xl">
            {landingTechIntro.copy}
          </p>
        </FadeIn>

        <div className="mt-8 flex flex-wrap justify-center gap-2 md:mt-10">
          {landingTechStack.map((item) => {
            const isActive = item.id === group.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveId(item.id)}
                className={`rounded-full px-4 py-2 font-heading text-sm whitespace-nowrap transition-all duration-300 sm:px-5 sm:py-2.5 sm:text-base ${
                  isActive
                    ? "bg-white font-semibold text-black"
                    : "border border-white/15 bg-white/[0.06] font-normal text-white/70 hover:border-white/30 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        <div
          key={group.id}
          className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:mt-10 md:grid-cols-4 lg:grid-cols-6"
        >
          {group.items.map((item) => (
            <div
              key={`${group.id}-${item.name}`}
              className="flex flex-col items-center gap-3 rounded-[20px] border border-white/10 bg-white/[0.04] p-4 md:p-5"
            >
              <div className="flex h-16 w-full items-center justify-center rounded-2xl bg-white px-3">
                <img
                  src={item.src}
                  alt=""
                  className="h-10 w-auto max-w-[120px] object-contain"
                />
              </div>
              <p className="font-heading text-sm font-semibold text-white">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
