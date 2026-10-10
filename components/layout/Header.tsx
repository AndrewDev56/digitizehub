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

                    {/* Active State: Vibrant Glowing Gradient Line & Center Light Dot */}
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

                    {/* Hover State for Non-Active Links: Center-Expanding Gradient Reveal */}
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

        <div className="hidden lg:block">
          <Button href="/contact">Contact Us</Button>
        </div>

        <MobileNav links={navLinks} />
      </div>
    </header>
  );
}
