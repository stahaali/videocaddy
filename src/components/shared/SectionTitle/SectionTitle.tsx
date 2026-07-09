import { cn } from "@/lib/cn";

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
}

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className = "",
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        "mb-12",
        align === "center" ? "text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <span className="mb-3 block font-azo-sans text-xs font-medium uppercase tracking-[0.2em] text-primary">
          {eyebrow}
        </span>
      )}
      <h2 className="section-heading">{title}</h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 max-w-[700px] text-base leading-relaxed text-text-muted",
            align === "center" ? "mx-auto" : ""
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
