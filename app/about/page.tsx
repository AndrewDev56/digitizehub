import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/about/Hero";
import OurStory from "@/components/about/OurStory";
import HowWeWork from "@/components/about/HowWeWork";
import FoundersAndOffices from "@/components/about/FoundersAndOffices";
import Testimonials from "@/components/home/Testimonials";
import CtaBanner from "@/components/home/CtaBanner";

export default function About() {
  return (
    <>
      <Header active="About" />
      <main>
        <Hero />
        <OurStory />
        <HowWeWork />
        <FoundersAndOffices />
           <Testimonials />
            <CtaBanner />
      </main>
      <Footer />
    </>
  );
}