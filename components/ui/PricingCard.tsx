"use client";

import Image from "next/image";
import type { PricingPlan } from "@/lib/data/pricing";

export default function PricingCard({
  plan,
}: {
  plan: PricingPlan;
  isLast?: boolean;
}) {
  return (
    <div
      className={`relative flex flex-col gap-6 rounded-[24px] px-6 py-8 ${
        plan.featured
          ? "mx-5 my-4 bg-gradient-to-b from-white/[0.08] to-white/[0.02]"
          : "mx-2 my-2 bg-white/[0.02] md:px-8"
      }`}
    >
      {plan.badge && (
        <span className="absolute top-6 right-6 rounded-full bg-gradient-to-r from-[var(--accent-from)] to-[var(--accent-to)] px-3.5 py-1 font-tag text-[11px] font-semibold text-white shadow-md animate-pulse">
          {plan.badge}
        </span>
      )}

      <div className="flex items-center gap-2">
        <Image src={plan.icon} alt="" width={18} height={18} className="size-[18px]" />
        <h3 className="font-heading text-base font-medium text-white">
          {plan.name}
        </h3>
      </div>

      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="font-body text-xs text-white/40">{plan.priceLabel}</p>
          <p className="font-heading text-3xl font-semibold text-white md:text-4xl">
            {plan.price}
          </p>
        </div>

        <button
          type="button"
          className="group flex items-center gap-2 rounded-full bg-white py-2 pr-2 pl-4 font-heading text-sm font-semibold text-black transition-all hover:bg-brand-red hover:scale-105"
        >
          Start Now
          <span className="flex size-6 items-center justify-center rounded-full bg-black transition-transform duration-300 group-hover:rotate-45">
            <Image
              src="/icons/Arrow_Right.png"
              alt=""
              width={12}
              height={12}
              className="size-3 invert"
            />
          </span>
        </button>
      </div>

      <div aria-hidden className="h-px w-full bg-white/10" />

      <ul className="flex flex-col gap-3">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-center gap-2">
            <Image
              src="/icons/tick.png"
              alt=""
              width={10}
              height={10}
              className="size-2.5 shrink-0"
            />
            <span className="font-body text-sm text-white/80">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}