import Link from "next/link";
import Container from "@/components/shared/Container/Container";
import type { VideoEditingLink } from "@/data/video-editing";
import { assets } from "@/data/assets";
import styles from "./VideoEditingContent.module.css";

export interface VideoMidCtaData {
  title: string;
  description: string | string[];
  cta: VideoEditingLink;
}

interface VideoMidCtaProps {
  data: VideoMidCtaData;
}

export default function VideoMidCta({ data }: VideoMidCtaProps) {
  const paragraphs = Array.isArray(data.description)
    ? data.description
    : [data.description];

  return (
    <section className={styles.midCta} id="ss-page-cta" aria-labelledby="video-mid-cta">
      <Container>
        <div
          className={styles.midCtaBg}
          style={{ backgroundImage: `url(${assets.audioEditing.pageCta})` }}
        >
          <div className={styles.midCtaContent} id="ss-page-cta-content">
            <h2 id="video-mid-cta" className={styles.midCtaTitle}>
              {data.title}
            </h2>
            {paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 48)} className={styles.midCtaText}>
                {paragraph}
              </p>
            ))}
            <p className={styles.midCtaButtonWrap}>
              <Link href={data.cta.href} className="btn-all">
                {data.cta.label}
              </Link>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
