"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { parishLocations, deaneryColors, type ParishLocation } from "@/data/parishes";

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

function FitBounds({ locations }: { locations: ParishLocation[] }) {
  const map = useMap();
  useMemo(() => {
    if (locations.length > 0) {
      const bounds = L.latLngBounds(locations.map((p) => [p.lat, p.lng]));
      map.fitBounds(bounds, { padding: [40, 40] });
    }
  }, [locations, map]);
  return null;
}

function FlyTo({ location }: { location: ParishLocation | null }) {
  const map = useMap();
  useEffect(() => {
    if (location) {
      map.flyTo([location.lat, location.lng], 14, { duration: 0.8 });
    }
  }, [location, map]);
  return null;
}

export function ParishMap() {
  const [search, setSearch] = useState("");
  const [activeDeanery, setActiveDeanery] = useState<string | null>(null);
  const [selected, setSelected] = useState<ParishLocation | null>(null);
  const markerRefs = useRef<Record<string, L.Marker>>({});

  const filtered = useMemo(() => {
    let result = parishLocations;
    if (activeDeanery) {
      result = result.filter((p) => p.deanery === activeDeanery);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (p) =>
          p.parish.toLowerCase().includes(q) ||
          p.church.toLowerCase().includes(q) ||
          p.city.toLowerCase().includes(q) ||
          p.zip.includes(q) ||
          p.address.toLowerCase().includes(q)
      );
    }
    return result;
  }, [search, activeDeanery]);

  const deaneries = ["South", "North", "East", "West"];

  function handleSidebarClick(loc: ParishLocation) {
    setSelected(loc);
    const key = `${loc.church}-${loc.city}`;
    const marker = markerRefs.current[key];
    if (marker) marker.openPopup();
  }

  return (
    <div style={{ display: "grid", gridTemplateColumns: "380px 1fr", gap: 0, borderRadius: 20, overflow: "hidden", border: "1px solid var(--line)", height: 620 }}>
      {/* ─── SIDEBAR ─── */}
      <div style={{ background: "#fff", borderRight: "1px solid var(--line)", display: "flex", flexDirection: "column", height: 620, overflow: "hidden" }}>
        <div style={{ padding: "16px 16px 12px" }}>
          <input
            type="text"
            placeholder="Search by name, city, or ZIP..."
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

        <div style={{ padding: "0 16px 12px", display: "flex", gap: 6, flexWrap: "wrap" }}>
          <button
            onClick={() => { setActiveDeanery(null); setSelected(null); }}
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
              onClick={() => { setActiveDeanery(activeDeanery === d ? null : d); setSelected(null); }}
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

        <div style={{ padding: "0 16px 8px", fontSize: 11, color: "var(--muted)" }}>
          {filtered.length} locations
        </div>

        <div style={{ flex: 1, overflowY: "auto", borderTop: "1px solid var(--line)" }}>
          {filtered.map((loc, i) => (
            <button
              key={`${loc.church}-${loc.city}-${i}`}
              onClick={() => handleSidebarClick(loc)}
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
              <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", flexShrink: 0, marginTop: 5, background: deaneryColors[loc.deanery] }} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 14, fontWeight: 600, color: "var(--navy)", lineHeight: 1.3 }}>
                    {loc.church}
                  </div>
                  {loc.church !== loc.parish && (
                    <div style={{ fontSize: 11, color: "var(--muted)", marginTop: 1 }}>
                      {loc.parish} Parish
                    </div>
                  )}
                  <div style={{ fontSize: 11, color: "var(--muted)", marginTop: 3 }}>
                    {loc.address}, {loc.city}, {loc.state} {loc.zip}
                  </div>
                  <div style={{ fontSize: 11, color: "var(--navy)", marginTop: 2, fontWeight: 500 }}>
                    {loc.pastor}
                  </div>
                  {loc.website && (
                    <a
                      href={loc.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      style={{ fontSize: 11, color: "#005CBA", fontWeight: 600, marginTop: 4, display: "inline-block", textDecoration: "none" }}
                    >
                      Visit Website →
                    </a>
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
          style={{ height: "100%", width: "100%" }}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <FitBounds locations={filtered} />
          <FlyTo location={selected} />
          {filtered.map((loc, i) => (
            <Marker
              key={`${loc.church}-${loc.city}-${i}`}
              position={[loc.lat, loc.lng]}
              icon={createIcon(deaneryColors[loc.deanery])}
              ref={(ref) => {
                if (ref) markerRefs.current[`${loc.church}-${loc.city}`] = ref;
              }}
              eventHandlers={{ click: () => setSelected(loc) }}
            >
              <Popup>
                <div style={{ fontFamily: "var(--sans)", minWidth: 220, padding: "4px 0" }}>
                  <strong style={{ fontSize: 15, color: "var(--navy)", display: "block", marginBottom: 2, lineHeight: 1.3 }}>
                    {loc.church}
                  </strong>
                  {loc.church !== loc.parish && (
                    <span style={{ fontSize: 11, color: "var(--muted)", display: "block", marginBottom: 6 }}>
                      {loc.parish} Parish
                    </span>
                  )}
                  <span style={{ fontSize: 12, color: "var(--muted)", display: "block", marginBottom: 2 }}>
                    {loc.address}
                  </span>
                  <span style={{ fontSize: 12, color: "var(--muted)", display: "block", marginBottom: 2 }}>
                    {loc.city}, {loc.state} {loc.zip}
                  </span>
                  <span style={{ fontSize: 12, color: "var(--muted)", display: "block", marginBottom: 6 }}>
                    {loc.phone}
                  </span>
                  <span style={{ fontSize: 12, color: "var(--navy)", display: "block", fontWeight: 500, marginBottom: 8 }}>
                    {loc.pastor}
                  </span>
                  <span style={{ display: "block", marginBottom: 8, fontSize: 10, fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.1em", color: deaneryColors[loc.deanery] }}>
                    {loc.deanery} Deanery
                  </span>
                  {loc.website && (
                    <a
                      href={loc.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ display: "block", fontSize: 11, fontWeight: 700, color: "#005CBA", textDecoration: "none", letterSpacing: "0.08em", textTransform: "uppercase" as const }}
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
