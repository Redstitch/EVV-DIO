"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { target: 45, label: "Parishes" },
  { target: 850, label: "Scholarships" },
  { target: 26, label: "Schools" },
];

export function AnimatedStats() {
  const ref = useRef<HTMLDivElement>(null);
  const [counted, setCounted] = useState(false);
  const [values, setValues] = useState(stats.map(() => 0));

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !counted) {
            setCounted(true);
            stats.forEach((stat, i) => {
              animateCounter(stat.target, 1800, (v) => {
                setValues((prev) => {
                  const next = [...prev];
                  next[i] = v;
                  return next;
                });
              });
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [counted]);

  return (
    <div ref={ref} className="flex gap-8 mb-8">
      {stats.map((stat, i) => (
        <div key={stat.label} className="flex flex-col">
          <span className="font-heading text-4xl font-bold text-navy leading-none">
            {values[i].toLocaleString()}
          </span>
          <span className="text-xs text-text-light uppercase tracking-wide font-medium">
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  );
}

function animateCounter(
  target: number,
  duration: number,
  onUpdate: (value: number) => void
) {
  const startTime = performance.now();

  function update(currentTime: number) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(target * eased);
    onUpdate(current);
    if (progress < 1) requestAnimationFrame(update);
  }

  requestAnimationFrame(update);
}
