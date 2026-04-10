import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Ministerio Hispano | Diocese of Evansville",
  description:
    "Hispanic ministry in the Diocese of Evansville. Welcoming and serving the Hispanic Catholic community with culturally relevant pastoral care, sacraments, and programs.",
};

export default function HispanicMinistryPage() {
  return (
    <>
      <PageHero
        label="Ministerios"
        title="Ministerio Hispano"
        subtitle="Bienvenidos. Welcoming and serving the Hispanic Catholic community in Southwestern Indiana."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Ministries", href: "/ministries" },
          { label: "Ministerio Hispano" },
        ]}
      />

      <main id="main-content">
        {/* Mission */}
        <section className="section-padding bg-warm-white">
          <div className="max-w-[960px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <div>
                <div className="section-label text-left">Our Mission</div>
                <h2 className="section-title text-left">Nuestra Misi&oacute;n</h2>
                <p className="text-sm text-text-medium leading-relaxed mb-4">
                  El Ministerio Hispano de la Di&oacute;cesis de Evansville sirve a la creciente comunidad cat&oacute;lica hispana y latina del suroeste de Indiana. Ofrecemos atenci&oacute;n pastoral, preparaci&oacute;n sacramental y programas comunitarios que honran las ricas tradiciones culturales de la fe cat&oacute;lica hispana, fomentando la plena integraci&oacute;n en la vida de la di&oacute;cesis.
                </p>
              </div>
              <div>
                <div className="section-label text-left">&nbsp;</div>
                <h2 className="section-title text-left">Our Mission</h2>
                <p className="text-sm text-text-medium leading-relaxed mb-4">
                  The Hispanic Ministry of the Diocese of Evansville serves the growing Hispanic and Latino Catholic community across Southwestern Indiana. We provide pastoral care, sacramental preparation, and community-building programs that honor the rich cultural traditions of the Hispanic Catholic faith while fostering full integration into the life of the diocese.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Spanish Sub-Sections */}
        <section className="section-padding bg-cream">
          <div className="max-w-[1280px] mx-auto">
            <div className="text-center mb-14">
              <div className="section-label">Secciones / Sections</div>
              <h2 className="section-title">Ministerios en Espa&ntilde;ol</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <SubSection
                titleEs="Nuestro Equipo"
                titleEn="Our Team"
                desc="Meet the staff of the Hispanic Ministry Office. Our bilingual team serves as a bridge between the Hispanic community and diocesan resources, providing translation, advocacy, and pastoral accompaniment."
              />
              <SubSection
                titleEs="Ministerios en Espa&ntilde;ol"
                titleEn="Ministries in Spanish"
                desc="Spanish-language programming including Bible studies, prayer groups, marriage enrichment, youth ministry, and faith formation classes. All programs are designed to serve Spanish-speaking families in their heart language."
              />
              <SubSection
                titleEs="Protecci&oacute;n de Menores"
                titleEn="Child Protection"
                desc="Safe Environment training is available in Spanish for all Hispanic ministry volunteers and staff. We are committed to the safety of every child in our community. Bilingual reporting resources are available."
              />
              <SubSection
                titleEs="Servicios"
                titleEn="Services"
                desc="Immigration assistance referrals, ESL classes, translation services for parish documents, driver&rsquo;s license preparation, and connections to Catholic Charities programs for food, housing, and counseling."
              />
              <SubSection
                titleEs="Nuestra Fe"
                titleEn="Our Faith"
                desc="Resources for living the Catholic faith in the Hispanic tradition. Devotions to Our Lady of Guadalupe, the Rosary, novenas, and other popular piety traditions that nourish the spiritual life of the Hispanic community."
              />
              <SubSection
                titleEs="Tradiciones Hispanas"
                titleEn="Hispanic Traditions"
                desc="Cultural celebrations including the feast of Our Lady of Guadalupe (December 12), Las Posadas, D&iacute;a de los Muertos, Quincea&ntilde;era blessings, and seasonal fiestas that bring the community together in faith and fellowship."
              />
              <SubSection
                titleEs="Noticias y Eventos"
                titleEn="News & Events"
                desc="Stay up to date with Hispanic Ministry events, retreats, workshops, and community celebrations. Sign up for our bilingual email newsletter or follow us on social media."
              />
            </div>
          </div>
        </section>

        {/* Misa en Espanol */}
        <section className="section-padding bg-warm-white">
          <div className="max-w-[1280px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <div className="section-label text-left">Misa en Espa&ntilde;ol</div>
                <h2 className="section-title text-left">Mass in Spanish</h2>
                <p className="text-base text-text-medium leading-relaxed mb-5">
                  Mass in Spanish is celebrated at several parishes across the diocese, providing a spiritual home for Spanish-speaking Catholics. These liturgies feature Spanish hymns, bilingual readings, and culturally familiar expressions of worship.
                </p>

                <div className="space-y-4">
                  <MassCard parish="Holy Rosary, Evansville" time="Sunday 12:30 PM" />
                  <MassCard parish="St. Mary, Huntingburg" time="Sunday 1:00 PM" />
                  <MassCard parish="St. Joseph, Jasper" time="Sunday 1:30 PM" />
                </div>
              </div>

              <div>
                <div className="section-label text-left">Preparaci&oacute;n Sacramental</div>
                <h2 className="section-title text-left">Sacramental Preparation</h2>
                <p className="text-base text-text-medium leading-relaxed mb-5">
                  Bilingual preparation programs are available for Baptism, First Communion, Confirmation, and Marriage. OCIA (Rite of Christian Initiation of Adults) is also offered in Spanish for those exploring the Catholic faith or completing their sacraments of initiation.
                </p>

                <div className="bg-cream rounded-xl border border-border p-6">
                  <h3 className="font-heading text-lg font-bold text-navy mb-3">Sacramentos Disponibles</h3>
                  <ul className="space-y-2 text-sm text-text-medium">
                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" /><span>Bautismo / Baptism</span></li>
                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" /><span>Primera Comuni&oacute;n / First Communion</span></li>
                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" /><span>Confirmaci&oacute;n / Confirmation</span></li>
                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" /><span>Matrimonio / Marriage</span></li>
                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" /><span>OCIA en Espa&ntilde;ol</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Development */}
        <section className="section-padding bg-cream">
          <div className="max-w-[960px] mx-auto">
            <div className="text-center mb-10">
              <div className="section-label">Formaci&oacute;n de L&iacute;deres</div>
              <h2 className="section-title">Leadership Development</h2>
              <p className="text-base text-text-medium leading-relaxed max-w-[680px] mx-auto">
                We are committed to developing Hispanic leadership within the diocese. Training programs are available for Hispanic lay leaders, lectors, catechists, Extraordinary Ministers of Holy Communion, and parish council members. Our goal is to equip the Hispanic community to take active leadership roles in every aspect of parish life.
              </p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="section-padding bg-navy text-white">
          <div className="max-w-[800px] mx-auto text-center">
            <div className="section-label text-gold">Cont&aacute;ctenos / Contact Us</div>
            <h2 className="font-heading text-[clamp(28px,4vw,40px)] font-bold text-white leading-tight mb-4">
              Ministerio Hispano
            </h2>
            <p className="text-base text-white/70 mb-6 leading-relaxed max-w-[560px] mx-auto">
              Para m&aacute;s informaci&oacute;n sobre el Ministerio Hispano, comun&iacute;quese con nuestra oficina. / For more information about Hispanic Ministry, contact our office.
            </p>
            <div className="text-gold font-semibold text-lg mb-8">(812) 424-5536 | hispanic@evdio.org</div>
            <Link href="/ministries" className="btn btn-outline" style={{ borderColor: "rgba(255,255,255,0.2)" }}>
              All Ministries
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

function SubSection({ titleEs, titleEn, desc }: { titleEs: string; titleEn: string; desc: string }) {
  return (
    <div className="bg-white rounded-xl border border-border p-7">
      <h3 className="font-heading text-lg font-bold text-navy mb-0.5" dangerouslySetInnerHTML={{ __html: titleEs }} />
      <div className="text-xs text-text-light font-semibold uppercase tracking-wider mb-3">{titleEn}</div>
      <p className="text-sm text-text-medium leading-relaxed" dangerouslySetInnerHTML={{ __html: desc }} />
    </div>
  );
}

function MassCard({ parish, time }: { parish: string; time: string }) {
  return (
    <div className="bg-cream rounded-lg border border-border p-4 flex justify-between items-center">
      <strong className="text-navy text-sm">{parish}</strong>
      <span className="text-sm text-text-medium">{time}</span>
    </div>
  );
}
