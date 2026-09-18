import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Landmark,
  Handshake,
  CreditCard,
  Shield,
  MapPinned,
  Cable,
  CheckCircle2,
  FileBadge2,
} from "lucide-react";
import { AnimateIn } from "@/components/AnimateIn";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";

const tones = {
  lavender: {
    card: "bg-[#ece6f7] dark:bg-[#221f2e]",
    accent: "text-[#6d5a9c] dark:text-[#c4b5e8]",
    chip: "bg-white/80 text-[#6d5a9c] dark:bg-white/10 dark:text-[#c4b5e8]",
    glow: "from-[#d4c8f0]/80 to-transparent dark:from-[#6d5a9c]/25",
  },
  sky: {
    card: "bg-[#e4f1fb] dark:bg-[#1a2430]",
    accent: "text-[#3d6f94] dark:text-[#9ec4e0]",
    chip: "bg-white/80 text-[#3d6f94] dark:bg-white/10 dark:text-[#9ec4e0]",
    glow: "from-[#b9d9f2]/80 to-transparent dark:from-[#3d6f94]/25",
  },
  mint: {
    card: "bg-[#e5f4ea] dark:bg-[#1a2820]",
    accent: "text-[#3d7a55] dark:text-[#9fd4b0]",
    chip: "bg-white/80 text-[#3d7a55] dark:bg-white/10 dark:text-[#9fd4b0]",
    glow: "from-[#b8e0c6]/70 to-transparent dark:from-[#3d7a55]/25",
  },
} as const;

export function AudiencesSection() {
  return (
    <section className="bg-[var(--paper)] py-20 md:py-28">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:max-w-[90rem] lg:px-12 xl:px-16">
        <AnimateIn>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--ink-muted)]">
              Who we serve
            </p>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-[var(--ink)] md:text-5xl md:leading-[1.15]">
              Structure that adapts to how you buy and operate
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-[var(--ink-muted)] md:text-base">
              Whether you are a bank product owner, a district administration cell, or an SI
              delivering a PSU mandate — we shape delivery around regulated desks, not generic
              project templates.
            </p>
          </div>
        </AnimateIn>

        <div className="mt-14 grid gap-5 md:grid-cols-3 md:gap-6 lg:gap-7">
          {site.audiences.map((audience, i) => (
            <AnimateIn key={audience.id} delay={i * 0.08}>
              <AudienceCard audience={audience} />
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function AudienceCard({
  audience,
}: {
  audience: (typeof site.audiences)[number];
}) {
  const tone = tones[audience.tone];

  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] p-6 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 md:p-7",
        tone.card,
      )}
    >
      <div
        className={cn(
          "pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br opacity-80 blur-2xl",
          tone.glow,
        )}
      />

      <div className="relative">
        <h3 className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-[var(--ink)] md:text-[1.7rem]">
          {audience.title}
        </h3>
        <p className={cn("mt-2 text-sm font-medium", tone.accent)}>
          {audience.subtitle}
        </p>
        <p className="mt-4 text-sm leading-relaxed text-[var(--ink-muted)]">
          {audience.description}
        </p>

        <ul className="mt-5 space-y-2">
          {audience.points.map((point) => (
            <li
              key={point}
              className="flex gap-2 text-sm text-[var(--ink)]"
            >
              <CheckCircle2 className={cn("mt-0.5 h-4 w-4 shrink-0", tone.accent)} />
              {point}
            </li>
          ))}
        </ul>
      </div>

      <div className="relative mt-8 flex-1">
        {audience.id === "banks" ? <BanksVisual /> : null}
        {audience.id === "government" ? <GovVisual /> : null}
        {audience.id === "enterprise" ? <EnterpriseVisual /> : null}
      </div>

      <Link
        href={audience.href}
        className="relative mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--ink)] transition-colors group-hover:text-[var(--accent)]"
      >
        Explore
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </Link>
    </article>
  );
}

