import Image from "next/image";

export default function TrustBadges() {
  return (
    <div className="flex items-center justify-center gap-6 pb-0 md:gap-10">
      <Image
        src="/icons/clutch-service-img.png"
        alt="Clutch"
        width={192}
        height={94}
        className="h-[48px] w-auto object-contain md:h-[60px] lg:h-[76px] 2xl:h-[94px]"
      />
      <Image
        src="/icons/google-service-image.png"
        alt="Google"
        width={186}
        height={94}
        className="h-[48px] w-auto object-contain md:h-[60px] lg:h-[76px] 2xl:h-[94px]"
      />
    </div>
  );
}