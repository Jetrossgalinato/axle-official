import type { ReactNode } from "react";

interface AboutSectionProps {
  children?: ReactNode;
  className?: string;
}

const STATS = [
  { value: "10+", label: "Projects shipped" },
  { value: "3", label: "Core technologies" },
  { value: "100%", label: "Passion for building" },
];

export default function AboutSection({
  children,
  className = "",
}: AboutSectionProps) {
  return (
    <section
      id="about"
      className={`relative isolate flex min-h-screen w-full flex-col items-center justify-center px-6 py-24 ${className}`}
      style={{ backgroundColor: "#181A18" }}
    >
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-16">
        <div className="flex flex-col gap-6">
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
            About
          </span>
          <h2 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-neutral-100 sm:text-5xl">
            Building thoughtful products, one detail at a time.
          </h2>
          <p className="max-w-2xl text-lg leading-relaxed text-neutral-400">
            We design and develop reliable, well-crafted software that solves
            real problems. From the first sketch to the final deployment, we
            care about clean code, clear design, and experiences people enjoy
            using.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-3">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col gap-2 bg-[#181A18] p-8"
            >
              <span className="text-4xl font-semibold text-neutral-100">
                {stat.value}
              </span>
              <span className="text-sm text-neutral-500">{stat.label}</span>
            </div>
          ))}
        </div>

        {children}
      </div>
    </section>
  );
}