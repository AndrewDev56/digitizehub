import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/services/Hero";
import ServicesShowcase from "@/components/services/ServicesShowcase";
import WhyOneTeam from "@/components/services/WhyOneTeam";
import CtaBanner from "@/components/home/CtaBanner";
import Testimonials from "@/components/home/Testimonials";

export default function Services() {
  return (
    <>
      <Header active="Services" />
      <main>
        <Hero />
        <ServicesShowcase />
        <WhyOneTeam />
          <Testimonials />
                    <CtaBanner />
      </main>
      <Footer />
    </>
  );
}