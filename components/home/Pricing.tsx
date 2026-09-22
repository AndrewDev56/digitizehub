"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import PricingCard from "@/components/ui/PricingCard";
import { pricingPlans } from "@/lib/data/pricing";
import FadeIn from "@/components/animation/FadeIn";
import StaggerContainer, { StaggerItem } from "@/components/animation/StaggerContainer";

export default function Pricing() {
  const [billing, setBilling] = useState<"monthly" | "quarterly">("monthly");

  return (
    <section className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-[1632px] px-6 py-8 md:px-9 bg-white/[0.02] ring-1 ring-white/10 rounded-[32px]">
        <FadeIn direction="up">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <h2 className="max-w-xl font-heading text-3xl font-semibold tracking-[-0.02em] text-white md:text-5xl">
                Fixed <span className="font-accent italic text-accent-from">Prices</span>. You
                see them before we{" "}
                <span className="font-accent italic text-accent-from">Get Started</span>.
              </h2>
              <p className="mt-3 font-body text-sm text-white/50 md:text-base">
                No hourly billing. No lock-in. Every file, account, and
                password is yours at handover.
              </p>
            </div>

            <div className="flex shrink-0 items-center gap-3 bg-white/5 p-2 rounded-full border border-white/10">
              <span
                className={`font-tag text-sm transition-colors ${billing === "monthly" ? "text-white font-semibold" : "text-white/40"}`}
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
                className="relative h-6 w-11 rounded-full bg-white/20 transition-colors"
              >
                <motion.span
                  animate={{ x: billing === "quarterly" ? 20 : 2 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  className="absolute top-0.5 size-5 rounded-full bg-white shadow-md"
                />
              </button>
              <span
                className={`font-tag text-sm transition-colors ${billing === "quarterly" ? "text-white font-semibold" : "text-white/40"}`}
              >
                Quarterly
              </span>
            </div>
          </div>
        </FadeIn>

        <div className="mt-12 overflow-hidden md:mt-16">
          <StaggerContainer staggerChildren={0.15} className="grid grid-cols-1 md:grid-cols-3">
            {pricingPlans.map((plan, index) => (
              <StaggerItem key={plan.name}>
                <PricingCard
                  plan={plan}
                  isLast={index === pricingPlans.length - 1}
                />
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn direction="up" delay={0.3} className="flex justify-center py-6">
            <Link
              href="/pricing"
              className="group flex items-center gap-3 rounded-full bg-white py-2.5 pr-3 pl-6 font-heading text-sm font-medium text-black transition-all hover:bg-white/90 hover:scale-105"
            >
              See Full Pricing
              <span className="flex size-7 items-center justify-center rounded-full bg-black transition-transform duration-300 group-hover:rotate-45">
                <Image
                  src="/icons/Arrow_Right.png"
                  alt=""
                  width={12}
                  height={12}
                  className="size-3 invert"
                />
              </span>
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}