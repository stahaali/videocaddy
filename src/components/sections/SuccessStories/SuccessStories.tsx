"use client";

import { useState } from "react";
import Link from "next/link";
import Container from "@/components/shared/Container/Container";
import { successStories } from "@/data/home";
import styles from "./SuccessStories.module.css";

export default function SuccessStories() {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalSlides = successStories.length;

  const goToSlide = (index: number) => {
    setActiveIndex((index + totalSlides) % totalSlides);
  };

  return (
    <section className={styles.section} aria-labelledby="stories-title">
      <Container>
        <div className={styles.header}>
          <div className={styles.headerContent}>
            <div className={styles.eyebrow}>VIDEO CADDY</div>
            <h2 id="stories-title" className={styles.title}>
              SUCCESS STORIES
            </h2>
          </div>
          <Link href="/portfolio" className={`btn-all ${styles.viewAll}`}>
            View all
          </Link>
        </div>

        <div className={styles.carousel}>
          <div className={styles.carouselInner}>
            {successStories.map((story, index) => (
              <div
                key={story.image}
                className={`${styles.carouselItem} ${index === activeIndex ? styles.carouselItemActive : ""}`}
                style={{ backgroundImage: `url('${story.image}')` }}
                aria-hidden={index !== activeIndex}
              >
                <div className={styles.carouselCaption}>
                  <h3 className={styles.captionTitle}>{story.title}</h3>
                  <p>
                    <Link href={story.href} className={styles.viewMoreLink}>
                      View more details
                    </Link>
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.indicators}>
            {successStories.map((story, index) => (
              <button
                key={story.image}
                type="button"
                className={`${styles.indicator} ${index === activeIndex ? styles.indicatorActive : ""}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={index === activeIndex ? "true" : undefined}
              />
            ))}
          </div>

          <button
            type="button"
            className={`${styles.control} ${styles.controlPrev}`}
            onClick={() => goToSlide(activeIndex - 1)}
            aria-label="Previous slide"
          >
            <span className={styles.controlIcon} aria-hidden="true" />
          </button>
          <button
            type="button"
            className={`${styles.control} ${styles.controlNext}`}
            onClick={() => goToSlide(activeIndex + 1)}
            aria-label="Next slide"
          >
            <span className={`${styles.controlIcon} ${styles.controlIconNext}`} aria-hidden="true" />
          </button>
        </div>
      </Container>
    </section>
  );
}
