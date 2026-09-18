import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { AnimateIn } from "@/components/AnimateIn";
import { clients } from "@/content/clients";

export const metadata: Metadata = {
  title: "Clients",
  description:
    "Organizations Redmelon works with across consulting, banking, and industry — EY, Grant Thornton, IndusInd Bank, IDFC FIRST Bank, BHEL, ADSS.",
};

const connectSteps = [
  {
    title: "Listen to the mandate",
    body: "We start with the desks that will run the system — branch ops, treasury, Patwari, Collector, exporter, or AD bank — and the statutory or settlement constraints they cannot skip.",
  },
  {
    title: "Map the seamless path",
    body: "Domain experts and engineers jointly define the workflow, integrations, and evidence trail so handoffs between teams, vendors, and systems stay continuous instead of spreadsheet-stitched.",
  },
  {
    title: "Deliver and stay accountable",
    body: "Named contacts through build, go-live, and hypercare. Support is structured around the platforms we ship — not a generic ticket queue after the project deck closes.",
  },
];

const servicePillars = [
  {
    title: "Fintech & banking",
    body: "Collections and settlement views, bank-guarantee lifecycle, payments orchestration, and API routing layers that reach multiple vendors from one integration program.",
  },
  {
    title: "E-governance",
    body: "Statutory land acquisition and field-to-HQ workflows with role dashboards, audit trails, and DPDP-aware controls — so case status is never a rumour.",
  },
  {
    title: "Security & architecture",
    body: "Assessments, hardening, and enterprise designs that stand up to regulated reviews — so seamless operations are also defensible ones.",
  },
];

export default function ClientsPage() {
  return (
    <>
      <PageHero
        eyebrow="Clients"
        title="Trusted across consulting, banking, and industry programs"
        description="We collaborate with consulting houses, private banks, and industrial enterprises on regulated digital programs. Logos below are the current public roster — more names land as NDAs allow."
        dark
      />

      <section className="bg-[var(--paper)] py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <AnimateIn>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
              Current roster
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-[var(--ink)] md:text-4xl">
              Organizations we work with
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--ink-muted)]">
              Public logos only — additional banking and government references are shared under
              NDA for qualified opportunities.
            </p>
          </AnimateIn>

          <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 lg:gap-5">
            {clients.map((client, i) => (
              <AnimateIn key={client.slug} delay={i * 0.04}>
                <li className="flex h-28 flex-col items-center justify-center gap-3 rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-4 py-5 transition-colors hover:border-[var(--accent)]/30">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={160}
                    height={56}
                    className="h-10 w-auto max-w-full object-contain dark:brightness-0 dark:invert"
                  />
                  <span className="text-center text-[11px] font-medium text-[var(--ink-muted)]">
                    {client.name}
                  </span>
                </li>
              </AnimateIn>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-y border-[var(--border)] bg-[var(--mist)] py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <AnimateIn>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
              How we connect
            </p>
            <h2 className="mt-3 max-w-2xl font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-[var(--ink)] md:text-4xl">
              From first conversation to seamless delivery
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--ink-muted)]">
              Clients come to us for regulated programs that cannot afford integration friction or
              domain-blind builds. We connect early, stay close to operators, and hand over systems
              that keep running after go-live.
            </p>
          </AnimateIn>

          <ol className="mt-12 grid gap-8 md:grid-cols-3 md:gap-10">
            {connectSteps.map((step, i) => (
              <AnimateIn key={step.title} delay={i * 0.06}>
                <li>
                  <span className="font-[family-name:var(--font-display)] text-3xl font-semibold text-[var(--accent)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--ink)]">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--ink-muted)] md:text-base">
                    {step.body}
                  </p>
                </li>
              </AnimateIn>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-[var(--paper)] py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <AnimateIn>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
              Seamless services
            </p>
            <h2 className="mt-3 max-w-2xl font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-[var(--ink)] md:text-4xl">
              One partner across the regulated stack
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--ink-muted)]">
              Instead of stitching separate vendors for assessment, build, integration, and
              support, clients get a continuous delivery path — domain mapping through production
              ownership.
            </p>
          </AnimateIn>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {servicePillars.map((pillar, i) => (
              <AnimateIn key={pillar.title} delay={i * 0.06}>
                <article className="h-full border-l-2 border-[var(--accent)] pl-5">
                  <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--ink)]">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--ink-muted)] md:text-base">
                    {pillar.body}
                  </p>
                </article>
              </AnimateIn>
            ))}
          </div>

          <AnimateIn delay={0.12}>
            <p className="mt-14 max-w-3xl text-sm leading-relaxed text-[var(--ink-muted)] md:text-base">
              Typical engagements span payments and collections platforms, bank-guarantee tracking,
              security assessments, multi-vendor API programs, and e-governance builds such as land
              acquisition. References are available under NDA for qualified opportunities.
            </p>
          </AnimateIn>
        </div>
      </section>

      <CtaBand
        title="Want to join this roster?"
        description="Bring the mandate and constraints. We will tell you quickly whether we can deliver and on what timeline."
      />
    </>
  );
}
