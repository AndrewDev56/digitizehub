import Image from "next/image";

export default function BlogHero() {
  return (
    <div className="relative isolate overflow-visible pt-[140px] pb-16 text-center md:pt-[220px]">
      {/* Ambient Eclipse Glow - Top Right */}
      <div
        aria-hidden="true"
        data-gsap-ambient
        data-gsap-scale="1.12"
        data-gsap-opacity="0.95"
        data-gsap-duration="8"
        className="pointer-events-none absolute -top-[60px] md:-top-[100px] -right-[60px] md:-right-[100px] z-0 w-[420px] sm:w-[580px] md:w-[750px] lg:w-[950px] select-none opacity-85"
      >
        <Image
          src="/images/ellipse-top-right.png"
          alt=""
          width={950}
          height={950}
          priority
          className="h-auto w-full object-contain pointer-events-none"
        />
      </div>

     

      <div className="relative mx-auto max-w-4xl px-6">
        <h1 className="font-heading text-[36px] leading-[1.1] font-normal tracking-[-0.02em] text-white sm:text-6xl lg:text-[90px]">
          Explore Topics That Matter To Your{" "}
          <span className="font-accent italic">Business</span>
        </h1>

        <p className="mx-auto mt-6 max-w-xl font-body text-lg tracking-[-0.02em] text-white/80 md:text-xl">
          Practical web, app, and SEO advice. No fluff.
        </p>
      </div>
    </div>
  );
}