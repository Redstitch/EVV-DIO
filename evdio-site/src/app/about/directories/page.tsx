import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Directories",
  description:
    "Find clergy, staff, and parish directories for the Diocese of Evansville. Connect with priests, deacons, diocesan staff, and parish communities across southwestern Indiana.",
};

export default function Directories() {
  return (
    <>
      <section className="feature-head" aria-labelledby="title">
        <div className="grid">
          <div className="text">
            <p className="kicker">About</p>
            <h1 id="title"><em>Directories.</em></h1>
            <p className="deck">Find the people and places that make up the Diocese of Evansville &mdash; clergy, staff, and parish communities serving southwestern Indiana.</p>
          </div>
          <figure className="photo">
            <Image
              src="/images/stock/community-service.jpg"
              alt="Interior of St. Benedict Cathedral, Evansville."
              fill
              sizes="(max-width: 960px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
              priority
            />
          </figure>
        </div>
      </section>

      <main id="main-content">
        {/* ─── INTRO ─── */}
        <section className="page-content">
          <div className="section-head">
            <span className="section-tag">Connect</span>
            <h2 className="section-h2">Find Who You&rsquo;re Looking For</h2>
            <p className="section-desc">
              The Diocese of Evansville serves twelve counties in southwestern Indiana through dozens of parishes, schools, and ministries. Use the directories below to connect with clergy, diocesan staff, or locate a parish community near you.
            </p>
          </div>
        </section>

        {/* ─── CROSS FLOURISH ─── */}
        <div className="flourish" aria-hidden="true">
          <span className="line" />
          <svg width="14" height="18" viewBox="0 0 14 18" fill="currentColor">
            <rect x="6" y="0" width="2" height="18" />
            <rect x="2" y="5" width="10" height="2" />
          </svg>
          <span className="line" />
        </div>

        {/* ─── DIRECTORY LINKS ─── */}
        <section className="page-content bg-eggshell">
          <div className="section-head">
            <span className="section-tag">Browse</span>
            <h2 className="section-h2">Our <em>Directories</em></h2>
          </div>

          <div className="interior-grid interior-grid-3">
            <Link href="/about/clergy-directory" className="interior-card">
              <h3>Clergy Directory</h3>
              <p>
                Find priests, deacons, and religious serving in the Diocese of Evansville. View contact information, current assignments, and parish affiliations for active and retired clergy.
              </p>
              <span className="read-link" aria-hidden="true">
                Browse clergy <span>&rarr;</span>
              </span>
            </Link>

            <Link href="/about/staff-directory" className="interior-card">
              <h3>Staff Directory</h3>
              <p>
                Connect with diocesan office staff at the Catholic Center. Find the right contact for questions about education, finance, communications, human resources, and more.
              </p>
              <span className="read-link" aria-hidden="true">
                Browse staff <span>&rarr;</span>
              </span>
            </Link>

            <Link href="/parishes" className="interior-card">
              <h3>Parish Directory</h3>
              <p>
                Locate Catholic parishes across the twelve counties of the diocese. Find Mass times, addresses, phone numbers, and links to parish websites for every community.
              </p>
              <span className="read-link" aria-hidden="true">
                Find a parish <span>&rarr;</span>
              </span>
            </Link>
          </div>
        </section>

        {/* ─── QUATREFOIL FLOURISH ─── */}
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

        {/* ─── ADDITIONAL INFO ─── */}
        <section className="page-content">
          <div className="section-head">
            <span className="section-tag">Need Help?</span>
            <h2 className="section-h2">Can&rsquo;t Find What You Need?</h2>
            <p className="section-desc">
              If you&rsquo;re unsure which office or person to contact, reach out to the diocesan main office. Our receptionist can direct your call or inquiry to the appropriate department. We&rsquo;re happy to help you connect with the right person.
            </p>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="section-band section-navy" style={{ textAlign: "center" }}>
          <h2 className="section-h2" style={{ color: "var(--cream)", maxWidth: "18ch", margin: "0 auto 16px" }}>
            Get in touch &mdash; <em style={{ color: "var(--bgold)" }}>we&rsquo;re here to help.</em>
          </h2>
          <p style={{ color: "rgba(238,218,179,0.7)", maxWidth: 540, margin: "0 auto" }}>
            Contact the Diocese of Evansville main office for general inquiries or to be directed to the right department.
          </p>
          <div style={{ marginTop: 32 }}>
            <Link href="/about/contact" className="btn btn-primary" style={{ background: "var(--dgold)", color: "var(--navy)", borderColor: "var(--dgold)" }}>
              Contact the diocese <span className="arrow" aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
