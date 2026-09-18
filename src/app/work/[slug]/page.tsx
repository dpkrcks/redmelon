import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { AnimateIn } from "@/components/AnimateIn";
import { Button } from "@/components/Button";
import { Counter } from "@/components/Counter";
import { CtaBand } from "@/components/CtaBand";
import { getProject, projects } from "@/content/projects";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.name,
    description: project.summary,
  };
}

export default async function ProjectCaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <>
      <section
        className="relative overflow-hidden pt-28 pb-16 text-[var(--paper)] md:pt-36 md:pb-24"
        style={{
          background: `linear-gradient(145deg, #0B1220 0%, ${project.accent} 120%)`,
        }}
      >
        <div className="noise absolute inset-0 opacity-25" />
        <div className="relative mx-auto max-w-6xl px-5 md:px-8">
          <AnimateIn>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              All work
            </Link>
            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.22em] text-white/60">
              {project.domainLabel}
            </p>
            <h1 className="mt-3 max-w-3xl font-[family-name:var(--font-display)] text-4xl leading-[1.08] md:text-6xl">
              {project.name}
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-white/75">{project.tagline}</p>
            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-white/65 md:text-base">
              {project.elevator}
            </p>
          </AnimateIn>
        </div>
      </section>

      <section className="border-b border-[var(--ink)]/8 bg-[var(--mist)]/60 py-12">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-5 sm:grid-cols-3 md:px-8">
          {project.stats.map((stat, i) => (
            <AnimateIn key={stat.label} delay={i * 0.08}>
              <p className="font-[family-name:var(--font-display)] text-4xl text-[var(--ink)] md:text-5xl">
                <Counter value={stat.value} />
              </p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--ink-muted)]">
                {stat.label}
              </p>
            </AnimateIn>
          ))}
        </div>
      </section>

      <section className="bg-[var(--paper)] py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-[1.2fr_0.8fr] md:px-8">
          <div>
            <AnimateIn>
              <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl">
                Overview
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[var(--ink-muted)] md:text-lg">
                {project.longDescription}
              </p>
            </AnimateIn>

            <AnimateIn delay={0.1}>
              <h3 className="mt-12 font-[family-name:var(--font-display)] text-2xl">
                What we built
              </h3>
            </AnimateIn>
            <div className="mt-6 space-y-4">
              {project.modules.map((mod, i) => (
                <AnimateIn key={mod.name} delay={i * 0.05}>
                  <article className="rounded-[1.5rem] border border-[var(--ink)]/8 bg-white/80 p-5 shadow-[0_16px_40px_-30px_rgba(11,18,32,0.45)] md:p-6">
                    <h4 className="font-semibold text-[var(--ink)]">{mod.name}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--ink-muted)]">
                      {mod.description}
                    </p>
                  </article>
                </AnimateIn>
              ))}
            </div>
          </div>

          <aside className="space-y-8">
            {project.image ? (
              <AnimateIn x={20}>
                <div className="overflow-hidden rounded-[1.75rem] border border-[var(--ink)]/8 bg-[var(--mist)]">
                  <Image
                    src={project.image}
                    alt=""
                    width={560}
                    height={420}
                    className="h-auto w-full"
                  />
                </div>
              </AnimateIn>
            ) : null}

            <AnimateIn delay={0.1}>
              <div className="rounded-[1.75rem] border border-[var(--ink)]/8 bg-[var(--ink)] p-6 text-[var(--paper)]">
                <h3 className="font-[family-name:var(--font-display)] text-xl">
                  Highlights
                </h3>
                <ul className="mt-4 space-y-3">
                  {project.features.map((f) => (
                    <li key={f} className="flex gap-3 text-sm text-white/75">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--gold)]" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.15}>
              <div className="rounded-[1.75rem] border border-[var(--ink)]/8 bg-white/80 p-6">
                <h3 className="font-[family-name:var(--font-display)] text-xl text-[var(--ink)]">
                  Stack
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-[var(--ink)]/10 bg-[var(--mist)] px-3 py-1 text-xs font-medium text-[var(--ink)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </AnimateIn>
          </aside>
        </div>

        <div className="mx-auto mt-16 max-w-6xl px-5 md:px-8">
          <Button href="/contact">Start a similar project</Button>
        </div>
      </section>
      <CtaBand
        title="Need this class of system for your mandate?"
        description="Share Act coverage, peak volumes, and integration constraints. We will outline a phased delivery plan."
        secondary={{ label: "All work", href: "/work" }}
      />
    </>
  );
}
