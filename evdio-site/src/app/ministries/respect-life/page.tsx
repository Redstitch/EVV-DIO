import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Respect for Life",
  description:
    "The Respect Life ministry of the Diocese of Evansville defends the dignity of every human life from conception to natural death.",
};

export default function RespectLifePage() {
  return (
    <>
      <section className="feature-head" aria-labelledby="title">
        <div className="grid">
          <div className="text">
            <p className="kicker">Ministries</p>
            <h1 id="title">Respect for <em>Life.</em></h1>
            <p className="deck">Defending the dignity of every human life from conception to natural death.</p>
          </div>
          <figure className="photo">
            <Image
              src="/images/stock/community-service.jpg"
              alt="Community service"
              fill
              sizes="(max-width: 960px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
              priority
            />
          </figure>
        </div>
      </section>

      <main id="main-content">
        <section className="section-padding bg-cream">
          <div className="max-w-[1280px] mx-auto">
            <div className="bg-white rounded-xl border border-border p-8 mb-10">
              <h2 className="font-heading text-2xl font-bold text-navy mb-4">Our Mission</h2>
              <p className="text-text-medium leading-relaxed mb-4">
                The Catholic Church teaches that every human life is sacred from the moment of conception to natural death. The Respect Life Office of the Diocese of Evansville works to promote a culture of life through education, advocacy, prayer, and direct support for those in need.
              </p>
              <p className="text-text-medium leading-relaxed">
                We address a wide range of life issues including abortion, euthanasia, the death penalty, assisted suicide, embryonic stem cell research, and human trafficking. Our approach is rooted in the conviction that every person, regardless of age, ability, or circumstances, is made in the image and likeness of God.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
              <div className="bg-white rounded-xl border border-border p-6">
                <h3 className="font-heading text-lg font-bold text-navy mb-2">Education</h3>
                <p className="text-sm text-text-medium leading-relaxed">Parish presentations, school programs, and community workshops on Catholic social teaching and the consistent ethic of life.</p>
              </div>
              <div className="bg-white rounded-xl border border-border p-6">
                <h3 className="font-heading text-lg font-bold text-navy mb-2">Prayer & Witness</h3>
                <p className="text-sm text-text-medium leading-relaxed">Rosary vigils, 40 Days for Life campaigns, participation in the annual March for Life, and parish prayer intentions for life.</p>
              </div>
              <div className="bg-white rounded-xl border border-border p-6">
                <h3 className="font-heading text-lg font-bold text-navy mb-2">Advocacy</h3>
                <p className="text-sm text-text-medium leading-relaxed">Legislative advocacy through the Indiana Catholic Conference, voter education, and grassroots mobilization on life issues.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/ministries/project-rachel" className="group block bg-white rounded-xl border border-border p-7 hover:border-gold/40 hover:shadow-[var(--shadow-card)] transition-all">
                <h3 className="font-heading text-xl font-bold text-navy mb-2 group-hover:text-blue transition-colors">Healing After Abortion</h3>
                <p className="text-sm text-text-medium leading-relaxed">Confidential support through Project Rachel for anyone affected by an abortion experience.</p>
                <span className="text-xs text-gold font-semibold mt-3 inline-block">Learn More &rarr;</span>
              </Link>
              <Link href="/ministries/expectant-mothers" className="group block bg-white rounded-xl border border-border p-7 hover:border-gold/40 hover:shadow-[var(--shadow-card)] transition-all">
                <h3 className="font-heading text-xl font-bold text-navy mb-2 group-hover:text-blue transition-colors">Support for Expectant Mothers</h3>
                <p className="text-sm text-text-medium leading-relaxed">Resources, assistance, and community for mothers facing unexpected or challenging pregnancies.</p>
                <span className="text-xs text-gold font-semibold mt-3 inline-block">Learn More &rarr;</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
