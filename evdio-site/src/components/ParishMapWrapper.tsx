"use client";

import dynamic from "next/dynamic";

const ParishMap = dynamic(
  () => import("@/components/ParishMap").then((mod) => mod.ParishMap),
  {
    ssr: false,
    loading: () => (
      <div
        style={{
          height: 500,
          borderRadius: 20,
          background: "var(--cream-xlt)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "var(--muted)",
          fontFamily: "var(--sans)",
        }}
      >
        Loading map...
      </div>
    ),
  }
);

export function ParishMapWrapper() {
  return <ParishMap />;
}
