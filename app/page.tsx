import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import Portfolio from "@/components/home/Portfolio";
import Lifecycle from "@/components/home/Lifecycle";
import Services from "@/components/home/Services";
import Pricing from "@/components/home/Pricing";
import ProjectTimeline from "@/components/home/ProjectTimeline";
import Testimonials from "@/components/home/Testimonials";
import FounderAndOffices from "@/components/home/FounderAndOffices";
import Faq from "@/components/home/Faq";
import CtaBanner from "@/components/home/CtaBanner";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Portfolio />
        <Lifecycle />
        <Services />
        <Pricing />
        <ProjectTimeline />
        <Testimonials />
        <FounderAndOffices />
        <Faq />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}