import { useEffect, useMemo } from "react";
import { MapContainer, TileLayer, Marker, Circle, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import * as turf from "@turf/turf";
import spots from "@/data/irad_blackspots.json";

// Fix default marker icon paths under bundlers
delete (L.Icon.Default.prototype as unknown as { _getIconUrl?: unknown })._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const colorFor = (sev: string) =>
  sev === "high" ? "#dc2626" : sev === "medium" ? "#f59e0b" : "#16a34a";

function FlyTo({ pos }: { pos: { lat: number; lng: number } | null }) {
  const map = useMap();
  useEffect(() => {
    if (pos) map.flyTo([pos.lat, pos.lng], 14, { duration: 0.8 });
  }, [pos, map]);
  return null;
}

export function SafetyMap({
  pos,
  onProximity,
}: {
  pos: { lat: number; lng: number } | null;
  onProximity: (name: string) => void;
}) {
  const center: [number, number] = pos ? [pos.lat, pos.lng] : [19.076, 72.8777];

  useEffect(() => {
    if (!pos) return;
    const here = turf.point([pos.lng, pos.lat]);
    for (const f of spots.features) {
      const d = turf.distance(here, turf.point(f.geometry.coordinates as [number, number]), { units: "kilometers" });
      if (d < 0.5) {
        onProximity((f.properties as { name: string }).name);
        return;
      }
    }
  }, [pos, onProximity]);

  const features = useMemo(() => spots.features, []);

  return (
    <MapContainer center={center} zoom={pos ? 14 : 11} className="h-full w-full" scrollWheelZoom>
      <TileLayer
        attribution='&copy; OpenStreetMap'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <FlyTo pos={pos} />
      {features.map((f, i) => {
        const [lng, lat] = f.geometry.coordinates as [number, number];
        const p = f.properties as { name: string; city: string; severity: string; incidents_3y: number };
        const c = colorFor(p.severity);
        return (
          <Circle key={i} center={[lat, lng]} radius={500} pathOptions={{ color: c, fillColor: c, fillOpacity: 0.15, weight: 1 }}>
            <Popup>
              <div className="text-sm">
                <div className="font-semibold">{p.name}</div>
                <div className="text-xs opacity-70">{p.city}</div>
                <div className="mt-1 text-xs">Severity: <span style={{ color: c }} className="font-semibold uppercase">{p.severity}</span></div>
                <div className="text-xs">Incidents (3y): {p.incidents_3y}</div>
              </div>
            </Popup>
          </Circle>
        );
      })}
      {pos && <Marker position={[pos.lat, pos.lng]}><Popup>You are here</Popup></Marker>}
    </MapContainer>
  );
}
