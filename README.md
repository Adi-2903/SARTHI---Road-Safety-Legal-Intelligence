<div align="center">

<!-- CINEMATIC HERO BANNER -->
<img src="https://capsule-render.vercel.app/api?type=venom&height=300&text=SARTHI&fontSize=130&color=0:0D1B3E,50:0096B4,100:00B4D8&fontColor=FFFFFF&stroke=00B4D8&strokeWidth=2&desc=सार्थी%20•%20Road%20Safety%20%26%20Legal%20Intelligence&descSize=22&descAlignY=78&animation=fadeIn&fontAlignY=45" width="100%"/>

<br/>

<!-- ANIMATED TAGLINE -->
<a href="https://git.io/typing-svg"><img src="https://readme-typing-svg.demolab.com?font=Playfair+Display&weight=700&size=22&pause=1200&color=00B4D8&center=true&vCenter=true&width=900&lines=AI-Powered+Civic+Empowerment+for+Indian+Motorists;Gazette-Aligned+Legal+Validation+%F0%9F%9B%A1%EF%B8%8F;Real-Time+Road+Safety+%26+Emergency+Intelligence;Offline-First.+Always+Ready.+Built+for+Bharat." alt="Typing SVG" /></a>

<br/><br/>

<!-- BADGE ROW 1 -->
[![Hackathon](https://img.shields.io/badge/CoERS%20Road%20Safety%20Hackathon-2026-0D1B3E?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0id2hpdGUiIGQ9Ik0xMiAyQzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAyem0tMiAxNWwtNS01IDEuNDEtMS40MUwxMCAxNC4xN2w3LjU5LTcuNTlMMTkgOGwtOSA5eiIvPjwvc3ZnPg==&logoColor=white)](https://coers.iitm.ac.in)
[![IIT Madras](https://img.shields.io/badge/IIT%20Madras-RBG%20Labs-00B4D8?style=for-the-badge&logoColor=white)](https://rbg.iitm.ac.in)
[![PWA](https://img.shields.io/badge/PWA-Offline%20First-10B981?style=for-the-badge&logo=pwa&logoColor=white)](/)
[![License](https://img.shields.io/badge/License-MIT-F59E0B?style=for-the-badge&logo=opensourceinitiative&logoColor=white)](LICENSE)

<!-- BADGE ROW 2 -->
[![React](https://img.shields.io/badge/React%2019-TanStack%20Start-61DAFB?style=flat-square&logo=react&logoColor=black)](https://tanstack.com/start)
[![Gemini](https://img.shields.io/badge/Gemini%202.5%20Flash-AI%20Powered-4285F4?style=flat-square&logo=google&logoColor=white)](https://ai.google.dev)
[![Tailwind](https://img.shields.io/badge/Tailwind%20CSS%20v4-Styled-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Leaflet](https://img.shields.io/badge/Leaflet-Maps-199900?style=flat-square&logo=leaflet&logoColor=white)](https://leafletjs.com)
[![Vite](https://img.shields.io/badge/Vite-SSR%20Ready-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev)

<br/>

---

> **"One app. Six superpowers. Zero excuses for injustice on Indian roads."**

---

</div>

<br/>

<!-- ═══════════════════════════════════════════════════════════════ -->
<!-- SECTION: THE PROBLEM -->
<!-- ═══════════════════════════════════════════════════════════════ -->

## 🚨 The Problem We Are Solving

```
Every year in India:
┌─────────────────────────────────────────────────────────────────┐
│  ₹1.7 Billion+  challans issued      │  ~34% wrongfully issued  │
│  1.68 Lakh      road fatalities      │  0 AI tools for citizens │
│  28 states      different fine rules │  Most people just pay up  │
└─────────────────────────────────────────────────────────────────┘
```

Indian motorists face three crises simultaneously:

- ⚖️ **Legal blindness** — Citizens don't know which fine applies to their vehicle type, state, or offence — or whether it was legally issued at all
- 🚫 **No recourse** — No platform guides them through contesting a wrongful challan with legally valid documentation
- 🆘 **Emergency gap** — During accidents, finding the nearest trauma centre while managing an emergency is nearly impossible

**SARTHI solves all three. Offline. In Hindi. In real time.**

<br/>

<!-- ═══════════════════════════════════════════════════════════════ -->
<!-- SECTION: ARCHITECTURE DIAGRAM -->
<!-- ═══════════════════════════════════════════════════════════════ -->

## 🏗️ System Architecture

```
╔══════════════════════════════════════════════════════════════════════════════╗
║                        SARTHI  —  SYSTEM ARCHITECTURE                       ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║   ┌─────────────────────────────────────────────────────────────────────┐   ║
║   │                     USER INTERFACE LAYER                            │   ║
║   │   React 19 + TanStack Start (SSR)  •  Tailwind CSS v4  •  PWA      │   ║
║   │  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐ │   ║
║   │  │ Challan  │ │Validity  │ │ Contest  │ │   AI     │ │Emergency │ │   ║
║   │  │Calculator│ │ Checker  │ │Navigator │ │Companion │ │   SOS    │ │   ║
║   │  └────┬─────┘ └────┬─────┘ └────┬─────┘ └────┬─────┘ └────┬─────┘ │   ║
║   └────────┼────────────┼────────────┼────────────┼────────────┼───────┘   ║
║            │            │            │            │            │            ║
║   ┌────────▼────────────▼────────────▼────────────▼────────────▼───────┐   ║
║   │                      AI PROCESSING LAYER                            │   ║
║   │                                                                     │   ║
║   │  ┌─────────────────────┐      ┌──────────────────────────────────┐ │   ║
║   │  │  TRUTH ENGINE        │      │       GEMINI 2.5 FLASH           │ │   ║
║   │  │  (Deterministic)     │      │       (Generative AI)            │ │   ║
║   │  │                     │      │                                  │ │   ║
║   │  │  fine_table.json     │      │  Legal System Prompt             │ │   ║
║   │  │  authority_matrix    │      │  EN + HI bilingual               │ │   ║
║   │  │  5-Point Audit       │      │  Gazette-grounded only           │ │   ║
║   │  │  jsPDF Generator     │      │  Never invents fine amounts      │ │   ║
║   │  └──────────┬──────────┘      └──────────────┬───────────────────┘ │   ║
║   │             │    ┌─────────────────────────── ▼ ──────────────┐    │   ║
║   │             │    │      OFFLINE FALLBACK (Tier 2)              │    │   ║
║   │             │    │  Bilingual Keyword Semantic Matcher          │    │   ║
║   │             │    │  mv_act_snippets.json  •  Hindi NLP          │    │   ║
║   │             │    └────────────────────────────────────────────┘    │   ║
║   └─────────────┼────────────────────────────────────────────────────── ┘  ║
║                 │                                                            ║
║   ┌─────────────▼────────────────────────────────────────────────────────┐  ║
║   │                       DATA LAYER                                     │  ║
║   │                                                                      │  ║
║   │  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  ┌─────────┐  │  ║
║   │  │fine_table    │  │authority_    │  │trauma_       │  │iRAD     │  │  ║
║   │  │.json         │  │matrix.json   │  │centers.json  │  │blackspot│  │  ║
║   │  │(400+ rows)   │  │(30 rows)     │  │(Haversine)   │  │.geojson │  │  ║
║   │  │MVA 1988+2019 │  │MVA §132,§206 │  │Google Places │  │MoRTH+   │  │  ║
║   │  └──────────────┘  └──────────────┘  └──────────────┘  │iRAD.in  │  │  ║
║   │                                                          └─────────┘  │  ║
║   │  ┌──────────────────────────────────────────────────────────────────┐ │  ║
║   │  │  IndexedDB (idb-keyval)  •  rto_addresses.json  •  localStorage  │ │  ║
║   │  └──────────────────────────────────────────────────────────────────┘ │  ║
║   └──────────────────────────────────────────────────────────────────────┘  ║
║                                                                              ║
║   DEPLOYMENT:  Vercel (frontend)  •  Railway (backend)  •  Cost: ₹0         ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

<br/>

<!-- ═══════════════════════════════════════════════════════════════ -->
<!-- SECTION: FEATURES -->
<!-- ═══════════════════════════════════════════════════════════════ -->

## ⚡ Six Core Modules

<div align="center">

```
  ╔═══════════════╗   ╔═══════════════╗   ╔═══════════════╗
  ║  🧮 CHALLAN   ║   ║  🛡️ VALIDITY  ║   ║  📄 CONTEST   ║
  ║  CALCULATOR   ║   ║   CHECKER     ║   ║  NAVIGATOR    ║
  ╠═══════════════╣   ╠═══════════════╣   ╠═══════════════╣
  ║               ║   ║               ║   ║               ║
  ║ Know your     ║   ║ Was it        ║   ║ Fight back    ║
  ║ exact fine    ║   ║ legal?        ║   ║ step by step  ║
  ║               ║   ║               ║   ║               ║
  ║ ★ Offline    ║   ║ ★ THE MOAT   ║   ║ ★ PDF gen    ║
  ╚═══════════════╝   ╚═══════════════╝   ╚═══════════════╝

  ╔═══════════════╗   ╔═══════════════╗   ╔═══════════════╗
  ║  💬 AI LEGAL  ║   ║  🚨 EMERGENCY ║   ║  🗺️ iRAD MAP  ║
  ║  COMPANION    ║   ║     SOS       ║   ║  BLACK SPOTS  ║
  ╠═══════════════╣   ╠═══════════════╣   ╠═══════════════╣
  ║               ║   ║               ║   ║               ║
  ║ EN + Hindi    ║   ║ GPS + nearest ║   ║ Voice alerts  ║
  ║ Gemini API    ║   ║ trauma centre ║   ║ 500m warning  ║
  ║               ║   ║               ║   ║               ║
  ║ ★ Offline    ║   ║ ★ 1-tap SOS  ║   ║ ★ Proactive  ║
  ╚═══════════════╝   ╚═══════════════╝   ╚═══════════════╝
```

</div>

<br/>

---

### 🧮 Module 1 — Challan Calculator

> *"Know your exact legal liability before you reach for your wallet."*

The Challan Calculator is powered by a **deterministic Truth Engine** — not an LLM. Fine amounts come from a manually verified `fine_table.json` sourced directly from the Motor Vehicles Act 1988 (as amended 2019) and state gazette notifications. Zero hallucination risk.

| Feature | Detail |
|---------|--------|
| **State coverage** | Maharashtra · Delhi · Tamil Nadu · Gujarat · Karnataka |
| **Vehicle classes** | 2-Wheeler · Light Motor Vehicle · Commercial · Heavy |
| **Offences covered** | 20 core violation types with MVA section citations |
| **Output** | Fine amount · Section number · Compoundable flag · Compounding fee |
| **Offline** | ✅ 100% — bundled JSON, zero network required |

```
User Input:  State = Gujarat  |  Vehicle = 2W  |  Offence = No Helmet
─────────────────────────────────────────────────────────────────────
Output:  Fine = ₹1,000  |  Section 129 MVA  |  Compoundable = YES
         Compounding fee = ₹500  |  Authorised officer: Constable+
         Source: MVA 2019 Amendment + GJ Notification GTD/2019/108
```

<br/>

---

### 🛡️ Module 2 — Validity Checker *(The Differentiator)*

> *"34% of challans in India are wrongfully issued. Now you can prove it."*

This is the feature **no other team at this hackathon is building**. The Validity Checker runs a **5-Point Deterministic Audit** on any challan the user receives.

```
┌─────────────────────────────────────────────────────────┐
│              5-POINT STATUTORY AUDIT                    │
├─────────────────────────────────────────────────────────┤
│  Point 1  │  Section Validity    │ Is the MVA section   │
│           │                      │ active and correct?  │
├─────────────────────────────────────────────────────────┤
│  Point 2  │  Amount Integrity    │ Does fine match       │
│           │                      │ official gazette?     │
├─────────────────────────────────────────────────────────┤
│  Point 3  │  Compoundability     │ Payable at RTO or    │
│           │                      │ requires court?       │
├─────────────────────────────────────────────────────────┤
│  Point 4  │  Officer Authority   │ Was officer rank     │
│           │                      │ legally sufficient?   │
├─────────────────────────────────────────────────────────┤
│  Point 5  │  Timebar Limits      │ Within 60-day        │
│           │                      │ statutory window?     │
└─────────────────────────────────────────────────────────┘
```

**Authority Matrix** — the legal backbone of Point 4:

| Officer Type | ✅ CAN Issue | ❌ CANNOT Issue |
|---|---|---|
| Traffic Constable | Helmet, seatbelt, mobile phone | Overloading, fitness, DL suspension |
| Traffic Sub-Inspector | All above + vehicle detention | DL suspension (requires inspector) |
| Traffic Inspector / ACP | Full powers + DL suspension | Commercial permit violations |
| Motor Vehicle Inspector | Fitness, overloading, modifications | Moving traffic violations |
| Transport Officer | Permits, overloading, fitness | Moving violations, arrest |

**Output verdicts:**

```
🟢 GREEN  — "Challan valid. Section 129 correct. Constable authorised."
🟡 AMBER  — "Potential issue. Verify officer designation before paying."
🔴 RED    — "Contestable. Wrong section OR unauthorised officer detected."
```

<br/>

---

### 📄 Module 3 — Contest Navigator

> *"From RED flag to filed representation — in under 2 minutes."*

When the Validity Checker returns RED or AMBER, the Contest Navigator activates a guided 5-step workflow:

```
  ①  Confirm Issue Type
      └─ Wrong section / Unauthorised officer / Amount mismatch / Timebar
         │
  ②  Identify Correct Forum
      └─ Traffic Court · Transport Commissioner · Consumer Forum
         │
  ③  Document Checklist
      └─ Challan copy · RC · DL · Insurance · PUC · Witness statement
         │
  ④  AI Objection Letter (jsPDF)
      └─ Auto-cites specific MVA sections · Includes audit findings
         · Downloads court-ready PDF instantly to device
         │
  ⑤  Timeline & Follow-up
      └─ State-specific process duration · Hearing date reminders
```

<br/>

---

### 💬 Module 4 — AI Legal Companion

> *"A lawyer in your pocket. In English. In Hindi. No internet needed."*

**Two-tier resilient AI architecture:**

```
┌──────────────────────────────────────────────────────┐
│  TIER 1  —  Online  (Gemini 2.5 Flash)               │
│                                                      │
│  Direct REST call to Google AI  •  No SDK bloat      │
│  Legal system prompt:                                │
│    • Never invent fine amounts                       │
│    • Always cite MVA section                         │
│    • Defer to Challan Calculator for amounts         │
│    • Bilingual: English + Hindi                      │
└──────────────────────┬───────────────────────────────┘
                       │ (offline / no API key)
                       ▼
┌──────────────────────────────────────────────────────┐
│  TIER 2  —  Offline  (Local Semantic Matcher)        │
│                                                      │
│  🛰️ SARTHI Local AI Engine Active                    │
│                                                      │
│  Bilingual keyword parser (EN + HI)                  │
│  "helmet" / "हेलमेट" → Section 194D                  │
│  "seat belt" / "सीट बेल्ट" → Section 194B            │
│  "drunk" / "शराब" → Section 185 (non-compoundable)   │
│  Returns: MV Act text + citizen rights               │
└──────────────────────────────────────────────────────┘
```

<br/>

---

### 🚨 Module 5 — Emergency SOS

> *"When seconds matter, SARTHI acts before you can think."*

```
  User taps SOS
        │
        ▼
  GPS Coordinate Lock  ──────────────────────┐
  (Haversine distance calculation)           │
        │                                    │
        ▼                                    ▼
  3 Nearest Trauma Centres           Emergency Contacts
  (sorted by real distance)          (CRUD with relation tags)
        │                                    │
        └──────────────┬─────────────────────┘
                       │
                       ▼
          Native Share + SMS Dispatch
          Pre-filled message:
          "🆘 EMERGENCY - I need help.
           Location: [Google Maps link]
           Nearest hospital: [Name, X.Xkm]
           Please call emergency services."
```

<br/>

---

### 🗺️ Module 6 — iRAD Black-Spot Map

> *"Not a camera alert. A life-saving proximity intelligence system."*

```
Important distinction:
───────────────────────────────────────────────────────────
Camera alerts (Waze etc.)  →  "Camera here — brake now"
SARTHI Black-Spot Map      →  "23 fatalities here in 3
                               years. Nearest trauma: 8km.
                               Reduce speed. Stay alert."
───────────────────────────────────────────────────────────
```

Features:
- 🗺️ **Lazy-loaded Leaflet map** — fast SSR boot, no jank
- 🔴🟡🟢 **Visual risk legend** — High / Medium / Low danger zones
- 📍 **Proximity Alert Engine** — triggers at **500m from any black-spot**
- 🔊 **Voice Alerts via Web Speech API** — hands-free, eyes on road:
  > *"Warning: Approaching High-Risk Black Spot near Sion Flyover. Please reduce speed."*
- 🏥 **Hospital overlay** — nearest trauma centres shown alongside black spots

**Data sources:**
```
Black Spots  →  MoRTH Annual Road Accident Reports + iRAD.in (GPS-tagged)
Hospitals    →  Google Places API + trauma_centers.json (offline fallback)
Speed limits →  OpenStreetMap maxspeed tags + MoRTH NH/SH notification JSON
```

<br/>

<!-- ═══════════════════════════════════════════════════════════════ -->
<!-- SECTION: OFFLINE MATRIX -->
<!-- ═══════════════════════════════════════════════════════════════ -->

## 🛰️ Offline-First Resiliency Matrix

> *Built for Bharat — where 2G is real and network failures happen.*

```
╔══════════════════════╦══════════════╦════════════════════════╦══════════════════════════╗
║  Module              ║ Works Offline║ Technology             ║ Fallback Mechanism       ║
╠══════════════════════╬══════════════╬════════════════════════╬══════════════════════════╣
║ Challan Calculator   ║  ✅  100%   ║ fine_table.json        ║ Bundled static gazette   ║
║ Validity Checker     ║  ✅  100%   ║ authority_matrix.json  ║ Local 5-point rules eng. ║
║ Contest Navigator    ║  ✅  100%   ║ jsPDF + rto_addr.json  ║ In-browser PDF compile   ║
║ AI Legal Companion   ║  ✅  100%   ║ mv_act_snippets.json   ║ Bilingual keyword match  ║
║ Emergency SOS        ║  ✅  100%   ║ navigator.geolocation  ║ IndexedDB GPS caching    ║
║ iRAD Safety Map      ║  ✅  100%   ║ Leaflet tile cache     ║ Voice alerts run locally ║
╚══════════════════════╩══════════════╩════════════════════════╩══════════════════════════╝
```

**Every module. 100% offline. Zero compromise.**

<br/>

<!-- ═══════════════════════════════════════════════════════════════ -->
<!-- SECTION: TECH STACK -->
<!-- ═══════════════════════════════════════════════════════════════ -->

## 🛠️ Tech Stack

```
┌────────────────────────────────────────────────────────────────┐
│                        FRONTEND                                │
├──────────────────────┬─────────────────────────────────────────┤
│  Framework           │  TanStack Start (React 19 + Vite + SSR) │
│  Styling             │  Tailwind CSS v4 (Oklch color palette)  │
│  Maps                │  Leaflet + React-Leaflet + OSM tiles    │
│  State               │  IndexedDB via idb-keyval               │
│  PDF                 │  jsPDF (client-side, offline-capable)   │
│  Notifications       │  Sonner (micro-animated toasts)         │
│  Geospatial          │  Haversine formula + Web Speech API     │
│  Offline             │  Service Worker + Workbox               │
├────────────────────────────────────────────────────────────────┤
│                        AI LAYER                                │
├──────────────────────┬─────────────────────────────────────────┤
│  LLM                 │  Google Gemini 2.5 Flash (direct REST)  │
│  Offline AI          │  Bilingual Keyword Semantic Matcher     │
│  Data                │  fine_table.json · authority_matrix     │
│                      │  mv_act_snippets · trauma_centers       │
├────────────────────────────────────────────────────────────────┤
│                     INFRASTRUCTURE                             │
├──────────────────────┬─────────────────────────────────────────┤
│  Frontend hosting    │  Vercel (free tier, auto HTTPS)         │
│  Backend hosting     │  Railway (free tier, 500h/month)        │
│  Total monthly cost  │  ₹0                                     │
├────────────────────────────────────────────────────────────────┤
│                      DEV TOOLS                                 │
├──────────────────────┬─────────────────────────────────────────┤
│  IDE                 │  VS Code + Cursor                       │
│  Version control     │  Git + GitHub                           │
│  API docs            │  Vite dev server + swagger              │
└────────────────────────────────────────────────────────────────┘
```

<br/>

<!-- ═══════════════════════════════════════════════════════════════ -->
<!-- SECTION: QUICK START -->
<!-- ═══════════════════════════════════════════════════════════════ -->

## 🚀 Getting Started

### Prerequisites

```bash
node  ≥ 18.0.0
npm   ≥ 9.0.0
```

### ⚡ Setup in 3 minutes

**1. Clone the repository**

```bash
git clone https://github.com/your-username/sarthi.git
cd sarthi
```

**2. Install dependencies**

```bash
npm install
```

**3. Configure environment**

```bash
# Create .env in project root
cp .env.example .env
```

```env
# Optional — enables Tier 1 AI (Gemini 2.5 Flash)
# Without this, Tier 2 offline AI activates automatically
GEMINI_API_KEY=your_google_gemini_api_key_here
```

> 🔑 Get your free Gemini API key at [ai.google.dev](https://ai.google.dev)

**4. Run development server**

```bash
npm run dev
```

Open **[http://localhost:3000](http://localhost:3000)**

**5. Build for production**

```bash
npm run build
npm run start
```

<br/>

<!-- ═══════════════════════════════════════════════════════════════ -->
<!-- SECTION: TESTING SCENARIOS -->
<!-- ═══════════════════════════════════════════════════════════════ -->

## 🧪 Verification Scenarios

These are the exact demo scenarios that hit every evaluation criterion.

---

### Scenario A — Challan Calculator + Offline Mode

```
Step 1  Open SARTHI → Challan Calculator
Step 2  Select: State = Gujarat | Vehicle = 2-Wheeler | Offence = No Helmet
Step 3  Observe: ₹1,000 · Section 129 · Compoundable · ₹500 compound fee
Step 4  Switch UI language to Hindi — observe full Hindi response
Step 5  Enable airplane mode — repeat query
        ✅ Result appears instantly from local JSON (no network needed)
```

**Expected output:**
```
Fine: ₹1,000  |  Section: 129 MVA 2019  |  Compoundable: Yes
Compounding fee: ₹500  |  Officer authority: Traffic Constable and above
Source: GJ Transport Dept Notification GTD/2019/108
```

---

### Scenario B — Validity Checker RED flag + Contest Navigator

```
Step 1  Open Validity Checker
Step 2  Enter:
        State    = Maharashtra
        Vehicle  = Two-wheeler (2W)
        Section  = 194D (Helmet)
        Amount   = ₹5,000  ← (Official gazette: ₹1,000 — MISMATCH)
        Officer  = Police Constable ← (NOT authorised for this amount)
        Date     = 2025-01-01 ← (Exceeds 60-day timebar)

Step 3  Click "Run Audit"
Step 4  Observe RED diagnostic:
        ❌ Amount Integrity    — ₹5,000 ≠ gazette ₹1,000
        ❌ Officer Authority   — Constable not authorised
        ❌ Timebar Limits      — Exceeds 60-day window

Step 5  Click "Contest this Challan →"
Step 6  Enter name + address → Click "Generate representation letter"
Step 7  Open downloaded PDF:
        ✅ Letter auto-cites: unauthorised rank + wrong amount + timebar
```

---

### Scenario C — AI Companion (Online + Offline)

```
Online mode:
  Ask: "What is the penalty for drunk driving in Maharashtra?"
  ✅ Gemini 2.5 Flash responds with Section 185, ₹10,000, non-compoundable

Offline mode (disconnect internet or remove API key):
  Ask: "हेलमेट नहीं पहनने पर क्या जुर्माना है?"
  ✅ "🛰️ SARTHI Local AI Engine Active" badge appears
  ✅ Returns: Section 194D · ₹1,000 · Citizen rights in Hindi
```

---

### Scenario D — iRAD Black-Spot Map + Voice Alert

```
Step 1  Open Map tab → Click "Get my location"
Step 2  If within 500m of a preset black-spot (Mumbai / Delhi / Chennai):
        ✅ Animated warning box appears
        ✅ Browser speaks aloud:
           "Warning: Approaching High-Risk Black Spot near [location].
            Nearest trauma centre: [Name], [X.X] km away."
Step 3  Tap hospital marker → shows name, distance, one-tap call button
```

<br/>

<!-- ═══════════════════════════════════════════════════════════════ -->
<!-- SECTION: DATA SOURCES -->
<!-- ═══════════════════════════════════════════════════════════════ -->

## 📊 Data Sources & Legal Basis

All data in SARTHI traces to authoritative government sources. Every fine amount, section reference, and authority rule is citeable.

```
┌─────────────────────────────────────────────────────────────────────┐
│  DATA ASSET              │  SOURCE                  │  URL          │
├──────────────────────────┼──────────────────────────┼───────────────┤
│  Motor Vehicles Act 1988 │  indiacode.nic.in        │  Official PDF │
│  MVA Amendment 2019      │  morth.nic.in            │  Official PDF │
│  MH state amendment      │  mahatranscom.in         │  Gazette PDF  │
│  GJ state amendment      │  rtogujarat.gov.in       │  Gazette PDF  │
│  DL state amendment      │  transport.delhi.gov.in  │  Gazette PDF  │
│  Accident black spots    │  iRAD.in + morth.nic.in  │  Open data    │
│  Hospital locations      │  Google Places API + OSM │  Live + cache │
│  UAE traffic fines       │  rta.ae                  │  PDF (EN)     │
│  UK Highway Code         │  gov.uk                  │  HTML/PDF     │
└─────────────────────────────────────────────────────────────────────┘
```

<br/>

<!-- ═══════════════════════════════════════════════════════════════ -->
<!-- SECTION: EVAL CRITERIA -->
<!-- ═══════════════════════════════════════════════════════════════ -->

## 🏆 Evaluation Criteria — How SARTHI Addresses Each

| Criterion | Our Approach | Proof |
|---|---|---|
| **Legal accuracy & regulatory coverage** | RAG + deterministic Truth Engine over MVA 1988 + 2019 + 5 state PDFs. Every output cites exact section | Fine table manually verified against gazette |
| **Challan calculator functionality** | Vehicle × offence × state matrix, 400+ rows, compoundable flag, geo-fenced compounding fees | Works in airplane mode — demo it live |
| **Information integration across countries** | UAE RTA + UK Highway Code ingested. Same architecture, any country's legal PDFs | Query Dubai fine and UK fine in same session |
| **User interface & accessibility** | PWA, Hindi/English, offline, mobile-first, 2G-ready | Install on phone from browser, no app store |

<br/>

<!-- ═══════════════════════════════════════════════════════════════ -->
<!-- SECTION: PROJECT STRUCTURE -->
<!-- ═══════════════════════════════════════════════════════════════ -->

## 📁 Project Structure

```
sarthi/
├── 📁 src/
│   ├── 📁 routes/                  # TanStack Start file-based routing
│   │   ├── index.tsx               # Landing / dashboard
│   │   ├── calculator.tsx          # Challan Calculator
│   │   ├── validator.tsx           # Validity Checker
│   │   ├── contest.tsx             # Contest Navigator
│   │   ├── companion.tsx           # AI Legal Companion
│   │   ├── sos.tsx                 # Emergency SOS
│   │   └── map.tsx                 # iRAD Black-Spot Map
│   │
│   ├── 📁 lib/
│   │   ├── truth-engine.ts         # Deterministic fine lookup
│   │   ├── validity-auditor.ts     # 5-Point statutory audit logic
│   │   ├── pdf-generator.ts        # jsPDF representation letter
│   │   ├── gemini-client.ts        # Tier 1 AI (Gemini API)
│   │   ├── offline-matcher.ts      # Tier 2 AI (bilingual fallback)
│   │   ├── haversine.ts            # Distance calculation
│   │   └── speech.ts               # Web Speech API wrapper
│   │
│   ├── 📁 data/                    # All static JSON data assets
│   │   ├── fine_table.json         # 400+ rows, 5 states × 20 offences
│   │   ├── authority_matrix.json   # 30 rows, officer → permitted types
│   │   ├── trauma_centers.json     # Hospital locations + metadata
│   │   ├── black_spots.geojson     # iRAD accident black spots
│   │   ├── mv_act_snippets.json    # Offline AI legal knowledge base
│   │   └── rto_addresses.json      # RTO office addresses by state
│   │
│   └── 📁 components/             # Shared React components
│       ├── AuditReport.tsx         # Validity Checker result card
│       ├── VerdictCard.tsx         # GREEN/AMBER/RED output
│       ├── MapLayer.tsx            # Leaflet map + proximity engine
│       └── SOSDispatch.tsx         # Emergency contact + share
│
├── 📁 public/                      # Static assets + PWA manifest
│   ├── manifest.json
│   ├── sw.js                       # Service Worker
│   └── icons/
│
├── .env.example                    # Environment variable template
├── package.json
├── tailwind.config.ts
└── README.md                       # You are here
```

<br/>

<!-- ═══════════════════════════════════════════════════════════════ -->
<!-- SECTION: COMPETITIVE MOAT -->
<!-- ═══════════════════════════════════════════════════════════════ -->

## 🎯 Our Competitive Moat

```
What other teams will build:         What SARTHI builds:
─────────────────────────────        ─────────────────────────────────────
"Enter offence → get fine"           5-Point Statutory Audit
Basic map with hospital pins         Voice-alert proximity engine (iRAD)
Online-only AI chatbot               Offline bilingual AI (Tier 2)
Generic PDF template                 Auto-cited legal representation letter
English only                         Hindi + English — same codebase
Needs internet                       100% offline — every single module
```

> **"No team at this hackathon can replicate the Validity Checker + Offline RAG + Contest Navigator in 24 hours."**

<br/>

<!-- ═══════════════════════════════════════════════════════════════ -->
<!-- SECTION: FOOTER -->
<!-- ═══════════════════════════════════════════════════════════════ -->

---

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0D1B3E,100:00B4D8&height=120&section=footer&text=SARTHI%20—%20सार्थी&fontSize=28&fontColor=FFFFFF&animation=fadeIn&fontAlignY=65" width="100%"/>

**Built with ❤️ for Bharat. Built for roads that demand respect.**

[![Team](https://img.shields.io/badge/Team-Last%20Commit-0D1B3E?style=for-the-badge&logoColor=white)](/)
[![University](https://img.shields.io/badge/Nirma%20University-Ahmedabad-00B4D8?style=for-the-badge&logoColor=white)](https://nirmauni.ac.in)
[![Hackathon](https://img.shields.io/badge/CoERS%20Hackathon-2026-10B981?style=for-the-badge&logoColor=white)](https://coers.iitm.ac.in)

<br/>

*SARTHI is a civic hackathon demonstration. It compiles official MV Act 1988 data*
*but does not substitute for professional legal advice.*
*Always verify against the official state gazette before filing representations.*

<br/>

```
Know your rights. Stay safe on the road.
        — Team Last Commit
```

</div>
