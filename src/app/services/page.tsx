import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero/PageHero";
import Services from "@/components/sections/Services/Services";
import VideoCategories from "@/components/sections/VideoCategories/VideoCategories";
import Process from "@/components/sections/Process/Process";
import Approach from "@/components/sections/Approach/Approach";
import Features from "@/components/sections/Features/Features";
import Software from "@/components/sections/Software/Software";
import FAQ from "@/components/sections/FAQ/FAQ";
import CTASection from "@/components/sections/CTASection/CTASection";

export const metadata: Metadata = {
  title: "Video Editing Services",
  description:
    "Explore Video Caddy's comprehensive video editing, audio editing, visual effects, and post-production services.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="PROFESSIONAL SERVICES"
        title="VIDEO EDITING & POST-PRODUCTION SERVICES"
        subtitle="Unlock finesse with our comprehensive video editing, visual effects, and audio post-production services tailored to your needs."
        cta={{ label: "GET STARTED NOW", href: "/contact" }}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
        ]}
      />
      <Services />
      <VideoCategories />
      <Process />
      <Approach />
      <Software />
      <Features />
      <FAQ />
      <CTASection />
    </>
  );
}
