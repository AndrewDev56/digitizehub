"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import PricingCard from "@/components/ui/PricingCard";
import { pricingPlans } from "@/lib/data/pricing";
import FadeIn from "@/components/animation/FadeIn";
import StaggerContainer, { StaggerItem } from "@/components/animation/StaggerContainer";

export default function Pricing() {
  const [billing, setBilling] = useState<"monthly" | "quarterly">("monthly");

  return (
    <section className="bg-background px-4 py-section md:px-8 lg:px-14">
      <div className="relative isolate mx-auto max-w-[1632px] overflow-hidden rounded-[32px] border border-white/10 bg-zinc-950 px-8 py-10 md:px-16 md:py-16">
        <div
          aria-hidden
          className="pointer-events-none absolute -inset-16 -z-10 bg-[radial-gradient(ellipse_at_80%_10%,rgba(83,70,229,0.2),transparent_42%),radial-gradient(ellipse_at_100%_100%,rgba(127,29,29,0.16),transparent_42%)] blur-3xl"
        />

        <FadeIn direction="up">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-start">
            <div className="max-w-3xl">
              <h2 className="font-heading text-4xl leading-tight font-medium tracking-[-0.02em] text-white md:text-5xl lg:text-6xl">
                Fixed <span className="font-accent italic">Prices</span>. You see
                them
                <br className="hidden lg:block" /> before we{" "}
                <span className="font-accent italic">Get Started</span>.
              </h2>
              <p className="mt-3 max-w-2xl font-body text-sm text-white/50 md:text-base">
                No hourly billing. No lock in. Every file, account, and password
                is yours at handover.
              </p>
            </div>

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
              className="flex shrink-0 items-center gap-2 rounded-full bg-white/10 p-1.5 font-tag text-sm"
            >
              <span
                className={`transition-colors ${billing === "monthly" ? "text-white" : "text-white/50"}`}
              >
                Monthly
              </span>
              <span className="relative flex h-5 w-10 items-center rounded-full bg-black/30">
                <span
                  className={`size-4 rounded-full bg-white shadow transition-transform duration-200 ${billing === "quarterly" ? "translate-x-5" : "translate-x-0.5"}`}
                />
              </span>
              <span
                className={`transition-colors ${billing === "quarterly" ? "text-white" : "text-white/50"}`}
              >
                Quarterly
              </span>
            </button>
          </div>
        </FadeIn>

        <div className="mt-8 md:mt-10">
          <StaggerContainer
            staggerChildren={0.15}
            className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3"
          >
            {pricingPlans.map((plan, index) => (
              <StaggerItem key={plan.name}>
                <PricingCard
                  plan={plan}
                  isLast={index === pricingPlans.length - 1}
                />
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn direction="up" delay={0.3} className="mt-8 flex justify-center">
            <Link
              href="/pricing"
              className="group flex items-center gap-2 rounded-full bg-white py-2 pr-2 pl-5 font-heading text-sm font-medium text-black transition-transform hover:scale-105 hover:bg-white/90"
            >
              See Full Pricing
              <span className="flex size-7 items-center justify-center rounded-full bg-black transition-transform duration-300 group-hover:rotate-45">
                <Image
                  src="/icons/Arrow_Right.png"
                  alt=""
                  width={12}
                  height={12}
                  className="size-3 "
                />
              </span>
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
