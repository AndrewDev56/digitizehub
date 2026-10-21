"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "@/components/ui/Button";
import MobileNav from "@/components/layout/MobileNav";
import { openTawkChat } from "@/components/layout/TawkTo";
import { navLinks } from "@/lib/data/navLinks";
import { offices } from "@/lib/data/offices";
import { whatsappHref } from "@/lib/data/whatsapp";

const LANDING_PHONE_HREF = "tel:+19296216055";
const LANDING_PHONE_LABEL = offices[0]?.phone ?? "+1 (929) 621-6055";

function HeaderLogo() {
  return (
    <span className="relative block h-10 w-[90px] md:h-[52px] md:w-[116px] lg:h-16 lg:w-[144px]">
      <Image
        src="/images/logo.png"
        alt="DigitizeHub"
        fill
        priority
        sizes="(min-width: 1024px) 144px, (min-width: 768px) 116px, 90px"
        className="size-full object-contain object-left"
      />
    </span>
  );
}

function openLandingChat() {
  if (!openTawkChat()) {
    window.open(whatsappHref, "_blank", "noopener,noreferrer");
  }
}

interface HeaderProps {
  active?: string;
  onContact?: () => void;
  hideNav?: boolean;
}

export default function Header({ active, onContact, hideNav = false }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-black/10 shadow-2xl py-3"
          : "bg-transparent py-6 md:py-8"
      }`}
    >
      <div className="mx-auto flex max-w-[1632px] items-center justify-between px-4 sm:px-6 md:px-9">
        {hideNav ? (
          <span className="shrink-0">
            <HeaderLogo />
          </span>
        ) : (
          <Link href="/" aria-label="DigitizeHub home" className="shrink-0">
            <HeaderLogo />
          </Link>
        )}

        {hideNav ? null : (
          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-[44px]">
              {navLinks.map((link) => {
                const isActive =
                  active
                    ? active.toLowerCase() === link.label.toLowerCase()
                    : link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);

                return (
                  <li key={link.href} className="relative group">
                    <Link
                      href={link.href}
                      className={`relative inline-flex flex-col items-center py-2 font-heading text-[16.5px] tracking-[-0.01em] whitespace-nowrap transition-all duration-300 ${
                        isActive
                          ? "font-semibold text-white drop-shadow-[0_0_8px_rgba(255,0,54,0.3)]"
                          : "font-normal text-white/70 hover:text-white"
                      }`}
                    >
                      <span>{link.label}</span>

                      {isActive && (
                        <>
                          <span
                            aria-hidden="true"
                            className="absolute -bottom-0.5 inset-x-0 h-[2px] rounded-full bg-gradient-to-r from-transparent via-brand-red to-transparent shadow-[0_0_10px_rgba(255,0,54,0.9)] animate-pulse"
                          />
                          <span
                            aria-hidden="true"
                            className="absolute -bottom-1 size-1 rounded-full bg-brand-red shadow-[0_0_8px_rgba(255,0,54,1)]"
                          />
                        </>
                      )}

                      {!isActive && (
                        <span
                          aria-hidden="true"
                          className="absolute -bottom-0.5 inset-x-0 h-[2px] rounded-full bg-gradient-to-r from-transparent via-brand-red/80 to-transparent scale-x-0 opacity-0 transition-all duration-300 ease-out origin-center group-hover:scale-x-100 group-hover:opacity-100 shadow-[0_0_8px_rgba(255,0,54,0.6)]"
                        />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        )}

        <div className={hideNav ? "flex items-center gap-2 sm:gap-3" : "hidden lg:block"}>
          {hideNav ? (
            <>
              <div className="flex items-center gap-2 sm:hidden">
                <Button
                  size="md"
                  icon="chat"
                  iconOnly
                  aria-label="Live Chat"
                  onClick={openLandingChat}
                />
                <Button
                  size="md"
                  href={LANDING_PHONE_HREF}
                  icon="phone"
                  iconOnly
                  aria-label={LANDING_PHONE_LABEL}
                />
              </div>
              <div className="hidden items-center gap-2 sm:flex sm:gap-3">
                <Button size="md" icon="chat" iconPosition="left" onClick={openLandingChat}>
                  Live Chat
                </Button>
                <Button
                  size="md"
                  variant="secondary"
                  href={LANDING_PHONE_HREF}
                  icon="phone"
                  iconPosition="left"
                >
                  {LANDING_PHONE_LABEL}
                </Button>
              </div>
            </>
          ) : onContact ? (
            <Button href="tel:+19296216055">Contact Us</Button>
          ) : (
            <Button href="/contact">Contact Us</Button>
          )}
        </div>

        {hideNav ? null : <MobileNav links={navLinks} onContact={onContact} />}
      </div>
    </header>
  );
}
