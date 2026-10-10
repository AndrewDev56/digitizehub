"use client";

import { useState } from "react";
import Image from "next/image";
import PricingPlanCard from "@/components/ui/PricingPlanCard";
import { pricingPlans } from "@/lib/data/pricingPlans";

export default function PricingPlans() {
  const [billing, setBilling] = useState<"monthly" | "quarterly">("monthly");

  return (
    <section className="relative isolate overflow-visible pb-section">
      {/* Ambient Eclipse Glow - Left */}
      <div
        aria-hidden="true"
        data-gsap-ambient
        data-gsap-scale="1.1"
        data-gsap-opacity="0.8"
        data-gsap-duration="10"
        className="pointer-events-none absolute top-1/4 -left-[100px] sm:-left-[160px] md:-left-[200px] z-0 w-[420px] sm:w-[600px] md:w-[780px] lg:w-[950px] select-none opacity-75"
      >
        <Image
          src="/images/ellipse-left.png"
          alt=""
          width={950}
          height={950}
          className="h-auto w-full object-contain pointer-events-none"
        />
      </div>
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
          {pricingPlans.map((plan) => (
            <div key={plan.name} className={plan.featured ? "md:mx-4 md:my-4" : ""}>
              <PricingPlanCard plan={plan} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}