"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/shared/Container/Container";
import MobileMenu from "@/components/layout/MobileMenu/MobileMenu";
import { contactInfo, headerMegaNav } from "@/data/navigation";
import { assets } from "@/data/assets";
import { cn } from "@/lib/cn";
import styles from "./Header.module.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [menuLeft, setMenuLeft] = useState(0);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const megaAnchorRef = useRef<HTMLDivElement>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const activeDropdownItem = headerMegaNav.find(
    (item) => item.hasDropdown && item.label === activeDropdown
  );
  const megaMenuAnchorLabel = headerMegaNav.find((item) => item.hasDropdown)?.label;
  const showMegaMenu =
    Boolean(activeDropdownItem?.columns) && (activeDropdownItem?.columns?.length ?? 0) > 0;

  const clearCloseTimer = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const openDropdown = (label: string) => {
    clearCloseTimer();
    setActiveDropdown(label);
  };

  const scheduleCloseDropdown = () => {
    clearCloseTimer();
    closeTimerRef.current = setTimeout(() => {
      setActiveDropdown(null);
      closeTimerRef.current = null;
    }, 180);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const updateMenuLeft = () => {
      if (!megaAnchorRef.current) return;
      setMenuLeft(megaAnchorRef.current.getBoundingClientRect().left);
    };

    updateMenuLeft();
    window.addEventListener("resize", updateMenuLeft);
    return () => window.removeEventListener("resize", updateMenuLeft);
  }, [showMegaMenu, activeDropdown]);

  useEffect(() => {
    return () => clearCloseTimer();
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 right-0 left-0 z-[9999] overflow-visible bg-black transition-shadow",
          scrolled && "shadow-[0_4px_24px_rgba(0,0,0,0.6)]"
        )}
        onMouseEnter={clearCloseTimer}
        onMouseLeave={scheduleCloseDropdown}
      >
        <div className="relative z-[1000] h-[88px] overflow-visible border-b border-white/[0.08]">
          <Container className="h-full overflow-visible">
            <div className="relative flex h-full items-center justify-between gap-4 overflow-visible">
              <Link href="/" className="shrink-0 hover:opacity-85" aria-label="Video Caddy Home">
                <Image
                  src={assets.logo}
                  alt="Video Caddy"
                  width={219}
                  height={40}
                  className="h-8 w-auto max-w-[160px] min-[576px]:h-9 min-[576px]:max-w-[190px] min-[768px]:h-10 min-[768px]:max-w-[219px]"
                  priority
                />
              </Link>

              <nav
                className={cn(
                  "header-main-nav hidden flex-1 items-stretch justify-center gap-1 min-[1024px]:flex",
                  styles.mainNav
                )}
                aria-label="Main navigation"
              >
                {headerMegaNav.map((item) => (
                  <div
                    key={item.label}
                    ref={item.label === megaMenuAnchorLabel ? megaAnchorRef : undefined}
                    className={styles.navItem}
                    onMouseEnter={() => {
                      if (item.hasDropdown) openDropdown(item.label);
                    }}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "header-nav-link inline-flex items-center px-3.5 py-2 font-heading font-semibold uppercase tracking-wider transition-colors",
                        activeDropdown === item.label
                          ? "text-primary"
                          : "text-white hover:text-primary"
                      )}
                    >
                      {item.label}
                      {item.hasDropdown && (
                        <i className="my-icon icon-arrow-bottom nav-caret" aria-hidden="true" />
                      )}
                    </Link>
                  </div>
                ))}
              </nav>

              <div className="flex shrink-0 items-center gap-4">
                <div className={cn(styles.menuAreaRightContent, "hidden min-[768px]:inline-flex")}>
                  <div className={styles.highlight}>
                    <a
                      href={`tel:${contactInfo.phone}`}
                      title="Call us"
                      id="myCall_menu"
                      className={styles.phoneLink}
                      aria-label={`Call Video Caddy at ${contactInfo.phone}`}
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>
                <div className={cn(styles.searchWrap, "hidden min-[1024px]:flex")}>
                  <input
                    ref={searchInputRef}
                    type="search"
                    className={styles.searchInput}
                    placeholder="Search.."
                    aria-label="Search"
                  />
                  <button
                    type="button"
                    className={styles.searchBtn}
                    aria-label="Search"
                    onClick={() => searchInputRef.current?.focus()}
                  >
                    <span className={styles.searchIcon} aria-hidden="true">
                      🔍
                    </span>
                  </button>
                </div>
                <button
                  type="button"
                  className="flex h-8 w-8 flex-col justify-center gap-1.5 p-1 min-[1024px]:hidden"
                  onClick={() => setMenuOpen(!menuOpen)}
                  aria-label={menuOpen ? "Close menu" : "Open menu"}
                  aria-expanded={menuOpen}
                >
                  <span
                    className={cn(
                      "block h-0.5 w-full bg-white transition-all",
                      menuOpen && "translate-y-[7px] rotate-45"
                    )}
                  />
                  <span className={cn("block h-0.5 w-full bg-white transition-all", menuOpen && "opacity-0")} />
                  <span
                    className={cn(
                      "block h-0.5 w-full bg-white transition-all",
                      menuOpen && "-translate-y-[7px] -rotate-45"
                    )}
                  />
                </button>
              </div>
            </div>
          </Container>
        </div>

        {showMegaMenu && activeDropdownItem?.columns ? (
          <div className={styles.megaMenuLayer}>
            <div className={styles.megaMenu} style={{ left: menuLeft }}>
              <div className={styles.megaMenuGrid}>
                {activeDropdownItem.columns.map((column, colIndex) => (
                  <div key={colIndex} className={styles.megaMenuColumn}>
                    <ul className={styles.megaMenuList}>
                      {column.links.map((link) => (
                        <li key={link.label}>
                          <Link href={link.href} className={styles.megaMenuLink}>
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : null}
      </header>
      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
