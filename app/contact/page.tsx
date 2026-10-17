import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/contact/Hero";
import ContactForm from "@/components/contact/ContactForm";
import ContactOffices from "@/components/contact/ContactOffices";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request a call with Digitize Hub in Calgary or Atlanta. Tell us about your website, app, branding, social, or SEO project.",
};

export default function Contact() {
  return (
    <>
      <Header active="Contact" />
      <main className="overflow-x-clip">
        <Hero />
        <ContactForm />
        <ContactOffices />
      </main>
      <Footer />
    </>
  );
}