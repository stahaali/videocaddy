import Link from "next/link";
import Container from "@/components/shared/Container/Container";
import Button from "@/components/shared/Button/Button";

interface Breadcrumb {
  label: string;
  href: string;
}

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  breadcrumbs?: Breadcrumb[];
  cta?: { label: string; href: string };
}

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  breadcrumbs,
  cta,
}: PageHeroProps) {
  return (
    <section className="page-hero-section spacing-section relative overflow-hidden bg-bg-section">
      <div
        className="pointer-events-none absolute top-0 right-0 h-full w-[40%] bg-[radial-gradient(ellipse_at_top_right,rgba(227,30,36,0.12),transparent_70%)]"
        aria-hidden="true"
      />
      <Container>
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="mb-8 flex items-center gap-2 text-[13px] text-text-dim" aria-label="Breadcrumb">
            {breadcrumbs.map((crumb, index) => (
              <span key={crumb.href}>
                {index > 0 && <span className="text-text-dim"> ⮞ </span>}
                {index < breadcrumbs.length - 1 ? (
                  <Link href={crumb.href} className="transition-colors hover:text-primary">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-text-muted">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        {eyebrow && (
          <span className="mb-3 block font-azo-sans text-xs font-semibold tracking-[0.2em] text-primary uppercase">
            {eyebrow}
          </span>
        )}
        <h1 className="section-heading mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="mb-8 max-w-[600px] text-[17px] leading-relaxed text-text-muted">
            {subtitle}
          </p>
        )}
        {cta && (
          <div className="flex flex-wrap gap-4">
            <Button href={cta.href} variant="primary" size="large">
              {cta.label}
            </Button>
          </div>
        )}
      </Container>
    </section>
  );
}
