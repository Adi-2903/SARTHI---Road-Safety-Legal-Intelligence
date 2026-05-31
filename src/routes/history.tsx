import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { listChallans, deleteChallan, type SavedChallan } from "@/lib/storage";
import { formatINR } from "@/lib/calculator";
import { Trash2, ShieldCheck, ShieldAlert, History } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/history")({ component: HistoryPage });

// Safari-safe ISO date parser — new Date("2025-01-01") fails on Safari
function parseDate(d: string): Date {
  return new Date(d.replace(/-/g, "/"));
}

function HistoryPage() {
  const [items, setItems] = useState<SavedChallan[]>([]);
  useEffect(() => { listChallans().then(setItems); }, []);

  async function remove(id: string, label: string) {
    await deleteChallan(id);
    const updated = await listChallans();
    setItems(updated);
    toast.success(`Challan removed`, { description: label });
  }

  return (
    <div className="space-y-4">
      <header>
        <h1 className="text-xl font-semibold">Saved challans</h1>
        <p className="text-sm text-muted-foreground">All data stays on this device.</p>
      </header>
      {items.length === 0 ? (
        <div className="flex flex-col items-center gap-4 rounded-xl border border-dashed border-border p-10 text-center">
          <History className="h-10 w-10 text-muted-foreground/40" />
          <div className="space-y-1">
            <p className="text-sm font-medium">No saved challans yet</p>
            <p className="text-xs text-muted-foreground">
              Run an audit in the{" "}
              <Link to="/validator" className="text-primary underline">Validity Checker</Link>
              {" "}and tap Save.
            </p>
          </div>
          <Link
            to="/validator"
            className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
          >
            Check a Challan →
          </Link>
        </div>
      ) : (
        <>
          <p className="text-xs text-muted-foreground">{items.length} record{items.length > 1 ? "s" : ""} stored locally</p>
          <ul className="space-y-2">
            {items.map((c) => (
              <li key={c.id} className="flex items-center justify-between rounded-xl border border-border bg-card p-3">
                <div className="flex items-center gap-3 min-w-0">
                  {c.audit?.ok
                    ? <ShieldCheck className="h-5 w-5 shrink-0 text-success" />
                    : <ShieldAlert className="h-5 w-5 shrink-0 text-destructive" />
                  }
                  <div className="min-w-0">
                    <div className="text-sm font-semibold font-mono truncate">{c.state} · Sec {c.section} · {formatINR(c.amount)}</div>
                    <div className="text-xs text-muted-foreground">{parseDate(c.date).toLocaleDateString("en-IN")} · {c.vehicle} · {c.officer}</div>
                  </div>
                </div>
                <button
                  onClick={() => remove(c.id, `${c.state} Sec ${c.section}`)}
                  className="ml-2 shrink-0 rounded-md border border-border p-2 text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-colors"
                  aria-label="Delete challan"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
