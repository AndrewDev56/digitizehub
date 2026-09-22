import Image from "next/image";
import Button from "@/components/ui/Button";
import FilterPill from "@/components/ui/FilterPill";
import { industryFilters, serviceFilters } from "@/lib/data/workFilters";

export default function FiltersSidebar() {
  return (
    <div
  className="rounded-[20px] border border-white/20 p-6 md:p-8"
  style={{
    backgroundImage:
      "linear-gradient(146deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)",
  }}
>
      <div className="flex items-center justify-between">
        <h3 className="font-heading text-2xl font-semibold text-white">
          Industries
        </h3>
        <span className="flex size-6 shrink-0 items-center justify-center">
          <Image
            src="/icons/arrow-up.png"
            alt=""
            fill={false}
            width={12}
            height={12}
            className="h-auto w-3 object-contain"
          />
        </span>
      </div>
      <div className="mt-6 flex flex-wrap gap-2">
        {industryFilters.map((filter) => (
          <FilterPill key={filter.label} {...filter} />
        ))}
      </div>

      <div className="mt-8 flex items-center justify-between">
        <h3 className="font-heading text-2xl font-semibold text-white">
          Services
        </h3>
        <span className="flex size-6 shrink-0 items-center justify-center">
          <Image
            src="/icons/arrow-up.png"
            alt=""
            fill={false}
            width={12}
            height={12}
            className="h-auto w-3 object-contain"
          />
        </span>
      </div>
      <div className="mt-6 flex flex-wrap gap-2">
        {serviceFilters.map((filter) => (
          <FilterPill key={filter.label} {...filter} />
        ))}
      </div>

      <div className="mt-8">
        <Button href="/contact">Let&apos;s Discuss Your Project</Button>
      </div>
    </div>
  );
}