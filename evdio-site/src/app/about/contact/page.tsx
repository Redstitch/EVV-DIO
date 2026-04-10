import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact the Catholic Diocese of Evansville at 4200 N. Kentucky Ave., Evansville, IN 47711. Phone: (812) 424-5536. Office hours: Monday-Friday, 8:00 a.m.-4:30 p.m.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="About"
        title="Contact Us"
        subtitle="We are here to serve you. Reach the Catholic Center by phone, email, or in person."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Contact Us" },
        ]}
      />

      <main id="main-content">
        <section className="section-padding bg-warm-white">
          <div className="max-w-[1080px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-12">
              {/* Contact Info */}
              <div>
                <div className="section-label text-left">Get in Touch</div>
                <h2 className="section-title text-left">Catholic Center</h2>
                <p className="text-base text-text-medium leading-relaxed mb-8">
                  The Catholic Center serves as the administrative hub of the Diocese of Evansville, supporting 45 parishes, 26 schools, and ministries across 12 counties in Southwestern Indiana.
                </p>

                <div className="space-y-6">
                  <ContactBlock
                    icon={
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    }
                    label="Address"
                  >
                    <p className="text-sm text-text-medium leading-relaxed">
                      4200 N. Kentucky Ave.<br />
                      Evansville, IN 47711
                    </p>
                  </ContactBlock>

                  <ContactBlock
                    icon={
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                    }
                    label="Phone"
                  >
                    <a href="tel:8124245536" className="text-sm text-blue font-semibold hover:text-navy transition-colors">
                      (812) 424-5536
                    </a>
                  </ContactBlock>

                  <ContactBlock
                    icon={
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    }
                    label="Email"
                  >
                    <a href="mailto:info@evdio.org" className="text-sm text-blue font-semibold hover:text-navy transition-colors">
                      info@evdio.org
                    </a>
                  </ContactBlock>

                  <ContactBlock
                    icon={
                      <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                    }
                    label="Office Hours"
                  >
                    <p className="text-sm text-text-medium">
                      Monday &ndash; Friday<br />
                      8:00 a.m. &ndash; 4:30 p.m. (ET)
                    </p>
                  </ContactBlock>
                </div>

                <div className="mt-8 pt-6 border-t border-border">
                  <h3 className="font-heading text-lg font-bold text-navy mb-3">Quick Links</h3>
                  <div className="space-y-2">
                    <QuickLink href="/about/staff-directory" label="Staff Directory" />
                    <QuickLink href="/about/clergy-directory" label="Clergy Directory" />
                    <QuickLink href="/about/offices" label="Offices & Departments" />
                    <QuickLink href="/about/press-room" label="Press Room & Media" />
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-cream rounded-2xl p-8 border border-border">
                <h3 className="font-heading text-2xl font-bold text-navy mb-2">
                  Send Us a Message
                </h3>
                <p className="text-sm text-text-medium mb-6">
                  Fill out the form below and we will respond within two business days.
                </p>

                <form className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="first-name" className="block text-xs font-semibold text-navy mb-1.5 uppercase tracking-wider">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="first-name"
                        name="first-name"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-border bg-white text-sm text-text-dark focus:outline-none focus:border-blue focus:ring-2 focus:ring-blue/10 transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="last-name" className="block text-xs font-semibold text-navy mb-1.5 uppercase tracking-wider">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="last-name"
                        name="last-name"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-border bg-white text-sm text-text-dark focus:outline-none focus:border-blue focus:ring-2 focus:ring-blue/10 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-navy mb-1.5 uppercase tracking-wider">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-white text-sm text-text-dark focus:outline-none focus:border-blue focus:ring-2 focus:ring-blue/10 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold text-navy mb-1.5 uppercase tracking-wider">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-white text-sm text-text-dark focus:outline-none focus:border-blue focus:ring-2 focus:ring-blue/10 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="department" className="block text-xs font-semibold text-navy mb-1.5 uppercase tracking-wider">
                      Department
                    </label>
                    <select
                      id="department"
                      name="department"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-white text-sm text-text-dark focus:outline-none focus:border-blue focus:ring-2 focus:ring-blue/10 transition-colors"
                    >
                      <option value="">Select a department...</option>
                      <option value="general">General Inquiry</option>
                      <option value="bishop">Office of the Bishop</option>
                      <option value="schools">Catholic Schools</option>
                      <option value="charities">Catholic Charities</option>
                      <option value="communications">Communications / The Message</option>
                      <option value="worship">Office of Worship</option>
                      <option value="catechesis">Catechesis & Evangelization</option>
                      <option value="finance">Finance Office</option>
                      <option value="hr">Human Resources</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-navy mb-1.5 uppercase tracking-wider">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-white text-sm text-text-dark focus:outline-none focus:border-blue focus:ring-2 focus:ring-blue/10 transition-colors resize-vertical"
                    />
                  </div>

                  <button type="submit" className="btn btn-primary w-full justify-center">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Map Placeholder */}
        <section className="bg-cream py-16 px-8">
          <div className="max-w-[1080px] mx-auto">
            <div className="bg-navy/[0.04] rounded-2xl border border-border overflow-hidden">
              <div className="aspect-[3/1] min-h-[250px] flex items-center justify-center bg-cream-dark relative">
                <div className="text-center">
                  <svg viewBox="0 0 24 24" className="w-12 h-12 fill-navy/20 mx-auto mb-3" aria-hidden="true">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  <p className="font-heading text-lg font-bold text-navy">Catholic Center</p>
                  <p className="text-sm text-text-medium">4200 N. Kentucky Ave., Evansville, IN 47711</p>
                  <a
                    href="https://maps.google.com/?q=4200+N+Kentucky+Ave+Evansville+IN+47711"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue mt-3 hover:text-navy transition-colors"
                  >
                    Open in Google Maps
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-3.5 h-3.5" aria-hidden="true">
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function ContactBlock({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 rounded-lg bg-navy/[0.06] flex items-center justify-center flex-shrink-0">
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-navy" aria-hidden="true">
          {icon}
        </svg>
      </div>
      <div>
        <h3 className="text-xs font-bold text-navy uppercase tracking-wider mb-1">
          {label}
        </h3>
        {children}
      </div>
    </div>
  );
}

function QuickLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="flex items-center gap-2 text-sm text-blue font-semibold hover:text-navy transition-colors"
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-3.5 h-3.5" aria-hidden="true">
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
      </svg>
      {label}
    </Link>
  );
}
