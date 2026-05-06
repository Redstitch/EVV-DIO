import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  getParishBySlug,
  getAllParishSlugs,
} from "@/data/parish-details";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllParishSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const parish = getParishBySlug(slug);
  if (!parish) return { title: "Parish Not Found" };
  return {
    title: `${parish.parish} Parish — ${parish.city} | Diocese of Evansville`,
    description: parish.history.slice(0, 160),
  };
}

const deaneryLabel: Record<string, string> = {
  South: "South Deanery",
  North: "North Deanery",
  East: "East Deanery",
  West: "West Deanery",
};

const deaneryColor: Record<string, string> = {
  South: "#005CBA",
  North: "#004E73",
  East: "#C0442F",
  West: "#D09000",
};

export default async function ParishDetailPage({ params }: Props) {
  const { slug } = await params;
  const parish = getParishBySlug(slug);

  if (!parish) {
    notFound();
  }

  const primarySite = parish.worshipSites[0];
  const heroImage = `/images/parishes/${slug}.jpg`;
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${primarySite.address}, ${primarySite.city}, ${primarySite.state} ${primarySite.zip}`
  )}`;

  return (
    <>
      <section className="feature-head" aria-labelledby="title">
        <div className="grid">
          <div className="text">
            <p className="kicker">Parishes &amp; Mass</p>
            <h1 id="title">
              {parish.parish} <em>Parish.</em>
            </h1>
            <p className="deck">{parish.city}, Indiana</p>
          </div>
          <div style={{
            position: "relative", overflow: "hidden",
            borderRadius: 20, margin: "40px 40px 40px 0",
            boxShadow: "0 8px 32px rgba(10,34,64,0.12)",
          }}>
            <Image
              src={heroImage}
              alt={`${parish.parish} Parish in ${parish.city}, Indiana`}
              fill
              sizes="(max-width: 960px) 100vw, 50vw"
              style={{ objectFit: "cover", objectPosition: "center 30%" }}
              priority
            />
          </div>
        </div>
      </section>

      <main id="main-content">
        <section className="page-content">
          <div style={{ maxWidth: 940, margin: "0 auto" }}>

            {/* ─── Header row: deanery + established ─── */}
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
              <span className="section-tag" style={{ background: deaneryColor[parish.deanery], color: "#fff", margin: 0 }}>
                {deaneryLabel[parish.deanery]}
              </span>
              <span style={{ fontSize: 13, color: "var(--muted)" }}>Est. {parish.established}</span>
            </div>

            {/* ─── History ─── */}
            <p style={{ fontSize: 17, lineHeight: 1.7, color: "var(--navy)", marginBottom: 36 }}>
              {parish.history}
            </p>

            {/* ─── Two-column: Contact + Mass Times ─── */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, marginBottom: 40 }}>

              {/* LEFT: Contact & Locations */}
              <div>
                <h3 style={{ fontFamily: "var(--serif)", fontSize: 24, fontWeight: 400, color: "var(--navy)", marginBottom: 16 }}>
                  Contact
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: "var(--navy)" }}>{primarySite.address}</div>
                    <div style={{ fontSize: 14, color: "var(--muted)" }}>{primarySite.city}, {primarySite.state} {primarySite.zip}</div>
                  </div>
                  <div style={{ fontSize: 14 }}>
                    <span style={{ color: "var(--muted)" }}>Phone </span>
                    <span style={{ fontWeight: 500 }}>{parish.phone}</span>
                  </div>
                  {parish.fax && (
                    <div style={{ fontSize: 14 }}>
                      <span style={{ color: "var(--muted)" }}>Fax </span>
                      <span style={{ fontWeight: 500 }}>{parish.fax}</span>
                    </div>
                  )}
                  {parish.email && (
                    <div style={{ fontSize: 14 }}>
                      <span style={{ color: "var(--muted)" }}>Email </span>
                      <a href={`mailto:${parish.email}`} style={{ fontWeight: 500, color: "var(--blue)" }}>{parish.email}</a>
                    </div>
                  )}
                  <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginTop: 4 }}>
                    {parish.website && (
                      <a href={parish.website} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ fontSize: 12, padding: "8px 20px" }}>
                        Parish Website <span className="arrow" aria-hidden="true">↗</span>
                      </a>
                    )}
                    <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ fontSize: 12, padding: "8px 20px" }}>
                      Get Directions <span className="arrow" aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>

                {/* Additional worship sites */}
                {parish.worshipSites.length > 1 && (
                  <div style={{ marginTop: 28, paddingTop: 20, borderTop: "1px solid var(--line)" }}>
                    <div style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--muted)", marginBottom: 12 }}>
                      Additional Worship Sites
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                      {parish.worshipSites.slice(1).map((ws, i) => (
                        <div key={i}>
                          <div style={{ fontSize: 14, fontWeight: 600, color: "var(--navy)" }}>{ws.church}</div>
                          <div style={{ fontSize: 13, color: "var(--muted)" }}>{ws.address}, {ws.city} {ws.zip}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* RIGHT: Mass Schedule */}
              <div>
                <h3 style={{ fontFamily: "var(--serif)", fontSize: 24, fontWeight: 400, color: "var(--navy)", marginBottom: 16 }}>
                  Mass Schedule
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                  {parish.massSchedule.map((m, i) => (
                    <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", padding: "10px 0", borderBottom: "1px solid var(--line)" }}>
                      <span style={{ fontSize: 14, fontWeight: 600, color: "var(--navy)" }}>{m.day}</span>
                      <span style={{ fontSize: 14, color: "var(--muted)", textAlign: "right", marginLeft: 16 }}>{m.time}</span>
                    </div>
                  ))}
                </div>
                <p style={{ fontSize: 12, color: "var(--muted)", marginTop: 12, lineHeight: 1.5 }}>
                  All times are local. Contact the parish office for Holy Day and holiday schedule changes.
                </p>
              </div>
            </div>

            {/* ─── Staff ─── */}
            <div style={{ paddingTop: 32, borderTop: "1px solid var(--line)" }}>
              <h3 style={{ fontFamily: "var(--serif)", fontSize: 24, fontWeight: 400, color: "var(--navy)", marginBottom: 6 }}>
                Parish Staff
              </h3>
              <div style={{ fontSize: 16, fontWeight: 600, color: "var(--navy)", marginBottom: 16 }}>
                {parish.pastor}
                <span style={{ fontSize: 12, fontWeight: 400, color: "var(--muted)", marginLeft: 8 }}>Pastor</span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 10 }}>
                {parish.staff.map((s, i) => (
                  <div key={i} style={{ fontSize: 14 }}>
                    <span style={{ fontWeight: 500 }}>{s.name}</span>
                    <span style={{ color: "var(--muted)", marginLeft: 6, fontSize: 12 }}>{s.title}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ─── School (if applicable) ─── */}
            {parish.school && (
              <div style={{ marginTop: 28, padding: "20px 24px", background: "var(--cream-xlt)", borderRadius: 14, border: "1px solid var(--line)" }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 4 }}>
                  <span style={{ fontSize: 15, fontWeight: 600, color: "var(--navy)" }}>{parish.school.name}</span>
                  <span style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--muted)" }}>Parish School</span>
                </div>
                <div style={{ display: "flex", gap: 24, flexWrap: "wrap", fontSize: 14, color: "var(--muted)" }}>
                  {parish.school.principal && <span>Principal: {parish.school.principal}</span>}
                  {parish.school.phone && <span>{parish.school.phone}</span>}
                </div>
              </div>
            )}

          </div>
        </section>

        {/* CTA */}
        <section className="section-band section-navy" style={{ textAlign: "center" }}>
          <h2 className="section-h2" style={{ color: "var(--cream)", maxWidth: "18ch", margin: "0 auto 16px" }}>
            Find your parish — <em style={{ color: "var(--bgold)" }}>come home.</em>
          </h2>
          <p style={{ color: "rgba(238,218,179,0.7)", maxWidth: 540, margin: "0 auto" }}>
            Every parish in the Diocese of Evansville is ready to welcome you.
          </p>
          <div style={{ marginTop: 32, display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/parishes" className="btn btn-primary" style={{ background: "var(--dgold)", color: "var(--navy)", borderColor: "var(--dgold)" }}>
              Parish Finder Map <span className="arrow" aria-hidden="true">→</span>
            </Link>
            <Link href="/parishes/mass-times" className="btn btn-primary" style={{ background: "transparent", color: "var(--cream)", borderColor: "rgba(238,218,179,0.4)" }}>
              Mass Times <span className="arrow" aria-hidden="true">→</span>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
