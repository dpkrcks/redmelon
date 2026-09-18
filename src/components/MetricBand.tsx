import { AnimateIn } from "@/components/AnimateIn";
import { Counter } from "@/components/Counter";
import { cn } from "@/lib/utils";

type Metric = { value: string; label: string };

export function MetricBand({
  metrics,
  className,
  dark = false,
}: {
  metrics: readonly Metric[] | Metric[];
  className?: string;
  dark?: boolean;
}) {
  return (
    <section
      className={cn(
        "border-y",
        dark
          ? "border-white/10 bg-[var(--dark-elevated)] text-white"
          : "border-[var(--border)] bg-[var(--surface)]",
        className,
      )}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-5 py-12 md:grid-cols-4 md:px-8 md:py-14">
        {metrics.map((m, i) => (
          <AnimateIn key={m.label} delay={i * 0.05}>
            <p
              className={cn(
                "font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight md:text-4xl",
                dark ? "text-white" : "text-[var(--ink)]",
              )}
            >
              <Counter value={m.value} />
            </p>
            <p
              className={cn(
                "mt-2 text-xs leading-snug md:text-sm",
                dark ? "text-white/55" : "text-[var(--ink-muted)]",
              )}
            >
              {m.label}
            </p>
          </AnimateIn>
        ))}
      </div>
    </section>
  );
}
