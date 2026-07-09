"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "@/components/shared/Container/Container";
import { portfolioItems, portfolioFilters } from "@/data/portfolio";
import { cn } from "@/lib/cn";

export default function PortfolioGrid() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered =
    activeFilter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <section className="bg-black spacing-section" aria-labelledby="portfolio-grid">
      <Container>
        <div className="mb-12 flex flex-wrap justify-center gap-3" role="tablist" aria-label="Portfolio filters">
          {portfolioFilters.map((filter) => (
            <button
              key={filter.id}
              role="tab"
              aria-selected={activeFilter === filter.id}
              className={cn(
                "rounded-sm border border-white/15 px-5 py-2.5 font-heading text-[13px] font-semibold tracking-wide text-text-muted uppercase transition-all",
                activeFilter === filter.id
                  ? "border-primary bg-primary text-white"
                  : "hover:border-primary hover:bg-primary hover:text-white"
              )}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4" role="list">
          {filtered.map((item) => (
            <article
              key={item.id}
              className="group relative aspect-[16/10] cursor-pointer overflow-hidden rounded-md"
              role="listitem"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.08]"
                loading="lazy"
              />
              <span
                className="absolute top-1/2 left-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                aria-hidden="true"
              >
                <span className="ml-0.5 border-y-8 border-l-[14px] border-y-transparent border-l-white" />
              </span>
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/85 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <h3 className="text-[13px] font-semibold tracking-wide uppercase">{item.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
