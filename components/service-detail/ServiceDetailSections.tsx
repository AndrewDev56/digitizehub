"use client";

import Image from "next/image";
import Button from "@/components/ui/Button";
import TrustBadges from "@/components/service-detail/TrustBadges";
import type { AboutService } from "@/lib/data/aboutServices";
import type { ServiceDetailContent } from "@/lib/data/serviceDetail";
import {
  portfolioLarge,
  portfolioMedium,
  portfolioWide,
} from "@/lib/data/portfolio";
import ServiceDetailFaq from "@/components/service-detail/ServiceDetailFaq";
import ServiceInquiryForm from "@/components/service-detail/ServiceInquiryForm";
import Testimonials from "@/components/home/Testimonials";

const industryGridPositions = [
  { row: 1, column: 1 },
  { row: 2, column: 1 },
  { row: 3, column: 1 },
  { row: 4, column: 1 },
  { row: 1, column: 2 },
  { row: 2, column: 2 },
  { row: 3, column: 2 },
  { row: 1, column: 3 },
  { row: 2, column: 3 },
  { row: 3, column: 3 },
];

const caseStudies = [portfolioLarge, portfolioMedium, portfolioWide];

function TitleWithSegments({ lines }: { lines: ServiceDetailContent["servicesTitle"] }) {
  return (
    <>
      {lines.map((line, i) => (
        <span key={i} className={i === 0 ? "" : "block"}>
          {line.map((segment, j) => (
            <span key={j} className={segment.italic ? "font-accent italic" : ""}>
              {segment.text}
            </span>
          ))}
        </span>
      ))}
    </>
  );
}

function ServiceShowcaseRow({ service, reverse }: { service: AboutService; reverse: boolean }) {
  const mediaLabel = service.titleLines
    .flat()
    .map((segment) => segment.text)
    .join("");

  return (
    <article className={`mx-auto grid min-h-[680px] w-full max-w-[1632px] grid-cols-1 items-center gap-10 px-6 md:px-9 lg:grid-cols-[420px_1fr] lg:gap-12 xl:grid-cols-[500px_1fr] xl:gap-16 2xl:min-h-[820px] 2xl:grid-cols-[766px_1fr] 2xl:gap-[100px] 2xl:px-0 ${reverse ? "lg:[&>div:first-child]:order-2" : ""}`}>
      <div className="relative aspect-[766/806] w-full overflow-hidden rounded-[60px] border border-white/10 bg-[#111111] shadow-[0_0_0_1px_rgba(255,255,255,0.03)] 2xl:h-[806px] 2xl:aspect-auto">
        {service.image ? (
          <Image
            src={service.image}
            alt={mediaLabel}
            fill
            sizes="(min-width: 1536px) 766px, (min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        ) : (
          <video
            aria-label={`${mediaLabel} preview`}
            src={service.video}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="absolute inset-0 size-full  object-cover"
          />
        )}
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
        {/* <Button href="/contact" className="absolute bottom-5 left-5 md:bottom-7 md:left-7">
          Explore Service
        </Button> */}
      </div>

      <div className={reverse ? "lg:order-1" : ""}>
        <h3 className="max-w-[720px] font-heading text-4xl leading-[1.1] font-semibold text-white md:text-6xl 2xl:text-[64px]">
          {service.titleLines.map((line, lineIndex) => (
            <span key={lineIndex} className="block">
              {line.map((segment, segmentIndex) => (
                <span key={segmentIndex} className={segment.italic ? "font-accent italic" : ""}>
                  {segment.text}
                </span>
              ))}
            </span>
          ))}
        </h3>
        <p className="mt-6 max-w-[620px] font-body text-lg leading-[1.6] text-white/75 md:text-2xl">
          {service.description}
        </p>
        <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {service.features.map((feature) => (
            <li key={feature} className="flex items-center gap-3 font-body text-sm text-white md:text-base">
              <span aria-hidden className="font-body text-lg font-bold text-accent-to"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" viewBox="0 0 14 10" fill="none"><path d="M1 4.75L4.88917 8.5L12.6667 1" stroke="#FF0036" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>
              {feature}
            </li>
          ))}
        </ul>
        <p className="mt-8 font-body text-lg text-white/70 md:text-xl">{service.duration}</p>
      </div>
    </article>
  );
}

