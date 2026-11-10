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
      style={{
        background:
          "radial-gradient(57.47% 80.81% at 50% 19.19%, #303030 0%, #181A18 75%)",
      }}
    >
      {children}
    </section>
  );
}