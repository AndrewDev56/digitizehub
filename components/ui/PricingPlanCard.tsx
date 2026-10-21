"use client";

import type { CSSProperties } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import type { PricingPlan } from "@/lib/data/pricingPlans";

const TIER_BY_PLAN: Record<string, "Silver" | "Gold" | "Platinum"> = {
  Launch: "Silver",
  Growth: "Gold",
  Custom: "Platinum",
};

function PackageTitle({ name }: { name: string }) {
  const words = name.trim().split(/\s+/);
  if (words.length === 1) {
    return name;
  }

  const slashIndex = words.findIndex((word) => word.includes("/"));
  const breakAt =
    slashIndex >= 0
      ? slashIndex + 1
      : words.length > 3
        ? 2
        : words.length - 1;

  return (
    <>
      {words.slice(0, breakAt).join(" ")}
      <br />
      {words.slice(breakAt).join(" ")}
    </>
  );
}

const metalChip: Record<
  "Silver" | "Gold" | "Platinum",
  { className: string; style: CSSProperties }
> = {
  Silver: {
    className: "border-white/50 text-[#111111]",
    style: {
      background: "linear-gradient(135deg, #f7f7f7 0%, #cfd3d8 45%, #ffffff 100%)",
    },
  },
  Gold: {
    className: "border-[#f0c14b] text-[#3b2a00]",
    style: {
      background: "linear-gradient(135deg, #fff6c8 0%, #f0c14b 48%, #ffe9a0 100%)",
    },
  },
  Platinum: {
    className: "border-[#c5d4ea] text-[#1b2433]",
    style: {
      background: "linear-gradient(135deg, #ffffff 0%, #dbe7f5 48%, #f4f7fb 100%)",
    },
  },
};

export default function PricingPlanCard({
  plan,
  onStart,
}: {
  plan: PricingPlan;
  onStart?: () => void;
}) {
  const metalName =
    TIER_BY_PLAN[plan.name] ??
    (plan.tier && plan.tier in metalChip
      ? (plan.tier as keyof typeof metalChip)
      : undefined);
  const chip = metalName ? metalChip[metalName] : undefined;

  return (
    <div
      className="relative flex h-full flex-col rounded-[28px] border border-white/10 bg-white/[0.04] p-6 md:p-7"
      style={{
        backgroundImage:
          "linear-gradient(141deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)",
      }}
    >
      {/* {plan.badge ? (
        <span className="absolute top-5 right-5 rounded-full bg-white/10 px-3 py-1 font-heading text-[11px] text-white/80">
          {plan.badge}
        </span>
      ) : null} */}

      <div className="flex items-start gap-3">
        <span className="relative mt-0.5 size-10 shrink-0">
          <Image src={plan.icon} alt="" fill sizes="40px" className="object-contain" />
        </span>
        <div className="min-w-0">
          <h3
            data-gsap-ignore
            className="min-h-[2.3em] font-heading text-[22px] leading-[1.15] font-semibold tracking-[-0.02em] text-white md:text-[26px]"
          >
            <PackageTitle name={plan.name} />
          </h3>
          {/* {chip && metalName ? (
            <span
              className={`mt-2 inline-flex rounded-full border px-2.5 py-0.5 font-heading text-[10px] font-semibold tracking-[0.14em] uppercase ${chip.className}`}
              style={chip.style}
            >
              {metalName}
            </span>
          ) : null} */}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between gap-3">
        <div className="min-w-0">
          {plan.compareAt ? (
            <p className="font-heading text-xs font-light text-white/40 line-through">
              {plan.compareAt}
            </p>
          ) : null}
          <p className="font-heading text-[40px] leading-none font-bold tracking-[-0.03em] text-white md:text-[44px]">
            {plan.price}
          </p>
        </div>
        <div className="shrink-0">
          {onStart ? (
            <Button size="md" onClick={onStart}>
              Start Now
            </Button>
          ) : (
            <Button size="md" href="/contact">
              Start Now
            </Button>
          )}
        </div>
      </div>

      <div aria-hidden className="mt-6 h-px w-full bg-white/10" />

      <ul className="package-features mt-5 flex h-[280px] flex-col gap-3 overflow-y-auto pr-2">
        {plan.features.map((feature, index) => (
          <li key={`${feature}-${index}`} className="flex items-start gap-3">
            <span className="relative mt-1.5 size-2.5 shrink-0">
              <Image src="/icons/tick.png" alt="" fill sizes="10px" className="object-contain" />
            </span>
            <span className="font-body text-sm leading-snug text-white/90">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
