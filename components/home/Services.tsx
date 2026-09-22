"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { services } from "@/lib/data/services";
import FadeIn from "@/components/animation/FadeIn";
import StaggerContainer, { StaggerItem } from "@/components/animation/StaggerContainer";

export default function Services() {
  const first = services[0];
  const rest = services.slice(1);

  return (
    <section className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-[1632px] px-6 md:px-9">
        <FadeIn direction="up">
          <div className="text-center">
            <h2 className="mt-4 font-heading text-4xl font-semibold tracking-[-0.02em] text-white md:text-6xl">
              What We Do
            </h2>
            <span className="font-tag text-sm tracking-[0.02em] text-white/60 uppercase block mt-2">
              One team from first sketch to still running two years later
            </span>
          </div>
        </FadeIn>

        <div className="mt-16 grid grid-cols-1 gap-12 md:mt-20 lg:grid-cols-2 lg:gap-16 items-center">
          <StaggerContainer staggerChildren={0.12} className="flex flex-col">
            {rest.map((service) => (
              <StaggerItem key={service.href} className="border-b border-white/10">
                <Link
                  href={service.href}
                  className="group flex items-center justify-between py-6 md:py-8 transition-colors hover:px-4 rounded-xl hover:bg-white/5 duration-300"
                >
                  <div className="flex items-center gap-4">
                    <span className="size-2 rounded-full bg-accent-to opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <span className="font-heading text-xl font-semibold text-white md:text-3xl transition-transform duration-300 group-hover:translate-x-2">
                      {service.title}
                    </span>
                  </div>
                  <div className="flex size-10 items-center justify-center rounded-full bg-white/5 transition-all duration-300 group-hover:bg-accent-to group-hover:scale-110">
                    <Image
                      src="/icons/Arrow_Right.png"
                      alt=""
                      width={20}
                      height={20}
                      className="size-5 transition-transform group-hover:translate-x-0.5 md:size-6 invert"
                    />
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn direction="left" delay={0.2}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
              className="relative aspect-[4/3] overflow-hidden rounded-[30px] md:rounded-[40px] border border-white/10 shadow-2xl group cursor-pointer"
            >
              <Image
                src="/images/what-we-do-img.png"
                alt={first.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-108"
              />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 flex items-center justify-between">
                <h3 className="font-heading text-2xl font-semibold text-white md:text-3xl">
                  {first.title}
                </h3>
                <span className="flex size-12 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md transition-all duration-300 group-hover:bg-accent-to group-hover:scale-110">
                  ↗
                </span>
              </div>
            </motion.div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}