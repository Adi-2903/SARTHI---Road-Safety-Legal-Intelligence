import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { listContacts, setContacts, type Contact } from "@/lib/storage";
import trauma from "@/data/trauma_centers.json";
import { Phone, MapPin, Trash2, Plus, Share2, AlertTriangle } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/sos")({ component: SOSPage });

function distKm(a: [number, number], b: [number, number]) {
  const R = 6371;
  const toR = (d: number) => (d * Math.PI) / 180;
  const dLat = toR(b[1] - a[1]);
  const dLon = toR(b[0] - a[0]);
  const s = Math.sin(dLat / 2) ** 2 + Math.cos(toR(a[1])) * Math.cos(toR(b[1])) * Math.sin(dLon / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(s));
}

function SOSPage() {
  const { t } = useTranslation();
  const [contacts, setC] = useState<Contact[]>([]);
  const [pos, setPos] = useState<{ lat: number; lng: number } | null>(null);
  const [locating, setLocating] = useState(false);
  const [newC, setNewC] = useState<Contact>({ id: "", name: "", phone: "", relation: "" });

  useEffect(() => { listContacts().then(setC); }, []);

  function locate() {
    if (!navigator.geolocation) {
      toast.error("Geolocation is not supported by your browser");
      return;
    }
    if (locating) {
      toast.info("Location fetch already in progress…");
      return;
    }
    setLocating(true);
    const toastId = toast.loading("Fetching your precise GPS coordinates...");
    navigator.geolocation.getCurrentPosition(
      (p) => {
        setPos({ lat: p.coords.latitude, lng: p.coords.longitude });
        setLocating(false);
        toast.success("Location locked successfully!", { id: toastId });
      },
      (e) => {
        setLocating(false);
        toast.error("Could not get location: " + e.message, { id: toastId });
      },
      { enableHighAccuracy: true, timeout: 8000 },
    );
  }

  const nearest = pos
    ? [...trauma.features]
        .map((f) => ({ ...f, _d: distKm([pos.lng, pos.lat], f.geometry.coordinates as [number, number]) }))
        .sort((a, b) => a._d - b._d)
        .slice(0, 3)
    : trauma.features.slice(0, 3).map((f) => ({ ...f, _d: 0 }));

  function shareSOS() {
    const loc = pos ? `https://maps.google.com/?q=${pos.lat},${pos.lng}` : "(location unavailable)";
    const msg = `🚨 SARTHI SOS — I need help. My location: ${loc}`;
    
    toast.info("SOS sharing initiated!", {
      description: "Preparing to send alerts to emergency contacts...",
    });

    if (navigator.share) {
      navigator.share({ title: "SARTHI SOS", text: msg })
        .then(() => toast.success("SOS shared successfully!"))
        .catch(() => toast.error("Sharing cancelled or failed."));
    } else {
      window.open(`sms:?body=${encodeURIComponent(msg)}`);
      toast.success("SMS client opened with emergency message!");
    }
  }

  async function saveContact() {
    if (!newC.name || !newC.phone) {
      toast.error("Please fill in both Name and Phone fields");
      return;
    }
    const next = [...contacts, { ...newC, id: crypto.randomUUID() }];
    setC(next);
    await setContacts(next);
    setNewC({ id: "", name: "", phone: "", relation: "" });
    toast.success("Emergency contact saved successfully!");
  }
  async function removeContact(id: string) {
    const next = contacts.filter((c) => c.id !== id);
    setC(next);
    await setContacts(next);
    toast.success("Contact removed");
  }

  return (
    <div className="space-y-5">
      <header>
        <h1 className="text-xl font-semibold">{t("sos.title")}</h1>
        <p className="text-sm text-muted-foreground">One tap: locate, alert contacts, and reach the nearest trauma centre.</p>
      </header>

      <div className="grid grid-cols-2 gap-3">
        <a href="tel:112" className="flex items-center justify-center gap-2 rounded-2xl bg-destructive py-5 text-base font-bold text-destructive-foreground shadow-sm active:scale-[0.98]">
          <Phone className="h-5 w-5" /> {t("sos.call_112")}
        </a>
        <button onClick={shareSOS} className="flex items-center justify-center gap-2 rounded-2xl border border-destructive bg-destructive/10 py-5 text-base font-bold text-destructive">
          <Share2 className="h-5 w-5" /> {t("sos.big_button")}
        </button>
      </div>

      <button onClick={locate} className="flex w-full items-center justify-center gap-2 rounded-md border border-border bg-card py-2.5 text-sm font-medium hover:bg-accent">
        <MapPin className="h-4 w-4" /> {pos ? `${pos.lat.toFixed(4)}, ${pos.lng.toFixed(4)}` : "Get my location"}
      </button>

      <section>
        <h2 className="mb-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">{t("sos.nearest")}</h2>
        <ul className="space-y-2">
          {nearest.map((f, i) => {
            const p = f.properties as { name: string; phone: string; level: string; city: string };
            const [lng, lat] = f.geometry.coordinates as [number, number];
            return (
              <li key={i} className="flex items-center justify-between rounded-xl border border-border bg-card p-3">
                <div>
                  <div className="text-sm font-semibold">{p.name}</div>
                  <div className="text-xs text-muted-foreground">{p.level} · {p.city}{pos ? ` · ${f._d.toFixed(1)} km` : ""}</div>
                </div>
                <div className="flex gap-1.5">
                  <a href={`tel:${p.phone}`} className="rounded-md bg-primary p-2 text-primary-foreground"><Phone className="h-4 w-4" /></a>
                  <a target="_blank" rel="noreferrer" href={`https://maps.google.com/?q=${lat},${lng}`} className="rounded-md border border-border p-2"><MapPin className="h-4 w-4" /></a>
                </div>
              </li>
            );
          })}
        </ul>
      </section>

      <section>
        <h2 className="mb-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">{t("sos.contacts")}</h2>
        <ul className="mb-3 space-y-2">
          {contacts.length === 0 && <li className="rounded-xl border border-dashed border-border p-4 text-center text-xs text-muted-foreground">No emergency contacts yet.</li>}
          {contacts.map((c) => (
            <li key={c.id} className="flex items-center justify-between rounded-xl border border-border bg-card p-3">
              <div>
                <div className="text-sm font-semibold">{c.name}</div>
                <div className="text-xs text-muted-foreground font-mono">{c.phone}{c.relation ? ` · ${c.relation}` : ""}</div>
              </div>
              <div className="flex gap-1.5">
                <a href={`tel:${c.phone}`} className="rounded-md bg-primary p-2 text-primary-foreground"><Phone className="h-4 w-4" /></a>
                <button onClick={() => removeContact(c.id)} className="rounded-md border border-border p-2"><Trash2 className="h-4 w-4" /></button>
              </div>
            </li>
          ))}
        </ul>
        <div className="grid grid-cols-[1fr_1fr_1fr_auto] gap-2">
          <input placeholder="Name *" value={newC.name} onChange={(e) => setNewC({ ...newC, name: e.target.value })} className="rounded-md border border-input bg-background px-3 py-2 text-sm" />
          <input placeholder="Phone *" value={newC.phone} onChange={(e) => setNewC({ ...newC, phone: e.target.value })} className="rounded-md border border-input bg-background px-3 py-2 text-sm font-mono" />
          <input placeholder="Relation" value={newC.relation ?? ""} onChange={(e) => setNewC({ ...newC, relation: e.target.value })} className="rounded-md border border-input bg-background px-3 py-2 text-sm" />
          <button onClick={saveContact} className="rounded-md bg-primary px-3 text-sm font-medium text-primary-foreground"><Plus className="h-4 w-4" /></button>
        </div>
      </section>

      <p className="flex items-start gap-2 rounded-md bg-warning/10 p-3 text-xs text-warning-foreground">
        <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" />
        Location and contacts stay on this device. SOS share uses your phone's native messenger when available.
      </p>
    </div>
  );
}
