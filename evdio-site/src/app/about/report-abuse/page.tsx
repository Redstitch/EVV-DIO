import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Report Abuse",
  description:
    "How to report suspected abuse involving Catholic Church personnel in the Diocese of Evansville. We take every report seriously and are committed to transparency and justice.",
};

export default function ReportAbusePage() {
  return (
    <>
      <section className="feature-head" aria-labelledby="title">
        <div className="grid">
          <div className="text">
            <p className="kicker">Safety</p>
            <h1 id="title">Report <em>Abuse.</em></h1>
            <p className="deck">We take every report seriously. If you or someone you know has been harmed, please reach out.</p>
          </div>
          <figure className="photo">
            <Image
              src="/images/stock/cathedral-interior.jpg"
              alt="Cathedral interior"
              fill
              sizes="(max-width: 960px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
              priority
            />
          </figure>
        </div>
      </section>

      <main id="main-content">
        {/* Emergency Banner */}
        <section className="bg-accent-red py-6 px-8">
          <div className="max-w-[900px] mx-auto text-center">
            <p className="text-white font-semibold text-base">
              If a child is in immediate danger, call <a href="tel:911" className="text-gold font-bold underline">911</a> immediately.
            </p>
          </div>
        </section>

        {/* How to Report */}
        <section className="section-padding bg-warm-white">
          <div className="max-w-[900px] mx-auto">
            <div className="section-label text-left">How to Report</div>
            <h2 className="section-title text-left">
              Reporting Suspected Abuse
            </h2>
            <p className="text-base text-text-medium leading-relaxed mb-8">
              The Diocese of Evansville encourages anyone who suspects abuse by Church personnel &mdash; whether current or past &mdash; to report it. You do not need to be certain that abuse has occurred; if you have concerns, please report them. All reports are taken seriously and investigated thoroughly.
            </p>

            <div className="space-y-6">
              {/* Step 1 */}
              <div className="bg-cream rounded-2xl p-8 border border-border">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-full bg-accent-red/10 flex items-center justify-center flex-shrink-0">
                    <span className="font-heading text-xl font-bold text-accent-red">1</span>
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-navy mb-2">
                      Contact Civil Authorities
                    </h3>
                    <p className="text-sm text-text-medium leading-relaxed mb-4">
                      Indiana law requires that any person who has reason to believe a child is a victim of abuse or neglect must report it to authorities. We strongly encourage reporting to civil authorities first.
                    </p>
                    <div className="space-y-2">
                      <ReportContact
                        label="Local Law Enforcement"
                        value="Call your local police department or sheriff's office"
                      />
                      <ReportContact
                        label="Indiana Child Abuse Hotline"
                        value="1-800-800-5556"
                        href="tel:18008005556"
                      />
                      <ReportContact
                        label="Indiana Department of Child Services"
                        value="www.in.gov/dcs"
                        href="https://www.in.gov/dcs/"
                        external
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-cream rounded-2xl p-8 border border-border">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-full bg-accent-red/10 flex items-center justify-center flex-shrink-0">
                    <span className="font-heading text-xl font-bold text-accent-red">2</span>
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-navy mb-2">
                      Contact the Diocese
                    </h3>
                    <p className="text-sm text-text-medium leading-relaxed mb-4">
                      After reporting to civil authorities, please contact the Diocese of Evansville so we can take immediate action within the Church. Reports can be made to the Victim Assistance Coordinator.
                    </p>
                    <div className="space-y-2">
                      <ReportContact
                        label="Victim Assistance Coordinator"
                        value="(812) 424-5536"
                        href="tel:8124245536"
                      />
                      <ReportContact
                        label="Email"
                        value="reportabuse@evdio.org"
                        href="mailto:reportabuse@evdio.org"
                      />
                      <ReportContact
                        label="Mail"
                        value="Diocese of Evansville, Attn: Victim Assistance Coordinator, 4200 N. Kentucky Ave., Evansville, IN 47711"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-cream rounded-2xl p-8 border border-border">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-full bg-accent-red/10 flex items-center justify-center flex-shrink-0">
                    <span className="font-heading text-xl font-bold text-accent-red">3</span>
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-navy mb-2">
                      National Reporting Resources
                    </h3>
                    <p className="text-sm text-text-medium leading-relaxed mb-4">
                      Additional resources are available at the national level for reporting abuse and accessing support services.
                    </p>
                    <div className="space-y-2">
                      <ReportContact
                        label="Childhelp National Child Abuse Hotline"
                        value="1-800-422-4453"
                        href="tel:18004224453"
                      />
                      <ReportContact
                        label="USCCB Reporting"
                        value="www.reportbishopabuse.org"
                        href="https://www.reportbishopabuse.org"
                        external
                      />
                      <ReportContact
                        label="Catholic Bishop Abuse Reporting Service"
                        value="1-800-276-1562"
                        href="tel:18002761562"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Commitment */}
        <section className="section-padding bg-cream">
          <div className="max-w-[900px] mx-auto">
            <div className="section-label text-left">Our Promise</div>
            <h2 className="section-title text-left">What Happens After a Report</h2>
            <div className="space-y-4 text-base text-text-medium leading-relaxed">
              <p>
                When the diocese receives a report of abuse, we take the following steps:
              </p>
              <ul className="space-y-3 ml-4">
                <li className="flex items-start gap-3">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-accent-red flex-shrink-0 mt-1" aria-hidden="true">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                  <span><strong className="text-navy">Immediate notification</strong> to civil authorities if they have not already been contacted.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-accent-red flex-shrink-0 mt-1" aria-hidden="true">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                  <span><strong className="text-navy">Removal of the accused</strong> from ministry pending investigation, in accordance with the USCCB Charter.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-accent-red flex-shrink-0 mt-1" aria-hidden="true">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                  <span><strong className="text-navy">Full cooperation</strong> with law enforcement and the investigation process.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-accent-red flex-shrink-0 mt-1" aria-hidden="true">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                  <span><strong className="text-navy">Outreach to the victim/survivor</strong> through the Victim Assistance Coordinator, offering counseling, spiritual support, and other resources.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-accent-red flex-shrink-0 mt-1" aria-hidden="true">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                  <span><strong className="text-navy">Review by the Diocesan Review Board,</strong> an independent body of lay professionals and clergy who advise the Bishop on all allegations.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Support */}
        <section className="bg-navy py-16 px-8">
          <div className="max-w-[900px] mx-auto text-center">
            <h2 className="font-heading text-[clamp(24px,3vw,36px)] font-bold text-white leading-tight mb-4">
              You Are Not Alone
            </h2>
            <p className="text-base text-white/70 mb-8 max-w-[560px] mx-auto leading-relaxed">
              If you have experienced abuse, we believe you. Support and healing are available. Please do not hesitate to reach out.
            </p>
            <div className="flex gap-4 flex-wrap justify-center">
              <a href="tel:8124245536" className="btn btn-primary">
                Call (812) 424-5536
              </a>
              <Link href="/about/safe-environment" className="btn btn-outline" style={{ borderColor: "rgba(255,255,255,0.2)" }}>
                Safe Environment Programs
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function ReportContact({
  label,
  value,
  href,
  external,
}: {
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}) {
  return (
    <div className="flex items-start gap-2">
      <span className="text-sm text-text-light flex-shrink-0 min-w-[140px]">{label}:</span>
      {href ? (
        <a
          href={href}
          className="text-sm text-blue font-semibold hover:text-navy transition-colors"
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {value}
        </a>
      ) : (
        <span className="text-sm text-navy font-semibold">{value}</span>
      )}
    </div>
  );
}
