import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ServiceDetailHero from "@/components/service-detail/ServiceDetailHero";
import ServiceDetailSections from "@/components/service-detail/ServiceDetailSections";
import {
  uiUxDesignContent,
  uiUxShowcaseRows,
} from "@/lib/data/services/ui-ux-design";
import {
  mobileAppDesignContent,
  mobileAppShowcaseRows,
} from "@/lib/data/services/mobile-app-design";
import {
  brandingContent,
  brandingShowcaseRows,
} from "@/lib/data/services/branding";
import {
  socialMediaMarketingContent,
  socialMediaMarketingShowcaseRows,
} from "@/lib/data/services/social-media-marketing";
import { seoContent, seoShowcaseRows } from "@/lib/data/services/seo";
import type { ServiceDetailContent } from "@/lib/data/serviceDetail";
import type { AboutService } from "@/lib/data/aboutServices";
import CtaBanner from "@/components/home/CtaBanner";

type ServiceEntry = { content: ServiceDetailContent; showcaseRows: AboutService[] };

const contentBySlug: Record<string, ServiceEntry> = {
  "ui-ux-design": {
    content: uiUxDesignContent,
    showcaseRows: uiUxShowcaseRows,
  },
  "mobile-app-design": {
    content: mobileAppDesignContent,
    showcaseRows: mobileAppShowcaseRows,
  },
  branding: {
    content: brandingContent,
    showcaseRows: brandingShowcaseRows,
  },
  "social-media-marketing": {
    content: socialMediaMarketingContent,
    showcaseRows: socialMediaMarketingShowcaseRows,
  },
  seo: {
    content: seoContent,
    showcaseRows: seoShowcaseRows,
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
      <main className="overflow-x-clip bg-background">
        <ServiceDetailHero content={entry.content} />
        <ServiceDetailSections content={entry.content} showcaseRows={entry.showcaseRows} />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
