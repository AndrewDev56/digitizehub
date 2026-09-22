import Image from "next/image";
import type { AppPricingPlan } from "@/lib/data/appPricingPlans";

export default function AppPricingPlanCard({
  plan,
  billing,
}: {
  plan: AppPricingPlan;
  billing: "monthly" | "quarterly";
}) {
  const price = billing === "monthly" ? plan.priceMonthly : plan.priceQuarterly;

  return (
    <div
      className={`relative flex h-full flex-col rounded-[20px] p-10 ${
        plan.popular ? "bg-gradient-to-br from-white/8 to-white/3" : "bg-white/2"
      }`}
    >
      {plan.popular && (
        <span className="absolute top-4 right-6 rounded border border-white/24 bg-white/6 px-3 py-1.5 font-heading text-xs text-white md:top-5 md:right-10">
          Most Popular
        </span>
      )}

      <div className="flex items-center gap-5">
        <div className="flex size-[60px] shrink-0 items-center justify-center rounded-[10px] bg-white/6">
          <Image
            src={plan.icon}
            alt=""
            width={28}
            height={28}
            className="size-7"
          />
        </div>
        <h3 className="font-heading text-[30px] font-semibold tracking-tight text-white">
          {plan.name}
        </h3>
      </div>

      <div className="mt-11 flex items-end justify-between gap-4">
        <div>
          <p className="font-body text-base text-white/60">Starting from</p>
          <p className="mt-1 font-heading leading-none text-white">
            <span className="align-top text-2xl">$</span>
            <span className="text-[50px] font-bold tracking-tight">
              {price.toLocaleString()}
            </span>
          </p>
        </div>
        <button
          type="button"
          className="flex h-[52px] w-[170px] shrink-0 items-center justify-between rounded-full bg-white pl-6 pr-2 font-body text-[15.6px] font-semibold tracking-tight text-background transition-opacity hover:opacity-90"
        >
          Start Now
          <span className="flex size-[35px] items-center justify-center rounded-full bg-background">
            <Image
              src="/icons/arrow-right.png"
              alt=""
              width={16}
              height={16}
              className="size-4"
            />
          </span>
        </button>
      </div>

      <div className="mt-9 h-px w-full bg-white/10" />

      <ul className="mt-6 flex flex-1 flex-col gap-4">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-center gap-3">
            <Image
              src="/icons/tick.png"
              alt=""
              width={20}
              height={20}
              className="size-3 shrink-0"
            />
            <span className="font-body text-lg text-white">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}