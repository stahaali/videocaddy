import Image from "next/image";
import Link from "next/link";
import Container from "@/components/shared/Container/Container";
import { videoCategories } from "@/data/home";
import styles from "./VideoCategories.module.css";

const categoryColumns = [
  videoCategories.slice(0, 4),
  videoCategories.slice(4, 10),
  videoCategories.slice(10, 15),
  videoCategories.slice(15, 20),
];

export default function VideoCategories() {
  return (
    <section className={`${styles.section} spacing-section`} aria-labelledby="categories-title">
      <Container>
        <h2 id="categories-title" className={styles.heading}>
          SOME OF THE POPULAR
          <br />
          VIDEO CATEGORIES WE SUPPORT
        </h2>

        <div className={styles.grid}>
          {categoryColumns.map((column, columnIndex) => (
            <div key={columnIndex} className={styles.column}>
              {column.map((category) => (
                <article key={category.title} className={styles.catBox}>
                  <div className={styles.imageWrap}>
                    <Image
                      src={category.image}
                      alt={category.title}
                      title={category.title}
                      width={331}
                      height={400}
                      className={styles.catImage}
                      sizes="(max-width: 575px) 100vw, (max-width: 991px) 50vw, 25vw"
                    />
                    <div className={styles.hiddenOverlay}>
                      <p>
                        <Link href={category.href}>
                          Read more
                          <i className="my-icon icon-arrow-right" aria-hidden="true" />
                        </Link>
                      </p>
                    </div>
                  </div>
                  <p className={styles.catTitle}>{category.title}</p>
                </article>
              ))}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
