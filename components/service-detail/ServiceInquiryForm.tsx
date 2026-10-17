"use client";

import { useState, type FormEvent } from "react";
import Button from "@/components/ui/Button";
import { inquiryError } from "@/lib/inquiry";
import { sendInquiryViaEmailApi } from "@/lib/emailApi";
import { formatUsPhoneInput } from "@/lib/phone";

const budgets = ["$2,000 - $5,000", "$5,000 - $10,000", "$10,000 +"];
const interests = ["Website", "SEO", "UI/UX", "Mobile App", "Web App", "Other"];

const fieldClassName = "mt-3 w-full border-b border-white/15 bg-transparent pb-3 font-body text-base text-white outline-none transition-colors placeholder:text-white/35 focus:border-white/40";

function PillGroup({
  label,
  options,
  selected,
  onToggle,
}: {
  label: string;
  options: string[];
  selected: string[];
  onToggle: (value: string) => void;
}) {
  return (
    <fieldset>
      <legend className="font-heading text-[24px] font-semibold leading-none text-white">{label}</legend>
      <div className="mt-5 flex flex-wrap gap-3">
        {options.map((item) => {
          const active = selected.includes(item);
          return (
            <button
              key={item}
              type="button"
              aria-pressed={active}
              onClick={() => onToggle(item)}
              className={`min-h-11 rounded-full px-4 font-body text-sm transition-colors sm:min-h-[52px] sm:px-8 sm:text-[15px] ${active ? "bg-brand-red text-white" : "bg-white/4 text-white hover:bg-brand-red hover:text-black"}`}
            >
              {item}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}

export default function ServiceInquiryForm() {
  const [budget, setBudget] = useState("");
  const [selectedInterests, setSelectedInterests] = useState<string[]>(["UI/UX"]);
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const toggleInterest = (interest: string) => {
    setSelectedInterests((current) => current.includes(interest) ? current.filter((item) => item !== interest) : [...current, interest]);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (submitting) return;
    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      source: "service" as const,
      name: String(data.get("name") || "").trim(),
      email: String(data.get("email") || "").trim(),
      phone,
      company: String(data.get("company") || "").trim(),
      designation: String(data.get("designation") || "").trim(),
      hearAbout: String(data.get("referral") || "").trim(),
      needs: selectedInterests,
      budget,
      details: String(data.get("message") || "").trim(),
    };
    const validationError = inquiryError(payload);
    if (validationError) {
      setError(validationError);
      return;
    }
    setError("");
    setSubmitted(false);
    setSubmitting(true);
    try {
      await sendInquiryViaEmailApi(payload);
      setSubmitted(true);
      setPhone("");
      form.reset();
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
    <section aria-labelledby="service-contact-title" className="relative bg-background 2xl:mt-[160px]">
      <div aria-hidden className="pointer-events-none absolute top-[500px] -left-[150px] size-[400px] rounded-full bg-accent-to/50 blur-[120px] 2xl:size-[600px] 2xl:blur-[160px]" />
      <div aria-hidden className="pointer-events-none absolute top-[900px] -right-[150px] size-[400px] rounded-full bg-accent-to/40 blur-[120px] 2xl:size-[600px] 2xl:blur-[160px]" />
      <div className="relative mx-auto max-w-[1632px] px-6 md:px-9 2xl:px-0">
        <h2 id="service-contact-title" className="font-heading text-[32px] leading-[1.15] font-semibold tracking-[-0.01em] text-white sm:text-[48px] md:text-[64px] 2xl:text-[88px]">
          Let&apos;s <span className="font-accent italic">Connect</span>
        </h2>

        <form noValidate onSubmit={handleSubmit} className="mt-12 2xl:mt-[120px]">
          <div className="grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2">
            <label className="font-body text-[15px] text-white/75">
              Full Name
              <input name="name" autoComplete="name" required className={fieldClassName} />
            </label>
            <label className="font-body text-[15px] text-white/75">
              Your Email
              <input name="email" type="email" autoComplete="email" required className={fieldClassName} />
            </label>
            <label className="font-body text-[15px] text-white/75">
              Your Phone
              <input
                name="phone"
                type="tel"
                inputMode="numeric"
                autoComplete="tel-national"
                value={phone}
                onChange={(event) => setPhone(formatUsPhoneInput(event.target.value))}
                placeholder="(201) 555-0123"
                maxLength={17}
                required
                className={fieldClassName}
              />
            </label>
            <label className="font-body text-[15px] text-white/75">
              Your Company
              <input name="company" autoComplete="organization" required className={fieldClassName} />
            </label>
            <label className="font-body text-[15px] text-white/75">
              Your Designation
              <input name="designation" required className={fieldClassName} />
            </label>
            <label className="relative font-body text-[15px] text-white/75">
              How did you hear about us
              <select name="referral" defaultValue="" required className={`${fieldClassName} appearance-none`}>
                <option value="" disabled>Select an option</option>
                <option>Google</option>
                <option>Referral</option>
                <option>Social media</option>
                <option>Other</option>
              </select>
              <span aria-hidden className="pointer-events-none absolute right-0 bottom-4 text-white/50">▾</span>
            </label>
            <label className="font-body text-[15px] text-white/75 sm:col-span-2">
              Write your message
              <textarea name="message" required rows={4} className={`${fieldClassName} resize-y`} />
            </label>
          </div>

          <div className="mt-12 flex flex-col gap-10 2xl:mt-16">
            <PillGroup label="I'm Interested In" options={interests} selected={selectedInterests} onToggle={toggleInterest} />
            <div className="flex flex-wrap items-end justify-between gap-8">
              <PillGroup
                label="My Budget Is"
                options={budgets}
                selected={budget ? [budget] : []}
                onToggle={(item) => setBudget((current) => (current === item ? "" : item))}
              />
              <div className="flex flex-col items-start gap-3">
                <Button type="submit">{submitting ? "Sending..." : "Submit Now"}</Button>
                {submitted ? (
                  <p role="status" className="font-body text-sm text-white/70">
                    Thanks. We will reply within one business day.
                  </p>
                ) : null}
                {error ? (
                  <p role="alert" className="font-body text-sm text-brand-red">{error}</p>
                ) : null}
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
