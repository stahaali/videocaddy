import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero/PageHero";
import InfoPageContent from "@/components/sections/InfoPageContent/InfoPageContent";
import CTASection from "@/components/sections/CTASection/CTASection";
import { glossaryTerms } from "@/data/footer-pages";

export const metadata: Metadata = {
  title: "Glossary",
  description:
    "A glossary of common video editing, animation, audio, and post-production terms used across Video Caddy projects.",
};

export default function GlossaryPage() {
  return (
    <>
      <PageHero
        title="GLOSSARY"
        subtitle="Plain-language definitions for terms you will see across editing, animation, audio, and delivery workflows."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Glossary", href: "/glossary" },
        ]}
      />
      <InfoPageContent glossary={glossaryTerms} />
      <CTASection />
    </>
  );
}
