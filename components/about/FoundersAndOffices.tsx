import FounderCard from "@/components/ui/FounderCard";
import OfficeCard from "@/components/ui/OfficeCard";
import { founders } from "@/lib/data/founders";
import { offices } from "@/lib/data/offices";

export default function FoundersAndOffices() {
  const [founderOne, founderTwo] = founders;

  return (
    <section className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-[1632px] px-6 md:px-9">
        <h2 className="font-heading text-3xl font-normal tracking-[-0.02em] text-white md:text-6xl">
          Meet Our <span className="font-accent italic">Founders</span>
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-[60px]">
          <div>
            <FounderCard founder={founderOne} />
          </div>

          <div className="flex flex-col gap-[70px] md:mt-5">
            <p className="max-w-lg font-body text-base leading-relaxed font-light text-white/80 md:text-2xl">
              You will talk to the people doing the work. We are a 25 person
              team across Calgary and Atlanta, and someone replies to every
              inquiry within one business day.
            </p>
            <FounderCard founder={founderTwo} />
          </div>
        </div>

        <h2 className="mt-24 text-center font-heading text-2xl font-normal tracking-[-0.02em] text-white md:mt-32 md:text-5xl">
          Our Two <span className="font-accent italic">Offices</span>
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 md:mt-12 md:grid-cols-2">
          {offices.map((office) => (
            <OfficeCard key={office.city} office={office} />
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-xl text-center font-body text-sm text-white/50">
          A real address in each country means someone is always in your
          time zone, and you always know who you are dealing with.
        </p>
      </div>
    </section>
  );
}