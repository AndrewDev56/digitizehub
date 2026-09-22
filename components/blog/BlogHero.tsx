export default function BlogHero() {
  return (
    <div className="relative isolate overflow-hidden pt-[160px] pb-16 text-center md:pt-[240px]">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-[300px] -right-[300px] size-[600px] rounded-full bg-accent-to/15 blur-[120px]"
      />

      <div className="relative mx-auto max-w-4xl px-6">
        <h1 className="font-heading text-[36px] leading-[1.1] font-normal tracking-[-0.02em] text-white sm:text-6xl lg:text-[90px]">
          Explore Topics That Matter To Your{" "}
          <span className="font-accent italic">Business</span>
        </h1>

        <p className="mx-auto mt-6 max-w-xl font-body text-lg tracking-[-0.02em] text-white/80 md:text-xl">
          Practical web, app, and SEO advice. No fluff.
        </p>
      </div>
    </div>
  );
}