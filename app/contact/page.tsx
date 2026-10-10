import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/contact/Hero";
import ContactForm from "@/components/contact/ContactForm";
import ContactOffices from "@/components/contact/ContactOffices";

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