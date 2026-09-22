export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-background pt-[160px] pb-16 text-center md:pt-[240px]">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-[300px] -right-[300px] size-[600px] rounded-full bg-accent-to/15 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-[900px] -left-[300px] size-[600px] rounded-full bg-accent-to/15 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-[2200px] -right-[300px] size-[600px] rounded-full bg-accent-to/15 blur-[120px]"
      />

      <div className="relative mx-auto max-w-[1522px] px-6 md:px-9">
        <h1 className="font-heading text-[36px] font-semibold tracking-[-0.02em] text-white sm:text-6xl lg:text-[90px]">
          Tell Us About Your{" "}
          <span className="font-accent font-bold italic">Project</span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl font-body text-lg text-white/80 md:text-xl">
          Give us the full scoop – we&apos;re ready to jump in as soon as
          possible!
        </p>
      </div>
    </section>
  );
}