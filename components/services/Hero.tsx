import Image from "next/image";
import LogoMarquee from "../home/LogoMarquee";

export default function Hero() {
  const tags = ["Websites", "Apps", "Deployment", "SEO", "Branding", "Social"];

  return (
    <section className="relative isolate overflow-visible pt-[140px] pb-16 md:pt-[220px] md:pb-24">
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
        className="pointer-events-none absolute top-[360px] sm:top-[400px] md:top-[440px] -left-[80px] sm:-left-[120px] md:-left-[160px] z-0 w-[420px] sm:w-[580px] md:w-[750px] lg:w-[950px] select-none opacity-80"
      >
        <Image
          src="/images/ellipse-left.png"
          alt=""
          width={950}
          height={950}
          className="h-auto w-full object-contain pointer-events-none"
        />
      </div>

      <div className="relative mx-auto max-w-[1522px] px-6 text-center md:px-9">
        <p className="font-body text-sm tracking-[0.02em] text-white/70 md:text-xl">
          Web, Apps and SEO&nbsp; · &nbsp;Calgary and Georgia
        </p>

        <h1 className="mt-6 font-heading text-[36px] leading-[1.1] font-semibold tracking-[-0.02em] text-white sm:text-6xl lg:text-[90px]">
          <span className="block">Design, Build, Deploy, Rank, Maintain.</span>
          <span className="font-accent block font-bold italic">
            One team for all of it.
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl font-body text-sm text-white/80 md:text-xl">
          Most agencies stop at handover. We stay on the hook for what
          happens after.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-white/8 px-5 py-2 font-tag text-sm whitespace-nowrap text-white md:text-lg"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
       <div className="mt-16 md:mt-20">
              <LogoMarquee />
            </div>
    </section>
  );
}