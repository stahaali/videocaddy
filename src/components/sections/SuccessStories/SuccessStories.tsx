"use client";

import { useState } from "react";
import Link from "next/link";
import Container from "@/components/shared/Container/Container";
import { successStories } from "@/data/home";
import { audioCaseStudies } from "@/data/audio-editing";
import { cn } from "@/lib/cn";
import styles from "./SuccessStories.module.css";

export interface SuccessStoriesCaseStudyItem {
  title: string;
  href: string;
  description?: string;
  variant?: "white" | "middle";
}

export interface SuccessStoriesCaseStudies {
  eyebrow: string;
  title: string;
  viewAll: { label: string; href: string };
  items: SuccessStoriesCaseStudyItem[];
}

interface SuccessStoriesProps {
  /** carousel = homepage slider; caseStudies = boxed layout */
  variant?: "carousel" | "caseStudies";
  /** When provided with variant=caseStudies, overrides the default audio case studies */
  caseStudies?: SuccessStoriesCaseStudies;
}

export default function SuccessStories({
  variant = "carousel",
  caseStudies,
}: SuccessStoriesProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalSlides = successStories.length;

  const goToSlide = (index: number) => {
    setActiveIndex((index + totalSlides) % totalSlides);
  };

  if (variant === "caseStudies") {
    const studies = caseStudies ?? audioCaseStudies;

    return (
      <section
        className={`${styles.caseSection} spacing-section`}
        aria-labelledby="stories-title"
      >
        <Container>
          <div className={styles.caseHeader}>
            <div className={styles.caseHeaderLeft}>
              <div className={styles.caseEyebrow}>{studies.eyebrow}</div>
              <h2 id="stories-title" className={styles.caseTitle}>
                {studies.title}
              </h2>
            </div>
            <div className={styles.caseHeaderRight}>
              <Link href={studies.viewAll.href} className={`btn-all ${styles.caseViewAll}`}>
                {studies.viewAll.label}
              </Link>
            </div>
          </div>

          <div
            className={cn(
              styles.caseRow,
              studies.items.length >= 3 && styles.caseRowThree
            )}
          >
            {studies.items.map((item) => {
              const description =
                "description" in item && typeof item.description === "string"
                  ? item.description
                  : undefined;

              return (
              <article
                key={item.title}
                className={cn(
                  styles.caseBox,
                  item.variant === "white" ? styles.caseBoxWhite : styles.caseBoxMiddle
                )}
              >
                <p className={styles.caseLabel}>CASE STUDY</p>
                <p className={styles.caseStudyTitle}>
                  <Link href={item.href} title={item.title}>
                    {item.title}
                  </Link>
                </p>
                {description ? (
                  <p className={styles.caseStudyDesc}>{description}</p>
                ) : null}
                <p className={styles.caseViewMore}>
                  <Link href={item.href} title="VIEW MORE">
                    VIEW MORE <span className={styles.caseArrow} aria-hidden="true">→</span>
                  </Link>
                </p>
              </article>
              );
            })}
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className={`${styles.section} spacing-section`} aria-labelledby="stories-title">
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
