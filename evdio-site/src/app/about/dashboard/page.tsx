import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Monthly Dashboard",
  description:
    "Transparent monthly reports on Mass attendance, ministry impact, Catholic Ministries Appeal progress, school enrollment, and finances for the Diocese of Evansville.",
};

const currentMonth = {
  label: "March 2026",
  rows: [
    { metric: "Sunday Mass Attendance (Avg)", value: "18,450", change: "+2.1%", positive: true },
    { metric: "OCIA Candidates Across Diocese", value: "134", change: "+5.5%", positive: true },
    { metric: "Catholic Charities Families Served", value: "212", change: "+7.1%", positive: true },
    { metric: "Catholic Ministries Appeal Progress", value: "72%", change: "On Track", positive: true },
    { metric: "School Enrollment (K\u201312)", value: "6,842", change: "+1.3%", positive: true },
    { metric: "Baptisms (Month)", value: "47", change: null, positive: true },
    { metric: "Weddings (Month)", value: "12", change: null, positive: true },
    { metric: "Scholarships Awarded (YTD)", value: "628", change: null, positive: true },
  ],
};

const previousMonths = [
  { month: "February 2026", attendance: "18,240", charities: "198", appeal: "67%" },
  { month: "January 2026", attendance: "17,980", charities: "185", appeal: "58%" },
  { month: "December 2025", attendance: "22,150", charities: "245", appeal: "52%" },
  { month: "November 2025", attendance: "18,100", charities: "210", appeal: "45%" },
  { month: "October 2025", attendance: "17,650", charities: "192", appeal: "38%" },
  { month: "September 2025", attendance: "17,420", charities: "178", appeal: "30%" },
];

