import Image from "next/image";
import type { Ceo } from "@/lib/data/ceo";

export default function CeoCard({ ceo }: { ceo: Ceo }) {
  return (
    <div className="relative min-h-[500px] overflow-hidden rounded-[40px] bg-white p-10 md:min-h-[650px] md:p-12">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-1/2 size-[400px] -translate-y-1/2 rounded-full bg-rose-300/60 blur-[100px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-16 bottom-10 size-[160px] rounded-full bg-rose-200/50 blur-[80px]"
      />

      <div className="absolute -right-18 bottom-0 h-[85%] w-[90%]">
        <Image
          src={ceo.photo}
          alt={ceo.name}
          fill
          className="object-contain object-bottom"
          sizes="(min-width: 768px) 786px, 90vw"
        />
      </div>

      <div className="relative flex h-full flex-col">
        <h3 className="font-heading text-[32px] font-semibold tracking-tight text-[#111] md:text-4xl">
          {ceo.name}
        </h3>
        <p className="mt-1 font-body text-lg font-light tracking-tight text-[#111]">
          {ceo.role}
        </p>

        {ceo.bio && (
          <p className="mt-12 max-w-xs font-body text-base font-medium leading-[1.4] tracking-tight text-[#111] md:mt-16">
            {ceo.bio}
          </p>
        )}

        
      <a    href="#"
          aria-label={`${ceo.name} on LinkedIn`}
          className="mt-auto flex size-[80px] items-center justify-center rounded-full bg-white shadow-md"
        >
          <Image
            src="/icons/linkedin.png"
            alt=""
            width={30}
            height={30}
            className="size-[30px]"
          />
        </a>
      </div>
    </div>
  );
}