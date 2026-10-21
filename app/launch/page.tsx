import type { Metadata } from "next";
import LandingPage from "@/components/landing/LandingPage";

export const metadata: Metadata = {
  title: "Premium Design Services",
  description:
    "Launch a stronger digital presence that brings you more leads. Choose a package, browse the work, and send your project details on one page.",
};

export default function Launch() {
  return <LandingPage />;
}
