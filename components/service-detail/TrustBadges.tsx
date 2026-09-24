import Image from "next/image";

export default function TrustBadges() {
  return (
    <div className="flex justify-center gap-8 pb-16 md:pb-24">
      <Image
        src="/images/badges/clutch.svg"
        alt="Clutch"
        width={192}
        height={94}
        className="h-[60px] w-auto object-contain"
      />
      <Image
        src="/images/badges/google.svg"
        alt="Google"
        width={186}
        height={94}
        className="h-[60px] w-auto object-contain"
      />
    </div>
  );
}