"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  FileText,
  Landmark,
  Network,
  Shield,
  Wallet,
} from "lucide-react";
import { site } from "@/content/site";
import { Button } from "@/components/Button";
import { easeOutExpo } from "@/lib/utils";

const moduleIcons = [Wallet, FileText, Landmark, Network] as const;

export function Hero() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const contentFade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={sectionRef} className="relative isolate overflow-hidden bg-[var(--dark)] text-white">
      <motion.div
        style={reduce ? undefined : { y: bgY }}
        className="pointer-events-none absolute inset-0"
      >
        <motion.div
          initial={reduce ? false : { scale: 1.18 }}
          animate={reduce ? undefined : { scale: 1.05 }}
          transition={{ duration: 5, ease: easeOutExpo }}
          className="absolute inset-0"
        >
          <Image
            src="/img/hero-skyline.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-bottom opacity-55"
          />
        </motion.div>
      </motion.div>

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_-10%,rgba(196,30,30,0.38),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_60%,rgba(196,30,30,0.14),transparent_45%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,var(--dark)_0%,rgba(9,9,16,0.55)_28%,rgba(9,9,16,0.7)_55%,var(--dark)_95%)]" />
        <div className="noise absolute inset-0 opacity-[0.12]" />
      </div>

      <motion.div
        style={reduce ? undefined : { opacity: contentFade }}
        className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center px-5 pb-6 pt-28 text-center md:px-8 md:pb-10 md:pt-32"
      >
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeOutExpo }}
        >
          <Link
            href={site.hero.badge.href}
            className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white px-4 py-2 text-sm font-medium text-[#0a0a12] shadow-[0_8px_30px_rgba(0,0,0,0.35)] transition-transform duration-300 hover:-translate-y-0.5"
          >
            {site.hero.badge.label}
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </motion.div>

        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.06, ease: easeOutExpo }}
          className="mt-8 max-w-4xl font-[family-name:var(--font-display)] text-[2.75rem] font-semibold leading-[1.05] tracking-tight md:text-6xl lg:text-[4.35rem]"
        >
          <span className="text-white">{site.hero.headlineBefore} </span>
          <span className="bg-gradient-to-r from-[#ff8a8a] via-[#ff5c5c] to-[var(--accent)] bg-clip-text text-transparent">
            {site.hero.headlineAccent}
          </span>
        </motion.h1>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.14, ease: easeOutExpo }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-white/65 md:text-lg"
        >
          {site.hero.support}
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.22, ease: easeOutExpo }}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <Button
            href={site.hero.primaryCta.href}
            variant="primary"
            className="!rounded-xl !px-7 !py-3.5 !shadow-[0_12px_40px_rgba(196,30,30,0.45)]"
          >
            {site.hero.primaryCta.label}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button
            href={site.hero.secondaryCta.href}
            variant="ghost"
            className="!text-white/80 hover:!bg-white/10 hover:!text-white"
          >
            {site.hero.secondaryCta.label}
          </Button>
        </motion.div>

        <motion.ul
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3, ease: easeOutExpo }}
          className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3"
        >
          {site.hero.proof.map((item) => (
            <li key={item.label} className="flex items-baseline gap-2">
              <span className="font-[family-name:var(--font-display)] text-xl font-semibold text-white md:text-2xl">
                {item.value}
              </span>
              <span className="text-xs text-white/45 md:text-sm">{item.label}</span>
            </li>
          ))}
        </motion.ul>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.36, ease: easeOutExpo }}
          className="relative mt-14 w-full max-w-5xl md:mt-16"
        >
          <HeroEngine reduce={!!reduce} />
        </motion.div>
      </motion.div>
    </section>
  );
}

