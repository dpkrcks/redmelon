import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimateIn } from "@/components/AnimateIn";
import { Button } from "@/components/Button";
import { cn } from "@/lib/utils";

export function FrictionBento() {
  return (
    <section className="bg-[var(--paper)] py-20 md:py-28">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:max-w-[90rem] lg:px-12 xl:px-16">
        <AnimateIn>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
            The friction we remove
          </p>
        </AnimateIn>

        {/* Editorial asymmetric grid */}
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-5 lg:gap-6">
          {/* Row 1 */}
          <AnimateIn className="md:col-span-5">
            <Media
              src="/img/enterprise-office.jpg"
              alt="Enterprise delivery workspace for regulated systems"
              className="aspect-[16/10] md:aspect-[5/3]"
            />
          </AnimateIn>

          <AnimateIn delay={0.06} className="md:col-span-3">
            <Media
              src="/img/finance-documents.jpg"
              alt="Financial and statutory documents used in banking workflows"
              className="aspect-square"
            />
          </AnimateIn>

          <AnimateIn delay={0.1} className="flex flex-col justify-end md:col-span-4">
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold leading-[1.12] tracking-tight text-[var(--ink)] md:text-4xl lg:text-[2.75rem]">
              We&apos;re{" "}
              <span className="text-[var(--accent)]">domain-deep</span>
              {" "}— and that&apos;s a feature.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[var(--ink-muted)] md:text-base">
              Spreadsheets, N×N integrations, and domain-blind builds create silent
              failure. We replace them with systems operators can trust.
            </p>
          </AnimateIn>

          {/* Row 2 */}
          <AnimateIn delay={0.05} className="md:col-span-4">
            <CopyBlock
              title="One system of record"
              body="BGs, collections, and acquisition cases leave email threads and Excel. Roles, notifications, documents, and reporting live in one workflow — with an audit trail that survives scrutiny."
            />
          </AnimateIn>

          <AnimateIn delay={0.08} className="md:col-span-8">
            <Media
              src="/img/payments-pos.jpg"
              alt="Point-of-sale terminal for digital collections and payments"
              className="aspect-[21/9] md:aspect-[2.2/1]"
            />
          </AnimateIn>

          {/* Row 3 */}
          <AnimateIn delay={0.05} className="md:col-span-3">
            <Media
              src="/img/survey-land.jpg"
              alt="Land parcels for statutory acquisition surveys"
              className="aspect-[3/4] md:min-h-full md:aspect-auto"
            />
          </AnimateIn>

          <AnimateIn delay={0.08} className="md:col-span-5">
            <Media
              src="/img/fintech-branch.jpg"
              alt="Banking institution for fintech and BFSI systems"
              className="aspect-[16/10]"
            />
          </AnimateIn>

          <AnimateIn delay={0.1} className="flex flex-col justify-center md:col-span-4">
            <CopyBlock
              title="One integration, many vendors"
              body="Every bank and gateway does not need its own onboarding marathon. API routing layers give your product a single programmatic path — vendors can change underneath without rewriting the customer experience."
              className="h-full"
            />
          </AnimateIn>

          {/* Row 4 */}
          <AnimateIn delay={0.05} className="md:col-span-7">
            <div className="flex h-full flex-col justify-center rounded-[1.5rem] bg-[var(--mist)] p-7 md:p-10">
              <p className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-[var(--ink)] md:text-3xl">
                Domain first.{" "}
                <span className="text-[var(--accent)]">UI second.</span>
              </p>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[var(--ink-muted)] md:text-base">
                Banking and government practitioners map statutory steps, maker-checker,
                and field constraints before engineers paint screens. That is how UAT
                stops being the first place reality shows up — and how ownership stays
                clear after go-live across India and Australia.
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  "Shared status instead of spreadsheet versions",
                  "API routing instead of N×N partner work",
                  "Statutory workflows before generic CRUD",
                  "Named support instead of ticket limbo",
                ].map((item) => (
                  <li
                    key={item}
                    className="rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--ink)]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/about">
                  How we work
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button href="/work" variant="secondary">
                  See production systems
                </Button>
              </div>
            </div>
          </AnimateIn>

          <AnimateIn delay={0.1} className="md:col-span-5">
            <div className="grid h-full gap-4 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
              <Media
                src="/img/fintech-secure.jpg"
                alt="Secure payments and card controls for fintech rails"
                className="aspect-[4/3] lg:aspect-auto lg:min-h-[12rem]"
              />
              <Media
                src="/img/egov-columns.jpg"
                alt="Government institution for e-governance platforms"
                className="aspect-[4/3] lg:aspect-auto lg:min-h-[12rem]"
              />
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}

function Media({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[1.25rem] bg-[var(--mist)] shadow-[0_16px_40px_-28px_rgba(10,10,18,0.35)]",
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.03]"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>
  );
}

function CopyBlock({
  title,
  body,
  className,
}: {
  title: string;
  body: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col justify-center rounded-[1.25rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-7",
        className,
      )}
    >
      <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold tracking-tight text-[var(--ink)] md:text-2xl">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-[var(--ink-muted)]">
        {body}
      </p>
      <Link
        href="/services"
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--accent)] transition-colors hover:text-[var(--accent-strong)]"
      >
        Learn more
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}
