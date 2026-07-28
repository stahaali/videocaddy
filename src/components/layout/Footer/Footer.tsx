"use client";

import Image from "next/image";
import Link from "next/link";
import Container from "@/components/shared/Container/Container";
import { contactInfo } from "@/data/navigation";
import { assets } from "@/data/assets";
import styles from "./Footer.module.css";

const footerColumns = [
  {
    title: "LINK",
    links: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "Testimonials", href: "/#testimonials" },
      { label: "Price", href: "/pricing" },
      { label: "Case Study", href: "/portfolio" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    title: "FEATURES",
    links: [
      { label: "Security", href: "/about" },
      { label: "Quality", href: "/about" },
      { label: "TAT", href: "/about" },
      { label: "Benefits", href: "/about" },
      { label: "Blog", href: "/about" },
      { label: "Portfolio", href: "/portfolio" },
    ],
  },
  {
    title: "PORTFOLIO",
    links: [
      { label: "Video Editing", href: "/services" },
      { label: "Audio Editing", href: "/audio-editing" },
      { label: "Animation", href: "/services" },
      { label: "Story Board", href: "/services" },
      { label: "Articles", href: "/about" },
      { label: "Glossary", href: "/about" },
    ],
  },
];

const socialLinks = [
  {
    href: "https://twitter.com/videocaddies",
    label: "Twitter",
    type: "x" as const,
  },
  {
    href: "https://www.linkedin.com/company/videocaddy/",
    label: "LinkedIn",
    type: "linkedin" as const,
  },
  {
    href: "https://www.facebook.com/VideoCaddy/",
    label: "Facebook",
    type: "facebook" as const,
  },
  {
    href: "https://www.youtube.com/@Videocaddy",
    label: "YouTube",
    type: "youtube" as const,
  },
];

function SocialXIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      viewBox="0 0 16 16"
      aria-hidden="true"
    >
      <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contactInfo.email);
    } catch {
      // Clipboard unavailable
    }
  };

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.top}>
          <div className={styles.brand}>
            <Link href="/" className={styles.logo} aria-label="Video Caddy Home">
              <Image
                src={assets.logo}
                alt="Video Caddy"
                width={219}
                height={40}
                className="h-10 w-auto max-w-[219px]"
              />
            </Link>
            <p className={styles.description}>
              Video Caddy&apos;s video editing service professionals deliver a lot more than
              post-production support.
            </p>
          </div>

          <div className={styles.linksPanel}>
            <div className={styles.columns}>
              {footerColumns.map((column) => (
                <div key={column.title}>
                  <h3 className={styles.columnTitle}>{column.title}</h3>
                  <ul className={styles.linkList}>
                    {column.links.map((link) => (
                      <li key={link.label}>
                        <Link href={link.href} className={styles.footerLink}>
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <div>
                <h3 className={styles.columnTitle}>ADDRESS</h3>
                <p className={styles.address}>
                  116 Village Blvd, Suite 220,
                  <br />
                  Princeton, NJ 08540
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div className={styles.contactBar}>
        <Container>
          <div className={styles.contactInner}>
            <div className={styles.getInTouch}>
              <span>Get in touch</span>
              <span className={styles.getInTouchLine} aria-hidden="true" />
            </div>

            <div className={styles.contactItem}>
              <Image
                src={assets.icons.emailUs}
                alt=""
                width={42}
                height={42}
                className={styles.contactIcon}
                aria-hidden="true"
              />
              <div className={styles.contactMeta}>
                <span className={styles.contactLabel}>Email Us</span>
                <div className={styles.emailRow}>
                  <a href={`mailto:${contactInfo.email}`} className={styles.contactValue}>
                    info***@videocaddy.com
                  </a>
                  <button
                    type="button"
                    className={styles.copyBtn}
                    onClick={handleCopyEmail}
                    aria-label="Copy email address"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <rect x="9" y="9" width="11" height="11" rx="1" stroke="currentColor" strokeWidth="1.5" />
                      <rect x="4" y="4" width="11" height="11" rx="1" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div className={styles.contactItem}>
              <Image
                src={assets.icons.callUs}
                alt=""
                width={42}
                height={42}
                className={styles.contactIcon}
                aria-hidden="true"
              />
              <div className={styles.contactMeta}>
                <span className={styles.contactLabel}>Call Us</span>
                <a href={`tel:${contactInfo.phone}`} className={styles.contactValue}>
                  {contactInfo.phone}
                </a>
              </div>
            </div>

            <div className={styles.socialBlock}>
              <span className={styles.socialLabel}>Follow Us on</span>
              <ul className={styles.socialList}>
                {socialLinks.map((item) => (
                  <li key={item.type}>
                    <a
                      href={item.href}
                      className={styles.socialLink}
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      aria-label={item.label}
                      title={item.label.toLowerCase()}
                    >
                      {item.type === "x" ? (
                        <SocialXIcon />
                      ) : (
                        <i
                          className={`my-icon icon-${item.type}`}
                          aria-hidden="true"
                        />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </div>

      <div className={styles.bottomBar}>
        <Container>
          <div className={styles.bottomInner}>
            <p className={styles.copyright}>
              &copy; {year} www.videocaddy.com Web Property of Flatworld Solutions Inc.
            </p>
            <div className={styles.legalLinks}>
              <Link href="/contact" className={styles.legalLink}>
                Terms &amp; Conditions
              </Link>
              <span className={styles.legalDivider}>|</span>
              <Link href="/privacy-policy" className={styles.legalLink}>
                Privacy Policy
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
