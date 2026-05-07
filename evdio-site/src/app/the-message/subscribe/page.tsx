import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Subscribe to The Message",
  description:
    "Subscribe to The Message, the weekly Catholic newspaper of the Diocese of Evansville. Print and digital subscription options available.",
};

export default function SubscribePage() {
  return (
    <>
      <section className="feature-head" aria-labelledby="title">
        <div className="grid">
          <div className="text">
            <p className="kicker">THE MESSAGE</p>
            <h1 id="title"><em>Subscribe.</em></h1>
            <p className="deck">Stay connected with the Catholic community in Southwestern Indiana.</p>
          </div>
          <figure className="photo">
            <Image
              src="/images/stock/easter-vigil-mass.jpg"
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
          <div className="max-w-[1280px] mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading text-[clamp(24px,3.5vw,32px)] font-bold text-navy mb-3">
                Choose Your Subscription
              </h2>
              <p className="text-text-medium max-w-[500px] mx-auto">
                Support local Catholic journalism with a subscription to The Message.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[960px] mx-auto">
              {/* Print */}
              <div className="bg-white rounded-xl border border-border p-8 text-center">
                <h3 className="font-heading text-xl font-bold text-navy mb-2">Print Edition</h3>
                <div className="font-heading text-4xl font-bold text-navy my-4">
                  $24<span className="text-base font-normal text-text-light">/year</span>
                </div>
                <ul className="space-y-2 text-sm text-text-medium mb-8 text-left">
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-0.5">&#10003;</span>
                    Weekly print edition delivered to your home
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-0.5">&#10003;</span>
                    52 issues per year
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-0.5">&#10003;</span>
                    Full news, features, and columns
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-0.5">&#10003;</span>
                    Special holiday editions
                  </li>
                </ul>
                <Link href="mailto:message@evdio.org?subject=Print Subscription" className="btn btn-primary w-full justify-center text-sm">
                  Subscribe
                </Link>
              </div>

              {/* Digital - Featured */}
              <div className="bg-white rounded-xl border-2 border-gold p-8 text-center relative">
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-navy text-[10px] font-bold uppercase tracking-wider px-4 py-1 rounded-full">
                  Most Popular
                </span>
                <h3 className="font-heading text-xl font-bold text-navy mb-2">Digital Edition</h3>
                <div className="font-heading text-4xl font-bold text-navy my-4">
                  $18<span className="text-base font-normal text-text-light">/year</span>
                </div>
                <ul className="space-y-2 text-sm text-text-medium mb-8 text-left">
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-0.5">&#10003;</span>
                    Full digital edition every week
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-0.5">&#10003;</span>
                    Read on any device
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-0.5">&#10003;</span>
                    Early access to stories
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-0.5">&#10003;</span>
                    Searchable archive access
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-0.5">&#10003;</span>
                    Email newsletter
                  </li>
                </ul>
                <Link href="mailto:message@evdio.org?subject=Digital Subscription" className="btn btn-primary w-full justify-center text-sm">
                  Subscribe
                </Link>
              </div>

              {/* Bundle */}
              <div className="bg-white rounded-xl border border-border p-8 text-center">
                <h3 className="font-heading text-xl font-bold text-navy mb-2">Print + Digital</h3>
                <div className="font-heading text-4xl font-bold text-navy my-4">
                  $36<span className="text-base font-normal text-text-light">/year</span>
                </div>
                <ul className="space-y-2 text-sm text-text-medium mb-8 text-left">
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-0.5">&#10003;</span>
                    Everything in Print
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-0.5">&#10003;</span>
                    Everything in Digital
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-0.5">&#10003;</span>
                    Best value for complete access
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-0.5">&#10003;</span>
                    Gift subscriptions available
                  </li>
                </ul>
                <Link href="mailto:message@evdio.org?subject=Bundle Subscription" className="btn btn-secondary w-full justify-center text-sm">
                  Subscribe
                </Link>
              </div>
            </div>

            <div className="mt-12 bg-white rounded-xl border border-border p-8 max-w-[700px] mx-auto">
              <h2 className="font-heading text-xl font-bold text-navy mb-3 text-center">Parish Bulk Subscriptions</h2>
              <p className="text-text-medium text-sm text-center leading-relaxed mb-4">
                Many parishes in the diocese provide The Message to all registered households as part of their parish budget. Contact your parish office to find out if your subscription is already included.
              </p>
              <p className="text-text-medium text-sm text-center leading-relaxed">
                Parish administrators interested in bulk subscriptions should contact The Message office at <strong className="text-navy">(812) 424-5536</strong> or <strong className="text-navy">message@evdio.org</strong>.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
