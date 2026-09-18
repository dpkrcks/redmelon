import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { AnimateIn } from "@/components/AnimateIn";
import { ProjectCard } from "@/components/ProjectCard";
import { CtaBand } from "@/components/CtaBand";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Red Melon solutions — Bhuarjan, Cradexia, BharatNyay, and BharatDDN for fintech and e-governance programmes.",
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Platforms from regulated production environments"
        description="Bhuarjan and Cradexia run in production for government and trade programmes. BharatNyay and BharatDDN extend the e-governance portfolio — fuller case content coming soon."
        dark
      />
      <section className="bg-[var(--paper)] py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <AnimateIn>
            <p className="max-w-2xl text-base leading-relaxed text-[var(--ink-muted)]">
              Skim the summaries below, then open a solution for the overview and operating
              context.
            </p>
          </AnimateIn>
          <div className="mt-10 grid gap-6 md:grid-cols-2 md:gap-8">
            {projects.map((project, i) => (
              <AnimateIn key={project.slug} delay={i * 0.06}>
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
