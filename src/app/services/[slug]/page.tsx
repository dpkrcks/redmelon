import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { AnimateIn } from "@/components/AnimateIn";
import { Button } from "@/components/Button";
import { CtaBand } from "@/components/CtaBand";
import { getService, services } from "@/content/services";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return { title: service.title, description: service.short };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <>
      <PageHero eyebrow="Service" title={service.title} description={service.short} dark />
      <section className="bg-[var(--paper)] py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <AnimateIn>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm text-[var(--ink-muted)] transition-colors hover:text-[var(--accent)]"
            >
              <ArrowLeft className="h-4 w-4" />
              All services
            </Link>
          </AnimateIn>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <AnimateIn>
                <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold">
                  What we deliver
                </h2>
                <p className="mt-4 text-base leading-relaxed text-[var(--ink-muted)] md:text-lg">
                  {service.description}
                </p>
              </AnimateIn>

              <AnimateIn delay={0.08}>
                <h3 className="mt-10 font-[family-name:var(--font-display)] text-xl font-semibold">
                  Who this is for
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--ink-muted)] md:text-base">
                  {service.whoFor}
                </p>
              </AnimateIn>

              <ul className="mt-10 space-y-3">
                {service.highlights.map((h, i) => (
                  <AnimateIn key={h} delay={i * 0.04}>
                    <li className="card-surface flex items-start gap-3 px-5 py-4 text-sm text-[var(--ink)]">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent)]" />
                      {h}
                    </li>
                  </AnimateIn>
                ))}
              </ul>
            </div>

            <aside>
              <AnimateIn x={12}>
                <div className="rounded-2xl border border-[var(--border)] bg-[var(--dark)] p-6 text-white md:p-7">
                  <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold">
                    Expected outcomes
                  </h3>
                  <ul className="mt-5 space-y-3">
                    {service.outcomes.map((o) => (
                      <li key={o} className="flex gap-2 text-sm text-white/75">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                        {o}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 flex flex-col gap-3">
                    <Button href="/contact" className="w-full justify-center">
                      Discuss this service
                    </Button>
                    {service.relatedWork ? (
                      <Button
                        href={`/work/${service.relatedWork}`}
                        variant="secondary"
                        className="w-full justify-center !border-white/20 !bg-white/5 !text-white hover:!bg-white/10"
                      >
                        Related case study
                        <ArrowUpRight className="h-4 w-4" />
                      </Button>
                    ) : null}
                  </div>
                </div>
              </AnimateIn>
            </aside>
          </div>
        </div>
      </section>
      <CtaBand
        title="Ready to scope this properly?"
        description="Bring the current SOP, volume numbers, and integration constraints. We will return a phased plan."
      />
    </>
  );
}
