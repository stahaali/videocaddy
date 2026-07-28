import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero/PageHero";
import Testimonials from "@/components/sections/Testimonials/Testimonials";
import CTASection from "@/components/sections/CTASection/CTASection";
import { testimonials } from "@/data/testimonials";

export const metadata: Metadata = {
  title: "Client Testimonials",
  description:
    "Read what clients say about Video Caddy's video editing, animation, audio, and storyboard delivery.",
};

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        title="TESTIMONIALS"
        subtitle="Feedback from agencies, brands, and production teams who trust Video Caddy with their post-production work."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Testimonials", href: "/testimonials" },
        ]}
      />
      <Testimonials items={testimonials} limit={testimonials.length} />
      <CTASection />
    </>
  );
}
