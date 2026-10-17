import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/animation/FadeIn";
import type { LegalDocument } from "@/lib/data/legal";

export default function LegalBody({
  doc,
  otherHref,
  otherLabel,
}: {
  doc: LegalDocument;
  otherHref: string;
  otherLabel: string;
}) {
  return (
    <section className="relative isolate overflow-hidden pb-16 md:pb-24">
      <div
        aria-hidden="true"
        data-gsap-ambient
        data-gsap-scale="1.1"
        data-gsap-opacity="0.8"
        data-gsap-duration="10"
        className="pointer-events-none absolute top-[12%] -left-[100px] z-0 w-[420px] select-none opacity-75 sm:-left-[160px] sm:w-[600px] md:-left-[200px] md:w-[780px] lg:w-[950px]"
      >
        <Image
          src="/images/ellipse-left.png"
          alt=""
          width={950}
          height={950}
          className="pointer-events-none h-auto w-full object-contain"
        />
      </div>

      <div className="relative mx-auto max-w-[920px] px-4 sm:px-6 md:px-9">
        <FadeIn direction="up">
          <div className="space-y-4 md:space-y-5">
            <article className="rounded-[20px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md sm:p-8 md:rounded-[24px] md:p-10">
              {doc.intro.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 40)}
                  className="mt-4 font-body text-sm leading-relaxed text-white/75 first:mt-0 md:text-base md:leading-7"
                >
                  {paragraph}
                </p>
              ))}
            </article>

            {doc.sections.map((section) => (
              <article
                key={section.number}
                className="rounded-[20px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md sm:p-8 md:rounded-[24px] md:p-10"
              >
                <h2 className="flex items-baseline gap-3 font-heading text-xl font-semibold tracking-[-0.02em] text-white sm:gap-4 sm:text-2xl md:text-[28px]">
                  <span className="font-accent text-lg italic text-brand-red sm:text-xl">
                    {section.number}.
                  </span>
                  {section.title}
                </h2>

                {section.blocks.map((block, i) => {
                  if (block.type === "paragraph") {
                    return (
                      <p
                        key={`${section.number}-p-${i}`}
                        className="mt-4 font-body text-sm leading-relaxed text-white/75 md:text-base md:leading-7"
                      >
                        {block.text}
                      </p>
                    );
                  }

                  if (block.type === "list") {
                    return (
                      <ul
                        key={`${section.number}-l-${i}`}
                        className="mt-4 list-none space-y-2.5"
                      >
                        {block.items.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-3 font-body text-sm leading-relaxed text-white/75 md:text-base md:leading-7"
                          >
                            <span
                              aria-hidden="true"
                              className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-red"
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                    );
                  }

                  return (
                    <div
                      key={`${section.number}-c-${i}`}
                      className="mt-5 space-y-1 font-body text-sm text-white/80 md:text-base"
                    >
                      <p className="font-heading font-semibold text-white">
                        {block.company}
                      </p>
                      <p>
                        Email:{" "}
                        <a
                          href={`mailto:${block.email}`}
                          className="text-white transition-colors hover:text-brand-red"
                        >
                          {block.email}
                        </a>
                      </p>
                      <p>
                        Website:{" "}
                        <a
                          href={block.website}
                          target="_blank"
                          rel="noreferrer"
                          className="text-white transition-colors hover:text-brand-red"
                        >
                          {block.website}
                        </a>
                      </p>
                    </div>
                  );
                })}
              </article>
            ))}

            <p className="px-1 pt-4 text-center font-body text-sm text-white/50 md:text-base">
              Also see our{" "}
              <Link
                href={otherHref}
                className="text-white/80 underline-offset-4 transition-colors hover:text-white hover:underline"
              >
                {otherLabel}
              </Link>
              .
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
