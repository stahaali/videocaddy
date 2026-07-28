import Image from "next/image";
import Link from "next/link";
import Container from "@/components/shared/Container/Container";
import ScrollReveal from "@/components/animations/ScrollReveal";
import AudioWhyChoose from "./AudioWhyChoose";
import {
  audioEditingIntro,
  audioEditingServices,
  audioEditingServicesHeader,
  audioMidCta,
} from "@/data/audio-editing";
import { assets } from "@/data/assets";
import styles from "./AudioEditingContent.module.css";

export default function AudioEditingContent() {
  return (
    <>
      <section className={`${styles.introSection} spacing-section`} aria-labelledby="audio-intro">
        <Container>
          <ScrollReveal>
            <div className={styles.introWrap}>
              <h2 id="audio-intro" className="sr-only">
                About our audio editing services
              </h2>
              {audioEditingIntro.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className={styles.introText}>
                  {paragraph}
                </p>
              ))}
            </div>
          </ScrollReveal>
        </Container>
      </section>

      <section
        id="services"
        className={`${styles.servicesSection} spacing-section`}
        aria-labelledby="audio-services-title"
      >
        <Container>
          <ScrollReveal>
            <div className={styles.servicesHeaderRow}>
              <div className={styles.servicesHeaderLeft}>
                <h2 id="audio-services-title" className={styles.servicesHeading}>
                  {audioEditingServicesHeader.titleLine1}
                  <br />
                  {audioEditingServicesHeader.titleLine2}
                </h2>
              </div>
              <div className={styles.servicesHeaderRight}>
                <p className={styles.servicesIntro}>{audioEditingServicesHeader.description}</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal stagger={0.08}>
            <div className={styles.servicesGrid}>
              {audioEditingServices.map((service) => (
                <article key={service.title} className={styles.boxService}>
                  <div className={styles.boxImageWrap}>
                    <Image
                      src={service.image}
                      alt={service.title}
                      title={service.title}
                      width={346}
                      height={160}
                      className={`${styles.boxImage} zoom-effect`}
                      sizes="(max-width: 767px) 100vw, (max-width: 1079px) 50vw, 33vw"
                    />
                  </div>
                  <div className={styles.boxContent}>
                    <h3 className={styles.boxTitle}>{service.title}</h3>
                    <ul className={styles.boxList}>
                      {service.items.map((parts, index) => (
                        <li key={`${service.title}-${index}`}>
                          {parts.map((part, partIndex) =>
                            part.type === "link" ? (
                              <Link
                                key={`${part.value}-${partIndex}`}
                                href={part.href}
                                className={styles.inlineLink}
                              >
                                {part.value}
                              </Link>
                            ) : (
                              <span key={`${part.value.slice(0, 24)}-${partIndex}`}>{part.value}</span>
                            )
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </ScrollReveal>
        </Container>
      </section>

      <AudioWhyChoose />

      <section className={styles.midCta} id="ss-page-cta" aria-labelledby="audio-mid-cta">
        <Container>
          <div
            className={styles.midCtaBg}
            style={{ backgroundImage: `url(${assets.audioEditing.pageCta})` }}
          >
            <div className={styles.midCtaContent} id="ss-page-cta-content">
              <h2 id="audio-mid-cta" className={styles.midCtaTitle}>
                {audioMidCta.title}
              </h2>
              <p className={styles.midCtaText}>
                {audioMidCta.descriptionBefore}{" "}
                <Link href={audioMidCta.descriptionLink.href} className={styles.midCtaInlineLink}>
                  {audioMidCta.descriptionLink.label}
                </Link>
                {audioMidCta.descriptionAfter}
              </p>
              <p className={styles.midCtaButtonWrap}>
                <Link href={audioMidCta.cta.href} className="btn-all">
                  {audioMidCta.cta.label}
                </Link>
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
