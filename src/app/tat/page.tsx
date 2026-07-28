import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero/PageHero";
import InfoPageContent from "@/components/sections/InfoPageContent/InfoPageContent";
import CTASection from "@/components/sections/CTASection/CTASection";
import { tatSections } from "@/data/footer-pages";

export const metadata: Metadata = {
  title: "Turnaround Time (TAT)",
  description:
    "Understand Video Caddy turnaround timelines, scoped delivery schedules, and how we staff projects to meet deadlines.",
};

export default function TatPage() {
  return (
    <>
      <PageHero
        title="TURNAROUND TIME"
        subtitle="Clear schedules, expandable capacity, and progress updates so delivery dates stay realistic and visible."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "TAT", href: "/tat" },
        ]}
      />
      <InfoPageContent sections={tatSections} />
      <CTASection />
    </>
  );
}
