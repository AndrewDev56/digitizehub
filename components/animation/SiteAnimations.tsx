"use client";

import { ReactNode, useRef } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

export default function SiteAnimations({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useGSAP(
    () => {
      const media = gsap.matchMedia();

      media.add("(prefers-reduced-motion: no-preference)", () => {
        const elements = root.current?.querySelectorAll<HTMLElement>(
          "main h1, main h2, main h3, main h4, main h5, main h6, main p",
        );

        elements?.forEach((element) => {
          if (
            element.closest("[aria-hidden='true'], [data-gsap-ignore], [data-gsap-stagger-item]") ||
            element.querySelector("[data-word], [data-gsap-ignore]")
          ) return;

          SplitText.create(element, {
            type: "words",
            autoSplit: true,
            onSplit: (split) =>
              gsap.from(split.words, {
                autoAlpha: 0,
                y: 22,
                duration: 0.7,
                stagger: 0.035,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: element,
                  start: "top 90%",
                  once: true,
                },
              }),
          });
        });

        root.current?.querySelectorAll<HTMLElement>("[data-gsap-reveal]").forEach((element) => {
          const direction = element.dataset.gsapDirection;
          const distance = Number(element.dataset.gsapDistance ?? 30);
          const offset =
            direction === "down"
              ? { y: -distance }
              : direction === "left"
                ? { x: distance }
                : direction === "right"
                  ? { x: -distance }
                  : direction === "none"
                    ? { x: 0, y: 0 }
                    : { y: distance };

          gsap.from(element, {
            autoAlpha: 0,
            ...offset,
            scale: Number(element.dataset.gsapScale ?? 1) !== 1
              ? Number(element.dataset.gsapScale) * 0.95
              : 1,
            duration: Number(element.dataset.gsapDuration ?? 0.5),
            delay: Number(element.dataset.gsapDelay ?? 0),
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 90%",
              once: element.dataset.gsapOnce !== "false",
            },
          });
        });

        root.current?.querySelectorAll<HTMLElement>("[data-gsap-stagger]").forEach((container) => {
          const items = container.querySelectorAll<HTMLElement>(":scope > [data-gsap-stagger-item]");
          if (items.length === 0) return;

          gsap.from(items, {
            autoAlpha: 0,
            y: 25,
            scale: 0.96,
            duration: 0.5,
            stagger: Number(container.dataset.gsapStaggerAmount ?? 0.1),
            delay: Number(container.dataset.gsapDelay ?? 0),
            ease: "power3.out",
            scrollTrigger: {
              trigger: container,
              start: "top 90%",
              once: true,
            },
          });
        });

        root.current?.querySelectorAll<HTMLElement>("[data-gsap-ambient]").forEach((element) => {
          gsap.to(element, {
            scale: Number(element.dataset.gsapScale ?? 1.1),
            opacity: Number(element.dataset.gsapOpacity ?? 0.3),
            duration: Number(element.dataset.gsapDuration ?? 8),
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });
        });

        root.current?.querySelectorAll<HTMLElement>("[data-gsap-bob]").forEach((element) => {
          gsap.to(element, {
            y: 8,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });
        });

        const header = root.current?.querySelector<HTMLElement>("[data-gsap-enter]");
        if (header) {
          gsap.from(header, { y: -20, autoAlpha: 0, duration: 0.5, ease: "power2.out" });
        }

        root.current?.querySelectorAll<HTMLElement>("main > section").forEach((section) => {
          if (section.hasAttribute("data-gsap-ignore")) return;

          gsap.from(section, {
            autoAlpha: 0,
            y: 20,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 92%",
              once: true,
            },
          });
        });

        root.current
          ?.querySelectorAll<HTMLElement>("main > section img.object-cover")
          .forEach((image) => {
            gsap.fromTo(
              image,
              { yPercent: -4, scale: 1.08 },
              {
                yPercent: 4,
                scale: 1.08,
                ease: "none",
                scrollTrigger: {
                  trigger: image.parentElement ?? image,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: true,
                },
              },
            );
          });
      });

      return () => media.revert();
    },
    { scope: root, dependencies: [pathname], revertOnUpdate: true },
  );

  return <div ref={root}>{children}</div>;
}