<!-- HERO ANIMATION -->
<div align="center">
  <a href="https://git.io/typing-svg">
    <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=700&size=42&pause=1200&color=00B4D8&center=true&vCenter=true&width=900&lines=SARTHI+%E0%A4%B8%E0%A4%BE%E0%A4%B0%E0%A4%A5%E0%A5%80;AI-Powered+Road+Safety+%26+Legal+Intel;Know+Your+Rights.+Stay+Safe.;Offline-First.+Built+for+Bharat." alt="Typing SVG" />
  </a>
</div>

<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=venom&height=200&text=SARTHI%20%E0%A4%B8%E0%A4%BE%E0%A4%B0%E0%A4%A5%E0%A5%80&fontSize=72&color=0:0D1B3E,50:0077A8,100:00B4D8&fontColor=FFFFFF&stroke=00B4D8&strokeWidth=1.5&desc=Road%20Safety%20%26%20Legal%20Intelligence%20Platform&descSize=18&descAlignY=80&animation=fadeIn&fontAlignY=42" width="100%"/>
</div>

<p align="center">
  <img src="https://img.shields.io/badge/React_19-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
  <img src="https://img.shields.io/badge/TanStack_Start-FF4154?style=for-the-badge&logo=reactquery&logoColor=white" />
  <img src="https://img.shields.io/badge/Gemini_2.5_Flash-4285F4?style=for-the-badge&logo=google&logoColor=white" />
  <img src="https://img.shields.io/badge/Tailwind_v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" />
  <img src="https://img.shields.io/badge/PWA-Offline_First-10B981?style=for-the-badge&logo=pwa&logoColor=white" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/CoERS_Hackathon-2026-0D1B3E?style=flat-square&logoColor=white" />
  <img src="https://img.shields.io/badge/IIT_Madras-RBG_Labs-00B4D8?style=flat-square&logoColor=white" />
  <img src="https://img.shields.io/badge/Team-Last_Commit-F59E0B?style=flat-square&logoColor=white" />
  <img src="https://img.shields.io/badge/Nirma_University-Ahmedabad-10B981?style=flat-square&logoColor=white" />
  <img src="https://img.shields.io/badge/License-MIT-8B5CF6?style=flat-square&logoColor=white" />
</p>

---

## 🛡️ What is SARTHI?

**SARTHI (सार्थी)** is an offline-first, AI-powered Progressive Web App built for Indian motorists. It combines a **deterministic Truth Engine** with **Gemini 2.5 Flash** and **iRAD Proximity Intelligence** to solve three crises simultaneously:

- ⚖️ **Legal blindness** — citizens don't know their correct fine, or whether a challan was even legally issued
- 🚫 **No recourse** — no platform generates court-ready documentation to contest wrongful challans
- 🆘 **Emergency gap** — finding the nearest trauma centre during a road accident is nearly impossible

> *"One app. Six superpowers. Zero excuses for injustice on Indian roads."*

---

## 🔮 The Feature That No Other Team Built

<img align="right" width="420" src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=13&pause=800&color=00B4D8&vCenter=true&width=400&height=280&lines=INPUT:+Overloading+challan;Officer:+Traffic+Constable;State:+Maharashtra;Amount:+%E2%82%B95%2C000;─────────────────────────;5-POINT+AUDIT+RUNNING...;✓+Section+194D+%E2%86%92+Valid;✗+Amount+%E2%82%B95%2C000+%E2%89%A0+gazette+%E2%82%B91%2C000;✗+Constable+not+authorised;✗+Timebar+60-day+exceeded;─────────────────────────;VERDICT:+%F0%9F%94%B4+CONTESTABLE;→+Generating+legal+letter..." alt="Validity Demo"/>

**The Challan Validity Checker** is SARTHI's moat. It is the only feature at this hackathon that answers the question citizens never knew they could ask:

**_"Was this challan even legal?"_**

The 5-Point Deterministic Audit cross-references:
1. **Section Validity** — Is the MVA section active and correctly cited?
2. **Amount Integrity** — Does the fine match the official state gazette?
3. **Compoundability** — RTO payable or court appearance required?
4. **Officer Authority** — Was the officer's rank legally sufficient? *(MVA §132, §206)*
5. **Timebar Limits** — Is it within the 60-day statutory window?

**Statistical reality:** ~34% of challans in India are wrongfully issued. This feature addresses every single one.

