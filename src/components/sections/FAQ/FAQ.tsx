"use client";

import { useState } from "react";
import Container from "@/components/shared/Container/Container";
import { faqItems } from "@/data/faq";
import type { FAQItem } from "@/data/faq";
import { cn } from "@/lib/cn";
import styles from "./FAQ.module.css";

interface FAQProps {
  items?: FAQItem[];
}

function FAQColumn({
  items,
  startIndex,
  openIndex,
  onToggle,
}: {
  items: FAQItem[];
  startIndex: number;
  openIndex: number | null;
  onToggle: (index: number) => void;
}) {
  return (
    <div className={styles.column}>
      {items.map((item, columnIndex) => {
        const index = startIndex + columnIndex;
        const isOpen = openIndex === index;

        return (
          <div key={item.question} className={styles.item}>
            <button
              type="button"
              className={styles.question}
              onClick={() => onToggle(isOpen ? -1 : index)}
              aria-expanded={isOpen}
            >
              <span className={styles.questionText}>{item.question}</span>
              <i
                className={cn("my-icon icon-arrow-bottom", styles.angle, isOpen && styles.angleOpen)}
                aria-hidden="true"
              />
            </button>
            <div
              className={styles.answerWrap}
              style={{ maxHeight: isOpen ? "320px" : "0" }}
            >
              <p className={styles.answer}>{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function FAQ({ items = faqItems }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const midpoint = Math.ceil(items.length / 2);
  const leftItems = items.slice(0, midpoint);
  const rightItems = items.slice(midpoint);

  const handleToggle = (index: number) => {
    setOpenIndex(index === -1 ? null : index);
  };

  return (
    <section className={`${styles.section} spacing-section`} aria-labelledby="faq-title">
      <Container>
        <h2 id="faq-title" className={styles.title}>
          Frequently Asked Questions (FAQs)
        </h2>
        <div className={styles.grid}>
          <FAQColumn
            items={leftItems}
            startIndex={0}
            openIndex={openIndex}
            onToggle={handleToggle}
          />
          <FAQColumn
            items={rightItems}
            startIndex={midpoint}
            openIndex={openIndex}
            onToggle={handleToggle}
          />
        </div>
      </Container>
    </section>
  );
}
