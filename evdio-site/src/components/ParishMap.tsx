"use client";

import { useState, useMemo } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { parishes, deaneryColors, type Parish } from "@/data/parishes";

// Cross-shaped pin icon
const createIcon = (color: string) =>
  L.divIcon({
    className: "",
    html: `<svg width="32" height="40" viewBox="0 0 32 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 0C7.164 0 0 7.164 0 16c0 12 16 24 16 24s16-12 16-24C32 7.164 24.836 0 16 0z" fill="${color}"/>
      <rect x="14" y="8" width="4" height="16" rx="1" fill="white"/>
      <rect x="9" y="13" width="14" height="4" rx="1" fill="white"/>
    </svg>`,
    iconSize: [32, 40],
    iconAnchor: [16, 40],
    popupAnchor: [0, -40],
  });

function FitBounds({ parishes: ps }: { parishes: Parish[] }) {
  const map = useMap();
  useMemo(() => {
    if (ps.length > 0) {
      const bounds = L.latLngBounds(ps.map((p) => [p.lat, p.lng]));
      map.fitBounds(bounds, { padding: [40, 40] });
    }
  }, [ps, map]);
  return null;
}

export function ParishMap() {
  const [search, setSearch] = useState("");
  const [activeDeanery, setActiveDeanery] = useState<string | null>(null);
  const [selectedParish, setSelectedParish] = useState<Parish | null>(null);

  const filtered = useMemo(() => {
    let result = parishes;
    if (activeDeanery) {
      result = result.filter((p) => p.deanery === activeDeanery);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.city.toLowerCase().includes(q) ||
          (p.address && p.address.toLowerCase().includes(q))
      );
    }
    return result;
  }, [search, activeDeanery]);

  const deaneries = ["South", "North", "East", "West"];

  return (
    <div style={{ display: "grid", gridTemplateColumns: "360px 1fr", gap: 0, borderRadius: 20, overflow: "hidden", border: "1px solid var(--line)", minHeight: 600 }}>
      {/* ─── SIDEBAR ─── */}
      <div style={{ background: "#fff", borderRight: "1px solid var(--line)", display: "flex", flexDirection: "column" }}>
        {/* Search */}
        <div style={{ padding: "16px 16px 12px" }}>
          <input
            type="text"
            placeholder="Search parishes..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              width: "100%", padding: "10px 14px", fontSize: 14,
              fontFamily: "var(--sans)", border: "1px solid var(--line)",
              borderRadius: 999, background: "var(--cream-xlt)",
              color: "var(--navy)", outline: "none",
            }}
          />
        </div>

        {/* Deanery filters */}
        <div style={{ padding: "0 16px 12px", display: "flex", gap: 6, flexWrap: "wrap" }}>
          <button
            onClick={() => setActiveDeanery(null)}
            style={{
              padding: "5px 12px", fontSize: 10, fontWeight: 700,
              letterSpacing: "0.08em", textTransform: "uppercase" as const,
              fontFamily: "var(--sans)", borderRadius: 999, border: "1.5px solid",
              cursor: "pointer", transition: "all 0.2s",
              background: !activeDeanery ? "var(--navy)" : "transparent",
              color: !activeDeanery ? "#fff" : "var(--navy)",
              borderColor: !activeDeanery ? "var(--navy)" : "var(--line)",
            }}
          >
            All
          </button>
          {deaneries.map((d) => (
            <button
              key={d}
              onClick={() => setActiveDeanery(activeDeanery === d ? null : d)}
              style={{
                padding: "5px 12px", fontSize: 10, fontWeight: 700,
                letterSpacing: "0.08em", textTransform: "uppercase" as const,
                fontFamily: "var(--sans)", borderRadius: 999, border: "1.5px solid",
                cursor: "pointer", transition: "all 0.2s",
                background: activeDeanery === d ? deaneryColors[d] : "transparent",
                color: activeDeanery === d ? "#fff" : deaneryColors[d],
                borderColor: deaneryColors[d],
              }}
            >
              {d}
            </button>
          ))}
        </div>

        {/* Count */}
        <div style={{ padding: "0 16px 8px", fontSize: 11, color: "var(--muted)" }}>
          {filtered.length} of {parishes.length} parishes
        </div>

        {/* Parish list */}
        <div style={{ flex: 1, overflowY: "auto", borderTop: "1px solid var(--line)" }}>
          {filtered.map((parish, i) => (
            <button
              key={`${parish.name}-${parish.city}-${i}`}
              onClick={() => setSelectedParish(parish)}
              style={{
                display: "block", width: "100%", textAlign: "left",
                padding: "14px 16px", border: "none", borderBottom: "1px solid var(--line)",
                cursor: "pointer", fontFamily: "var(--sans)",
                background: selectedParish === parish ? "rgba(0,92,186,0.06)" : "transparent",
                transition: "background 0.15s",
              }}
              onMouseEnter={(e) => { if (selectedParish !== parish) e.currentTarget.style.background = "rgba(0,92,186,0.03)"; }}
              onMouseLeave={(e) => { if (selectedParish !== parish) e.currentTarget.style.background = "transparent"; }}
            >
              <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                <div style={{
                  width: 8, height: 8, borderRadius: "50%", flexShrink: 0, marginTop: 5,
                  background: deaneryColors[parish.deanery],
                }} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 14, fontWeight: 600, color: "var(--navy)", lineHeight: 1.3 }}>
                    {parish.name}
                  </div>
                  <div style={{ fontSize: 12, color: "var(--muted)", marginTop: 2 }}>
                    {parish.city}, {parish.state}
                  </div>
                  {parish.address && (
                    <div style={{ fontSize: 11, color: "var(--muted)", marginTop: 2, opacity: 0.7 }}>
                      {parish.address}
                    </div>
                  )}
                  {parish.churches && parish.churches.length > 1 && (
                    <div style={{ fontSize: 10, color: "#005CBA", fontWeight: 600, marginTop: 4, textTransform: "uppercase" as const, letterSpacing: "0.08em" }}>
                      {parish.churches.length} church locations
                    </div>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* ─── MAP ─── */}
      <div>
        <MapContainer
          center={[38.3, -87.3]}
          zoom={8}
          style={{ height: "100%", width: "100%", minHeight: 600 }}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <FitBounds parishes={filtered} />
          {filtered.map((parish, i) => (
            <Marker
              key={`${parish.name}-${parish.city}-${i}`}
              position={[parish.lat, parish.lng]}
              icon={createIcon(deaneryColors[parish.deanery])}
              eventHandlers={{
                click: () => setSelectedParish(parish),
              }}
            >
              <Popup>
                <div style={{ fontFamily: "var(--sans)", minWidth: 220, padding: "4px 0" }}>
                  <strong style={{ fontSize: 15, color: "var(--navy)", display: "block", marginBottom: 4, lineHeight: 1.3 }}>
                    {parish.name}
                  </strong>
                  {parish.address && (
                    <span style={{ fontSize: 12, color: "var(--muted)", display: "block", marginBottom: 4 }}>
                      {parish.address}<br />
                      {parish.city}, {parish.state}
                    </span>
                  )}
                  {!parish.address && (
                    <span style={{ fontSize: 12, color: "var(--muted)", display: "block", marginBottom: 4 }}>
                      {parish.city}, {parish.state}
                    </span>
                  )}
                  <span style={{
                    display: "inline-block", marginTop: 4, fontSize: 10,
                    fontWeight: 700, textTransform: "uppercase" as const,
                    letterSpacing: "0.1em", color: deaneryColors[parish.deanery],
                    padding: "3px 8px", borderRadius: 999,
                    background: `${deaneryColors[parish.deanery]}15`,
                  }}>
                    {parish.deanery} Deanery
                  </span>
                  {parish.churches && parish.churches.length > 1 && (
                    <div style={{ marginTop: 8, borderTop: "1px solid #eee", paddingTop: 8, fontSize: 11, color: "var(--muted)" }}>
                      <strong style={{ display: "block", marginBottom: 4, color: "var(--navy)", fontSize: 11 }}>Church Locations:</strong>
                      {parish.churches.map((c, ci) => (
                        <div key={ci} style={{ marginBottom: 3 }}>
                          {c.name} — {c.address}
                        </div>
                      ))}
                    </div>
                  )}
                  {parish.website && (
                    <a
                      href={parish.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-block", marginTop: 10, fontSize: 11,
                        fontWeight: 700, color: "#005CBA", textDecoration: "none",
                        letterSpacing: "0.08em", textTransform: "uppercase" as const,
                      }}
                    >
                      Visit Parish Website →
                    </a>
                  )}
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}
