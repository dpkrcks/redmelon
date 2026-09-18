export type ProjectDomain = "fintech" | "egovernance";

export type ProjectStat = { label: string; value: string };

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  domain: ProjectDomain;
  domainLabel: string;
  summary: string;
  elevator: string;
  longDescription: string;
  stats: ProjectStat[];
  modules: { name: string; description: string }[];
  features: string[];
  stack: string[];
  image?: string;
  accent: string;
};

export const projects: Project[] = [
  {
    slug: "bhuarjan",
    name: "Bhuarjan",
    tagline: "The future of Land Acquisition Management",
    domain: "egovernance",
    domainLabel: "E-governance",
    summary:
      "A unified digital platform digitizing end-to-end government land acquisition under RFCTLARR Act, 2013 — and extensions for Railways, National Highways, DFCCIL, and Coal Acts.",
    elevator:
      "From Form-10 survey initiation to Section 19 award declaration and final payment, Bhuarjan gives every administrative tier — Patwari to Collector — one system of record with real-time monitoring and full accountability.",
    longDescription:
      "Land acquisition for public infrastructure has traditionally run on paper files with no shared visibility. Bhuarjan digitizes the entire legal workflow: field survey and geotagged photo capture, khasra and landowner records, tree and structure valuation, the full chain of statutory notifications, award computation, and post-award payment reconciliation — with role-based dashboards from field surveyor to Collector.",
    stats: [
      { label: "Projects managed", value: "120+" },
      { label: "Land parcels", value: "5,000+" },
      { label: "Uptime", value: "99%" },
    ],
    modules: [
      {
        name: "bhuarjan (core)",
        description:
          "Odoo 18 workflow engine — surveys, landowners, khasras, statutory notifications, awards, payments, and role-based dashboards.",
      },
      {
        name: "bhuarjan_api",
        description:
          "REST API with JWT auth, S3 photo uploads, Form-10 exports, QR microsites, and OpenAPI docs.",
      },
      {
        name: "bhuarjan_app",
        description:
          "Native Android field app — geotagged surveys, offline cache, multi-language UI.",
      },
      {
        name: "bhuarjan_security",
        description:
          "DPDP-aligned AES-256 PII encryption, consent tracking, and audit logging.",
      },
      {
        name: "Act add-ons",
        description:
          "Pluggable Coal and DFCCIL layers that install cleanly without touching the core.",
      },
    ],
    features: [
      "Statutory workflow engine (not just CRUD)",
      "Multi-tenant Act layers",
      "Mobile-first field capture",
      "Government-grade PII & audit controls",
    ],
    stack: [
      "Odoo 18",
      "Python",
      "Kotlin / Jetpack Compose",
      "JWT / OTP",
      "S3",
      "AES-256 / KMS",
    ],
    image: "/img/land-acquisition.jpg",
    accent: "#8A4531",
  },
  {
    slug: "cradexia",
    name: "Cradexia",
    tagline: "TradeOS for Indian Exporters",
    domain: "fintech",
    domainLabel: "Fintech",
    summary:
      "A regulatory-compliant, AI-powered trade operations platform unifying goods and services export compliance — invoicing, EDF, EDPMS/IDPMS, shipping bills, and bank case management.",
    elevator:
      "One platform, one trade transaction, one evidence graph — built around India's FEMA 23(R)/2026-RB overhaul so exporters, CHAs, and AD banks share an auditable view of every export lifecycle.",
    longDescription:
      "Cradexia replaces fragmented spreadsheets and portals with a shared trade transaction core. Every invoice, shipping bill, remittance, and compliance decision links to a single Trade Transaction ID. Regulatory rules are versioned, citable data — so legacy and 2026-regime transactions resolve side by side.",
    stats: [
      { label: "Transaction rails", value: "2" },
      { label: "Roles served", value: "4" },
      { label: "Status", value: "Active" },
    ],
    modules: [
      {
        name: "Trade Transaction Core",
        description:
          "Unified ID spanning goods (Invoice → Shipping Bill → EDPMS → e-BRC) and services (Service Invoice → EDF → EDPMS → e-BRC).",
      },
      {
        name: "Regulatory Control Plane",
        description:
          "Versioned, citation-backed rules resolved by transaction event date.",
      },
      {
        name: "Reconciliation Engine",
        description:
          "Many-to-many remittance-to-invoice matching with FX tolerance handling.",
      },
      {
        name: "Document Intelligence",
        description:
          "Tesseract + PaddleOCR pipeline with confidence scoring and review fallback.",
      },
      {
        name: "Compliance Workflow",
        description:
          "Maker-checker cases with SLA escalation and full audit trail.",
      },
    ],
    features: [
      "Two-rail goods & services core",
      "Versioned regulatory rules engine",
      "OCR document intelligence",
      "AD bank & CHA workspaces",
    ],
    stack: [
      "React 19",
      "TypeScript",
      "Java 25",
      "Spring Boot 4",
      "PostgreSQL",
      "Docker",
    ],
    image: "/img/trade-shipping.jpg",
    accent: "#0E8A7E",
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
