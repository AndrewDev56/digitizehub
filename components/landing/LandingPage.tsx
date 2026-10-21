"use client";

import { useCallback, useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Gallery from "@/components/landing/Gallery";
import LandingHero from "@/components/landing/LandingHero";
import LandingTrusted from "@/components/landing/LandingTrusted";
import LandingAgencyIntro from "@/components/landing/LandingAgencyIntro";
import LandingStats from "@/components/landing/LandingStats";
import LandingLeadAsset from "@/components/landing/LandingLeadAsset";
import LandingServices from "@/components/landing/LandingServices";
import LandingProcess from "@/components/landing/LandingProcess";
import LandingPackages from "@/components/landing/LandingPackages";
import LandingAlwaysOn from "@/components/landing/LandingAlwaysOn";
import LandingGrowthFocused from "@/components/landing/LandingGrowthFocused";
import LandingResults from "@/components/landing/LandingResults";
import LandingTechStack from "@/components/landing/LandingTechStack";
import LandingCta from "@/components/landing/LandingCta";
import LandingFormPopup from "@/components/landing/LandingFormPopup";
import Testimonials from "@/components/home/Testimonials";
import { landingPackages } from "@/lib/data/landingPackages";
import type { SelectedPackage } from "@/lib/data/landing";

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

export default function LandingPage() {
  const [selectedPackage, setSelectedPackage] = useState<SelectedPackage | null>(null);
  const [activeService, setActiveService] = useState(landingPackages[0].id);
  const [formOpen, setFormOpen] = useState(false);

  const openForm = useCallback(() => setFormOpen(true), []);
  const closeForm = useCallback(() => setFormOpen(false), []);

  const handleSelectPackage = useCallback((pkg: SelectedPackage) => {
    setSelectedPackage(pkg);
    setActiveService(pkg.serviceId);
    setFormOpen(true);
  }, []);

  const handleSelectService = useCallback((packageId: string) => {
    setActiveService(packageId);
    window.requestAnimationFrame(() => scrollToId("packages"));
  }, []);

  return (
    <>
      <Header hideNav onContact={openForm} />
      <main className="overflow-x-clip">
        <LandingHero
          selectedPackage={selectedPackage}
          onExploreServices={() => scrollToId("landing-services")}
          onGetStarted={openForm}
        />
        {/* <LandingTrusted /> */}
        <LandingAgencyIntro onStart={openForm} />
        <LandingStats />
        <LandingLeadAsset onStart={openForm} />
        <LandingServices onSelectService={handleSelectService} />
        <LandingProcess />
        <LandingPackages
          selectedPackage={selectedPackage}
          activeService={activeService}
          onActiveService={setActiveService}
          onSelectPackage={handleSelectPackage}
        />
        <LandingAlwaysOn />
        <LandingGrowthFocused />
        <LandingResults />
        <Gallery onDiscuss={openForm} />
        <LandingTechStack />
        {/* <Testimonials /> */}
        <LandingCta onStart={openForm} />
      </main>
      <Footer compact />
      <LandingFormPopup
        open={formOpen}
        onClose={closeForm}
        selectedPackage={selectedPackage}
      />
    </>
  );
}
