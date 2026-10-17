import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LegalHero from "@/components/legal/LegalHero";
import LegalBody from "@/components/legal/LegalBody";
import CtaBanner from "@/components/home/CtaBanner";
import { termsAndConditions } from "@/lib/data/legal";

export const metadata: Metadata = {
  title: "Terms and Conditions — DigitizeHub",
  description:
    "The rules for using the Digitize Hub website and working with our services.",
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="overflow-x-clip">
        <LegalHero doc={termsAndConditions} />
        <LegalBody
          doc={termsAndConditions}
          otherHref="/privacy"
          otherLabel="Privacy Policy"
        />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
