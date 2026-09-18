"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

type CounterProps = {
  value: string;
  className?: string;
};

/** Animates leading digits in strings like "120+" or "5,000+". */
export function Counter({ value, className }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const reduce = useReducedMotion();
  const match = value.match(/^([\d,]+)(.*)$/);
  const numeric = match ? Number(match[1].replace(/,/g, "")) : NaN;
  const suffix = match?.[2] ?? "";
  const canAnimate = !reduce && !Number.isNaN(numeric);
  const [display, setDisplay] = useState(canAnimate ? "0" : value);

  useEffect(() => {
    if (!canAnimate) return;
    if (!inView) return;

    const duration = 1200;
    const start = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      const current = Math.round(numeric * eased);
      setDisplay(`${current.toLocaleString()}${suffix}`);
      if (t < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [canAnimate, inView, numeric, suffix]);

  return (
    <span ref={ref} className={className}>
      {canAnimate ? display : value}
    </span>
  );
}
