"use client";

import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/animation/FadeIn";

export default function CtaBanner() {
  return (
    <section className="bg-background px-6 py-24 md:px-9 md:py-32">
      <FadeIn direction="up">
        <div
          className="relative mx-auto max-w-[1400px] overflow-hidden rounded-[28px] px-8 py-16 text-center shadow-2xl transition-transform duration-300 hover:scale-[1.01] md:rounded-[36px] md:px-16 md:py-24"
          style={{
            background: "linear-gradient(135deg, #ffffff 0%, #f8d5df 100%)",
          }}
        >
          <div
            data-gsap-ambient
            data-gsap-scale="1.2"
            data-gsap-opacity="0.6"
            data-gsap-duration="6"
            className="pointer-events-none absolute -top-24 -right-24 size-[350px] rounded-full bg-accent-from/30 blur-[60px]"
          />

          <h2 className="relative z-10 mx-auto max-w-3xl font-heading text-3xl font-semibold tracking-[-0.02em] text-black md:text-[52px] md:leading-[1.1]">
            A <span className="font-accent text-accent-to italic">20 Minute Call</span> will
            tell you exactly what your site is missing.
          </h2>

          <p className="relative z-10 mt-4 font-body text-sm text-black/75 md:text-base">
            No pitch deck, no pressure. If we are not the right fit, we will say so.
          </p>

          <div className="relative z-10 mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="group flex items-center gap-3 rounded-full bg-black py-3.5 pr-3.5 pl-7 font-heading text-sm font-semibold text-white shadow-xl transition-all hover:bg-neutral-900 hover:scale-105"
            >
              Book a 20 Minute Call
              <span className="flex size-8 items-center justify-center rounded-full bg-white transition-transform duration-300 group-hover:rotate-45">
                <Image
                  src="/icons/Arrow_Right.png"
                  alt=""
                  width={12}
                  height={12}
                  className="size-3 invert"
                />
              </span>
            </Link>

            <Link
              href="/work"
              className="group flex items-center gap-3 rounded-full border border-black/20 bg-white/40 py-3.5 pr-3.5 pl-7 font-heading text-sm font-semibold text-black transition-all hover:bg-black/5 hover:scale-105"
            >
              Explore Our Portfolio
              <span className="flex size-8 items-center justify-center rounded-full bg-black transition-transform duration-300 group-hover:rotate-45">
                <Image
                  src="/icons/Arrow_Right.png"
                  alt=""
                  width={12}
                  height={12}
                  className="size-3"
                />
              </span>
            </Link>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}