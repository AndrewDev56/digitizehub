import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/about/Hero";
import OurStory from "@/components/about/OurStory";
import HowWeWork from "@/components/about/HowWeWork";
// import FoundersAndOffices from "@/components/about/FoundersAndOffices";
import Testimonials from "@/components/home/Testimonials";
import CtaBanner from "@/components/home/CtaBanner";
import Stats from "@/components/home/Stats";
import TeamShowcase from "@/components/home/TeamShowcase";
import FounderAndOffices from "@/components/home/FounderAndOffices";

export default function About() {
  return (
    <>
      <Header active="About" />
      <main className="overflow-x-clip">
        <Hero />
        <OurStory />
        <Stats/>
        <HowWeWork />
        <TeamShowcase/>
        <FounderAndOffices/>
        {/* <FoundersAndOffices /> */}
        <Testimonials />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}