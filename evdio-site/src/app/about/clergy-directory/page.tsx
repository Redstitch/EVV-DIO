import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  activePriests,
  seniorPriests,
  transitionalDeacons,
  permanentDeacons,
  retiredDeacons,
} from "@/data/clergy";
import type { ClergyMember } from "@/data/clergy";

export const metadata: Metadata = {
  title: "Clergy Directory",
  description:
    "Directory of priests, deacons, and religious serving across the four deaneries of the Catholic Diocese of Evansville.",
};

/* ─── Flourish divider (reusable) ─── */
function Flourish() {
  return (
    <div className="flourish" aria-hidden="true">
      <span className="line" />
      <svg width="14" height="18" viewBox="0 0 14 18" fill="currentColor">
        <rect x="6" y="0" width="2" height="18" />
        <rect x="2" y="5" width="10" height="2" />
      </svg>
      <span className="line" />
    </div>
  );
}

/* ─── Clergy card with headshot ─── */
function ClergyCard({ member }: { member: ClergyMember }) {
  return (
    <div
      style={{
        display: "flex",
        gap: 16,
        alignItems: "flex-start",
        background: "#fff",
        border: "1px solid rgba(10,34,64,0.08)",
        borderRadius: 16,
        padding: 16,
        boxShadow: "0 2px 12px rgba(10,34,64,0.04)",
      }}
    >
      <div
        style={{
          width: 120,
          minWidth: 120,
          height: 152,
          borderRadius: 10,
          overflow: "hidden",
          background: "var(--cream-xlt)",
          position: "relative",
          flexShrink: 0,
        }}
      >
        <Image
          src={`/images/clergy/${member.slug}.jpg`}
          alt={member.name}
          width={120}
          height={152}
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
      </div>
      <div style={{ paddingTop: 4 }}>
        <p
          style={{
            fontFamily: "var(--serif)",
            fontSize: 17,
            fontWeight: 600,
            color: "var(--navy)",
            marginBottom: 6,
            lineHeight: 1.3,
          }}
        >
          {member.name}
        </p>
        <p
          style={{
            fontSize: 13,
            color: "var(--muted)",
            lineHeight: 1.5,
            marginBottom: 6,
          }}
        >
          {member.assignment}
        </p>
        <p
          style={{
            fontSize: 11,
            color: "var(--muted)",
            opacity: 0.7,
          }}
        >
          Ordained {member.ordained}
        </p>
      </div>
    </div>
  );
}

/* ─── Compact card (no headshot) ─── */
function CompactCard({ member }: { member: ClergyMember }) {
  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid rgba(10,34,64,0.08)",
        borderRadius: 12,
        padding: "16px 20px",
        boxShadow: "0 1px 6px rgba(10,34,64,0.03)",
      }}
    >
      <p
        style={{
          fontFamily: "var(--serif)",
          fontSize: 15,
          fontWeight: 600,
          color: "var(--navy)",
          marginBottom: 4,
        }}
      >
        {member.name}
      </p>
      {member.assignment && member.assignment !== "Senior Priest" && member.assignment !== "Retired" && member.assignment !== "Transitional Deacon" && (
        <p style={{ fontSize: 12, color: "var(--muted)", marginBottom: 2 }}>
          {member.assignment}
        </p>
      )}
      <p style={{ fontSize: 11, color: "var(--muted)", opacity: 0.6 }}>
        Ordained {member.ordained}
      </p>
    </div>
  );
}

