export type Service = {
  slug: string;
  title: string;
  short: string;
  /** Longer paragraphs shown on the capabilities grid cards */
  cardCopy: string[];
  description: string;
  whoFor: string;
  outcomes: string[];
  highlights: string[];
  relatedWork?: string;
};

/** Shared engineering stack across Red Melon delivery */
export const techStacks = [
  {
    label: "AI & machine learning",
    items: [
      "Document intelligence (OCR / ICR)",
      "Tesseract & PaddleOCR pipelines",
      "Extraction, classification & duplicate detection",
      "Model-assisted reconciliation & exception triage",
      "NLP for statutory / trade document parsing",
    ],
  },
  {
    label: "Frontend & web",
    items: [
      "React 19 + TypeScript",
      "Next.js",
      "OWL / Odoo web clients",
      "Vite, Zustand, React Router",
    ],
  },
  {
    label: "Backend & APIs",
    items: [
      "Java + Spring Boot",
      "Python / Odoo 18",
      "REST APIs, JWT / OAuth",
      "OpenAPI / Swagger",
      "PostgreSQL",
    ],
  },
  {
    label: "Mobile & field",
    items: [
      "Kotlin + Jetpack Compose (Android)",
      "Retrofit + Room offline cache",
      "OTP login & geotagged capture",
      "Multi-language field UIs",
    ],
  },
  {
    label: "Cloud, security & DevOps",
    items: [
      "AWS S3, KMS / Vault / Azure Key Vault",
      "AES-256 field encryption (DPDP-aligned)",
      "Docker Compose",
      "SpotBugs, OWASP Dependency-Check, Semgrep, SonarQube",
      "SMS gateways & event-driven automation",
    ],
  },
] as const;

export const aiMlPractice = {
  title: "AI & ML in regulated delivery",
  subtitle:
    "We apply AI and machine learning where operators gain measurable speed — document intake, extraction, reconciliation, and risk signals — with human review and audit trails for banking and government mandates.",
  points: [
    {
      title: "Document intelligence",
      body: "OCR/ICR pipelines extract invoices, shipping bills, land records, and KYC packs — with side-by-side preview and confidence scoring before data enters the workflow.",
    },
    {
      title: "Ops automation",
      body: "Model-assisted matching for remittances, collections exceptions, and BG status checks reduces spreadsheet triage without removing maker-checker controls.",
    },
    {
      title: "Secure by design",
      body: "AI features run inside the same identity, encryption, and logging boundaries as the core platform — suitable for BFSI and statutory environments.",
    },
  ],
};

