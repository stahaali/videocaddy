import Container from "@/components/shared/Container/Container";
import LiquidCounter from "@/components/animations/LiquidCounter/LiquidCounter";
import { statsData } from "@/data/home";

export default function Stats() {
  return (
    <section className="counter-section bg-black" aria-label="Company statistics">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4">
          {statsData.map((stat) => (
            <LiquidCounter key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </div>
      </Container>
    </section>
  );
}
