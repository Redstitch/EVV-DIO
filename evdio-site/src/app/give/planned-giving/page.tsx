import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Planned & Legacy Giving | Diocese of Evansville",
  description:
    "Plan a lasting gift to the Diocese of Evansville through bequests, charitable trusts, IRA gifts, stock donations, and other legacy giving options.",
};

const givingOptions = [
  { title: "Bequests", desc: "A bequest is the simplest form of planned giving. By including the Diocese of Evansville in your will or living trust, you can designate a specific amount, a percentage of your estate, or the remainder after other gifts are fulfilled. A bequest costs nothing during your lifetime and can be modified at any time.", benefit: "Estate tax deduction for the full value of the bequest." },
  { title: "Charitable Remainder Trust", desc: "A charitable remainder trust allows you to transfer assets to a trust that pays you (or a beneficiary you choose) income for life or a fixed term, after which the remaining assets pass to the diocese. This is an excellent option for donors who want to support the Church while maintaining a stream of income.", benefit: "Income tax deduction, potential capital gains avoidance, and lifetime income." },
  { title: "Charitable Lead Trust", desc: "A charitable lead trust is the reverse of a remainder trust: the trust pays income to the diocese for a set number of years, and the remaining assets then pass to your heirs. This can significantly reduce gift and estate taxes when transferring wealth to the next generation.", benefit: "Reduced gift and estate taxes on assets passed to heirs." },
  { title: "IRA Charitable Rollover", desc: "If you are 70\u00BD or older, you can direct up to $105,000 per year from your Individual Retirement Account (IRA) directly to the Diocese of Evansville. This Qualified Charitable Distribution (QCD) counts toward your Required Minimum Distribution and is not included in your taxable income.", benefit: "Satisfies RMD, excluded from taxable income, no itemization required." },
  { title: "Gifts of Stock & Securities", desc: "Donating appreciated stocks, bonds, or mutual fund shares held for more than one year allows you to avoid capital gains tax on the appreciation while receiving a charitable deduction for the full fair market value. This can be one of the most tax-efficient ways to give.", benefit: "Avoid capital gains tax and receive a full fair-market-value deduction." },
  { title: "Life Insurance", desc: "You can name the Diocese of Evansville as the beneficiary or owner of a life insurance policy. If you transfer ownership of an existing paid-up policy, you receive an immediate tax deduction. You may also purchase a new policy and make the diocese the owner and beneficiary.", benefit: "Potential income tax deduction and a gift that multiplies your generosity." },
  { title: "Donor Advised Fund", desc: "A Donor Advised Fund (DAF) allows you to make a charitable contribution, receive an immediate tax deduction, and then recommend grants to the diocese or other qualified charities over time. DAFs offer flexibility and simplicity in your charitable giving.", benefit: "Immediate tax deduction with flexibility on when and where to grant." },
  { title: "Real Estate", desc: "A gift of real estate, whether a home, farm, or commercial property, can provide a significant tax benefit. The property can be donated outright, or you can arrange a life estate that allows you to continue living in your home while making a future gift to the diocese.", benefit: "Charitable deduction for appraised value, avoid capital gains tax." },
];

const steps = [
  { number: "1", title: "Have a Conversation", desc: "Contact the diocesan Development Office to discuss your giving goals and explore which planned giving option is the best fit for your financial and personal situation." },
  { number: "2", title: "Consult Your Advisors", desc: "Work with your financial advisor, attorney, or tax professional to structure your gift in a way that maximizes both your charitable impact and your financial benefit." },
  { number: "3", title: "Formalize Your Gift", desc: "Complete the necessary legal documents with the help of your attorney. The diocese can provide suggested bequest language and beneficiary designation forms." },
  { number: "4", title: "Let Us Know", desc: "Notify the diocese of your planned gift so we can welcome you into the Heritage of Faith Society and ensure your intentions are honored." },
];

