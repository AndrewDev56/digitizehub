import OfficeCard from "@/components/ui/OfficeCard";
import { offices } from "@/lib/data/offices";

export default function ContactOffices() {
  return (
    <section className="bg-background pb-24 md:pb-32">
      <div className="mx-auto max-w-[1632px] px-6 md:px-9">
        <h2 className="text-center font-heading text-3xl font-normal text-white italic md:text-6xl">
          Our <span className="font-accent italic">Offices</span> and{" "}
          <span className="font-accent italic">Contacts</span> Info
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-2">
          {offices.map((office) => (
            <OfficeCard key={office.city} office={office} />
          ))}
        </div>
      </div>
    </section>
  );
}