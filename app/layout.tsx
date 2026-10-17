import type { Metadata, Viewport } from "next";
import { Inter, Montserrat } from "next/font/google";
import SiteAnimations from "@/components/animation/SiteAnimations";
import WhatsAppChat from "@/components/layout/WhatsAppChat";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Digital Marketing Agency in USA | Web Design, SEO & Branding | Digitize Hub",
  description:
    "Digitize Hub is a digital marketing agency in USA offering web design, SEO services, branding, mobile app development, and social media marketing for business growth.",
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${montserrat.variable} antialiased`}>
        <SiteAnimations>{children}</SiteAnimations>
        <WhatsAppChat />
      </body>
    </html>
  );
}