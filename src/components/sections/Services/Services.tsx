import Image from "next/image";
import Container from "@/components/shared/Container/Container";
import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { serviceCategories } from "@/data/home";
import styles from "./Services.module.css";

export default function Services() {
  return (
    <section className={`${styles.section} spacing-section`} aria-labelledby="services-title">
      <Container>
        <SectionTitle title="UNLOCK FINESSE WITH OUR VIDEO EDITING AND POST-PRODUCTION SERVICES" />
        <ScrollReveal stagger={0.12}>
          <div className={styles.grid}>
            {serviceCategories.map((category) => (
              <article key={category.title} className={styles.card}>
                <div className={styles.cardInner}>
                  <div className={styles.imageWrap}>
                    <Image
                      src={category.image}
                      alt={category.title}
                      width={220}
                      height={280}
                      className={styles.image}
                      sizes="(max-width: 768px) 100vw, (max-width: 992px) 50vw, 33vw"
                      loading="lazy"
                    />
                  </div>
                  <div className={styles.contentBox}>
                    <ul className={styles.list}>
                      {category.items.map((item) => (
                        <li key={item} className={styles.listItem}>
                          <span className={styles.bullet} aria-hidden="true" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <h3 className={styles.cardTitle}>{category.title}</h3>
              </article>
            ))}
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
