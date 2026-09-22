import Image from "next/image";
import { clientLogos } from "@/lib/data/clientLogos";

export default function LogoMarquee() {
  return (
    <div className="relative w-full overflow-hidden py-10 md:h-[150px] md:py-0">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent md:w-40"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent md:w-40"
      />

      <div className="flex h-full w-max animate-marquee items-center gap-16 md:gap-[106px]">
        {[...clientLogos, ...clientLogos].map((logo, index) => (
          <Image
            key={`${logo.src}-${index}`}
            src={logo.src}
            alt={logo.alt}
            width={logo.width}
            height={logo.height}
            aria-hidden
            className="h-[32px] w-auto shrink-0 opacity-40 md:h-[42px]"
          />
        ))}
      </div>
    </div>
  );
}