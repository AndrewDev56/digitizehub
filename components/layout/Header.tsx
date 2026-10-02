"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "@/components/ui/Button";
import MobileNav from "@/components/layout/MobileNav";
import { navLinks } from "@/lib/data/navLinks";

interface HeaderProps {
  active?: string;
}

export default function Header({ active }: HeaderProps) {
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
      data-gsap-enter
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-white/10 shadow-2xl py-3"
          : "bg-transparent py-6 md:py-8"
      }`}
    >
      <div className="mx-auto flex max-w-[1632px] items-center justify-between px-6 md:px-9">
        <Link href="/" aria-label="DigitizeHub home" className="shrink-0 group">
          <Image
            src="/images/logo.png"
            alt="DigitizeHub"
            width={135}
            height={60}
            priority
            className="h-10 w-auto md:h-[50px] transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

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
                <li key={link.href} className="relative">
                  <Link
                    href={link.href}
                    className={`relative py-1 font-heading text-[17px] whitespace-nowrap text-white transition-colors duration-200 ${
                      isActive ? "font-semibold text-white" : "font-normal text-white/70 hover:text-white"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <div
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[var(--accent-from)] to-[var(--accent-to)] rounded-full"
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden lg:block">
          <Button href="/contact">Contact Us</Button>
        </div>

        <MobileNav links={navLinks} />
      </div>
    </header>
  );
}