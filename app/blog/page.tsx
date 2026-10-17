import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BlogHero from "@/components/blog/BlogHero";
import BlogsSection from "@/components/blog/BlogsSection";
import CtaBanner from "@/components/home/CtaBanner";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Practical notes on websites, conversion, social media, and SEO from Digitize Hub.",
};

export default function Blog() {
  return (
    <>
      <Header active="Blog" />
      <main className="overflow-x-clip">
        <BlogHero />
        <BlogsSection />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}