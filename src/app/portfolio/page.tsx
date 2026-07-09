import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero/PageHero";
import PortfolioGrid from "@/components/sections/PortfolioGrid/PortfolioGrid";
import CTASection from "@/components/sections/CTASection/CTASection";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore our artist team's portfolio showcasing diverse video editing expertise across corporate, wedding, real estate, and more.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="A HIGHLY EXPERIENCED ARTIST TEAM"
        title="PORTFOLIO"
        subtitle="Explore our portfolio to view our diverse video editing expertise"
        cta={{ label: "GET STARTED NOW", href: "/contact" }}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Portfolio", href: "/portfolio" },
        ]}
      />
      <PortfolioGrid />
      <CTASection />
    </>
  );
}
