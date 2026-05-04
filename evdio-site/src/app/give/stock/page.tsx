import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Give Stock or Securities",
  description:
    "Donate appreciated stock or securities to the Diocese of Evansville. Learn about tax benefits, the transfer process, and how your gift supports Catholic ministries.",
};

export default function GiveStock() {
  return (
    <>
      <section className="feature-head" aria-labelledby="title">
        <div className="grid">
          <div className="text">
            <p className="kicker">Stewardship</p>
            <h1 id="title">Give Stock or <em>Securities.</em></h1>
            <p className="deck">One of the most tax-efficient ways to support the mission of the Church &mdash; donating appreciated stock can maximize your impact while minimizing your tax burden.</p>
          </div>
          <figure className="photo">
            <Image
              src="/images/stock/catholics-for-habitat.jpg"
              alt="Diocesan volunteers serving the community through charitable outreach."
              fill
              sizes="(max-width: 960px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
              priority
            />
          </figure>
        </div>
      </section>

      <main id="main-content">
        {/* ─── WHY STOCK ─── */}
        <section className="page-content">
          <div className="section-head">
            <span className="section-tag">Why Give Stock?</span>
            <h2 className="section-h2">Tax-Smart Generosity</h2>
            <p className="section-desc">
              When you donate appreciated stock or securities directly to the Diocese of Evansville, you receive a charitable deduction for the full fair-market value of the asset &mdash; and you pay no capital gains tax on the appreciation. It&rsquo;s a win for you and for the ministries you support.
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

        {/* ─── TAX BENEFITS (on eggshell) ─── */}
        <section className="page-content bg-eggshell">
          <div className="section-head">
            <span className="section-tag">The Benefits</span>
            <h2 className="section-h2">How You &amp; the Diocese <em>Benefit</em></h2>
          </div>

          <div className="interior-grid interior-grid-2">
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>For You</h3>
              <ul>
                <li>Receive a charitable income tax deduction for the full fair-market value of the stock</li>
                <li>Avoid capital gains tax on the appreciation</li>
                <li>Potentially give more than you could with a cash gift alone</li>
                <li>Deduction may be applied up to 30% of adjusted gross income, with a five-year carryover</li>
              </ul>
            </div>

            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>For the Diocese</h3>
              <ul>
                <li>Receives the full value of your stock gift with no reduction for capital gains</li>
                <li>Funds are directed to the ministry, parish, or school you designate</li>
                <li>Supports Catholic education, charitable outreach, vocations, and more</li>
                <li>Helps build a culture of sustained, planned generosity</li>
              </ul>
            </div>
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

        {/* ─── PROCESS STEPS (on white) ─── */}
        <section className="page-content">
          <div className="section-head">
            <span className="section-tag">How It Works</span>
            <h2 className="section-h2">The Transfer Process</h2>
          </div>

          <div className="interior-grid interior-grid-2">
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Step 1: Contact the Finance Office</h3>
              <p>Reach out to the diocesan Finance Office to let them know you intend to make a stock gift. They will provide you with the diocese&rsquo;s brokerage account information and a DTC (Depository Trust Company) number for electronic transfer.</p>
            </div>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Step 2: Instruct Your Broker</h3>
              <p>Contact your brokerage firm and request a transfer of shares to the diocese&rsquo;s account. Provide them with the DTC number and account details from the Finance Office. Most transfers complete within 3&ndash;5 business days.</p>
            </div>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Step 3: Designate Your Gift</h3>
              <p>Let the Finance Office know how you&rsquo;d like your gift directed &mdash; whether to a specific parish, school, Catholic Charities, or the Bishop&rsquo;s Annual Appeal. You may also leave the designation open to greatest need.</p>
            </div>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Step 4: Receive Your Acknowledgment</h3>
              <p>Once the transfer is complete, the diocese will send you a written acknowledgment of your gift for your tax records. The value is determined by the mean of the high and low trading prices on the date the shares are received.</p>
            </div>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="section-band section-navy" style={{ textAlign: "center" }}>
          <h2 className="section-h2" style={{ color: "var(--cream)", maxWidth: "18ch", margin: "0 auto 16px" }}>
            Ready to give? <em style={{ color: "var(--bgold)" }}>Let&rsquo;s get started.</em>
          </h2>
          <p style={{ color: "rgba(238,218,179,0.7)", maxWidth: 540, margin: "0 auto" }}>
            Contact the diocesan Finance Office to begin the stock transfer process. We&rsquo;ll walk you through every step.
          </p>
          <div style={{ marginTop: 32 }}>
            <Link href="/contact" className="btn btn-primary" style={{ background: "var(--dgold)", color: "var(--navy)", borderColor: "var(--dgold)" }}>
              Contact the Finance Office <span className="arrow" aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