export default function ServiceDetailSections({
  content,
  showcaseRows,
}: {
  content: ServiceDetailContent;
  showcaseRows: AboutService[];
}) {
  return (
    <>
      <section className="relative bg-background py-20 md:py-28 lg:py-32 2xl:py-36">
        <div className="relative mx-auto max-w-[1632px] px-6 md:px-9 2xl:px-0">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16 2xl:gap-24">
            <div className="flex flex-col justify-between space-y-12 md:space-y-16 2xl:space-y-24">
              <h2 className="max-w-[720px] font-heading text-[44px] leading-[1.1] font-semibold text-white md:text-6xl 2xl:text-[76px]">
                <TitleWithSegments lines={content.captivatingTitle} />
              </h2>
              <div>
                <TrustBadges />
              </div>
            </div>

            <div className="flex flex-col space-y-10 lg:pt-16 2xl:pt-24">
              <p className="max-w-[780px] font-body text-lg leading-[1.6] text-white/80 md:text-2xl 2xl:text-[28px]">
                {content.captivatingBody}
              </p>
              <div className="flex flex-wrap gap-2.5 sm:gap-3">
                {content.captivatingPills.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex shrink-0 items-center justify-center rounded-[30px] bg-white/5 px-6 sm:px-[34px] py-3.5 sm:py-4 font-tag text-sm tracking-[-0.01em] whitespace-nowrap text-white md:text-[18px]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="relative flex flex-col gap-16 2xl:gap-[160px]">
        <div aria-hidden className="pointer-events-none absolute top-[100px] -right-[150px] size-[400px] rounded-full bg-red-600/70 blur-[120px] 2xl:size-[600px] 2xl:blur-[160px]" />
        <div className="mx-auto w-full max-w-[1632px] px-6 md:px-9 2xl:px-0">
          <h2 className="font-heading text-4xl leading-[1.05] font-semibold tracking-[-0.01em] text-white md:text-6xl 2xl:text-[76px]">
            <TitleWithSegments lines={content.servicesTitle} />
          </h2>
        </div>
        {showcaseRows.slice(0, 2).map((service, index) => (
          <ServiceShowcaseRow key={`${service.duration}-${index}`} service={service} reverse={service.imagePosition === "right"} />
        ))}
      </div>

      <section className="relative bg-background pt-24 md:pt-32 2xl:mt-[200px] 2xl:pt-0">
        <div aria-hidden className="pointer-events-none absolute top-[200px] -left-[150px] size-[400px] rounded-full bg-red-600/50 blur-[120px] 2xl:size-[600px] 2xl:blur-[160px]" />
        <div className="relative mx-auto max-w-[1632px] px-6 md:px-9 2xl:px-0">
          <h2 className="font-heading text-4xl leading-[1.05] font-semibold tracking-[-0.01em] text-white md:text-6xl 2xl:text-[76px]">
            <TitleWithSegments lines={content.processTitle} />
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6 2xl:mt-[52px] 2xl:gap-[60px]">
            {content.processSteps.map((step) => (
              <article key={step.title} className="flex flex-col rounded-[30px] border border-white/8 bg-white/4 p-7 md:p-10">
                <div className="flex size-14 items-center justify-center rounded-2xl bg-white/10 md:size-16 2xl:size-[100px] 2xl:rounded-[14px]">
                  <Image src="/icons/process/rocket.svg" alt="" width={50} height={50} className="size-7 md:size-8 2xl:size-[50px]" />
                </div>
                <div className="mt-8 md:mt-10">
                  <h3 className="font-heading text-2xl font-semibold text-white md:text-[30px]">{step.title}</h3>
                  <p className="mt-4 max-w-sm font-body text-base leading-7 text-white/65 md:text-[18px]">{step.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-background pt-24 md:pt-32 2xl:mt-[112px] 2xl:pt-0">
        <div aria-hidden className="pointer-events-none absolute top-[300px] -right-[150px] size-[400px] rounded-full bg-red-600/50 blur-[120px] 2xl:size-[600px] 2xl:blur-[160px]" />
        <div className="relative mx-auto max-w-[1632px] px-6 md:px-9 2xl:px-0">
          <h2 className="font-heading text-5xl leading-none font-semibold tracking-[-0.01em] text-white md:text-7xl 2xl:text-[100px]">
            <TitleWithSegments lines={content.industriesTitle} />
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-[repeat(4,130px)] lg:gap-6 2xl:mt-[100px]">
            {content.industriesChips.map((chip, i) => {
              const position = industryGridPositions[i] ?? { row: Math.floor(i / 3) + 1, column: (i % 3) + 1 };
              return (
                <div
                  key={chip}
                  style={{ gridRow: position.row, gridColumn: position.column }}
                  className="flex min-h-[100px] items-center rounded-[20px] bg-white/4 px-6 md:px-8 2xl:h-[130px]"
                >
                  <h3 className="font-heading text-xl font-light text-white md:text-2xl 2xl:text-[40px]">{chip}</h3>
                </div>
              );
            })}
          </div>
          <p className="mx-auto mt-12 max-w-[1080px] text-center font-body text-lg leading-[1.5] text-white/75 2xl:mt-[100px] 2xl:text-2xl">
            {content.industriesBody}
          </p>
        </div>
      </section>

      <section className="bg-background pt-24 md:pt-32 2xl:mt-[160px] 2xl:pt-0">
        <div className="mx-auto max-w-[1632px] px-6 md:px-9 2xl:px-0">
          <h2 className="mx-auto  text-center font-heading text-5xl leading-[1.2] font-semibold tracking-[-0.01em] text-white md:text-7xl 2xl:text-[100px]">
            <TitleWithSegments lines={content.caseStudiesTitle} />
          </h2>
          <div className="mt-16 flex flex-col gap-8 2xl:mt-[100px] 2xl:gap-[100px]">
            {caseStudies.map((item, index) => (
              <article key={`${item.image}-${index}`} className="group relative h-[360px] overflow-hidden rounded-[30px] border border-white/10 bg-[#111111] shadow-[0_0_0_1px_rgba(255,255,255,0.03)] md:h-[560px] 2xl:h-[900px]">
                <Image src={item.image} alt={item.title} fill sizes="(min-width: 1660px) 1632px, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.02]" />
                <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                <div className="absolute inset-x-6 bottom-6 flex flex-wrap items-end justify-between gap-5 md:inset-x-12 md:bottom-12">
                  <div>
                    <p className="font-tag text-xs uppercase tracking-[0.08em] text-white/70">{item.tags.join(" · ")}</p>
                    <h3 className="mt-3 font-heading text-3xl font-semibold text-white md:text-5xl">{item.title}</h3>
                  </div>
                  <span aria-hidden className="flex size-12 items-center justify-center border border-white/50 text-2xl text-white">↗</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      <ServiceDetailFaq />
      <ServiceInquiryForm />
    </>
  );
}
