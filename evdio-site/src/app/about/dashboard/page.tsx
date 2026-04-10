import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";

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
      <PageHero
        label="About"
        title="Monthly Dashboard"
        subtitle="Transparency and accountability in service to our diocese. Updated monthly."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Monthly Dashboard" },
        ]}
      />

      <main id="main-content">
        {/* Intro */}
        <section className="section-padding bg-warm-white">
          <div className="max-w-[1080px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 items-start">
              <div>
                <div className="section-label text-left">Transparency</div>
                <h2 className="section-title text-left">
                  We Believe in Open Reporting
                </h2>
                <p className="text-base text-text-medium leading-relaxed mb-4">
                  Each month, the Diocese of Evansville publishes a comprehensive dashboard covering key ministry metrics, financial stewardship, and impact data. We believe that trust is built through transparency.
                </p>
                <p className="text-base text-text-medium leading-relaxed mb-6">
                  This dashboard is part of Bishop Siegel&rsquo;s commitment to being &ldquo;ambassadors of one another&rdquo; &mdash; ensuring that parishes and the Catholic Center work in partnership with full openness and accountability.
                </p>
                <Link href="/about/contact" className="btn btn-secondary text-sm">
                  Questions About Our Reports?
                </Link>
              </div>

              {/* Current Month Dashboard */}
              <div className="bg-white rounded-2xl border border-border shadow-[var(--shadow-card)] overflow-hidden">
                <div className="bg-navy p-5 px-6 flex justify-between items-center">
                  <h3 className="font-heading text-xl font-bold text-white">
                    {currentMonth.label} Report
                  </h3>
                  <span className="text-[10px] bg-gold text-navy px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider">
                    Latest
                  </span>
                </div>
                <div className="p-6">
                  {currentMonth.rows.map((row, i) => (
                    <div
                      key={row.metric}
                      className={`flex justify-between items-center py-3.5 ${
                        i < currentMonth.rows.length - 1 ? "border-b border-border" : ""
                      }`}
                    >
                      <span className="text-sm text-text-medium">{row.metric}</span>
                      <div className="flex items-center gap-3">
                        <span className="font-heading text-lg font-bold text-navy">
                          {row.value}
                        </span>
                        {row.change && (
                          <span
                            className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${
                              row.positive
                                ? "bg-green-50 text-green-700"
                                : "bg-red-50 text-accent-red"
                            }`}
                          >
                            {row.change}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="text-center py-4 px-6 bg-cream border-t border-border">
                  <button className="text-[13px] font-semibold text-blue hover:text-navy transition-colors tracking-wide">
                    Download Full Report (PDF) &rarr;
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Previous Months */}
        <section className="section-padding bg-cream">
          <div className="max-w-[1080px] mx-auto">
            <div className="section-label">Archive</div>
            <h2 className="section-title">Previous Monthly Reports</h2>
            <p className="section-subtitle">
              Browse past monthly dashboards to see how our diocese has grown and responded to the needs of our community.
            </p>

            <div className="mt-10 overflow-x-auto">
              <table className="w-full min-w-[600px]">
                <thead>
                  <tr className="border-b-2 border-navy/10">
                    <th className="text-left py-3 px-4 text-xs font-bold text-text-light uppercase tracking-wider">
                      Month
                    </th>
                    <th className="text-right py-3 px-4 text-xs font-bold text-text-light uppercase tracking-wider">
                      Mass Attendance
                    </th>
                    <th className="text-right py-3 px-4 text-xs font-bold text-text-light uppercase tracking-wider">
                      Families Served
                    </th>
                    <th className="text-right py-3 px-4 text-xs font-bold text-text-light uppercase tracking-wider">
                      Appeal Progress
                    </th>
                    <th className="text-right py-3 px-4 text-xs font-bold text-text-light uppercase tracking-wider">
                      Report
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {previousMonths.map((month) => (
                    <tr key={month.month} className="border-b border-border hover:bg-white/50 transition-colors">
                      <td className="py-3.5 px-4 text-sm font-semibold text-navy">
                        {month.month}
                      </td>
                      <td className="py-3.5 px-4 text-sm text-text-medium text-right">
                        {month.attendance}
                      </td>
                      <td className="py-3.5 px-4 text-sm text-text-medium text-right">
                        {month.charities}
                      </td>
                      <td className="py-3.5 px-4 text-sm text-text-medium text-right">
                        {month.appeal}
                      </td>
                      <td className="py-3.5 px-4 text-right">
                        <button className="text-xs font-semibold text-blue hover:text-navy transition-colors">
                          Download PDF
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-navy py-16 px-8">
          <div className="max-w-[900px] mx-auto text-center">
            <h2 className="font-heading text-[clamp(24px,3vw,36px)] font-bold text-white leading-tight mb-4">
              Your Support Makes This Impact Possible
            </h2>
            <p className="text-base text-white/70 mb-8 max-w-[560px] mx-auto leading-relaxed">
              Every dollar given to the Catholic Ministries Appeal supports the parishes, schools, and charitable ministries reflected in these reports.
            </p>
            <Link href="/give" className="btn btn-primary">
              Give to the Catholic Ministries Appeal
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
