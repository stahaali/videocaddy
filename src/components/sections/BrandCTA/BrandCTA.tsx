import Container from "@/components/shared/Container/Container";

export default function BrandCTA() {
  return (
    <section className="bg-primary spacing-section text-center text-black" aria-labelledby="brand-cta-title">
      <Container>
        <h2 id="brand-cta-title" className="section-heading mb-4 text-black">
          <span className="block">Empower your brand</span>
          WITH expert video editing services
        </h2>
        <p className="mx-auto max-w-[600px] text-base leading-relaxed text-black/75">
          Choose Video Caddy, India&apos;s premier video editing agency, for a seamless
          and lucrative outstanding partnership!
        </p>
      </Container>
    </section>
  );
}
