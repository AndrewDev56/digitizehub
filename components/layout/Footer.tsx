"use client";

import Image from "next/image";
import Link from "next/link";
import { footerColumns } from "@/lib/data/footer";
import { offices } from "@/lib/data/offices";
import FadeIn from "@/components/animation/FadeIn";

const socialIcons: Record<string, string> = {
  facebook: "/icons/facebook.png",
  instagram: "/icons/insta.png",
  linkedin: "/icons/linkedin-white.png",
  pinterest: "/icons/pinterest.png",
};

const socials = ["facebook", "instagram", "linkedin", "pinterest"];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-background">
      {/* Background ambient glow - Bottom Right corner via radial gradient */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 bottom-0 h-[28rem] w-[36rem] sm:w-[48rem] max-w-full bg-[radial-gradient(ellipse_at_bottom_right,rgba(255,0,54,0.18)_0%,rgba(255,0,54,0.06)_42%,transparent_75%)]"
      />


      <div className="relative z-10 mx-auto max-w-[1632px] px-6 py-12 md:px-9 md:py-20">
        <FadeIn direction="up">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">
            <div className="lg:col-span-1">
              <Link href="/" className="inline-block">
                <Image
                  src="/images/logo.png"
                  alt="DigitizeHub"
                  width={150}
                  height={66}
                  className="h-10 md:h-11 w-auto"
                />
              </Link>

              <div className="mt-8">
                <p className="font-heading text-xl md:text-2xl font-semibold text-white">
                  Phone
                </p>
                <a
                  href="tel:+19296216055"
                  className="mt-2 block font-body text-base md:text-lg text-white/70 transition-colors hover:text-brand-red"
                >
                  +1 929-621-6055
                </a>
              </div>

              <div className="mt-8">
                <p className="font-heading text-xl md:text-2xl font-semibold text-white">
                  Drop us a line
                </p>
                <a
                  href="mailto:info@digitizehub.net"
                  className="mt-2 block font-body text-base md:text-lg text-white/70 transition-colors hover:text-brand-red"
                >
                  info@digitizehub.net
                </a>
              </div>

              <div className="mt-8 flex gap-3">
                {socials.map((social) => (
                  <a
                    key={social}
                    href="#"
                    aria-label={social}
                    className="flex size-11 items-center justify-center rounded-full bg-white/10 transition-all hover:scale-110 hover:-translate-y-0.5 active:scale-95 hover:bg-brand-red"
                  >
                    <Image
                      src={socialIcons[social]}
                      alt=""
                      width={20}
                      height={20}
                      className="size-5"
                    />
                  </a>
                ))}
              </div>
            </div>

            {footerColumns.map((column) => (
              <div key={column.title}>
                <h4 className="font-heading text-xl md:text-2xl font-semibold text-white">
                  {column.title}
                </h4>
                <ul className="mt-6 flex flex-col gap-3.5">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="inline-block font-body text-base md:text-lg text-white/60 transition-all duration-200 hover:text-white hover:translate-x-1"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <h4 className="font-heading text-xl md:text-2xl font-semibold text-white">
                Locations
              </h4>
              <div className="mt-6 flex flex-col gap-8">
                {offices.map((office) => (
                  <div key={office.city}>
                    <p className="font-body text-base md:text-lg text-white/60 leading-relaxed">
                      {office.address}
                    </p>
                    <a
                      href={office.mapUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-2 inline-flex items-center gap-1.5 font-body text-base md:text-lg font-medium text-white/80 transition-colors hover:text-brand-red"
                    >
                      View on map
                      <Image
                        src="/icons/arrow-right-white.png"
                        alt=""
                        width={12}
                        height={12}
                        className="size-3"
                      />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
            <p className="font-body text-sm md:text-base text-white/50">
              All Rights Reserved <span aria-hidden="true">|</span> © 2026{" "}
              <span className="font-semibold text-brand-red">DigitizeHub</span>.
            </p>
            <div className="flex items-center gap-4">
              <Link href="/privacy" className="font-body text-sm md:text-base text-white/50 transition-colors hover:text-white">
                Privacy Policy
              </Link>
              <span aria-hidden="true" className="text-sm text-white/40">|</span>
              <Link href="/terms" className="font-body text-sm md:text-base text-white/50 transition-colors hover:text-white">
                Terms and Conditions
              </Link>
              <button
                type="button"
                onClick={scrollToTop}
                aria-label="Back to top"
                className="flex size-9 md:size-10 items-center justify-center rounded-full bg-white/10 text-white text-base md:text-lg transition-all hover:scale-110 hover:bg-brand-red"
              >
                ↑
              </button>
            </div>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
}
