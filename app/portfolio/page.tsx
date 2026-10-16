import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/portfolio/Hero";
import Gallery from "@/components/portfolio/Gallery";
import Testimonials from "@/components/home/Testimonials";
import CtaBanner from "@/components/home/CtaBanner";

export default function PortfolioPage() {
  return (
    <>
      <Header active="Portfolio" />
      <main className="overflow-x-clip">
        <Hero />
        <Gallery />
        <Testimonials />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
