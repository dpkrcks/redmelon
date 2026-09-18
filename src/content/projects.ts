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
  modules?: { name: string; description: string }[];
  features?: string[];
  stack?: string[];
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
    image: "/img/trade-shipping.jpg",
    accent: "#0E8A7E",
  },
  {
    slug: "bharatnyay",
    name: "BharatNyay",
    tagline: "Land-award arbitration and hearings",
    domain: "egovernance",
    domainLabel: "E-governance",
    summary:
      "A digital toolkit for land-award grievances, SDM hearings, and award computation — content forthcoming.",
    elevator:
      "BharatNyay supports grievance intake, hearing schedules, and award workflows for land acquisition programmes. Full case study details will be published here soon.",
    longDescription:
      "BharatNyay is an e-governance solution focused on land-award arbitration and related administrative workflows. Detailed modules, outcomes, and programme metrics will be added shortly.",
    stats: [
      { label: "Domain", value: "Land awards" },
      { label: "Focus", value: "Hearings" },
      { label: "Status", value: "Live" },
    ],
    image: "/img/egov-columns.jpg",
    accent: "#1B4F72",
  },
  {
    slug: "bharatddn",
    name: "BharatDDN",
    tagline: "Digital delivery for government programmes",
    domain: "egovernance",
    domainLabel: "E-governance",
    summary:
      "A Red Melon solution for digital government delivery — content forthcoming.",
    elevator:
      "BharatDDN is part of our e-governance portfolio. Full product narrative, capabilities, and results will be published here soon.",
    longDescription:
      "BharatDDN extends Red Melon’s government delivery platforms. Detailed overview, operating context, and outcomes will be added when content is ready.",
    stats: [
      { label: "Domain", value: "Gov delivery" },
      { label: "Focus", value: "Digital ops" },
      { label: "Status", value: "Live" },
    ],
    image: "/img/institutional-facade.jpg",
    accent: "#2C3E50",
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
