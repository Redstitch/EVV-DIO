import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Media Inquiries",
  description:
    "Media resources, press releases, brand guidelines, and contact information for journalists covering the Catholic Diocese of Evansville.",
};

const pressReleases = [
  {
    date: "March 28, 2026",
    title: "Bishop Siegel Announces Pastoral Priorities for 2025\u20132030",
    excerpt:
      "The Diocese of Evansville unveils a comprehensive five-year pastoral plan centered on the themes of Encounter, Deepen, and Engage.",
  },
  {
    date: "March 15, 2026",
    title: "Catholic Charities Expands Family Services in Vanderburgh County",
    excerpt:
      "New programs will serve an additional 400 families annually, bringing the total to more than 2,800 families receiving direct services.",
  },
  {
    date: "February 20, 2026",
    title: "Diocese Awards Record 850 Scholarships for 2026\u20132027 School Year",
    excerpt:
      "Catholic school families across the diocese receive scholarship support through the Catholic Ministries Appeal and parish-based funds.",
  },
  {
    date: "January 10, 2026",
    title: "Catholic Schools Week Celebrates 26 Schools Across the Diocese",
    excerpt:
      "National Catholic Schools Week highlights the academic excellence, faith formation, and community impact of Catholic education in Southwestern Indiana.",
  },
  {
    date: "December 5, 2025",
    title: "Diocese of Evansville Launches Redesigned Website and Communications Platform",
    excerpt:
      "A new digital experience connects the faithful with parish resources, news, and ministry information across all 12 counties.",
  },
];

