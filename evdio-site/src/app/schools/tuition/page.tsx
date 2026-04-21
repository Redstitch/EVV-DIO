import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Tuition Assistance",
  description:
    "Make Catholic education affordable. Explore tuition assistance, scholarships, Indiana school vouchers, and financial aid in the Diocese of Evansville.",
};

export default function Tuition() {
  return (
    <>
      <section className="feature-head" aria-labelledby="title">
        <div className="grid">
          <div className="text">
            <p className="kicker">CATHOLIC SCHOOLS</p>
            <h1 id="title">Tuition &amp; <em>Affordability.</em></h1>
            <p className="deck">Catholic education is an investment in your child's future. We are committed to making it accessible to every family, regardless of financial circumstances.</p>
          </div>
          <figure className="photo">
            <Image
              src="/images/stock/schools-mass-bishop.jpg"
              alt="Catholic school students at Mass with the Bishop"
              fill
              sizes="(max-width: 960px) 100vw, 50vw"
              style={{ objectFit: "cover", objectPosition: "center 30%" }}
              priority
            />
          </figure>
        </div>
      </section>

      <main id="main-content">
        {/* Overview */}
        <section className="section-padding bg-warm-white">
          <div className="max-w-[960px] mx-auto">
            <div className="text-center mb-14">
              <div className="section-label">Affordability</div>
              <h2 className="section-title">More Affordable Than You Think</h2>
              <p className="text-base text-text-medium leading-relaxed max-w-[680px] mx-auto">
                Many families are surprised to learn how affordable Catholic education can be. Through a combination of parish support, state vouchers, scholarships, and financial aid, the vast majority of families pay significantly less than the published tuition rate. Last year, the diocese awarded over <strong className="text-navy">850 scholarships</strong> to help students attend Catholic schools.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
              <StatCard number="850+" label="Scholarships Awarded" />
              <StatCard number="$2.8M" label="Aid Distributed" />
              <StatCard number="72%" label="Families Receiving Aid" />
              <StatCard number="$0" label="Net Cost for Many" />
            </div>
          </div>
        </section>

        {/* Assistance Types */}
        <section className="section-padding bg-cream">
          <div className="max-w-[1280px] mx-auto">
            <div className="text-center mb-14">
              <div className="section-label">Options Available</div>
              <h2 className="section-title">How Families Pay for Catholic School</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <AidCard
                title="Indiana Choice Scholarship (Voucher)"
                desc="Indiana's School Choice Scholarship Program is the largest state-funded voucher program in the country. Eligible families can receive state funding to cover most or all of Catholic school tuition. Eligibility is based on household income and other criteria. Many families who have never attended a public school now qualify under expanded eligibility."
                highlight="This is the single largest source of tuition assistance for most families."
              />
              <AidCard
                title="Tax Credit Scholarships (SGO)"
                desc="The Indiana Scholarship Granting Organization (SGO) program allows individuals and businesses to receive a state tax credit for donations that fund scholarships for students attending Catholic schools. These need-based scholarships can cover a significant portion of tuition for qualifying families."
                highlight="Donations to the diocesan SGO receive a 50% Indiana state tax credit."
              />
              <AidCard
                title="Parish Tuition Support"
                desc="Most parishes in the Diocese of Evansville subsidize the cost of Catholic education for registered parishioners. This means that the tuition rate for parishioners is already reduced from the actual per-pupil cost of education. Active parish registration and regular Sunday Mass attendance are typically expected."
                highlight="Parishioner rates are significantly lower than non-parishioner rates."
              />
              <AidCard
                title="Diocesan Scholarship Fund"
                desc="The Catholic Ministries Appeal and private donors fund the diocesan scholarship program, which provides need-based and merit-based scholarships to students in Catholic schools across the diocese. Applications are reviewed annually."
                highlight="Funded by the generosity of Catholic Ministries Appeal donors."
              />
            </div>
          </div>
        </section>

        {/* Additional Options */}
        <section className="section-padding bg-warm-white">
          <div className="max-w-[1280px] mx-auto">
            <div className="text-center mb-14">
              <div className="section-label">Additional Options</div>
              <h2 className="section-title">More Ways to Make It Work</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <OptionCard
                title="Payment Plans"
                desc="Most schools offer flexible monthly payment plans so families can spread tuition payments across the school year rather than paying a lump sum."
              />
              <OptionCard
                title="Multi-Child Discounts"
                desc="Families with more than one child enrolled in a Catholic school typically receive a discount on tuition for the second, third, and additional children."
              />
              <OptionCard
                title="Scrip Programs"
                desc="Many schools offer scrip (gift card) programs where families earn tuition credits by purchasing everyday items through the school's program."
              />
              <OptionCard
                title="Employer Tuition Benefits"
                desc="Some employers in the Evansville area offer tuition assistance or educational benefits. Check with your employer's HR department."
              />
              <OptionCard
                title="Education Savings Accounts"
                desc="Indiana's Education Scholarship Account program may provide additional funding options for families who meet certain eligibility criteria."
              />
              <OptionCard
                title="Fundraising & Events"
                desc="Schools host annual fundraisers, galas, and events that help offset operational costs, which in turn helps keep tuition affordable for all families."
              />
            </div>
          </div>
        </section>

        {/* How to Apply */}
        <section className="section-padding bg-cream">
          <div className="max-w-[800px] mx-auto">
            <div className="text-center mb-10">
              <div className="section-label">Get Started</div>
              <h2 className="section-title">How to Apply for Assistance</h2>
            </div>

            <div className="bg-white rounded-2xl border border-border p-8 shadow-[var(--shadow-soft)]">
              <ol className="space-y-5 text-sm text-text-medium">
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-navy text-gold font-heading font-bold text-sm flex items-center justify-center flex-shrink-0">1</div>
                  <div>
                    <div className="font-semibold text-navy text-[15px] mb-0.5">Contact your preferred school</div>
                    <div className="leading-relaxed">The school office can walk you through all available financial assistance options and help determine what you may qualify for.</div>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-navy text-gold font-heading font-bold text-sm flex items-center justify-center flex-shrink-0">2</div>
                  <div>
                    <div className="font-semibold text-navy text-[15px] mb-0.5">Apply for the Indiana Choice Scholarship</div>
                    <div className="leading-relaxed">If eligible, apply through the school for the state voucher program. The school will guide you through the process.</div>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-navy text-gold font-heading font-bold text-sm flex items-center justify-center flex-shrink-0">3</div>
                  <div>
                    <div className="font-semibold text-navy text-[15px] mb-0.5">Complete the FACTS application</div>
                    <div className="leading-relaxed">Many schools use the FACTS Grant & Aid Assessment to determine need-based financial assistance. This confidential process evaluates your family&rsquo;s financial situation.</div>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-navy text-gold font-heading font-bold text-sm flex items-center justify-center flex-shrink-0">4</div>
                  <div>
                    <div className="font-semibold text-navy text-[15px] mb-0.5">Receive your aid package</div>
                    <div className="leading-relaxed">The school will combine all sources of assistance into a financial aid package and work with you on a payment plan for any remaining balance.</div>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-navy text-white">
          <div className="max-w-[800px] mx-auto text-center">
            <div className="section-label text-gold">Every Child Deserves This</div>
            <h2 className="font-heading text-[clamp(28px,4vw,40px)] font-bold text-white leading-tight mb-4">
              Do Not Let Cost Be a Barrier
            </h2>
            <p className="text-base text-white/70 mb-8 leading-relaxed max-w-[560px] mx-auto">
              We are committed to making Catholic education available to every family that desires it. Contact us and we will work together to find a solution.
            </p>
            <div className="flex gap-4 flex-wrap justify-center">
              <Link href="/schools/find" className="btn btn-primary">
                Find a School
              </Link>
              <Link href="/give/appeal" className="btn btn-outline" style={{ borderColor: "rgba(255,255,255,0.2)" }}>
                Support Catholic Schools
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div className="bg-cream rounded-xl p-6 border border-border text-center">
      <div className="font-heading text-[clamp(28px,3.5vw,44px)] font-bold text-navy leading-none mb-1">{number}</div>
      <div className="text-xs font-semibold text-text-light tracking-wider uppercase">{label}</div>
    </div>
  );
}

function AidCard({ title, desc, highlight }: { title: string; desc: string; highlight: string }) {
  return (
    <div className="bg-white rounded-2xl border border-border p-8 shadow-[var(--shadow-soft)]">
      <h3 className="font-heading text-2xl font-bold text-navy mb-3">{title}</h3>
      <p className="text-sm text-text-medium leading-relaxed mb-4">{desc}</p>
      <div className="bg-gold-pale rounded-lg p-3 text-sm font-semibold text-navy">
        {highlight}
      </div>
    </div>
  );
}

function OptionCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="bg-cream rounded-xl p-6 border border-border">
      <h3 className="font-heading text-lg font-bold text-navy mb-2">{title}</h3>
      <p className="text-sm text-text-medium leading-relaxed">{desc}</p>
    </div>
  );
}
