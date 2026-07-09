import Container from "@/components/shared/Container/Container";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { features } from "@/data/features";
import type { Feature } from "@/data/features";
import styles from "./Features.module.css";

const featureIcons = [
  { symbol: "★", className: styles.iconLight },
  { symbol: "✓", className: styles.iconLight },
  { symbol: "⚡", className: styles.iconAccent },
  { symbol: "🔒", className: styles.iconAccent },
];

interface FeaturesProps {
  items?: Feature[];
  title?: string;
}

export default function Features({
  items = features,
  title = "OUR FEATURES",
}: FeaturesProps) {
  return (
    <section className={`${styles.section} spacing-section`} aria-labelledby="features-title">
      <Container>
        <h2 id="features-title" className={styles.title}>
          {title}
        </h2>
        <ScrollReveal stagger={0.1}>
          <div className={styles.grid}>
            {items.map((feature, index) => (
              <article key={feature.title} className={styles.card}>
                <div className={styles.iconCircle} aria-hidden="true">
                  <span className={featureIcons[index % featureIcons.length].className}>
                    {featureIcons[index % featureIcons.length].symbol}
                  </span>
                </div>
                <h3 className={styles.cardTitle}>{feature.title}</h3>
                <p className={styles.cardText}>{feature.description}</p>
              </article>
            ))}
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
