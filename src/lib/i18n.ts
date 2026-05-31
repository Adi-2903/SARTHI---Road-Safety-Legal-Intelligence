import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const en = {
  app: {
    name: "SARTHI",
    tagline: "Road Safety & Legal Intelligence",
    offline: "Offline ready",
    online: "Online",
  },
  nav: {
    home: "Home",
    map: "Map",
    sos: "SOS",
    companion: "Companion",
    more: "More",
    calculator: "Calculator",
    validator: "Validator",
    contest: "Contest",
    history: "History",
    about: "About",
  },
  home: {
    hero_title: "From confusion to clarity, in seconds.",
    hero_sub: "Validate any challan, learn your rights, and stay ahead of road hazards — even offline.",
    modules: "Modules",
    quick: "Quick actions",
  },
  modules: {
    calculator: { title: "Challan Calculator", desc: "Exact fine for any violation across 3 states." },
    validator: { title: "Validity Checker", desc: "5-point audit of any challan." },
    contest: { title: "Contest Navigator", desc: "Auto-generate a representation letter." },
    companion: { title: "AI Legal Companion", desc: "Bilingual chat grounded in the MV Act." },
    sos: { title: "Emergency Assistance", desc: "One-tap SOS with trauma centers." },
    map: { title: "Safety Intelligence Map", desc: "iRAD black-spot alerts on the move." },
  },
  common: {
    state: "State",
    vehicle: "Vehicle type",
    violation: "Violation",
    add: "Add",
    remove: "Remove",
    submit: "Submit",
    calculate: "Calculate",
    total: "Total",
    section: "Section",
    amount: "Amount",
    officer: "Officer rank",
    date: "Issue date",
    save: "Save",
    download: "Download PDF",
    cancel: "Cancel",
    back: "Back",
  },
  validator: {
    title: "Validity Checker",
    intro: "Enter the challan details. We'll run a 5-point audit against the MV Act and state gazette.",
    upload: "Upload challan photo (optional)",
    audit: "5-point audit",
    checks: {
      amount: "Amount matches gazette",
      section: "Section is valid for offence",
      compound: "Compoundability is correct",
      timebar: "Within statutory time-bar",
      authority: "Officer has authority for this fine",
    },
    verdict_valid: "Challan looks valid",
    verdict_issues: "Issues detected",
  },
  contest: {
    title: "Contest Navigator",
    intro: "Generate a pre-filled representation letter for the relevant RTO or court.",
    citizen: "Your details",
    name: "Full name",
    address: "Address",
    phone: "Phone",
    grounds: "Grounds of contest",
    generate: "Generate letter (PDF)",
  },
  sos: {
    title: "Emergency Assistance",
    big_button: "Send SOS",
    sharing: "Sharing your location and message…",
    nearest: "Nearest trauma centers",
    contacts: "Emergency contacts",
    add_contact: "Add contact",
    call_112: "Call 112",
  },
  map: {
    title: "Safety Map",
    legend: "Severity",
    high: "High",
    medium: "Medium",
    low: "Low",
    locate: "Locate me",
    alert: "Approaching black-spot — drive carefully",
  },
  companion: {
    title: "AI Legal Companion",
    placeholder: "Ask about the MV Act, your rights, or any challan section…",
    disclaimer: "Information only. Citations are from the MV Act 2019 amendment; verify with local gazette.",
  },
};

const hi = {
  app: { name: "सारथी", tagline: "सड़क सुरक्षा एवं कानूनी सहायक", offline: "ऑफ़लाइन तैयार", online: "ऑनलाइन" },
  nav: { home: "होम", map: "नक्शा", sos: "SOS", companion: "साथी", more: "अधिक", calculator: "कैलकुलेटर", validator: "जाँच", contest: "अपील", history: "इतिहास", about: "जानकारी" },
  home: {
    hero_title: "भ्रम से स्पष्टता तक, चंद सेकंडों में।",
    hero_sub: "किसी भी चालान की जाँच करें, अपने अधिकार जानें, और सड़क संकटों से सावधान रहें — ऑफ़लाइन भी।",
    modules: "मॉड्यूल",
    quick: "त्वरित क्रियाएँ",
  },
  modules: {
    calculator: { title: "चालान कैलकुलेटर", desc: "3 राज्यों के लिए सटीक जुर्माना।" },
    validator: { title: "वैधता जाँच", desc: "किसी भी चालान का 5-बिंदु ऑडिट।" },
    contest: { title: "अपील सहायक", desc: "स्वतः-निर्मित अभ्यावेदन पत्र।" },
    companion: { title: "AI कानूनी साथी", desc: "MV अधिनियम पर द्विभाषी चैट।" },
    sos: { title: "आपातकालीन सहायता", desc: "एक-स्पर्श SOS एवं ट्रॉमा केंद्र।" },
    map: { title: "सुरक्षा नक्शा", desc: "iRAD ब्लैक-स्पॉट अलर्ट।" },
  },
  common: { state: "राज्य", vehicle: "वाहन प्रकार", violation: "उल्लंघन", add: "जोड़ें", remove: "हटाएँ", submit: "जमा करें", calculate: "गणना करें", total: "कुल", section: "धारा", amount: "राशि", officer: "अधिकारी पद", date: "जारी तिथि", save: "सहेजें", download: "PDF डाउनलोड", cancel: "रद्द करें", back: "वापस" },
  validator: {
    title: "वैधता जाँच",
    intro: "चालान विवरण दर्ज करें। हम MV अधिनियम के अनुसार 5-बिंदु ऑडिट चलाएँगे।",
    upload: "चालान की फोटो अपलोड करें (वैकल्पिक)",
    audit: "5-बिंदु ऑडिट",
    checks: { amount: "राशि गज़ट से मेल खाती है", section: "धारा सही है", compound: "कंपाउंडेबिलिटी सही है", timebar: "वैधानिक समय-सीमा के भीतर", authority: "अधिकारी को अधिकार है" },
    verdict_valid: "चालान वैध प्रतीत होता है",
    verdict_issues: "समस्याएँ मिलीं",
  },
  contest: { title: "अपील सहायक", intro: "RTO/न्यायालय के लिए तैयार पत्र बनाएँ।", citizen: "आपकी जानकारी", name: "पूरा नाम", address: "पता", phone: "फ़ोन", grounds: "अपील के आधार", generate: "पत्र बनाएँ (PDF)" },
  sos: { title: "आपातकालीन सहायता", big_button: "SOS भेजें", sharing: "स्थान साझा हो रहा है…", nearest: "निकटतम ट्रॉमा केंद्र", contacts: "आपातकालीन संपर्क", add_contact: "संपर्क जोड़ें", call_112: "112 पर कॉल करें" },
  map: { title: "सुरक्षा नक्शा", legend: "गंभीरता", high: "उच्च", medium: "मध्यम", low: "निम्न", locate: "मेरा स्थान", alert: "ब्लैक-स्पॉट निकट — सावधानी से चलाएँ" },
  companion: { title: "AI कानूनी साथी", placeholder: "MV अधिनियम, अधिकार या किसी धारा के बारे में पूछें…", disclaimer: "केवल जानकारी हेतु। स्थानीय गज़ट से पुष्टि करें।" },
};

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources: { en: { translation: en }, hi: { translation: hi } },
    lng: typeof window !== "undefined" ? localStorage.getItem("sarthi.lang") || "en" : "en",
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });
}

export default i18n;

export function setLang(lng: "en" | "hi") {
  i18n.changeLanguage(lng);
  if (typeof window !== "undefined") localStorage.setItem("sarthi.lang", lng);
}
