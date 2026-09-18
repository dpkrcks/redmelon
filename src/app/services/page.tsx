import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { CapabilitiesGrid } from "@/components/CapabilitiesGrid";
import { CtaBand } from "@/components/CtaBand";
import { homeCapabilities } from "@/content/why";

export const metadata: Metadata = {
  title: "Services",
  description: homeCapabilities.subtitle,
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Digital services built for regulated operations"
        description="Open any capability for who it is for, expected outcomes, and how it connects to platforms like Bhuarjan."
        dark
      />
      <CapabilitiesGrid
        title={homeCapabilities.title}
        subtitle={homeCapabilities.subtitle}
        className="!pt-16"
      />
      <CtaBand
        title="Not sure which service fits?"
        description="Describe the current process — who owns it, what breaks, and what “done” looks like. We will map it to the right engagement."
        secondary={{ label: "See case studies", href: "/work" }}
      />
    </>
  );
}
