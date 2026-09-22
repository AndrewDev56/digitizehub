"use client";

import { useState } from "react";
import Image from "next/image";
import PricingCard from "@/components/ui/PricingCard";
import { pricingPlans } from "@/lib/data/pricing";

export default function Pricing() {
  const [billing, setBilling] = useState<"monthly" | "quarterly">("monthly");

  return (
    <section className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-[1632px] px-6 py-8 md:px-9 bg-white/[0.02] ring-1 ring-white/10 rounded-[32px]">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h2 className="max-w-xl font-heading text-3xl font-semibold tracking-[-0.02em] text-white md:text-5xl">
              Fixed <span className="font-accent italic">Prices</span>. You
              see them before we{" "}
              <span className="font-accent italic">Get Started</span>.
            </h2>
            <p className="mt-3 font-body text-sm text-white/50 md:text-base">
              No hourly billing. No lock-in. Every file, account, and
              password is yours at handover.
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-3">
            <span
              className={`font-tag text-sm ${billing === "monthly" ? "text-white" : "text-white/40"}`}
            >
              Monthly
            </span>
            <button
              type="button"
              role="switch"
              aria-checked={billing === "quarterly"}
              onClick={() =>
                setBilling((b) => (b === "monthly" ? "quarterly" : "monthly"))
              }
              className="relative h-6 w-11 rounded-full bg-white/20"
            >
              <span
                className={`absolute top-0.5 size-5 rounded-full bg-white transition-all ${
                  billing === "quarterly" ? "left-[22px]" : "left-0.5"
                }`}
              />
            </button>
            <span
              className={`font-tag text-sm ${billing === "quarterly" ? "text-white" : "text-white/40"}`}
            >
              Quarterly
            </span>
          </div>
        </div>

        <div className="mt-12 overflow-hidden    md:mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {pricingPlans.map((plan, index) => (
              <PricingCard
                key={plan.name}
                plan={plan}
                isLast={index === pricingPlans.length - 1}
              />
            ))}
          </div>

        <div className="flex justify-center py-6">
  <button
    type="button"
    className="flex items-center gap-3 rounded-full bg-white py-2 pr-2 pl-5 font-heading text-sm font-medium text-black transition hover:bg-white/90"
  >
    See Full Pricing
    <span className="flex size-7 items-center justify-center rounded-full bg-black">
      <Image
        src="/icons/Arrow_Right.png"
        alt=""
        width={12}
        height={12}
        className="size-3 "
      />
    </span>
  </button>
</div>
        </div>
      </div>
    </section>
  );
}