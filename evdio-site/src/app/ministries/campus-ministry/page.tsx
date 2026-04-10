import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "College Campus Ministry",
  description:
    "Catholic campus ministry at colleges and universities in the Diocese of Evansville. Mass, fellowship, and faith formation for college students.",
};

export default function CampusMinistryPage() {
  return (
    <>
      <PageHero
        label="Ministries"
        title="College Campus Ministry"
        subtitle="Catholic community and spiritual growth at universities across the diocese."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Ministries", href: "/ministries" },
          { label: "College Campus Ministry" },
        ]}
      />

      <main id="main-content">
        <section className="section-padding bg-cream">
          <div className="max-w-[1280px] mx-auto">
            <div className="bg-white rounded-xl border border-border p-8 mb-10">
              <h2 className="font-heading text-2xl font-bold text-navy mb-4">Our Mission</h2>
              <p className="text-text-medium leading-relaxed mb-4">
                College is a time of tremendous growth, new ideas, and important decisions. Campus ministry in the Diocese of Evansville provides Catholic students with a spiritual home away from home, a community of faith that supports them through the joys and challenges of college life.
              </p>
              <p className="text-text-medium leading-relaxed">
                Whether you are a cradle Catholic, returning to the faith, or simply curious, our campus ministers and student communities welcome you. Come as you are.
              </p>
            </div>

            <h2 className="font-heading text-2xl font-bold text-navy mb-6">Campus Communities</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <div className="bg-white rounded-xl border border-border p-7">
                <h3 className="font-heading text-xl font-bold text-navy mb-2">University of Southern Indiana</h3>
                <p className="text-xs text-text-light mb-3">Evansville, Indiana</p>
                <p className="text-sm text-text-medium leading-relaxed mb-4">
                  The Catholic Campus Center at USI hosts weekly Mass, Bible studies, Adoration, social events, and service projects. A full-time campus minister is available for spiritual direction and pastoral support.
                </p>
                <div className="text-sm text-text-medium space-y-1">
                  <div><strong className="text-navy">Mass:</strong> Sunday 6:00 PM at the campus chapel</div>
                  <div><strong className="text-navy">Contact:</strong> campusministry@usi.edu</div>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-border p-7">
                <h3 className="font-heading text-xl font-bold text-navy mb-2">University of Evansville</h3>
                <p className="text-xs text-text-light mb-3">Evansville, Indiana</p>
                <p className="text-sm text-text-medium leading-relaxed mb-4">
                  Catholic students at UE are served through Neu Chapel programs and the Newman Club, which organizes Mass, social events, retreats, and volunteer opportunities throughout the academic year.
                </p>
                <div className="text-sm text-text-medium space-y-1">
                  <div><strong className="text-navy">Mass:</strong> Sunday 9:00 PM at Neu Chapel</div>
                  <div><strong className="text-navy">Contact:</strong> newman@evansville.edu</div>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-border p-7">
                <h3 className="font-heading text-xl font-bold text-navy mb-2">Vincennes University</h3>
                <p className="text-xs text-text-light mb-3">Vincennes, Indiana</p>
                <p className="text-sm text-text-medium leading-relaxed mb-4">
                  Students at Vincennes University are welcomed at Sacred Heart and St. Francis Xavier parishes, which host student-focused events, meals, and faith-sharing groups during the school year.
                </p>
                <div className="text-sm text-text-medium space-y-1">
                  <div><strong className="text-navy">Mass:</strong> See parish schedules</div>
                  <div><strong className="text-navy">Contact:</strong> (812) 882-0610</div>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-border p-7">
                <h3 className="font-heading text-xl font-bold text-navy mb-2">Saint Meinrad Seminary</h3>
                <p className="text-xs text-text-light mb-3">St. Meinrad, Indiana</p>
                <p className="text-sm text-text-medium leading-relaxed mb-4">
                  One of the premier Catholic seminaries in the United States, Saint Meinrad Seminary and School of Theology forms future priests, deacons, and lay ministers in the Benedictine tradition.
                </p>
                <div className="text-sm text-text-medium space-y-1">
                  <div><strong className="text-navy">Daily liturgy available</strong></div>
                  <div><strong className="text-navy">Website:</strong> saintmeinrad.edu</div>
                </div>
              </div>
            </div>

            <div className="text-center">
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
