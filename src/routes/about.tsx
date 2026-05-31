import { createFileRoute } from "@tanstack/react-router";
import { Shield, Map, Calculator, ShieldCheck, FileText, MessageCircle, Phone, Wifi, WifiOff, CheckCircle2, Code2, Database, Brain } from "lucide-react";

export const Route = createFileRoute("/about")({ component: AboutPage });

const features = [
  { Icon: Calculator, label: "Challan Calculator", desc: "Exact fines · 3 states · MV Act gazette data" },
  { Icon: ShieldCheck, label: "Validity Checker", desc: "5-point legal audit against state gazette" },
  { Icon: FileText, label: "Contest Navigator", desc: "Auto-generates downloadable PDF representation letters" },
  { Icon: MessageCircle, label: "AI Legal Companion", desc: "Bilingual Gemini-powered MV Act chatbot" },
  { Icon: Phone, label: "Emergency SOS", desc: "GPS-linked trauma centres + emergency contacts" },
  { Icon: Map, label: "Safety Intelligence Map", desc: "iRAD black-spot proximity alerts with voice" },
];

const techStack = [
  { label: "TanStack Start", color: "bg-orange-500/10 text-orange-600" },
  { label: "React 19", color: "bg-blue-500/10 text-blue-600" },
  { label: "Tailwind CSS v4", color: "bg-cyan-500/10 text-cyan-600" },
  { label: "Gemini 2.5 Flash", color: "bg-purple-500/10 text-purple-600" },
  { label: "IndexedDB (idb-keyval)", color: "bg-green-500/10 text-green-600" },
  { label: "Leaflet / iRAD", color: "bg-emerald-500/10 text-emerald-600" },
  { label: "jsPDF", color: "bg-red-500/10 text-red-600" },
  { label: "Zod", color: "bg-yellow-500/10 text-yellow-600" },
];

const stats = [
  { value: "15", label: "Violations tracked" },
  { value: "3", label: "States covered" },
  { value: "6", label: "Core modules" },
  { value: "100%", label: "Offline-ready core" },
];

function AboutPage() {
  return (
    <div className="space-y-6">
      {/* Hero */}
      <section className="rounded-2xl border border-border bg-gradient-to-br from-primary to-primary/80 p-6 text-primary-foreground">
        <div className="mb-1 flex items-center gap-2">
          <div className="grid h-9 w-9 place-items-center rounded-lg bg-primary-foreground/15 ring-1 ring-primary-foreground/20">
            <Shield className="h-5 w-5" />
          </div>
          <span className="text-xs font-semibold uppercase tracking-widest opacity-70">SARTHI</span>
        </div>
        <h1 className="mt-3 text-2xl font-bold leading-tight">Road Safety &amp; Legal Intelligence</h1>
        <p className="mt-2 text-sm opacity-80 leading-relaxed">
          An AI-powered, offline-first civic platform empowering Indian drivers to understand their rights,
          validate traffic challans, and access emergency assistance — anytime, anywhere.
        </p>
        <div className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-primary-foreground/15 px-3 py-1 text-xs font-medium ring-1 ring-primary-foreground/20">
          CoERS Road Safety Hackathon 2026
        </div>
      </section>

      {/* Live Stats */}
      <section>
        <h2 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Platform Coverage</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-xl border border-border bg-card p-4 text-center">
              <div className="text-2xl font-bold text-primary">{s.value}</div>
              <div className="mt-1 text-xs text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Module Checklist */}
      <section>
        <h2 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Modules</h2>
        <div className="space-y-2">
          {features.map(({ Icon, label, desc }) => (
            <div key={label} className="flex items-start gap-3 rounded-xl border border-border bg-card p-3">
              <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                <Icon className="h-4 w-4" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold">{label}</span>
                  <CheckCircle2 className="h-3.5 w-3.5 text-success shrink-0" />
                </div>
                <p className="text-xs text-muted-foreground">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Offline / Online Badges */}
      <section>
        <h2 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Connectivity</h2>
        <div className="grid grid-cols-2 gap-3">
          <div className="flex items-start gap-3 rounded-xl border border-success/30 bg-success/5 p-3">
            <WifiOff className="mt-0.5 h-4 w-4 shrink-0 text-success" />
            <div>
              <div className="text-sm font-semibold text-success">Offline Core</div>
              <p className="text-xs text-muted-foreground">Calculator, Validator, Contest, Map markers, SOS</p>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-xl border border-info/30 bg-info/5 p-3">
            <Wifi className="mt-0.5 h-4 w-4 shrink-0 text-info" />
            <div>
              <div className="text-sm font-semibold text-info">Online Enhanced</div>
              <p className="text-xs text-muted-foreground">AI Legal Companion requires network for Gemini</p>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section>
        <h2 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Architecture</h2>
        <div className="space-y-2">
          <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-3 text-sm">
            <Database className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            <div>
              <span className="font-semibold">Truth Engine</span>
              <span className="text-muted-foreground"> — deterministic fine math from </span>
              <code className="rounded bg-muted px-1 font-mono text-xs">fine_table.json</code>
              <span className="text-muted-foreground"> and </span>
              <code className="rounded bg-muted px-1 font-mono text-xs">authority_matrix.json</code>
              <span className="text-muted-foreground">. The AI never invents fines — it explains.</span>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-3 text-sm">
            <Brain className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            <div>
              <span className="font-semibold">AI Layer</span>
              <span className="text-muted-foreground"> — Gemini 2.5 Flash via official REST API with a grounded MV Act system prompt. Falls back to offline keyword matcher if no connectivity.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section>
        <h2 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          <Code2 className="inline h-3.5 w-3.5 mr-1" />
          Tech Stack
        </h2>
        <div className="flex flex-wrap gap-2">
          {techStack.map((t) => (
            <span key={t.label} className={`rounded-full px-3 py-1 text-xs font-semibold ${t.color}`}>
              {t.label}
            </span>
          ))}
        </div>
      </section>

      {/* Disclaimer + Footer */}
      <section className="rounded-xl border border-border bg-muted/40 p-4 text-xs text-muted-foreground leading-relaxed">
        <span className="font-medium text-foreground">Disclaimer: </span>
        Informational only — not legal advice. Verify fine amounts and procedures against the current gazette of your state before contesting any challan.
      </section>

      <div className="text-center text-xs text-muted-foreground space-y-1">
        <div className="font-semibold text-foreground">Team SARTHI</div>
        <div>CoERS Road Safety Hackathon 2026 · Built with ❤️ for safer roads</div>
      </div>
    </div>
  );
}
