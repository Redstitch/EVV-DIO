import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { MassTimesMapWrapper } from "@/components/MassTimesMapWrapper";

export const metadata: Metadata = {
  title: "Mass Times | Diocese of Evansville",
  description:
    "Find Saturday and Sunday Mass times at Catholic churches across the Diocese of Evansville. Search by church name, city, or ZIP code.",
};

export default function MassTimesPage() {
  return (
    <>
      <section className="feature-head" aria-labelledby="title">
        <div className="grid">
          <div className="text">
            <p className="kicker">Parishes &amp; Mass</p>
            <h1 id="title">Mass <em>Times.</em></h1>
            <p className="deck">
              Find Saturday and Sunday Mass times at Catholic churches across
              the Diocese of Evansville.
            </p>
          </div>
          <figure className="photo">
            <Image
              src="/images/stock/white-mass.jpg"
              alt="Catholic faithful at Mass in the Diocese of Evansville."
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
            <span className="section-tag">Find a Mass</span>
            <h2 className="section-h2">Weekend Mass <em>Schedule</em></h2>
            <p className="section-desc">
              Search by church name, city, or ZIP code. Filter by Saturday or
              Sunday. Click a church to see its location on the map.
            </p>
          </div>

          <MassTimesMapWrapper />
        </section>

        <div className="flourish" aria-hidden="true">
          <span className="line" />
          <svg width="14" height="18" viewBox="0 0 14 18" fill="currentColor">
            <rect x="6" y="0" width="2" height="18" />
            <rect x="2" y="5" width="10" height="2" />
          </svg>
          <span className="line" />
        </div>

        <section className="page-content bg-eggshell">
          <div className="info-block">
            <h3>Daily Mass &amp; Confession Times</h3>
            <p>
              Most parishes offer daily Mass Monday through Friday, and many
              offer confession before weekend Masses. For daily Mass schedules,
              confession times, and Holy Day schedules, please contact your
              parish directly or visit their website.
            </p>
          </div>
        </section>

        <section className="section-band section-navy" style={{ textAlign: "center" }}>
          <h2 className="section-h2" style={{ color: "var(--cream)", maxWidth: "18ch", margin: "0 auto 16px" }}>
            Find your parish — <em style={{ color: "var(--bgold)" }}>come home.</em>
          </h2>
          <p style={{ color: "rgba(238,218,179,0.7)", maxWidth: 540, margin: "0 auto" }}>
            Every parish in the Diocese of Evansville is ready to welcome you.
          </p>
          <div style={{ marginTop: 32 }}>
            <Link href="/parishes" className="btn btn-primary" style={{ background: "var(--dgold)", color: "var(--navy)", borderColor: "var(--dgold)" }}>
              Parish Finder Map <span className="arrow" aria-hidden="true">→</span>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
