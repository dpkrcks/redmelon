import Link from "next/link";
import { site } from "@/content/site";
import { BrandLogo } from "@/components/BrandLogo";

const companyLinks = site.nav.filter((item) =>
  ["/about", "/culture", "/careers", "/contact"].includes(item.href),
);
const workLinks = site.nav.filter((item) =>
  ["/services", "/work", "/clients", "/partners"].includes(item.href),
);

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[var(--dark)] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_0%_0%,rgba(196,30,30,0.18),transparent_45%)]" />

      <div className="relative mx-auto max-w-6xl px-5 py-10 md:px-8 md:py-12">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1.2fr] md:gap-8">
          <div>
            <BrandLogo size="sm" className="[&_img]:brightness-0 [&_img]:invert" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/55">
              Fintech and e-governance systems for banks, government, and enterprises —
              India and Australia.
            </p>
            <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-sm">
              {site.contact.emails.map((email) => (
                <a
                  key={email.value}
                  href={email.href}
                  className="text-[var(--accent)] transition-colors hover:text-white"
                >
                  {email.value}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/40">
              Company
            </h3>
            <ul className="mt-3 space-y-2">
              {companyLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/40">
              Work
            </h3>
            <ul className="mt-3 space-y-2">
              <li>
                <Link href="/" className="text-sm text-white/70 transition-colors hover:text-white">
                  Home
                </Link>
              </li>
              {workLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/40">
              Offices
            </h3>
            <ul className="mt-3 space-y-4 text-sm text-white/65">
              {site.contact.addresses.map((addr) => (
                <li key={addr.label}>
                  <p className="font-medium text-white">{addr.label}</p>
                  {addr.lines.map((line) => (
                    <p key={line} className="leading-snug">
                      {line}
                    </p>
                  ))}
                  {"cin" in addr && addr.cin ? (
                    <p className="mt-1 text-[11px] text-white/35">{addr.cin}</p>
                  ) : null}
                </li>
              ))}
            </ul>
            <ul className="mt-4 space-y-1 text-sm text-white/55">
              {site.contact.phones.map((phone) => (
                <li key={phone.value}>
                  <a href={phone.href} className="transition-colors hover:text-white">
                    {phone.label}: {phone.value}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-4 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between md:px-8">
          <p>
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
          <p>New Delhi · New South Wales</p>
        </div>
      </div>
    </footer>
  );
}
