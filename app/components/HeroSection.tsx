import type { ReactNode } from "react";

interface HeroSectionProps {
  children?: ReactNode;
  className?: string;
}

export default function HeroSection({
  children,
  className = "",
}: HeroSectionProps) {
  return (
    <section
      className={`relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden ${className}`}
    >
      {children}
    </section>
  );
}