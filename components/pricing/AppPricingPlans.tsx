"use client";

import { useState } from "react";
import AppPricingPlanCard from "@/components/ui/AppPricingPlanCard";
import { appPricingPlans } from "@/lib/data/appPricingPlans";

export default function AppPricingPlans() {
  const [billing, setBilling] = useState<"monthly" | "quarterly">("monthly");

  return (
    <section className="bg-background pb-24 md:pb-32">
      <div className="mx-auto max-w-[1632px] px-6 md:px-9">
        <div className="flex justify-end">
          <div className="flex items-center gap-3">
            <span
              className={`font-heading text-sm tracking-[-0.01em] ${
                billing === "monthly" ? "text-white" : "text-white/70"
              }`}
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
              className="relative h-[44px] w-[74px] rounded-full bg-white/6"
            >
              <span
                className={`absolute top-1.5 size-8 rounded-full bg-white transition-all ${
                  billing === "quarterly" ? "left-[38px]" : "left-1.5"
                }`}
              />
            </button>
            <span
              className={`font-heading text-sm tracking-[-0.01em] ${
                billing === "quarterly" ? "text-white" : "text-white/70"
              }`}
            >
              Quarterly
            </span>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {appPricingPlans.map((plan) => (
            <AppPricingPlanCard key={plan.name} plan={plan} billing={billing} />
          ))}
        </div>
      </div>
    </section>
  );
}