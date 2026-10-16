import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative isolate overflow-visible pt-[140px] pb-16 text-center md:pt-[220px]">
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
        <p className="font-body text-sm tracking-[0.02em] text-white/70 md:text-xl">
          Web, Apps and SEO&nbsp; · &nbsp;Calgary and Georgia
        </p>

        <h1 className="mt-6 font-heading text-[28px] font-semibold leading-[1.15] tracking-[-0.02em] text-white sm:text-[36px] md:text-6xl lg:text-[90px]">
          If You&apos;re{" "}
          <span className="font-accent italic">Wondering</span>,
          <br />
          We&apos;re <span className="font-accent italic">Answering</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl font-body text-sm text-white/80 md:text-xl">
          Straightforward answers about pricing, timelines, ownership, and how
          we work. No fluff.
        </p>
      </div>
    </section>
  );
}
