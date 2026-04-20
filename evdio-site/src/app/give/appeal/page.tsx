import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Catholic Ministries Appeal | Diocese of Evansville",
  description:
    "Support the annual Catholic Ministries Appeal. Your gift funds education, charity, vocations, and parish life across 12 counties in Southwestern Indiana.",
};

export default function AppealPage() {
  return (
    <>
      <section className="feature-head" aria-labelledby="title">
        <div className="grid">
          <div className="text">
            <p className="kicker">Catholic Ministries Appeal</p>
            <h1 id="title">Catholic Ministries <em>Appeal.</em></h1>
            <p className="deck">
              One gift. Many ministries. Every corner of the diocese.
            </p>
          </div>
          <figure className="photo">
            <Image
              src="/images/articles/catholic-ministries-appeal.png"
              alt="Catholic Ministries Appeal — Diocese of Evansville."
              fill
              sizes="(max-width: 960px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
              priority
            />
          </figure>
        </div>
      </section>

      <main id="main-content">
        {/* Campaign Progress */}
        <section className="section-padding bg-warm-white">
          <div className="max-w-[960px] mx-auto">
            <div className="text-center mb-10">
              <div className="section-label">2025&ndash;2026 Campaign</div>
              <h2 className="section-title">Together, We Are Making a Difference</h2>
              <p className="text-base text-text-medium leading-relaxed max-w-[680px] mx-auto">
                The Catholic Ministries Appeal is the single annual campaign that funds the shared ministries of the Diocese of Evansville. Every parish participates. Every dollar stays local.
              </p>
            </div>

            {/* Goal Progress */}
            <div className="bg-white rounded-2xl border border-border p-8 mb-10 shadow-[var(--shadow-soft)]">
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-4">
                <div>
                  <div className="text-sm text-text-light font-semibold uppercase tracking-wider mb-1">Campaign Goal</div>
                  <div className="font-heading text-3xl font-bold text-navy">$4,200,000</div>
                </div>
                <div className="mt-3 sm:mt-0 text-right">
                  <div className="text-sm text-text-light font-semibold uppercase tracking-wider mb-1">Raised So Far</div>
                  <div className="font-heading text-3xl font-bold text-gold">$2,814,000</div>
                </div>
              </div>
              <div className="h-5 bg-cream rounded-full overflow-hidden border border-border mb-3">
                <div className="h-full bg-gold rounded-full transition-all duration-700" style={{ width: "67%" }} />
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-text-medium">67% of goal reached</span>
                <span className="text-text-light">Updated monthly</span>
              </div>
            </div>

            <div className="text-center">
              <a href="#" className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg font-semibold text-base bg-accent-red text-white hover:bg-accent-red/90 transition-colors">
                Make Your Appeal Gift
              </a>
            </div>
          </div>
        </section>

        {/* Impact Areas */}
        <section className="section-padding bg-cream">
          <div className="max-w-[1280px] mx-auto">
            <div className="text-center mb-14">
              <div className="section-label">Where Your Gift Goes</div>
              <h2 className="section-title">Impact Areas</h2>
              <p className="section-subtitle mx-auto">
                Every Appeal gift is divided among the core ministries that serve our 79,500 Catholics across Southwestern Indiana.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ImpactCard
                title="Catholic Education"
                pct="35%"
                desc="Tuition assistance for over 850 students, teacher formation, curriculum development, and support for 26 Catholic schools serving 6,800 students."
              />
              <ImpactCard
                title="Catholic Charities"
                pct="25%"
                desc="Emergency assistance, food pantries, counseling services, refugee resettlement, and family support programs that serve 2,400 families each year."
              />
              <ImpactCard
                title="Parish Life & Evangelization"
                pct="20%"
                desc="Funding for religious education, liturgical ministry training, marriage and family programs, youth ministry, and new evangelization initiatives across 45 parishes."
              />
              <ImpactCard
                title="Vocations & Seminarians"
                pct="12%"
                desc="Support for the formation and education of seminarians, permanent deacon candidates, and vocation awareness programs that help young people hear and respond to God's call."
              />
              <ImpactCard
                title="Clergy Support"
                pct="5%"
                desc="Health care, retirement benefits, and continuing education for our priests and deacons who serve the faithful across the diocese."
              />
              <ImpactCard
                title="Communications & Stewardship"
                pct="3%"
                desc="The Message newspaper, digital communications, and stewardship programs that keep our diocesan community informed and connected."
              />
            </div>
          </div>
        </section>

        {/* Bishop's Message */}
        <section className="section-padding bg-warm-white">
          <div className="max-w-[800px] mx-auto">
            <div className="bg-navy rounded-2xl p-8 md:p-10">
              <div className="section-label text-gold text-left">A Message from Our Bishop</div>
              <blockquote className="font-heading text-xl md:text-2xl text-white leading-relaxed mb-6 italic">
                &ldquo;The Catholic Ministries Appeal is not simply a fundraiser. It is a profound act of faith and communion. When you give, you are saying to your brothers and sisters across Southwestern Indiana: I believe in what we are building together.&rdquo;
              </blockquote>
              <cite className="text-gold font-semibold text-base not-italic">
                &mdash; Bishop Joseph M. Siegel
              </cite>
            </div>
          </div>
        </section>

        {/* Donor Recognition */}
        <section className="section-padding bg-cream">
          <div className="max-w-[960px] mx-auto">
            <div className="text-center mb-10">
              <div className="section-label">Donor Recognition</div>
              <h2 className="section-title">Deo Gratias Society</h2>
              <p className="text-base text-text-medium leading-relaxed max-w-[680px] mx-auto">
                The Deo Gratias Society honors donors who demonstrate extraordinary generosity to the Catholic Ministries Appeal. Members are recognized at a special annual dinner with the Bishop and receive a blessed medal as a token of the diocese&rsquo;s gratitude.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
              <RecogCard
                level="Platinum"
                amount="$10,000+"
                desc="Personal invitation to the Bishop's dinner, name listed in The Message, blessed Deo Gratias medal."
              />
              <RecogCard
                level="Gold"
                amount="$5,000 - $9,999"
                desc="Invitation to recognition reception, name listed in The Message, blessed Deo Gratias medal."
              />
              <RecogCard
                level="Silver"
                amount="$2,500 - $4,999"
                desc="Certificate of gratitude from the Bishop, name listed in The Message, blessed Deo Gratias medal."
              />
            </div>

            <p className="text-sm text-text-light text-center">
              Every donor at every level receives a personal thank-you from the diocese. Every gift matters.
            </p>
          </div>
        </section>

        {/* How to Give */}
        <section className="section-padding bg-warm-white">
          <div className="max-w-[800px] mx-auto">
            <div className="text-center mb-10">
              <div className="section-label">How to Give</div>
              <h2 className="section-title">Make Your Gift Today</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
              <MethodCard title="Online" desc="Give securely through the diocesan OSV online giving portal. You can make a one-time gift or set up monthly payments." />
              <MethodCard title="By Mail" desc="Complete a pledge card and return it to your parish or the diocesan office at P.O. Box 4169, Evansville, IN 47724." />
              <MethodCard title="Through Your Parish" desc="Drop your pledge card in the collection basket or deliver it to your parish office. Your parish receives credit for every gift." />
              <MethodCard title="Stock or IRA Gift" desc="Contact the diocesan Finance Office at (812) 424-5536 for instructions on giving appreciated securities or qualified charitable IRA distributions." />
            </div>

            <div className="text-center">
              <a href="#" className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg font-semibold text-base bg-accent-red text-white hover:bg-accent-red/90 transition-colors">
                Give to the Appeal Now
              </a>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-navy text-white">
          <div className="max-w-[800px] mx-auto text-center">
            <div className="section-label text-gold">Questions?</div>
            <h2 className="font-heading text-[clamp(28px,4vw,40px)] font-bold text-white leading-tight mb-4">
              We Are Here to Help
            </h2>
            <p className="text-base text-white/70 mb-6 leading-relaxed max-w-[560px] mx-auto">
              Contact the Stewardship and Development Office for questions about the Catholic Ministries Appeal, pledge payments, or donor recognition.
            </p>
            <div className="text-gold font-semibold text-lg">(812) 424-5536 | appeal@evdio.org</div>
          </div>
        </section>
      </main>
    </>
  );
}

function ImpactCard({ title, pct, desc }: { title: string; pct: string; desc: string }) {
  return (
    <div className="bg-white rounded-xl border border-border p-7">
      <div className="flex items-center gap-3 mb-3">
        <div className="font-heading text-2xl font-bold text-gold">{pct}</div>
        <h3 className="font-heading text-lg font-bold text-navy">{title}</h3>
      </div>
      <p className="text-sm text-text-medium leading-relaxed">{desc}</p>
    </div>
  );
}

function RecogCard({ level, amount, desc }: { level: string; amount: string; desc: string }) {
  return (
    <div className="bg-white rounded-xl border border-border p-6 text-center">
      <div className="font-heading text-xl font-bold text-gold mb-1">{level}</div>
      <div className="text-sm font-semibold text-navy mb-3">{amount}</div>
      <p className="text-xs text-text-medium leading-relaxed">{desc}</p>
    </div>
  );
}

function MethodCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="bg-cream rounded-xl border border-border p-6">
      <h3 className="font-heading text-base font-bold text-navy mb-2">{title}</h3>
      <p className="text-sm text-text-medium leading-relaxed">{desc}</p>
    </div>
  );
}
