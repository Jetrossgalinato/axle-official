import type { ReactNode } from "react";

interface HeroSectionProps {
  children?: ReactNode;
  className?: string;
}

// Added intermediate stops using smooth interpolation (ease-in-out curve)
const GRADIENT =
  "radial-gradient(120% 100% at 50% 15%, #303030 0%, #292a29 25%, #212221 50%, #1c1d1c 75%, #181A18 100%)";

// Bottom fade into the AboutSection background (#181A18).
// Eased alpha stops so there is no visible band or seam at the section edge.
const BOTTOM_FADE =
  "linear-gradient(to bottom, rgba(24,26,24,0) 0%, rgba(24,26,24,0.02) 12%, rgba(24,26,24,0.08) 25%, rgba(24,26,24,0.2) 38%, rgba(24,26,24,0.38) 50%, rgba(24,26,24,0.6) 63%, rgba(24,26,24,0.8) 76%, rgba(24,26,24,0.94) 88%, #181A18 100%)";

const NOISE_SVG = `<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/><feColorMatrix type='saturate' values='0'/></filter><rect width='100%' height='100%' filter='url(#n)'/></svg>`;
const NOISE_URL = `url("data:image/svg+xml,${encodeURIComponent(NOISE_SVG)}")`;

export default function HeroSection({
  children,
  className = "",
}: HeroSectionProps) {
  return (
    <section
      className={`relative isolate flex min-h-screen w-full flex-col items-center justify-center overflow-hidden ${className}`}
      style={{ background: GRADIENT }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04] mix-blend-overlay"
        style={{ backgroundImage: NOISE_URL, backgroundSize: "200px 200px" }}
      />

      {/* Fades the gradient and the noise into the AboutSection background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[45%]"
        style={{ background: BOTTOM_FADE }}
      />

      {children}
    </section>
  );
}