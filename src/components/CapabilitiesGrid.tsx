import Link from "next/link";
import {
  Shield,
  Waypoints,
  Landmark,
  FileBadge2,
  CreditCard,
  MapPinned,
  type LucideIcon,
} from "lucide-react";
import { services, type Service } from "@/content/services";
import { homeCapabilities } from "@/content/why";
import { AnimateIn } from "@/components/AnimateIn";
import { cn } from "@/lib/utils";

const icons: Record<Service["slug"], LucideIcon> = {
  "security-assessment": Shield,
  "api-integrations": Waypoints,
  "digital-collections": Landmark,
  "bank-guarantee": FileBadge2,
  "payments-paas": CreditCard,
  "land-acquisitions": MapPinned,
};

type CapabilitiesGridProps = {
  className?: string;
  showEyebrow?: boolean;
  title?: string;
  subtitle?: string;
};

export function CapabilitiesGrid({
  className,
  showEyebrow = false,
  title = homeCapabilities.title,
  subtitle = homeCapabilities.subtitle,
}: CapabilitiesGridProps) {
  return (
    <section className={cn("bg-[var(--paper)] py-20 md:py-24", className)}>
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:max-w-[90rem] lg:px-12 xl:px-16">
        <AnimateIn>
          {showEyebrow ? (
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
              Capabilities
            </p>
          ) : null}
          <h2 className="max-w-3xl font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-[var(--ink)] md:text-4xl">
            {title}
          </h2>
          <span
            className="mt-4 block h-1 w-14 rounded-full bg-[var(--accent)]"
            aria-hidden
          />
          <p className="mt-5 max-w-3xl text-sm leading-relaxed text-[var(--ink-muted)] md:text-base">
            {subtitle}
          </p>
        </AnimateIn>

        <AnimateIn delay={0.08}>
          <div className="mt-12 overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--border)]">
            <div className="grid gap-px sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => {
                const Icon = icons[service.slug] ?? Shield;

                return (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="group flex min-h-[18rem] flex-col bg-[var(--surface)] px-8 py-8 transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-[var(--accent-soft)] md:min-h-[20rem] md:px-10 md:py-9 xl:px-12"
                  >
                    <span className="inline-flex h-11 w-11 items-center justify-center text-[var(--accent)] transition-transform duration-500 group-hover:scale-105">
                      <Icon className="h-7 w-7" strokeWidth={1.6} />
                    </span>
                    <h3 className="mt-5 font-[family-name:var(--font-display)] text-lg font-semibold text-[var(--ink)] md:text-xl">
                      {service.title}
                    </h3>
                    <div className="mt-3 space-y-3 text-sm leading-relaxed text-[var(--ink-muted)] md:text-[0.95rem]">
                      {service.cardCopy.map((para) => (
                        <p key={para.slice(0, 48)}>{para}</p>
                      ))}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
