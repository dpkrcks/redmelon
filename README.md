<p align="center">
  <img src="frontend/public/cradexia-mark.svg" alt="Cradexia logo" width="96" height="96" />
</p>

<h1 align="center">Cradexia</h1>
<p align="center"><strong>TradeOS for Indian Exporters</strong> — a regulatory-compliant, AI-powered trade operations platform</p>

<p align="center">
  <img alt="status" src="https://img.shields.io/badge/status-active%20development-0E8A7E" />
  <img alt="frontend" src="https://img.shields.io/badge/frontend-React%2019%20%2B%20TypeScript-0A5C58" />
  <img alt="backend" src="https://img.shields.io/badge/backend-Java%2025%20%2B%20Spring%20Boot%204-07161A" />
  <img alt="license" src="https://img.shields.io/badge/license-proprietary-444" />
</p>

---

## Overview

**Cradexia** unifies goods and services export compliance — invoicing, EDF filing, EDPMS/IDPMS reconciliation, shipping bill execution, and bank case management — into a single trade transaction core. It's built around India's **FEMA 23(R)/2026-RB** regulatory overhaul (effective 1 Oct 2026), giving exporters, Customs House Agents (CHAs), and AD (Authorized Dealer) banks one shared, auditable view of every export's lifecycle and risk instead of the fragmented spreadsheets and portals they use today.

The product is designed around **one platform, one trade transaction, one evidence graph**: every invoice, shipping bill, remittance, and compliance decision links back to a single Trade Transaction ID, with regulatory rules modeled as versioned, citable data rather than hardcoded logic — so legacy and 2026-regime transactions can be resolved side by side.

## Screenshot

<p align="center">
  <img src="image.png" alt="Cradexia admin — document intelligence / OCR integration screen" width="100%" />
</p>

<p align="center"><em>Admin → Document Intelligence: OCR/ICR extraction (Tesseract + PaddleOCR) with side-by-side source preview and live AI status.</em></p>

## Who it's for

| Role | What they do in Cradexia |
|---|---|
| **Exporter** | Onboarding & KYC, invoice and service-invoice creation, EDF assembly, shipping bills, EDPMS/IDPMS tracking, IRM/reconciliation, scan inbox with OCR, contracts and export "passport" |
| **CHA** (Customs House Agent) | Filing workspace, shipment inbox, shipping bill execution and amendment |
| **AD Bank** | Compliance case queue, reconciliation workbench, remittance/Nostro management, e-BRC dispatch, ICEGATE data pull |
| **Admin** | Exporter/invoice oversight, EDPMS admin, regulatory rules catalogue, masters data, security scans, OCR/AI/token-usage integrations |

## Key features

- **Two-rail transaction core** — goods (Invoice → Shipping Bill → EDPMS → e-BRC) and services (Service Invoice → EDF → EDPMS → e-BRC) under one Trade Transaction ID
- **Versioned regulatory rules engine** — rules are seeded data with citation, effective date, and supersession pointer; no period or threshold is hardcoded, so legacy (pre-Oct 2026) and 2026-regime rules coexist
- **Reconciliation engine** — many-to-many matching of remittances to invoices with configurable tolerance and FX-difference handling, classifying outcomes as Matched, Partial, Short, Excess, Duplicate, etc.
- **Document intelligence (OCR)** — Tesseract + PaddleOCR pipeline for invoices, shipping bills, BLs/AWBs, and bank receipts, with confidence scoring and manual-review fallback
- **Maker-checker compliance workflow** — user-level (not role-based) separation on regulatory decisions, with full audit trail
- **Admin security tooling** — built-in SpotBugs/OWASP/SBOM/Semgrep and SonarQube scan runner surfaced in the Admin UI
- **API-first backend** — Spring Boot REST API with Bearer-token auth and Swagger/OpenAPI docs, backed by PostgreSQL

## Tech stack

**Frontend**
- React 19 + TypeScript, single-page app (Vite)
- React Router 7, Zustand for state
- Mock-service layer over `localStorage` for demo mode, with adapters ready to swap to the live API
- Vitest + Testing Library for tests

**Backend**
- Java 25 + Spring Boot 4.1.1 (virtual threads enabled)
- Spring Data JPA, PostgreSQL (H2 in-memory for zero-setup demo runs)
- Spring Security with stateless Bearer-token auth
- OpenAPI/Swagger UI for live API exploration

**Infra / tooling**
- Docker Compose for Postgres, the OCR sidecar (Tesseract + PaddleOCR), and SonarQube
- Security scan pipeline: SpotBugs, OWASP Dependency-Check, CycloneDX SBOM, Semgrep, Sonar

## Architecture pillars

1. **Trade Transaction Core** — unified ID and data model spanning goods and services rails
2. **Regulatory Control Plane** — versioned, citation-backed rules resolved by transaction event date
3. **Reconciliation Engine** — rule-driven, many-to-many remittance-to-invoice allocation
4. **Compliance Workflow** — structured cases (extension, reduction, set-off, bank query, …) with SLA escalation and maker-checker enforcement
5. **Document Intelligence** — OCR, extraction, duplicate detection, and an immutable evidence graph
6. **Integrations & APIs** — adapter pattern for ICEGATE, DGFT, GST, Customs, banks, insurers, and factors (mocked for demo, swappable for production)

## Status

Actively developed against a phased roadmap — see [ROADMAP.md](ROADMAP.md) for the full plan (MVP transaction core → document intelligence → compliance workflow → CHA engine → finance/treasury rails → risk & AML). Local setup and run instructions are in [RUN.md](RUN.md).

---

<p align="center"><sub>Built by Deepak Negi.</sub></p>
