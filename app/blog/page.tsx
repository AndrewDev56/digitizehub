import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BlogHero from "@/components/blog/BlogHero";
import BlogsSection from "@/components/blog/BlogsSection";
import CtaBanner from "@/components/home/CtaBanner";

export default function Blog() {
  return (
    <>
      <Header active="Blog" />
      <main>
        <BlogHero />
        <BlogsSection />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}