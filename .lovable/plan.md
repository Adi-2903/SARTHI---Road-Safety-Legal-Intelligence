## SARTHI — AI-Powered Road Safety & Legal Intelligence (MVP)

A mobile-first PWA with all 6 modules from the PRD, using seeded sample data and local-only persistence (IndexedDB / localStorage). Civic "trust & safety" design language: deep navy, white, signal-amber/red accents, clear typography, large tappable targets.

### Design system
- Palette: navy `#0F1B3D` (primary), white surface, slate text, signal amber `#F59E0B` (warnings), signal red `#DC2626` (alerts/SOS), success green for "valid" states.
- Typography: Inter for UI, JetBrains Mono for fine/section numbers and citations.
- Cards with soft borders, rounded-xl, generous padding. Sticky bottom nav for mobile.

### Information architecture (routes)
```text
/                  Home — module grid + recent activity + offline status pill
/calculator        Challan Calculator
/validator         Challan Validity Checker (upload photo / manual entry)
/contest           Contest Navigator — letter generator
/companion         AI Legal Companion (chat)
/sos               Emergency Assistance (SOS + trauma centers)
/map               Safety Intelligence Map (iRAD black spots)
/history           Saved challans, generated letters
/about             Methodology, data sources, team
```
Sticky bottom nav on mobile: Home · Map · SOS · Companion · More.

### Modules — what each does in the MVP

1. **Challan Calculator** — Pick state (3 seeded: Maharashtra, Delhi, Tamil Nadu), vehicle type, violation(s). Reads `fine_table.json`, returns exact amount + MV Act section + compoundability flag. Deterministic math, no AI.
2. **Validity Checker** — Manual entry form (amount, section, officer rank, date, state) + optional image upload (stored locally, OCR stubbed with editable fields). Runs the 5-point audit against `authority_matrix.json` and `fine_table.json`: amount match, section validity, compoundability, time-bar (statutory deadline), officer authority. Renders a verdict card with ✓/⚠/✗ per check.
3. **Contest Navigator** — From a flagged challan, generate a pre-filled representation letter (jsPDF). Auto-fills citizen details (saved locally), violation details, grounds of contest derived from failed audit checks, statutory deadline, and RTO/court address per state. Download as PDF.
4. **AI Legal Companion** — Chat UI with `react-markdown`. Uses Lovable AI Gateway (Gemini) via a server function that injects MV Act context snippets from a local knowledge JSON. Strict system prompt: cite section numbers, never invent fines, defer math to the calculator. English/Hindi toggle.
5. **Emergency Assistance** — Big SOS button: captures geolocation, opens `tel:112`, prepares a pre-filled WhatsApp/SMS share with live coordinates + nearest 3 trauma centers from cached GeoJSON. Editable emergency contacts list (localStorage).
6. **Safety Intelligence Map** — Leaflet + OpenStreetMap tiles. Renders seeded iRAD black-spot markers with severity coloring and 500 m risk radii. "Locate me" button; when within 500 m of a black spot, shows an in-app banner + optional speech-synthesis voice alert.

### Cross-cutting features
- **PWA**: manifest + service worker (vite-plugin-pwa) caching app shell, fonts, all seeded JSON, and OSM tiles for last-viewed area. Offline indicator pill in header.
- **Bilingual**: i18next with English + Hindi resource bundles for all UI strings.
- **Local persistence**: `idb-keyval` for challans, letters, contacts, profile.
- **Accessibility**: WCAG-AA contrast, focus rings, ARIA labels on SOS and alerts, large hit targets (min 44 px).
- **No backend, no auth** — single Lovable AI server function for the Companion only.

### Seeded sample data (in `src/data/`)
- `fine_table.json` — 3 states × ~15 common violations × vehicle classes
- `authority_matrix.json` — officer rank → max fine authority by section
- `irad_blackspots.geojson` — ~40 mock points across Mumbai, Delhi, Chennai with severity
- `trauma_centers.geojson` — ~30 hospitals in the same cities
- `mv_act_snippets.json` — short plain-language summaries + section citations for the Companion's grounding
- `rto_addresses.json` — RTO/court contacts per state for the contest letter

### Technical details
- Stack: TanStack Start (already set up), Tailwind v4 tokens in `src/styles.css`, shadcn/ui components.
- Libraries to add: `leaflet`, `react-leaflet`, `@turf/turf` (point-in-polygon, distance), `jspdf`, `i18next`, `react-i18next`, `idb-keyval`, `react-markdown`, `vite-plugin-pwa`, `zod`.
- AI: `src/lib/companion.functions.ts` — `createServerFn` POST endpoint calling Lovable AI Gateway (`google/gemini-2.5-flash`) with retrieved MV Act snippets in the system prompt. Streams not required for MVP; return full reply.
- Map: dynamic import of Leaflet to avoid SSR `window` issues; component rendered client-only.
- PDF: client-side jsPDF, no server round-trip.
- Voice alerts: `window.speechSynthesis` (bilingual).

### Out of scope for this MVP (callable in a follow-up)
- Real OCR pipeline (we expose editable fields after "upload")
- Real-time iRAD feed (seeded GeoJSON instead)
- Lovable Cloud accounts, sync across devices
- Production-grade legal coverage beyond 3 seeded states

### Build order
1. Design tokens, layout shell, bottom nav, home grid, i18n scaffolding, PWA setup
2. Seeded JSON data + shared selectors/hooks
3. Calculator → Validator → Contest letter (the legal core)
4. Companion (Lovable AI wired up)
5. Map + SOS
6. History page, About page, polish pass + offline QA

### What you'll see on first preview
A mobile-first home screen with 6 module cards, working offline banner, English/Hindi toggle, and every module navigable with seeded data so flows are demoable end-to-end.