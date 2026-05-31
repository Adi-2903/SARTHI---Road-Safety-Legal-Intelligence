import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, lazy, Suspense } from "react";
import { useTranslation } from "react-i18next";
import { Locate, AlertTriangle } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/map")({ component: MapPage });

const SafetyMap = lazy(() => import("@/components/SafetyMap").then((m) => ({ default: m.SafetyMap })));

function MapPage() {
  const { t } = useTranslation();
  const [pos, setPos] = useState<{ lat: number; lng: number } | null>(null);
  const [alertText, setAlertText] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const requested = useRef(false);
  useEffect(() => setMounted(true), []);

  function locate() {
    if (!navigator.geolocation) {
      toast.error("Geolocation is not supported by your browser.");
      return;
    }
    if (requested.current) {
      toast.info("Location fetch already in progress…");
      return;
    }
    requested.current = true;
    const toastId = toast.loading("Fetching your location…");
    navigator.geolocation.getCurrentPosition(
      (p) => {
        setPos({ lat: p.coords.latitude, lng: p.coords.longitude });
        requested.current = false;
        toast.success("Location found!", { id: toastId });
      },
      (err) => {
        requested.current = false;
        toast.error("Could not get location: " + err.message, { id: toastId });
      },
      { enableHighAccuracy: true },
    );
  }

  return (
    <div className="space-y-4">
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold">{t("map.title")}</h1>
          <p className="text-xs text-muted-foreground">iRAD black-spot intelligence — alerts within 500 m.</p>
        </div>
        <button onClick={locate} className="inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-3 py-1.5 text-sm font-medium hover:bg-accent">
          <Locate className="h-4 w-4" /> {t("map.locate")}
        </button>
      </header>

      {alertText && (
        <div className="flex items-start gap-2 rounded-xl border border-destructive/40 bg-destructive/10 p-3 text-sm text-destructive">
          <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" />
          <div>{alertText}</div>
        </div>
      )}

      <div className="h-[60vh] overflow-hidden rounded-xl border border-border">
        {mounted ? (
          <Suspense fallback={<div className="grid h-full place-items-center text-sm text-muted-foreground">Loading map…</div>}>
            <SafetyMap pos={pos} onProximity={(name) => {
              const msg = `${t("map.alert")}: ${name}`;
              setAlertText(msg);
              try { window.speechSynthesis?.speak(new SpeechSynthesisUtterance(msg)); } catch {}
              setTimeout(() => setAlertText(null), 8000);
            }} />
          </Suspense>
        ) : (
          <div className="grid h-full place-items-center text-sm text-muted-foreground">Loading map…</div>
        )}
      </div>

      <div className="flex items-center gap-4 text-xs text-muted-foreground">
        <span className="font-semibold">{t("map.legend")}:</span>
        <Legend color="oklch(0.58 0.22 27)" label={t("map.high")} />
        <Legend color="oklch(0.78 0.16 75)" label={t("map.medium")} />
        <Legend color="oklch(0.62 0.16 150)" label={t("map.low")} />
      </div>
    </div>
  );
}

function Legend({ color, label }: { color: string; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: color }} />
      {label}
    </span>
  );
}
