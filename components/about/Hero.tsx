import Image from "next/image";
import Button from "@/components/ui/Button";
import LogoMarquee from "@/components/home/LogoMarquee";
import FadeIn from "@/components/animation/FadeIn";
import RotatingWord from "@/components/animation/RotatingWord";
import AnimatedCounter from "@/components/animation/AnimatedCounter";

export default function Hero() {
  return (
    <section className="relative isolate overflow-visible pt-[140px] pb-16 md:pt-[220px] md:pb-[60px]">
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

      <div className="relative mx-auto max-w-[1100px] px-6 text-center md:px-9">
        <FadeIn direction="down">
          <p className="font-body text-sm tracking-[0.01em] text-white/70 md:text-[18px]">
            Web, Apps and SEO&nbsp; · &nbsp;Calgary and Georgia
          </p>
        </FadeIn>

        <FadeIn direction="up" delay={0.15}>
          <h1 className="mx-auto mt-6 font-heading text-[34px] leading-[1.2] font-semibold tracking-[-0.02em] text-white sm:text-5xl lg:text-[64px] lg:leading-[1.15]">
            <AnimatedCounter value="6" /> Years, <AnimatedCounter value="200" /> Projects,{" "}
            <span className="font-accent italic ">Two Countries, One Team.</span>
          </h1>
        </FadeIn>

        <FadeIn direction="up" delay={0.25}>
          <p className="mx-auto mt-6 max-w-lg font-body text-sm text-white/60 md:text-base">
            Digitize Hub is a full service digital agency with offices in Calgary and Georgia.
          </p>
        </FadeIn>

        <FadeIn direction="up" delay={0.35} className="mt-10 flex justify-center">
          <Button href="/contact">Tell Us About Your Project</Button>
        </FadeIn>
      </div>

      <div className="mt-16 md:mt-20">
        <LogoMarquee />
      </div>
    </section>
  );
}