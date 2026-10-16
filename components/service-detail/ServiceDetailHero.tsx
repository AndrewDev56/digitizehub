import type { ServiceDetailContent } from "@/lib/data/serviceDetail";
import Image from "next/image";
import Tag from "@/components/ui/Tag";

export default function ServiceDetailHero({
  content,
}: {
  content: ServiceDetailContent;
}) {
  return (
    <section className="relative isolate overflow-visible text-white">
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
      <div className="mx-auto max-w-[1632px] px-6 pt-[212px] pb-24 md:px-9 md:pb-32 lg:pb-20 2xl:px-0 2xl:pb-0 ">
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

        <div className="relative mt-12 md:mt-16 2xl:mt-24">
          <div
            aria-hidden="true"
            data-gsap-ambient
            data-gsap-scale="1.1"
            data-gsap-opacity="0.9"
            data-gsap-duration="10"
            className="pointer-events-none absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 w-[650px] sm:w-[950px] md:w-[1300px] lg:w-[1600px] select-none opacity-85"
          >
            <Image
              src="/images/ellipse-center.png"
              alt=""
              width={1600}
              height={1600}
              priority
              className="h-auto w-full object-contain pointer-events-none"
            />
          </div>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-12 -left-12 z-0 size-[320px] md:size-[500px] rounded-full bg-red-600/30 blur-[130px]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-12 -right-12 z-0 size-[380px] md:size-[580px] rounded-full bg-red-600/35 blur-[140px]"
          />

          <div
            aria-label={`${content.heroImageAlt}`}
            className="relative z-10 overflow-hidden rounded-[28px] sm:rounded-[36px] md:rounded-[44px] border border-white/10 bg-[#070709] p-5 sm:p-8 md:p-12 lg:p-14 shadow-2xl backdrop-blur-md"
          >
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
            <div className="relative  overflow-hidden rounded-xl sm:rounded-2xl md:rounded-[20px] aspect-[16/10] sm:aspect-[16/12] bg-black/60 shadow-inner w-[80%] m-auto">
              <video
                src={
                  content.heroVideo ||
                  (content.slug === "mobile-app-design"
                    ? "/videos/home-screen-app.mp4"
                    : content.slug === "branding"
                    ? "/videos/Branding-logo-design.mp4"
                    : content.slug === "seo"
                    ? "/videos/seo.mp4"
                    : content.slug === "social-media-marketing"
                    ? "/videos/Social Media.mp4"
                    : "/videos/home-website-design-video.mp4")
                }
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-cover"
              />
            </div>

            <p className="mt-5 text-center font-body text-xs text-white/50 sm:text-sm md:mt-7">
              {content.heroImageAlt}
            </p>
          </div>
        </div>
      </div>

      <div className="relative mt-16 2xl:mt-28 w-full min-h-[600px] h-screen py-16 md:py-24 flex items-center flex-col justify-center overflow-hidden bg-black text-center px-6 md:px-9 bg-[url('/images/service-banner-text-middle.png')] bg-cover bg-center bg-no-repeat">
        {/* <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 select-none"
          style={{
            background: `
              radial-gradient(circle 650px at 85% 18%, rgba(235, 30, 60, 0.42) 0%, rgba(160, 15, 35, 0.26) 40%, rgba(35, 3, 7, 0.05) 70%, transparent 85%),
              radial-gradient(circle 600px at 15% 22%, rgba(210, 25, 50, 0.36) 0%, rgba(135, 12, 28, 0.2) 40%, rgba(25, 2, 5, 0.04) 70%, transparent 85%),
              radial-gradient(ellipse 75% 55% at 50% 28%, rgba(165, 18, 38, 0.28) 0%, rgba(70, 6, 15, 0.12) 50%, transparent 80%),
              linear-gradient(180deg, rgba(45, 5, 10, 0.65) 0%, rgba(22, 2, 5, 0.45) 45%, rgba(4, 0, 1, 0.9) 80%, #000000 100%)
            `,
          }}
        /> */}

        {/* <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 grid grid-cols-12 select-none"
        >
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="relative h-full"
              style={{
                background:
                  "linear-gradient(90deg, rgba(255, 110, 130, 0.09) 0%, rgba(255, 70, 90, 0.02) 40%, rgba(0, 0, 0, 0.35) 100%)",
              }}
            />
          ))}
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 select-none"
          style={{
            background: `
              linear-gradient(180deg, #000000 0%, transparent 14%, transparent 74%, #000000 100%),
              radial-gradient(ellipse 95% 85% at 50% 50%, transparent 45%, rgba(0, 0, 0, 0.65) 100%)
            `,
          }}
        /> */}

        <div className="relative z-10 mx-auto max-w-[1356px] text-center">
          <h2
            data-gsap-ignore
            className="relative flex w-full flex-col items-center justify-center gap-y-[0.18em] text-center font-heading text-[36px] font-semibold tracking-[-0.04em] text-white leading-[1.18] sm:text-[42px] md:text-[68px] md:leading-[1.16] lg:text-[80px] 2xl:text-[120px] 2xl:leading-[1.12]"
          >
            {content.heroTitle.map((line, i) => (
              <span key={i} className="block max-w-full text-balance">
                {line.map((seg, j) => (
                  <span
                    key={j}
                    className={
                      seg.italic
                        ? "font-accent italic align-baseline"
                        : "align-baseline"
                    }
                  >
                    {seg.text}
                  </span>
                ))}
              </span>
            ))}
          </h2>

          <p className="relative mx-auto mt-8 max-w-[1356px] font-body text-lg leading-[1.5] font-light text-white/80 md:mt-10 md:text-[28px] 2xl:mt-[48px] 2xl:text-[36px]">
            {content.heroBody}
          </p>
        </div>
      </div>
    </section>
  );
}
