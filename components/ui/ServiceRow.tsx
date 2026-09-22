"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import ServiceFeatureList from "@/components/ui/ServiceFeatureList";
import type { AboutService } from "@/lib/data/aboutServices";
import FadeIn from "@/components/animation/FadeIn";

export default function ServiceRow({ service }: { service: AboutService }) {
  const imageBlock = (
    <FadeIn direction={service.imagePosition === "left" ? "right" : "left"}>
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.4 }}
        className="relative aspect-[766/806] w-full overflow-hidden rounded-[32px] md:rounded-[60px] border border-white/10 shadow-2xl group cursor-pointer"
      >
        <Image
          src={service.image}
          alt=""
          fill
          sizes="(min-width: 768px) 766px, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
        />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </motion.div>
    </FadeIn>
  );

  const textBlock = (
    <FadeIn direction={service.imagePosition === "left" ? "left" : "right"} delay={0.15}>
      <div className="flex flex-col justify-center">
        <h3 className="font-heading text-3xl leading-[1.1] font-normal tracking-[-0.02em] text-white md:text-6xl">
          {service.titleLines.map((line, lineIndex) => (
            <span key={lineIndex} className="block">
              {line.map((segment, segIndex) => (
                <span
                  key={segIndex}
                  className={segment.italic ? "font-accent italic text-accent-from" : ""}
                >
                  {segment.text}
                </span>
              ))}
            </span>
          ))}
        </h3>

        <p className="mt-6 max-w-lg font-body text-lg text-white/90 md:text-2xl">
          {service.description}
        </p>

        <div className="mt-8">
          <ServiceFeatureList features={service.features} />
        </div>

        <p className="mt-6 font-body text-lg text-accent-from font-semibold md:text-2xl">
          {service.duration}
        </p>

        <div className="mt-8">
          <Button href="/contact">Explore Service</Button>
        </div>
      </div>
    </FadeIn>
  );

  return (
    <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-[100px]">
      {service.imagePosition === "left" ? (
        <>
          {imageBlock}
          {textBlock}
        </>
      ) : (
        <>
          <div className="md:order-2">{imageBlock}</div>
          <div className="md:order-1">{textBlock}</div>
        </>
      )}
    </div>
  );
}