import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Safe Environment",
  description:
    "The Diocese of Evansville is committed to protecting children and vulnerable adults through comprehensive safe environment policies, training, and accountability measures.",
};

export default function SafeEnvironmentPage() {
  return (
    <>
      <PageHero
        label="About"
        title="Safe Environment"
        subtitle="Our unwavering commitment to the protection of children and vulnerable adults."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Safe Environment" },
        ]}
      />

      <main id="main-content">
        {/* Commitment Statement */}
        <section className="section-padding bg-warm-white">
          <div className="max-w-[900px] mx-auto">
            <div className="section-label text-left">Our Commitment</div>
            <h2 className="section-title text-left">
              Protecting Those Entrusted to Our Care
            </h2>
            <div className="space-y-4 text-base text-text-medium leading-relaxed">
              <p>
                The Catholic Diocese of Evansville is deeply committed to the safety and protection of children, young people, and vulnerable adults. This commitment is rooted in our belief in the sacred dignity of every person and our responsibility as a faith community to safeguard all those entrusted to our care.
              </p>
              <p>
                We fully adhere to the <em>Charter for the Protection of Children and Young People</em> adopted by the United States Conference of Catholic Bishops (USCCB) and undergo regular audits to ensure compliance. We have implemented comprehensive policies and programs that include mandatory background checks, safe environment training, clear reporting procedures, and a zero-tolerance policy for abuse.
              </p>
              <p>
                Bishop Siegel has made child protection a top priority, stating: <strong className="text-navy">&ldquo;There is no higher obligation than to protect the most vulnerable among us. We must always put their safety first.&rdquo;</strong>
              </p>
            </div>
          </div>
        </section>

        {/* Programs & Policies */}
        <section className="section-padding bg-cream">
          <div className="max-w-[1080px] mx-auto">
            <div className="section-label">Programs & Policies</div>
            <h2 className="section-title">How We Protect</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
              <PolicyCard
                icon={
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
                }
                title="Background Checks"
                description="All clergy, employees, and volunteers who work with minors undergo comprehensive criminal background checks before beginning service."
              />
              <PolicyCard
                icon={
                  <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
                }
                title="Safe Environment Training"
                description="Mandatory training programs for all adults in parish and school ministry, covering recognition of abuse, appropriate boundaries, and reporting procedures."
              />
              <PolicyCard
                icon={
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                }
                title="Youth Protection Programs"
                description="Age-appropriate safety education for children and young people in our schools and religious education programs, empowering them to recognize and report unsafe situations."
              />
              <PolicyCard
                icon={
                  <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
                }
                title="Clear Policies"
                description="Written diocesan policies governing codes of conduct, supervision of minors, use of technology, travel with youth, and other areas that protect children and adults."
              />
              <PolicyCard
                icon={
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                }
                title="Regular Audits"
                description="Annual compliance audits conducted under the USCCB Charter ensure our programs meet national standards. Results are published publicly."
              />
              <PolicyCard
                icon={
                  <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
                }
                title="Reporting Procedures"
                description="Clear, accessible reporting procedures for anyone who suspects abuse. We encourage immediate reporting to civil authorities and provide diocesan resources."
              />
            </div>
          </div>
        </section>

        {/* Victim Assistance */}
        <section className="section-padding bg-warm-white">
          <div className="max-w-[900px] mx-auto">
            <div className="section-label text-left">Victim Assistance</div>
            <h2 className="section-title text-left">Support for Survivors</h2>
            <div className="space-y-4 text-base text-text-medium leading-relaxed mb-8">
              <p>
                The Diocese of Evansville provides a Victim Assistance Coordinator to support anyone who has been affected by abuse involving Church personnel. This confidential service connects survivors with counseling, spiritual support, and other resources.
              </p>
              <p>
                We listen to and believe those who come forward. Our commitment to healing and justice is ongoing, and we encourage anyone who has experienced abuse to reach out.
              </p>
            </div>

            <div className="bg-accent-red/[0.04] rounded-2xl p-8 border border-accent-red/20">
              <h3 className="font-heading text-xl font-bold text-accent-red mb-4">
                If You or Someone You Know Has Been Abused
              </h3>
              <div className="space-y-3 text-sm text-text-medium leading-relaxed">
                <p>
                  <strong className="text-navy">1. Contact civil authorities immediately.</strong> Call local law enforcement or the Indiana Child Abuse Hotline at <a href="tel:18008002284" className="text-blue font-semibold hover:text-navy transition-colors">1-800-800-5556</a>.
                </p>
                <p>
                  <strong className="text-navy">2. Contact the diocese.</strong> Report to the diocesan Victim Assistance Coordinator by calling <a href="tel:8124245536" className="text-blue font-semibold hover:text-navy transition-colors">(812) 424-5536</a>.
                </p>
                <p>
                  <strong className="text-navy">3. Visit our Report Abuse page</strong> for additional reporting options and resources.
                </p>
              </div>
              <Link href="/about/report-abuse" className="btn btn-primary mt-6 text-sm">
                Report Abuse
              </Link>
            </div>
          </div>
        </section>

        {/* Resources & Links */}
        <section className="section-padding bg-cream">
          <div className="max-w-[1080px] mx-auto">
            <div className="section-label">Additional Resources</div>
            <h2 className="section-title">Safe Environment Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
              <ResourceLink
                title="USCCB Charter for the Protection of Children and Young People"
                url="https://www.usccb.org/offices/child-and-youth-protection/charter-protection-children-and-young-people"
              />
              <ResourceLink
                title="VIRTUS Training Programs"
                url="https://www.virtusonline.org"
              />
              <ResourceLink
                title="Indiana Department of Child Services"
                url="https://www.in.gov/dcs/"
              />
              <ResourceLink
                title="National Center for Missing & Exploited Children"
                url="https://www.missingkids.org"
              />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-navy py-16 px-8">
          <div className="max-w-[900px] mx-auto text-center">
            <h2 className="font-heading text-[clamp(24px,3vw,36px)] font-bold text-white leading-tight mb-4">
              Questions About Our Safe Environment Programs?
            </h2>
            <p className="text-base text-white/70 mb-8 max-w-[560px] mx-auto leading-relaxed">
              Contact the Office of Safe Environment for information about training, policies, or compliance.
            </p>
            <div className="flex gap-4 flex-wrap justify-center">
              <a href="mailto:safeenvironment@evdio.org" className="btn btn-primary">
                safeenvironment@evdio.org
              </a>
              <Link href="/about/report-abuse" className="btn btn-outline" style={{ borderColor: "rgba(255,255,255,0.2)" }}>
                Report Abuse
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function PolicyCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white rounded-xl p-6 border border-border">
      <div className="w-11 h-11 rounded-lg bg-navy/[0.06] flex items-center justify-center mb-4">
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-navy" aria-hidden="true">
          {icon}
        </svg>
      </div>
      <h3 className="font-heading text-lg font-bold text-navy mb-2">{title}</h3>
      <p className="text-sm text-text-medium leading-relaxed">{description}</p>
    </div>
  );
}

function ResourceLink({ title, url }: { title: string; url: string }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group bg-white rounded-xl p-5 border border-border hover:border-gold/40 transition-all flex items-center gap-4"
    >
      <div className="flex-1">
        <h3 className="font-heading text-base font-bold text-navy group-hover:text-blue transition-colors">
          {title}
        </h3>
      </div>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-4 h-4 text-text-light group-hover:text-blue transition-colors flex-shrink-0" aria-hidden="true">
        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
        <polyline points="15 3 21 3 21 9" />
        <line x1="10" y1="14" x2="21" y2="3" />
      </svg>
    </a>
  );
}
