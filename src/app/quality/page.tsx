import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero/PageHero";
import InfoPageContent from "@/components/sections/InfoPageContent/InfoPageContent";
import CTASection from "@/components/sections/CTASection/CTASection";
import { qualitySections } from "@/data/footer-pages";

export const metadata: Metadata = {
  title: "Quality Assurance",
  description:
    "See how Video Caddy applies multi-tier quality checks, ISO-aligned review practices, and structured revision cycles.",
};

export default function QualityPage() {
  return (
    <>
      <PageHero
        title="QUALITY"
        subtitle="Repeatable review steps that keep creative and technical standards consistent across every delivery."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Quality", href: "/quality" },
        ]}
      />
      <InfoPageContent sections={qualitySections} />
      <CTASection />
    </>
  );
}
