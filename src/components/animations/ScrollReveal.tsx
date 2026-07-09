"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  y?: number;
  delay?: number;
  stagger?: number;
}

export default function ScrollReveal({
  children,
  className = "",
  y = 50,
  delay = 0,
  stagger = 0,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets = stagger > 0 ? el.children : el;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.fromTo(
              targets,
              { y, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 0.8,
                delay,
                stagger,
                ease: "power3.out",
              }
            );
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [y, delay, stagger]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
