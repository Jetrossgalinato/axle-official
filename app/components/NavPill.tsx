"use client";

import { useLayoutEffect, useRef, useState } from "react";

type NavOption = "work" | "info";

const OPTIONS: { id: NavOption; label: string }[] = [
  { id: "work", label: "Work" },
  { id: "info", label: "Info" },
];

export default function NavPill() {
  const [active, setActive] = useState<NavOption>("work");
  const activeIndex = OPTIONS.findIndex((option) => option.id === active);
  const wrapRef = useRef<HTMLDivElement>(null);
  const labelRefs = useRef<Record<NavOption, HTMLSpanElement | null>>({
    work: null,
    info: null,
  });
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  useLayoutEffect(() => {
    const wrap = wrapRef.current;
    const label = labelRefs.current[active];
    if (!wrap || !label) return;

    const wrapRect = wrap.getBoundingClientRect();
    const labelRect = label.getBoundingClientRect();

    setIndicator({
      left: labelRect.left - wrapRect.left,
      width: labelRect.width,
    });
  }, [active]);

  return (
    <nav
      aria-label="Primary"
      className="sticky top-0 z-50 flex justify-center px-4 pt-12 pb-3"
    >
      <div ref={wrapRef} className="relative inline-flex flex-col items-stretch">
        <div
          role="tablist"
          aria-label="Sections"
          className="relative grid grid-cols-2 rounded-full border border-white/10 bg-white/10 p-1 shadow-sm backdrop-blur-xl"
        >
          <span
            aria-hidden
            className="pointer-events-none absolute top-1 bottom-1 left-1 w-[calc(50%-4px)] rounded-full bg-white transition-transform duration-300 ease-out"
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
                className={`relative z-10 flex min-w-20 cursor-pointer items-center justify-center rounded-full px-5 py-2 text-sm font-medium transition-colors duration-300 ease-out ${
                  isActive
                    ? "text-zinc-900"
                    : "text-zinc-500 hover:text-zinc-300"
                }`}
              >
                <span
                  ref={(node) => {
                    labelRefs.current[option.id] = node;
                  }}
                >
                  {option.label}
                </span>
              </button>
            );
          })}
        </div>

        <span
          aria-hidden
          className="pointer-events-none absolute top-full mt-2 h-[2px] rounded-full bg-white transition-[left,width] duration-300 ease-out"
          style={{ left: indicator.left, width: indicator.width }}
        />
      </div>
    </nav>
  );
}
