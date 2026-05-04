import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Media Inquiries",
  description:
    "Media resources, press releases, brand guidelines, and contact information for journalists covering the Catholic Diocese of Evansville.",
};

const pressReleases = [
  {
    date: "March 28, 2026",
    title: "Bishop Siegel Announces Pastoral Priorities for 2025\u20132030",
    excerpt: "The Diocese of Evansville unveils a comprehensive five-year pastoral plan centered on the themes of Encounter, Deepen, and Engage.",
  },
  {
    date: "March 15, 2026",
    title: "Catholic Charities Expands Family Services in Vanderburgh County",
    excerpt: "New programs will serve an additional 400 families annually, bringing the total to more than 2,800 families receiving direct services.",
  },
  {
    date: "February 20, 2026",
    title: "Diocese Awards Record 850 Scholarships for 2026\u20132027 School Year",
    excerpt: "Catholic school families across the diocese receive scholarship support through the Catholic Ministries Appeal and parish-based funds.",
  },
  {
    date: "January 10, 2026",
    title: "Catholic Schools Week Celebrates 26 Schools Across the Diocese",
    excerpt: "National Catholic Schools Week highlights the academic excellence, faith formation, and community impact of Catholic education in Southwestern Indiana.",
  },
  {
    date: "December 5, 2025",
    title: "Diocese of Evansville Launches Redesigned Website and Communications Platform",
    excerpt: "A new digital experience connects the faithful with parish resources, news, and ministry information across all 12 counties.",
  },
];