export default function DashboardPage() {
  return (
    <>
      <section className="feature-head" aria-labelledby="title">
        <div className="grid">
          <div className="text">
            <p className="kicker">About</p>
            <h1 id="title">Monthly <em>Dashboard.</em></h1>
            <p className="deck">Transparency and accountability in service to our diocese. Updated monthly.</p>
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
        {/* Intro + Current Dashboard */}
        <div className="page-content">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: 48, alignItems: "start" }}>
            <div>
              <div className="section-head" style={{ textAlign: "left", marginBottom: 24 }}>
                <span className="section-tag section-tag-left">Transparency</span>
                <h2 className="section-h2 section-h2-left">We Believe in Open Reporting</h2>
              </div>
              <p style={{ marginBottom: 16 }}>
                Each month, the Diocese of Evansville publishes a comprehensive dashboard covering key ministry metrics, financial stewardship, and impact data. We believe that trust is built through transparency.
              </p>
              <p style={{ marginBottom: 24 }}>
                This dashboard is part of Bishop Siegel&rsquo;s commitment to being &ldquo;ambassadors of one another&rdquo; &mdash; ensuring that parishes and the Catholic Center work in partnership with full openness and accountability.
              </p>
              <Link href="/about/contact" className="btn btn-secondary" style={{ fontSize: 14 }}>
                Questions About Our Reports?
              </Link>
            </div>

            {/* Current Month Dashboard */}
            <div className="interior-card" style={{ cursor: "default", padding: 0, overflow: "hidden" }}>
              <div style={{ background: "var(--navy)", padding: "20px 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h3 style={{ color: "var(--cream)", margin: 0, fontSize: 20 }}>
                  {currentMonth.label} Report
                </h3>
                <span style={{ fontSize: 10, background: "var(--dgold)", color: "var(--navy)", padding: "2px 10px", borderRadius: 999, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em" }}>
                  Latest
                </span>
              </div>
              <div style={{ padding: 24 }}>
                {currentMonth.rows.map((row, i) => (
                  <div
                    key={row.metric}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "14px 0",
                      borderBottom: i < currentMonth.rows.length - 1 ? "1px solid var(--line)" : "none",
                    }}
                  >
                    <span style={{ fontSize: 14, color: "var(--muted)" }}>{row.metric}</span>
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <span style={{ fontFamily: "var(--serif)", fontSize: 18, fontWeight: 700, color: "var(--navy)" }}>
                        {row.value}
                      </span>
                      {row.change && (
                        <span style={{
                          fontSize: 11,
                          fontWeight: 600,
                          padding: "2px 8px",
                          borderRadius: 999,
                          background: row.positive ? "rgba(34,139,34,0.08)" : "rgba(200,40,40,0.08)",
                          color: row.positive ? "#228b22" : "var(--brick)",
                        }}>
                          {row.change}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ textAlign: "center", padding: "16px 24px", background: "var(--cream-lt)", borderTop: "1px solid var(--line)" }}>
                <button style={{ fontSize: 13, fontWeight: 600, color: "var(--blue)", background: "none", border: "none", cursor: "pointer", letterSpacing: "0.03em" }}>
                  Download Full Report (PDF) &rarr;
                </button>
              </div>
            </div>
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

        {/* Previous Months */}
        <div className="page-content" style={{ background: "var(--cream-lt)" }}>
          <div className="section-head">
            <span className="section-tag">Archive</span>
            <h2 className="section-h2">Previous Monthly Reports</h2>
          </div>
          <p style={{ textAlign: "center", maxWidth: 560, margin: "0 auto 40px" }}>
            Browse past monthly dashboards to see how our diocese has grown and responded to the needs of our community.
          </p>

          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", minWidth: 600, borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ borderBottom: "2px solid rgba(10,34,64,0.1)" }}>
                  <th style={{ textAlign: "left", padding: "12px 16px", fontSize: 11, fontWeight: 700, color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.1em" }}>Month</th>
                  <th style={{ textAlign: "right", padding: "12px 16px", fontSize: 11, fontWeight: 700, color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.1em" }}>Mass Attendance</th>
                  <th style={{ textAlign: "right", padding: "12px 16px", fontSize: 11, fontWeight: 700, color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.1em" }}>Families Served</th>
                  <th style={{ textAlign: "right", padding: "12px 16px", fontSize: 11, fontWeight: 700, color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.1em" }}>Appeal Progress</th>
                  <th style={{ textAlign: "right", padding: "12px 16px", fontSize: 11, fontWeight: 700, color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.1em" }}>Report</th>
                </tr>
              </thead>
              <tbody>
                {previousMonths.map((month) => (
                  <tr key={month.month} style={{ borderBottom: "1px solid var(--line)" }}>
                    <td style={{ padding: "14px 16px", fontSize: 14, fontWeight: 600, color: "var(--navy)" }}>{month.month}</td>
                    <td style={{ padding: "14px 16px", fontSize: 14, color: "var(--muted)", textAlign: "right" }}>{month.attendance}</td>
                    <td style={{ padding: "14px 16px", fontSize: 14, color: "var(--muted)", textAlign: "right" }}>{month.charities}</td>
                    <td style={{ padding: "14px 16px", fontSize: 14, color: "var(--muted)", textAlign: "right" }}>{month.appeal}</td>
                    <td style={{ padding: "14px 16px", textAlign: "right" }}>
                      <button style={{ fontSize: 12, fontWeight: 600, color: "var(--blue)", background: "none", border: "none", cursor: "pointer" }}>Download PDF</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA */}
        <section className="section-band section-navy" style={{ textAlign: "center" }}>
          <h2 className="section-h2" style={{ color: "var(--cream)", maxWidth: "18ch", margin: "0 auto 16px" }}>
            Your Support Makes This Impact Possible
          </h2>
          <p style={{ color: "rgba(238,218,179,0.7)", maxWidth: 540, margin: "0 auto" }}>
            Every dollar given to the Catholic Ministries Appeal supports the parishes, schools, and charitable ministries reflected in these reports.
          </p>
          <div style={{ marginTop: 32 }}>
            <Link href="/give" className="btn btn-primary" style={{ background: "var(--dgold)", color: "var(--navy)", borderColor: "var(--dgold)" }}>
              Give to the Catholic Ministries Appeal <span className="arrow" aria-hidden="true">→</span>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
