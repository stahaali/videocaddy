import Image from "next/image";
import Link from "next/link";
import Container from "@/components/shared/Container/Container";
import type { VideoEditingLink } from "@/data/video-editing";
import { cn } from "@/lib/cn";
import styles from "./VideoEditingBanner.module.css";

interface VideoEditingBannerProps {
  title: string;
  subtitle: string;
  image: string;
  backgroundImage?: string;
  primaryCta: VideoEditingLink;
  secondaryCta?: VideoEditingLink;
}

export default function VideoEditingBanner({
  title,
  subtitle,
  image,
  backgroundImage,
  primaryCta,
  secondaryCta,
}: VideoEditingBannerProps) {
  return (
    <section
      className={cn(styles.banner, backgroundImage && styles.bannerSsPage)}
      style={
        backgroundImage
          ? { backgroundImage: `url(${backgroundImage})` }
          : undefined
      }
      aria-label={title}
    >
      <Container>
        <div className={styles.row}>
          <div className={styles.col}>
            <div className={styles.text}>
              <h1>{title}</h1>
              {subtitle ? <p>{subtitle}</p> : null}
            </div>
            <div className={styles.buttons}>
              <Link href={primaryCta.href} className="btn-all">
                {primaryCta.label}
              </Link>
              {secondaryCta ? (
                <Link href={secondaryCta.href} className="btn-all dark-btn">
                  {secondaryCta.label}
                </Link>
              ) : null}
            </div>
          </div>

          <div className={styles.col}>
            <div className={styles.videoSection}>
              <div className={styles.videoWrapper}>
                <Image
                  src={image}
                  alt={title}
                  title={title}
                  width={640}
                  height={420}
                  className={`${styles.bannerImage} zoom-effect`}
                  priority
                  sizes="(max-width: 991px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
