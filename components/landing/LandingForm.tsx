"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import { landingHeroError } from "@/lib/inquiry";
import { sendInquiryViaEmailApi } from "@/lib/emailApi";
import { formatUsPhoneInput } from "@/lib/phone";
import { landingHero, needFromPackage, packageLabel, type SelectedPackage } from "@/lib/data/landing";

const fieldClassName =
  "w-full rounded-[14px] border border-white/15 bg-white/[0.06] px-4 py-3.5 font-body text-base text-white outline-none transition-colors placeholder:text-white/35 focus:border-white/40";

export default function LandingForm({
  selectedPackage,
  idPrefix = "launch",
  variant = "card",
}: {
  selectedPackage: SelectedPackage | null;
  idPrefix?: string;
  variant?: "card" | "plain";
}) {
  const selectedLabel = selectedPackage ? packageLabel(selectedPackage) : "";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [details, setDetails] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;
    const validationError = landingHeroError({ name, email, phone, details });
    if (validationError) {
      setError(validationError);
      return;
    }
    setError("");
    setSubmitted(false);
    setSubmitting(true);
    try {
      await sendInquiryViaEmailApi({
        source: "landing",
        name,
        email,
        phone,
        details,
        company: "—",
        designation: "—",
        hearAbout: "Landing page",
        needs: selectedPackage ? [needFromPackage(selectedPackage)] : ["Project inquiry"],
        budget: selectedPackage?.tier ?? "To be discussed",
        selectedPackage: selectedLabel || undefined,
      });
      setSubmitted(true);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Could not send just now. Email us at info@digitizehub.net.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  const nameId = `${idPrefix}-name`;
  const emailId = `${idPrefix}-email`;
  const phoneId = `${idPrefix}-phone`;
  const detailsId = `${idPrefix}-details`;
  const isCard = variant === "card";

  return (
    <form
      id={`${idPrefix}-form`}
      noValidate
      onSubmit={handleSubmit}
      className={
        isCard
          ? "scroll-mt-28 rounded-[24px] border border-white/15 bg-white/[0.06] p-6 shadow-2xl backdrop-blur-md sm:p-8"
          : "flex flex-col"
      }
    >
      {isCard ? (
        <>
          <h2 className="font-heading text-2xl font-semibold leading-tight tracking-[-0.02em] text-white sm:text-[32px]">
            {landingHero.formTitle}
          </h2>
          <p className="mt-3 font-body text-sm leading-relaxed text-white/70">
            {landingHero.formCopy}
          </p>
        </>
      ) : null}

      {selectedLabel ? (
        <div className={`${isCard ? "mt-5" : ""} rounded-[14px] border border-brand-red/40 bg-brand-red/10 px-4 py-3`}>
          <p className="font-body text-xs text-white/70">Selected package</p>
          <p className="mt-1 font-heading text-base font-semibold text-white">{selectedLabel}</p>
        </div>
      ) : null}

      <div className={`${isCard || selectedLabel ? "mt-6" : ""} flex flex-col gap-4`}>
        <label className="sr-only" htmlFor={nameId}>
          Full Name
        </label>
        <input
          id={nameId}
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
          required
          className={fieldClassName}
        />
        <label className="sr-only" htmlFor={emailId}>
          Email Address
        </label>
        <input
          id={emailId}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address"
          required
          className={fieldClassName}
        />
        <label className="sr-only" htmlFor={phoneId}>
          Phone Number
        </label>
        <input
          id={phoneId}
          type="tel"
          inputMode="numeric"
          autoComplete="tel-national"
          value={phone}
          onChange={(e) => setPhone(formatUsPhoneInput(e.target.value))}
          placeholder="Phone Number"
          maxLength={17}
          required
          className={fieldClassName}
        />
        <label className="sr-only" htmlFor={detailsId}>
          Project details
        </label>
        <textarea
          id={detailsId}
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          placeholder="Lets Talk about your project"
          rows={4}
          required
          className={`${fieldClassName} resize-none`}
        />
      </div>

      <div className="mt-6 flex flex-col items-start gap-3">
        <Button type="submit">{submitting ? "Sending..." : "Submit Now"}</Button>
        {submitted ? (
          <p role="status" className="font-body text-sm text-white/70">
            Thanks. We will reply within one business day.
            {selectedLabel ? ` Package noted: ${selectedLabel}.` : ""}
          </p>
        ) : null}
        {error ? (
          <p role="alert" className="font-body text-sm text-brand-red">
            {error}
          </p>
        ) : null}
      </div>
    </form>
  );
}
