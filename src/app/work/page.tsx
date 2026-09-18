import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { AnimateIn } from "@/components/AnimateIn";
import { ProjectCard } from "@/components/ProjectCard";
import { CtaBand } from "@/components/CtaBand";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Case studies from Redmelon — Bhuarjan land acquisition platform and Cradexia TradeOS for Indian exporters.",
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Work"
        title="Case studies from regulated production environments"
        description="These are not concept decks. Bhuarjan runs statutory land acquisition workflows for government programs. Cradexia is built for exporters, CHAs, and AD banks facing FEMA 23(R)/2026 trade compliance."
        dark
      />
      <section className="bg-[var(--paper)] py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <AnimateIn>
            <p className="max-w-2xl text-base leading-relaxed text-[var(--ink-muted)]">
              Each case study covers the problem, modules shipped, stack, and measurable
              operating context. Skim the summaries below, then open a project for the full
              walkthrough.
            </p>
          </AnimateIn>
          <div className="mt-10 grid gap-6 md:grid-cols-2 md:gap-8">
            {projects.map((project, i) => (
              <AnimateIn key={project.slug} delay={i * 0.08}>
                <ProjectCard project={project} featured />
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>
      <CtaBand
        title="Have a similar mandate?"
        description="Land acquisition, trade compliance, collections, or BG management — tell us the Act, the volume, and the deadline."
        secondary={{ label: "Services overview", href: "/services" }}
      />
    </>
  );
}