export default function PressRoomPage() {
  return (
    <>
      <PageHero
        label="About"
        title="Media Inquiries"
        subtitle="Media resources, press releases, and contact information for journalists."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Media Inquiries" },
        ]}
      />

      <main id="main-content">
        {/* Media Contact */}
        <section className="section-padding bg-warm-white">
          <div className="max-w-[1080px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12">
              <div>
                <div className="section-label text-left">Media Contact</div>
                <h2 className="section-title text-left">Office of Communications</h2>
                <p className="text-base text-text-medium leading-relaxed mb-6">
                  For media inquiries, interview requests, or press credentials, please contact the Director of Communications. We strive to respond to all media requests within one business day.
                </p>

                <div className="bg-cream rounded-xl p-6 border border-border mb-6">
                  <h3 className="font-heading text-lg font-bold text-navy mb-1">Sarah Weber</h3>
                  <p className="text-sm text-blue font-semibold mb-3">Director of Communications</p>
                  <div className="space-y-1.5">
                    <p className="text-sm text-text-medium">
                      <strong className="text-navy">Phone:</strong>{" "}
                      <a href="tel:8124245536" className="text-blue hover:text-navy transition-colors">(812) 424-5536 ext. 270</a>
                    </p>
                    <p className="text-sm text-text-medium">
                      <strong className="text-navy">Email:</strong>{" "}
                      <a href="mailto:sweber@evdio.org" className="text-blue hover:text-navy transition-colors">sweber@evdio.org</a>
                    </p>
                    <p className="text-sm text-text-medium">
                      <strong className="text-navy">After Hours:</strong>{" "}
                      <a href="mailto:media@evdio.org" className="text-blue hover:text-navy transition-colors">media@evdio.org</a>
                    </p>
                  </div>
                </div>

                <div className="bg-cream rounded-xl p-6 border border-border">
                  <h3 className="font-heading text-lg font-bold text-navy mb-3">Diocese at a Glance</h3>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div><span className="text-text-light">Bishop:</span> <span className="text-navy font-semibold">Joseph M. Siegel</span></div>
                    <div><span className="text-text-light">Installed:</span> <span className="text-navy font-semibold">Dec 15, 2017</span></div>
                    <div><span className="text-text-light">Catholics:</span> <span className="text-navy font-semibold">79,500</span></div>
                    <div><span className="text-text-light">Parishes:</span> <span className="text-navy font-semibold">45</span></div>
                    <div><span className="text-text-light">Schools:</span> <span className="text-navy font-semibold">26</span></div>
                    <div><span className="text-text-light">Counties:</span> <span className="text-navy font-semibold">12</span></div>
                    <div><span className="text-text-light">Deaneries:</span> <span className="text-navy font-semibold">4</span></div>
                    <div><span className="text-text-light">Est.:</span> <span className="text-navy font-semibold">November 11, 1944</span></div>
                  </div>
                </div>
              </div>

              {/* Brand Assets */}
              <div>
                <div className="section-label text-left">Brand Assets</div>
                <h2 className="section-title text-left">For Media Use</h2>
                <p className="text-base text-text-medium leading-relaxed mb-6">
                  Download official logos, the diocesan crest, and the Bishop&rsquo;s official portrait for media use. Please use these assets in accordance with our brand guidelines.
                </p>

                <div className="space-y-4">
                  <div className="bg-cream rounded-xl p-6 border border-border flex items-center gap-4">
                    <div className="w-14 h-14 rounded-lg bg-navy/[0.06] flex items-center justify-center flex-shrink-0">
                      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-navy" aria-hidden="true">
                        <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-heading text-base font-bold text-navy">Diocesan Crest</h4>
                      <p className="text-xs text-text-light">PNG, SVG formats</p>
                    </div>
                    <button className="text-xs font-semibold text-blue hover:text-navy transition-colors">Download</button>
                  </div>

                  <div className="bg-cream rounded-xl p-6 border border-border flex items-center gap-4">
                    <div className="w-14 h-14 rounded-lg bg-navy/[0.06] flex items-center justify-center flex-shrink-0">
                      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-navy" aria-hidden="true">
                        <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-heading text-base font-bold text-navy">Bishop Siegel &mdash; Official Portrait</h4>
                      <p className="text-xs text-text-light">High-resolution JPEG</p>
                    </div>
                    <button className="text-xs font-semibold text-blue hover:text-navy transition-colors">Download</button>
                  </div>

                  <div className="bg-cream rounded-xl p-6 border border-border flex items-center gap-4">
                    <div className="w-14 h-14 rounded-lg bg-navy/[0.06] flex items-center justify-center flex-shrink-0">
                      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-navy" aria-hidden="true">
                        <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-heading text-base font-bold text-navy">Brand Guidelines</h4>
                      <p className="text-xs text-text-light">PDF document</p>
                    </div>
                    <button className="text-xs font-semibold text-blue hover:text-navy transition-colors">Download</button>
                  </div>

                  <div className="bg-cream rounded-xl p-6 border border-border flex items-center gap-4">
                    <div className="w-14 h-14 rounded-lg bg-navy/[0.06] flex items-center justify-center flex-shrink-0">
                      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-navy" aria-hidden="true">
                        <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-heading text-base font-bold text-navy">Diocese Fact Sheet</h4>
                      <p className="text-xs text-text-light">PDF document</p>
                    </div>
                    <button className="text-xs font-semibold text-blue hover:text-navy transition-colors">Download</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Press Releases */}
        <section className="section-padding bg-cream">
          <div className="max-w-[1080px] mx-auto">
            <div className="section-label">Recent Releases</div>
            <h2 className="section-title">Press Releases</h2>
            <div className="space-y-4 mt-10">
              {pressReleases.map((release) => (
                <div
                  key={release.title}
                  className="bg-white rounded-xl p-6 border border-border hover:border-gold/30 transition-colors group cursor-pointer"
                >
                  <p className="text-xs text-text-light font-semibold mb-2">{release.date}</p>
                  <h3 className="font-heading text-lg font-bold text-navy mb-2 group-hover:text-blue transition-colors">
                    {release.title}
                  </h3>
                  <p className="text-sm text-text-medium leading-relaxed">{release.excerpt}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-navy py-16 px-8">
          <div className="max-w-[900px] mx-auto text-center">
            <h2 className="font-heading text-[clamp(24px,3vw,36px)] font-bold text-white leading-tight mb-4">
              Read The Message
            </h2>
            <p className="text-base text-white/70 mb-8 max-w-[560px] mx-auto leading-relaxed">
              The Message is our diocesan newspaper, providing Catholic journalism and community news to Southwestern Indiana since 1970.
            </p>
            <Link href="/the-message" className="btn btn-primary">
              Visit The Message
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
