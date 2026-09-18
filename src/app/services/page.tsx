import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { CapabilitiesGrid } from "@/components/CapabilitiesGrid";
import { AnimateIn } from "@/components/AnimateIn";
import { CtaBand } from "@/components/CtaBand";
import { homeCapabilities } from "@/content/why";
import { aiMlPractice, techStacks } from "@/content/services";
import { Sparkles, Cpu, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description: homeCapabilities.subtitle,
};

const aiIcons = [Sparkles, Cpu, ShieldCheck] as const;

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Digital services built for regulated operations"
        description="Capabilities spanning fintech and e-governance — delivered with AI/ML where it helps operators, on modern full-stack engineering."
        dark
      />

      <CapabilitiesGrid
        title={homeCapabilities.title}
        subtitle={homeCapabilities.subtitle}
        className="!pt-16 !pb-12"
      />

      <section id="ai-ml" className="border-y border-[var(--border)] bg-[var(--mist)] py-16 md:py-20 scroll-mt-28">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:max-w-[90rem] lg:px-12 xl:px-16">
          <AnimateIn>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
              AI & machine learning
            </p>
            <h2 className="mt-3 max-w-2xl font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-[var(--ink)] md:text-4xl">
              {aiMlPractice.title}
            </h2>
            <span
              className="mt-4 block h-1 w-14 rounded-full bg-[var(--accent)]"
              aria-hidden
            />
            <p className="mt-5 max-w-3xl text-sm leading-relaxed text-[var(--ink-muted)] md:text-base">
              {aiMlPractice.subtitle}
            </p>
          </AnimateIn>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {aiMlPractice.points.map((point, i) => {
              const Icon = aiIcons[i] ?? Sparkles;
              return (
                <AnimateIn key={point.title} delay={i * 0.06}>
                  <article className="h-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 md:p-7">
                    <span className="inline-flex h-10 w-10 items-center justify-center text-[var(--accent)]">
                      <Icon className="h-6 w-6" strokeWidth={1.6} />
                    </span>
                    <h3 className="mt-4 font-[family-name:var(--font-display)] text-lg font-semibold text-[var(--ink)]">
                      {point.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--ink-muted)]">
                      {point.body}
                    </p>
                  </article>
                </AnimateIn>
              );
            })}
          </div>
        </div>
      </section>

      <section id="technology" className="bg-[var(--paper)] py-16 md:py-20 scroll-mt-28">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:max-w-[90rem] lg:px-12 xl:px-16">
          <AnimateIn>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
              Technology
            </p>
            <h2 className="mt-3 max-w-2xl font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-[var(--ink)] md:text-4xl">
              Tech stacks we deliver on
            </h2>
            <span
              className="mt-4 block h-1 w-14 rounded-full bg-[var(--accent)]"
              aria-hidden
            />
            <p className="mt-5 max-w-3xl text-sm leading-relaxed text-[var(--ink-muted)] md:text-base">
              From React and Spring Boot to Odoo, Android field apps, OCR sidecars, and
              cloud key management — the stacks behind our fintech and e-governance platforms.
            </p>
          </AnimateIn>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {techStacks.map((group, i) => (
              <AnimateIn key={group.label} delay={i * 0.05}>
                <div className="h-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 md:p-6">
                  <h3 className="font-[family-name:var(--font-display)] text-sm font-semibold uppercase tracking-[0.12em] text-[var(--accent)]">
                    {group.label}
                  </h3>
                  <ul className="mt-4 space-y-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="flex gap-2 text-sm leading-snug text-[var(--ink-muted)]"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Not sure which service fits?"
        description="Describe the current process — who owns it, what breaks, and what “done” looks like. We will map it to the right engagement and stack."
        secondary={{ label: "See case studies", href: "/work" }}
      />
    </>
  );
}
