import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/content/services";
import { cn } from "@/lib/utils";

type ServiceCardProps = {
  service: Service;
  index?: number;
  className?: string;
};

export function ServiceCard({ service, index = 0, className }: ServiceCardProps) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className={cn(
        "group card-surface relative flex h-full flex-col p-6 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 md:p-7",
        className,
      )}
    >
      <span className="font-[family-name:var(--font-display)] text-sm font-semibold text-[var(--accent)]">
        {String(index + 1).padStart(2, "0")}
      </span>
      <h3 className="mt-4 font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--ink)] md:text-2xl">
        {service.title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--ink-muted)]">
        {service.short}
      </p>
      <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[var(--accent)]">
        Learn more
        <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </Link>
  );
}
