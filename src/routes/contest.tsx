import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { z } from "zod";
import { getStates } from "@/lib/calculator";
import { getCitizen, setCitizen, type Citizen, rememberLetter } from "@/lib/storage";
import { generateContestLetter } from "@/lib/contest-pdf";
import { FileDown } from "lucide-react";
import { toast } from "sonner";

const searchSchema = z.object({
  state: z.string().optional(),
  section: z.string().optional(),
  amount: z.string().optional(),
  date: z.string().optional(),
  vehicle: z.string().optional(),
  officer: z.string().optional(),
});

export const Route = createFileRoute("/contest")({
  component: ContestPage,
  validateSearch: (s) => searchSchema.parse(s),
});

function ContestPage() {
  const { t } = useTranslation();
  const search = Route.useSearch();
  const states = getStates();

  const [c, setC] = useState<Citizen>({ name: "", address: "", phone: "" });
  const [form, setForm] = useState({
    state: search.state ?? states[0].code,
    section: search.section ?? "184",
    amount: Number(search.amount ?? 0),
    date: search.date ?? new Date().toISOString().slice(0, 10),
    challanNo: "",
    grounds: "",
  });

  useEffect(() => { getCitizen().then(setC); }, []);

  async function onGenerate() {
    if (!c.name.trim()) {
      toast.error("Please enter your Full Name before generating the letter.");
      return;
    }
    if (!c.address.trim()) {
      toast.error("Please enter your Address before generating the letter.");
      return;
    }

    const toastId = toast.loading("Generating your representation letter…");
    try {
      await setCitizen(c);
      const id = generateContestLetter({
        citizen: c,
        state: form.state,
        section: form.section,
        amount: form.amount,
        date: form.date,
        challanNo: form.challanNo || undefined,
        grounds: form.grounds || undefined,
      });
      await rememberLetter(id);
      toast.success("PDF letter downloaded successfully!", { id: toastId, description: "Check your Downloads folder." });
    } catch (err) {
      console.error("PDF generation failed", err);
      toast.error("Could not generate PDF. Please try again.", { id: toastId });
    }
  }

  return (
    <div className="space-y-5">
      <header>
        <h1 className="text-xl font-semibold">{t("contest.title")}</h1>
        <p className="text-sm text-muted-foreground">{t("contest.intro")}</p>
      </header>

      <section className="space-y-3 rounded-xl border border-border bg-card p-4">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">{t("contest.citizen")}</h2>
        <Field label={t("contest.name") + " *"}>
          <input value={c.name} onChange={(e) => setC({ ...c, name: e.target.value })} className={inputCls} placeholder="Required" />
        </Field>
        <Field label={t("contest.address") + " *"}>
          <textarea value={c.address} onChange={(e) => setC({ ...c, address: e.target.value })} rows={2} className={inputCls} placeholder="Required" />
        </Field>
        <Field label={t("contest.phone")}>
          <input value={c.phone} onChange={(e) => setC({ ...c, phone: e.target.value })} className={inputCls} />
        </Field>
      </section>

      <section className="space-y-3 rounded-xl border border-border bg-card p-4">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Challan</h2>
        <div className="grid grid-cols-2 gap-3">
          <Field label={t("common.state")}>
            <select value={form.state} onChange={(e) => setForm({ ...form, state: e.target.value })} className={inputCls}>
              {states.map((s) => <option key={s.code} value={s.code}>{s.name}</option>)}
            </select>
          </Field>
          <Field label="Challan no.">
            <input value={form.challanNo} onChange={(e) => setForm({ ...form, challanNo: e.target.value })} className={inputCls + " font-mono"} />
          </Field>
          <Field label={t("common.section")}>
            <input value={form.section} onChange={(e) => setForm({ ...form, section: e.target.value })} className={inputCls + " font-mono"} />
          </Field>
          <Field label={t("common.amount") + " (₹)"}>
            <input type="number" value={form.amount} onChange={(e) => setForm({ ...form, amount: Number(e.target.value) })} className={inputCls + " font-mono"} />
          </Field>
          <Field label={t("common.date")}>
            <input type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} className={inputCls} />
          </Field>
        </div>
        <Field label={t("contest.grounds")}>
          <textarea value={form.grounds} onChange={(e) => setForm({ ...form, grounds: e.target.value })} rows={4} placeholder="Optional — auto-derived from the audit if blank." className={inputCls} />
        </Field>
      </section>

      <button onClick={onGenerate} className="flex w-full items-center justify-center gap-2 rounded-md bg-primary py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors">
        <FileDown className="h-4 w-4" /> {t("contest.generate")}
      </button>

      <p className="text-center text-xs text-muted-foreground">
        * Fields marked with * are required. Your details are saved locally for future letters.
      </p>
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
