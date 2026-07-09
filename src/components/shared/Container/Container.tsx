import { cn } from "@/lib/cn";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  fluid?: boolean;
}

export default function Container({
  children,
  className = "",
  fluid = false,
}: ContainerProps) {
  return (
    <div
      className={cn(
        "site-container",
        fluid && "site-container--fluid",
        className
      )}
    >
      {children}
    </div>
  );
}
