import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero/PageHero";
import InfoPageContent from "@/components/sections/InfoPageContent/InfoPageContent";
import CTASection from "@/components/sections/CTASection/CTASection";
import { blogCards } from "@/data/footer-pages";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles and practical guides on video editing, animation, audio post, and production workflows from Video Caddy.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        title="BLOG"
        subtitle="Practical notes on editing, animation, audio, and production workflows. Individual posts can be added over time."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
        ]}
      />
      <InfoPageContent cards={blogCards} cardsTitle="Latest Topics" />
      <CTASection />
    </>
  );
}
