import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  getStates, getVehicles, getViolationsFor, lookupFine, formatINR, findViolation,
} from "@/lib/calculator";
import { Trash2, Plus, Calculator } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/calculator")({ component: CalculatorPage });

function CalculatorPage() {
  const { t } = useTranslation();
  const states = getStates();
  const vehicles = getVehicles();
  const [state, setState] = useState(states[0].code);
  const [vehicle, setVehicle] = useState(vehicles[0].code);
  const [selected, setSelected] = useState<string[]>([]);
  const [pickedViolation, setPickedViolation] = useState("");

  const available = useMemo(() => getViolationsFor(state, vehicle), [state, vehicle]);
  const total = selected.reduce((s, id) => s + (lookupFine(id, state, vehicle) ?? 0), 0);

  function addViolation() {
    if (!pickedViolation) {
      toast.error("Please select a violation first.");
      return;
    }
    if (selected.includes(pickedViolation)) {
      toast.error("This violation is already in your list.");
      return;
    }
    const v = findViolation(pickedViolation);
    setSelected((s) => [...s, pickedViolation]);
    setPickedViolation("");
    toast.success(`Added: ${v?.label ?? pickedViolation}`);
  }

  return (
    <div className="space-y-5">
      <header>
        <h1 className="text-xl font-semibold">{t("modules.calculator.title")}</h1>
        <p className="text-sm text-muted-foreground">{t("modules.calculator.desc")}</p>
      </header>

      <div className="grid grid-cols-2 gap-3">
        <Field label={t("common.state")}>
          <select value={state} onChange={(e) => { setState(e.target.value); setSelected([]); setPickedViolation(""); }} className={inputCls}>
            {states.map((s) => <option key={s.code} value={s.code}>{s.name}</option>)}
          </select>
        </Field>
        <Field label={t("common.vehicle")}>
          <select value={vehicle} onChange={(e) => { setVehicle(e.target.value); setSelected([]); setPickedViolation(""); }} className={inputCls}>
            {vehicles.map((v) => <option key={v.code} value={v.code}>{v.label}</option>)}
          </select>
        </Field>
      </div>

      <Field label={t("common.violation")}>
        <div className="flex gap-2">
          <select
            value={pickedViolation}
            onChange={(e) => setPickedViolation(e.target.value)}
            className={inputCls}
          >
            <option value="" disabled>Select…</option>
            {available.filter((v) => !selected.includes(v.id)).map((v) => (
              <option key={v.id} value={v.id}>{v.label} (Sec {v.section})</option>
            ))}
          </select>
          <button
            type="button"
            onClick={addViolation}
            className="inline-flex items-center gap-1 rounded-md bg-primary px-3 text-sm font-medium text-primary-foreground"
          >
            <Plus className="h-4 w-4" /> {t("common.add")}
          </button>
        </div>
      </Field>

      <div className="rounded-xl border border-border bg-card">
        {selected.length === 0 ? (
          <div className="flex flex-col items-center gap-2 p-8 text-center text-sm text-muted-foreground">
            <Calculator className="h-8 w-8 opacity-30" />
            No violations selected. Pick one above and tap Add.
          </div>
        ) : (
          <ul className="divide-y divide-border">
            {selected.map((id) => {
              const v = findViolation(id)!;
              const amt = lookupFine(id, state, vehicle) ?? 0;
              return (
                <li key={id} className="flex items-center justify-between p-3">
                  <div>
                    <div className="text-sm font-medium">{v.label}</div>
                    <div className="text-xs text-muted-foreground font-mono">Sec {v.section} · {v.compoundable ? "Compoundable" : "Non-compoundable"}</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="font-mono text-sm font-semibold">{formatINR(amt)}</div>
                    <button
                      onClick={() => {
                        setSelected((s) => s.filter((x) => x !== id));
                        toast.success("Violation removed.");
                      }}
                      className="rounded p-1.5 text-muted-foreground hover:bg-accent"
                      aria-label="Remove"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
        <div className="flex items-center justify-between border-t border-border bg-muted/40 p-3">
          <span className="text-sm font-semibold uppercase tracking-wider">{t("common.total")}</span>
          <span className="font-mono text-lg font-bold text-primary">{formatINR(total)}</span>
        </div>
      </div>

      {selected.length > 0 && (
        <p className="text-xs text-muted-foreground text-center">
          {selected.length} violation{selected.length > 1 ? "s" : ""} · Fine figures from MV Act gazette (Maharashtra, Delhi, Tamil Nadu).
        </p>
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
