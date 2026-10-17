import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/pricing/Hero";
import PricingPlans from "@/components/pricing/PricingPlans";
import CtaBanner from "@/components/home/CtaBanner";
import Testimonials from "@/components/home/Testimonials";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Fixed quotes in writing before work starts. Website, app, branding, social, and SEO plans from Digitize Hub.",
};

export default function Pricing() {
  return (
    <>
      <Header active="Pricing" />
      <main className="overflow-x-clip">
        <Hero />
        <PricingPlans />
        <Testimonials />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}