import Image from "next/image";
import { founder } from "@/lib/data/founder";
import { offices } from "@/lib/data/offices";
import OfficeCard from "@/components/ui/OfficeCard";

export default function FounderAndOffices() {
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="mx-auto grid max-w-[1632px] grid-cols-1 gap-16 px-6 md:px-9 lg:grid-cols-2">
        <div>
          <h2 className="font-heading text-3xl font-semibold text-white md:text-5xl">
            Founder
          </h2>
          <p className="mt-3 max-w-md font-body text-sm text-white/60 md:text-base">
            {founder.intro}
          </p>

          <div
  className="relative mt-8 aspect-[4/3] overflow-hidden rounded-2xl md:aspect-[16/11]"
  style={{
    background: "linear-gradient(160deg, #ffd9e5 0%, #ff5277 100%)",
  }}
>
  {/* Founder photo — anchored bottom-right, cut at the bottom edge */}
  <div className="absolute bottom-0 right-0 h-[85%] w-[65%]">
    <Image
      src={founder.photo}
      alt={founder.name}
      fill
      className="object-contain object-bottom left-[30px]"
      priority
    />
  </div>

  {/* Name + role top-left */}
  <div className="absolute top-6 left-6 z-10">
    <h3 className="font-heading text-xl font-semibold text-black md:text-2xl">
      {founder.name}
    </h3>
    <p className="font-body text-sm text-black/60">{founder.role}</p>
  </div>

  {/* LinkedIn + dots bottom-left */}
  <div className="absolute bottom-6 left-6 z-10 flex items-center justify-between gap-4">
    <a
      href="#"
      aria-label="LinkedIn"
      className="flex size-8 items-center justify-center rounded-full "
    >
      <Image
        src="/icons/linkedin.png"
        alt=""
        width={18}
        height={18}
        className="size-8"
      />
    </a>
    <div className="flex gap-1.5">
      <span className="size-1.5 rounded-full bg-black" />
      <span className="size-1.5 rounded-full bg-black/40" />
      <span className="size-1.5 rounded-full bg-black/40" />
    </div>
  </div>
</div>
        </div>

        <div>
          <h2 className="font-heading text-3xl font-semibold text-white md:text-5xl">
            Offices
          </h2>
          <div className="mt-8 flex flex-col gap-4">
            {offices.map((office) => (
              <OfficeCard key={office.city} office={office} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}