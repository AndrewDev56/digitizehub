import type { ServiceDetailContent } from "@/lib/data/serviceDetail";

export default function ServiceDetailHero({
  content,
}: {
  content: ServiceDetailContent;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-background pt-[160px] pb-16 text-center md:pt-[240px]">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-[300px] -right-[300px] size-[600px] rounded-full bg-accent-to/15 blur-[120px]"
      />

      <div className="relative mx-auto max-w-[1356px] px-6 md:px-9">
        <h1 className="font-heading text-[40px] leading-[1.2] font-semibold tracking-[-0.02em] text-white md:text-[80px]">
          {content.heroTitle.map((line, i) => (
            <span key={i} className="block">
              {line.map((seg, j) => (
                <span key={j} className={seg.italic ? "font-accent italic" : ""}>
                  {seg.text}
                </span>
              ))}
            </span>
          ))}
        </h1>

        <p className="mx-auto mt-6 max-w-3xl font-body text-lg font-light text-white/70 md:text-2xl">
          {content.heroSubtext}
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-1.5">
          {content.eyebrowTags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-white/8 px-5 py-2 font-tag text-sm whitespace-nowrap text-white md:text-lg"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}