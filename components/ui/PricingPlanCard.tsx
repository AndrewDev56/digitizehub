import Image from "next/image";
import Button from "@/components/ui/Button";
import type { PricingPlan } from "@/lib/data/pricingPlans";

export default function PricingPlanCard({ plan }: { plan: PricingPlan }) {
  return (
    <div
      className={`relative flex flex-col rounded-[20px] p-6 md:p-10 ${
        plan.featured
          ? ""
          : plan.badge === undefined && plan.name === "Custom"
            ? "bg-white/[0.02]"
            : "bg-white/5 border border-white/10"
      }`}
      style={
        plan.featured
          ? {
              backgroundImage:
                "linear-gradient(141deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)",
            }
          : undefined
      }
    >
      {plan.badge && (
        <span className="absolute top-6 right-6 rounded border border-white/24 bg-white/6 px-3 py-1.5 font-heading text-xs text-white md:top-10 md:right-10">
          {plan.badge}
        </span>
      )}

      <div className="flex items-center gap-4">
        <span className="flex size-[60px] shrink-0 items-center justify-center rounded-[10px] bg-white/6">
          <Image src={plan.icon} alt="" width={28} height={28} className="size-7" />
        </span>
        <h3 className="font-heading text-2xl font-semibold text-white md:text-3xl">
          {plan.name}
        </h3>
      </div>

      <div className="mt-8 flex items-center justify-between gap-4 md:mt-11">
        <div>
          <p className="font-heading text-sm font-light text-white/60">
            Starting from
          </p>
          <p className="font-heading text-3xl font-bold text-white md:text-[50px]">
            <span className="mr-0.5 text-lg font-normal">$</span>
            {plan.price}
          </p>
        </div>

        <Button size="md" href="/contact">
          Start Now
        </Button>
      </div>

      <div aria-hidden className="mt-8 h-px w-full bg-white/10 md:mt-11" />

      <ul className="mt-6 flex flex-col gap-4 md:mt-8">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-center gap-3">
            <Image
              src="/icons/tick.png"
              alt=""
              width={20}
              height={20}
              className="size-3 shrink-0"
            />
            <span className="font-body text-base text-white">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}