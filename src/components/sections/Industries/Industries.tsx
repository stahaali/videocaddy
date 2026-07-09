import Container from "@/components/shared/Container/Container";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { industries } from "@/data/home";

export default function Industries() {
  return (
    <section className="bg-white spacing-section" aria-labelledby="industries-title">
      <Container>
        <h2
          id="industries-title"
          className="mb-12 font-heading text-[40px] font-semibold uppercase leading-tight text-black"
        >
          INDUSTRIES WE SERVE
        </h2>
        <ScrollReveal stagger={0.1}>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {industries.map((industry) => (
              <article
                key={industry.title}
                className="group border border-black bg-white p-8 transition-colors duration-300 hover:bg-black"
              >
                <h3 className="mb-3 font-heading text-[15px] font-bold uppercase tracking-wide text-black transition-colors duration-300 group-hover:text-white">
                  {industry.title}
                </h3>
                <p className="font-azo-sans text-sm leading-relaxed text-black transition-colors duration-300 group-hover:text-white">
                  {industry.description}
                </p>
              </article>
            ))}
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
