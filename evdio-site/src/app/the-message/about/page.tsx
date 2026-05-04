import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About The Message",
  description:
    "About The Message, the weekly Catholic newspaper of the Diocese of Evansville. Our mission, history, staff, and how to submit news.",
};

export default function AboutMessagePage() {
  return (
    <>
      <section className="feature-head" aria-labelledby="title">
        <div className="grid">
          <div className="text">
            <p className="kicker">THE MESSAGE</p>
            <h1 id="title">About The <em>Message.</em></h1>
            <p className="deck">The voice of the Catholic community in Southwestern Indiana since 1970.</p>
          </div>
          <figure className="photo">
            <Image
              src="/images/stock/presbyterate-group.jpg"
              alt="Presbyterate gathering of the Diocese of Evansville"
              fill
              sizes="(max-width: 960px) 100vw, 50vw"
              style={{ objectFit: "cover", objectPosition: "center 45%" }}
              priority
            />
          </figure>
        </div>
      </section>

      <main id="main-content">
        <section className="page-content">
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <div className="interior-card" style={{ cursor: "default", marginBottom: 32 }}>
              <h3 style={{ fontSize: 24 }}>Our Mission</h3>
              <p style={{ fontSize: 15, lineHeight: 1.75, marginBottom: 16, marginTop: 16 }}>
                The Message is the official newspaper of the Catholic Diocese of Evansville. Published weekly, we serve the 79,500 Catholics of our 45 parishes across 12 counties in Southwestern Indiana with news, features, opinion, and spiritual reflection.
              </p>
              <p style={{ fontSize: 15, lineHeight: 1.75 }}>
                Our mission is to inform, inspire, and connect the Catholic community by telling the stories of faith, service, and hope that define the Church in our corner of the world. We are committed to the highest standards of Catholic journalism, guided by truth, charity, and the teaching of the Church.
              </p>
            </div>

            <hr className="section-divider" />

            <div className="interior-card" style={{ cursor: "default", marginBottom: 32 }}>
              <h3 style={{ fontSize: 24 }}>Our History</h3>
              <p style={{ fontSize: 15, lineHeight: 1.75, marginBottom: 16, marginTop: 16 }}>
                The Message was founded in 1970 under the direction of Bishop Francis Shea, who recognized the need for a diocesan newspaper that could connect Catholics across the sprawling 12-county diocese. From its modest beginnings as a monthly bulletin, The Message grew into a weekly publication that has become an essential part of Catholic life in Southwestern Indiana.
              </p>
              <p style={{ fontSize: 15, lineHeight: 1.75, marginBottom: 16 }}>
                Over more than five decades, The Message has covered the installation of four bishops, the opening and closing of parishes, the growth of Catholic schools, the work of Catholic Charities, and the countless stories of ordinary Catholics living extraordinary lives of faith.
              </p>
              <p style={{ fontSize: 15, lineHeight: 1.75 }}>
                In 2020, The Message celebrated its 50th anniversary with a special commemorative edition and began expanding its digital presence to reach new audiences.
              </p>
            </div>

            <hr className="section-divider" />

            <div className="interior-card" style={{ cursor: "default", marginBottom: 32 }}>
              <h3 style={{ fontSize: 24 }}>Our Staff</h3>
              <div className="interior-grid interior-grid-2" style={{ marginTop: 16 }}>
                <div className="info-block" style={{ marginBottom: 0 }}>
                  <h3>Tim Lilley</h3>
                  <p style={{ fontSize: 12, color: "var(--muted)", marginBottom: 8 }}>Editor</p>
                  <p>Leads editorial direction and oversees all content for The Message.</p>
                </div>
                <div className="info-block" style={{ marginBottom: 0 }}>
                  <h3>Staff Writers</h3>
                  <p style={{ fontSize: 12, color: "var(--muted)", marginBottom: 8 }}>Reporting Team</p>
                  <p>Our team of writers covers diocesan news, parish stories, and Catholic life across the region.</p>
                </div>
              </div>
            </div>

            <hr className="section-divider" />

            <div className="interior-card" style={{ cursor: "default", marginBottom: 32 }}>
              <h3 style={{ fontSize: 24 }}>Contact Us</h3>
              <div className="interior-grid interior-grid-2" style={{ marginTop: 16 }}>
                <div style={{ fontSize: 14, color: "var(--muted)" }}>
                  <strong style={{ color: "var(--navy)", display: "block", marginBottom: 4 }}>Mailing Address</strong>
                  The Message<br />
                  P.O. Box 4169<br />
                  Evansville, IN 47724-0169
                </div>
                <div style={{ fontSize: 14, color: "var(--muted)" }}>
                  <strong style={{ color: "var(--navy)", display: "block", marginBottom: 4 }}>Phone &amp; Email</strong>
                  (812) 424-5536<br />
                  message@evdio.org
                </div>
              </div>
            </div>

            <hr className="section-divider" />

            <div className="interior-card" style={{ cursor: "default" }}>
              <h3 style={{ fontSize: 24 }}>Submit News</h3>
              <p style={{ fontSize: 15, lineHeight: 1.75, marginBottom: 20, marginTop: 16 }}>
                We welcome news from parishes, schools, and Catholic organizations across the diocese. To submit a story idea, event announcement, or press release, please email our editorial team.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <Link href="mailto:message@evdio.org" className="btn-gold">
                  Email a Story Tip
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                </Link>
                <Link href="/the-message/subscribe" className="btn btn-outline">
                  Subscribe to The Message
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
