import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/pricing/Hero";
import PricingPlans from "@/components/pricing/PricingPlans";
import AppPricingPlans from "@/components/pricing/AppPricingPlans";
import CtaBanner from "@/components/home/CtaBanner";
import Testimonials from "@/components/home/Testimonials";

export default function Pricing() {
  return (
    <>
      <Header active="Pricing" />
      <main>
        <Hero />
        <PricingPlans />
        <AppPricingPlans />
        <Testimonials />
                            <CtaBanner />   
      </main>
      <Footer />
    </>
  );
}