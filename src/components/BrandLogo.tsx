"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { cn, easeOutExpo } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  size?: "sm" | "md" | "lg";
  href?: string | null;
  /** Light wordmark for dark surfaces */
  onDark?: boolean;
};

const sizeClasses = {
  sm: "text-[1.45rem] leading-none md:text-[1.65rem]",
  md: "text-[1.75rem] leading-none md:text-[2rem]",
  lg: "text-[2.15rem] leading-none md:text-[2.5rem]",
};

export function BrandLogo({
  className,
  size = "md",
  href = "/",
  onDark = false,
}: BrandLogoProps) {
  const reduce = useReducedMotion();

  const content = (
    <motion.span
      className={cn(
        "inline-flex items-baseline font-[family-name:var(--font-display)] font-semibold tracking-[-0.03em]",
        sizeClasses[size],
      )}
      initial={reduce ? false : { opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: easeOutExpo }}
      whileHover={reduce ? undefined : { opacity: 0.85 }}
    >
      <span className={onDark ? "text-[#7eb0ff]" : "text-[var(--accent)]"}>Red</span>
      <span className={cn("ml-[0.28em]", onDark ? "text-white" : "text-[var(--ink)]")}>
        Melon
      </span>
    </motion.span>
  );

  if (href === null) {
    return <span className={cn("inline-flex items-center", className)}>{content}</span>;
  }

  return (
    <Link
      href={href}
      className={cn("inline-flex items-center", className)}
      aria-label="Red Melon home"
    >
      {content}
    </Link>
  );
}
