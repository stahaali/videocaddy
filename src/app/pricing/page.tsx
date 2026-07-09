import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero/PageHero";
import PricingSection from "@/components/sections/PricingSection/PricingSection";
import Features from "@/components/sections/Features/Features";
import CTASection from "@/components/sections/CTASection/CTASection";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Affordable professional video editing, audio editing, and storyboarding services. Transparent pricing starting from $10/hour.",
};

const pricingIntro =
  "Our pricing structure is based on a careful analysis of what our customers need in terms of professional services vs. low budgets. That's why we have decided to strike a chord with our customers by giving them the best at rates that you can't get anywhere else.";

export default function PricingPage() {
  return (
    <>
      <PageHero
        title="PRICING"
        subtitle={pricingIntro}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Pricing", href: "/pricing" },
        ]}
      />
      <PricingSection />
      <Features />
      <CTASection />
    </>
  );
}
