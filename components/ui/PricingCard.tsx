import Image from "next/image";
import type { PricingPlan } from "@/lib/data/pricing";

export default function PricingCard({
  plan,
  isLast,
}: {
  plan: PricingPlan;
  isLast: boolean;
}) {
  return (
    <div
      className={`flex flex-col gap-6 rounded-[24px] border border-white/[0.08] px-6 py-8 md:px-8 mx-4 my-4 ${
        plan.featured ? "relative bg-white/[0.03]" : "bg-white/[0.02]"
      }`}
    >
      {plan.badge && (
        <span className="absolute top-6 right-6 rounded-full bg-white px-3 py-1 font-tag text-[11px] font-medium text-black">
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
            <span className="text-lg font-normal text-white/60">$</span>
            {plan.price}
          </p>
        </div>

        <button
          type="button"
          className="flex items-center gap-2 rounded-full bg-white py-2 pr-2 pl-4 font-heading text-sm font-semibold text-black"
        >
          Start Now
          <span className="flex size-6 items-center justify-center rounded-full bg-black">
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

      <ul className="flex flex-col gap-3">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-center gap-2">
            <Image
              src="/icons/tick.png"
              alt=""
              width={14}
              height={14}
              className="size-3.5 shrink-0"
            />
            <span className="font-body text-sm text-white/80">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}