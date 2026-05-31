import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { getStates, getVehicles, getRanks } from "@/lib/calculator";
import { runAudit, type AuditReport } from "@/lib/validator";
import { saveChallan } from "@/lib/storage";
import { Check, X, ShieldCheck, ShieldAlert, Upload } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/validator")({ component: ValidatorPage });

function ValidatorPage() {
  const { t } = useTranslation();
  const states = getStates();
  const vehicles = getVehicles();
  const ranks = getRanks();

  const [form, setForm] = useState({
    state: states[0].code,
    vehicle: vehicles[0].code,
    section: "184",
    amount: 5000,
    officer: ranks[0].code,
    date: new Date().toISOString().slice(0, 10),
  });
  const [report, setReport] = useState<AuditReport | null>(null);
  const [imgPreview, setImgPreview] = useState<string | null>(null);

  function update<K extends keyof typeof form>(k: K, v: (typeof form)[K]) {
    setForm((f) => ({ ...f, [k]: v }));
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setReport(runAudit(form));
  }

  async function persist() {
    if (!report) return;
    await saveChallan({
      id: crypto.randomUUID(),
      state: form.state,
      vehicle: form.vehicle,
      section: form.section,
      amount: form.amount,
      officer: form.officer,
      date: form.date,
      audit: { ok: report.ok, checks: Object.fromEntries(Object.entries(report.checks).map(([k, v]) => [k, { pass: v.pass, note: v.note }])) },
      createdAt: Date.now(),
    });
    toast.success("Challan saved to local history!");
  }

  return (
    <div className="space-y-5">
      <header>
        <h1 className="text-xl font-semibold">{t("validator.title")}</h1>
        <p className="text-sm text-muted-foreground">{t("validator.intro")}</p>
      </header>

      <form onSubmit={onSubmit} className="space-y-4 rounded-xl border border-border bg-card p-4">
        <label className="block space-y-1.5">
          <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{t("validator.upload")}</span>
          <label className="flex cursor-pointer items-center gap-2 rounded-md border border-dashed border-input p-3 text-sm text-muted-foreground hover:bg-accent">
            <Upload className="h-4 w-4" />
            <span>Tap to upload (image cached locally — fields stay editable)</span>
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => {
                const f = e.target.files?.[0];
                if (f) setImgPreview(URL.createObjectURL(f));
              }}
            />
          </label>
          {imgPreview && <img src={imgPreview} alt="challan" className="mt-2 max-h-40 rounded-md border border-border" />}
        </label>

        <div className="grid grid-cols-2 gap-3">
          <Field label={t("common.state")}>
            <select value={form.state} onChange={(e) => update("state", e.target.value)} className={inputCls}>
              {states.map((s) => <option key={s.code} value={s.code}>{s.name}</option>)}
            </select>
          </Field>
          <Field label={t("common.vehicle")}>
            <select value={form.vehicle} onChange={(e) => update("vehicle", e.target.value)} className={inputCls}>
              {vehicles.map((v) => <option key={v.code} value={v.code}>{v.label}</option>)}
            </select>
          </Field>
          <Field label={t("common.section")}>
            <input value={form.section} onChange={(e) => update("section", e.target.value)} className={inputCls + " font-mono"} />
          </Field>
          <Field label={t("common.amount") + " (₹)"}>
            <input type="number" value={form.amount} onChange={(e) => update("amount", Number(e.target.value))} className={inputCls + " font-mono"} />
          </Field>
          <Field label={t("common.officer")}>
            <select value={form.officer} onChange={(e) => update("officer", e.target.value)} className={inputCls}>
              {ranks.map((r) => <option key={r.code} value={r.code}>{r.label}</option>)}
            </select>
          </Field>
          <Field label={t("common.date")}>
            <input type="date" value={form.date} onChange={(e) => update("date", e.target.value)} className={inputCls} />
          </Field>
        </div>

        <button type="submit" className="w-full rounded-md bg-primary py-2.5 text-sm font-semibold text-primary-foreground">
          Run audit
        </button>
      </form>

      {report && (
        <div className="space-y-3">
          <div className={`flex items-center gap-3 rounded-xl border p-4 ${report.ok ? "border-success/30 bg-success/5 text-success" : "border-destructive/30 bg-destructive/5 text-destructive"}`}>
            {report.ok ? <ShieldCheck className="h-6 w-6" /> : <ShieldAlert className="h-6 w-6" />}
            <div className="font-semibold">
              {report.ok ? t("validator.verdict_valid") : t("validator.verdict_issues")}
            </div>
          </div>
          <ul className="divide-y divide-border rounded-xl border border-border bg-card">
            {(Object.keys(report.checks) as Array<keyof typeof report.checks>).map((k) => {
              const c = report.checks[k];
              return (
                <li key={k} className="flex items-start gap-3 p-3">
                  <span className={`mt-0.5 grid h-6 w-6 place-items-center rounded-full ${c.pass ? "bg-success/15 text-success" : "bg-destructive/15 text-destructive"}`}>
                    {c.pass ? <Check className="h-4 w-4" /> : <X className="h-4 w-4" />}
                  </span>
                  <div>
                    <div className="text-sm font-medium">{t(`validator.checks.${k}`)}</div>
                    <div className="text-xs text-muted-foreground">{c.note}</div>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="flex flex-wrap gap-2">
            <button onClick={persist} className="rounded-md border border-border px-3 py-2 text-sm font-medium hover:bg-accent">
              {t("common.save")}
            </button>
          {!report.ok && (
              <Link
                to="/contest"
                search={{
                  state: form.state, section: form.section, amount: String(form.amount), date: form.date, vehicle: form.vehicle, officer: form.officer,
                }}
                className="rounded-md bg-warning px-3 py-2 text-sm font-semibold text-warning-foreground"
              >
                Contest this challan →
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

const inputCls = "w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring";
function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block space-y-1.5">
      <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{label}</span>
      {children}
    </label>
  );
}
