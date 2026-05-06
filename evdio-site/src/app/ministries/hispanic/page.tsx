import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Ministerio Hispano | Diocese of Evansville",
  description:
    "Hispanic ministry in the Diocese of Evansville. Welcoming and serving the Hispanic Catholic community with culturally relevant pastoral care, sacraments, and programs.",
};

export default function HispanicMinistryPage() {
  return (
    <>
      <section className="feature-head" aria-labelledby="title">
        <div className="grid">
          <div className="text">
            <p className="kicker">Ministries</p>
            <h1 id="title">Hispanic <em>Ministry.</em></h1>
            <p className="deck">Bienvenidos. Welcoming and serving the Hispanic Catholic community in Southwestern Indiana.</p>
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
        {/* Mission */}
        <section className="page-content">
          <span className="section-tag">Our Mission</span>
          <h2 className="section-h2">Nuestra Misi&oacute;n</h2>

          <div className="interior-grid interior-grid-2">
            <div className="prose">
              <p>
                El Ministerio Hispano de la Di&oacute;cesis de Evansville sirve a la creciente comunidad cat&oacute;lica hispana y latina del suroeste de Indiana. Ofrecemos atenci&oacute;n pastoral, preparaci&oacute;n sacramental y programas comunitarios que honran las ricas tradiciones culturales de la fe cat&oacute;lica hispana, fomentando la plena integraci&oacute;n en la vida de la di&oacute;cesis.
              </p>
            </div>
            <div className="prose">
              <p>
                The Hispanic Ministry of the Diocese of Evansville serves the growing Hispanic and Latino Catholic community across Southwestern Indiana. We provide pastoral care, sacramental preparation, and community-building programs that honor the rich cultural traditions of the Hispanic Catholic faith while fostering full integration into the life of the diocese.
              </p>
            </div>
          </div>
        </section>

        <div className="flourish" aria-hidden="true">
          <span className="line" />
          <svg width="14" height="18" viewBox="0 0 14 18" fill="currentColor">
            <rect x="6" y="0" width="2" height="18" />
            <rect x="2" y="5" width="10" height="2" />
          </svg>
          <span className="line" />
        </div>

        {/* Sections */}
        <section className="page-content bg-eggshell">
          <div className="section-head">
            <span className="section-tag">Secciones / Sections</span>
            <h2 className="section-h2">Ministerios en Espa&ntilde;ol</h2>
          </div>

          <div className="interior-grid interior-grid-3">
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Nuestro Equipo</h3>
              <p style={{ marginBottom: 4, fontSize: 13, opacity: 0.6 }}>Our Team</p>
              <p>Meet the staff of the Hispanic Ministry Office. Our bilingual team serves as a bridge between the Hispanic community and diocesan resources, providing translation, advocacy, and pastoral accompaniment.</p>
            </div>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Ministerios en Espa&ntilde;ol</h3>
              <p style={{ marginBottom: 4, fontSize: 13, opacity: 0.6 }}>Ministries in Spanish</p>
              <p>Spanish-language programming including Bible studies, prayer groups, marriage enrichment, youth ministry, and faith formation classes. All programs are designed to serve Spanish-speaking families in their heart language.</p>
            </div>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Protecci&oacute;n de Menores</h3>
              <p style={{ marginBottom: 4, fontSize: 13, opacity: 0.6 }}>Child Protection</p>
              <p>Safe Environment training is available in Spanish for all Hispanic ministry volunteers and staff. We are committed to the safety of every child in our community. Bilingual reporting resources are available.</p>
            </div>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Servicios</h3>
              <p style={{ marginBottom: 4, fontSize: 13, opacity: 0.6 }}>Services</p>
              <p>Immigration assistance referrals, ESL classes, translation services for parish documents, driver&rsquo;s license preparation, and connections to Catholic Charities programs for food, housing, and counseling.</p>
            </div>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Nuestra Fe</h3>
              <p style={{ marginBottom: 4, fontSize: 13, opacity: 0.6 }}>Our Faith</p>
              <p>Resources for living the Catholic faith in the Hispanic tradition. Devotions to Our Lady of Guadalupe, the Rosary, novenas, and other popular piety traditions that nourish the spiritual life of the Hispanic community.</p>
            </div>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Tradiciones Hispanas</h3>
              <p style={{ marginBottom: 4, fontSize: 13, opacity: 0.6 }}>Hispanic Traditions</p>
              <p>Cultural celebrations including the feast of Our Lady of Guadalupe (December 12), Las Posadas, D&iacute;a de los Muertos, Quincea&ntilde;era blessings, and seasonal fiestas that bring the community together in faith and fellowship.</p>
            </div>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Noticias y Eventos</h3>
              <p style={{ marginBottom: 4, fontSize: 13, opacity: 0.6 }}>News &amp; Events</p>
              <p>Stay up to date with Hispanic Ministry events, retreats, workshops, and community celebrations. Sign up for our bilingual email newsletter or follow us on social media.</p>
            </div>
          </div>
        </section>

        <div className="flourish flourish-quatrefoil" aria-hidden="true">
          <span className="dot" />
          <span className="line" />
          <svg width="22" height="22" viewBox="0 0 32 32" fill="currentColor">
            <circle cx="16" cy="8" r="6" /><circle cx="16" cy="24" r="6" />
            <circle cx="8" cy="16" r="6" /><circle cx="24" cy="16" r="6" />
            <circle cx="16" cy="16" r="3" fill="var(--cream-lt)" />
          </svg>
          <span className="line" />
          <span className="dot" />
        </div>

        {/* Mass & Sacraments */}
        <section className="page-content">
          <div className="interior-grid interior-grid-2">
            <div>
              <span className="section-tag">Misa en Espa&ntilde;ol</span>
              <h2 className="section-h2">Mass in Spanish</h2>
              <div className="prose" style={{ marginTop: 16 }}>
                <p>
                  Mass in Spanish is celebrated at several parishes across the diocese, providing a spiritual home for Spanish-speaking Catholics. These liturgies feature Spanish hymns, bilingual readings, and culturally familiar expressions of worship.
                </p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 24 }}>
                <div className="info-block" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <strong>Holy Rosary, Evansville</strong>
                  <span>Sunday 12:30 PM</span>
                </div>
                <div className="info-block" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <strong>St. Mary, Huntingburg</strong>
                  <span>Sunday 1:00 PM</span>
                </div>
                <div className="info-block" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <strong>St. Joseph, Jasper</strong>
                  <span>Sunday 1:30 PM</span>
                </div>
              </div>
            </div>

            <div>
              <span className="section-tag">Preparaci&oacute;n Sacramental</span>
              <h2 className="section-h2">Sacramental Preparation</h2>
              <div className="prose" style={{ marginTop: 16 }}>
                <p>
                  Bilingual preparation programs are available for Baptism, First Communion, Confirmation, and Marriage. OCIA (Rite of Christian Initiation of Adults) is also offered in Spanish for those exploring the Catholic faith or completing their sacraments of initiation.
                </p>
              </div>
              <div className="info-block" style={{ marginTop: 24 }}>
                <h3>Sacramentos Disponibles</h3>
                <ul>
                  <li>Bautismo / Baptism</li>
                  <li>Primera Comuni&oacute;n / First Communion</li>
                  <li>Confirmaci&oacute;n / Confirmation</li>
                  <li>Matrimonio / Marriage</li>
                  <li>OCIA en Espa&ntilde;ol</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <div className="flourish" aria-hidden="true">
          <span className="line" />
          <svg width="14" height="18" viewBox="0 0 14 18" fill="currentColor">
            <rect x="6" y="0" width="2" height="18" />
            <rect x="2" y="5" width="10" height="2" />
          </svg>
          <span className="line" />
        </div>

        {/* Leadership */}
        <section className="page-content bg-blue-subtle">
          <div className="section-head">
            <span className="section-tag">Formaci&oacute;n de L&iacute;deres</span>
            <h2 className="section-h2">Leadership Development</h2>
          </div>

          <div className="prose" style={{ textAlign: "center" }}>
            <p>
              We are committed to developing Hispanic leadership within the diocese. Training programs are available for Hispanic lay leaders, lectors, catechists, Extraordinary Ministers of Holy Communion, and parish council members. Our goal is to equip the Hispanic community to take active leadership roles in every aspect of parish life.
            </p>
          </div>
        </section>

        <div className="flourish flourish-quatrefoil" aria-hidden="true">
          <span className="dot" />
          <span className="line" />
          <svg width="22" height="22" viewBox="0 0 32 32" fill="currentColor">
            <circle cx="16" cy="8" r="6" /><circle cx="16" cy="24" r="6" />
            <circle cx="8" cy="16" r="6" /><circle cx="24" cy="16" r="6" />
            <circle cx="16" cy="16" r="3" fill="var(--cream-lt)" />
          </svg>
          <span className="line" />
          <span className="dot" />
        </div>

        {/* Contact CTA */}
        <section className="section-band section-navy" style={{ textAlign: "center" }}>
          <h2 className="section-h2" style={{ color: "var(--cream)", maxWidth: "18ch", margin: "0 auto 16px" }}>Ministerio Hispano</h2>
          <p style={{ color: "rgba(238,218,179,0.7)", maxWidth: 540, margin: "0 auto" }}>
            Para m&aacute;s informaci&oacute;n sobre el Ministerio Hispano, comun&iacute;quese con nuestra oficina. / For more information about Hispanic Ministry, contact our office.
          </p>
          <p style={{ color: "var(--cream)", fontWeight: 700, marginTop: 16 }}>(812) 424-5536 | hispanic@evdio.org</p>
          <div style={{ marginTop: 32 }}>
            <Link href="/ministries" className="btn btn-primary" style={{ background: "var(--dgold)", color: "var(--navy)", borderColor: "var(--dgold)" }}>All Ministries <span className="arrow" aria-hidden="true">→</span></Link>
          </div>
        </section>
      </main>
    </>
  );
}
