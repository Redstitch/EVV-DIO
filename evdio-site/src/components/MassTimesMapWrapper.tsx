"use client";

import dynamic from "next/dynamic";

const MassTimesMap = dynamic(
  () => import("@/components/MassTimesMap").then((mod) => mod.MassTimesMap),
  {
    ssr: false,
    loading: () => (
      <div style={{ height: 620, borderRadius: 20, background: "var(--cream-xlt)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--muted)", fontFamily: "var(--sans)" }}>
        Loading map...
      </div>
    ),
  }
);

export function MassTimesMapWrapper() {
  return <MassTimesMap />;
}
