export default function OurStory() {
  return (
    <section className="relative isolate overflow-hidden bg-background py-24 md:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -right-40 size-[500px] rounded-full bg-accent-to/20 blur-[120px]"
      />

      <div className="relative mx-auto max-w-[1100px] px-6 md:px-9">
        <h2 className="text-center font-heading text-3xl font-normal tracking-[-0.02em] text-white md:text-5xl">
          Our <span className="font-accent italic">Story</span>
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-10 md:mt-20 md:grid-cols-2 md:gap-16">
          <p className="font-body text-sm leading-relaxed text-white/60 md:text-base">
            Digitize Hub started in [year] because we kept meeting the same
            business owner. They had paid an agency, waited months, and
            ended up with a slow site, a bill they did not understand, and
            nobody who could tell them what happened after launch.
          </p>

          <p className="font-body text-sm leading-relaxed text-white/60 md:mt-16 md:text-base">
            So we built the opposite. Fixed quotes before anything starts.
            One team that designs, builds, deploys, ranks, and maintains, so
            nobody can point at anybody else when something breaks. And when
            the project ends, every file and account is yours.
          </p>
        </div>

        <div className="relative mt-24 md:mt-32">
          <span
            aria-hidden
            className="pointer-events-none absolute -top-6 right-0 font-heading text-8xl text-white/5 select-none md:text-9xl"
          >
            &rdquo;
          </span>
          <p className="max-w-xl font-accent text-2xl text-white italic md:text-4xl">
            <span className="font-heading not-italic font-semibold">
              One Team
            </span>{" "}
            from first sketch to still running{" "}
            <span className="font-heading not-italic font-semibold">
              Two Years
            </span>{" "}
            later.
          </p>
        </div>
      </div>
    </section>
  );
}