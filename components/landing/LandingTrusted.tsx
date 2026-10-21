"use client";

import Image from "next/image";
import FadeIn from "@/components/animation/FadeIn";
import { landingBrandLogos, landingTrusted } from "@/lib/data/landing";

export default function LandingTrusted() {
  const logos = [...landingBrandLogos, ...landingBrandLogos];

  return (
    <section className="relative isolate overflow-hidden py-16 md:py-20">
      <FadeIn direction="up">
        <div className="mx-auto max-w-6xl px-6 text-center md:px-9">
          <h2 className="font-heading text-xl font-semibold tracking-[0.08em] text-white uppercase sm:text-2xl md:text-[28px]">
            {landingTrusted.heading}
          </h2>
          <p className="mt-4 font-body text-sm leading-relaxed text-white/70 md:text-xl">
            <span className="font-semibold text-white">Digitize Hub</span>
            {landingTrusted.copy.replace("Digitize Hub", "")}
          </p>
        </div>
      </FadeIn>

      <div
        className="relative mt-10 w-full overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(90deg, transparent 0%, #000 8%, #000 92%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent 0%, #000 8%, #000 92%, transparent 100%)",
        }}
      >
        <div
          className="animate-slide-left-slow flex w-max items-center gap-10 md:gap-16"
          style={{ animationDuration: "40s" }}
        >
          {logos.map((logo, index) => (
            <Image
              key={`${logo.src}-${index}`}
              src={logo.src}
              alt={index < landingBrandLogos.length ? logo.alt : ""}
              width={logo.width}
              height={logo.height}
              aria-hidden={index >= landingBrandLogos.length ? true : undefined}
              className="h-12 w-auto shrink-0 object-contain sm:h-14 md:h-[72px]"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
