import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero/PageHero";
import InfoPageContent from "@/components/sections/InfoPageContent/InfoPageContent";
import SuccessStories from "@/components/sections/SuccessStories/SuccessStories";
import CTASection from "@/components/sections/CTASection/CTASection";
import { caseStudyCards } from "@/data/footer-pages";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Explore Video Caddy case studies covering video editing, storyboarding, animation, and large-scale post-production work.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        title="CASE STUDIES"
        subtitle="Selected projects that show how we handle volume, creative constraints, and delivery under real production pressure."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Case Studies", href: "/case-studies" },
        ]}
      />
      <SuccessStories />
      <InfoPageContent cards={caseStudyCards} cardsTitle="Featured Outcomes" />
      <CTASection />
    </>
  );
}