export default function PlannedGivingPage() {
  return (
    <>
      <section className="feature-head" aria-labelledby="title">
        <div className="grid">
          <div className="text">
            <p className="kicker">STEWARDSHIP</p>
            <h1 id="title">Planned <em>Giving.</em></h1>
            <p className="deck">A gift that outlasts a lifetime. Build the future of the Church in Southwestern Indiana.</p>
          </div>
          <figure className="photo">
            <Image
              src="/images/stock/catholics-for-habitat.jpg"
              alt="Catholics for Habitat community service"
              fill
              sizes="(max-width: 960px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
              priority
            />
          </figure>
        </div>
      </section>

      <main id="main-content">
        {/* Intro */}
        <section className="page-content">
          <div className="section-head">
            <span className="section-tag">Your Legacy</span>
            <h2 className="section-h2">Leave a Lasting Gift</h2>
          </div>
          <p style={{ fontSize: 16, color: "var(--muted)", lineHeight: 1.75, maxWidth: 680, margin: "-32px auto 40px", textAlign: "center" }}>
            Planned giving allows you to make a meaningful and lasting impact on the Diocese of Evansville while often providing significant financial and tax benefits. Whether you are planning your estate or looking for creative ways to give, there are options that fit every situation.
          </p>

          <div className="cta-block">
            <h3>Heritage of Faith Society</h3>
            <p>
              Those who include the Diocese of Evansville in their estate plans are welcomed into the Heritage of Faith Society. Members receive a special blessing from the Bishop, an annual appreciation event, and the knowledge that their legacy will serve the Church for generations.
            </p>
            <div style={{ marginTop: 16 }}>
              <a href="#" className="btn-gold">
                Join the Heritage of Faith Society
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
              </a>
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

        {/* Giving Options */}
        <section className="page-content" style={{ background: "var(--cream-lt)" }}>
          <div className="section-head">
            <span className="section-tag">Giving Options</span>
            <h2 className="section-h2">Ways to Give Through Your Estate</h2>
          </div>

          <div className="interior-grid interior-grid-2">
            {givingOptions.map((opt) => (
              <div key={opt.title} className="interior-card" style={{ cursor: "default" }}>
                <h3>{opt.title}</h3>
                <p style={{ marginBottom: 16 }}>{opt.desc}</p>
                <div style={{ background: "rgba(196,164,105,0.1)", borderRadius: 12, padding: 12, border: "1px solid rgba(196,164,105,0.2)" }}>
                  <div style={{ fontSize: 12, fontWeight: 600, color: "var(--navy)" }}>Tax Benefit: <span style={{ fontWeight: 400, color: "var(--muted)" }}>{opt.benefit}</span></div>
                </div>
              </div>
            ))}
          </div>
        </section>

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

        {/* Process */}
        <section className="page-content">
          <div className="section-head">
            <span className="section-tag">Getting Started</span>
            <h2 className="section-h2">How to Make a Planned Gift</h2>
          </div>

          <div className="interior-card" style={{ cursor: "default", maxWidth: 800, margin: "0 auto" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {steps.map((s) => (
                <div key={s.number} style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
                  <div style={{ width: 32, height: 32, borderRadius: "50%", background: "var(--navy)", color: "var(--dgold)", fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 14, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    {s.number}
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, color: "var(--navy)", fontSize: 15, marginBottom: 2 }}>{s.title}</div>
                    <div style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.65 }}>{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Legal Info */}
        <section className="page-content" style={{ background: "var(--cream-lt)" }}>
          <div className="info-block" style={{ maxWidth: 800, margin: "0 auto" }}>
            <h3 style={{ textAlign: "center" }}>Legal Information</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, fontSize: 14, color: "var(--muted)", lineHeight: 1.65 }}>
              <p>
                <strong style={{ color: "var(--navy)" }}>Legal Name:</strong> The Catholic Diocese of Evansville, Inc.
              </p>
              <p>
                <strong style={{ color: "var(--navy)" }}>Federal Tax ID (EIN):</strong> 35-0868182
              </p>
              <p>
                <strong style={{ color: "var(--navy)" }}>Address:</strong> P.O. Box 4169, Evansville, IN 47724
              </p>
              <p style={{ fontSize: 12, color: "var(--muted)", paddingTop: 8 }}>
                The Diocese of Evansville is a 501(c)(3) tax-exempt organization. All gifts are tax-deductible to the extent allowed by law. Please consult your tax advisor regarding the deductibility of your gift.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-band section-navy" style={{ textAlign: "center" }}>
          <h2 className="section-h2" style={{ color: "var(--cream)", maxWidth: "18ch", margin: "0 auto 16px" }}>Your Gift Will Serve for Generations</h2>
          <p style={{ color: "rgba(238,218,179,0.7)", maxWidth: 540, margin: "0 auto" }}>
            Contact the Development Office to begin a confidential conversation about your planned gift.
          </p>
          <p style={{ color: "rgba(238,218,179,0.7)", maxWidth: 540, margin: "12px auto 0", fontWeight: 600, fontSize: 18 }}>(812) 424-5536 | development@evdio.org</p>
          <div style={{ marginTop: 32, display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center" }}>
            <a href="#" className="btn btn-primary" style={{ background: "var(--dgold)", color: "var(--navy)", borderColor: "var(--dgold)" }}>Request Information <span className="arrow" aria-hidden="true">→</span></a>
            <Link href="/give" className="btn btn-outline" style={{ borderColor: "rgba(238,218,179,0.3)", color: "var(--cream)" }}>All Ways to Give <span className="arrow" aria-hidden="true">→</span></Link>
          </div>
        </section>
      </main>
    </>
  );
}
