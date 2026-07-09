import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero/PageHero";
import ContactForm from "@/components/sections/ContactForm/ContactForm";
import BringVision from "@/components/sections/BringVision/BringVision";
import { contactHero } from "@/data/contact";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Video Caddy for high-quality video editing services. Reach us by phone, email, or fill out our contact form.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title={contactHero.title}
        subtitle={contactHero.subtitle}
        breadcrumbs={contactHero.breadcrumbs}
      />
      <ContactForm />
      <BringVision />
    </>
  );
}
