import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { whyIntro, whyItems } from "@/content/why";
import { AnimateIn } from "@/components/AnimateIn";
import { cn } from "@/lib/utils";

type WhySectionProps = {
  className?: string;
};

export function WhySection({ className }: WhySectionProps) {
  return (
    <section className={cn("bg-[var(--surface)] py-20 md:py-24", className)}>
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:max-w-[90rem] lg:px-12 xl:px-16">
        <AnimateIn>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
            {whyIntro.title}
          </p>
          <h2 className="mt-3 max-w-2xl font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-[var(--ink)] md:text-4xl">
            {whyIntro.subtitle}
          </h2>
          <span
            className="mt-4 block h-1 w-14 rounded-full bg-[var(--accent)]"
            aria-hidden
          />
        </AnimateIn>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-8">
          {whyItems.map((item, i) => (
            <AnimateIn key={item.title} delay={i * 0.08}>
              <WhyCard item={item} />
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyCard({
  item,
}: {
  item: (typeof whyItems)[number];
}) {
  return (
    <Link
      href={item.href}
      className="group relative block h-full outline-none"
    >
      {/* Notched cream card */}
      <article
        className={cn(
          "why-card relative flex h-full flex-col bg-[var(--why-card)] p-4 pb-5 transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
          "group-hover:bg-[var(--why-card-hover)]",
        )}
      >
        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-[var(--mist)]">
          <Image
            src={item.image}
            alt=""
            fill
            className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          />
        </div>

        <div className="flex flex-1 flex-col px-2 pb-2 pt-5 md:px-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--ink)]/70">
            {item.category}
          </p>
          <h3 className="mt-2 font-[family-name:var(--font-display)] text-xl font-semibold leading-snug tracking-tight text-[var(--ink)] md:text-[1.35rem]">
            {item.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-[var(--ink-muted)]">
            {item.description}
          </p>

          <div className="mt-auto flex items-center justify-between pt-8 pr-14">
            <span className="text-sm text-[var(--ink)]/80 transition-colors group-hover:text-[var(--accent)]">
              Read more
            </span>
          </div>
        </div>
      </article>

      {/* Arrow sits in the white notch */}
      <span
        className={cn(
          "absolute bottom-0 right-0 z-10 flex h-12 w-12 items-center justify-center",
          "text-[var(--ink)] transition-colors duration-500",
          "group-hover:text-[var(--accent)]",
        )}
        aria-hidden
      >
        <ArrowRight className="h-5 w-5 transition-transform duration-500 group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}
