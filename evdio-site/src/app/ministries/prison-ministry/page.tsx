import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Prison & Jail Ministry | Diocese of Evansville",
  description:
    "Catholic prison and jail ministry in the Diocese of Evansville. Bringing the sacraments, pastoral care, and hope to the incarcerated and their families.",
};

export default function PrisonMinistryPage() {
  return (
    <>
      <section className="feature-head" aria-labelledby="title">
        <div className="grid">
          <div className="text">
            <p className="kicker">Ministries</p>
            <h1 id="title">Prison <em>Ministry.</em></h1>
            <p className="deck">&ldquo;I was in prison and you came to visit me.&rdquo; &mdash; Matthew 25:36</p>
          </div>
          <figure className="photo">
            <Image
              src="/images/stock/community-service.jpg"
              alt="Community service"
              fill
              sizes="(max-width: 960px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
              priority
            />
          </figure>
        </div>
      </section>

      <main id="main-content">
        {/* Mission */}
        <section className="page-content">
          <div className="section-head">
            <span className="section-tag">Our Mission</span>
            <h2 className="section-h2">Bringing Christ Behind the Walls</h2>
          </div>

          <div className="prose">
            <p>
              The Prison and Jail Ministry of the Diocese of Evansville brings the presence of Christ to men and women who are incarcerated in correctional facilities across Southwestern Indiana. Through the sacraments, Scripture, pastoral counseling, and the simple gift of presence, our ministers accompany the incarcerated on their journey of faith, healing, and hope.
            </p>
          </div>

          <div className="info-block" style={{ marginTop: 32, textAlign: "center" }}>
            <blockquote style={{ fontStyle: "italic", marginBottom: 8 }}>
              &ldquo;No one is beyond the reach of God&rsquo;s mercy. Every person in a jail or prison cell is a child of God, and the Church must be present to them.&rdquo;
            </blockquote>
            <p><strong>&mdash; USCCB, Responsibility, Rehabilitation, and Restoration</strong></p>
          </div>
        </section>

        <div className="page-content" style={{ paddingTop: 0, paddingBottom: 0 }}>
          <hr className="section-divider" />
        </div>

        {/* What We Do */}
        <section className="page-content" style={{ background: "var(--cream-lt)" }}>
          <div className="section-head">
            <span className="section-tag">What We Do</span>
            <h2 className="section-h2">Ministry Services</h2>
          </div>

          <div className="interior-grid interior-grid-3" style={{ marginTop: 32 }}>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Sacramental Ministry</h3>
              <p>Priests and deacons celebrate Mass, hear confessions, and administer the sacraments of the Eucharist and Anointing of the Sick in correctional facilities. For many inmates, the weekly liturgy is the spiritual anchor of their week.</p>
            </div>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Bible Study &amp; Faith Sharing</h3>
              <p>Trained volunteers lead weekly Bible studies and faith-sharing groups. These small communities provide fellowship, accountability, and a deeper understanding of Scripture and the Catholic faith.</p>
            </div>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>OCIA in Prison</h3>
              <p>The Order of Christian Initiation of Adults is offered for inmates who wish to become Catholic or complete their sacraments of initiation. Catechists prepare candidates for Baptism, Confirmation, and First Eucharist.</p>
            </div>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Pastoral Visits</h3>
              <p>Volunteer visitors provide one-on-one pastoral care, listening, and prayer. For many inmates, these visits are their only connection to the outside faith community and a powerful reminder that they are not forgotten.</p>
            </div>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Family Support</h3>
              <p>The families of incarcerated individuals often face stigma, financial hardship, and emotional distress. The ministry connects families with Catholic Charities for counseling, assistance, and support groups.</p>
            </div>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Re-Entry Support</h3>
              <p>As inmates prepare for release, the ministry connects them with parishes, mentors, and community resources to support their transition. Housing, employment, and spiritual community are essential to reducing recidivism.</p>
            </div>
          </div>
        </section>

        <div className="page-content" style={{ paddingTop: 0, paddingBottom: 0 }}>
          <hr className="section-divider" />
        </div>

        {/* Facilities Served */}
        <section className="page-content">
          <div className="section-head">
            <span className="section-tag">Where We Serve</span>
            <h2 className="section-h2">Facilities in Our Diocese</h2>
          </div>

          <div className="prose" style={{ textAlign: "center" }}>
            <p>
              Catholic prison ministry volunteers serve in county jails and state correctional facilities across the 12 counties of the Diocese of Evansville, including:
            </p>
          </div>

          <div className="interior-grid interior-grid-2" style={{ marginTop: 32 }}>
            <div className="info-block"><strong>Vanderburgh County Jail, Evansville</strong></div>
            <div className="info-block"><strong>Warrick County Jail, Boonville</strong></div>
            <div className="info-block"><strong>Gibson County Jail, Princeton</strong></div>
            <div className="info-block"><strong>Dubois County Jail, Jasper</strong></div>
            <div className="info-block"><strong>Posey County Jail, Mt. Vernon</strong></div>
            <div className="info-block"><strong>Branchville Correctional Facility</strong></div>
            <div className="info-block"><strong>Wabash Valley Correctional Facility</strong></div>
            <div className="info-block"><strong>Other county and regional facilities</strong></div>
          </div>
        </section>

        <div className="page-content" style={{ paddingTop: 0, paddingBottom: 0 }}>
          <hr className="section-divider" />
        </div>

        {/* Volunteer */}
        <section className="page-content" style={{ background: "var(--cream-lt)" }}>
          <div className="section-head">
            <span className="section-tag">Get Involved</span>
            <h2 className="section-h2">Become a Prison Ministry Volunteer</h2>
          </div>

          <div className="interior-card" style={{ cursor: "default", marginTop: 32 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
                <div style={{ width: 32, height: 32, borderRadius: "50%", background: "var(--navy)", color: "var(--gold)", fontWeight: 700, fontSize: 14, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>1</div>
                <div>
                  <h4 style={{ marginBottom: 2 }}>Attend an Orientation</h4>
                  <p>Learn about the ministry, hear from experienced volunteers, and discern whether prison ministry is your calling.</p>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
                <div style={{ width: 32, height: 32, borderRadius: "50%", background: "var(--navy)", color: "var(--gold)", fontWeight: 700, fontSize: 14, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>2</div>
                <div>
                  <h4 style={{ marginBottom: 2 }}>Complete Training</h4>
                  <p>Volunteers must complete diocesan Safe Environment training, a background check, and facility-specific orientation and security clearance.</p>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
                <div style={{ width: 32, height: 32, borderRadius: "50%", background: "var(--navy)", color: "var(--gold)", fontWeight: 700, fontSize: 14, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>3</div>
                <div>
                  <h4 style={{ marginBottom: 2 }}>Be Assigned to a Facility</h4>
                  <p>New volunteers are paired with experienced ministers and assigned to a facility based on location and need.</p>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
                <div style={{ width: 32, height: 32, borderRadius: "50%", background: "var(--navy)", color: "var(--gold)", fontWeight: 700, fontSize: 14, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>4</div>
                <div>
                  <h4 style={{ marginBottom: 2 }}>Ongoing Formation</h4>
                  <p>Regular retreats, prayer, and continuing education help volunteers grow in their ministry and care for their own spiritual well-being.</p>
                </div>
              </div>
            </div>
          </div>

          <p className="prose" style={{ marginTop: 24, textAlign: "center" }}>
            You do not need to have any previous experience with correctional facilities. What you need is a compassionate heart, a willingness to listen, and a desire to bring Christ&rsquo;s love to those who need it most.
          </p>
        </section>

        <div className="page-content" style={{ paddingTop: 0, paddingBottom: 0 }}>
          <hr className="section-divider" />
        </div>

        {/* CTA */}
        <section className="page-content">
          <div className="cta-block">
            <h3>Visit the Imprisoned</h3>
            <p>
              Contact the Prison Ministry coordinator to learn more about volunteering or to request pastoral services for an incarcerated loved one.
            </p>
            <p><strong>(812) 424-5536 | prisonministry@evdio.org</strong></p>
            <Link href="/ministries" className="btn btn-primary">
              All Ministries
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
