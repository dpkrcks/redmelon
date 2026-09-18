export const site = {
  name: "Red Melon",
  legalName: "Redmelon Business Solutions Private Limited",
  tagline: "Fintech & e-governance systems for banks, government, and enterprises",
  description:
    "Redmelon designs and delivers production systems for banking and government — payments, collections, bank guarantees, API rails, security assessments, and statutory land acquisition platforms — backed by 20+ years in the financial services ecosystem.",
  hero: {
    brand: "Red Melon",
    eyebrow: "Fintech · E-governance · Technology",
    headline: "Building Digital Solutions That Power Finance & Governance",
    support:
      "Payments, collections, bank guarantees, API rails, and statutory land workflows — built for the desks that own them, delivered from India and Australia.",
    primaryCta: { label: "Book a consultation", href: "/contact" },
    secondaryCta: { label: "View capabilities", href: "/services" },
    location: "New Delhi · New South Wales",
    proof: [
      { value: "20+", label: "Years BFSI & government" },
      { value: "2", label: "Delivery hubs" },
      { value: "3", label: "Core practices" },
    ],
  },
  domains: [
    {
      id: "fintech",
      title: "Fintech & BFSI",
      description:
        "Payments-as-a-Service, digital collections (PG / RTGS / NEFT), bank guarantee lifecycle systems, multi-vendor API routing, and trade compliance platforms like Cradexia for exporters, CHAs, and AD banks.",
      href: "/work/cradexia",
      points: [
        "Collections & settlement workflows",
        "BG tracking with ERP hooks",
        "FEMA / EDPMS-aware trade ops",
      ],
    },
    {
      id: "egovernance",
      title: "E-governance",
      description:
        "Statutory land acquisition platforms spanning Form-10 surveys through Section 19 awards and payment reconciliation — with role-based dashboards for Patwari, Tehsildar, SDM, Collector, and department HQ.",
      href: "/work/bhuarjan",
      points: [
        "RFCTLARR / Railways / NH / Coal Acts",
        "Field Android + REST APIs",
        "DPDP-aligned PII controls",
      ],
    },
  ],
  metrics: [
    { value: "20+", label: "Years in BFSI & government ecosystems" },
    { value: "6", label: "Core digital service lines in production use" },
    { value: "120+", label: "Land acquisition projects on Bhuarjan" },
    { value: "2", label: "Regions — New Delhi & New South Wales" },
  ],
  audiences: [
    {
      id: "banks",
      title: "Banks & NBFCs",
      subtitle: "Branch, ops, and treasury desks that need daily reliability",
      description:
        "Collections platforms, BG management, payments orchestration, and security assessments aligned to how branch, operations, and treasury teams actually work — not how a generic SaaS demo assumes they work.",
      points: [
        "Multi-mode collections & settlement views",
        "BG lifecycle with expiry visibility",
        "Assessments that map to audit questions",
      ],
      href: "/services",
      tone: "lavender" as const,
    },
    {
      id: "government",
      title: "Government & PSUs",
      subtitle: "Departments that need statutory clarity, not opaque status",
      description:
        "Statutory workflow systems, field data capture, audit-ready reporting, and multi-tier dashboards — from Patwari survey apps to Collector monitoring — so case status is never a rumour.",
      points: [
        "RFCTLARR and allied Act chains",
        "Field + HQ role dashboards",
        "Evidence and payment reconciliation",
      ],
      href: "/work/bhuarjan",
      tone: "sky" as const,
    },
    {
      id: "enterprise",
      title: "Enterprises & partners",
      subtitle: "SIs and product teams who need domain build muscle",
      description:
        "API integration layers, custom software, testing, and architecture consulting — so you ship regulated products without reinventing every bank, gateway, or departmental handshake.",
      points: [
        "Multi-vendor API routing patterns",
        "Configurable platforms for client mandates",
        "Embedded or fixed-scope delivery",
      ],
      href: "/services",
      tone: "mint" as const,
    },
  ],
  problems: [
    {
      problem: { title: "Spreadsheet-run operations", body: "BGs, collections, and acquisition cases live in email threads and Excel — no shared status, no audit trail." },
      solution: { title: "System of record", body: "One platform per workflow with roles, notifications, documents, and reporting built for the operators who use it." },
    },
    {
      problem: { title: "Integration friction", body: "Every bank, gateway, and vendor demands a separate onboarding and integration cycle." },
      solution: { title: "API routing layers", body: "A single programmatic integration that reaches multiple vendors — without repeating sales and compliance work for each one." },
    },
    {
      problem: { title: "Domain-blind builds", body: "Generic IT vendors miss statutory steps, maker-checker norms, and field realities until UAT fails." },
      solution: { title: "Domain-first delivery", body: "Banking and government practitioners shape the workflow before a line of UI is painted — then engineers harden it." },
    },
    {
      problem: { title: "Unclear ownership after go-live", body: "Tickets bounce; nobody owns settlement exceptions or award payment gaps." },
      solution: { title: "Accountable partnership", body: "Named contacts across India and Australia, with support structured around the systems we ship." },
    },
  ],
  contact: {
    addresses: [
      {
        label: "India",
        lines: ["H-7, LGF, Lajpat Nagar - 3", "New Delhi - 110014"],
        cin: "CIN: U72900UP2022PTC163922",
      },
      {
        label: "Australia",
        lines: ["7 Heywood Glen", "Stanhope Gardens", "New South Wales 2768"],
      },
    ],
    phones: [
      { label: "India", value: "+91-70420 38092", href: "tel:+917042038092" },
      { label: "Australia", value: "02 - 9119 2274", href: "tel:+61291192274" },
    ],
    emails: [
      { label: "General", value: "info@redmelon.co.in", href: "mailto:info@redmelon.co.in" },
      { label: "Australia", value: "info@blazenet.com.au", href: "mailto:info@blazenet.com.au" },
    ],
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Solution", href: "/work" },
    { label: "Clients", href: "/clients" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

export type NavItem = (typeof site.nav)[number];