function HeroEngine({ reduce }: { reduce: boolean }) {
  return (
    <div className="relative mx-auto aspect-[16/11] w-full max-w-5xl sm:aspect-[16/10] md:aspect-[2.1/1]">
      {/* Ambient stage */}
      <div className="absolute inset-x-[8%] bottom-0 top-[18%] rounded-[2rem] bg-gradient-to-b from-white/[0.04] to-transparent" />
      <div className="absolute inset-x-[18%] bottom-0 top-[35%] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(196,30,30,0.35),transparent_70%)] blur-2xl" />

      {/* Central hub */}
      <motion.div
        initial={reduce ? false : { opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.45, ease: easeOutExpo }}
        className="absolute left-1/2 top-[28%] z-20 w-[min(72%,18rem)] -translate-x-1/2 sm:w-72"
      >
        <motion.div
          animate={reduce ? undefined : { y: [0, -7, 0] }}
          transition={reduce ? undefined : { duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="rounded-2xl border border-white/15 bg-[linear-gradient(160deg,#1a1a26_0%,#0e0e16_100%)] p-5 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.85),0_0_0_1px_rgba(255,255,255,0.04)] backdrop-blur-md sm:p-6"
        >
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-[var(--accent)]/20 ring-1 ring-[var(--accent)]/40 sm:h-16 sm:w-16">
            <Building2 className="h-7 w-7 text-[#ff7a7a] sm:h-8 sm:w-8" />
          </div>
          <p className="mt-4 text-center font-[family-name:var(--font-display)] text-lg font-semibold tracking-tight sm:text-xl">
            Redmelon engine
          </p>
          <p className="mt-1 text-center text-xs text-white/50 sm:text-sm">
            Fintech · E-governance · Security
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-1.5">
            {site.hero.chips.map((chip) => (
              <span
                key={chip}
                className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] font-medium text-white/65"
              >
                {chip}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Floating module cards */}
      {site.hero.modules.map((mod, i) => {
        const Icon = moduleIcons[i] ?? Shield;
        const positions = [
          "left-0 top-[8%] w-[42%] max-w-[13.5rem] sm:left-[2%] sm:top-[12%] sm:w-auto",
          "right-0 top-[4%] w-[42%] max-w-[13.5rem] sm:right-[2%] sm:top-[8%] sm:w-auto",
          "bottom-[6%] left-0 w-[46%] max-w-[14.5rem] sm:bottom-[10%] sm:left-[4%] sm:w-auto",
          "bottom-[2%] right-0 w-[48%] max-w-[15rem] sm:bottom-[6%] sm:right-[2%] sm:w-auto",
        ];
        const delays = [0.5, 0.58, 0.66, 0.74];
        const floatDurations = [4.2, 4.8, 4.4, 5.2];
        const floatRanges = [6, 5, 7, 5.5];

        return (
          <motion.div
            key={mod.title}
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: delays[i], ease: easeOutExpo }}
            className={`absolute z-30 ${positions[i]}`}
          >
            <motion.div
              animate={reduce ? undefined : { y: [0, -floatRanges[i], 0] }}
              transition={
                reduce
                  ? undefined
                  : {
                      duration: floatDurations[i],
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: delays[i],
                    }
              }
              className="rounded-xl border border-white/12 bg-[#12121c]/92 p-3 shadow-[0_18px_50px_-18px_rgba(0,0,0,0.9)] backdrop-blur-md sm:p-3.5"
            >
              <div className="flex items-start gap-2.5">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10">
                  <Icon className="h-4 w-4 text-[#ff8a8a]" />
                </span>
                <div className="min-w-0 text-left">
                  <p className="truncate text-sm font-semibold text-white">{mod.title}</p>
                  <p className="truncate text-[11px] text-white/45">{mod.detail}</p>
                </div>
              </div>
              <div className="mt-2.5 flex items-center gap-1.5 border-t border-white/8 pt-2">
                <CheckCircle2 className="h-3 w-3 text-emerald-400/90" />
                <span className="text-[10px] font-medium tracking-wide text-white/55">
                  {mod.status}
                </span>
              </div>
            </motion.div>
          </motion.div>
        );
      })}

      {/* Pipeline success toast */}
      <motion.div
        initial={reduce ? false : { opacity: 0, x: 12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.85, ease: easeOutExpo }}
        className="absolute right-[8%] top-[42%] z-40 hidden w-52 rounded-xl border border-emerald-400/25 bg-[#0f1a14]/95 p-3 shadow-xl backdrop-blur-md md:block"
      >
        <p className="text-[11px] font-semibold text-emerald-300">Workflow cleared</p>
        <p className="mt-1 text-[10px] leading-relaxed text-white/55">
          Settlement batch · award payment · maker-checker signed
        </p>
      </motion.div>

      {/* Soft fade into next section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[var(--dark)] to-transparent" />
    </div>
  );
}
