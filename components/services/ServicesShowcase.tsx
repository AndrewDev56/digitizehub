import ServiceRow from "@/components/ui/ServiceRow";
import { aboutServices } from "@/lib/data/aboutServices";

export default function ServicesShowcase() {
  return (
    <section className="relative isolate overflow-hidden bg-background py-24 md:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-40 size-[500px] rounded-full bg-accent-to/15 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-[60%] -left-40 size-[500px] rounded-full bg-accent-to/15 blur-[120px]"
      />

      <div className="relative mx-auto flex max-w-[1632px] flex-col gap-16 px-6 md:gap-24 md:px-9">
        {aboutServices.map((service, index) => (
          <div key={service.description}>
            <ServiceRow service={service} />
            {index < aboutServices.length - 1 && (
              <div
                aria-hidden
                className="mt-16 h-px w-full bg-white/10 md:mt-24"
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}