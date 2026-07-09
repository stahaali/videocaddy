import Link from "next/link";
import { cn } from "@/lib/cn";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "portfolio";
  size?: "small" | "medium" | "large";
  fullWidth?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  className?: string;
  ariaLabel?: string;
}

const base =
  "inline-flex items-center justify-center gap-2 font-heading text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-300 whitespace-nowrap";

const variants = {
  primary:
    "bg-primary text-white border-2 border-primary hover:bg-primary-dark hover:border-primary-dark hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(227,30,36,0.35)]",
  secondary:
    "bg-transparent text-white border-2 border-white hover:bg-white hover:text-black hover:-translate-y-0.5",
  outline:
    "bg-transparent text-primary border-2 border-primary hover:bg-primary hover:text-white hover:-translate-y-0.5",
  portfolio:
    "bg-transparent text-primary border-2 border-primary hover:bg-primary hover:text-white hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(227,30,36,0.35)]",
};

const sizes = {
  small: "px-5 py-2.5 text-xs",
  medium: "px-7 py-3.5 text-xs",
  large: "px-9 py-4 text-sm",
};

export default function Button({
  children,
  href,
  variant = "primary",
  size = "medium",
  fullWidth = false,
  type = "button",
  onClick,
  className = "",
  ariaLabel,
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], fullWidth && "w-full", className);

  if (href) {
    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} aria-label={ariaLabel}>
      {children}
    </button>
  );
}
