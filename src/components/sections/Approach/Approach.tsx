import Container from "@/components/shared/Container/Container";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { approachItems } from "@/data/home";
import styles from "./Approach.module.css";

const introText =
  "At Video Caddy, we are passionate about delivering unparalleled quality in every frame, backed by a team with extensive industry experience. Whether you\u2019re a cinematographer in need of a reliable post-production ally or a business seeking expert video editing, we are equipped to transform your vision into reality.";

function ApproachColumn({ items }: { items: typeof approachItems }) {
  return (
    <div className={styles.column}>
      {items.map((item) => (
        <article key={item.title} className={styles.item}>
          <span className={styles.icon} aria-hidden="true" />
          <div>
            <h3 className={styles.itemTitle}>{item.title}</h3>
            <p className={styles.itemText}>{item.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

export default function Approach() {
  const midpoint = Math.ceil(approachItems.length / 2);
  const leftCol = approachItems.slice(0, midpoint);
  const rightCol = approachItems.slice(midpoint);

  return (
    <section className={`${styles.section} spacing-section`} aria-labelledby="approach-title">
      <Container>
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <span className={styles.eyebrow}>OUR UNIQUE APPROACH TO</span>
            <h2 id="approach-title" className={styles.title}>
              POST PRODUCTION &amp; VIDEO EDITING
            </h2>
          </div>
          <p className={styles.intro}>{introText}</p>
        </div>

        <ScrollReveal>
          <div className={styles.grid}>
            <ApproachColumn items={leftCol} />
            <ApproachColumn items={rightCol} />
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