export const services: Service[] = [
  {
    slug: "security-assessment",
    title: "Security Assessment",
    short:
      "Find control gaps in BFSI and government environments — including AI/ML pipelines and API surfaces — before they become incidents.",
    cardCopy: [
      "Help prepare your organisation against cyberattacks by identifying gaps across apps, networks, identity, and AI-assisted workloads. We deliver the methodology to build a unified security program.",
      "Our consultants cover network security management and managed IT for banking and government teams that need steady-state coverage after the assessment.",
    ],
    description:
      "We assess network, application, identity, and operational controls against threats that matter in banking and public-sector IT — including edge services, payment or citizen data segmentation, logging gaps, privileged access, and AI/ML or OCR pipelines that touch PII. Deliverables include a prioritized remediation roadmap. Stacks we routinely review span Java/Spring, Python/Odoo, React/Next, Android field apps, and cloud key-management integrations.",
    whoFor:
      "Banks, NBFCs, payment processors, and government IT cells preparing for audits, SOC maturation, or board-level cyber risk reviews.",
    outcomes: [
      "Mapped gaps across infrastructure, apps, identity, and AI workloads",
      "Risk-ranked findings tied to business impact",
      "A phased security program you can fund and staff",
    ],
    highlights: [
      "Environment & control gap analysis",
      "AI/ML and API surface reviews",
      "Network security & managed IT options",
    ],
  },
  {
    slug: "api-integrations",
    title: "Streamlined API Integrations",
    short:
      "One integration program that reaches multiple banks and vendors — with AI-ready event hooks and modern API stacks.",
    cardCopy: [
      "API-first routing layers let a single integration programmatically reach multiple vendors — without a separate project for each bank or gateway.",
      "Built on Java/Spring and Node-ready patterns, with optional ML hooks for anomaly flags and document classification on the wire.",
    ],
    description:
      "Bank and fintech integrations stall on sales cycles, compliance questionnaires, and bespoke APIs. Red Melon builds API-first routing layers (Java/Spring Boot, OpenAPI, JWT/OAuth) so your product talks to one stable interface while we broker payment, KYC, or core-banking vendors underneath. Event streams can feed AI/ML services for fraud signals, OCR-triggered case opens, and exception routing — without coupling every partner to your model stack.",
    whoFor:
      "Product teams launching multi-bank collections, payouts, or account services who cannot afford N×N partner integrations.",
    outcomes: [
      "Single programmatic access path to multiple vendors",
      "Clearer ownership of routing, retries, and audit logs",
      "Hooks for AI-assisted monitoring and document intake",
    ],
    highlights: [
      "API routing & orchestration (Spring / REST)",
      "Multi-vendor access from one integration",
      "AI-ready events & audit-friendly logs",
    ],
  },
  {
    slug: "digital-collections",
    title: "Digital Collections",
    short:
      "Collections across PG, RTGS, and NEFT — with ML-assisted reconciliation views for ops and finance.",
    cardCopy: [
      "A collections platform for the institution behind the merchant — quick integration with payment gateways, RTGS, NEFT, and related modes.",
      "Ops and finance get clearer inflow and settlement views; ML assists matching and exception triage without rewriting the stack for every new rail.",
    ],
    description:
      "Traditional collection stacks optimize for merchants. Our platform centers the enterprise that needs predictable inflow across gateways, RTGS, NEFT, and related modes. We implement on modern web stacks (React/TypeScript frontends, robust APIs, PostgreSQL) and apply machine learning to remittance matching and exception clustering so finance spends less time in spreadsheets — with full audit trails for regulated desks.",
    whoFor:
      "Corporates, utilities, lenders, and institutions collecting at scale across mixed payment modes.",
    outcomes: [
      "Unified view across PG, RTGS, and NEFT collections",
      "Faster ML-assisted reconciliation for finance ops",
      "Quicker mode onboarding without bespoke rewrites",
    ],
    highlights: [
      "Multi-mode collections in one platform",
      "ML-assisted matching & exception triage",
      "React / API / PostgreSQL delivery stack",
    ],
  },
  {
    slug: "bank-guarantee",
    title: "Bank Guarantee Management",
    short:
      "Digitize BG intake, monitoring, expiry, and ERP sync — with AI assist for document capture.",
    cardCopy: [
      "Reliable BG trackers to examine and monitor guarantees across counterparties — without missing expiries in a spreadsheet.",
      "OCR/AI can accelerate BG document intake; the register stays digital through ERP sync for treasury and commercial teams.",
    ],
    description:
      "Organizations accept dozens to hundreds of bank guarantees with different banks, tenors, and claim conditions. Our BG application records each instrument, monitors status, and can integrate once with your ERP. AI/ML document intelligence (OCR/ICR) speeds capture of BG text and metadata while humans confirm before the register updates — built on the same secure API and web stacks we use across BFSI platforms.",
    whoFor:
      "PSUs, EPC contractors, large corporates, and financial institutions that accept or issue BGs at volume.",
    outcomes: [
      "Complete digital register of accepted BGs",
      "Expiry and amendment visibility",
      "Optional OCR intake + one-time ERP integration",
    ],
    highlights: [
      "Full BG lifecycle tracking",
      "AI-assisted document intake (OCR/ICR)",
      "ERP integration options",
    ],
  },
  {
    slug: "payments-paas",
    title: "Payments-as-a-Service (PaaS)",
    short:
      "Orchestrated payment workflows with AI-supported ops — less paper, faster time-to-revenue.",
    cardCopy: [
      "Red Melon PaaS removes cost and complexity from traditional payment flows plagued by fees, disparate data, and paper-driven processes.",
      "Collections speed up; ML and automation help accounting focus on forecasting and control instead of chasing files.",
    ],
    description:
      "Legacy payment processes pile up fees, disconnected data sources, and manual handoffs. Red Melon PaaS collapses that complexity on a production stack — API orchestration, React/TypeScript consoles, and PostgreSQL-backed ledgers — with AI/ML used for anomaly hints, duplicate detection, and ops prioritization. We design around your existing banks and gateways rather than forcing a rip-and-replace.",
    whoFor:
      "Mid-market and enterprise finance teams drowning in payment ops overhead.",
    outcomes: [
      "Faster collections and clearer settlement status",
      "Lower operational cost per payment cycle",
      "AI-assisted ops with finance still in control",
    ],
    highlights: [
      "Orchestrated payment workflows",
      "AI/ML for anomalies & duplicate detection",
      "Accounting-team oriented design",
    ],
  },
  {
    slug: "land-acquisitions",
    title: "Integrated Land Acquisitions",
    short:
      "Statutory land workflows with field Android apps, OCR where useful, and a full Python/Odoo + API stack.",
    cardCopy: [
      "Land management software that consolidates surveys, documents, and acquisition status into one system — with native Android field capture.",
      "Stack includes Odoo/Python, REST APIs, Kotlin field apps, and optional AI for document extraction. See Bhuarjan for the full statutory engine.",
    ],
    description:
      "Land acquisition for railways, highways, freight corridors, and mining still often runs on paper. Our platforms consolidate surveys, khasra and landowner records, documents, and status into a single system — Odoo 18 (Python), REST APIs with JWT, native Android (Kotlin + Jetpack Compose) for offline field capture, S3 photo storage, and DPDP-aligned encryption. AI/ML assists document extraction and data quality checks where officers still review before statutory steps advance. For the full RFCTLARR engine, see Bhuarjan.",
    whoFor:
      "State departments, district administration, and project SPVs running multi-village acquisition programs.",
    outcomes: [
      "Single system of record for parcels & landowners",
      "Field-to-HQ visibility via Android + APIs",
      "AI-assisted document handling with officer control",
    ],
    highlights: [
      "Odoo / Python + Android field stack",
      "Document & data repository with OCR options",
      "Links to Bhuarjan statutory workflows",
    ],
    relatedWork: "bhuarjan",
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
