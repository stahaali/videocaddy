import type { Metadata } from "next";
import AudioEditingBanner from "@/components/sections/AudioEditingBanner/AudioEditingBanner";
import Stats from "@/components/sections/Stats/Stats";
import AudioEditingContent from "@/components/sections/AudioEditingContent/AudioEditingContent";
import Testimonials from "@/components/sections/Testimonials/Testimonials";
import TrialForm from "@/components/sections/TrialForm/TrialForm";
import SuccessStories from "@/components/sections/SuccessStories/SuccessStories";
import CTASection from "@/components/sections/CTASection/CTASection";
import FAQ from "@/components/sections/FAQ/FAQ";
import { audioEditingHero, audioEditingFaqs } from "@/data/audio-editing";
import { assets } from "@/data/assets";

export const metadata: Metadata = {
  title: "Audio Editing Services",
  description:
    "Professional audio editing services for podcasts, agencies, and production teams — dialogue cleanup, restoration, mixing, and broadcast-ready delivery.",
};

export default function AudioEditingPage() {
  return (
    <>
      <AudioEditingBanner
        title={audioEditingHero.title}
        subtitle={audioEditingHero.subtitle}
        ctaLabel={audioEditingHero.cta.label}
        ctaHref={audioEditingHero.cta.href}
      />
      <Stats variant="light" />
      <AudioEditingContent />
      <Testimonials />
      <TrialForm />
      <SuccessStories variant="caseStudies" />
      <CTASection variant="light" image={assets.serviceCtaImg} />
      <FAQ items={audioEditingFaqs} />
    </>
  );
}
