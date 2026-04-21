import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Planned & Legacy Giving | Diocese of Evansville",
  description:
    "Plan a lasting gift to the Diocese of Evansville through bequests, charitable trusts, IRA gifts, stock donations, and other legacy giving options.",
};

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
        <section className="section-padding bg-warm-white">
          <div className="max-w-[960px] mx-auto">
            <div className="text-center mb-14">
              <div className="section-label">Your Legacy</div>
              <h2 className="section-title">Leave a Lasting Gift</h2>
              <p className="text-base text-text-medium leading-relaxed max-w-[680px] mx-auto">
                Planned giving allows you to make a meaningful and lasting impact on the Diocese of Evansville while often providing significant financial and tax benefits. Whether you are planning your estate or looking for creative ways to give, there are options that fit every situation.
              </p>
            </div>

            <div className="bg-navy rounded-2xl p-8 md:p-10 text-center mb-10">
              <div className="font-heading text-2xl md:text-3xl font-bold text-white mb-4">
                Heritage of Faith Society
              </div>
              <p className="text-white/70 text-base leading-relaxed max-w-[600px] mx-auto mb-6">
                Those who include the Diocese of Evansville in their estate plans are welcomed into the Heritage of Faith Society. Members receive a special blessing from the Bishop, an annual appreciation event, and the knowledge that their legacy will serve the Church for generations.
              </p>
              <a href="#" className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold text-sm bg-accent-red text-white hover:bg-accent-red/90 transition-colors">
                Join the Heritage of Faith Society
              </a>
            </div>
          </div>
        </section>

        {/* Giving Options */}
        <section className="section-padding bg-cream">
          <div className="max-w-[1280px] mx-auto">
            <div className="text-center mb-14">
              <div className="section-label">Giving Options</div>
              <h2 className="section-title">Ways to Give Through Your Estate</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <OptionCard
                title="Bequests"
                desc="A bequest is the simplest form of planned giving. By including the Diocese of Evansville in your will or living trust, you can designate a specific amount, a percentage of your estate, or the remainder after other gifts are fulfilled. A bequest costs nothing during your lifetime and can be modified at any time."
                benefit="Estate tax deduction for the full value of the bequest."
              />
              <OptionCard
                title="Charitable Remainder Trust"
                desc="A charitable remainder trust allows you to transfer assets to a trust that pays you (or a beneficiary you choose) income for life or a fixed term, after which the remaining assets pass to the diocese. This is an excellent option for donors who want to support the Church while maintaining a stream of income."
                benefit="Income tax deduction, potential capital gains avoidance, and lifetime income."
              />
              <OptionCard
                title="Charitable Lead Trust"
                desc="A charitable lead trust is the reverse of a remainder trust: the trust pays income to the diocese for a set number of years, and the remaining assets then pass to your heirs. This can significantly reduce gift and estate taxes when transferring wealth to the next generation."
                benefit="Reduced gift and estate taxes on assets passed to heirs."
              />
              <OptionCard
                title="IRA Charitable Rollover"
                desc="If you are 70&frac12; or older, you can direct up to $105,000 per year from your Individual Retirement Account (IRA) directly to the Diocese of Evansville. This Qualified Charitable Distribution (QCD) counts toward your Required Minimum Distribution and is not included in your taxable income."
                benefit="Satisfies RMD, excluded from taxable income, no itemization required."
              />
              <OptionCard
                title="Gifts of Stock & Securities"
                desc="Donating appreciated stocks, bonds, or mutual fund shares held for more than one year allows you to avoid capital gains tax on the appreciation while receiving a charitable deduction for the full fair market value. This can be one of the most tax-efficient ways to give."
                benefit="Avoid capital gains tax and receive a full fair-market-value deduction."
              />
              <OptionCard
                title="Life Insurance"
                desc="You can name the Diocese of Evansville as the beneficiary or owner of a life insurance policy. If you transfer ownership of an existing paid-up policy, you receive an immediate tax deduction. You may also purchase a new policy and make the diocese the owner and beneficiary."
                benefit="Potential income tax deduction and a gift that multiplies your generosity."
              />
              <OptionCard
                title="Donor Advised Fund"
                desc="A Donor Advised Fund (DAF) allows you to make a charitable contribution, receive an immediate tax deduction, and then recommend grants to the diocese or other qualified charities over time. DAFs offer flexibility and simplicity in your charitable giving."
                benefit="Immediate tax deduction with flexibility on when and where to grant."
              />
              <OptionCard
                title="Real Estate"
                desc="A gift of real estate, whether a home, farm, or commercial property, can provide a significant tax benefit. The property can be donated outright, or you can arrange a life estate that allows you to continue living in your home while making a future gift to the diocese."
                benefit="Charitable deduction for appraised value, avoid capital gains tax."
              />
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="section-padding bg-warm-white">
          <div className="max-w-[800px] mx-auto">
            <div className="text-center mb-10">
              <div className="section-label">Getting Started</div>
              <h2 className="section-title">How to Make a Planned Gift</h2>
            </div>

            <div className="bg-white rounded-2xl border border-border p-8 shadow-[var(--shadow-soft)]">
              <div className="space-y-6 text-sm text-text-medium">
                <StepItem number="1" title="Have a Conversation" desc="Contact the diocesan Development Office to discuss your giving goals and explore which planned giving option is the best fit for your financial and personal situation." />
                <StepItem number="2" title="Consult Your Advisors" desc="Work with your financial advisor, attorney, or tax professional to structure your gift in a way that maximizes both your charitable impact and your financial benefit." />
                <StepItem number="3" title="Formalize Your Gift" desc="Complete the necessary legal documents with the help of your attorney. The diocese can provide suggested bequest language and beneficiary designation forms." />
                <StepItem number="4" title="Let Us Know" desc="Notify the diocese of your planned gift so we can welcome you into the Heritage of Faith Society and ensure your intentions are honored." />
              </div>
            </div>
          </div>
        </section>

        {/* Legal Names */}
        <section className="section-padding bg-cream">
          <div className="max-w-[800px] mx-auto">
            <div className="bg-gold/10 rounded-xl border border-gold/20 p-8">
              <h3 className="font-heading text-xl font-bold text-navy mb-4 text-center">Legal Information</h3>
              <div className="text-sm text-text-medium leading-relaxed space-y-3">
                <p>
                  <strong className="text-navy">Legal Name:</strong> The Catholic Diocese of Evansville, Inc.
                </p>
                <p>
                  <strong className="text-navy">Federal Tax ID (EIN):</strong> 35-0868182
                </p>
                <p>
                  <strong className="text-navy">Address:</strong> P.O. Box 4169, Evansville, IN 47724
                </p>
                <p className="text-xs text-text-light pt-2">
                  The Diocese of Evansville is a 501(c)(3) tax-exempt organization. All gifts are tax-deductible to the extent allowed by law. Please consult your tax advisor regarding the deductibility of your gift.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-navy text-white">
          <div className="max-w-[800px] mx-auto text-center">
            <div className="section-label text-gold">Start Your Legacy</div>
            <h2 className="font-heading text-[clamp(28px,4vw,40px)] font-bold text-white leading-tight mb-4">
              Your Gift Will Serve for Generations
            </h2>
            <p className="text-base text-white/70 mb-6 leading-relaxed max-w-[560px] mx-auto">
              Contact the Development Office to begin a confidential conversation about your planned gift.
            </p>
            <div className="text-gold font-semibold text-lg mb-6">(812) 424-5536 | development@evdio.org</div>
            <div className="flex gap-4 flex-wrap justify-center">
              <a href="#" className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold text-sm bg-accent-red text-white hover:bg-accent-red/90 transition-colors">
                Request Information
              </a>
              <Link href="/give" className="btn btn-outline" style={{ borderColor: "rgba(255,255,255,0.2)" }}>
                All Ways to Give
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function OptionCard({ title, desc, benefit }: { title: string; desc: string; benefit: string }) {
  return (
    <div className="bg-white rounded-xl border border-border p-7">
      <h3 className="font-heading text-xl font-bold text-navy mb-3">{title}</h3>
      <p className="text-sm text-text-medium leading-relaxed mb-4">{desc}</p>
      <div className="bg-gold/10 rounded-lg p-3 border border-gold/20">
        <div className="text-xs font-semibold text-navy">Tax Benefit: <span className="font-normal text-text-medium">{benefit}</span></div>
      </div>
    </div>
  );
}

function StepItem({ number, title, desc }: { number: string; title: string; desc: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-8 h-8 rounded-full bg-navy text-gold font-heading font-bold text-sm flex items-center justify-center flex-shrink-0">
        {number}
      </div>
      <div>
        <div className="font-semibold text-navy text-[15px] mb-0.5">{title}</div>
        <div className="leading-relaxed">{desc}</div>
      </div>
    </div>
  );
}
