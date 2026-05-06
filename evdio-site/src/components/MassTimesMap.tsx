"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { massLocations, type MassLocation } from "@/data/mass-times";
import { getSlugForParish, getWebsiteForParish } from "@/data/parish-details";

const pinIcon = (color: string) =>
  L.divIcon({
    className: "",
    html: `<svg width="32" height="40" viewBox="0 0 32 40" fill="none"><path d="M16 0C7.164 0 0 7.164 0 16c0 12 16 24 16 24s16-12 16-24C32 7.164 24.836 0 16 0z" fill="${color}"/><rect x="14" y="8" width="4" height="16" rx="1" fill="white"/><rect x="9" y="13" width="14" height="4" rx="1" fill="white"/></svg>`,
    iconSize: [32, 40],
    iconAnchor: [16, 40],
    popupAnchor: [0, -40],
  });

function FitBounds({ locs }: { locs: MassLocation[] }) {
  const map = useMap();
  useMemo(() => {
    if (locs.length > 0) {
      map.fitBounds(L.latLngBounds(locs.map((l) => [l.lat, l.lng])), { padding: [40, 40] });
    }
  }, [locs, map]);
  return null;
}

function FlyTo({ loc }: { loc: MassLocation | null }) {
  const map = useMap();
  useEffect(() => {
    if (loc) map.flyTo([loc.lat, loc.lng], 14, { duration: 0.8 });
  }, [loc, map]);
  return null;
}

