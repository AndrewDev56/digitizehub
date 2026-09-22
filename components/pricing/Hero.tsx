import LogoMarquee from "../home/LogoMarquee";

export default function Hero() {
  const tags = ["Websites", "Apps", "Deployment", "SEO", "Branding", "Social"];

  return (
    <section className="relative isolate overflow-hidden bg-background pt-[160px] pb-16 md:pt-[240px] md:pb-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-[300px] -right-[300px] size-[600px] rounded-full bg-accent-to/15 blur-[120px]"
      />

      <div className="relative mx-auto max-w-[1522px] px-6 text-center md:px-9">
        <p className="font-body text-sm tracking-[0.02em] text-white/70 md:text-xl">
          Web, Apps and SEO&nbsp; · &nbsp;Calgary and Georgia
        </p>

        <h1 className="mt-6 font-heading text-[36px] leading-[1.1] font-semibold tracking-[-0.02em] text-white sm:text-6xl lg:text-[90px]">
          <span className="block">
            Fixed <span className="font-accent italic">Prices</span>. No
            Hourly <span className="font-accent italic">Billing</span>.
          </span>
          <span className="block">
            No <span className="font-accent italic">Surprises</span>
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl font-body text-sm text-white/80 md:text-xl">
          Most agencies make you book a call to hear a number. Here they are.
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