"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/Button";
import { AnimateIn } from "@/components/AnimateIn";
import { cn, easeOutExpo } from "@/lib/utils";

type CtaBandProps = {
  title: string;
  description: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
  className?: string;
};

export function CtaBand({
  title,
  description,
  primary = { label: "Talk to us", href: "/contact" },
  secondary,
  className,
}: CtaBandProps) {
  const reduce = useReducedMotion();

  return (
    <section
      className={cn(
        "relative overflow-hidden border-t border-white/10 bg-[var(--dark-elevated)] py-12 text-white md:py-14",
        className,
      )}
    >
      <motion.div
        className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[rgba(27,87,240,0.35)] blur-3xl"
        animate={reduce ? undefined : { scale: [1, 1.15, 1], opacity: [0.45, 0.7, 0.45] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_100%_0%,rgba(27,87,240,0.28),transparent_50%)]" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-6 px-5 md:flex-row md:items-center md:justify-between md:gap-10 md:px-8">
        <AnimateIn className="min-w-0 flex-1">
          <h2 className="max-w-xl font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight md:text-3xl">
            {title}
          </h2>
          <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/60">
            {description}
          </p>
        </AnimateIn>
        <AnimateIn delay={0.08} className="shrink-0">
          <div className="flex flex-wrap gap-3">
            <motion.div
              whileHover={reduce ? undefined : { y: -2 }}
              transition={{ duration: 0.35, ease: easeOutExpo }}
            >
              <Button href={primary.href} variant="primary">
                {primary.label}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
            {secondary ? (
              <motion.div
                whileHover={reduce ? undefined : { y: -2 }}
                transition={{ duration: 0.35, ease: easeOutExpo }}
              >
                <Button
                  href={secondary.href}
                  variant="secondary"
                  className="!border-white/20 !bg-white/5 !text-white hover:!bg-white/10"
                >
                  {secondary.label}
                </Button>
              </motion.div>
            ) : null}
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
