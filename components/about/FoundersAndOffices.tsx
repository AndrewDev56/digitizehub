import { ceos, ceoIntro } from "@/lib/data/ceo";
import CeoCard from "@/components/ui/CeoCard";

export default function FoundersAndOffices() {
  return (
    <section className="relative isolate overflow-hidden bg-background py-24 md:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-[300px] top-1/3 size-[600px] rounded-full bg-accent-to/15 blur-[120px]"
      />

      <div className="relative mx-auto max-w-[1632px] px-6 md:px-9">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <h2 className="font-heading text-[36px] leading-[1.1] font-normal tracking-[-0.02em] text-white sm:text-6xl lg:text-[80px]">
            Meet Our <span className="font-accent italic">Founders</span>
          </h2>
          <p className="max-w-xl font-body text-lg font-light leading-[1.5] text-white/80 md:text-2xl">
            {ceoIntro}
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          <CeoCard ceo={ceos[0]} />
          <CeoCard ceo={ceos[1]} />
        </div>
      </div>
    </section>
  );
}