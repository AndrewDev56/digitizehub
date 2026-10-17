import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LegalHero from "@/components/legal/LegalHero";
import LegalBody from "@/components/legal/LegalBody";
import CtaBanner from "@/components/home/CtaBanner";
import { privacyPolicy } from "@/lib/data/legal";

export const metadata: Metadata = {
  title: "Privacy Policy — DigitizeHub",
  description:
    "How Digitize Hub collects, uses, stores, and protects the information you share with us.",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="overflow-x-clip">
        <LegalHero doc={privacyPolicy} />
        <LegalBody
          doc={privacyPolicy}
          otherHref="/terms"
          otherLabel="Terms and Conditions"
        />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
