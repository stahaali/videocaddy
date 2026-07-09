"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealOptions {
  y?: number;
  x?: number;
  opacity?: number;
  duration?: number;
  delay?: number;
  stagger?: number;
  start?: string;
  scrub?: boolean | number;
}

export function useScrollReveal<T extends HTMLElement>(
  options: ScrollRevealOptions = {}
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const {
      y = 60,
      x = 0,
      opacity = 0,
      duration = 0.8,
      delay = 0,
      stagger = 0,
      start = "top 85%",
      scrub = false,
    } = options;

    const targets = stagger > 0 ? el.children : el;

    const tween = gsap.from(targets, {
      y,
      x,
      opacity,
      duration,
      delay,
      stagger,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start,
        toggleActions: scrub ? undefined : "play none none none",
        scrub: scrub || false,
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [options]);

  return ref;
}

export function useGsapContext() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {}, containerRef);
    return () => ctx.revert();
  }, []);

  return containerRef;
}
