import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative isolate overflow-visible pt-[140px] pb-16 text-center md:pt-[220px]">
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

      {/* Ambient Eclipse Glow - Left */}
      <div
        aria-hidden="true"
        data-gsap-ambient
        data-gsap-scale="1.1"
        data-gsap-opacity="0.9"
        data-gsap-duration="10"
        className="pointer-events-none absolute top-[280px] sm:top-[340px] -left-[80px] sm:-left-[120px] md:-left-[160px] z-0 w-[420px] sm:w-[580px] md:w-[750px] lg:w-[950px] select-none opacity-80"
      >
        <Image
          src="/images/ellipse-left.png"
          alt=""
          width={950}
          height={950}
          className="h-auto w-full object-contain pointer-events-none"
        />
      </div>

      <div className="relative mx-auto max-w-[1522px] px-6 md:px-9">
        <h1 className="font-heading text-[36px] font-semibold tracking-[-0.02em] text-white sm:text-6xl lg:text-[90px]">
          Tell Us About Your{" "}
          <span className="font-accent font-bold italic">Project</span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl font-body text-lg text-white/80 md:text-xl">
          Give us the full scoop – we&apos;re ready to jump in as soon as
          possible!
        </p>
      </div>
    </section>
  );
}