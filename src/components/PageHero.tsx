import { AnimateIn } from "@/components/AnimateIn";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  dark?: boolean;
};

export function PageHero({
  eyebrow,
  title,
  description,
  className,
  dark = false,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden pt-28 pb-14 md:pt-36 md:pb-20",
        dark ? "bg-[var(--dark)] text-white" : "bg-[var(--mist)] text-[var(--ink)]",
        className,
      )}
    >
      <div
        className={cn(
          "pointer-events-none absolute inset-0 opacity-[0.1]",
          dark && "dot-grid",
        )}
      />
      <div
        className={cn(
          "pointer-events-none absolute -right-16 top-8 h-56 w-56 rounded-full blur-3xl",
          dark ? "bg-[var(--accent)]/35" : "bg-[var(--accent)]/12",
        )}
      />
      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <AnimateIn>
          {eyebrow ? (
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="mt-3 max-w-3xl font-[family-name:var(--font-display)] text-3xl font-semibold leading-[1.12] tracking-tight md:text-5xl">
            {title}
          </h1>
          {description ? (
            <p
              className={cn(
                "mt-5 max-w-2xl text-base leading-relaxed md:text-lg",
                dark ? "text-white/65" : "text-[var(--ink-muted)]",
              )}
            >
              {description}
            </p>
          ) : null}
        </AnimateIn>
      </div>
    </section>
  );
}
