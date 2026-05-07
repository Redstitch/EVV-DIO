import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Meeting Rooms & Spaces",
  description:
    "Reserve meeting rooms and event spaces at the Catholic Center, Sarto Retreat Center, and parish halls across the Diocese of Evansville.",
};

const spaces = [
  {
    name: "Catholic Center",
    address: "4200 N. Kentucky Avenue, Evansville, IN 47711",
    description: "The diocesan offices include several conference rooms and a large meeting hall available for parish groups, ministry meetings, and diocesan events.",
    capacity: "20-200 guests",
    amenities: ["AV equipment", "Wi-Fi", "Catering kitchen", "Accessible entrance"],
    contact: "(812) 424-5536",
  },
  {
    name: "Sarto Retreat Center",
    address: "4200 Kentucky Avenue, Evansville, IN 47714",
    description: "A peaceful retreat setting with overnight accommodations, a chapel, conference rooms, and dining facilities. Ideal for retreats, formation days, and team-building events.",
    capacity: "Up to 60 overnight, 100 day",
    amenities: ["Chapel", "Overnight rooms", "Full kitchen", "Walking grounds"],
    contact: "(812) 464-1042",
  },
  {
    name: "Parish Halls",
    address: "Various locations across the diocese",
    description: "Many parishes in the diocese have fellowship halls, meeting rooms, and classrooms available for community use. Contact individual parishes to inquire about availability and rates.",
    capacity: "Varies by parish",
    amenities: ["Kitchen facilities", "Tables & chairs", "Parking", "AV in some locations"],
    contact: "See parish directory",
  },
];

export default function SpacesPage() {
  return (
    <>
      <section className="feature-head" aria-labelledby="title">
        <div className="grid">
          <div className="text">
            <p className="kicker">EVENTS</p>
            <h1 id="title">Meeting <em>Spaces.</em></h1>
            <p className="deck">Reserve spaces for meetings, events, and gatherings across the diocese.</p>
          </div>
          <figure className="photo">
            <Image
              src="/images/stock/cathedral-interior.jpg"
              alt="Cathedral interior"
              fill
              sizes="(max-width: 960px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
              priority
            />
          </figure>
        </div>
      </section>

      <main id="main-content">
        <section className="page-content">
          <div className="section-head">
            <span className="section-tag">Venues</span>
            <h2 className="section-h2">Available Spaces</h2>
          </div>

          <div className="interior-grid interior-grid-3">
            {spaces.map((s) => (
              <div key={s.name} className="interior-card" style={{ cursor: "default", display: "flex", flexDirection: "column" }}>
                <h3>{s.name}</h3>
                <p style={{ fontSize: 12, color: "var(--muted)", marginBottom: 12 }}>{s.address}</p>
                <p style={{ flex: 1 }}>{s.description}</p>
                <div style={{ background: "var(--cream-lt)", borderRadius: 12, padding: 16, marginTop: 16, marginBottom: 16 }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: "var(--navy)", textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: 4 }}>Capacity</div>
                  <div style={{ fontSize: 14, color: "var(--muted)" }}>{s.capacity}</div>
                </div>
                <div style={{ marginBottom: 16 }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: "var(--navy)", textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: 8 }}>Amenities</div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {s.amenities.map((a) => (
                      <span key={a} style={{ background: "rgba(196,164,105,0.12)", color: "var(--navy)", fontSize: 11, padding: "3px 10px", borderRadius: 6 }}>
                        {a}
                      </span>
                    ))}
                  </div>
                </div>
                <div style={{ fontSize: 14, color: "var(--blue)", fontWeight: 600 }}>{s.contact}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Reservation Guidelines */}
        <section className="page-content">
          <div className="section-head">
            <span className="section-tag">Information</span>
            <h2 className="section-h2">Reservation Guidelines</h2>
          </div>

          <div className="interior-grid interior-grid-2">
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>How to Reserve</h3>
              <ol style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 10, marginTop: 12 }}>
                <li style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 14, color: "var(--muted)" }}>
                  <span style={{ color: "var(--dgold)", fontWeight: 700 }}>1.</span>
                  Contact the facility directly by phone or email.
                </li>
                <li style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 14, color: "var(--muted)" }}>
                  <span style={{ color: "var(--dgold)", fontWeight: 700 }}>2.</span>
                  Provide the date, time, expected attendance, and purpose of your event.
                </li>
                <li style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 14, color: "var(--muted)" }}>
                  <span style={{ color: "var(--dgold)", fontWeight: 700 }}>3.</span>
                  Complete the reservation form and submit any required deposit.
                </li>
                <li style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 14, color: "var(--muted)" }}>
                  <span style={{ color: "var(--dgold)", fontWeight: 700 }}>4.</span>
                  You will receive a confirmation with setup instructions and policies.
                </li>
              </ol>
            </div>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Policies</h3>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 10, marginTop: 12 }}>
                <li style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 14, color: "var(--muted)" }}>
                  <span style={{ color: "var(--dgold)", marginTop: 2 }}>&#8226;</span>
                  Diocesan and parish events receive priority scheduling.
                </li>
                <li style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 14, color: "var(--muted)" }}>
                  <span style={{ color: "var(--dgold)", marginTop: 2 }}>&#8226;</span>
                  All events must be consistent with the mission of the Catholic Church.
                </li>
                <li style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 14, color: "var(--muted)" }}>
                  <span style={{ color: "var(--dgold)", marginTop: 2 }}>&#8226;</span>
                  Proof of liability insurance may be required for outside groups.
                </li>
                <li style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 14, color: "var(--muted)" }}>
                  <span style={{ color: "var(--dgold)", marginTop: 2 }}>&#8226;</span>
                  Facilities must be left clean and in their original arrangement.
                </li>
              </ul>
            </div>
          </div>

          <div style={{ marginTop: 40, textAlign: "center" }}>
            <Link href="/events" className="btn-gold">
              Back to Events
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
