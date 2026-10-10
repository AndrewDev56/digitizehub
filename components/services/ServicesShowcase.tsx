import Image from "next/image";
import ServiceRow from "@/components/ui/ServiceRow";
import { aboutServices } from "@/lib/data/aboutServices";

export default function ServicesShowcase() {
  return (
    <section className="relative isolate overflow-visible py-24 md:py-32">
      {/* Ambient Eclipse Glow - Left */}
      <div
        aria-hidden="true"
        data-gsap-ambient
        data-gsap-scale="1.1"
        data-gsap-opacity="0.8"
        data-gsap-duration="10"
        className="pointer-events-none absolute top-[25%] -left-[100px] sm:-left-[160px] md:-left-[200px] z-0 w-[420px] sm:w-[600px] md:w-[780px] lg:w-[950px] select-none opacity-75"
      >
        <Image
          src="/images/ellipse-left.png"
          alt=""
          width={950}
          height={950}
          className="h-auto w-full object-contain pointer-events-none"
        />
      </div>

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