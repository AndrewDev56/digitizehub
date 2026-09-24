import Button from "@/components/ui/Button";
import ServiceFeatureList from "@/components/ui/ServiceFeatureList";
import type { AboutService } from "@/lib/data/aboutServices";

export default function ServiceRow({ service }: { service: AboutService }) {
  const mediaBlock = (
    <div className="relative aspect-[766/806] w-full overflow-hidden rounded-[32px] md:rounded-[60px]">
      <video
        src={service.video}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="absolute inset-0 size-full object-cover"
      />
    </div>
  );

  const textBlock = (
    <div className="flex flex-col justify-center">
      <h3 className="font-heading text-3xl leading-[1.1] font-normal tracking-[-0.02em] text-white md:text-6xl">
        {service.titleLines.map((line, lineIndex) => (
          <span key={lineIndex} className="block">
            {line.map((segment, segIndex) => (
              <span
                key={segIndex}
                className={segment.italic ? "font-accent italic" : ""}
              >
                {segment.text}
              </span>
            ))}
          </span>
        ))}
      </h3>

      <p className="mt-6 max-w-lg font-body text-lg text-white md:text-2xl">
        {service.description}
      </p>

      <div className="mt-8">
        <ServiceFeatureList features={service.features} />
      </div>

      <p className="mt-6 font-body text-lg text-white md:text-2xl">
        {service.duration}
      </p>

      <div className="mt-8">
        <Button href="/services">Explore Service</Button>
      </div>
    </div>
  );

  return (
    <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-[100px]">
      {service.imagePosition === "left" ? (
        <>
          {mediaBlock}
          {textBlock}
        </>
      ) : (
        <>
          <div className="md:order-2">{mediaBlock}</div>
          <div className="md:order-1">{textBlock}</div>
        </>
      )}
    </div>
  );
}