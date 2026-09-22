import Image from "next/image";
import Button from "@/components/ui/Button";
import Tag from "@/components/ui/Tag";
import LogoMarquee from "@/components/home/LogoMarquee";
import { trustColumns } from "@/lib/data/heroTrust";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-background pt-[140px] pb-16 md:pt-[220px] md:pb-[60px]">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-[300px] -right-[300px] size-[600px] rounded-full bg-accent-to/15 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-[600px] -left-[300px] size-[600px] rounded-full bg-accent-to/15 blur-[120px]"
      />

      <div className="relative mx-auto max-w-[1632px] px-6 md:px-9">
        <p className="text-center font-body text-sm tracking-[0.01em] text-white/70 md:text-[18px]">
          Web, Apps and SEO&nbsp; · &nbsp;Calgary and Georgia
        </p>

        <h1 className="mx-auto mt-6 max-w-[1356px] text-center font-heading text-[38px] leading-[1.15] font-semibold tracking-[-0.02em] text-white sm:text-6xl lg:text-[90px] lg:leading-[104px]">
          We <span className="font-accent font-bold italic">Design it</span>,{" "}
          <span className="font-accent font-bold italic">Build it</span>,{" "}
          <span className="font-accent font-bold italic">Launch it</span>, & Get
          it Found.
        </h1>

        <div className="mt-14 grid grid-cols-1 gap-12 md:mt-[70px] md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {trustColumns.map((column) => (
            <div
              key={column.lines[0]}
              className="flex flex-col items-center gap-6 lg:items-start"
            >
              <div className="flex flex-col items-center gap-[18px] lg:items-end lg:self-stretch">
                <Image
                  src="/icons/star.png"
                  alt=""
                  width={18}
                  height={18}
                  className="size-[18px] self-center lg:self-start"
                />
                <p className="text-center font-tag text-sm leading-[1.5] font-medium text-white md:text-[18px] lg:max-w-[390px] lg:text-right">
                  {column.lines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-[6px] lg:justify-start">
                {column.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
            </div>
          ))}

          <div className="flex flex-col items-center gap-10 md:col-span-2 lg:col-span-1 lg:items-end lg:gap-[40px]">
            <div className="flex items-center gap-[18px]">
              <Image
                src="/images/trustpilot_logo.png"
                alt="Trustpilot"
                width={162}
                height={40}
                className="h-[34px] w-auto md:h-10"
              />
              <span aria-hidden className="h-[38px] w-px bg-white/10" />
              <Image
                src="/images/clutch_logo.png"
                alt="Clutch"
                width={94}
                height={26}
                className="h-[22px] w-auto md:h-[26px]"
              />
            </div>

            <Button href="/contact">Book A Call</Button>
          </div>
        </div>
      </div>

      <div className="mt-16 md:mt-[60px]">
        <LogoMarquee />
      </div>

      <div className="relative mt-10 flex flex-col items-center gap-2 md:mt-[30px]">
        <span className="font-heading text-sm tracking-[0.1em] text-white/56 uppercase md:text-base">
          Discover
        </span>
        <Image
          src="/icons/Down_Arrow_5.svg"
          alt=""
          width={40}
          height={40}
          className="size-8 opacity-70 md:size-10"
        />
      </div>
    </section>
  );
}