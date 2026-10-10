"use client";

import Image from "next/image";
import type { PricingPlan } from "@/lib/data/pricing";

export default function PricingCard({
  plan,
}: {
  plan: PricingPlan;
  isLast?: boolean;
}) {
  const tier = {
    Launch: "Silver",
    Growth: "Gold",
    Custom: "Platinum",
  }[plan.name] ?? plan.name;

  return (
    <div className="relative flex h-full flex-col gap-5 rounded-[24px] border border-white/10 bg-zinc-900/60 px-6 py-6 backdrop-blur-sm">
      <div className="flex items-center justify-between gap-3">
        <div className="flex min-w-0 items-center">
          <span className="flex shrink-0 items-center justify-center rounded-lg bg-white/5 p-2">
            <Image
              src={plan.icon}
              alt=""
              width={32}
              height={32}
              className="size-8"
            />
          </span>
          <h3 className="ml-2 truncate font-heading text-sm font-medium text-white">
            {plan.name}
          </h3>
        </div>
        {plan.badge && (
          <span className="shrink-0 rounded-full border border-white/15 px-2.5 py-0.5 font-tag text-[11px] text-white/70">
            {plan.badge}
          </span>
        )}
      </div>

      <div className="flex items-end justify-between gap-4">
        <p className="font-accent text-3xl italic text-white md:text-4xl">
          {tier}
        </p>
        <button
          type="button"
          className="group flex shrink-0 items-center gap-2 rounded-full bg-white py-1.5 pr-1.5 pl-4 font-heading text-sm font-medium text-black transition-transform hover:scale-105 hover:bg-white/90"
        >
          Start Now
          <span className="flex size-7 items-center justify-center rounded-full bg-black transition-transform duration-300 group-hover:rotate-45">
            <Image
              src="/icons/Arrow_Right.png"
              alt=""
              width={12}
              height={12}
              className="size-3"
            />
          </span>
        </button>
      </div>

      <div aria-hidden className="h-px w-full bg-white/10" />

      <ul className="flex flex-col gap-2.5">
        {plan.features.map((feature) => (
          <li
            key={feature}
            className="flex items-start gap-2 font-body text-sm text-white/80"
          >
            <span
              aria-hidden
              className="mt-0.5 shrink-0 text-base leading-4 text-white/60"
            >
              ✓
            </span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
