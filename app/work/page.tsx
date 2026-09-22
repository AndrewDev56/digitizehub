import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/work/Hero";
import ProjectsGrid from "@/components/work/ProjectsGrid";
import CtaBanner from "@/components/home/CtaBanner";
import Testimonials from "@/components/home/Testimonials";

export default function Work() {
  return (
    <>
      <Header active="Work" />
      <main>
        <Hero />
        <ProjectsGrid />
        <Testimonials />
                    <CtaBanner />
      </main>
      <Footer />
    </>
  );
}