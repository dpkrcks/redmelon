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

export const services: Service[] = [
  {
    slug: "security-assessment",
    title: "Security Assessment",
    short: "Find control gaps in BFSI and government environments before they become incidents.",
    cardCopy: [
      "Help prepare your organisation against cyberattacks by identifying gaps in your environment. We deliver the expert resources, knowledge, and methodology to build a unified security program.",
      "Our IT consultants offer IT consulting, network security management, and managed IT services for banking and government teams that need steady-state coverage after the assessment.",
    ],
    description:
      "We assess your network, application, and operational controls against the threats that matter in banking and public-sector IT — phishing-prone edge services, weak segmentation around payment or citizen data, missing logging, and unmanaged privileged access. Deliverables include a prioritized remediation roadmap, not a generic checklist dump. Our consultants also support ongoing network security management and managed IT where you need steady-state coverage after the assessment.",
    whoFor:
      "Banks, NBFCs, payment processors, and government IT cells preparing for audits, SOC maturation, or board-level cyber risk reviews.",
    outcomes: [
      "Mapped gaps across infrastructure, apps, and identity",
      "Risk-ranked findings tied to business impact",
      "A phased security program you can fund and staff",
    ],
    highlights: [
      "Environment & control gap analysis",
      "Unified security program design",
      "Network security & managed IT options",
    ],
  },
  {
    slug: "api-integrations",
    title: "Streamlined API Integrations",
    short: "One integration program that reaches multiple banks and vendors — without repeating onboarding for each.",
    cardCopy: [
      "Redmelon’s next-generation API integration is API-first and developer-friendly. Routing layers let a single integration programmatically reach multiple vendors — without doing a separate integration for each one.",
      "That removes friction for customers (long sales, compliance, and onboarding cycles) and for banks (costly, repeated integration projects).",
    ],
    description:
      "Bank and fintech integrations stall on sales cycles, compliance questionnaires, and bespoke APIs. Redmelon builds API-first routing layers so your product talks to one stable interface while we broker connectivity to multiple payment, KYC, or core-banking vendors underneath. That cuts duplicate integration work for both your customers and the banks on the other side of the wire.",
    whoFor:
      "Product teams launching multi-bank collections, payouts, or account services who cannot afford N×N partner integrations.",
    outcomes: [
      "Single programmatic access path to multiple vendors",
      "Clearer ownership of routing, retries, and audit logs",
      "Faster partner onboarding for new rails",
    ],
    highlights: [
      "API routing & orchestration layers",
      "Multi-vendor access from one integration",
      "Patterns suited to banking & payments",
    ],
  },
  {
    slug: "digital-collections",
    title: "Digital Collections",
    short: "A collections platform designed for the client of the merchant — not only the checkout page.",
    cardCopy: [
      "A new-age collection platform built for the client of the merchants — not only for merchant checkout. Easy, quick integration with payment gateways, RTGS, NEFT, and other collection modes.",
      "Ops and finance get a clearer view of inflow and settlement across modes, without rewriting the stack every time a new rail is added.",
    ],
    description:
      "Traditional collection stacks optimize for merchants. Our platform centers the enterprise or institution that needs predictable inflow across payment gateways, RTGS, NEFT, and related modes. Ops teams get reconciliation views; finance gets clearer settlement status; integrators get APIs that do not force a rewrite for every new mode.",
    whoFor:
      "Corporates, utilities, lenders, and institutions collecting at scale across mixed payment modes.",
    outcomes: [
      "Unified view across PG, RTGS, and NEFT collections",
      "Faster reconciliation for finance operations",
      "Quicker mode onboarding without bespoke rewrites",
    ],
    highlights: [
      "Multi-mode collections in one platform",
      "Payment gateway / RTGS / NEFT support",
      "Ops-ready reconciliation workflows",
    ],
  },
  {
    slug: "bank-guarantee",
    title: "Bank Guarantee Management",
    short: "Digitize BG intake, monitoring, expiry, and ERP sync — retire the tracking spreadsheet.",
    cardCopy: [
      "Organizations need reliable BG trackers to examine and monitor guarantees accepted across counterparties. Doing it by hand or in a spreadsheet misses expiries and amendments.",
      "Our application keeps Bank Guarantees digital — from complete BG management to a one-time ERP integration — so treasury and commercial teams share one register.",
    ],
    description:
      "Organizations accept dozens to hundreds of bank guarantees with different banks, tenors, and claim conditions. Manual trackers miss expiries and amendments. Our BG management application records each instrument, monitors status, and can integrate once with your ERP so treasury and commercial teams share the same truth.",
    whoFor:
      "PSUs, EPC contractors, large corporates, and financial institutions that accept or issue BGs at volume.",
    outcomes: [
      "Complete digital register of accepted BGs",
      "Expiry and amendment visibility",
      "Optional one-time ERP integration",
    ],
    highlights: [
      "Full BG lifecycle tracking",
      "ERP integration options",
      "Counterparty & instrument visibility",
    ],
  },
  {
    slug: "payments-paas",
    title: "Payments-as-a-Service (PaaS)",
    short: "Remove paper-driven payment ops so accounting focuses on forecasting, not chasing files.",
    cardCopy: [
      "Today’s payment ops are plagued by costly fees, disparate data sources, and paper-driven processes. Redmelon PaaS removes much of that cost and complexity from traditional payment flows.",
      "Collections speed up (and with them, time-to-revenue), and accounting teams spend less time on paperwork and more on forecasting and control.",
    ],
    description:
      "Legacy payment processes pile up fees, disconnected data sources, and manual handoffs. Redmelon PaaS collapses that complexity: collections move faster, time-to-revenue shrinks, and accounting teams spend less time on paperwork. We design around your existing banks and gateways rather than forcing a rip-and-replace.",
    whoFor:
      "Mid-market and enterprise finance teams drowning in payment ops overhead.",
    outcomes: [
      "Faster collections and clearer settlement status",
      "Lower operational cost per payment cycle",
      "Finance capacity freed for forecasting & control",
    ],
    highlights: [
      "Orchestrated payment workflows",
      "Reduced process cost & complexity",
      "Accounting-team oriented design",
    ],
  },
  {
    slug: "land-acquisitions",
    title: "Integrated Land Acquisitions",
    short: "Central repository and workflow for land data, notifications, awards, and payments.",
    cardCopy: [
      "Dedicated land management software that manages acquisition activities and consolidates land-related data into a single system to monitor progress end to end.",
      "A web-based central repository of land data and documents — accessible anytime, anywhere for authorized officers. For the full statutory engine, see our Bhuarjan platform.",
    ],
    description:
      "Land acquisition for railways, highways, freight corridors, and mining still often runs on paper files. Our land management software consolidates surveys, khasra and landowner records, documents, and acquisition status into a single web system. For the full statutory engine — RFCTLARR sections through award and payment, plus Coal and DFCCIL add-ons — see Bhuarjan, our production e-governance platform.",
    whoFor:
      "State departments, district administration, and project SPVs running multi-village acquisition programs.",
    outcomes: [
      "Single system of record for parcels & landowners",
      "Traceable notification and award progress",
      "Anywhere access for authorized officers",
    ],
    highlights: [
      "End-to-end acquisition monitoring",
      "Document & data repository",
      "Links to Bhuarjan statutory workflows",
    ],
    relatedWork: "bhuarjan",
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
