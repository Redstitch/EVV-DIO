import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About The Message",
  description:
    "About The Message, the weekly Catholic newspaper of the Diocese of Evansville. Our mission, history, staff, and how to submit news.",
};

export default function AboutMessagePage() {
  return (
    <>
      <section className="feature-head" aria-labelledby="title">
        <div className="grid">
          <div className="text">
            <p className="kicker">THE MESSAGE</p>
            <h1 id="title">About The <em>Message.</em></h1>
            <p className="deck">The voice of the Catholic community in Southwestern Indiana since 1970.</p>
          </div>
          <figure className="photo">
            <Image
              src="/images/stock/presbyterate-group.jpg"
              alt="Presbyterate gathering of the Diocese of Evansville"
              fill
              sizes="(max-width: 960px) 100vw, 50vw"
              style={{ objectFit: "cover", objectPosition: "center 45%" }}
              priority
            />
          </figure>
        </div>
      </section>

      <main id="main-content">
        <section className="section-padding bg-cream">
          <div className="max-w-[900px] mx-auto">
            <div className="bg-white rounded-xl border border-border p-8 mb-8">
              <h2 className="font-heading text-2xl font-bold text-navy mb-4">Our Mission</h2>
              <p className="text-text-medium leading-relaxed mb-4">
                The Message is the official newspaper of the Catholic Diocese of Evansville. Published weekly, we serve the 79,500 Catholics of our 45 parishes across 12 counties in Southwestern Indiana with news, features, opinion, and spiritual reflection.
              </p>
              <p className="text-text-medium leading-relaxed">
                Our mission is to inform, inspire, and connect the Catholic community by telling the stories of faith, service, and hope that define the Church in our corner of the world. We are committed to the highest standards of Catholic journalism, guided by truth, charity, and the teaching of the Church.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-border p-8 mb-8">
              <h2 className="font-heading text-2xl font-bold text-navy mb-4">Our History</h2>
              <p className="text-text-medium leading-relaxed mb-4">
                The Message was founded in 1970 under the direction of Bishop Francis Shea, who recognized the need for a diocesan newspaper that could connect Catholics across the sprawling 12-county diocese. From its modest beginnings as a monthly bulletin, The Message grew into a weekly publication that has become an essential part of Catholic life in Southwestern Indiana.
              </p>
              <p className="text-text-medium leading-relaxed mb-4">
                Over more than five decades, The Message has covered the installation of four bishops, the opening and closing of parishes, the growth of Catholic schools, the work of Catholic Charities, and the countless stories of ordinary Catholics living extraordinary lives of faith.
              </p>
              <p className="text-text-medium leading-relaxed">
                In 2020, The Message celebrated its 50th anniversary with a special commemorative edition and began expanding its digital presence to reach new audiences.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-border p-8 mb-8">
              <h2 className="font-heading text-2xl font-bold text-navy mb-4">Our Staff</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-cream rounded-lg p-5">
                  <h3 className="font-heading text-lg font-bold text-navy">Tim Lilley</h3>
                  <p className="text-xs text-text-light mb-2">Editor</p>
                  <p className="text-sm text-text-medium">Leads editorial direction and oversees all content for The Message.</p>
                </div>
                <div className="bg-cream rounded-lg p-5">
                  <h3 className="font-heading text-lg font-bold text-navy">Staff Writers</h3>
                  <p className="text-xs text-text-light mb-2">Reporting Team</p>
                  <p className="text-sm text-text-medium">Our team of writers covers diocesan news, parish stories, and Catholic life across the region.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-border p-8 mb-8">
              <h2 className="font-heading text-2xl font-bold text-navy mb-4">Contact Us</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-text-medium">
                <div>
                  <strong className="text-navy block mb-1">Mailing Address</strong>
                  The Message<br />
                  P.O. Box 4169<br />
                  Evansville, IN 47724-0169
                </div>
                <div>
                  <strong className="text-navy block mb-1">Phone & Email</strong>
                  (812) 424-5536<br />
                  message@evdio.org
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-border p-8">
              <h2 className="font-heading text-2xl font-bold text-navy mb-4">Submit News</h2>
              <p className="text-text-medium leading-relaxed mb-4">
                We welcome news from parishes, schools, and Catholic organizations across the diocese. To submit a story idea, event announcement, or press release, please email our editorial team.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Link href="mailto:message@evdio.org" className="btn btn-primary text-sm">
                  Email a Story Tip
                </Link>
                <Link href="/the-message/subscribe" className="btn btn-secondary text-sm">
                  Subscribe to The Message
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
