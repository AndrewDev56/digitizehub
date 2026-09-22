import Image from "next/image";
import Link from "next/link";
import { footerColumns } from "@/lib/data/footer";
import { offices } from "@/lib/data/offices";

const socialIcons: Record<string, string> = {
  facebook: "/icons/facebook.png",
  instagram: "/icons/insta.png",
  linkedin: "/icons/linkedin-white.png",
  pinterest: "/icons/pinterest.png",
};

const socials = ["facebook", "instagram", "linkedin", "pinterest"];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background">
      <div className="mx-auto max-w-[1632px] px-6 py-16 md:px-9 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <Image
              src="/images/logo.png"
              alt="DigitizeHub"
              width={135}
              height={60}
              className="h-9 w-auto"
            />

            <div className="mt-8">
              <p className="font-heading text-sm font-semibold text-white">
                Phone
              </p>
              <a
                href="tel:+16465807135"
                className="mt-1 block font-body text-sm text-white/60"
              >
                +1 (646) 580-7135
              </a>
            </div>

            <div className="mt-6">
              <p className="font-heading text-sm font-semibold text-white">
                Drop us a line
              </p>
              <a
                href="mailto:info@digitizehub.net"
                className="mt-1 block font-body text-sm text-white/60"
              >
                info@digitizehub.net
              </a>
            </div>

            <div className="mt-6 flex gap-3">
              {socials.map((social) => (
                <a
                  key={social}
                  href="#"
                  aria-label={social}
                  className="flex size-9 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20"
                >
                  <Image
                    src={socialIcons[social]}
                    alt=""
                    width={16}
                    height={16}
                    className="size-4"
                  />
                </a>
              ))}
            </div>
          </div>

          {footerColumns.map((column) => (
            <div key={column.title}>
              <h4 className="font-heading text-sm font-semibold text-white">
                {column.title}
              </h4>
              <ul className="mt-5 flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-body text-sm text-white/50 hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="font-heading text-sm font-semibold text-white">
              Locations
            </h4>
            <div className="mt-5 flex flex-col gap-6">
              {offices.map((office) => (
                <div key={office.city}>
                  <p className="font-body text-sm text-white/50">
                    {office.address}
                  </p>
                  <a
                    href={office.mapUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 inline-flex items-center gap-1 font-body text-sm text-white/80 hover:text-white"
                  >
                    View on map
                    <Image
                      src="/icons/arrow-right.svg"
                      alt=""
                      width={10}
                      height={10}
                      className="size-2.5"
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="font-body text-xs text-white/40">
            © 2026 <span className="text-accent-to">DigitizeHub</span> — All
            Rights Reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="font-body text-xs text-white/40">
              Privacy Policy
            </Link>
            <Link href="/terms" className="font-body text-xs text-white/40">
              Terms and Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}   