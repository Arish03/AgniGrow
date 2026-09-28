"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface AnimatedStatProps {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  decimals?: number;
  label: string;
  description: string;
}

export default function AnimatedStat({
  value,
  prefix = "",
  suffix = "",
  duration = 1.8,
  decimals = 0,
  label,
  description,
}: AnimatedStatProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const startTime = performance.now();
    const durationMs = duration * 1000;

    const updateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      // Ease out cubic
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const current = start + (value - start) * easedProgress;

      setDisplayValue(current);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setDisplayValue(value);
      }
    };

    requestAnimationFrame(updateCounter);
  }, [isInView, value, duration]);

  return (
    <div
      ref={ref}
      className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white/[0.02] border border-cream-10 hover:border-ember/30 hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between group"
    >
      <span className="font-display text-2xl sm:text-4xl font-extrabold text-gradient mb-1 sm:mb-2 group-hover:scale-105 transition-transform duration-300 origin-left inline-block">
        {prefix}
        {decimals > 0 ? displayValue.toFixed(decimals) : Math.floor(displayValue)}
        {suffix}
      </span>
      <div>
        <h3 className="font-display font-bold text-xs sm:text-sm text-cream mb-0.5 sm:mb-1 group-hover:text-ember transition-colors">
          {label}
        </h3>
        <p className="text-[0.7rem] sm:text-xs text-cream-40 leading-snug">
          {description}
        </p>
      </div>
    </div>
  );
}
