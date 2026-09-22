import Image from "next/image";

export default function CtaBanner() {
  return (
    <section className="bg-background px-6 py-24 md:px-9 md:py-32">
      <div
        className="mx-auto max-w-[1400px] rounded-[40px] px-8 py-16 text-center md:rounded-[60px] md:px-16 md:py-24"
        style={{
          background: "linear-gradient(135deg, #ffffff 0%, #ffd9e5 100%)",
        }}
      >
        <h2 className="mx-auto max-w-3xl font-heading text-3xl font-semibold tracking-[-0.02em] text-black md:text-5xl">
          A <span className="font-accent text-accent-to italic">20 Minute Call</span> will
          tell you exactly what your site is missing.
        </h2>

        <p className="mt-4 font-body text-sm text-black/60 md:text-base">
          No pitch deck, no pressure. If we are not the right fit, we will
          say so.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            type="button"
            className="flex items-center gap-3 rounded-full bg-black py-3 pr-3 pl-6 font-heading text-sm font-semibold text-white"
          >
            Book a 20 Minute Call
            <span className="flex size-7 items-center justify-center rounded-full bg-white">
              <Image
                src="/icons/Arrow_Right.png"
                alt=""
                width={12}
                height={12}
                className="size-3 invert"
              />
            </span>
          </button>

          <button
            type="button"
            className="flex items-center gap-3 rounded-full border border-black/20 py-3 pr-3 pl-6 font-heading text-sm font-semibold text-black"
          >
            Explore Our Portfolio
            <span className="flex size-7 items-center justify-center rounded-full bg-black">
              <Image
                src="/icons/Arrow_Right.png"
                alt=""
                width={12}
                height={12}
                className="size-3"
              />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}