import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero/PageHero";
import AboutContent from "@/components/sections/AboutContent/AboutContent";
import BringVision from "@/components/sections/BringVision/BringVision";
import Testimonials from "@/components/sections/Testimonials/Testimonials";
import Features from "@/components/sections/Features/Features";
import CTASection from "@/components/sections/CTASection/CTASection";
import { aboutHero } from "@/data/about";
import { aboutTestimonials } from "@/data/testimonials";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Video Caddy — a trusted video editing and post-production partner serving businesses worldwide for over a decade.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow={aboutHero.eyebrow}
        title={aboutHero.title}
        subtitle={aboutHero.subtitle}
        cta={aboutHero.cta}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us", href: "/about" },
        ]}
      />
      <AboutContent />
      <BringVision />
      <Testimonials items={aboutTestimonials} />
      <Features />
      <CTASection />
    </>
  );
}
