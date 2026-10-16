import Image from "next/image";
import Link from "next/link";
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
    <div className="relative flex h-full flex-col justify-between rounded-[24px] sm:rounded-[28px] border border-white/10 bg-[#141414] p-6 sm:p-7 md:p-8 backdrop-blur-md transition-all duration-300 hover:border-white/20">
      <div>
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <span className="flex size-14 shrink-0 items-center justify-center rounded-xl ">
              <Image
                src={plan.icon}
                alt=""
                width={40}
                height={40}
                className="size-12 object-contain"
              />
            </span>
            <span className="font-heading text-3xl font-medium text-white/90">
              {plan.name}
            </span>
          </div>
          {plan.badge && (
            <span className="shrink-0 rounded-full border border-white/15 bg-white/5 px-3 py-1 font-tag text-xs font-medium text-white/80">
              {plan.badge}
            </span>
          )}
        </div>

        <div className="mt-6 flex items-center justify-between gap-4">
          <h3 className="font-heading text-2xl sm:text-4xl font-medium tracking-[-0.01em] text-white">
            {tier}
          </h3>
          <Link
            href="/contact"
            className="group relative flex shrink-0 items-center gap-2 overflow-hidden rounded-full bg-white py-1.5 pr-1.5 pl-4 font-heading text-xs sm:text-sm font-semibold text-black transition-all duration-300 active:scale-95"
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute right-[6px] top-1/2 -translate-y-1/2 size-6 sm:size-7 rounded-full bg-brand-red scale-0 opacity-0 transition-all duration-500 ease-out group-hover:scale-[35] group-hover:opacity-100"
            />
            <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
              Start Now
            </span>
            <span className="relative z-10 flex size-6 sm:size-7 items-center justify-center rounded-full bg-black transition-colors duration-300 group-hover:bg-transparent">
              <Image
                src="/icons/Arrow_Right.png"
                alt=""
                width={10}
                height={10}
                className="size-2.5 sm:size-3 transition-transform duration-300 ease-out group-hover:-rotate-45 "
              />
            </span>
          </Link>

        </div>

        <div aria-hidden className="my-5 h-px w-full bg-white/10" />

        <ul className="flex flex-col gap-3">
          {plan.features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-3 font-body text-xs sm:text-lg text-white/70"
            >
              <span
                aria-hidden
                className="mt-2 shrink-0 text-xs sm:text-sm font-bold text-white/50"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" viewBox="0 0 14 10" fill="none">
<path d="M1 4.75L4.88917 8.5L12.6667 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
              </span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
