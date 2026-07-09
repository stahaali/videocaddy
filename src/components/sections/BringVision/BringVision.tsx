import Link from "next/link";
import Container from "@/components/shared/Container/Container";
import Button from "@/components/shared/Button/Button";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { aboutFeatures } from "@/data/about";
import { contactInfo } from "@/data/navigation";

export default function BringVision() {
  return (
    <section className="bg-bg-section spacing-section" aria-labelledby="vision-title">
      <Container>
        <div className="mb-12 text-center">
          <span className="mb-3 block text-xs font-semibold tracking-[0.2em] text-primary uppercase">
            Start Your Video Editing Journey today
          </span>
          <h2 id="vision-title" className="section-heading mb-6">
            BRING YOUR VISION TO LIFE!
          </h2>
          <div className="flex justify-center">
            <Button href="/contact" variant="primary" size="large">
              Contact Us
            </Button>
          </div>
        </div>

        <ScrollReveal stagger={0.1}>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {aboutFeatures.map((feature) => (
              <article
                key={feature.title}
                className="rounded-md border border-white/10 bg-bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary"
              >
                <h3 className="mb-4 font-heading text-base font-bold tracking-wide text-primary uppercase">
                  {feature.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-text-muted">{feature.description}</p>
              </article>
            ))}
          </div>
        </ScrollReveal>

        <div className="mt-12 rounded-lg border border-white/15 bg-bg-card p-8 text-center">
          <h3 className="mb-6 font-heading text-lg font-bold">Need Pricing Details?</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/pricing"
              className="rounded-sm border border-white/15 px-4 py-2 text-sm font-semibold text-text-muted transition-all hover:border-primary hover:text-primary"
            >
              View Pricing
            </Link>
            <Link
              href="/contact"
              className="rounded-sm border border-white/15 px-4 py-2 text-sm font-semibold text-text-muted transition-all hover:border-primary hover:text-primary"
            >
              Contact Form
            </Link>
            <a
              href={`mailto:${contactInfo.email}`}
              className="rounded-sm border border-white/15 px-4 py-2 text-sm font-semibold text-text-muted transition-all hover:border-primary hover:text-primary"
            >
              Email
            </a>
            <a
              href={`tel:${contactInfo.phone}`}
              className="rounded-sm border border-white/15 px-4 py-2 text-sm font-semibold text-text-muted transition-all hover:border-primary hover:text-primary"
            >
              {contactInfo.phone}
            </a>
            <Link
              href="/contact"
              className="rounded-sm border border-white/15 px-4 py-2 text-sm font-semibold text-text-muted transition-all hover:border-primary hover:text-primary"
            >
              Book A Meeting
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
