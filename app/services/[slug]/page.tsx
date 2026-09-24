import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ServiceDetailHero from "@/components/service-detail/ServiceDetailHero";
import TrustBadges from "@/components/service-detail/TrustBadges";
import ServiceRow from "@/components/ui/ServiceRow";
import {
  uiUxDesignContent,
  uiUxShowcaseRows,
} from "@/lib/data/services/ui-ux-design";
import type { ServiceDetailContent } from "@/lib/data/serviceDetail";
import type { AboutService } from "@/lib/data/aboutServices";
import CtaBanner from "@/components/home/CtaBanner";
import Testimonials from "@/components/home/Testimonials";

type ServiceEntry = { content: ServiceDetailContent; showcaseRows: AboutService[] };

const contentBySlug: Record<string, ServiceEntry> = {
  "ui-ux-design": {
    content: uiUxDesignContent,
    showcaseRows: uiUxShowcaseRows,
  },
};

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = contentBySlug[slug];
  if (!entry) return notFound();

  return (
    <>
      <Header active="Services" />
      <main>
        <ServiceDetailHero content={entry.content} />
        <TrustBadges />
        <div className="flex flex-col gap-16 bg-background pb-24 md:gap-24 md:pb-32">
          <div className="mx-auto w-full max-w-[1632px] px-6 md:px-9">
            {entry.showcaseRows.map((row, index) => (
              <div key={row.duration + index} className={index > 0 ? "mt-16 md:mt-24" : ""}>
                <ServiceRow service={row} />
              </div>
            ))}
          </div>
        </div>
        <Testimonials />
                    <CtaBanner />
      </main>
      <Footer />
    </>
  );
}