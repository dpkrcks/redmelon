import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { AnimateIn } from "@/components/AnimateIn";
import { ClientLogoStrip } from "@/components/ClientLogoStrip";
import { CtaBand } from "@/components/CtaBand";
import { partners } from "@/content/culture";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Partners",
  description: partners.subtitle,
};

export default function PartnersPage() {
  return (
    <>
      <PageHero eyebrow="Partners" title={partners.title} description={partners.subtitle} dark />
      <section className="bg-[var(--paper)] py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="grid gap-4 md:grid-cols-3">
            {partners.items.map((item, i) => (
              <AnimateIn key={item.title} delay={i * 0.06}>
                <article className="card-surface h-full p-6 md:p-7">
                  <span className="font-[family-name:var(--font-display)] text-3xl font-semibold text-[var(--accent)]/30">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="mt-3 font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--ink)]">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--ink-muted)]">
                    {item.description}
                  </p>
                </article>
              </AnimateIn>
            ))}
          </div>

          <AnimateIn>
            <h2 className="mt-16 font-[family-name:var(--font-display)] text-2xl font-semibold">
              Who typically partners with us
            </h2>
          </AnimateIn>
          <ul className="mt-6 grid gap-3 md:grid-cols-3">
            {partners.who.map((w, i) => (
              <AnimateIn key={w} delay={i * 0.05}>
                <li className="card-surface flex gap-3 p-5 text-sm text-[var(--ink)]">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent)]" />
                  {w}
                </li>
              </AnimateIn>
            ))}
          </ul>
        </div>
      </section>
      <ClientLogoStrip
        title="Organizations in our delivery network"
        className="bg-[var(--mist)]"
      />
      <CtaBand
        title="Explore a partner motion"
        description="If you sell into BFSI or government and need a build partner with domain engineers, let’s map territories and offerings."
      />
    </>
  );
}
