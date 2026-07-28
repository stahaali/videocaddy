"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/cn";

gsap.registerPlugin(ScrollTrigger);

interface LiquidCounterProps {
  value: string;
  label: string;
  variant?: "dark" | "light";
}

export default function LiquidCounter({ value, label, variant = "dark" }: LiquidCounterProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const outlineRef = useRef<HTMLSpanElement>(null);
  const fillRef = useRef<HTMLSpanElement>(null);

  const numMatch = value.match(/\d+/);
  const target = numMatch ? parseInt(numMatch[0], 10) : 0;
  const suffix = value.replace(/\d+/, "");

  useEffect(() => {
    const content = contentRef.current;
    const outline = outlineRef.current;
    const fill = fillRef.current;
    if (!content || !outline || !fill) return;

    const initial = `0${suffix}`;
    outline.textContent = initial;
    fill.textContent = initial;

    const state = { n: 0 };

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: content,
        start: "top 88%",
        once: true,
      },
    });

    tl.to(state, {
      n: target,
      duration: 2.8,
      ease: "power2.out",
      onUpdate: () => {
        const text = `${Math.round(state.n)}${suffix}`;
        outline.textContent = text;
        fill.textContent = text;
      },
    });

    return () => {
      tl.kill();
    };
  }, [target, suffix]);

  return (
    <div ref={contentRef} className="counter-content text-center">
      <span ref={outlineRef} className="counter-number counter-outline" aria-hidden="true">
        {value}
      </span>
      <span ref={fillRef} className="counter-number counter-fill" aria-hidden="true">
        {value}
      </span>
      <p
        className={cn(
          "counter-label font-heading text-[11px] font-semibold tracking-wider md:text-[13px]",
          variant === "light" ? "text-black" : "text-white"
        )}
      >
        {label}
      </p>
      <span className="sr-only">
        {value} {label}
      </span>
    </div>
  );
}
