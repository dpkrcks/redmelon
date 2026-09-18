import { Hero } from "@/components/Hero";
import { ClientLogoStrip } from "@/components/ClientLogoStrip";
import { CapabilitiesGrid } from "@/components/CapabilitiesGrid";
import { DomainWorkSection } from "@/components/DomainWorkSection";
import { FrictionBento } from "@/components/FrictionBento";
import { WhySection } from "@/components/WhySection";
import { AudiencesSection } from "@/components/AudiencesSection";
import { MetricBand } from "@/components/MetricBand";
import { CtaBand } from "@/components/CtaBand";
import { site } from "@/content/site";

export default function HomePage() {
  return (
    <>
      <Hero />

      <ClientLogoStrip className="bg-[var(--surface)]" />

      <MetricBand metrics={site.metrics} />

      <CapabilitiesGrid showEyebrow />

      <DomainWorkSection />

      <FrictionBento />

      <WhySection />

      <AudiencesSection />

      <CtaBand
        title="Ready to structure your next banking or government system?"
        description="Tell us about the workflow — collections, BGs, land acquisition, security, or trade ops. We will respond with a concrete next step, not a generic brochure."
        secondary={{ label: "Browse services", href: "/services" }}
      />
    </>
  );
}
