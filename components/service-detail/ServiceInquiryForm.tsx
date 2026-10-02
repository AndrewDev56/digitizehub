"use client";

import { useState, type FormEvent } from "react";
import Button from "@/components/ui/Button";

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
              className={`min-h-[52px] rounded-full px-8 font-body text-[15px] text-white transition-colors ${active ? "bg-accent-to" : "bg-white/4 hover:bg-white/8"}`}
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
  const [submitted, setSubmitted] = useState(false);

  const toggleInterest = (interest: string) => {
    setSelectedInterests((current) => current.includes(interest) ? current.filter((item) => item !== interest) : [...current, interest]);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section aria-labelledby="service-contact-title" className="relative bg-background 2xl:mt-[160px]">
      <div aria-hidden className="pointer-events-none absolute top-[500px] -left-[150px] size-[400px] rounded-full bg-accent-to/50 blur-[120px] 2xl:size-[600px] 2xl:blur-[160px]" />
      <div aria-hidden className="pointer-events-none absolute top-[900px] -right-[150px] size-[400px] rounded-full bg-accent-to/40 blur-[120px] 2xl:size-[600px] 2xl:blur-[160px]" />
      <div className="relative mx-auto max-w-[1632px] px-6 md:px-9 2xl:px-0">
        <h2 id="service-contact-title" className="font-heading text-[48px] leading-none font-semibold tracking-[-0.01em] text-white md:text-[64px] 2xl:text-[88px]">
          Let&apos;s <span className="font-accent italic">Connect</span>
        </h2>

        <form onSubmit={handleSubmit} className="mt-12 2xl:mt-[120px]">
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
              <input name="phone" type="tel" autoComplete="tel" className={fieldClassName} />
            </label>
            <label className="font-body text-[15px] text-white/75">
              Your Company
              <input name="company" autoComplete="organization" className={fieldClassName} />
            </label>
            <label className="font-body text-[15px] text-white/75">
              Your Designation
              <input name="designation" className={fieldClassName} />
            </label>
            <label className="relative font-body text-[15px] text-white/75">
              How did you hear about us
              <select name="referral" defaultValue="" className={`${fieldClassName} appearance-none`}>
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
                <Button type="submit">Submit Now</Button>
                <p role="status" className="font-body text-sm text-white/70">{submitted ? "Thanks. Your inquiry is ready to send." : ""}</p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
