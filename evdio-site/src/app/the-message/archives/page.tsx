import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Archives",
  description:
    "Browse the archives of The Message, the Catholic newspaper of the Diocese of Evansville, published continuously since 1970.",
};

export default function ArchivesPage() {
  return (
    <>
      <PageHero
        label="The Message"
        title="Archives"
        subtitle="Over five decades of Catholic journalism serving Southwestern Indiana."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "The Message", href: "/the-message" },
          { label: "Archives" },
        ]}
      />

      <main id="main-content">
        <section className="section-padding bg-cream">
          <div className="max-w-[1280px] mx-auto">
            <div className="bg-white rounded-xl border border-border p-8 mb-10">
              <h2 className="font-heading text-2xl font-bold text-navy mb-3">About the Archives</h2>
              <p className="text-text-medium text-sm leading-relaxed mb-4">
                The Message has been published continuously since 1970, documenting the life of the Catholic Church in Southwestern Indiana through more than five decades of change and growth. Our archives preserve the stories of parishes, schools, bishops, priests, religious, and lay faithful who have shaped the diocese.
              </p>
              <p className="text-text-medium text-sm leading-relaxed">
                We are currently working to digitize our full archive. Recent issues are available digitally, and older issues can be accessed by contacting our office.
              </p>
            </div>

            <h2 className="font-heading text-2xl font-bold text-navy mb-6">Browse by Year</h2>

            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3 mb-12">
              {Array.from({ length: 57 }, (_, i) => 2026 - i).map((year) => (
                <div
                  key={year}
                  className="bg-white rounded-lg border border-border p-3 text-center hover:border-gold/40 hover:shadow-[var(--shadow-soft)] transition-all cursor-pointer"
                >
                  <span className="font-heading text-lg font-bold text-navy">{year}</span>
                </div>
              ))}
            </div>

            <h2 className="font-heading text-2xl font-bold text-navy mb-6">Notable Archives</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              <div className="bg-white rounded-xl border border-border p-6">
                <span className="text-[10px] uppercase tracking-wider text-gold font-bold">1970</span>
                <h3 className="font-heading text-lg font-bold text-navy mt-1 mb-2">The First Issue</h3>
                <p className="text-sm text-text-medium">The inaugural edition of The Message, launched under Bishop Francis Shea to serve the growing Catholic community of the diocese.</p>
              </div>
              <div className="bg-white rounded-xl border border-border p-6">
                <span className="text-[10px] uppercase tracking-wider text-gold font-bold">1989</span>
                <h3 className="font-heading text-lg font-bold text-navy mt-1 mb-2">Installation of Bishop Gettelfinger</h3>
                <p className="text-sm text-text-medium">Coverage of the installation of Gerald Gettelfinger as the fourth Bishop of Evansville and his vision for the diocese.</p>
              </div>
              <div className="bg-white rounded-xl border border-border p-6">
                <span className="text-[10px] uppercase tracking-wider text-gold font-bold">2011</span>
                <h3 className="font-heading text-lg font-bold text-navy mt-1 mb-2">Bishop Thompson&rsquo;s Appointment</h3>
                <p className="text-sm text-text-medium">Special coverage of the appointment and installation of Charles C. Thompson as the fifth Bishop of Evansville.</p>
              </div>
              <div className="bg-white rounded-xl border border-border p-6">
                <span className="text-[10px] uppercase tracking-wider text-gold font-bold">2017</span>
                <h3 className="font-heading text-lg font-bold text-navy mt-1 mb-2">Bishop Siegel&rsquo;s Installation</h3>
                <p className="text-sm text-text-medium">Joseph M. Siegel becomes the sixth Bishop of Evansville, bringing a new vision of encounter and engagement to the diocese.</p>
              </div>
              <div className="bg-white rounded-xl border border-border p-6">
                <span className="text-[10px] uppercase tracking-wider text-gold font-bold">2020</span>
                <h3 className="font-heading text-lg font-bold text-navy mt-1 mb-2">50th Anniversary Edition</h3>
                <p className="text-sm text-text-medium">A special commemorative issue celebrating five decades of The Message, with reflections from past editors and readers.</p>
              </div>
              <div className="bg-white rounded-xl border border-border p-6">
                <span className="text-[10px] uppercase tracking-wider text-gold font-bold">2023</span>
                <h3 className="font-heading text-lg font-bold text-navy mt-1 mb-2">Eucharistic Revival Coverage</h3>
                <p className="text-sm text-text-medium">Extensive reporting on the National Eucharistic Revival and its impact on parishes across the Diocese of Evansville.</p>
              </div>
            </div>

            <div className="mt-10 bg-navy rounded-xl p-8 text-center">
              <h3 className="font-heading text-xl font-bold text-white mb-3">Need Help Finding an Article?</h3>
              <p className="text-white/70 text-sm mb-5 max-w-[500px] mx-auto">
                Contact The Message office and our staff will help you locate articles from any year in our archive.
              </p>
              <Link href="mailto:message@evdio.org" className="text-gold text-sm font-semibold hover:text-gold-light transition-colors">
                message@evdio.org &rarr;
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
