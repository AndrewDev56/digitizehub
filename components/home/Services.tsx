import Image from "next/image";
import { services } from "@/lib/data/services";

/**
 * PLACEHOLDER STRUCTURE — confirmed pattern only (large image on first item,
 * remaining items as divider rows with an arrow). Not yet verified against
 * Figma nodes for exact copy/spacing.
 */
export default function Services() {
  const first = services[0];
  const rest = services.slice(1);

  return (
    <section className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-[1632px] px-6 md:px-9">
        <div className="text-center">
          <h2 className="mt-4 font-heading text-4xl font-semibold tracking-[-0.02em] text-white md:text-6xl">
 What We Do 
          </h2>
          <span className="font-tag text-sm tracking-[0.02em]  uppercase">
            One team from first sketch to still running two years later
          </span>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 md:mt-20 lg:grid-cols-2 lg:gap-16">
          

          <ul className="flex flex-col">
            {rest.map((service) => (
              <li key={service.href} className="border-b border-white/10">
                
                < a  href={service.href}
                  className="group flex items-center justify-between py-6 md:py-8"
                >
                  <span className="font-heading text-xl font-semibold text-white md:text-3xl">
                    {service.title}
                  </span>
                  <Image
                    src="/icons/arrow_right.png"
                    alt=""
                    width={20}
                    height={20}
                    className="size-5 transition-transform group-hover:translate-x-1 md:size-6"
                  />
                </a>
              </li>
            ))}
          </ul>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[30px] md:rounded-[40px]">
            <Image
              src="/images/what-we-do-img.png"
              alt={first.title}
              fill
              className="object-cover"
            />
            <h3 className="absolute bottom-8 left-8 font-heading text-2xl font-semibold text-white md:text-3xl">
              {first.title}
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}