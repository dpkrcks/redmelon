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
              All solutions
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

      {project.stats.length > 0 ? (
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
      ) : null}

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
          </div>

          {project.image ? (
            <aside>
              <AnimateIn x={20}>
                <div className="overflow-hidden rounded-[1.75rem] border border-[var(--ink)]/8 bg-[var(--mist)]">
                  <Image
                    src={project.image}
                    alt=""
                    width={560}
                    height={420}
                    className="h-auto w-full object-cover"
                  />
                </div>
              </AnimateIn>
            </aside>
          ) : null}
        </div>

        <div className="mx-auto mt-16 max-w-6xl px-5 md:px-8">
          <Button href="/contact">Start a similar project</Button>
        </div>
      </section>
      <CtaBand
        title="Need this class of system for your mandate?"
        description="Share Act coverage, peak volumes, and integration constraints. We will outline a phased delivery plan."
        secondary={{ label: "All solutions", href: "/work" }}
      />
    </>
  );
}
