import Link from "next/link";
import Container from "@/components/shared/Container/Container";
import { privacyPolicySections } from "@/data/privacy-policy";
import styles from "./PrivacyPolicyContent.module.css";

export default function PrivacyPolicyContent() {
  return (
    <>
      <section className={styles.banner} aria-labelledby="privacy-title">
        <Container>
          <div className={styles.bannerInner}>
            <h1 id="privacy-title" className={styles.bannerTitle}>
              Privacy Policy
            </h1>
            <nav className={styles.breadcrumbBox} aria-label="Breadcrumb">
              <Link href="/" className={styles.breadcrumbHome}>
                Home
              </Link>
              <span className={styles.breadcrumbSep} aria-hidden="true">
                {" "}
                &gt;{" "}
              </span>
              <span className={styles.breadcrumbCurrent}>Privacy Policy</span>
            </nav>
          </div>
        </Container>
      </section>

      <section className={`${styles.section} spacing-section`}>
        <Container>
          <div className={styles.content}>
            {privacyPolicySections.map((section) => (
              <article key={section.title} className={styles.block}>
                <h2 className={styles.heading}>{section.title}</h2>

                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)} className={styles.paragraph}>
                    {paragraph}
                  </p>
                ))}

                {section.bullets && section.bullets.length > 0 && (
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
                )}

                {section.trailingParagraphs?.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)} className={styles.paragraph}>
                    {paragraph}
                  </p>
                ))}
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
