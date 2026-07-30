"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import Container from "@/components/shared/Container/Container";
import CTA from "@/components/shared/CTA/CTA";
import { heroData } from "@/data/home";

export default function Hero() {
  const headingRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const showreelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const heading = headingRef.current;
    const content = contentRef.current;
    const showreel = showreelRef.current;
    if (!heading || !content || !showreel) return;

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.from(heading, { y: 30, duration: 0.7 });
    tl.from(content.children, { y: 30, duration: 0.7, stagger: 0.1 }, "-=0.3");
    tl.from(showreel, { x: 30, duration: 0.8 }, "-=0.5");

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section
      className="home-hero relative min-h-screen overflow-hidden bg-black pt-[88px]"
      aria-label="Hero"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={heroData.bannerBg}
          alt=""
          fill
          priority
          className="object-cover object-center-top"
          sizes="100vw"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background:
              "radial-gradient(ellipse at 35% 45%, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.8) 100%)",
          }}
        />
      </div>

      <div className="home-hero-inner relative z-[2] flex min-h-[calc(100vh-88px)] w-full items-center py-8 pb-12">
        <Container>
          <div className="flex w-full flex-col gap-10 lg:gap-12">
            <div ref={headingRef} className="banner-heading w-full">
              <h1>
                {heroData.titleLines.flatMap((line, index) => {
                  const prefix = index > 0 ? [<br key={`br-${index}`} />] : [];

                  if (typeof line === "string") {
                    return [...prefix, line];
                  }

                  return [
                    ...prefix,
                    `${line.solid} `,
                    <span key={line.outline}>{line.outline}</span>,
                  ];
                })}
              </h1>
            </div>

            <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:gap-12">
              <div ref={contentRef} className="flex w-full max-w-[520px] flex-col">
                <div className="mb-5 flex flex-wrap items-center gap-3">
                  <Link href={heroData.primaryCta.href} className="btn-all">
                    {heroData.primaryCta.label}
                  </Link>
                  <Link href={heroData.secondaryCta.href} className="btn-all dark-btn">
                    {heroData.secondaryCta.label}
                  </Link>
                </div>

                <div className="banner-sub-heading">
                  <p>{heroData.subtitle}</p>
                </div>

                <CTA variant="hero" />
              </div>

              <div ref={showreelRef} className="flex w-full justify-center lg:justify-end">
                <div className="video-wrapper relative aspect-video w-full max-w-[600px] overflow-hidden rounded-sm !shadow-[0_0_10px_rgba(0,0,0,0.5)] !outline !outline-2 !outline-black lg:max-w-none">
                  <Image
                    src={heroData.showreel}
                    alt="Video Caddy Showreel 2026"
                    fill
                    priority
                    className="hero-showreel object-cover"
                    sizes="(max-width: 1024px) 100vw, 620px"
                  />
                  <button
                    type="button"
                    className="play-button play-button-pulse"
                    aria-label="Play Video Caddy showreel"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
