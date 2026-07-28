import Image from "next/image";
import Link from "next/link";
import Container from "@/components/shared/Container/Container";
import { contactInfo } from "@/data/navigation";
import { assets } from "@/data/assets";
import { cn } from "@/lib/cn";
import styles from "./CTASection.module.css";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  showContact?: boolean;
  /** dark = black section; light = white section (contact boxes stay black) */
  variant?: "dark" | "light";
  image?: string;
  imageAlt?: string;
}

const contactItems = [
  {
    href: "/contact",
    icon: assets.icons.form,
    label: "CONTACT US",
  },
  {
    href: `tel:${contactInfo.phone}`,
    icon: assets.icons.contact,
    label: contactInfo.phone,
    className: styles.phoneLabel,
  },
  {
    href: "/contact",
    icon: assets.icons.chat,
    label: contactInfo.chatLabel,
  },
  {
    href: `mailto:${contactInfo.email}`,
    icon: assets.icons.email,
    label: "EMAIL",
  },
];

export default function CTASection({
  title = "Have a project in mind",
  subtitle = "Schedule a time to chat with us to learn about how we can help you monetize your video production business.",
  showContact = true,
  variant = "dark",
  image = assets.contactWoman,
  imageAlt = "Contact Video Caddy",
}: CTASectionProps) {
  const isLight = variant === "light";

  return (
    <section
      className={cn(styles.section, "spacing-section", isLight && styles.sectionLight)}
      aria-labelledby="cta-title"
    >
      <Container>
        <div className={styles.grid}>
          <div className={styles.imageCol}>
            <div className={styles.contactSectionImg}>
              <Image
                src={image}
                alt={imageAlt}
                width={688}
                height={495}
                className={`${styles.image} ${styles.slowZoomIn}`}
                sizes="(max-width: 992px) 100vw, 50vw"
                loading="lazy"
              />
            </div>
          </div>

          <div className={styles.rightCol}>
            <div className={styles.contactContent}>
              <h2 id="cta-title" className={styles.title}>
                {title}
              </h2>
              <p className={styles.subtitle}>{subtitle}</p>
              <p className={styles.buttonWrap}>
                <Link href="/contact" className="btn-all">
                  Get Started
                </Link>
              </p>
            </div>

            {showContact && (
              <div className={styles.contactDetails}>
                {contactItems.map((item) => (
                  <div key={item.label} className={styles.contactDetailsCol}>
                    <div className="contact-icn-box">
                      <Link href={item.href}>
                        <Image
                          src={item.icon}
                          alt=""
                          width={36}
                          height={36}
                          className="zoom-effect"
                          aria-hidden="true"
                        />
                        <p className={item.className}>{item.label}</p>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
