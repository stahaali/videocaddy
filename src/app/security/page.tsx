import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero/PageHero";
import InfoPageContent from "@/components/sections/InfoPageContent/InfoPageContent";
import CTASection from "@/components/sections/CTASection/CTASection";
import { securitySections } from "@/data/footer-pages";

export const metadata: Metadata = {
  title: "Data Security",
  description:
    "Learn how Video Caddy protects client media with NDAs, controlled access, encrypted transfers, and secure production workflows.",
};

export default function SecurityPage() {
  return (
    <>
      <PageHero
        title="SECURITY"
        subtitle="Legal, physical, and digital controls designed to keep your footage and brand assets confidential."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Security", href: "/security" },
        ]}
      />
      <InfoPageContent sections={securitySections} />
      <CTASection />
    </>
  );
}
