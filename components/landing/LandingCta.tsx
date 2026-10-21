"use client";

import FadeIn from "@/components/animation/FadeIn";
import Button from "@/components/ui/Button";

export default function LandingCta({ onStart }: { onStart: () => void }) {
  return (
    <section className="relative isolate overflow-visible px-4 py-16 sm:px-6 sm:py-24 md:px-9">
      <FadeIn direction="up">
        <div
          className="relative z-10 mx-auto max-w-[1400px] overflow-hidden rounded-[24px] px-5 py-12 text-center shadow-2xl sm:rounded-[28px] sm:px-8 sm:py-16 md:rounded-[36px] md:px-16 md:py-24"
          style={{ background: "linear-gradient(135deg, #ffffff 0%, #f8d5df 100%)" }}
        >
          <p className="relative z-10 font-body text-sm tracking-[0.08em] text-black/50 uppercase">Get Started</p>
          <h2 className="relative z-10 mx-auto mt-3 max-w-4xl font-heading text-[26px] font-semibold leading-[1.2] tracking-[-0.02em] text-black sm:text-3xl md:text-[52px] md:leading-[1.1]">
            Let’s Build <span className="font-accent italic text-[#FF0036]">Something Great</span> Together
          </h2>
          <p className="relative z-10 mx-auto mt-4 max-w-2xl font-body text-sm text-black/75 md:text-base">
          Looking for a digital marketing agency to help grow your business online? Tell us about your project, and the Digitize Hub team will help you plan the right solution for your website, branding, SEO, mobile app, or marketing needs.
          </p>
          <div className="relative z-10 mt-8 flex justify-center">
            <Button onClick={onStart}>Start Your Project</Button>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
