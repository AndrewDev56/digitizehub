"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import FormPill from "@/components/ui/FormPill";
import { projectNeedOptions, budgetOptions, hearAboutOptions } from "@/lib/data/contactOptions";

const inputClass =
  "w-full bg-transparent text-right font-body text-lg md:text-[30px] font-light text-white placeholder:text-white/30 tracking-[-0.01em] outline-none md:w-[666px]";

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

  const toggleNeed = (option: string) => {
    setNeeds((prev) =>
      prev.includes(option) ? prev.filter((n) => n !== option) : [...prev, option]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire up to a real submission endpoint.
    console.log({ needs, budget, company, name, email, phone, designation, hearAbout, details });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-background pb-16 md:pb-24">
      <div className="mx-auto max-w-[1632px] px-6 md:px-9">
        <div className="flex flex-col gap-8 border-t border-white/10 py-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-baseline gap-6 md:gap-16">
            <span className="font-accent text-xl text-white italic">01.</span>
            <span className="font-heading text-2xl font-light text-white md:text-4xl">
              What do you need?
            </span>
          </div>
          <div className="flex flex-wrap justify-end gap-3 md:max-w-[680px]">
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
            <span className="font-heading text-2xl font-light text-white md:text-4xl">
              Project Budget ($)
            </span>
          </div>
          <div className="flex flex-wrap justify-end gap-3">
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
            <span className="font-heading text-2xl font-light text-white md:text-4xl">
              Your Company
            </span>
          </div>
          <input
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Company name"
            className={inputClass}
          />
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 py-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-baseline gap-6 md:gap-16">
            <span className="font-accent text-xl text-white italic">04.</span>
            <span className="font-heading text-2xl font-light text-white md:text-4xl">
              Your Name
            </span>
          </div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full name"
            className={inputClass}
          />
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 py-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-baseline gap-6 md:gap-16">
            <span className="font-accent text-xl text-white italic">05.</span>
            <span className="font-heading text-2xl font-light text-white md:text-4xl">
              Your Email
            </span>
          </div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            className={inputClass}
          />
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 py-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-baseline gap-6 md:gap-16">
            <span className="font-accent text-xl text-white italic">06.</span>
            <span className="font-heading text-2xl font-light text-white md:text-4xl">
              Your Phone
            </span>
          </div>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone number"
            className={inputClass}
          />
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 py-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-baseline gap-6 md:gap-16">
            <span className="font-accent text-xl text-white italic">07.</span>
            <span className="font-heading text-2xl font-light text-white md:text-4xl">
              Your Designation
            </span>
          </div>
          <input
            type="text"
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
            placeholder="Designation"
            className={inputClass}
          />
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 py-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-baseline gap-6 md:gap-16">
            <span className="font-accent text-xl text-white italic">08.</span>
            <span className="font-heading text-2xl font-light text-white md:text-4xl">
              How did you hear about us
            </span>
          </div>
          <select
            value={hearAbout}
            onChange={(e) => setHearAbout(e.target.value)}
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
            <span className="font-heading text-2xl font-light text-white md:text-4xl">
              Project Details
            </span>
          </div>
          <textarea
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            placeholder="We're all ears! Dive deep into your project with us. Share your goals, expectations, success criteria, concerns, constraints, and any flexibility you have. The more you give us on the challenge, the better we can understand how to assist you."
            rows={5}
            className={`${inputClass} resize-none leading-[1.4]`}
          />
        </div>

        <div className="mt-8 flex justify-center">
          <Button type="submit">Submit Request</Button>
        </div>
      </div>
    </form>
  );
}