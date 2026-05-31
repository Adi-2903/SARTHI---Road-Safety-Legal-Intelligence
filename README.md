# 🛡️ SARTHI (सार्थी) — Road Safety & Legal Intelligence

> **AI-Powered Civic Empowerment, Gazette-Aligned Legal Validation, and Emergency Assistance for Indian Motorists.**
>
> *Built for the CoERS Road Safety Hackathon 2026.*

---

## 📖 Introduction

In India, motorists frequently face traffic stops, spot fines, and accident emergencies without real-time access to statutory legal guidance. Arbitrary challan amounts, unfamiliar traffic laws, and lack of immediate access to safety resources cause distress and legal vulnerability.

**SARTHI (सार्थी)** is an offline-first, premium progressive web application designed to bridge the gap between traffic law and civic power. By combining a deterministic **Truth Engine** with **Generative AI** and **iRAD Proximity Intelligence**, SARTHI empowers citizens to:
1. **Know** their exact legal liabilities under the Motor Vehicles Act (as amended in 2019).
2. **Audit** the statutory validity of spot fines issued to them.
3. **Contest** incorrect or unauthorized challans using legally-cited, auto-generated representations.
4. **Navigate** safely with real-time black-spot voice warnings.
5. **Communicate** and seek help instantly during emergencies with dynamic SOS dispatch.

---

## 🌟 The 6 Core Modules

SARTHI is structured around six premium, responsive, and robust features:

### 1. 🧮 Challan Calculator
*   **Purpose**: Computes legal fines dynamically under the latest Motor Vehicles (Amendment) Act 2019.
*   **Features**:
    *   Dropdown state selector (Maharashtra, Delhi, Tamil Nadu).
    *   Vehicle class adapter (Two-wheelers, Light Motor Vehicles, Commercial Vehicles, Heavy Vehicles).
    *   Multi-select violation aggregator with duplicate prevention.
    *   Instant breakdown showing section numbers, compoundability, and a dynamic local-currency total.

### 🛡️ 2. Validity Checker (Statutory Legal Audit)
*   **Purpose**: Automatically verifies if a spot challan is legally valid or issued in violation of guidelines.
*   **Features**:
    *   Supports image uploading (cached locally) for convenient review.
    *   Runs a strict **5-Point Deterministic Audit** checking:
        1.  **Section Validity**: Is the violation recorded under an active MV Act section?
        2.  **Amount Integrity**: Does the fine match the official state gazette on file?
        3.  **Compoundability**: Is the offense compoundable (payable to RTO) or non-compoundable (requires court representation)?
        4.  **Officer Authority**: Does the officer's rank match the statutory limit for issuing spot fines (e.g., Constables vs. Sub-Inspectors)?
        5.  **Timebar Limits**: Is the challan within the 60-day statutory limitation window?
    *   Generates a clear green/red diagnostic report highlighting invalidities.

### 📄 3. Contest Navigator
*   **Purpose**: Generates formal representation letters to set aside invalid fines.
*   **Features**:
    *   Allows motorists to enter details (cached securely in local storage).
    *   Prefills challan details automatically from the **Validity Checker** report.
    *   Integrates **derived legal grounds**—if the audit discovers an unauthorized officer rank or an incorrect fine amount, it automatically cites the specific failure as a legal defense.
    *   Downloads a beautifully formatted, print-ready PDF via **jsPDF** instantly to the device.

### 💬 4. AI Legal Companion (Direct Gemini API & Resilient Offline Fallback)
*   **Purpose**: A highly-polished, bilingual chatbot that answers complicated traffic queries in **English** and **Hindi**.
*   **Architectural Features**:
    *   **Tier 1 (Gemini API)**: Connects directly to Google's official Gemini endpoint (`gemini-2.5-flash`) using a server-side fetch with a robust legal system prompt. It never invents fine amounts, citing the Challan Calculator instead.
    *   **Tier 2 (Smart Local Fallback)**: If no internet is detected or the API key is missing, SARTHI activates an onboard **Bilingual Keyword Semantic Matcher**. It automatically parses the query for subjects like *"helmet"*, *"seat belt"*, *"speeding"*, *"drinking"*, or *"police rights"*, and returns grounded, gazette-aligned sections and citizen rights from local MV Act snippets.

### 🚨 5. Emergency SOS & Location Dispatch
*   **Purpose**: High-speed safety support during accidents or roadside encounters.
*   **Features**:
    *   One-click **GPS Coordinate Lock** with animated loader toast feedback.
    *   Lists the **three nearest trauma centers** dynamically, calculating real-time straight-line distance (using Haversine formula) relative to the driver's current position.
    *   Local emergency contact CRUD engine with relation tags.
    *   One-touch **Native Share and SMS dispatch**, generating pre-filled SOS warnings with active Google Maps location links.

### 🗺️ 6. iRAD Black-Spot Map (Proximity Warnings)
*   **Purpose**: Active driving assistance using Integrated Road Accident Database (iRAD) black-spots.
*   **Features**:
    *   Lazy-loaded **Leaflet Map** to maintain quick SSR boot speeds.
    *   Visual legend categorizing high, medium, and low-risk accident zones.
    *   **Proximity Alert Engine**: Triggers an alert window when approaching within 500m of a black-spot.
    *   **Voice Alerts**: Utilizes client-side `speechSynthesis` to speak aloud warnings (e.g., *"Warning: Approaching High-Risk Black Spot near Sion Flyover"*), allowing hands-free safe driving.

