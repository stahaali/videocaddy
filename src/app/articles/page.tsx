import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero/PageHero";
import InfoPageContent from "@/components/sections/InfoPageContent/InfoPageContent";
import CTASection from "@/components/sections/CTASection/CTASection";
import { articleCards } from "@/data/footer-pages";

export const metadata: Metadata = {
  title: "Articles",
  description:
    "Reference articles on post-production concepts, delivery specs, and workflow practices from Video Caddy.",
};

export default function ArticlesPage() {
  return (
    <>
      <PageHero
        title="ARTICLES"
        subtitle="Longer-form reference pieces on post-production concepts. Expand with full articles whenever you are ready."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Articles", href: "/articles" },
        ]}
      />
      <InfoPageContent cards={articleCards} cardsTitle="Reference Library" />
      <CTASection />
    </>
  );
}
