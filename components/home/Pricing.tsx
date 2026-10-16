"use client";

import { useState } from "react";
import Image from "next/image";
import PricingCard from "@/components/ui/PricingCard";
import { pricingServices } from "@/lib/data/pricing";
import FadeIn from "@/components/animation/FadeIn";
import StaggerContainer, { StaggerItem } from "@/components/animation/StaggerContainer";
import Button from "../ui/Button";

export default function Pricing() {
  const [billing, setBilling] = useState<"monthly" | "quarterly">("monthly");
  const [activeService, setActiveService] = useState(pricingServices[0].id);
  const service =
    pricingServices.find((item) => item.id === activeService) ??
    pricingServices[0];

  return (
    <section className="relative isolate overflow-visible bg-background px-4 py-20 md:px-8 md:py-28 lg:px-14">

      <div
             aria-hidden="true"
             data-gsap-ambient
             data-gsap-scale="1.1"
             data-gsap-opacity="0.85"
             data-gsap-duration="9"
             className="pointer-events-none absolute -top-[120px] md:-top-[180px] -right-[100px] sm:-right-[140px] md:-right-[180px] z-0 w-[420px] sm:w-[580px] md:w-[750px] lg:w-[920px] select-none opacity-80"
           >
             <Image
               src="/images/price-eclipse-right-bottom.png"
               alt=""
               width={950}
               height={950}
               className="h-auto w-full object-contain pointer-events-none"
             />
           </div>

      <div className="relative isolate mx-auto max-w-[1632px] overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.04] px-4 py-8 shadow-2xl backdrop-blur-md sm:rounded-[40px] sm:px-10 sm:py-14 md:rounded-[48px] md:px-14 md:py-16">

        <FadeIn direction="up">
          <div className="relative z-10 flex flex-col items-start justify-between gap-8 md:flex-row md:items-start">
            <div className="max-w-3xl">
              <h2 className="font-heading text-[26px] leading-tight font-normal tracking-[-0.02em] text-white sm:text-4xl md:text-5xl lg:text-6xl">
                Fixed <span className="font-accent font-normal italic text-white">Prices</span>. You see
                them
                <br className="hidden lg:block" /> before we{" "}
                <span className="font-accent font-normal italic text-white">Get Started</span>.
              </h2>
              <p className="mt-3 max-w-2xl font-body text-xs sm:text-sm md:text-base text-white/60">
                {service.tagline}
              </p>
            </div>

            {service.showBilling && (
              <button
                type="button"
                role="switch"
                aria-label="Billing period"
                aria-checked={billing === "quarterly"}
                onClick={() =>
                  setBilling((current) =>
                    current === "monthly" ? "quarterly" : "monthly",
                  )
                }
                className="group flex shrink-0 items-center gap-3.5 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 font-heading text-sm sm:px-5 sm:py-2.5 sm:text-base md:text-[17px] shadow-lg backdrop-blur-md transition-all duration-300 hover:border-white/30 cursor-pointer"
              >
                <span
                  className={`transition-colors duration-200 ${
                    billing === "monthly" ? "font-semibold text-white" : "font-normal text-white/50 group-hover:text-white/80"
                  }`}
                >
                  Monthly
                </span>
                <span className="relative flex h-6 w-12 sm:h-7 sm:w-14 items-center rounded-full border border-white/15 bg-black/70 px-1 transition-colors">
                  <span
                    className={`size-4 sm:size-5 rounded-full bg-white shadow-md transition-transform duration-300 ease-out ${
                      billing === "quarterly" ? "translate-x-6 sm:translate-x-7" : "translate-x-0"
                    }`}
                  />
                </span>
                <span
                  className={`transition-colors duration-200 ${
                    billing === "quarterly" ? "font-semibold text-white" : "font-normal text-white/50 group-hover:text-white/80"
                  }`}
                >
                  Quarterly
                </span>
              </button>
            )}
          </div>
        </FadeIn>

        <div className="relative z-10 mt-8 flex flex-wrap gap-2">
          {pricingServices.map((item) => {
            const isActive = item.id === service.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveService(item.id)}
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

        <div className="relative z-10 mt-10 md:mt-14">
          <StaggerContainer
            key={service.id}
            staggerChildren={0.12}
            className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 md:gap-6"
          >
            {service.plans.map((plan, index) => (
              <StaggerItem key={`${service.id}-${plan.name}`}>
                <PricingCard
                  plan={plan}
                  isLast={index === service.plans.length - 1}
                />
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn direction="up" delay={0.3} className="mt-10 md:mt-12 flex justify-center">
            <Button
              href="/pricing"
            >
              See Full Pricing
            </Button>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
