"use client";

import { useState } from "react";
import Image from "next/image";
import { founders, founderIntro } from "@/lib/data/founder";
import { offices } from "@/lib/data/offices";
import OfficeCard from "@/components/ui/OfficeCard";
import FadeIn from "@/components/animation/FadeIn";
import StaggerContainer, { StaggerItem } from "@/components/animation/StaggerContainer";

export default function FounderAndOffices() {
  const [index, setIndex] = useState(0);
  const active = founders[index];

  return (
    <section className="bg-background py-24 md:py-32">
      <div className="mx-auto grid max-w-[1632px] grid-cols-1 gap-16 px-6 md:px-9 lg:grid-cols-2">
        <FadeIn direction="right">
          <div>
            <h2 className="font-heading text-3xl font-semibold text-white md:text-5xl">
              Founder
            </h2>
            <p className="mt-3 max-w-md font-body text-sm text-white/60 md:text-base">
              {founderIntro}
            </p>

            <div
              className="relative mt-8 aspect-[4/3] overflow-hidden rounded-2xl bg-white shadow-2xl md:aspect-[16/11]"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -right-[25%] -top-[30%] h-[125%] w-[100%] rounded-full bg-brand-red/45 blur-[150px]"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute -bottom-[45%] left-[12%] h-[100%] w-[80%] rounded-full bg-brand-red/30 blur-[120px]"
              />
              {/* Founder photo */}
              <div key={active.photo} className="absolute bottom-0 right-0 flex h-[96%] w-[82%] items-end justify-end">
                <Image
                  src={active.photo}
                  alt={active.name}
                  width={700}
                  height={820}
                  style={{ objectFit: "contain", height: "100%", width: "auto", marginLeft: "auto", objectPosition: "bottom" }}
                  priority
                />
              </div>

              {/* Name + role top-left */}
              <div className="absolute top-6 left-6 z-10 max-w-[70%]">
                <h3 className="font-heading text-2xl font-semibold text-black md:text-3xl">
                  {active.name}
                </h3>
                <p className="font-body text-base text-black/70 md:text-lg">{active.role}</p>
                {active.bio && (
                  <p className="mt-3 font-body text-base text-black/70 md:text-lg">{active.bio}</p>
                )}
              </div>

              {/* LinkedIn + dots bottom-left */}
              <div className="absolute bottom-6 left-6 z-10 flex items-center justify-between gap-4">
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="flex size-10 items-center justify-center rounded-full transition-transform hover:scale-110"
                >
                  <Image
                    src="/icons/linkedin.png"
                    alt=""
                    width={24}
                    height={24}
                    className="size-10"
                  />
                </a>
                <div className="flex gap-1.5">
                  {founders.map((founderItem, i) => (
                    <button
                      key={founderItem.photo}
                      type="button"
                      aria-label={`Show slide ${i + 1}`}
                      aria-current={i === index}
                      onClick={() => setIndex(i)}
                      className={`size-1.5 rounded-full transition-colors ${i === index ? "bg-black" : "bg-black/40 hover:bg-black/60"}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn direction="left" delay={0.2}>
          <div>
            <h2 className="font-heading text-3xl font-semibold text-white md:text-5xl">
              Offices
            </h2>
            <StaggerContainer staggerChildren={0.2} className="mt-8 flex flex-col gap-4">
              {offices.filter((office) => office.city !== "Georgia Office").map((office) => (
                <StaggerItem key={office.city}>
                  <OfficeCard office={office} />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
