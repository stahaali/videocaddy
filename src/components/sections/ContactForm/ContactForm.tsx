"use client";

import Link from "next/link";
import Container from "@/components/shared/Container/Container";
import Button from "@/components/shared/Button/Button";
import { offices, contactMethods } from "@/data/contact";

export default function ContactForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="bg-black spacing-section" aria-labelledby="contact-form-title">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <h2 id="contact-form-title" className="section-heading mb-8">
              We&apos;d love to hear from you — Contact us now!
            </h2>
            <div className="mb-8 flex flex-col gap-6">
              {offices.map((office) => (
                <div
                  key={office.region}
                  className="rounded-md border border-white/10 bg-bg-card p-5"
                >
                  <p className="mb-2 font-heading text-[13px] font-bold tracking-widest text-primary uppercase">
                    {office.region}
                  </p>
                  <p className="text-[15px] leading-relaxed text-text-muted">{office.address}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-4">
              <div className="text-[15px] text-text-muted">
                <strong className="mb-1 block text-[13px] tracking-wide text-white uppercase">
                  Email Us
                </strong>
                <a href={`mailto:${contactMethods.email}`} className="hover:text-primary">
                  {contactMethods.email}
                </a>
              </div>
              <div className="text-[15px] text-text-muted">
                <strong className="mb-1 block text-[13px] tracking-wide text-white uppercase">
                  Call Us
                </strong>
                {contactMethods.phones.map((phone) => (
                  <a key={phone} href={`tel:${phone}`} className="block hover:text-primary">
                    {phone}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <form
            className="rounded-lg border border-white/15 bg-bg-card p-8"
            onSubmit={handleSubmit}
            noValidate
          >
            <p className="mb-6 text-[13px] text-text-dim">
              *Please fill in all fields marked with an asterisk
            </p>
            <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="mb-4 sm:mb-0">
                <label className="mb-1.5 block text-[13px] font-semibold text-text-muted" htmlFor="firstName">
                  First Name *
                </label>
                <input
                  id="firstName"
                  type="text"
                  className="w-full rounded-sm border border-white/15 bg-black px-4 py-3.5 text-white transition-colors focus:border-primary focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="mb-1.5 block text-[13px] font-semibold text-text-muted" htmlFor="lastName">
                  Last Name *
                </label>
                <input
                  id="lastName"
                  type="text"
                  className="w-full rounded-sm border border-white/15 bg-black px-4 py-3.5 text-white transition-colors focus:border-primary focus:outline-none"
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="mb-1.5 block text-[13px] font-semibold text-text-muted" htmlFor="email">
                Email *
              </label>
              <input
                id="email"
                type="email"
                className="w-full rounded-sm border border-white/15 bg-black px-4 py-3.5 text-white transition-colors focus:border-primary focus:outline-none"
                required
              />
            </div>
            <div className="mb-4">
              <label className="mb-1.5 block text-[13px] font-semibold text-text-muted" htmlFor="phone">
                Phone
              </label>
              <input
                id="phone"
                type="tel"
                className="w-full rounded-sm border border-white/15 bg-black px-4 py-3.5 text-white transition-colors focus:border-primary focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label className="mb-1.5 block text-[13px] font-semibold text-text-muted" htmlFor="message">
                Message *
              </label>
              <textarea
                id="message"
                className="min-h-[120px] w-full resize-y rounded-sm border border-white/15 bg-black px-4 py-3.5 text-white transition-colors focus:border-primary focus:outline-none"
                required
              />
            </div>
            <label className="mb-5 flex items-start gap-2 text-[13px] text-text-muted">
              <input type="checkbox" required className="mt-0.5 accent-primary" />
              <span>I consent to receive SMS from videocaddy.com</span>
            </label>
            <Button type="submit" variant="primary" fullWidth>
              Submit
            </Button>
            <p className="mt-4 text-center text-xs text-text-dim">
              <Link href="/privacy-policy" className="text-primary">
                Privacy Policy
              </Link>
            </p>
          </form>
        </div>
      </Container>
    </section>
  );
}
