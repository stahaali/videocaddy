"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "@/components/shared/Container/Container";
import type { VideoEditingWhyItem } from "@/data/video-editing";
import { assets } from "@/data/assets";
import styles from "./VideoEditingContent.module.css";

const INITIAL_VISIBLE = 4;

interface VideoWhyChooseProps {
  title: string;
  description?: string;
  items: VideoEditingWhyItem[];
  image?: string;
  imageAlt?: string;
}

export default function VideoWhyChoose({
  title,
  description,
  items,
  image = assets.benefitImg,
  imageAlt = "Why choose our video editing services",
}: VideoWhyChooseProps) {
  const [expanded, setExpanded] = useState(false);
  const visibleItems = expanded ? items : items.slice(0, INITIAL_VISIBLE);
  const hasMore = items.length > INITIAL_VISIBLE;

  return (
    <section className={`${styles.whySection} spacing-section`} aria-labelledby="video-why-title">
      <Container>
        <div className={styles.whyRow}>
          <div className={styles.whyLeft}>
            <h2 id="video-why-title" className={styles.whyHeading}>
              {title}
            </h2>
            {description ? <p className={styles.whyIntro}>{description}</p> : null}
            <div className={styles.whyImageWrap}>
              <Image
                src={image}
                alt={imageAlt}
                title={imageAlt}
                width={560}
                height={360}
                className={styles.whyImage}
                sizes="(max-width: 991px) 100vw, 50vw"
              />
              <span className={styles.whyAccent} aria-hidden="true" />
            </div>
          </div>

          <div className={styles.whyRight} id="what-we-do">
            {visibleItems.map((item) => (
              <article key={item.title} className={styles.whyCard}>
                <div className={styles.whyCardInner}>
                  <span className={styles.whyIcon} aria-hidden="true">
                    ✓
                  </span>
                  <div className={styles.whyCardBody}>
                    <h3 className={styles.whyTitle}>{item.title}</h3>
                    <p className={styles.whyText}>{item.description}</p>
                  </div>
                </div>
              </article>
            ))}

            {hasMore ? (
              <div className={styles.viewMoreContainer}>
                <button
                  type="button"
                  id="view-more-btn"
                  className={styles.viewMoreBtn}
                  onClick={() => setExpanded((prev) => !prev)}
                  aria-expanded={expanded}
                >
                  {expanded ? "View Less" : "View More"}
                </button>
              </div>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
