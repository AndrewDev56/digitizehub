import type { ServiceDetailContent } from "@/lib/data/serviceDetail";
import Image from "next/image";
import Tag from "@/components/ui/Tag";

export default function ServiceDetailHero({
  content,
}: {
  content: ServiceDetailContent;
}) {
  return (
    <section className="relative isolate overflow-visible text-white 2xl:h-[3312px]">
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
        className="pointer-events-none absolute top-[360px] sm:top-[420px] -left-[80px] sm:-left-[120px] md:-left-[160px] z-0 w-[420px] sm:w-[580px] md:w-[750px] lg:w-[950px] select-none opacity-80"
      >
        <Image
          src="/images/ellipse-left.png"
          alt=""
          width={950}
          height={950}
          className="h-auto w-full object-contain pointer-events-none"
        />
      </div>
      <div className="mx-auto max-w-[1632px] px-6 pt-[112px] pb-24 md:px-9 md:pb-32 lg:pb-20 2xl:px-0 2xl:pb-0 2xl:pt-[500px]">
        <h1 className="font-heading text-[32px] leading-[1.1] font-semibold tracking-[-0.01em] text-white md:text-[56px] 2xl:text-[100px]">
          {content.heroH1.map((line, i) => (
            <span key={i} className="block">
              {line.map((seg, j) => (
                <span key={j} className={seg.italic ? "font-accent italic" : ""}>
                  {seg.text}
                </span>
              ))}
            </span>
          ))}
        </h1>

        <p className="mt-6 max-w-[1632px] font-body text-[22px] leading-[1.4] tracking-[-0.02em] text-white md:text-[30px] 2xl:mt-10 2xl:text-[40px]">
          {content.heroSubtext}
        </p>

        <div className="mt-8 flex flex-wrap gap-[6px] md:mt-10 2xl:mt-[60px]">
          {content.eyebrowTags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>

        <div className="relative">
          <div
            aria-label="UI and UX design project preview"
            className="relative mt-12 aspect-[4/3] overflow-hidden rounded-[30px] border border-white/10 bg-[linear-gradient(90deg,#0b0b0d_0%,#2c0f1b_32%,#1b1c22_100%)] shadow-[0_0_0_1px_rgba(255,255,255,0.03)] md:mt-16 md:aspect-[16/9] 2xl:mt-[240px] 2xl:aspect-auto 2xl:h-[1130px]"
          >
            <Image
              src="/images/what-we-do-img.png"
              alt={content.heroImageAlt}
              fill
              sizes="(min-width: 1660px) 1632px, 100vw"
              priority
              className="object-cover opacity-55 mix-blend-screen"
            />
            <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/15 to-black/75" />
          </div>
          <div aria-hidden className="pointer-events-none absolute right-0 bottom-0 size-[300px] translate-x-1/3 translate-y-1/3 rounded-full bg-red-600/50 blur-[100px] 2xl:size-[600px] 2xl:blur-[160px]" />
        </div>

        <div className="relative mx-auto mt-16 max-w-[1356px] text-center 2xl:mt-[359px]">
          <h2 data-gsap-ignore className="relative font-heading text-[42px] leading-[0.9] font-semibold tracking-[-0.05em] text-white md:text-[80px] 2xl:text-[120px] 2xl:leading-[0.85]">
            {content.heroTitle.map((line, i) => (
              <span key={i} className="block">
                {line.map((seg, j) => (
                  <span key={j} className={seg.italic ? "font-accent italic text-[var(--color-accent-1)]" : ""}>
                    {seg.text}
                  </span>
                ))}
              </span>
            ))}
          </h2>

          <p className="relative mx-auto mt-6 max-w-[1356px] font-body text-lg leading-[1.4] font-light text-white/80 md:text-[30px] 2xl:mt-[60px] 2xl:text-[36px]">
            {content.heroBody}
          </p>
        </div>
      </div>
    </section>
  );
}
