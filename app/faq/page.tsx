import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Faq from "@/components/home/Faq";
import CtaBanner from "@/components/home/CtaBanner";

export default function FaqPage() {
  return (
    <>
      <Header active="FAQ's" />
      <main className="overflow-x-clip">
        <Faq page />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
