"use client";

import { useState } from "react";

type NavOption = "work" | "info";

const OPTIONS: { id: NavOption; label: string }[] = [
  { id: "work", label: "Work" },
  { id: "info", label: "Info" },
];

export default function NavPill() {
  const [active, setActive] = useState<NavOption>("work");
  const activeIndex = OPTIONS.findIndex((option) => option.id === active);

  return (
    <nav
      aria-label="Primary"
      className="sticky top-0 z-50 flex justify-center px-4 pt-12 pb-3"
    >
      <div
        role="tablist"
        aria-label="Sections"
        className="relative grid grid-cols-2 rounded-full border border-white/40 bg-white/40 p-1 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/10"
      >
        <span
          aria-hidden
          className="pointer-events-none absolute top-1 bottom-1 left-1 w-[calc(50%-4px)] rounded-full bg-zinc-900 transition-transform duration-300 ease-out dark:bg-zinc-100"
          style={{ transform: `translateX(${activeIndex * 100}%)` }}
        />

        {OPTIONS.map((option) => {
          const isActive = active === option.id;

          return (
            <button
              key={option.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(option.id)}
              className={`relative z-10 min-w-20 rounded-full px-5 py-2 text-sm font-medium transition-colors duration-300 ease-out ${
                isActive
                  ? "text-white dark:text-zinc-900"
                  : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
              }`}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
