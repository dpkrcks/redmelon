import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  CheckCircle2,
  MapPinned,
  Landmark,
  FileText,
  ShieldCheck,
  CreditCard,
  Building2,
} from "lucide-react";
import { AnimateIn } from "@/components/AnimateIn";
import { Button } from "@/components/Button";
import { projects } from "@/content/projects";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";

const rows = [
  {
    domain: site.domains.find((d) => d.id === "egovernance")!,
    project: projects.find((p) => p.slug === "bhuarjan")!,
    visual: "egovernance" as const,
  },
  {
    domain: site.domains.find((d) => d.id === "fintech")!,
    project: projects.find((p) => p.slug === "cradexia")!,
    visual: "fintech" as const,
  },
];

export function DomainWorkSection() {
  return (
    <section className="bg-[var(--mist)] py-20 md:py-28">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:max-w-[90rem] lg:px-12 xl:px-16">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <AnimateIn>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
              Domains & work
            </p>
            <h2 className="mt-3 max-w-xl font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-[var(--ink)] md:text-4xl">
              Built for the desks that run regulated work
            </h2>
            <span
              className="mt-4 block h-1 w-14 rounded-full bg-[var(--accent)]"
              aria-hidden
            />
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-[var(--ink-muted)] md:text-base">
              Two domains. Production systems. Explore how e-governance and fintech
              platforms ship under real statutory and banking constraints.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.08}>
            <Button href="/work" variant="underline">
              All solutions
            </Button>
          </AnimateIn>
        </div>

        <div className="mt-16 space-y-20 md:mt-24 md:space-y-28">
          {rows.map((row, i) => {
            const reverse = i % 2 === 1;
            return (
              <AnimateIn key={row.domain.id} delay={0.05}>
                <div
                  className={cn(
                    "grid items-center gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-20",
                  )}
                >
                  <div className={cn(reverse && "lg:order-2")}>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                      {row.project.domainLabel}
                    </p>
                    <h3 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-[var(--ink)] md:text-4xl">
                      {row.domain.title}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-[var(--ink-muted)] md:text-base">
                      {row.domain.description}
                    </p>
                    <ul className="mt-6 space-y-3">
                      {row.domain.points.map((point) => (
                        <li
                          key={point}
                          className="flex gap-2.5 text-sm text-[var(--ink)]"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent)]" />
                          {point}
                        </li>
                      ))}
                    </ul>

                    <FeaturedProjectCard project={row.project} domainHref={row.domain.href} />
                  </div>

                  <div className={cn("relative", reverse && "lg:order-1")}>
                    {row.visual === "egovernance" ? (
                      <EgovVisual image={row.project.image} />
                    ) : (
                      <FintechVisual image={row.project.image} />
                    )}
                  </div>
                </div>
              </AnimateIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FeaturedProjectCard({
  project,
  domainHref,
}: {
  project: (typeof projects)[number];
  domainHref: string;
}) {
  return (
    <div className="relative mt-8 overflow-hidden rounded-2xl border border-white/10 shadow-[0_20px_50px_-28px_rgba(10,10,18,0.55)]">
      {project.image ? (
        <Image
          src={project.image}
          alt=""
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 40vw"
        />
      ) : null}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(145deg, ${project.accent}cc 0%, rgba(9,9,16,0.88) 55%, rgba(9,9,16,0.94) 100%)`,
        }}
      />
      <div className="relative p-5 text-white md:p-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/55">
          Featured system
        </p>
        <p className="mt-2 font-[family-name:var(--font-display)] text-2xl font-semibold">
          {project.name}
        </p>
        <p className="mt-1 text-sm text-white/75">{project.tagline}</p>
        <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-white/60">
          {project.summary}
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            href={`/work/${project.slug}`}
            className="group inline-flex items-center gap-2 text-sm font-medium text-white"
          >
            View case study
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <Link
            href={domainHref}
            className="inline-flex items-center gap-2 text-sm text-white/55 transition-colors hover:text-white"
          >
            Explore domain
          </Link>
        </div>
      </div>
    </div>
  );
}

function EgovVisual({ image }: { image?: string }) {
  return (
    <div className="relative mx-auto min-h-[22rem] max-w-lg overflow-hidden rounded-[2rem] md:min-h-[26rem]">
      {image ? (
        <Image
          src={image}
          alt=""
          fill
          className="object-cover opacity-40"
          sizes="(max-width: 1024px) 100vw, 40vw"
        />
      ) : null}
      <div className="absolute inset-0 bg-gradient-to-br from-[#8A4531]/40 via-[var(--mist)]/85 to-[var(--accent)]/20" />

      <div className="absolute left-4 top-8 z-10 w-[70%] rotate-[-4deg] rounded-2xl border border-[var(--border)] bg-[var(--surface)]/95 p-4 shadow-[0_20px_50px_-24px_rgba(10,10,18,0.4)] backdrop-blur-sm md:left-6 md:p-5">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#8A4531]/15 text-[#8A4531]">
            <MapPinned className="h-5 w-5" />
          </span>
          <div>
            <p className="text-sm font-semibold text-[var(--ink)]">Form-10 Survey</p>
            <p className="text-xs text-[var(--ink-muted)]">Field capture · geotagged</p>
          </div>
        </div>
      </div>

      <div className="absolute right-2 top-28 z-10 w-[72%] rotate-[3deg] rounded-2xl border border-[var(--border)] bg-[var(--surface)]/95 p-4 shadow-[0_24px_55px_-22px_rgba(10,10,18,0.45)] backdrop-blur-sm md:right-4 md:p-5">
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold text-[var(--ink)]">Section 19 Award</p>
          <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-emerald-700">
            Declared
          </span>
        </div>
        <div className="mt-4 space-y-2">
          {["Khasra verified", "Landowner notified", "Payment batch queued"].map(
            (step) => (
              <div
                key={step}
                className="flex items-center gap-2 rounded-lg bg-[var(--mist)] px-3 py-2 text-xs text-[var(--ink)]"
              >
                <CheckCircle2 className="h-3.5 w-3.5 text-[var(--accent)]" />
                {step}
              </div>
            ),
          )}
        </div>
      </div>

      <div className="absolute bottom-6 left-8 z-10 flex rotate-[-2deg] items-center gap-3 rounded-2xl border border-[var(--border)] bg-[var(--dark)] px-4 py-3 text-white shadow-xl md:left-12">
        <ShieldCheck className="h-5 w-5 text-[var(--gold)]" />
        <div>
          <p className="text-xs font-semibold">Collector dashboard</p>
          <p className="text-[10px] text-white/60">Live district visibility</p>
        </div>
      </div>
    </div>
  );
}

function FintechVisual({ image }: { image?: string }) {
  return (
    <div className="relative mx-auto min-h-[22rem] max-w-lg overflow-hidden rounded-[2rem] md:min-h-[26rem]">
      {image ? (
        <Image
          src={image}
          alt=""
          fill
          className="object-cover opacity-40"
          sizes="(max-width: 1024px) 100vw, 40vw"
        />
      ) : null}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0E8A7E]/35 via-[var(--mist)]/85 to-[var(--accent)]/15" />

      <div className="absolute right-3 top-6 z-10 w-[78%] rotate-[4deg] rounded-2xl border border-[var(--border)] bg-[var(--surface)]/95 p-4 shadow-[0_22px_50px_-20px_rgba(10,10,18,0.4)] backdrop-blur-sm md:p-5">
        <div className="mb-3 flex items-center justify-between">
          <p className="text-sm font-semibold text-[var(--ink)]">Collections today</p>
          <CreditCard className="h-4 w-4 text-[#0E8A7E]" />
        </div>
        {[
          { label: "NEFT · Utility Corp", amount: "₹4.2L", status: "Settled" },
          { label: "PG · Merchant batch", amount: "₹86K", status: "Matched" },
          { label: "RTGS · Treasury", amount: "₹12.5L", status: "In transit" },
        ].map((row) => (
          <div
            key={row.label}
            className="flex items-center justify-between border-t border-[var(--border)] py-2.5 text-xs"
          >
            <span className="text-[var(--ink-muted)]">{row.label}</span>
            <span className="font-semibold text-[var(--ink)]">{row.amount}</span>
            <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">
              {row.status}
            </span>
          </div>
        ))}
      </div>

      <div className="absolute bottom-8 left-4 z-10 w-[68%] rotate-[-5deg] rounded-2xl border border-[var(--border)] bg-[var(--surface)]/95 p-4 shadow-[0_20px_45px_-18px_rgba(10,10,18,0.4)] backdrop-blur-sm md:left-6">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0E8A7E]/15 text-[#0E8A7E]">
            <FileText className="h-5 w-5" />
          </span>
          <div>
            <p className="text-sm font-semibold text-[var(--ink)]">Trade TXN-20491</p>
            <p className="text-xs text-[var(--ink-muted)]">EDPMS · e-BRC ready</p>
          </div>
        </div>
      </div>

      <div className="absolute left-[42%] top-[42%] z-10 flex -translate-x-1/2 -translate-y-1/2 rotate-[2deg] items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--dark)] px-3 py-2 text-xs text-white shadow-lg">
        <Building2 className="h-3.5 w-3.5 text-[var(--gold)]" />
        AD Bank case matched
      </div>

      <div className="absolute bottom-4 right-6 z-10 rotate-[6deg] rounded-xl border border-[var(--border)] bg-[var(--surface)]/95 px-3 py-2 text-[11px] font-medium text-[var(--ink)] shadow-md backdrop-blur-sm">
        <span className="mr-1 inline-flex text-[#0E8A7E]">
          <Landmark className="inline h-3.5 w-3.5" />
        </span>
        BG expiry watch · 14d
      </div>
    </div>
  );
}
