"use client";

import Image from "next/image";
import PricingPlanCard from "@/components/ui/PricingPlanCard";
import { landingPackages } from "@/lib/data/landingPackages";
import type { SelectedPackage } from "@/lib/data/landing";

export default function LandingPackages({
  selectedPackage,
  activeService,
  onActiveService,
  onSelectPackage,
}: {
  selectedPackage: SelectedPackage | null;
  activeService: string;
  onActiveService: (id: string) => void;
  onSelectPackage: (pkg: SelectedPackage) => void;
}) {
  const service =
    landingPackages.find((item) => item.id === activeService) ?? landingPackages[0];

  return (
    <section id="packages" className="relative isolate scroll-mt-28 overflow-visible pb-section">
      <div
        aria-hidden="true"
        data-gsap-ambient
        data-gsap-scale="1.1"
        data-gsap-opacity="0.8"
        data-gsap-duration="10"
        className="pointer-events-none absolute top-1/4 -left-[100px] z-0 w-[420px] opacity-75 select-none sm:-left-[160px] sm:w-[600px] md:-left-[200px] md:w-[780px] lg:w-[950px]"
      >
        <Image
          src="/images/ellipse-left.png"
          alt=""
          width={950}
          height={950}
          className="pointer-events-none h-auto w-full object-contain"
        />
      </div>
      <div className="mx-auto max-w-[1632px] px-6 md:px-9">
        <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
          <p className="font-body text-sm tracking-[0.08em] text-white/50 uppercase">
            Our Pricing Plans
          </p>
          <h2 className="mt-3 font-heading text-3xl leading-tight font-semibold tracking-[-0.02em] text-white sm:text-4xl md:text-5xl">
            Professional Packages For{" "}
            <span className="font-accent font-normal italic">Growing Brands</span>
          </h2>
          <p className="mt-4 font-body text-sm text-white/70 md:text-lg">
            Click Start Now on any plan. The form opens with that package selected.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          {landingPackages.map((item) => {
            const isActive = item.id === service.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onActiveService(item.id)}
                className={`rounded-full px-4 py-2 font-heading text-sm whitespace-nowrap transition-all duration-300 sm:px-5 sm:py-2.5 sm:text-base ${
                  isActive
                    ? "bg-white font-semibold text-black"
                    : "border border-white/15 bg-white/[0.06] font-normal text-white/70 hover:border-white/30 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        <div
          key={service.id}
          className={`mt-8 grid grid-cols-1 items-stretch gap-6 ${
            service.plans.length > 3 ? "md:grid-cols-2 xl:grid-cols-3" : "md:grid-cols-3"
          }`}
        >
          {service.plans.map((plan) => {
            const isSelected =
              selectedPackage?.serviceId === service.id &&
              selectedPackage?.planName === plan.name &&
              selectedPackage?.price === plan.price;

            return (
              <div
                key={`${service.id}-${plan.name}-${plan.price}`}
                className={
                  isSelected
                    ? "rounded-[22px] ring-2 ring-brand-red ring-offset-2 ring-offset-background"
                    : ""
                }
              >
                <PricingPlanCard
                  plan={plan}
                  onStart={() =>
                    onSelectPackage({
                      serviceId: service.id,
                      serviceLabel: service.label,
                      planName: plan.name,
                      tier: plan.tier ?? plan.name,
                      price: plan.price,
                    })
                  }
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
