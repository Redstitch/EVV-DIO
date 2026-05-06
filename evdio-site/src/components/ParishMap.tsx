"use client";

import { useState, useMemo } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { parishes, deaneryColors, type Parish } from "@/data/parishes";

// Fix Leaflet default marker icon issue with Next.js
const createIcon = (color: string) =>
  L.divIcon({
    className: "",
    html: `<svg width="28" height="36" viewBox="0 0 28 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 0C6.268 0 0 6.268 0 14c0 10.5 14 22 14 22s14-11.5 14-22C28 6.268 21.732 0 14 0z" fill="${color}"/>
      <circle cx="14" cy="13" r="5" fill="white" opacity="0.9"/>
    </svg>`,
    iconSize: [28, 36],
    iconAnchor: [14, 36],
    popupAnchor: [0, -36],
  });

function FitBounds({ parishes }: { parishes: Parish[] }) {
  const map = useMap();
  useMemo(() => {
    if (parishes.length > 0) {
      const bounds = L.latLngBounds(
        parishes.map((p) => [p.lat, p.lng])
      );
      map.fitBounds(bounds, { padding: [40, 40] });
    }
  }, [parishes, map]);
  return null;
}

export function ParishMap() {
  const [search, setSearch] = useState("");
  const [activeDeanery, setActiveDeanery] = useState<string | null>(null);

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
          p.deanery.toLowerCase().includes(q)
      );
    }
    return result;
  }, [search, activeDeanery]);

  const deaneries = ["South", "North", "East", "West"];

  return (
    <div>
      {/* Search + Filters */}
      <div style={{ marginBottom: 24 }}>
        <input
          type="text"
          placeholder="Search by parish name, city, or ZIP..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            width: "100%",
            padding: "14px 20px",
            fontSize: 15,
            fontFamily: "var(--sans)",
            border: "1px solid var(--line)",
            borderRadius: 999,
            background: "#fff",
            color: "var(--navy)",
            outline: "none",
            marginBottom: 16,
          }}
        />
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          <button
            onClick={() => setActiveDeanery(null)}
            style={{
              padding: "8px 18px",
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase" as const,
              fontFamily: "var(--sans)",
              borderRadius: 999,
              border: "1.5px solid",
              cursor: "pointer",
              transition: "all 0.2s",
              background: !activeDeanery ? "var(--navy)" : "transparent",
              color: !activeDeanery ? "#fff" : "var(--navy)",
              borderColor: !activeDeanery ? "var(--navy)" : "var(--line)",
            }}
          >
            All Deaneries
          </button>
          {deaneries.map((d) => (
            <button
              key={d}
              onClick={() => setActiveDeanery(activeDeanery === d ? null : d)}
              style={{
                padding: "8px 18px",
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase" as const,
                fontFamily: "var(--sans)",
                borderRadius: 999,
                border: "1.5px solid",
                cursor: "pointer",
                transition: "all 0.2s",
                background: activeDeanery === d ? deaneryColors[d] : "transparent",
                color: activeDeanery === d ? "#fff" : deaneryColors[d],
                borderColor: deaneryColors[d],
              }}
            >
              {d} Deanery
            </button>
          ))}
        </div>
      </div>

      {/* Map */}
      <div
        style={{
          borderRadius: 20,
          overflow: "hidden",
          border: "1px solid var(--line)",
          height: 500,
        }}
      >
        <MapContainer
          center={[38.3, -87.3]}
          zoom={8}
          style={{ height: "100%", width: "100%" }}
          scrollWheelZoom={false}
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
            >
              <Popup>
                <div style={{ fontFamily: "var(--sans)", minWidth: 180 }}>
                  <strong style={{ fontSize: 15, color: "var(--navy)", display: "block", marginBottom: 4 }}>
                    {parish.name}
                  </strong>
                  <span style={{ fontSize: 13, color: "var(--muted)" }}>
                    {parish.city}, {parish.state}
                  </span>
                  <span
                    style={{
                      display: "inline-block",
                      marginTop: 8,
                      fontSize: 10,
                      fontWeight: 700,
                      textTransform: "uppercase" as const,
                      letterSpacing: "0.12em",
                      color: deaneryColors[parish.deanery],
                    }}
                  >
                    {parish.deanery} Deanery
                  </span>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      {/* Results count */}
      <p
        style={{
          marginTop: 16,
          fontSize: 13,
          color: "var(--muted)",
          textAlign: "center",
        }}
      >
        Showing {filtered.length} of {parishes.length} parishes
      </p>

      {/* Parish list */}
      <div style={{ marginTop: 32 }}>
        <div className="interior-grid interior-grid-3">
          {filtered.map((parish, i) => (
            <div
              key={`${parish.name}-${parish.city}-${i}`}
              className="interior-card"
              style={{ cursor: "default" }}
            >
              <span
                style={{
                  display: "block",
                  fontSize: 10,
                  fontWeight: 700,
                  textTransform: "uppercase" as const,
                  letterSpacing: "0.14em",
                  color: deaneryColors[parish.deanery],
                  marginBottom: 6,
                }}
              >
                {parish.deanery} Deanery
              </span>
              <h3>{parish.name}</h3>
              <p>
                {parish.city}, {parish.state}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
