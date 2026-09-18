import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { AnimateIn } from "@/components/AnimateIn";
import { CtaBand } from "@/components/CtaBand";
import { culture } from "@/content/culture";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Culture",
  description: culture.intro,
};

export default function CulturePage() {
  return (
    <>
      <PageHero eyebrow="Culture" title={culture.title} description={culture.quote} dark />
      <section className="bg-[var(--paper)] py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <AnimateIn>
            <p className="max-w-3xl text-base leading-relaxed text-[var(--ink-muted)] md:text-lg">
              {culture.intro}
            </p>
          </AnimateIn>
          <div className="mt-10 max-w-3xl space-y-5">
            {culture.paragraphs.map((p, i) => (
              <AnimateIn key={i} delay={i * 0.06}>
                <p className="text-base leading-relaxed text-[var(--ink-muted)]">{p}</p>
              </AnimateIn>
            ))}
          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-3">
            {culture.pillars.map((pillar, i) => (
              <AnimateIn key={pillar.title} delay={i * 0.06}>
                <div className="card-surface h-full p-6">
                  <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--ink)]">
                    {pillar.title}
                  </h2>
                  <p className="mt-3 text-sm text-[var(--ink-muted)]">{pillar.description}</p>
                </div>
              </AnimateIn>
            ))}
          </div>

          <AnimateIn>
            <h2 className="mt-16 font-[family-name:var(--font-display)] text-2xl font-semibold">
              How we work on regulated programs
            </h2>
          </AnimateIn>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {culture.waysOfWorking.map((w, i) => (
              <AnimateIn key={w} delay={i * 0.04}>
                <li className="card-surface flex gap-3 p-5 text-sm text-[var(--ink)]">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent)]" />
                  {w}
                </li>
              </AnimateIn>
            ))}
          </ul>
        </div>
      </section>
      <CtaBand
        title="Culture fit matters on long programs"
        description="If this working style matches how you buy and run software, we should talk — whether you are hiring us or joining us."
        secondary={{ label: "Open roles", href: "/careers" }}
      />
    </>
  );
}
