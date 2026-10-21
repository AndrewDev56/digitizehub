"use client";

import Button from "@/components/ui/Button";
import FadeIn from "@/components/animation/FadeIn";
import { openTawkChat } from "@/components/layout/TawkTo";
import { CALENDLY_URL } from "@/lib/calendly";
import { landingAlwaysOn } from "@/lib/data/landing";
import { whatsappHref } from "@/lib/data/whatsapp";

export default function LandingAlwaysOn() {
  const openChat = () => {
    if (!openTawkChat()) {
      window.open(whatsappHref, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section className="relative isolate overflow-visible py-16 md:py-24">
      <FadeIn direction="up">
        <div className="mx-auto max-w-4xl px-6 text-center md:px-9">
          <h2
            data-gsap-ignore
            className="font-heading text-3xl leading-tight font-semibold tracking-[-0.02em] text-white sm:text-4xl md:text-5xl"
          >
            {landingAlwaysOn.titleLead}{" "}
            <span className="font-accent font-normal italic">{landingAlwaysOn.titleAccent}</span>
            <br />
            {landingAlwaysOn.titleEnd}
          </h2>
          <p className="mx-auto mt-5 max-w-5xl font-body text-sm leading-relaxed text-white/70 md:text-xl">
            {landingAlwaysOn.copy}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Button onClick={openChat}>{landingAlwaysOn.chatCta}</Button>
            <Button variant="secondary" href={CALENDLY_URL}>
              {landingAlwaysOn.talkCta}
            </Button>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
