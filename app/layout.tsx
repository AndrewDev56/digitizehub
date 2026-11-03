import type { Metadata, Viewport } from "next";
import { Inter, Montserrat } from "next/font/google";
import Script from "next/script";
import SiteAnimations from "@/components/animation/SiteAnimations";
import SiteBackgroundVideo from "@/components/layout/SiteBackgroundVideo";
import TawkTo from "@/components/layout/TawkTo";
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
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "xfwgxk3g5l");`}
        </Script>
        <SiteBackgroundVideo />
        <SiteAnimations>{children}</SiteAnimations>
        <TawkTo />
        <WhatsAppChat />
      </body>
    </html>
  );
}