export default function ClergyDirectoryPage() {
  return (
    <>
      <section className="feature-head" aria-labelledby="title">
        <div className="grid">
          <div className="text">
            <p className="kicker">About</p>
            <h1 id="title">Clergy <em>Directory.</em></h1>
            <p className="deck">
              The priests and deacons who faithfully serve the parishes, schools, and communities of the Diocese of Evansville.
            </p>
          </div>
          <figure className="photo">
            <Image
              src="/images/stock/presbyterate-group.jpg"
              alt="Clergy of the Diocese of Evansville"
              fill
              sizes="(max-width: 960px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
              priority
            />
          </figure>
        </div>
      </section>

      <main id="main-content">
        {/* ─── ACTIVE PRIESTS ─── */}
        <section className="page-content">
          <div className="section-head">
            <span className="section-tag">Active Clergy</span>
            <h2 className="section-h2">Priests of the <em>Diocese</em></h2>
            <p className="section-desc">
              {activePriests.length} diocesan and religious order priests serve our parishes, hospitals, schools, and special ministries across twelve counties of southwestern Indiana.
            </p>
          </div>

          <div className="interior-grid interior-grid-4">
            {activePriests.map((member) => (
              <ClergyCard key={member.slug} member={member} />
            ))}
          </div>
        </section>

        <Flourish />

        {/* ─── SENIOR (RETIRED) PRIESTS ─── */}
        <section className="page-content bg-eggshell">
          <div className="section-head">
            <span className="section-tag">Honored Service</span>
            <h2 className="section-h2">Senior <em>Priests</em></h2>
            <p className="section-desc">
              We are grateful for the decades of faithful service these {seniorPriests.length} priests have given to our diocese.
            </p>
          </div>

          <div className="interior-grid interior-grid-4">
            {seniorPriests.map((member) => (
              <CompactCard key={member.slug} member={member} />
            ))}
          </div>
        </section>

        <Flourish />

        {/* ─── PERMANENT DEACONS ─── */}
        <section className="page-content">
          <div className="section-head">
            <span className="section-tag">Permanent Diaconate</span>
            <h2 className="section-h2">Permanent <em>Deacons</em></h2>
            <p className="section-desc">
              {permanentDeacons.length} permanent deacons serve alongside our priests, ministering in parishes across the diocese through preaching, baptizing, witnessing marriages, and works of charity.
            </p>
          </div>

          <div className="interior-grid interior-grid-4">
            {permanentDeacons.map((member) => (
              <ClergyCard key={member.slug} member={member} />
            ))}
          </div>
        </section>

        <Flourish />

        {/* ─── RETIRED DEACONS & TRANSITIONAL DEACONS ─── */}
        <section className="page-content bg-eggshell">
          <div className="section-head">
            <span className="section-tag">Also Serving</span>
            <h2 className="section-h2">Transitional Deacons &amp; Retired <em>Deacons</em></h2>
          </div>

          {/* Transitional Deacons */}
          <h3
            style={{
              fontFamily: "var(--serif)",
              fontSize: 20,
              color: "var(--navy)",
              marginBottom: 16,
              textAlign: "center",
            }}
          >
            Transitional Deacons
          </h3>
          <p
            style={{
              textAlign: "center",
              fontSize: 14,
              color: "var(--muted)",
              maxWidth: 560,
              margin: "0 auto 24px",
            }}
          >
            Preparing for ordination to the priesthood.
          </p>
          <div
            className="interior-grid"
            style={{
              gridTemplateColumns: `repeat(${transitionalDeacons.length}, 1fr)`,
              maxWidth: 560,
              margin: "0 auto 48px",
            }}
          >
            {transitionalDeacons.map((member) => (
              <CompactCard key={member.slug} member={member} />
            ))}
          </div>

          {/* Retired Deacons */}
          <h3
            style={{
              fontFamily: "var(--serif)",
              fontSize: 20,
              color: "var(--navy)",
              marginBottom: 16,
              textAlign: "center",
            }}
          >
            Retired Permanent Deacons
          </h3>
          <p
            style={{
              textAlign: "center",
              fontSize: 14,
              color: "var(--muted)",
              maxWidth: 560,
              margin: "0 auto 24px",
            }}
          >
            With gratitude for their years of dedicated service.
          </p>
          <div className="interior-grid interior-grid-4">
            {retiredDeacons.map((member) => (
              <CompactCard key={member.slug} member={member} />
            ))}
          </div>
        </section>

        {/* ─── VOCATIONS CTA ─── */}
        <section className="section-band section-navy" style={{ textAlign: "center" }}>
          <h2
            className="section-h2"
            style={{
              color: "var(--cream)",
              maxWidth: "18ch",
              margin: "0 auto 16px",
            }}
          >
            Considering a Vocation?
          </h2>
          <p
            style={{
              color: "rgba(238,218,179,0.7)",
              maxWidth: 540,
              margin: "0 auto",
            }}
          >
            If you or someone you know is discerning a vocation to the priesthood or diaconate, we would love to walk with you on that journey.
          </p>
          <div style={{ marginTop: 32 }}>
            <Link
              href="/about/contact"
              className="btn btn-primary"
              style={{
                background: "var(--dgold)",
                color: "var(--navy)",
                borderColor: "var(--dgold)",
              }}
            >
              Contact the Office of Vocations{" "}
              <span className="arrow" aria-hidden="true">
                &rarr;
              </span>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
