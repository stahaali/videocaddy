import Container from "@/components/shared/Container/Container";
import LiquidCounter from "@/components/animations/LiquidCounter/LiquidCounter";
import { statsData } from "@/data/home";
import { cn } from "@/lib/cn";

interface StatsProps {
  /** dark = black section; light = white section with black boxes */
  variant?: "dark" | "light";
}

export default function Stats({ variant = "dark" }: StatsProps) {
  const isLight = variant === "light";

  return (
    <section
      className={cn(
        "counter-section spacing-section",
        isLight ? "counter-section--light bg-white" : "bg-black"
      )}
      aria-label="Company statistics"
    >
      <Container>
        <div
          className={cn(
            "grid grid-cols-2 md:grid-cols-4",
            isLight && "counter-grid--boxed"
          )}
        >
          {statsData.map((stat) => (
            <LiquidCounter
              key={stat.label}
              value={stat.value}
              label={stat.label}
              variant="dark"
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
