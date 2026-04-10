import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Senior Ministry",
  description:
    "Ministry to older adults in the Diocese of Evansville. Companionship, spiritual enrichment, and support for seniors in our Catholic community.",
};

export default function SeniorMinistryPage() {
  return (
    <>
      <PageHero
        label="Ministries"
        title="Senior Ministry"
        subtitle="Honoring and serving the wisdom, faith, and dignity of our older adults."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Ministries", href: "/ministries" },
          { label: "Senior Ministry" },
        ]}
      />

      <main id="main-content">
        <section className="section-padding bg-cream">
          <div className="max-w-[1280px] mx-auto">
            <div className="bg-white rounded-xl border border-border p-8 mb-10">
              <h2 className="font-heading text-2xl font-bold text-navy mb-4">Our Mission</h2>
              <p className="text-text-medium leading-relaxed mb-4">
                The Senior Ministry of the Diocese of Evansville recognizes that older adults are not simply recipients of care but active, vital members of the Church whose wisdom, experience, and faith enrich the entire community. Our ministry seeks to accompany seniors in their spiritual journey while addressing their practical needs.
              </p>
              <p className="text-text-medium leading-relaxed">
                Through parish-based programs, diocesan events, and partnerships with Catholic Charities, we ensure that no senior in our diocese feels isolated or forgotten.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
              <div className="bg-white rounded-xl border border-border p-6">
                <h3 className="font-heading text-lg font-bold text-navy mb-2">Homebound Ministry</h3>
                <p className="text-sm text-text-medium leading-relaxed">Extraordinary Ministers of Holy Communion bring the Eucharist to those unable to attend Mass. Pastoral visits provide companionship and spiritual support.</p>
              </div>
              <div className="bg-white rounded-xl border border-border p-6">
                <h3 className="font-heading text-lg font-bold text-navy mb-2">Senior Retreats</h3>
                <p className="text-sm text-text-medium leading-relaxed">Day retreats and half-day gatherings at the Sarto Retreat Center designed for the spiritual needs and interests of older adults.</p>
              </div>
              <div className="bg-white rounded-xl border border-border p-6">
                <h3 className="font-heading text-lg font-bold text-navy mb-2">Parish Social Groups</h3>
                <p className="text-sm text-text-medium leading-relaxed">Many parishes host regular gatherings, luncheons, card groups, and outings that provide fellowship and connection for seniors.</p>
              </div>
              <div className="bg-white rounded-xl border border-border p-6">
                <h3 className="font-heading text-lg font-bold text-navy mb-2">Caregiver Support</h3>
                <p className="text-sm text-text-medium leading-relaxed">Resources and support groups for family members who care for aging loved ones, including respite care referrals and spiritual support.</p>
              </div>
            </div>

            <div className="bg-navy rounded-xl p-8 text-center">
              <h2 className="font-heading text-2xl font-bold text-white mb-3">Anointing of the Sick</h2>
              <p className="text-white/70 text-sm mb-4 max-w-[600px] mx-auto leading-relaxed">
                The Sacrament of the Anointing of the Sick is available to any Catholic who is seriously ill, facing surgery, or weakened by advanced age. Contact your parish to arrange for a priest to administer this sacrament.
              </p>
              <Link href="/parishes/directory" className="text-gold text-sm font-semibold hover:text-gold-light transition-colors">
                Find Your Parish &rarr;
              </Link>
            </div>

            <div className="mt-8 text-center">
              <Link href="/ministries" className="btn btn-secondary">
                All Ministries
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