export default function PressRoomPage() {
  return (
    <>
      <section className="feature-head" aria-labelledby="title">
        <div className="grid">
          <div className="text">
            <p className="kicker">About</p>
            <h1 id="title">Press <em>Room.</em></h1>
            <p className="deck">Media resources, press releases, and contact information for journalists.</p>
          </div>
          <figure className="photo">
            <Image
              src="/images/branding/coat-of-arms.jpg"
              alt="Diocesan coat of arms"
              fill
              sizes="(max-width: 960px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
              priority
            />
          </figure>
        </div>
      </section>

      <main id="main-content">
        {/* Media Contact + Brand Assets */}
        <section className="page-content">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }}>
            <div>
              <div className="section-head" style={{ textAlign: "left", marginBottom: 24 }}>
                <span className="section-tag" style={{ marginInline: 0 }}>Media Contact</span>
                <h2 className="section-h2" style={{ textAlign: "left" }}>Office of Communications</h2>
              </div>
              <p style={{ fontSize: 16, color: "var(--muted)", lineHeight: 1.75, marginBottom: 24 }}>
                For media inquiries, interview requests, or press credentials, please contact the Director of Communications. We strive to respond to all media requests within one business day.
              </p>

              <div className="info-block">
                <h3>Sarah Weber</h3>
                <p style={{ fontSize: 14, color: "var(--blue)", fontWeight: 600, marginBottom: 12 }}>Director of Communications</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 6, fontSize: 14, color: "var(--muted)" }}>
                  <p>
                    <strong style={{ color: "var(--navy)" }}>Phone:</strong>{" "}
                    <a href="tel:8124245536" style={{ color: "var(--blue)" }}>(812) 424-5536 ext. 270</a>
                  </p>
                  <p>
                    <strong style={{ color: "var(--navy)" }}>Email:</strong>{" "}
                    <a href="mailto:sweber@evdio.org" style={{ color: "var(--blue)" }}>sweber@evdio.org</a>
                  </p>
                  <p>
                    <strong style={{ color: "var(--navy)" }}>After Hours:</strong>{" "}
                    <a href="mailto:media@evdio.org" style={{ color: "var(--blue)" }}>media@evdio.org</a>
                  </p>
                </div>
              </div>

              <div className="info-block" style={{ marginBottom: 0 }}>
                <h3>Diocese at a Glance</h3>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, fontSize: 14, marginTop: 12 }}>
                  <div><span style={{ color: "var(--muted)" }}>Bishop:</span> <span style={{ color: "var(--navy)", fontWeight: 600 }}>Joseph M. Siegel</span></div>
                  <div><span style={{ color: "var(--muted)" }}>Installed:</span> <span style={{ color: "var(--navy)", fontWeight: 600 }}>Dec 15, 2017</span></div>
                  <div><span style={{ color: "var(--muted)" }}>Catholics:</span> <span style={{ color: "var(--navy)", fontWeight: 600 }}>79,500</span></div>
                  <div><span style={{ color: "var(--muted)" }}>Parishes:</span> <span style={{ color: "var(--navy)", fontWeight: 600 }}>45</span></div>
                  <div><span style={{ color: "var(--muted)" }}>Schools:</span> <span style={{ color: "var(--navy)", fontWeight: 600 }}>26</span></div>
                  <div><span style={{ color: "var(--muted)" }}>Counties:</span> <span style={{ color: "var(--navy)", fontWeight: 600 }}>12</span></div>
                  <div><span style={{ color: "var(--muted)" }}>Deaneries:</span> <span style={{ color: "var(--navy)", fontWeight: 600 }}>4</span></div>
                  <div><span style={{ color: "var(--muted)" }}>Est.:</span> <span style={{ color: "var(--navy)", fontWeight: 600 }}>November 11, 1944</span></div>
                </div>
              </div>
            </div>

            {/* Brand Assets */}
            <div>
              <div className="section-head" style={{ textAlign: "left", marginBottom: 24 }}>
                <span className="section-tag" style={{ marginInline: 0 }}>Brand Assets</span>
                <h2 className="section-h2" style={{ textAlign: "left" }}>For Media Use</h2>
              </div>
              <p style={{ fontSize: 16, color: "var(--muted)", lineHeight: 1.75, marginBottom: 24 }}>
                Download official logos, the diocesan crest, and the Bishop&rsquo;s official portrait for media use. Please use these assets in accordance with our brand guidelines.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {[
                  { icon: "image", title: "Diocesan Crest", format: "PNG, SVG formats" },
                  { icon: "image", title: "Bishop Siegel \u2014 Official Portrait", format: "High-resolution JPEG" },
                  { icon: "doc", title: "Brand Guidelines", format: "PDF document" },
                  { icon: "doc", title: "Diocese Fact Sheet", format: "PDF document" },
                ].map((asset) => (
                  <div key={asset.title} className="info-block" style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 0 }}>
                    <div style={{ width: 56, height: 56, borderRadius: 12, background: "rgba(10,34,64,0.05)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <svg viewBox="0 0 24 24" width="24" height="24" fill="var(--navy)" aria-hidden="true">
                        {asset.icon === "image" ? (
                          <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
                        ) : (
                          <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
                        )}
                      </svg>
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontFamily: "var(--font-heading)", fontSize: 16, fontWeight: 400, color: "var(--navy)" }}>{asset.title}</div>
                      <div style={{ fontSize: 12, color: "var(--muted)" }}>{asset.format}</div>
                    </div>
                    <button style={{ fontSize: 12, fontWeight: 600, color: "var(--blue)", background: "none", border: "none", cursor: "pointer" }}>Download</button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="flourish" aria-hidden="true">
          <span className="line" />
          <svg width="14" height="18" viewBox="0 0 14 18" fill="currentColor">
            <rect x="6" y="0" width="2" height="18" />
            <rect x="2" y="5" width="10" height="2" />
          </svg>
          <span className="line" />
        </div>

        {/* Press Releases */}
        <section className="page-content" style={{ background: "var(--cream-lt)" }}>
          <div className="section-head">
            <span className="section-tag">Recent Releases</span>
            <h2 className="section-h2">Press Releases</h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {pressReleases.map((release) => (
              <div
                key={release.title}
                className="interior-card"
                style={{ cursor: "pointer" }}
              >
                <p style={{ fontSize: 12, color: "var(--muted)", fontWeight: 600, marginBottom: 8 }}>{release.date}</p>
                <h3>{release.title}</h3>
                <p>{release.excerpt}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="section-band section-navy" style={{ textAlign: "center" }}>
          <h2 className="section-h2" style={{ color: "var(--cream)", maxWidth: "18ch", margin: "0 auto 16px" }}>Read The Message</h2>
          <p style={{ color: "rgba(238,218,179,0.7)", maxWidth: 540, margin: "0 auto" }}>
            The Message is our diocesan newspaper, providing Catholic journalism and community news to Southwestern Indiana since 1970.
          </p>
          <div style={{ marginTop: 32 }}>
            <Link href="/the-message" className="btn btn-primary" style={{ background: "var(--dgold)", color: "var(--navy)", borderColor: "var(--dgold)" }}>Visit The Message <span className="arrow" aria-hidden="true">→</span></Link>
          </div>
        </section>
      </main>
    </>
  );
}