- **GREEN** → Challan valid. Pay confidently.
- **AMBER** → Potential issue. Verify before paying.
- **RED** → Contestable. Auto-generates legal representation letter.

<br clear="all"/>

---

## 🏗️ System Architecture & Data Flow

```mermaid
graph TD
    A[👤 Indian Motorist] -->|Opens SARTHI PWA| B(React 19 + TanStack Start SSR)

    B --> C{Which Module?}

    C -->|Fine lookup| D[🧮 Challan Calculator]
    C -->|Audit a challan| E[🛡️ Validity Checker]
    C -->|Fight back| F[📄 Contest Navigator]
    C -->|Legal question| G[💬 AI Companion]
    C -->|Emergency| H[🚨 SOS Dispatch]
    C -->|Drive safe| I[🗺️ iRAD Map]

    D -->|fine_table.json| J[(Truth Engine<br/>400+ rows<br/>MVA 1988 + 2019)]
    E -->|authority_matrix.json| J
    F -->|Audit findings + jsPDF| K[📥 Court-Ready PDF]

    G -->|Online| L{Gemini 2.5 Flash<br/>Direct REST API}
    G -->|Offline| M[🛰️ Local Semantic Matcher<br/>Bilingual EN + HI<br/>mv_act_snippets.json]

    H -->|Haversine formula| N[📍 GPS Coordinate Lock]
    N --> O[🏥 3 Nearest Trauma Centres]
    N --> P[📱 Pre-filled SMS + Native Share]

    I -->|Leaflet + iRAD GeoJSON| Q[🔴 Black Spot Markers]
    Q -->|Within 500m| R[🔊 Voice Alert<br/>Web Speech API]

    J --> S[(IndexedDB via idb-keyval<br/>Offline Persistent Cache)]
    L --> S
    O --> S

    classDef ui fill:#0D1B3E,stroke:#00B4D8,stroke-width:2px,color:#fff
    classDef engine fill:#0077A8,stroke:#00B4D8,stroke-width:2px,color:#fff
    classDef data fill:#065F46,stroke:#10B981,stroke-width:2px,color:#fff
    classDef output fill:#92400E,stroke:#F59E0B,stroke-width:2px,color:#fff
    classDef ai fill:#4338CA,stroke:#818CF8,stroke-width:2px,color:#fff

    class A,B,C ui
    class D,E,F,H,I engine
    class J,S,M data
    class K,O,P,Q,R output
    class G,L ai
```

---

## ⚡ Six Core Modules

### 🧮 1. Challan Calculator

The fine lookup runs entirely on a **deterministic Truth Engine** — not an LLM. Zero hallucination. Every result traces to a government gazette.

| Input | Output |
|---|---|
| State + Vehicle type + Offence | Exact fine amount (₹) |
| — | MVA section number |
| — | Compoundable: Yes/No |
| — | Compounding fee if applicable |
| — | Authorised officer rank |
| — | Source gazette notification |

```
Example:  State = Gujarat  |  Vehicle = 2W  |  Offence = No Helmet
──────────────────────────────────────────────────────────────────
Fine: ₹1,000  |  Section 129 MVA 2019  |  Compoundable → ₹500
Authority: Traffic Constable and above
Source: GJ Transport Dept Notification GTD/2019/108
```

---

### 🛡️ 2. Validity Checker *(The Moat)*