---

## 🛠️ Tech Stack & Architecture

SARTHI is designed to run in highly challenging network conditions.

*   **Framework**: [TanStack Start](https://tanstack.com/router/v1/docs/start/overview) (React 19 + Vite + Full SSR capability)
*   **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (modern CSS variables with elegant typography and Oklch dynamic color palette)
*   **Database**: [IndexedDB via idb-keyval](https://github.com/jakearchibald/idb-keyval) (provides offline persistent storage for challan history, emergency contacts, and citizen profiles)
*   **PDF Compiler**: [jsPDF](https://github.com/parallax/jsPDF) (generates court-ready representations client-side)
*   **Geospatial**: [Leaflet & React-Leaflet](https://react-leaflet.js.org/) (handles mapping, location tracking, and proximity circles)
*   **AI Integration**: Direct REST API call to official **Google Gemini 2.5 Flash** (no external heavy SDK wrappers)
*   **Feedback System**: [Sonner](https://emilkowalski.github.io/sonner/) (rich-colored, micro-animated toast notifications)

### 🛰️ Offline-First Resiliency Matrix

| Module | Works Offline? | Technologies Used | Fallback Mechanism |
| :--- | :--- | :--- | :--- |
| **Challan Calculator** | **Yes (100%)** | `fine_table.json` | Local calculations based on static gazette tables |
| **Validity Checker** | **Yes (100%)** | `authority_matrix.json` | Local rules engine running 5-point audits |
| **Contest Navigator** | **Yes (100%)** | `rto_addresses.json` + `jsPDF` | In-browser PDF compilation and immediate download |
| **AI Legal Companion** | **Yes (100%)** | `mv_act_snippets.json` | **Bilingual Local Matcher** returns act sections/rights |
| **Emergency SOS** | **Yes (100%)** | `navigator.geolocation` + IndexedDB | HTML5 geolocation caching and SMS client dispatch |
| **iRAD Safety Map** | **Yes (100%)** | `trauma_centers.json` + Web Speech | Leaflet caches tile layers; voice alerts run locally |

---

## 🚀 Installation & Local Setup

Get SARTHI running locally in under three minutes.

### 📋 Prerequisites
*   [Node.js](https://nodejs.org/) v18.0.0 or higher
*   [NPM](https://www.npmjs.com/) v9.0.0 or higher

### 1. Clone & Install Dependencies
```bash
git clone <repository-url>
cd SARTHI
npm install
```

### 2. Configure Environment Variables
Create a `.env` file in the root directory:
```env
# Optional: Add your Google Gemini API Key for online chatbot functionality
GEMINI_API_KEY=your_google_gemini_api_key_here
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production
To test the production bundles and SSR capabilities:
```bash
npm run build
```

---

## 🧪 Verification & Testing Scenarios

Use these scenarios to test SARTHI's capabilities:

### Scenario A: Testing the AI Chatbot (Online vs. Offline)
1.  **Online Mode**:
    *   Set a valid `GEMINI_API_KEY` in your `.env`.
    *   Navigate to the **Companion** page and ask: *"What is the penalty for driving without helmet?"*
    *   Observe high-speed, detailed responses generated directly by Gemini 2.5 Flash, complete with the system prompt's rules.
2.  **Offline Mode (or no API key set)**:
    *   Clear the key or disconnect your internet.
    *   Ask the same question or ask in Hindi: *"हेलमेट नहीं पहनने पर क्या जुर्माना है?"*
    *   SARTHI will display a **`🛰️ SARTHI Local AI Engine Active`** tag and immediately return the corresponding MV Act Section (Section 194D) and relevant citizen rights completely offline!

### Scenario B: Auditing and Contesting a Spot Challan
1.  Navigate to the **Validator** page.
2.  Set State to **Maharashtra**, Vehicle to **Two-wheeler (2W)**, Section to **194D** (Helmet), but set the Amount to **₹5,000** (the official gazette fine is ₹1,000).
3.  Set Officer to **Police Constable** (Constables are not authorized to issue fines of this amount).
4.  Set the Date to `2025-01-01` (exceeds the 60-day statutory deadline).
5.  Click **Run Audit**.
6.  Observe the red verification box and warning flags for **Amount**, **Officer Authority**, and **Timebar Limits**.
7.  Click **Contest this challan →**.
8.  Fill in your Name and Address.
9.  Click **Generate representation letter**.
10. Open the downloaded PDF: notice that the letter automatically includes the exact audited discrepancies (unauthorized officer rank, wrong amount, and statutory timebar) as your **grounds of representation**!

### Scenario C: Map black-spot triggers
1.  Navigate to the **Map** page.
2.  Click **Get my location**.
3.  If your browser location places you within 500m of one of our preset black-spots (e.g., in Mumbai, Delhi, or Chennai), you will instantly see an animated warning box, and your computer will read out the black-spot proximity warning automatically.

---

## 📄 License & Team Credits

*   **Hackathon**: Center of Excellence for Road Safety (CoERS) Road Safety Hackathon 2026
*   **Team Name**: **Team SARTHI**
*   **Disclaimer**: This application is a civic hackathon demonstration. It compiles official MV Act 1988 data but does not substitute for professional legal advice. Always check the official state gazette before presenting representations.

---
*Built with ❤️ to keep Indian motorists informed, safe, and legally secure.*
