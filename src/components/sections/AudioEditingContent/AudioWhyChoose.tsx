"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "@/components/shared/Container/Container";
import { audioWhyChoose } from "@/data/audio-editing";
import { assets } from "@/data/assets";
import styles from "./AudioEditingContent.module.css";

const INITIAL_VISIBLE = 4;

export default function AudioWhyChoose() {
  const [expanded, setExpanded] = useState(false);
  const visibleItems = expanded
    ? audioWhyChoose.items
    : audioWhyChoose.items.slice(0, INITIAL_VISIBLE);
  const hasMore = audioWhyChoose.items.length > INITIAL_VISIBLE;

  return (
    <section className={`${styles.whySection} spacing-section`} aria-labelledby="audio-why-title">
      <Container>
        <div className={styles.whyRow}>
          <div className={styles.whyLeft}>
            <h2 id="audio-why-title" className={styles.whyHeading}>
              {audioWhyChoose.title}
            </h2>
            <p className={styles.whyIntro}>{audioWhyChoose.description}</p>
            <div className={styles.whyImageWrap}>
              <Image
                src={assets.audioEditing.benefit}
                alt="Why Should Businesses Choose Our Audio Editing Services"
                title="Why Should Businesses Choose Our Audio Editing Services"
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

            {hasMore && (
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
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
