import Image from "next/image";
import Container from "@/components/shared/Container/Container";
import ScrollReveal from "@/components/animations/ScrollReveal";
import VideoWhyChoose from "./VideoWhyChoose";
import VideoMidCta from "./VideoMidCta";
import type { VideoEditingPageData } from "@/data/video-editing";
import styles from "./VideoEditingContent.module.css";

interface VideoEditingContentProps {
  data: VideoEditingPageData;
}

export default function VideoEditingContent({ data }: VideoEditingContentProps) {
  const hasIntro = data.intro.length > 0;
  const hasServices = data.services.length > 0;
  const hasWhy = data.why.items.length > 0;
  const hasProcess = data.process.length > 0;
  const hasMidCta =
    Boolean(data.midCta) && (data.midCta?.placement ?? "content") === "content";

  return (
    <>
      {hasIntro ? (
        <section className={`${styles.introSection} spacing-section`} aria-labelledby="video-intro">
          <Container>
            <ScrollReveal>
              <div className={styles.introWrap}>
                <h2 id="video-intro" className="sr-only">
                  About {data.label}
                </h2>
                {data.intro.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)} className={styles.introText}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </ScrollReveal>
          </Container>
        </section>
      ) : null}

      {hasServices ? (
        <section
          id="services"
          className={`${styles.servicesSection} spacing-section`}
          aria-labelledby="video-services-title"
        >
          <Container>
            {data.servicesHeader?.title ? (
              <ScrollReveal>
                <div className={styles.servicesHeaderRow}>
                  <div className={styles.servicesHeaderLeft}>
                    <h2 id="video-services-title" className={styles.servicesHeading}>
                      {data.servicesHeader.title}
                    </h2>
                  </div>
                  {data.servicesHeader.description ? (
                    <div className={styles.servicesHeaderRight}>
                      <p className={styles.servicesIntro}>{data.servicesHeader.description}</p>
                    </div>
                  ) : null}
                </div>
              </ScrollReveal>
            ) : null}

            <ScrollReveal stagger={0.08}>
              <div className={styles.servicesGrid}>
                {data.services.map((service) => (
                  <article key={service.title} className={styles.boxService}>
                    {service.image ? (
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
                    ) : null}
                    <div className={styles.boxContent}>
                      <h3 className={styles.boxTitle}>{service.title}</h3>
                      <ul className={styles.boxList}>
                        {service.items.map((item) => (
                          <li key={item.slice(0, 48)}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </article>
                ))}
              </div>
            </ScrollReveal>
          </Container>
        </section>
      ) : null}

      {hasWhy ? (
        <VideoWhyChoose
          title={data.why.title || `Why Choose ${data.label}`}
          description={data.why.description}
          items={data.why.items}
          image={data.why.image}
          imageAlt={data.why.title || data.label}
        />
      ) : null}

      {hasProcess ? (
        <section
          className={`${styles.processSection} spacing-section`}
          aria-labelledby="video-process-title"
        >
          <Container>
            <ScrollReveal>
              <h2 id="video-process-title" className={styles.processHeading}>
                Our Process
              </h2>
              <ol className={styles.processList}>
                {data.process.map((step, index) => (
                  <li key={step.title} className={styles.processItem}>
                    <span className={styles.processNumber} aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className={styles.processBody}>
                      <h3 className={styles.processTitle}>{step.title}</h3>
                      <p className={styles.processText}>{step.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </ScrollReveal>
          </Container>
        </section>
      ) : null}

      {hasMidCta && data.midCta ? <VideoMidCta data={data.midCta} /> : null}
    </>
  );
}
