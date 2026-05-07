import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Safe Environment",
  description:
    "The Diocese of Evansville is committed to protecting children and vulnerable adults through comprehensive safe environment policies, training, and accountability measures.",
};

export default function SafeEnvironmentPage() {
  return (
    <>
      <section className="feature-head" aria-labelledby="title">
        <div className="grid">
          <div className="text">
            <p className="kicker">About</p>
            <h1 id="title">Safe <em>Environment.</em></h1>
            <p className="deck">Our unwavering commitment to the protection of children and vulnerable adults.</p>
          </div>
          <figure className="photo">
            <Image
              src="/images/stock/day-of-service.jpg"
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
        {/* Commitment Statement */}
        <div className="page-content">
          <div className="section-head" style={{ textAlign: "left", marginBottom: 24 }}>
            <span className="section-tag">Our Commitment</span>
            <h2 className="section-h2">Protecting Those Entrusted to Our Care</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <p>
              The Catholic Diocese of Evansville is deeply committed to the safety and protection of children, young people, and vulnerable adults. This commitment is rooted in our belief in the sacred dignity of every person and our responsibility as a faith community to safeguard all those entrusted to our care.
            </p>
            <p>
              We fully adhere to the <em>Charter for the Protection of Children and Young People</em> adopted by the United States Conference of Catholic Bishops (USCCB) and undergo regular audits to ensure compliance. We have implemented comprehensive policies and programs that include mandatory background checks, safe environment training, clear reporting procedures, and a zero-tolerance policy for abuse.
            </p>
            <p>
              Bishop Siegel has made child protection a top priority, stating: <strong>&ldquo;There is no higher obligation than to protect the most vulnerable among us. We must always put their safety first.&rdquo;</strong>
            </p>
          </div>
        </div>

        <div className="flourish" aria-hidden="true">
          <span className="line" />
          <svg width="14" height="18" viewBox="0 0 14 18" fill="currentColor">
            <rect x="6" y="0" width="2" height="18" />
            <rect x="2" y="5" width="10" height="2" />
          </svg>
          <span className="line" />
        </div>

        {/* Programs & Policies */}
        <div className="page-content bg-eggshell">
          <div className="section-head">
            <span className="section-tag">Programs &amp; Policies</span>
            <h2 className="section-h2">How We Protect</h2>
          </div>
          <div className="interior-grid interior-grid-3">
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Background Checks</h3>
              <p>All clergy, employees, and volunteers who work with minors undergo comprehensive criminal background checks before beginning service.</p>
            </div>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Safe Environment Training</h3>
              <p>Mandatory training programs for all adults in parish and school ministry, covering recognition of abuse, appropriate boundaries, and reporting procedures.</p>
            </div>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Youth Protection Programs</h3>
              <p>Age-appropriate safety education for children and young people in our schools and religious education programs, empowering them to recognize and report unsafe situations.</p>
            </div>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Clear Policies</h3>
              <p>Written diocesan policies governing codes of conduct, supervision of minors, use of technology, travel with youth, and other areas that protect children and adults.</p>
            </div>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Regular Audits</h3>
              <p>Annual compliance audits conducted under the USCCB Charter ensure our programs meet national standards. Results are published publicly.</p>
            </div>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Reporting Procedures</h3>
              <p>Clear, accessible reporting procedures for anyone who suspects abuse. We encourage immediate reporting to civil authorities and provide diocesan resources.</p>
            </div>
          </div>
        </div>

        <div className="flourish flourish-quatrefoil" aria-hidden="true">
          <span className="dot" />
          <span className="line" />
          <svg width="22" height="22" viewBox="0 0 32 32" fill="currentColor">
            <circle cx="16" cy="8" r="6" /><circle cx="16" cy="24" r="6" />
            <circle cx="8" cy="16" r="6" /><circle cx="24" cy="16" r="6" />
            <circle cx="16" cy="16" r="3" fill="var(--cream-lt)" />
          </svg>
          <span className="line" />
          <span className="dot" />
        </div>

        {/* Victim Assistance */}
        <div className="page-content">
          <div className="section-head" style={{ textAlign: "left", marginBottom: 24 }}>
            <span className="section-tag">Victim Assistance</span>
            <h2 className="section-h2">Support for Survivors</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 32 }}>
            <p>
              The Diocese of Evansville provides a Victim Assistance Coordinator to support anyone who has been affected by abuse involving Church personnel. This confidential service connects survivors with counseling, spiritual support, and other resources.
            </p>
            <p>
              We listen to and believe those who come forward. Our commitment to healing and justice is ongoing, and we encourage anyone who has experienced abuse to reach out.
            </p>
          </div>

          <div style={{ background: "rgba(180,50,50,0.04)", borderRadius: 20, padding: 32, border: "1px solid rgba(180,50,50,0.2)" }}>
            <h3 style={{ fontFamily: "var(--serif)", fontSize: 22, color: "var(--brick)", marginBottom: 16 }}>
              If You or Someone You Know Has Been Abused
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, fontSize: 14, lineHeight: 1.7 }}>
              <p>
                <strong style={{ color: "var(--navy)" }}>1. Contact civil authorities immediately.</strong> Call local law enforcement or the Indiana Child Abuse Hotline at <a href="tel:18008002284" style={{ color: "var(--blue)", fontWeight: 600 }}>1-800-800-5556</a>.
              </p>
              <p>
                <strong style={{ color: "var(--navy)" }}>2. Contact the diocese.</strong> Report to the diocesan Victim Assistance Coordinator by calling <a href="tel:8124245536" style={{ color: "var(--blue)", fontWeight: 600 }}>(812) 424-5536</a>.
              </p>
              <p>
                <strong style={{ color: "var(--navy)" }}>3. Visit our Report Abuse page</strong> for additional reporting options and resources.
              </p>
            </div>
            <Link href="/about/report-abuse" className="btn btn-primary" style={{ marginTop: 24, fontSize: 14 }}>
              Report Abuse
            </Link>
          </div>
        </div>

        {/* Resources & Links */}
        <div className="page-content bg-eggshell">
          <div className="section-head">
            <span className="section-tag">Additional Resources</span>
            <h2 className="section-h2">Safe Environment Resources</h2>
          </div>
          <div className="interior-grid interior-grid-2">
            <a
              href="https://www.usccb.org/offices/child-and-youth-protection/charter-protection-children-and-young-people"
              target="_blank"
              rel="noopener noreferrer"
              className="interior-card"
              style={{ display: "flex", alignItems: "center", gap: 16 }}
            >
              <div style={{ flex: 1 }}>
                <h3>USCCB Charter for the Protection of Children and Young People</h3>
              </div>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" style={{ width: 16, height: 16, color: "var(--muted)", flexShrink: 0 }} aria-hidden="true">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
            <a
              href="https://www.virtusonline.org"
              target="_blank"
              rel="noopener noreferrer"
              className="interior-card"
              style={{ display: "flex", alignItems: "center", gap: 16 }}
            >
              <div style={{ flex: 1 }}>
                <h3>VIRTUS Training Programs</h3>
              </div>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" style={{ width: 16, height: 16, color: "var(--muted)", flexShrink: 0 }} aria-hidden="true">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
            <a
              href="https://www.in.gov/dcs/"
              target="_blank"
              rel="noopener noreferrer"
              className="interior-card"
              style={{ display: "flex", alignItems: "center", gap: 16 }}
            >
              <div style={{ flex: 1 }}>
                <h3>Indiana Department of Child Services</h3>
              </div>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" style={{ width: 16, height: 16, color: "var(--muted)", flexShrink: 0 }} aria-hidden="true">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
            <a
              href="https://www.missingkids.org"
              target="_blank"
              rel="noopener noreferrer"
              className="interior-card"
              style={{ display: "flex", alignItems: "center", gap: 16 }}
            >
              <div style={{ flex: 1 }}>
                <h3>National Center for Missing &amp; Exploited Children</h3>
              </div>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" style={{ width: 16, height: 16, color: "var(--muted)", flexShrink: 0 }} aria-hidden="true">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          </div>
        </div>

        {/* CTA */}
        <section className="section-band section-navy" style={{ textAlign: "center" }}>
          <h2 className="section-h2" style={{ color: "var(--cream)", maxWidth: "18ch", margin: "0 auto 16px" }}>
            Questions About Our Safe Environment Programs?
          </h2>
          <p style={{ color: "rgba(238,218,179,0.7)", maxWidth: 540, margin: "0 auto" }}>
            Contact the Office of Safe Environment for information about training, policies, or compliance.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center", marginTop: 32 }}>
            <a href="mailto:safeenvironment@evdio.org" className="btn btn-primary" style={{ background: "var(--dgold)", color: "var(--navy)", borderColor: "var(--dgold)" }}>
              safeenvironment@evdio.org <span className="arrow" aria-hidden="true">→</span>
            </a>
            <Link href="/about/report-abuse" className="btn btn-outline">
              Report Abuse
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
