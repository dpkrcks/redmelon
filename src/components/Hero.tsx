"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown, ArrowRight } from "lucide-react";
import { site } from "@/content/site";
import { Button } from "@/components/Button";
import { Counter } from "@/components/Counter";
import { easeOutExpo } from "@/lib/utils";

const capabilities = [
  "Payments",
  "Collections",
  "Bank guarantees",
  "API integrations",
  "Statutory workflows",
  "Security assessments",
  "Trade operations",
  "Field capture",
];

const headlineHasPeriod = /\.$/.test(site.hero.headline);
const headlineWords = site.hero.headline.replace(/\.$/, "").split(" ");

export function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.08, 1.18]);

  const rail = [...capabilities, ...capabilities];

  return (
    <section
      ref={ref}
      className="relative isolate min-h-[100svh] overflow-hidden bg-[#120a09] text-white"
    >
      {/* Full-bleed photographic plane */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        style={reduce ? undefined : { y: bgY, scale: bgScale }}
      >
        <Image
          src="/img/institutional-facade.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_30%] opacity-50 grayscale"
        />
      </motion.div>

      {/* Atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute -left-32 top-0 h-[28rem] w-[28rem] rounded-full bg-[#b23a2e]/45 blur-[100px]"
          animate={
            reduce
              ? undefined
              : { x: [0, 60, 0], y: [0, 40, 0], scale: [1, 1.15, 1] }
          }
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-24 bottom-0 h-[32rem] w-[32rem] rounded-full bg-[#e08a7a]/30 blur-[110px]"
          animate={
            reduce
              ? undefined
              : { x: [0, -50, 0], y: [0, -35, 0], scale: [1, 1.2, 1] }
          }
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(18,10,9,0.92)_0%,rgba(18,10,9,0.72)_48%,rgba(18,10,9,0.55)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,10,9,0.55)_0%,transparent_35%,rgba(18,10,9,0.85)_100%)]" />
        <div className="absolute inset-0 opacity-[0.14] [background-image:linear-gradient(rgba(224,138,122,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(224,138,122,0.35)_1px,transparent_1px)] [background-size:64px_64px]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-10 pt-28 md:justify-center md:px-8 md:pb-16 md:pt-32">
        <div className="max-w-2xl">
          {/* Brand as hero-level signal */}
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easeOutExpo }}
            className="font-[family-name:var(--font-display)] text-4xl font-semibold tracking-[-0.03em] md:text-5xl lg:text-[3.25rem]"
          >
            <span className="text-[#e08a7a]">Red</span>
            <span className="text-white"> Melon</span>
          </motion.p>

          <motion.div
            initial={reduce ? false : { scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.25, ease: easeOutExpo }}
            className="mt-4 h-[3px] w-16 origin-left rounded-full bg-[var(--accent)]"
          />

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.35, ease: easeOutExpo }}
            className="mt-7 text-xs font-semibold uppercase tracking-[0.28em] text-[#e8a090]"
          >
            {site.hero.eyebrow}
          </motion.p>

          <h1 className="mt-4 font-[family-name:var(--font-display)] text-[2.35rem] font-semibold leading-[1.08] tracking-tight text-white md:text-5xl lg:text-[3.35rem]">
            {headlineWords.map((word, i) => (
              <motion.span
                key={`${word}-${i}`}
                initial={reduce ? false : { opacity: 0, y: 36 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.55,
                  delay: 0.45 + i * 0.07,
                  ease: easeOutExpo,
                }}
                className="mr-[0.28em] inline-block last:mr-0"
              >
                {word}
              </motion.span>
            ))}
            {headlineHasPeriod ? (
              <motion.span
                initial={reduce ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45 + headlineWords.length * 0.07 }}
              >
                .
              </motion.span>
            ) : null}
          </h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.95, ease: easeOutExpo }}
            className="mt-6 max-w-xl text-base leading-relaxed text-white/75 md:text-lg"
          >
            {site.hero.support}
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1, ease: easeOutExpo }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <motion.div
              whileHover={reduce ? undefined : { scale: 1.04, y: -2 }}
              whileTap={reduce ? undefined : { scale: 0.98 }}
            >
              <Button
                href={site.hero.primaryCta.href}
                variant="primary"
                className="!rounded-xl !px-7 !py-3.5 !shadow-[0_12px_40px_rgba(178,58,46,0.5)]"
              >
                {site.hero.primaryCta.label}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
            <motion.div
              whileHover={reduce ? undefined : { scale: 1.04, y: -2 }}
              whileTap={reduce ? undefined : { scale: 0.98 }}
            >
              <Button
                href={site.hero.secondaryCta.href}
                variant="ghost"
                className="!rounded-xl !border !border-white/30 !bg-white/8 !px-7 !py-3.5 !text-white hover:!bg-white/14"
              >
                {site.hero.secondaryCta.label}
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Proof + continuous capability rail — visible motion */}
        <div className="mt-14 md:mt-20">
          <motion.dl
            initial={reduce ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.25, ease: easeOutExpo }}
            className="grid max-w-xl grid-cols-3 gap-4"
          >
            {site.hero.proof.map((item, i) => (
              <motion.div
                key={item.label}
                initial={reduce ? false : { opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 1.35 + i * 0.1,
                  ease: easeOutExpo,
                }}
              >
                <dt className="font-[family-name:var(--font-display)] text-2xl font-semibold tabular-nums text-white md:text-3xl">
                  <Counter value={item.value} />
                </dt>
                <dd className="mt-1 text-[11px] leading-snug text-white/55 md:text-xs">
                  {item.label}
                </dd>
              </motion.div>
            ))}
          </motion.dl>

          <motion.div
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.55 }}
            className="mt-8 overflow-hidden border-y border-white/10 py-3"
          >
            <div
              className={
                reduce
                  ? "flex flex-wrap justify-center gap-x-8 gap-y-2"
                  : "animate-rail-left flex w-max gap-10"
              }
              style={reduce ? undefined : { animationDuration: "28s" }}
            >
              {rail.map((label, i) => (
                <span
                  key={`${label}-${i}`}
                  className="shrink-0 text-sm font-medium tracking-wide text-white/55"
                >
                  <span className="mr-10 text-[var(--accent)]">◆</span>
                  {label}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {!reduce ? (
          <motion.a
            href="#clients-strip"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 8, 0] }}
            transition={{
              opacity: { delay: 1.8, duration: 0.4 },
              y: { delay: 1.8, duration: 1.6, repeat: Infinity, ease: "easeInOut" },
            }}
            className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/45 md:flex"
            aria-label="Scroll to content"
          >
            Scroll
            <ArrowDown className="h-3.5 w-3.5" />
          </motion.a>
        ) : null}
      </div>
    </section>
  );
}
