import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { AnimateIn } from "@/components/AnimateIn";
import { MetricBand } from "@/components/MetricBand";
import { CtaBand } from "@/components/CtaBand";
import { about } from "@/content/culture";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description: about.lead,
};

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow={about.eyebrow} title={about.title} description={about.lead} dark />
      <MetricBand metrics={site.metrics} />

      <section className="bg-[var(--paper)] py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl items-start gap-12 px-5 md:grid-cols-[1.15fr_0.85fr] md:px-8">
          <div className="space-y-5">
            {about.paragraphs.map((p, i) => (
              <AnimateIn key={i} delay={i * 0.06}>
                <p className="text-base leading-relaxed text-[var(--ink-muted)] md:text-lg">
                  {p}
                </p>
              </AnimateIn>
            ))}
            <AnimateIn delay={0.18}>
              <dl className="mt-2 grid grid-cols-2 gap-3">
                {about.facts.map((f) => (
                  <div key={f.label} className="card-surface p-4">
                    <dt className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--ink-muted)]">
                      {f.label}
                    </dt>
                    <dd className="mt-1 text-sm font-medium text-[var(--ink)]">{f.value}</dd>
                  </div>
                ))}
              </dl>
            </AnimateIn>
          </div>
          <AnimateIn delay={0.1} x={16}>
            <div className="card-surface overflow-hidden p-2">
              <Image
                src="/img/institutional-facade.jpg"
                alt="Institutional banking and government architecture"
                width={640}
                height={480}
                className="h-auto w-full rounded-xl object-cover"
              />
            </div>
          </AnimateIn>
        </div>

        <div className="mx-auto mt-20 max-w-6xl px-5 md:mt-24 md:px-8">
          <AnimateIn>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
              Engagement
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-[var(--ink)] md:text-4xl">
              How we engage
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--ink-muted)]">
              Engagement models match the mandate — fixed-scope product builds, embedded
              squads, or architecture and review retainers for regulated programs across
              fintech and e-governance.
            </p>
            <span
              className="mt-5 block h-1 w-14 rounded-full bg-[var(--accent)]"
              aria-hidden
            />
          </AnimateIn>

          <ol className="mt-12 divide-y divide-[var(--border)] border-y border-[var(--border)]">
            {about.offerings.map((item, i) => (
              <AnimateIn key={item.title} delay={i * 0.04}>
                <li className="grid gap-6 py-8 md:grid-cols-[5rem_1fr] md:gap-10 md:py-10 lg:grid-cols-[5.5rem_1.1fr_0.9fr]">
                  <span className="font-[family-name:var(--font-display)] text-3xl font-semibold tabular-nums text-[var(--accent)]/80 md:text-4xl">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold tracking-tight text-[var(--ink)] md:text-2xl">
                      {item.title}
                    </h3>
                    <p className="mt-3 max-w-xl text-sm leading-relaxed text-[var(--ink-muted)] md:text-base">
                      {item.detail}
                    </p>
                  </div>
                  <ul className="space-y-2.5 self-center">
                    {item.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-2.5 text-sm leading-snug text-[var(--ink)]"
                      >
                        <span
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]"
                          aria-hidden
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </li>
              </AnimateIn>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand
        title="Want the longer version over a call?"
        description="Share the workflow you need to digitize. We will tell you honestly whether we are the right build partner."
      />
    </>
  );
}
