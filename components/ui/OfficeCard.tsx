"use client";

import Image from "next/image";
import Link from "next/link";
import type { Office } from "@/lib/data/offices";

export default function OfficeCard({ office }: { office: Office }) {
  return (
    <div className="group relative flex flex-col justify-between rounded-[24px] border border-white/[0.08] bg-[#111113]/90 p-7 sm:p-8 md:rounded-[28px] md:p-9 shadow-xl backdrop-blur-md transition-all duration-300">
      <div>
        <h3 className="font-heading text-xl sm:text-4xl font-semibold text-white tracking-tight pb-6 border-b border-white/[0.08]">
          <span className="font-accent italic ">{office.city}</span> Office
        </h3>

        <div className="mt-12 flex flex-col gap-5 md:gap-12">
        <div className="flex items-center gap-8">
        <span className="flex size-16 shrink-0 items-center justify-center rounded-xl bg-white/[0.05] border border-white/[0.08]">
        <Image
                src="/icons/telephone.png"
                alt=""
                width={40}
                height={40}
                className="size-8 opacity-80"
              />
            </span>
            <a
              href={`tel:+19296216055`}
              className="font-body text-xl sm:text-2xl font-normal text-white/80 transition-colors hover:text-white"
            >
              +1 (929) 621-6055
            </a>
          </div>

          <div className="flex items-center gap-8">
            <span className="flex size-16 shrink-0 items-center justify-center rounded-xl bg-white/[0.05] border border-white/[0.08]">
              <Image
                src="/icons/message.png"
                alt=""
                width={40}
                height={40}
                className="size-8 opacity-80"
              />
            </span>
            <span className="font-body text-xl sm:text-2xl font-normal leading-relaxed text-white/70 ">
              {office.address}
            </span>
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-end">
        <Link
          href={office.mapUrl || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 font-heading text-xl font-semibold text-brand-red transition-all duration-300  group-hover:translate-x-0.5"
        >
          <span>View on map</span>
          <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
    </div>
  );
}
