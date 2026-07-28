import Container from "@/components/shared/Container/Container";
import styles from "./InfoPageContent.module.css";

export interface InfoBullet {
  title?: string;
  text: string;
}

export interface InfoSection {
  title: string;
  paragraphs?: string[];
  bullets?: InfoBullet[];
}

export interface InfoCard {
  title: string;
  description: string;
  href?: string;
}

export interface GlossaryTerm {
  term: string;
  definition: string;
}

interface InfoPageContentProps {
  sections?: InfoSection[];
  cards?: InfoCard[];
  cardsTitle?: string;
  glossary?: GlossaryTerm[];
}

export default function InfoPageContent({
  sections,
  cards,
  cardsTitle,
  glossary,
}: InfoPageContentProps) {
  return (
    <section className={`${styles.section} spacing-section`}>
      <Container>
        {sections && sections.length > 0 ? (
          <div className={styles.content}>
            {sections.map((section) => (
              <article key={section.title} className={styles.block}>
                <h2 className={styles.heading}>{section.title}</h2>
                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)} className={styles.paragraph}>
                    {paragraph}
                  </p>
                ))}
                {section.bullets && section.bullets.length > 0 ? (
                  <ul className={styles.list}>
                    {section.bullets.map((bullet) => (
                      <li key={bullet.title ?? bullet.text.slice(0, 48)} className={styles.listItem}>
                        {bullet.title ? (
                          <>
                            <span className={styles.bulletTitle}>{bullet.title}</span>
                            {": "}
                            {bullet.text}
                          </>
                        ) : (
                          bullet.text
                        )}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ))}
          </div>
        ) : null}

        {cards && cards.length > 0 ? (
          <div className={styles.cardsWrap}>
            {cardsTitle ? <h2 className={styles.cardsTitle}>{cardsTitle}</h2> : null}
            <div className={styles.cardsGrid}>
              {cards.map((card) => (
                <article key={card.title} className={styles.card}>
                  <h3 className={styles.cardTitle}>{card.title}</h3>
                  <p className={styles.cardText}>{card.description}</p>
                  {card.href ? (
                    <a href={card.href} className={styles.cardLink}>
                      Read more
                    </a>
                  ) : null}
                </article>
              ))}
            </div>
          </div>
        ) : null}

        {glossary && glossary.length > 0 ? (
          <dl className={styles.glossary}>
            {glossary.map((item) => (
              <div key={item.term} className={styles.glossaryItem}>
                <dt className={styles.term}>{item.term}</dt>
                <dd className={styles.definition}>{item.definition}</dd>
              </div>
            ))}
          </dl>
        ) : null}
      </Container>
    </section>
  );
}
