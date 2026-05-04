import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Elementary Schools",
  description:
    "Explore Catholic elementary schools in the Diocese of Evansville — PreK-5 and PreK-8 schools across Southwestern Indiana forming students in faith, knowledge, and character.",
};

export default function ElementarySchools() {
  return (
    <>
      <section className="feature-head" aria-labelledby="title">
        <div className="grid">
          <div className="text">
            <p className="kicker">Catholic Schools</p>
            <h1 id="title">Elementary <em>Schools.</em></h1>
            <p className="deck">
              22 Catholic elementary schools across Southwestern Indiana — from
              PreK through 8th grade — forming students in faith, knowledge,
              and character.
            </p>
          </div>
          <figure className="photo">
            <Image
              src="/images/stock/schools-mass-bishop.jpg"
              alt="Catholic school students at Mass with Bishop Siegel."
              fill
              sizes="(max-width: 960px) 100vw, 50vw"
              style={{ objectFit: "cover", objectPosition: "center 30%" }}
              priority
            />
          </figure>
        </div>
      </section>

      <main id="main-content">
        <section className="page-content">
          <div className="section-head">
            <span className="section-tag">Our Schools</span>
            <h2 className="section-h2">
              22 schools serving PreK through <em>8th grade</em>
            </h2>
            <p className="section-desc">
              The Diocese of Evansville operates 22 elementary schools — five
              serving PreK through 5th grade and seventeen serving PreK through
              8th grade. Every school is fully accredited and rooted in the
              Catholic faith.
            </p>
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

        <section className="page-content bg-eggshell">
          <div className="section-head">
            <span className="section-tag">PreK &ndash; 8</span>
            <h2 className="section-h2">
              PreK&ndash;8 <em>Schools</em>
            </h2>
          </div>

          <div className="interior-grid interior-grid-3">
            {prek8Schools.map((s) => {
              const Card = s.url ? "a" : "div";
              const props = s.url
                ? { href: s.url, target: "_blank", rel: "noopener noreferrer" }
                : { style: { cursor: "default" as const } };
              return (
                <Card key={s.name} className="interior-card" {...props}>
                  <p style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.16em", color: "var(--teal)", marginBottom: 6 }}>
                    PreK&ndash;8 &middot; {s.city}
                  </p>
                  <h3>{s.name}</h3>
                  {s.url && (
                    <span className="read-link" style={{ marginTop: 16 }}>Visit website <span aria-hidden="true">→</span></span>
                  )}
                </Card>
              );
            })}
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

        <section className="page-content">
          <div className="section-head">
            <span className="section-tag">PreK &ndash; 5</span>
            <h2 className="section-h2">
              PreK&ndash;5 <em>Schools</em>
            </h2>
          </div>

          <div className="interior-grid interior-grid-3">
            {prek5Schools.map((s) => {
              const Card = s.url ? "a" : "div";
              const props = s.url
                ? { href: s.url, target: "_blank", rel: "noopener noreferrer" }
                : { style: { cursor: "default" as const } };
              return (
                <Card key={s.name} className="interior-card" {...props}>
                  <p style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.16em", color: "var(--teal)", marginBottom: 6 }}>
                    PreK&ndash;5 &middot; {s.city}
                  </p>
                  <h3>{s.name}</h3>
                  {s.url && (
                    <span className="read-link" style={{ marginTop: 16 }}>Visit website <span aria-hidden="true">→</span></span>
                  )}
                </Card>
              );
            })}
          </div>
        </section>

        <section className="section-band section-navy" style={{ textAlign: "center" }}>
          <h2
            className="section-h2"
            style={{
              color: "var(--cream)",
              maxWidth: "18ch",
              margin: "0 auto 16px",
            }}
          >
            Find the right school for your{" "}
            <em style={{ color: "var(--bgold)" }}>family.</em>
          </h2>
          <p
            style={{
              color: "rgba(238,218,179,0.7)",
              maxWidth: 540,
              margin: "0 auto",
            }}
          >
            Schedule a tour, learn about tuition options, and begin the
            enrollment process at a Catholic school near you.
          </p>
          <div style={{ marginTop: 32 }}>
            <Link
              href="/schools/enroll"
              className="btn btn-primary"
              style={{
                background: "var(--dgold)",
                color: "var(--navy)",
                borderColor: "var(--dgold)",
              }}
            >
              Enroll now{" "}
              <span className="arrow" aria-hidden="true">
                →
              </span>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

const prek8Schools = [
  { name: "Annunciation at Christ the King", city: "Evansville", url: "http://www.annunciationangels.org/ctk" },
  { name: "Annunciation at Holy Spirit", city: "Evansville", url: "http://www.annunciationangels.org/HS" },
  { name: "Corpus Christi School", city: "Evansville", url: "http://corpuschristischoolevansville.org/" },
  { name: "Good Shepherd School", city: "Evansville", url: "https://goodshepherdrams.org/" },
  { name: "Holy Redeemer School", city: "Evansville", url: "http://www.holyredeemercatholicschool.com/" },
  { name: "Holy Rosary School", city: "Evansville", url: "http://www.holyrosaryrams.org/" },
  { name: "Holy Trinity School", city: "Jasper", url: "http://holytrinitysaints.com/" },
  { name: "Resurrection School", city: "Evansville", url: "http://www.resurrectioncatholicschool.org/" },
  { name: "St. Benedict Cathedral School", city: "Evansville", url: "https://www.saintbenedictcathedral.org/school/" },
  { name: "St. Bernard School", city: "Rockport", url: "http://stbernardschool.info/catholic-school" },
  { name: "St. James School", city: "Haubstadt", url: "http://www.stjameshaubstadt.com/" },
  { name: "St. John the Baptist School", city: "Newburgh", url: "http://www.sjbschoolnewburgh.org/" },
  { name: "St. Joseph School", city: "Evansville", url: "http://www.stjoeco.org/school" },
  { name: "St. Phillip School", city: "Mt. Vernon", url: null },
  { name: "St. Wendel School", city: "Wadesville", url: "http://www.saintwendelschool.org/" },
  { name: "Washington Catholic School", city: "Washington", url: "https://www.wccardinals.org/" },
  { name: "Westside Catholic School", city: "Evansville", url: "http://www.westsidecatholic.org/" },
];

const prek5Schools = [
  { name: "Flaget Elementary School", city: "Vincennes", url: "https://www.flagetces.org/home" },
  { name: "Holy Cross School", city: "Fort Branch", url: "https://www.holycrossparish.info/school.html" },
  { name: "St. Joseph School", city: "Princeton", url: "http://stjosephprinceton.com/" },
  { name: "St. Matthews School", city: "Mt. Vernon", url: "http://www.stmatthewmtvernon.org/" },
  { name: "Sts. Peter & Paul School", city: "Haubstadt", url: "http://www.stspeterandpaulcatholicschool.net/" },
];
