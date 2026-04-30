import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Events | Diocese of Evansville",
  description:
    "Upcoming events, retreats, and gatherings across the Diocese of Evansville. Find Mass schedules, conferences, retreats, and community events.",
};

const upcomingEvents = [
  { month: "Apr", day: "12", title: "Marriage & Family Life Conference", location: "Sarto Retreat Center", category: "Conference" },
  { month: "Apr", day: "19", title: "Youth Encounter Weekend", location: "Catholic Center, Evansville", category: "Youth" },
  { month: "Apr", day: "25", title: "Diocesan Pastoral Council Meeting", location: "Catholic Center, Evansville", category: "Governance" },
  { month: "May", day: "3", title: "Spring Ordination Mass", location: "St. Benedict Cathedral, Evansville", category: "Liturgy" },
  { month: "May", day: "10", title: "Catholic Schools Gala", location: "Old National Events Plaza", category: "Fundraiser" },
  { month: "May", day: "17", title: "Deacon Formation Day", location: "Sarto Retreat Center", category: "Formation" },
  { month: "Jun", day: "7", title: "Corpus Christi Procession", location: "Multiple Parish Locations", category: "Liturgy" },
  { month: "Jun", day: "14", title: "Summer Theology Institute", location: "University of Southern Indiana", category: "Education" },
];

export default function EventsPage() {
  return (
    <>
      <section className="feature-head" aria-labelledby="title">
        <div className="grid">
          <div className="text">
            <p className="kicker">EVENTS & GATHERINGS</p>
            <h1 id="title">Events <em>Calendar.</em></h1>
            <p className="deck">Worship, fellowship, and community across the Diocese of Evansville.</p>
          </div>
          <figure className="photo">
            <Image
              src="/images/stock/community-service.jpg"
              alt="Community gathering"
              fill
              sizes="(max-width: 960px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
              priority
            />
          </figure>
        </div>
      </section>

      <main id="main-content">
        {/* Upcoming Events */}
        <section className="page-content section-cream">
          <div className="section-head">
            <span className="section-tag">Coming Up</span>
            <h2 className="section-h2">Upcoming Events</h2>
            <p className="section-desc">
              Join us for worship, learning, and fellowship throughout the diocese.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {upcomingEvents.map((evt) => (
              <div
                key={`${evt.month}-${evt.day}-${evt.title}`}
                className="interior-card"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 24,
                  padding: "20px 28px",
                  cursor: "default",
                }}
              >
                <div style={{ flexShrink: 0, width: 60, textAlign: "center" }}>
                  <span style={{ display: "block", fontSize: 11, textTransform: "uppercase", letterSpacing: 2, color: "var(--gold)", fontWeight: 700 }}>{evt.month}</span>
                  <span style={{ display: "block", fontFamily: "var(--font-heading)", fontSize: 32, fontWeight: 700, color: "var(--navy)", lineHeight: 1 }}>{evt.day}</span>
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <h3 style={{ fontSize: 18, marginBottom: 2 }}>{evt.title}</h3>
                  <p style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13 }}>
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="var(--text-light)" aria-hidden="true">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                    </svg>
                    {evt.location}
                  </p>
                </div>
                <span style={{ display: "inline-block", background: "var(--cream)", color: "var(--navy)", fontSize: 11, fontWeight: 700, padding: "5px 14px", borderRadius: 20, textTransform: "uppercase", letterSpacing: 0.5, flexShrink: 0 }}>
                  {evt.category}
                </span>
              </div>
            ))}
          </div>
        </section>

        <div className="page-content" style={{ paddingTop: 0, paddingBottom: 0 }}>
          <hr className="section-divider" />
        </div>

        {/* Category Cards */}
        <section className="page-content">
          <div className="section-head">
            <span className="section-tag">Browse by Type</span>
            <h2 className="section-h2">Retreats, Spaces &amp; More</h2>
          </div>

          <div className="interior-grid interior-grid-3">
            <Link href="/events/retreats" className="interior-card">
              <div className="interior-card-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M14 6l-3.75 5 2.85 3.8-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22L14 6z" />
                </svg>
              </div>
              <h3>Retreats</h3>
              <p>Step away from the everyday and deepen your relationship with God at the Sarto Retreat Center and other venues across the diocese.</p>
            </Link>

            <Link href="/events/spaces" className="interior-card">
              <div className="interior-card-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z" />
                </svg>
              </div>
              <h3>Meeting Rooms &amp; Spaces</h3>
              <p>Reserve meeting rooms and event spaces at the Catholic Center, Sarto Retreat Center, and parish halls.</p>
            </Link>

            <Link href="/parishes/watch-mass" className="interior-card">
              <div className="interior-card-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 14H3V5h18v12zM10 8v6l5-3-5-3z" />
                </svg>
              </div>
              <h3>Watch Mass Online</h3>
              <p>Join us for livestreamed Masses when you are unable to attend in person. Multiple parishes offer livestreaming.</p>
            </Link>

            <Link href="/parishes/mass-times" className="interior-card">
              <div className="interior-card-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z" />
                </svg>
              </div>
              <h3>Mass Times</h3>
              <p>Find daily and weekend Mass schedules, Holy Day schedules, and confession times at parishes near you.</p>
            </Link>

            <Link href="/events/conferences" className="interior-card">
              <div className="interior-card-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                </svg>
              </div>
              <h3>Conferences &amp; Workshops</h3>
              <p>Diocesan conferences, formation days, professional development for teachers, and special workshops.</p>
            </Link>

            <Link href="/events/parish-events" className="interior-card">
              <div className="interior-card-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM9 10H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2z" />
                </svg>
              </div>
              <h3>Parish Events</h3>
              <p>Festivals, picnics, fish fries, and community gatherings at parishes across the 12-county diocese.</p>
            </Link>
          </div>
        </section>

        {/* Submit Event */}
        <div className="page-content" style={{ paddingTop: 0 }}>
          <div className="info-block">
            <h3>Have an Event to Share?</h3>
            <p>
              Parishes, schools, and diocesan organizations can submit events to be featured on the diocesan calendar. Send event details including date, time, location, and a brief description to <a href="mailto:events@evdio.org" style={{ color: "var(--blue)", fontWeight: 600 }}>events@evdio.org</a> at least two weeks before the event date. Events are reviewed and published weekly.
            </p>
          </div>
        </div>

        {/* CTA */}
        <section className="page-content section-navy" style={{ textAlign: "center" }}>
          <h2 className="section-h2">Stay Connected</h2>
          <p className="section-desc">
            Subscribe to The Message for weekly coverage of diocesan events, parish activities, and Catholic community life across Southwestern Indiana.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginTop: 32 }}>
            <Link href="/the-message/subscribe" className="btn-gold">
              Subscribe to The Message
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
            </Link>
            <Link href="/parishes/directory" className="btn btn-outline">
              Find Your Parish
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