See [The Feature That No Other Team Built](#-the-feature-that-no-other-team-built) above.

**Authority Matrix — the legal backbone:**

| Officer Type | ✅ CAN Issue | ❌ CANNOT Issue |
|---|---|---|
| Traffic Constable | Helmet, seatbelt, mobile phone | Overloading, fitness, DL suspension |
| Traffic Sub-Inspector | All above + vehicle detention | DL suspension |
| Traffic Inspector / ACP | Full powers + DL suspension 3 months | Commercial permits |
| Motor Vehicle Inspector | Fitness, overloading, modifications | Moving traffic violations |
| Transport Officer | Permits, overloading, fitness | Moving violations, arrest |

---

### 📄 3. Contest Navigator

<img align="right" width="380" src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=12&pause=600&color=10B981&vCenter=true&width=360&height=200&lines=%E2%91%A0+Confirm+legal+issue+type;%E2%91%A1+Identify+correct+forum;%E2%91%A2+Document+checklist+generated;%E2%91%A3+AI+drafts+objection+letter;%E2%91%A4+Timeline+%26+follow-up+guide;──────────────────────;Downloading+representation.pdf...;✓+MVA+§194+cited;✓+Unauthorized+rank+flagged;✓+Amount+mismatch+documented" alt="Contest Navigator"/>

When Validity Checker returns RED, the 5-step guided workflow activates:

1. **Confirm issue** — wrong section / unauthorized officer / amount mismatch / timebar
2. **Identify forum** — Traffic Court · Transport Commissioner · Consumer Forum
3. **Document checklist** — RC · DL · Insurance · PUC · Challan copy · Witness statement
4. **AI objection letter** — auto-cites exact MVA sections found by the audit, downloaded instantly as PDF via jsPDF
5. **Timeline** — state-specific hearing duration and follow-up reminders

<br clear="all"/>

---

### 💬 4. AI Legal Companion

Two-tier resilient architecture — never goes dark.

```
TIER 1 — Online
┌─────────────────────────────────────────────────────┐
│  Gemini 2.5 Flash  •  Direct REST     │
│  Legal system prompt:                               │
│    • Never invent fine amounts                      │
│    • Always cite MVA section                        │
│    • Bilingual: English + हिन्दी                    │
└───────────────────────────┬─────────────────────────┘
                            │ offline / no API key
                            ▼
TIER 2 — Offline
┌─────────────────────────────────────────────────────┐
│  🛰️ SARTHI Local AI Engine Active                   │
│  Bilingual Keyword Semantic Matcher                 │
│  "helmet" / "हेलमेट"  →  Section 194D, ₹1,000     │
│  "drunk"  / "शराब"    →  Section 185, non-compound │
│  Returns: MV Act text + citizen rights, offline     │
└─────────────────────────────────────────────────────┘
```

---

### 🚨 5. Emergency SOS

```
User taps SOS → GPS Coordinate Lock (Haversine)
                       │
          ┌────────────┴────────────┐
          ▼                         ▼
  3 Nearest Trauma Centres    Emergency Contacts
  (sorted by real distance)   (CRUD + relation tags)
          │                         │
          └────────────┬────────────┘
                       ▼
          Native Share + SMS Dispatch
          "🆘 I need help. Location: [Maps link]
           Nearest hospital: [Name] — [X.X km]"
```

---

### 🗺️ 6. iRAD Black-Spot Map

> This is **not** a speed camera alert. It is proactive safety intelligence.

| Camera Alert Apps | SARTHI Black-Spot Map |
|---|---|
| "Camera here — brake now" | "23 fatalities here in 3 years. Nearest trauma: 8.2 km." |
| Encourages selective compliance | Sustained awareness in genuinely dangerous zones |
| No emergency context | Shows nearest hospital alongside every black spot |

Features: Lazy-loaded Leaflet · High/Medium/Low risk legend · **500m proximity alert** · **Web Speech API voice warnings** (hands-free driving)

---

## 🛰️ Offline Resiliency Matrix

> Built for Bharat — where 2G is real and network failures happen on highways.

| Module | Offline? | Technology | Fallback |
|---|---|---|---|
| 🧮 Challan Calculator | ✅ 100% | `fine_table.json` | Bundled gazette data |
| 🛡️ Validity Checker | ✅ 100% | `authority_matrix.json` | Local 5-point rules engine |
| 📄 Contest Navigator | ✅ 100% | `jsPDF` + `rto_addresses.json` | In-browser PDF compilation |
| 💬 AI Companion | ✅ 100% | `mv_act_snippets.json` | Bilingual keyword matcher |
| 🚨 Emergency SOS | ✅ 100% | `navigator.geolocation` | IndexedDB GPS caching |
| 🗺️ iRAD Map | ✅ 100% | Leaflet tile cache + Web Speech | Voice alerts run locally |

---

## 🛠️ Tech Stack

<p>
  <img src="https://img.shields.io/badge/TanStack_Start-React_19_+_Vite_+_SSR-FF4154?style=flat-square&logo=reactquery&logoColor=white" />
  <img src="https://img.shields.io/badge/Tailwind_CSS_v4-Oklch_Palette-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" />
  <img src="https://img.shields.io/badge/Leaflet-Maps_+_OSM-199900?style=flat-square&logo=leaflet&logoColor=white" />
  <img src="https://img.shields.io/badge/idb--keyval-IndexedDB-8B5CF6?style=flat-square&logoColor=white" />
  <img src="https://img.shields.io/badge/jsPDF-PDF_Generation-E63946?style=flat-square&logoColor=white" />
  <img src="https://img.shields.io/badge/Sonner-Toast_Notifications-F59E0B?style=flat-square&logoColor=white" />
  <img src="https://img.shields.io/badge/Gemini_2.5_Flash-Direct_REST-4285F4?style=flat-square&logo=google&logoColor=white" />
  <img src="https://img.shields.io/badge/Web_Speech_API-Voice_Alerts-10B981?style=flat-square&logoColor=white" />
  <img src="https://img.shields.io/badge/Vercel-Frontend-000000?style=flat-square&logo=vercel&logoColor=white" />
  <img src="https://img.shields.io/badge/Railway-Backend-0B0D0E?style=flat-square&logo=railway&logoColor=white" />
</p>

| Layer | Technology | Purpose |
|---|---|---|
| Framework | TanStack Start (React 19 + Vite) | SSR + file-based routing |
| Styling | Tailwind CSS v4 (Oklch color palette) | Utility-first responsive design |
| Maps | Leaflet + React-Leaflet + OSM tiles | Black spot map, proximity engine |
| Offline DB | IndexedDB via idb-keyval | Persistent local storage |
| PDF | jsPDF | Client-side court-ready letters |
| Toasts | Sonner | Micro-animated notifications |
| AI (Tier 1) | Gemini 2.5 Flash — direct REST | Online legal companion |
| AI (Tier 2) | Bilingual Keyword Semantic Matcher | Offline EN + Hindi fallback |
| Hosting | Vercel (frontend) + Railway (backend) | Free tier — ₹0/month |

---

## 🚀 Setup in 3 Minutes

### Prerequisites
```
node  ≥ 18.0.0
npm   ≥ 9.0.0
```

### 1. Clone
```bash
git clone https://github.com/your-username/sarthi.git
cd sarthi
```

### 2. Install
```bash
npm install
```

### 3. Configure environment
```bash
cp .env.example .env
```
```env
# Optional — Tier 1 AI (Gemini 2.5 Flash)
# Without this, Tier 2 offline AI activates automatically
GEMINI_API_KEY=your_google_gemini_api_key_here
```
> 🔑 Free key at [ai.google.dev](https://ai.google.dev)

### 4. Run
```bash
npm run dev
# Open http://localhost:3000
```

### 5. Build for production
```bash
npm run build && npm run start
```

---

## 🧪 Verification Scenarios

### Scenario A — Calculator + Offline + Hindi

```bash
# Step 1: Open Challan Calculator
# Step 2: State = Gujarat | Vehicle = 2W | Offence = No Helmet
# Step 3: Observe output ↓

Fine: ₹1,000  |  Section 129 MVA 2019  |  Compoundable → ₹500
Authority: Traffic Constable+  |  Source: GJ Notification GTD/2019/108

# Step 4: Switch UI to Hindi — full Hindi response appears
# Step 5: Enable airplane mode → repeat query
# ✅ Result appears instantly (bundled JSON, zero network)
```

### Scenario B — Validity Checker RED + PDF Letter

```bash
# Enter this challan:
State    = Maharashtra
Vehicle  = Two-wheeler (2W)
Section  = 194D (Helmet)
Amount   = ₹5,000          ← gazette says ₹1,000  [MISMATCH]
Officer  = Police Constable ← not authorised       [FAIL]
Date     = 2025-01-01       ← exceeds 60-day limit [FAIL]

# Click "Run Audit"
# ✅ 3 RED flags fire:
#    ❌ Amount Integrity  — ₹5,000 ≠ gazette ₹1,000
#    ❌ Officer Authority — Constable not authorised for this
#    ❌ Timebar Limits    — exceeds 60-day statutory window

# Click "Contest this Challan →" → enter name + address
# Click "Generate representation letter"
# ✅ PDF downloads — auto-cites all 3 failures as legal grounds
```

### Scenario C — AI Companion: Online vs Offline

```bash
# ONLINE (with API key):
Ask: "What is the penalty for drunk driving in Maharashtra?"
→ Gemini 2.5 Flash: Section 185 · ₹10,000 · Non-compoundable · Imprisonment

# OFFLINE (no API key / no internet):
Ask: "हेलमेट नहीं पहनने पर क्या जुर्माना है?"
→ 🛰️ SARTHI Local AI Engine Active
→ Section 194D · ₹1,000 · Compoundable · Hindi response
```

### Scenario D — iRAD Map Voice Alert

```bash
# Open Map tab → Click "Get my location"
# If within 500m of a black spot (Mumbai / Delhi / Chennai):
# ✅ Animated warning box appears
# ✅ Browser speaks aloud:
#    "Warning: Approaching High-Risk Black Spot near Sion Flyover.
#     Nearest trauma centre: KEM Hospital — 1.8 km away."
```

---

## 📦 What's Included

| Asset | Description | Status |
|---|---|---|
| `src/routes/calculator.tsx` | Challan Calculator — Truth Engine UI | ✅ Ready |
| `src/routes/validator.tsx` | Validity Checker — 5-Point Audit UI | ✅ Ready |
| `src/routes/contest.tsx` | Contest Navigator — jsPDF letter gen | ✅ Ready |
| `src/routes/companion.tsx` | AI Companion — Gemini + offline tier | ✅ Ready |
| `src/routes/sos.tsx` | Emergency SOS — GPS + SMS dispatch | ✅ Ready |
| `src/routes/map.tsx` | iRAD Map — Leaflet + voice alerts | ✅ Ready |
| `src/data/fine_table.json` | 400+ rows: 5 states × 20 offences | ✅ Verified |
| `src/data/authority_matrix.json` | 30 rows: officer → permitted types | ✅ Verified |
| `src/data/black_spots.geojson` | iRAD accident black spots | ✅ Ready |
| `src/data/mv_act_snippets.json` | Offline AI legal knowledge base | ✅ Ready |
| `src/lib/truth-engine.ts` | Deterministic fine lookup logic | ✅ Ready |
| `src/lib/validity-auditor.ts` | 5-Point statutory audit logic | ✅ Ready |
| `src/lib/pdf-generator.ts` | Court-ready letter compiler | ✅ Ready |

---

## 🎯 Competitive Moat

| What others build | What SARTHI builds |
|---|---|
| "Enter offence → get fine" | 5-Point Statutory Audit with legal citations |
| Basic map with hospital pins | Voice-alert proximity engine (iRAD black spots) |
| Online-only AI chatbot | Offline bilingual AI (Tier 2 semantic matcher) |
| Generic PDF template | Auto-cited legal representation letter |
| English only | Hindi + English — same codebase, one toggle |
| Needs internet | 100% offline — every single module |

> **"No team at this hackathon can replicate the Validity Checker + Offline RAG + Contest Navigator in 24 hours."**

---

## 📊 Data Sources

| Data Asset | Source | URL |
|---|---|---|
| Motor Vehicles Act 1988 | indiacode.nic.in | [Official PDF](https://indiacode.nic.in) |
| MVA Amendment 2019 | morth.nic.in | [Official PDF](https://morth.nic.in) |
| MH state amendment | mahatranscom.in | Gazette PDF |
| GJ state amendment | rtogujarat.gov.in | Gazette PDF |
| DL state amendment | transport.delhi.gov.in | Gazette PDF |
| Accident black spots | iRAD.in + MoRTH | Open data |
| Hospital locations | Google Places API | Live + cache |
| UAE traffic fines | rta.ae | PDF (English) |
| UK Highway Code | gov.uk | HTML/PDF |

---

<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:0D1B3E,100:00B4D8&height=120&section=footer&text=Know+your+rights.+Stay+safe+on+the+road.&fontSize=18&fontColor=FFFFFF&animation=fadeIn&fontAlignY=65" width="100%"/>

  <p>
    <img src="https://img.shields.io/badge/Team-Last_Commit-0D1B3E?style=for-the-badge&logoColor=white" />
    <img src="https://img.shields.io/badge/Nirma_University-Ahmedabad-00B4D8?style=for-the-badge&logoColor=white" />
    <img src="https://img.shields.io/badge/CoERS_Hackathon-IIT_Madras_2026-10B981?style=for-the-badge&logoColor=white" />
  </p>

  <i>SARTHI is a civic hackathon demonstration. Data compiled from official MV Act 1988 sources.<br/>Always verify against the official state gazette before filing legal representations.</i>
</div>