export function MassTimesMap() {
  const [search, setSearch] = useState("");
  const [dayFilter, setDayFilter] = useState<"all" | "saturday" | "sunday">("all");
  const [selected, setSelected] = useState<MassLocation | null>(null);
  const refs = useRef<Record<string, L.Marker>>({});

  const filtered = useMemo(() => {
    let result = massLocations;
    if (dayFilter === "saturday") result = result.filter((l) => l.saturday.length > 0);
    if (dayFilter === "sunday") result = result.filter((l) => l.sunday.length > 0);
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (l) =>
          l.church.toLowerCase().includes(q) ||
          l.parish.toLowerCase().includes(q) ||
          l.city.toLowerCase().includes(q) ||
          l.zip.includes(q) ||
          l.address.toLowerCase().includes(q)
      );
    }
    return result;
  }, [search, dayFilter]);

  function handleClick(loc: MassLocation) {
    setSelected(loc);
    const key = `${loc.church}-${loc.city}-${loc.address}`;
    const marker = refs.current[key];
    if (marker) marker.openPopup();
  }

  return (
    <div style={{ display: "grid", gridTemplateColumns: "380px 1fr", gap: 0, borderRadius: 20, overflow: "hidden", border: "1px solid var(--line)", height: 620 }}>
      {/* SIDEBAR */}
      <div style={{ background: "#fff", borderRight: "1px solid var(--line)", display: "flex", flexDirection: "column", height: 620, overflow: "hidden" }}>
        <div style={{ padding: "16px 16px 12px" }}>
          <input
            type="text"
            placeholder="Search by name, city, or ZIP..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ width: "100%", padding: "10px 14px", fontSize: 14, fontFamily: "var(--sans)", border: "1px solid var(--line)", borderRadius: 999, background: "var(--cream-xlt)", color: "var(--navy)", outline: "none" }}
          />
        </div>
        <div style={{ padding: "0 16px 12px", display: "flex", gap: 6 }}>
          {(["all", "saturday", "sunday"] as const).map((d) => (
            <button
              key={d}
              onClick={() => { setDayFilter(d); setSelected(null); }}
              style={{
                padding: "5px 12px", fontSize: 10, fontWeight: 700, letterSpacing: "0.08em",
                textTransform: "uppercase", fontFamily: "var(--sans)", borderRadius: 999,
                border: "1.5px solid", cursor: "pointer", transition: "all 0.2s",
                background: dayFilter === d ? "#005CBA" : "transparent",
                color: dayFilter === d ? "#fff" : "#005CBA",
                borderColor: "#005CBA",
              }}
            >
              {d === "all" ? "All" : d === "saturday" ? "Saturday" : "Sunday"}
            </button>
          ))}
        </div>
        <div style={{ padding: "0 16px 8px", fontSize: 11, color: "var(--muted)" }}>
          {filtered.length} locations
        </div>
        <div style={{ flex: 1, overflowY: "auto", borderTop: "1px solid var(--line)" }}>
          {filtered.map((loc, i) => {
            const key = `${loc.church}-${loc.city}-${loc.address}-${i}`;
            return (
              <button
                key={key}
                onClick={() => handleClick(loc)}
                style={{
                  display: "block", width: "100%", textAlign: "left",
                  padding: "12px 16px", border: "none", borderBottom: "1px solid var(--line)",
                  cursor: "pointer", fontFamily: "var(--sans)",
                  background: selected === loc ? "rgba(0,92,186,0.06)" : "transparent",
                  transition: "background 0.15s",
                }}
                onMouseEnter={(e) => { if (selected !== loc) e.currentTarget.style.background = "rgba(0,92,186,0.03)"; }}
                onMouseLeave={(e) => { if (selected !== loc) e.currentTarget.style.background = "transparent"; }}
              >
                <div style={{ fontSize: 14, fontWeight: 600, color: "var(--navy)", lineHeight: 1.3 }}>
                  {loc.church}
                </div>
                {loc.parish && (
                  <div style={{ fontSize: 11, color: "var(--muted)", marginTop: 1 }}>{loc.parish} Parish</div>
                )}
                <div style={{ fontSize: 11, color: "var(--muted)", marginTop: 3 }}>
                  {loc.address}, {loc.city}, {loc.state} {loc.zip}
                </div>
                <div style={{ display: "flex", gap: 16, marginTop: 6 }}>
                  {loc.saturday.length > 0 && (
                    <div>
                      <span style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#004E73" }}>Sat </span>
                      <span style={{ fontSize: 12, color: "var(--navy)", fontWeight: 500 }}>{loc.saturday.join(", ")}</span>
                    </div>
                  )}
                  {loc.sunday.length > 0 && (
                    <div>
                      <span style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#005CBA" }}>Sun </span>
                      <span style={{ fontSize: 12, color: "var(--navy)", fontWeight: 500 }}>{loc.sunday.join(", ")}</span>
                    </div>
                  )}
                </div>
                {(() => {
                  const pName = loc.parish || loc.church;
                  const slug = getSlugForParish(pName, loc.city);
                  const website = getWebsiteForParish(pName, loc.city);
                  return (slug || website) ? (
                    <div style={{ display: "flex", gap: 12, marginTop: 6, flexWrap: "wrap" }}>
                      {slug && (
                        <a href={`/parishes/${slug}`} onClick={(e) => e.stopPropagation()} style={{ fontSize: 11, color: "#005CBA", fontWeight: 600, textDecoration: "none" }}>
                          Parish Details →
                        </a>
                      )}
                      {website && (
                        <a href={website} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} style={{ fontSize: 11, color: "var(--muted)", fontWeight: 500, textDecoration: "none" }}>
                          Website ↗
                        </a>
                      )}
                    </div>
                  ) : null;
                })()}
              </button>
            );
          })}
        </div>
      </div>

      {/* MAP */}
      <div>
        <MapContainer center={[38.3, -87.3]} zoom={8} style={{ height: "100%", width: "100%" }} scrollWheelZoom={true}>
          <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <FitBounds locs={filtered} />
          <FlyTo loc={selected} />
          {filtered.map((loc, i) => {
            const key = `${loc.church}-${loc.city}-${loc.address}`;
            return (
              <Marker
                key={`${key}-${i}`}
                position={[loc.lat, loc.lng]}
                icon={pinIcon("#005CBA")}
                ref={(ref) => { if (ref) refs.current[key] = ref; }}
                eventHandlers={{ click: () => setSelected(loc) }}
              >
                <Popup>
                  <div style={{ fontFamily: "var(--sans)", minWidth: 240, padding: "4px 0" }}>
                    <strong style={{ fontSize: 15, color: "var(--navy)", display: "block", marginBottom: 2 }}>{loc.church}</strong>
                    {loc.parish && <span style={{ fontSize: 11, color: "var(--muted)", display: "block", marginBottom: 6 }}>{loc.parish} Parish</span>}
                    <span style={{ fontSize: 12, color: "var(--muted)", display: "block", marginBottom: 2 }}>{loc.address}</span>
                    <span style={{ fontSize: 12, color: "var(--muted)", display: "block", marginBottom: 2 }}>{loc.city}, {loc.state} {loc.zip}</span>
                    <span style={{ fontSize: 12, color: "var(--muted)", display: "block", marginBottom: 8 }}>{loc.phone}</span>
                    {loc.saturday.length > 0 && (
                      <div style={{ marginBottom: 4 }}>
                        <span style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#004E73" }}>Saturday: </span>
                        <span style={{ fontSize: 13, color: "var(--navy)", fontWeight: 500 }}>{loc.saturday.join(", ")}</span>
                      </div>
                    )}
                    {loc.sunday.length > 0 && (
                      <div style={{ marginBottom: 4 }}>
                        <span style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#005CBA" }}>Sunday: </span>
                        <span style={{ fontSize: 13, color: "var(--navy)", fontWeight: 500 }}>{loc.sunday.join(", ")}</span>
                      </div>
                    )}
                    {(() => {
                      const pName = loc.parish || loc.church;
                      const slug = getSlugForParish(pName, loc.city);
                      const website = getWebsiteForParish(pName, loc.city);
                      return (slug || website) ? (
                        <div style={{ display: "flex", gap: 12, marginTop: 8, flexWrap: "wrap" }}>
                          {slug && (
                            <a href={`/parishes/${slug}`} style={{ fontSize: 11, fontWeight: 700, color: "#005CBA", textDecoration: "none", letterSpacing: "0.08em", textTransform: "uppercase" as const }}>
                              Parish Details →
                            </a>
                          )}
                          {website && (
                            <a href={website} target="_blank" rel="noopener noreferrer" style={{ fontSize: 11, fontWeight: 700, color: "var(--muted)", textDecoration: "none", letterSpacing: "0.08em", textTransform: "uppercase" as const }}>
                              Website ↗
                            </a>
                          )}
                        </div>
                      ) : null;
                    })()}
                  </div>
                </Popup>
              </Marker>
            );
          })}
        </MapContainer>
      </div>
    </div>
  );
}
