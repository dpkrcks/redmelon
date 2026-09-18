import Link from "next/link";
import { Button } from "@/components/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center bg-[var(--paper)] px-5 pt-28 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
        404
      </p>
      <h1 className="mt-4 font-[family-name:var(--font-display)] text-4xl text-[var(--ink)] md:text-5xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-sm text-[var(--ink-muted)]">
        That route doesn&apos;t exist. Head home or browse our work.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button href="/">Home</Button>
        <Button href="/work" variant="secondary">
          Work
        </Button>
        <Link
          href="/contact"
          className="inline-flex items-center px-4 text-sm text-[var(--ink-muted)] underline-offset-4 hover:underline"
        >
          Contact
        </Link>
      </div>
    </section>
  );
}
