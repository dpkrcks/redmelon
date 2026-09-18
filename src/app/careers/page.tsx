import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { AnimateIn } from "@/components/AnimateIn";
import { Button } from "@/components/Button";
import { CtaBand } from "@/components/CtaBand";
import { careers } from "@/content/culture";

export const metadata: Metadata = {
  title: "Careers",
  description: careers.intro,
};

export default function CareersPage() {
  return (
    <>
      <PageHero eyebrow="Careers" title={careers.title} description={careers.subtitle} dark />
      <section className="bg-[var(--paper)] py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <AnimateIn>
            <p className="max-w-2xl text-base leading-relaxed text-[var(--ink-muted)] md:text-lg">
              {careers.intro}
            </p>
          </AnimateIn>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            <AnimateIn>
              <div className="card-surface h-full p-7">
                <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold">
                  You are…
                </h2>
                <ul className="mt-5 space-y-3">
                  {careers.youAre.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-[var(--ink-muted)]">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateIn>
            <AnimateIn delay={0.08}>
              <div className="h-full rounded-2xl bg-[var(--dark)] p-7 text-white">
                <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold">
                  You will…
                </h2>
                <ul className="mt-5 space-y-3">
                  {careers.youWill.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-white/70">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--gold)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateIn>
          </div>

          <AnimateIn>
            <h2 className="mt-16 font-[family-name:var(--font-display)] text-2xl font-semibold md:text-3xl">
              Open roles
            </h2>
            <p className="mt-3 max-w-xl text-sm text-[var(--ink-muted)]">
              Email{" "}
              <a className="text-[var(--accent)] underline-offset-2 hover:underline" href={`mailto:${careers.ctaEmail}`}>
                {careers.ctaEmail}
              </a>{" "}
              with the role in the subject and a short note on a regulated system you improved.
            </p>
          </AnimateIn>
          <div className="mt-8 space-y-4">
            {careers.openings.map((role, i) => (
              <AnimateIn key={role.title} delay={i * 0.05}>
                <article className="card-surface flex flex-col gap-4 p-6 md:flex-row md:items-center md:justify-between md:p-7">
                  <div>
                    <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--ink)]">
                      {role.title}
                    </h3>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--ink-muted)]">
                      {role.type} · {role.location}
                    </p>
                    <p className="mt-3 max-w-2xl text-sm text-[var(--ink-muted)]">
                      {role.description}
                    </p>
                  </div>
                  <Button
                    href={`mailto:${careers.ctaEmail}?subject=Application — ${role.title}`}
                    className="shrink-0"
                  >
                    Apply
                  </Button>
                </article>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>
      <CtaBand
        title="Hiring for domain engineers too?"
        description="If your org needs embedded Redmelon capacity instead of a full-time hire, ask about partner and staff-aug models."
        primary={{ label: "Contact us", href: "/contact" }}
      />
    </>
  );
}
