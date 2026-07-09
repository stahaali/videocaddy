import Container from "@/components/shared/Container/Container";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { aboutContent } from "@/data/about";

export default function AboutContent() {
  return (
    <section className="bg-black spacing-section" aria-labelledby="about-content-title">
      <Container>
        <ScrollReveal>
          <div className="mx-auto max-w-[800px]">
            <h2 id="about-content-title" className="section-heading mb-8 text-center">
              {aboutContent.title}
            </h2>
            {aboutContent.paragraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="mb-6 text-[17px] leading-relaxed text-text-muted last:mb-0"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
