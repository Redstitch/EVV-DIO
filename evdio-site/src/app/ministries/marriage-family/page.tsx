import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Marriage & Family Life",
  description:
    "Marriage preparation, enrichment, and family life ministry in the Diocese of Evansville. Supporting couples and families at every stage of life.",
};

export default function MarriageFamilyPage() {
  return (
    <>
      <PageHero
        label="Ministries"
        title="Marriage & Family Life"
        subtitle="Strengthening marriages and families as the foundation of the domestic church."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Ministries", href: "/ministries" },
          { label: "Marriage & Family Life" },
        ]}
      />

      <div style={{ padding: "0 40px", maxWidth: 1440, margin: "0 auto" }}>
        <div style={{ position: "relative", borderRadius: 24, overflow: "hidden", background: "var(--navy)", height: 480 }}>
          <Image
            src="/images/stock/cathedral-interior.jpg"
            alt="Interior of St. Benedict Cathedral, Evansville."
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>

      <main id="main-content">
        <section className="section-padding bg-cream">
          <div className="max-w-[1280px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10">
              <div>
                <h2 className="font-heading text-2xl font-bold text-navy mb-4">Our Mission</h2>
                <p className="text-text-medium leading-relaxed mb-4">
                  The Office of Marriage and Family Life supports couples and families across the Diocese of Evansville through every season of life. From marriage preparation to enrichment programs, from parenting resources to support during difficult times, we walk alongside families as they strive to live out their vocation in the domestic church.
                </p>
                <p className="text-text-medium leading-relaxed mb-6">
                  Marriage is a sacrament, a covenant of love that reflects Christ&rsquo;s love for the Church. Our ministry exists to help couples encounter that love more deeply, to grow together in faith, and to build a family life rooted in prayer, forgiveness, and service.
                </p>

                <h3 className="font-heading text-xl font-bold text-navy mb-3">Programs & Services</h3>
                <div className="space-y-4">
                  <ServiceItem title="Marriage Preparation" description="Required preparation for couples planning to marry in the Catholic Church, including Sponsor Couple programs, weekend retreats, and natural family planning instruction." />
                  <ServiceItem title="Marriage Enrichment" description="Ongoing programs for married couples, including date nights, retreats, and small group studies designed to strengthen the bond of marriage." />
                  <ServiceItem title="Natural Family Planning" description="Classes and support in the Creighton Model, Sympto-Thermal Method, and Marquette Method, offered at parishes and the Catholic Center." />
                  <ServiceItem title="Divorce & Separation Support" description="Pastoral support and referrals for those experiencing the pain of divorce or separation, including annulment guidance." />
                  <ServiceItem title="Parenting Resources" description="Workshops, book studies, and speaker events for parents navigating the joys and challenges of raising children in the faith." />
                </div>
              </div>

              <div>
                <div className="bg-white rounded-xl border border-border p-7 mb-6">
                  <h3 className="font-heading text-lg font-bold text-navy mb-4">Contact Information</h3>
                  <div className="space-y-3 text-sm text-text-medium">
                    <div>
                      <strong className="text-navy block text-xs uppercase tracking-wider mb-0.5">Director</strong>
                      Office of Family Life
                    </div>
                    <div>
                      <strong className="text-navy block text-xs uppercase tracking-wider mb-0.5">Phone</strong>
                      (812) 424-5536
                    </div>
                    <div>
                      <strong className="text-navy block text-xs uppercase tracking-wider mb-0.5">Email</strong>
                      familylife@evdio.org
                    </div>
                  </div>
                </div>

                <div className="bg-navy rounded-xl p-7">
                  <h3 className="font-heading text-lg font-bold text-gold mb-3">Getting Married?</h3>
                  <p className="text-white/70 text-sm leading-relaxed mb-4">
                    Couples should contact their parish at least six months before their desired wedding date to begin the marriage preparation process.
                  </p>
                  <Link href="/parishes/directory" className="text-gold text-sm font-semibold hover:text-gold-light transition-colors">
                    Find Your Parish &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function ServiceItem({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-white rounded-lg border border-border p-5">
      <h4 className="font-heading text-base font-bold text-navy mb-1">{title}</h4>
      <p className="text-sm text-text-medium leading-relaxed">{description}</p>
    </div>
  );
}