function BanksVisual() {
  return (
    <div className="relative min-h-[11rem]">
      <div className="absolute left-0 top-2 w-[85%] rotate-[-3deg] rounded-2xl border border-white/70 bg-white/95 p-3.5 shadow-[0_16px_40px_-20px_rgba(10,10,18,0.35)]">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#ece6f7] text-[#6d5a9c]">
            <Building2 className="h-4 w-4" />
          </span>
          <div>
            <p className="text-xs font-semibold text-[var(--ink)]">Treasury desk</p>
            <p className="text-[10px] text-[var(--ink-muted)]">BG · Collections · PaaS</p>
          </div>
        </div>
        <div className="mt-3 space-y-1.5">
          {["NEFT batch reconciled", "BG expiry · 12 instruments"].map((row) => (
            <div
              key={row}
              className="flex items-center gap-2 rounded-lg bg-[var(--mist)] px-2.5 py-1.5 text-[11px] text-[var(--ink)]"
            >
              <CreditCard className="h-3 w-3 text-[var(--accent)]" />
              {row}
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-[70%] rotate-[4deg] rounded-2xl border border-white/70 bg-white p-3 shadow-lg">
        <div className="flex items-center gap-2 text-[11px] font-semibold text-[var(--ink)]">
          <Shield className="h-3.5 w-3.5 text-[var(--accent)]" />
          Security findings · prioritized
        </div>
      </div>
    </div>
  );
}

function GovVisual() {
  return (
    <div className="relative min-h-[11rem]">
      <div className="absolute right-0 top-0 w-[80%] rotate-[3deg] rounded-2xl border border-white/70 bg-white/95 p-3.5 shadow-[0_16px_40px_-20px_rgba(10,10,18,0.35)]">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#e4f1fb] text-[#3d6f94]">
            <MapPinned className="h-4 w-4" />
          </span>
          <div>
            <p className="text-xs font-semibold text-[var(--ink)]">District monitor</p>
            <p className="text-[10px] text-[var(--ink-muted)]">Patwari → Collector</p>
          </div>
        </div>
        <div className="mt-3 space-y-1.5">
          {["Form-10 filed", "Section 11 in review", "Award payment queued"].map(
            (row) => (
              <div
                key={row}
                className="rounded-lg bg-[var(--mist)] px-2.5 py-1.5 text-[11px] text-[var(--ink)]"
              >
                {row}
              </div>
            ),
          )}
        </div>
      </div>
      <div className="absolute bottom-1 left-1 rotate-[-4deg] rounded-xl border border-white/70 bg-white px-3 py-2 text-[11px] font-medium shadow-md">
        <Landmark className="mr-1.5 inline h-3.5 w-3.5 text-[#3d6f94]" />
        RFCTLARR chain live
      </div>
    </div>
  );
}

function EnterpriseVisual() {
  return (
    <div className="relative min-h-[11rem]">
      <div className="absolute left-1 top-1 w-[78%] rotate-[-2deg] rounded-2xl border border-white/70 bg-white/95 p-3.5 shadow-[0_16px_40px_-20px_rgba(10,10,18,0.35)]">
        <div className="mb-2 flex items-center gap-2 text-xs font-semibold text-[var(--ink)]">
          <Cable className="h-3.5 w-3.5 text-[#3d7a55]" />
          Integration board
        </div>
        <div className="grid grid-cols-3 gap-1.5 text-center text-[10px]">
          {["Bank", "PG", "ERP"].map((n) => (
            <span
              key={n}
              className="rounded-lg bg-[#e5f4ea] px-2 py-2 font-semibold text-[#3d7a55]"
            >
              {n}
            </span>
          ))}
        </div>
        <p className="mt-2 text-[10px] text-[var(--ink-muted)]">
          One surface · many vendors
        </p>
      </div>
      <div className="absolute bottom-0 right-0 flex rotate-[5deg] items-center gap-2 rounded-2xl border border-white/70 bg-white px-3 py-2.5 shadow-lg">
        <Handshake className="h-4 w-4 text-[#3d7a55]" />
        <div>
          <p className="text-[11px] font-semibold text-[var(--ink)]">Partner delivery</p>
          <p className="text-[10px] text-[var(--ink-muted)]">SI · product · retainers</p>
        </div>
      </div>
      <div className="absolute left-[35%] top-[48%] rounded-full bg-[var(--accent)] px-2.5 py-1 text-[10px] font-semibold text-white shadow-md">
        <FileBadge2 className="mr-1 inline h-3 w-3" />
        Configurable
      </div>
    </div>
  );
}
