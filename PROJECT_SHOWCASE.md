# Bhuarjan — Portfolio / Website Content Reference

Reference sheet for writing up Bhuarjan as a portfolio project. Pull whatever
sections you need; not meant to be published as-is.

## One-liners

- **Name:** Bhuarjan (BHUARJAN / "BhoomiArjan")
- **Tagline:** The future of Land Acquisition Management
- **Summary:** A unified digital platform for Land Acquisition Management —
  digitizing and streamlining the end-to-end government land acquisition
  workflow under India's RFCTLARR Act, 2013 (and extensions for the Railways
  Act, National Highways Act, DFCCIL, and the Coal Bearing Areas Act, 1957).
- **Elevator pitch:** From Form-10 survey initiation to Section 19 award
  declaration and final payment, Bhuarjan gives every level of a land
  acquisition administration — Patwari, Tehsildar, SDM, Collector, and
  department HQ — one system of record, with real-time monitoring, full
  transparency, and complete accountability at each step.

## Longer description (about/case-study copy)

> Land acquisition for public infrastructure — railways, highways, freight
> corridors, coal mining — has traditionally run on paper files passed
> between village-level surveyors and district administration, with no
> shared visibility into where a case stands. Bhuarjan digitizes this
> entire legal workflow: field survey and geotagged photo capture, khasra
> (land parcel) and landowner records, tree and structure valuation, the
> full chain of statutory notifications (Sections 4, 8, 11, 15, 19, 21, 23
> under RFCTLARR, plus Railway Act, NH Act, and Coal Act equivalents),
> award computation, and post-award payment reconciliation — with
> role-based dashboards for every tier of government from field surveyor
> up to the Collector.

Suggested case-study angles:
- Digitizing a real, multi-stage government legal process end-to-end (not
  just a CRUD app — an actual statutory workflow engine).
- Multi-tenant verticals: one core platform, optional pluggable "Act" layers
  (Coal, DFCCIL, Railways, NH) that install/uninstall cleanly without
  touching the core.
- Mobile-first field data capture (native Android app + REST API) feeding a
  server-side approval and reporting pipeline.
- Government-grade concerns: PII encryption/masking, consent tracking,
  audit logs, multi-language support, offline-capable field app.

## Key stats (from the marketing site, adjust to your real numbers)

- 120+ projects managed
- 5,000+ land parcels
- 99% uptime

## Core modules / what was built

| Module | What it does |
|---|---|
| **bhuarjan** (core) | The main Odoo 18 application — land acquisition workflow engine covering surveys, landowners, khasras, trees/structures, the full statutory notification chain (Sections 4, 8, 11, 15, 19, 21, 23), awards, payments/reconciliation, role-based dashboards (Patwari/Tehsildar/SDM/Collector/District Admin), and reporting (PDF/Excel). |
| **bhuarjan_api** | Standalone REST API layer (JWT auth, survey CRUD, S3 presigned photo uploads, Form 10 PDF/Excel downloads, public QR-code microsites, Swagger/OpenAPI docs) serving the Android app and web simulator. |
| **bhuarjan_app** | Native Android app (Kotlin + Jetpack Compose) for field surveyors: OTP login, geotagged survey capture with landowner and photo data, offline cache, multi-language UI (English/Hindi/Marathi/Gujarati/Bengali), dark mode. |
| **bhuarjan_app_simulator** | An in-browser multi-phone simulator of the Android app for demos and training, without needing physical devices. |
| **bhuarjan_web** | The public marketing/informational website (Odoo Website module) with portal-specific branding for the generic, Coal, and DFCCIL variants, plus a full LARR Act guide. |
| **bhuarjan_coal** | Optional add-on implementing the Coal Bearing Areas (Acquisition & Development) Act, 1957 workflow: Form 5/6, Deed of Land Settlement (DOLS), Measuring Book, employment/nomination process, house-owner tracking — installs and uninstalls cleanly, isolated from core. |
| **bhuarjan_dfccil** | Optional add-on for Dedicated Freight Corridor land acquisition: dedicated roles, portal branding, mobile APIs, and demo data seeding/cleanup. |
| **bhuarjan_security** | DPDP (India's Digital Personal Data Protection Act) compliance layer: AES-256 field encryption for Aadhaar/PAN/phone/bank data (with optional AWS KMS / HashiCorp Vault / Azure Key Vault key wrapping), PII masking, consent capture, and reveal/export audit logging. |
| **bhu_sms** | Standalone, configurable outbound SMS gateway: provider config, templates, phone-number lookup rules, event-driven automation, a send simulator, and delivery logs — reusable beyond Bhuarjan. |
| **bharatnyay_core** | Land-award arbitration toolkit: grievance intake with document uploads, bookable SDM hearing slots with a calendar view, hearings docket, per-khasra award computation with PDF export, and CSV payment batch generation. |

## Tech stack

- **Backend:** Odoo 18 (Python), custom addons architecture
- **Frontend (Odoo):** OWL framework, SCSS/CSS, custom dashboard widgets (survey maps, KML viewer, hierarchy trees, workflow graphs)
- **Public website:** Odoo Website builder, custom templates
- **Mobile:** Native Android — Kotlin + Jetpack Compose, Retrofit, Room (offline cache)
- **Auth/Integration:** JWT, OAuth, OTP-based mobile login
- **Storage:** S3 presigned uploads for field photos
- **Security/Compliance:** AES-256 encryption, AWS KMS / HashiCorp Vault / Azure Key Vault integration, DPDP-aligned consent and audit trail
- **Reporting:** QWeb PDF reports, Excel exports
- **Messaging:** Configurable SMS gateway module

## Brand identity

- **Primary brand color (web):** `#0F1E36` (deep navy)
- **Accent color (web):** `#8A4531` / `#6F3423` (rust/terracotta), soft accent `#F8EEE9`
- **Highlight/gold:** `#FFB800`
- **Mobile app identity:** brown/sand theme, primary `#7A431D`, cream surfaces, gradient headers
- **Logo files (use highest-res available):**
  - `bhuarjan_web/static/src/img/bhuarjan_logo.png` (166×136)
  - `bhuarjan/static/img/logo.png` (900×512, larger version)
  - `bhuarjan/static/description/icon.png` (app tile icon, 166×136)
- Vertical/portal logos: `bhuarjan_web/static/src/img/dfccil_department_logo.png`, `chattisgarh_logo.png`

## Legal/domain context (for accuracy in copy)

- **RFCTLARR Act, 2013** — Right to Fair Compensation and Transparency in
  Land Acquisition, Rehabilitation and Resettlement Act (India's core land
  acquisition law).
- **Statutory chain digitized:** Form-10 → Section 4 notification → SIA
  (Social Impact Assessment) → Expert Committee → Section 8 → Section 11
  preliminary report → Section 15 objections → Section 19 declaration →
  Section 21 → Section 23 award → payment/disbursement.
- Extensions cover analogous provisions under the **Railways Act**,
  **National Highways Act**, **DFCCIL** land acquisition, and the
  **Coal Bearing Areas (Acquisition & Development) Act, 1957**.

## Suggested website copy snippets (ready to reuse)

- Hero: *"The future of Land Acquisition Management"*
- Sub: *"A unified digital platform streamlining every stage of the land
  acquisition process — from initial survey to final compensation —
  ensuring real-time monitoring, full transparency, and complete
  accountability across all administrative levels."*
- Section header: *"Built for governance. Designed for people."*
