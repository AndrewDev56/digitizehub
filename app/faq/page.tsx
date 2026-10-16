import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/faq/Hero";
import FaqList from "@/components/faq/FaqList";
import CtaBanner from "@/components/home/CtaBanner";

export default function FaqPage() {
  return (
    <>
      <Header active="FAQ's" />
      <main className="overflow-x-clip">
        <Hero />
        <FaqList />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
