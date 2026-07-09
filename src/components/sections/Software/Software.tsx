import Image from "next/image";
import Container from "@/components/shared/Container/Container";
import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { assets } from "@/data/assets";
import styles from "./Software.module.css";

export default function Software() {
  return (
    <section className={styles.section} aria-labelledby="software-title">
      <Container>
        <span className={styles.eyebrow}>WE USE THE LATEST</span>
        <div className={styles.titleWrap}>
          <SectionTitle title="VIDEO EDITING SOFTWARE" className="!mb-0" />
        </div>
        <ScrollReveal>
          <div className={styles.grid}>
            <Image
              src={assets.software}
              alt="Video editing software including Adobe Premiere Pro, After Effects, DaVinci Resolve"
              width={600}
              height={200}
              className={styles.softwareImage}
              loading="lazy"
            />
            <div className={styles.editorWrap}>
              <Image
                src={assets.editingMan}
                alt="Professional video editor"
                width={400}
                height={450}
                className={styles.editorImage}
                loading="lazy"
              />
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
