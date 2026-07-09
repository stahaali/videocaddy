import Image from "next/image";
import Container from "@/components/shared/Container/Container";
import { testimonials } from "@/data/testimonials";
import { assets } from "@/data/assets";
import type { Testimonial } from "@/data/testimonials";
import styles from "./Testimonials.module.css";

interface TestimonialsProps {
  items?: Testimonial[];
}

function StarRating() {
  return (
    <div className={styles.stars} aria-hidden="true">
      {Array.from({ length: 5 }).map((_, index) => (
        <Image
          key={index}
          src={assets.icons.testimonialStar}
          alt=""
          width={14}
          height={13}
        />
      ))}
    </div>
  );
}

export default function Testimonials({ items = testimonials }: TestimonialsProps) {
  const visibleItems = items.slice(0, 3);

  return (
    <section
      id="testimonials"
      className={styles.section}
      aria-labelledby="testimonials-title"
    >
      <Container className={styles.inner}>
        <div className={styles.headerRow}>
          <div className={`${styles.headerCol} ${styles.headingCol}`}>
            <h3 className={styles.eyebrow}>CLIENTS FEEDBACK</h3>
            <h2 id="testimonials-title" className={styles.title}>
              <span className={styles.titleLine}>WHAT OUR CLIENTS SAY</span>
              <span className={styles.titleLine}>ABOUT VIDEO CADDY</span>
            </h2>
          </div>
          <div className={styles.quoteCol} aria-hidden="true">
            <Image
              src={assets.icons.testimonialQuote}
              alt=""
              width={150}
              height={150}
              className={styles.quoteIcon}
            />
          </div>
          <div className={`${styles.headerCol} ${styles.watermarkCol}`}>
            <h2 className={styles.lightText} aria-hidden="true">
              TESTIMONIALS
            </h2>
          </div>
        </div>

        <div className={styles.testimonialGrid}>
          {visibleItems.map((item) => (
            <article key={item.quote} className={styles.testimonialBox}>
              <StarRating />
              <div className={styles.testimonialText}>
                <p>{item.quote}</p>
                <p className={styles.tname}>{item.name}</p>
                <p className={styles.tcompany}>{item.company}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
