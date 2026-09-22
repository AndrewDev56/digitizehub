import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import MobileNav from "@/components/layout/MobileNav";
import { navLinks } from "@/lib/data/navLinks";

export default function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="mx-auto flex max-w-[1632px] items-center justify-between px-6 py-6 md:px-9 md:py-10">
        <Link href="/" aria-label="DigitizeHub home" className="shrink-0">
          <Image
            src="/images/logo.png"
            alt="DigitizeHub"
            width={135}
            height={60}
            priority
            className="h-10 w-auto md:h-[60px]"
          />
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-[54px]">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`font-heading text-[18px] whitespace-nowrap text-white transition-opacity hover:opacity-100 ${
                    link.label === "Home"
                      ? "font-semibold opacity-100"
                      : "font-normal opacity-70"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
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