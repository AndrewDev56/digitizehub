"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import FormPill from "@/components/ui/FormPill";
import { projectNeedOptions, budgetOptions, hearAboutOptions } from "@/lib/data/contactOptions";
import { inquiryError } from "@/lib/inquiry";
import { sendInquiryViaEmailApi } from "@/lib/emailApi";
import { formatUsPhoneInput } from "@/lib/phone";

const inputClass =
  "w-full max-w-full bg-transparent text-left font-body text-base font-light tracking-[-0.01em] text-white outline-none placeholder:text-white/30 sm:text-lg md:w-[666px] md:text-right md:text-[30px]";

export default function ContactForm() {
  const [needs, setNeeds] = useState<string[]>([]);
  const [budget, setBudget] = useState("");
  const [company, setCompany] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [designation, setDesignation] = useState("");
  const [hearAbout, setHearAbout] = useState("");
  const [details, setDetails] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const toggleNeed = (option: string) => {
    setNeeds((prev) =>
      prev.includes(option) ? prev.filter((n) => n !== option) : [...prev, option]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;
    const validationError = inquiryError({
      source: "contact",
      needs,
      budget,
      company,
      name,
      email,
      phone,
      designation,
      hearAbout,
      details,
    });
    if (validationError) {
      setError(validationError);
      return;
    }
    setError("");
    setSubmitted(false);
    setSubmitting(true);
    try {
      await sendInquiryViaEmailApi({
        source: "contact",
        needs,
        budget,
        company,
        name,
        email,
        phone,
        designation,
        hearAbout,
        details,
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

  return (
    <form noValidate onSubmit={handleSubmit} className="relative isolate overflow-visible pb-16 md:pb-24">
      <div
        aria-hidden="true"
        data-gsap-ambient
        data-gsap-scale="1.1"
        data-gsap-opacity="0.8"
        data-gsap-duration="10"
        className="pointer-events-none absolute top-1/3 -left-[100px] sm:-left-[160px] md:-left-[200px] z-0 w-[420px] sm:w-[600px] md:w-[780px] lg:w-[950px] select-none opacity-75"
      >
        <Image
          src="/images/ellipse-left.png"
          alt=""
          width={950}
          height={950}
          className="h-auto w-full object-contain pointer-events-none"
        />
      </div>
      <div className="mx-auto max-w-[1632px] px-6 md:px-9">
        <div className="flex flex-col gap-8 border-t border-white/10 py-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-baseline gap-6 md:gap-16">
            <span className="font-accent text-xl text-white italic">01.</span>
            <span className="font-heading text-xl font-light text-white sm:text-2xl md:text-4xl">
              What do you need?
            </span>
          </div>
          <div className="flex flex-wrap justify-start gap-2 sm:gap-3 md:max-w-[680px] md:justify-end">
            {projectNeedOptions.map((option) => (
              <FormPill
                key={option}
                label={option}
                selected={needs.includes(option)}
                onClick={() => toggleNeed(option)}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-8 border-t border-white/10 py-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-baseline gap-6 md:gap-16">
            <span className="font-accent text-xl text-white italic">02.</span>
            <span className="font-heading text-xl font-light text-white sm:text-2xl md:text-4xl">
              Project Budget ($)
            </span>
          </div>
          <div className="flex flex-wrap justify-start gap-2 sm:gap-3 md:justify-end">
            {budgetOptions.map((option) => (
              <FormPill
                key={option}
                label={option}
                selected={budget === option}
                onClick={() => setBudget(option)}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 py-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-baseline gap-6 md:gap-16">
            <span className="font-accent text-xl text-white italic">03.</span>
            <span className="font-heading text-xl font-light text-white sm:text-2xl md:text-4xl">
              Your Company
            </span>
          </div>
          <input
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Company name"
            required
            className={inputClass}
          />
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 py-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-baseline gap-6 md:gap-16">
            <span className="font-accent text-xl text-white italic">04.</span>
            <span className="font-heading text-xl font-light text-white sm:text-2xl md:text-4xl">
              Your Name
            </span>
          </div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full name"
            required
            className={inputClass}
          />
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 py-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-baseline gap-6 md:gap-16">
            <span className="font-accent text-xl text-white italic">05.</span>
            <span className="font-heading text-xl font-light text-white sm:text-2xl md:text-4xl">
              Your Email
            </span>
          </div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            required
            className={inputClass}
          />
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 py-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-baseline gap-6 md:gap-16">
            <span className="font-accent text-xl text-white italic">06.</span>
            <span className="font-heading text-xl font-light text-white sm:text-2xl md:text-4xl">
              Your Phone
            </span>
          </div>
          <input
            type="tel"
            inputMode="numeric"
            autoComplete="tel-national"
            value={phone}
            onChange={(e) => setPhone(formatUsPhoneInput(e.target.value))}
            placeholder="(201) 555-0123"
            maxLength={17}
            required
            className={inputClass}
          />
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 py-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-baseline gap-6 md:gap-16">
            <span className="font-accent text-xl text-white italic">07.</span>
            <span className="font-heading text-xl font-light text-white sm:text-2xl md:text-4xl">
              Your Designation
            </span>
          </div>
          <input
            type="text"
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
            placeholder="Designation"
            required
            className={inputClass}
          />
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 py-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-baseline gap-6 md:gap-16">
            <span className="font-accent text-xl text-white italic">08.</span>
            <span className="font-heading text-xl font-light text-white sm:text-2xl md:text-4xl">
              How did you hear about us
            </span>
          </div>
          <select
            value={hearAbout}
            onChange={(e) => setHearAbout(e.target.value)}
            required
            className={`${inputClass} appearance-none`}
          >
            <option value="" disabled className="bg-background">
              How did you hear about us
            </option>
            {hearAboutOptions.map((option) => (
              <option key={option} value={option} className="bg-background">
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 py-8 md:flex-row md:justify-between">
          <div className="flex items-baseline gap-6 md:gap-16">
            <span className="font-accent text-xl text-white italic">09.</span>
            <span className="font-heading text-xl font-light text-white sm:text-2xl md:text-4xl">
              Project Details
            </span>
          </div>
          <textarea
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            placeholder="We're all ears! Dive deep into your project with us. Share your goals, expectations, success criteria, concerns, constraints, and any flexibility you have. The more you give us on the challenge, the better we can understand how to assist you."
            rows={6}
            required
            className={`${inputClass} no-scrollbar resize-none overflow-y-auto leading-[1.4]`}
          />
        </div>

        <div className="mt-8 flex flex-col items-center gap-3">
          <Button type="submit">{submitting ? "Sending..." : "Submit Request"}</Button>
          {submitted ? (
            <p role="status" className="font-body text-sm text-white/70">
              Thanks. We will reply within one business day.
            </p>
          ) : null}
          {error ? (
            <p role="alert" className="font-body text-sm text-brand-red">
              {error}
            </p>
          ) : null}
        </div>
      </div>
    </form>
  );
}