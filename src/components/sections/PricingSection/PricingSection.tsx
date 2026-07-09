import Container from "@/components/shared/Container/Container";
import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";
import Button from "@/components/shared/Button/Button";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { pricingTiers, pricingDisclaimer } from "@/data/pricing";
import { contactInfo } from "@/data/navigation";

interface PricingSectionProps {
  showDisclaimer?: boolean;
  showGetStarted?: boolean;
  intro?: string;
}

export default function PricingSection({
  showDisclaimer = true,
  showGetStarted = true,
  intro,
}: PricingSectionProps) {
  return (
    <>
      <section className="bg-black spacing-section" aria-labelledby="pricing-title">
        <Container>
          <SectionTitle title="PRICING" />
          {intro && (
            <p className="mx-auto mb-12 max-w-[700px] text-center leading-relaxed text-text-muted">
              {intro}
            </p>
          )}
          <ScrollReveal stagger={0.15}>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {pricingTiers.map((tier) => (
                <article
                  key={tier.title}
                  className="rounded-lg border border-white/10 bg-bg-card p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary"
                >
                  <h3 className="mb-6 border-b-2 border-primary pb-4 font-heading text-xl font-bold text-white uppercase">
                    {tier.title}
                  </h3>
                  <p className="mb-2 text-[13px] text-text-dim">Basic Pricing (starting)</p>
                  <p className="mb-1 font-heading text-[2rem] font-extrabold text-primary">
                    {tier.basicPrice}
                  </p>
                  <p className="mb-6 text-sm text-text-muted">{tier.basicLabel}</p>
                  <div className="my-6 h-px bg-white/15" />
                  {tier.tiers && (
                    <>
                      <p className="mb-4 text-xs font-bold tracking-widest text-primary uppercase">
                        Advanced Pricing Influencers
                      </p>
                      {tier.tiers.map((t) => (
                        <div key={t.name} className="mb-4">
                          <p className="mb-1 text-[15px] font-bold">{t.name}</p>
                          <p className="text-[13px] leading-snug text-text-muted">{t.description}</p>
                        </div>
                      ))}
                    </>
                  )}
                  {tier.influencers && (
                    <>
                      <p className="mb-4 text-xs font-bold tracking-widest text-primary uppercase">
                        Advanced Pricing Influencers
                      </p>
                      <ul className="flex flex-col gap-2">
                        {tier.influencers.map((item) => (
                          <li
                            key={item}
                            className="relative pl-4 text-[13px] text-text-muted before:absolute before:left-0 before:text-primary before:content-['•']"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </article>
              ))}
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {showDisclaimer && (
        <section className="bg-bg-section spacing-section">
          <Container>
            <h2 className="mb-6 font-heading text-xl font-bold">Pricing Disclaimer</h2>
            {pricingDisclaimer.map((text) => (
              <p key={text.slice(0, 40)} className="mb-4 text-[15px] leading-relaxed text-text-muted">
                {text}
              </p>
            ))}
          </Container>
        </section>
      )}

      {showGetStarted && (
        <section className="bg-black spacing-section text-center">
          <Container>
            <h2 className="section-heading mb-8">Get Started Now!</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/contact" variant="primary">
                Contact Us
              </Button>
              <Button href={`mailto:${contactInfo.email}`} variant="outline">
                Email Us
              </Button>
              <Button href={`tel:${contactInfo.phone}`} variant="secondary">
                Call
              </Button>
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
