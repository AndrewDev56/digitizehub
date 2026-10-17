import Image from "next/image";
import type { LegalDocument } from "@/lib/data/legal";

export default function LegalHero({ doc }: { doc: LegalDocument }) {
  return (
    <section className="relative isolate overflow-visible pt-[140px] pb-12 text-center md:pt-[220px] md:pb-16">
      <div
        aria-hidden="true"
        data-gsap-ambient
        data-gsap-scale="1.12"
        data-gsap-opacity="0.95"
        data-gsap-duration="8"
        className="pointer-events-none absolute -top-[60px] -right-[60px] z-0 w-[420px] select-none opacity-85 sm:w-[580px] md:-top-[100px] md:-right-[100px] md:w-[750px] lg:w-[950px]"
      >
        <Image
          src="/images/ellipse-top-right.png"
          alt=""
          width={950}
          height={950}
          priority
          className="pointer-events-none h-auto w-full object-contain"
        />
      </div>

      <div className="relative mx-auto max-w-[1522px] px-6 md:px-9">
        <p className="font-body text-sm tracking-[0.02em] text-white/70 md:text-xl">
          {doc.kicker}
          &nbsp; · &nbsp;Effective {doc.effectiveDate}
        </p>

        <h1 className="mt-6 font-heading text-[28px] font-semibold leading-[1.15] tracking-[-0.02em] text-white sm:text-[36px] md:text-6xl lg:text-[90px]">
          {doc.titleBefore}
          <span className="font-accent italic">{doc.accent}</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl font-body text-sm text-white/80 md:text-xl">
          {doc.description}
        </p>
      </div>
    </section>
  );
}
