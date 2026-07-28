import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero/PageHero";
import Features from "@/components/sections/Features/Features";
import CTASection from "@/components/sections/CTASection/CTASection";
import { benefitsFeatures } from "@/data/footer-pages";

export const metadata: Metadata = {
  title: "Benefits of Partnering With Video Caddy",
  description:
    "Key benefits of outsourcing post-production to Video Caddy — skilled teams, quality controls, faster TAT, and secure workflows.",
};

export default function BenefitsPage() {
  return (
    <>
      <PageHero
        title="BENEFITS"
        subtitle="What agencies, brands, and production houses gain when Video Caddy becomes their post-production partner."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Benefits", href: "/benefits" },
        ]}
      />
      <Features items={benefitsFeatures} title="WHY TEAMS CHOOSE US" />
      <CTASection />
    </>
  );
}
