import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { AnimateIn } from "@/components/AnimateIn";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Redmelon in New Delhi or New South Wales — discuss payments, BG, land acquisition, security, or trade platforms.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us the workflow — we will reply with a concrete next step"
        description="Share volumes, Acts or rails involved, current tools, and timeline. The form is a UI placeholder for now; for a guaranteed inbox hit, email us directly."
        dark
      />
      <section className="bg-[var(--paper)] py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-[0.9fr_1.1fr] md:px-8">
          <div className="space-y-8">
            <AnimateIn>
              <p className="text-sm leading-relaxed text-[var(--ink-muted)]">
                Useful details to include: which desks own the process today, peak daily volume,
                banks or departments involved, and whether you need a fixed-scope build or an
                embedded squad.
              </p>
            </AnimateIn>

            {site.contact.addresses.map((addr, i) => (
              <AnimateIn key={addr.label} delay={i * 0.05}>
                <div className="card-surface p-5">
                  <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                    {addr.label}
                  </h2>
                  <div className="mt-3 text-sm leading-relaxed text-[var(--ink-muted)]">
                    {addr.lines.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                    {"cin" in addr && addr.cin ? (
                      <p className="mt-2 text-xs text-[var(--ink-muted)]/80">{addr.cin}</p>
                    ) : null}
                  </div>
                </div>
              </AnimateIn>
            ))}

            <AnimateIn delay={0.1}>
              <div className="card-surface p-5">
                <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                  Call
                </h2>
                <ul className="mt-3 space-y-2 text-sm">
                  {site.contact.phones.map((phone) => (
                    <li key={phone.value}>
                      <a
                        href={phone.href}
                        className="font-medium text-[var(--ink)] transition-colors hover:text-[var(--accent)]"
                      >
                        {phone.value}
                      </a>
                      <span className="ml-2 text-[var(--ink-muted)]">({phone.label})</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.14}>
              <div className="card-surface p-5">
                <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                  Email
                </h2>
                <ul className="mt-3 space-y-2 text-sm">
                  {site.contact.emails.map((email) => (
                    <li key={email.value}>
                      <a
                        href={email.href}
                        className="font-medium text-[var(--ink)] transition-colors hover:text-[var(--accent)]"
                      >
                        {email.value}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateIn>
          </div>

          <AnimateIn delay={0.08} x={16}>
            <div className="card-surface p-6 md:p-8">
              <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-[var(--ink)]">
                Project enquiry
              </h2>
              <p className="mt-2 text-sm text-[var(--ink-muted)]">
                Placeholder submit — validates locally and shows a thank-you state. Prefer email
                for production enquiries until the mail API is wired.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
