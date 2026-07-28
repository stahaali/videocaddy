import Image from "next/image";
import Link from "next/link";
import Container from "@/components/shared/Container/Container";
import { assets } from "@/data/assets";
import styles from "./AudioEditingBanner.module.css";

interface AudioEditingBannerProps {
  title?: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export default function AudioEditingBanner({
  title = "Audio Editing Services",
  subtitle = "Audio editing services for podcast networks, agencies, and production teams, designed to refine dialogue, balance soundtracks, and prepare audio tracks for professional distribution and broadcast.",
  ctaLabel = "Contact Us",
  ctaHref = "/contact",
}: AudioEditingBannerProps) {
  return (
    <section className={styles.banner} aria-label="Audio Editing Services">
      <Container>
        <div className={styles.row}>
          <div className={styles.col}>
            <div className={styles.text}>
              <h1>{title}</h1>
              <p>{subtitle}</p>
            </div>
            <div className={styles.buttons}>
              <Link href={ctaHref} className="btn-all">
                {ctaLabel}
              </Link>
            </div>
          </div>

          <div className={styles.col}>
            <div className={styles.videoSection}>
              <div className={styles.videoWrapper}>
                <Image
                  src={assets.audioEditingBanner}
                  alt="Audio Editing Services"
                  title="Audio Editing Services"
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
