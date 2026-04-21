import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Church Calendar",
  description:
    "Follow the liturgical calendar of the Catholic Church in the Diocese of Evansville. View seasons, feast days, holy days of obligation, and special observances.",
};

export default function Calendar() {
  return (
    <>
      <section className="feature-head" aria-labelledby="title">
        <div className="grid">
          <div className="text">
            <p className="kicker">Faith &amp; Sacraments</p>
            <h1 id="title">Church <em>Calendar.</em></h1>
            <p className="deck">The liturgical calendar guides the Church through the mysteries of Christ&#8217;s life each year, from Advent through Ordinary Time.</p>
          </div>
          <figure className="photo">
            <Image
              src="/images/stock/evigil-1.jpg"
              alt="Easter Vigil in the Diocese of Evansville."
              fill
              sizes="(max-width: 960px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
              priority
            />
          </figure>
        </div>
      </section>

      <main id="main-content">
        {/* Liturgical Seasons */}
        <section className="section-padding bg-warm-white">
          <div className="max-w-[1280px] mx-auto">
            <div className="text-center mb-14">
              <div className="section-label">The Liturgical Year</div>
              <h2 className="section-title">Seasons of the Church</h2>
              <p className="section-subtitle mx-auto">
                The Catholic liturgical year unfolds the whole mystery of Christ, from His Incarnation through His Ascension, Pentecost, and the expectation of His return in glory.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <SeasonCard
                color="bg-[#5B3A8C]"
                title="Advent"
                period="Four weeks before Christmas"
                desc="A season of joyful anticipation as we prepare for the coming of Christ at Christmas and His second coming at the end of time. The liturgical color is violet."
              />
              <SeasonCard
                color="bg-white border-2 border-gold"
                textColor="text-navy"
                title="Christmas"
                period="Dec 25 through the Baptism of the Lord"
                desc="We celebrate the Incarnation — God becoming human in the person of Jesus Christ. The liturgical color is white or gold."
              />
              <SeasonCard
                color="bg-[#2E7D32]"
                title="Ordinary Time (I)"
                period="After Epiphany through Ash Wednesday"
                desc="A brief period of Ordinary Time focused on Christ's public ministry. The liturgical color is green, symbolizing hope and growth."
              />
              <SeasonCard
                color="bg-[#5B3A8C]"
                title="Lent"
                period="Ash Wednesday through Holy Thursday"
                desc="Forty days of prayer, fasting, and almsgiving in preparation for Easter. A season of conversion and renewal. The liturgical color is violet."
              />
              <SeasonCard
                color="bg-white border-2 border-gold"
                textColor="text-navy"
                title="Easter"
                period="Easter Sunday through Pentecost (50 days)"
                desc="The most joyful season of the Church year, celebrating Christ's Resurrection from the dead. The liturgical color is white or gold."
              />
              <SeasonCard
                color="bg-[#2E7D32]"
                title="Ordinary Time (II)"
                period="After Pentecost through the Solemnity of Christ the King"
                desc="The longest season of the year, focused on the teachings and miracles of Christ. We grow in our discipleship as we await the coming of the Kingdom."
              />
            </div>
          </div>
        </section>

        {/* Holy Days of Obligation */}
        <section className="section-padding bg-cream">
          <div className="max-w-[960px] mx-auto">
            <div className="text-center mb-14">
              <div className="section-label">Holy Days of Obligation</div>
              <h2 className="section-title">Days When Catholics Must Attend Mass</h2>
              <p className="section-subtitle mx-auto">
                In addition to every Sunday, Catholics in the United States are obligated to attend Mass on these holy days.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <HolyDayCard
                date="January 1"
                title="Solemnity of Mary, Mother of God"
              />
              <HolyDayCard
                date="40 days after Easter"
                title="Ascension of the Lord"
                note="Observed on a Thursday or transferred to the following Sunday depending on the diocese"
              />
              <HolyDayCard
                date="August 15"
                title="Assumption of the Blessed Virgin Mary"
              />
              <HolyDayCard
                date="November 1"
                title="All Saints' Day"
              />
              <HolyDayCard
                date="December 8"
                title="Immaculate Conception of the Blessed Virgin Mary"
                note="Patronal feast of the United States"
              />
              <HolyDayCard
                date="December 25"
                title="The Nativity of the Lord (Christmas)"
              />
            </div>

            <div className="mt-8 bg-white rounded-xl p-6 border border-border text-center">
              <p className="text-sm text-text-medium leading-relaxed">
                <strong className="text-navy">Note:</strong> When a holy day falls on a Saturday or Monday, the obligation to attend Mass may be lifted by the bishops&rsquo; conference. Check with your parish for specific schedules each year.
              </p>
            </div>
          </div>
        </section>

        {/* Key Dates */}
        <section className="section-padding bg-warm-white">
          <div className="max-w-[960px] mx-auto">
            <div className="text-center mb-14">
              <div className="section-label">2026 Key Dates</div>
              <h2 className="section-title">Important Dates This Year</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              <DateCard month="Feb" day="18" title="Ash Wednesday" />
              <DateCard month="Mar" day="29" title="Palm Sunday" />
              <DateCard month="Apr" day="2" title="Holy Thursday" />
              <DateCard month="Apr" day="3" title="Good Friday" />
              <DateCard month="Apr" day="5" title="Easter Sunday" />
              <DateCard month="May" day="14" title="Ascension of the Lord" />
              <DateCard month="May" day="24" title="Pentecost Sunday" />
              <DateCard month="Jun" day="14" title="Corpus Christi" />
              <DateCard month="Nov" day="29" title="First Sunday of Advent" />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-navy text-white">
          <div className="max-w-[800px] mx-auto text-center">
            <h2 className="font-heading text-[clamp(28px,4vw,40px)] font-bold text-white leading-tight mb-4">
              Find Mass Times Near You
            </h2>
            <p className="text-base text-white/70 mb-8 leading-relaxed max-w-[560px] mx-auto">
              Check with your local parish for Mass schedules, including vigil Masses for Sundays and holy days of obligation.
            </p>
            <Link href="/parishes" className="btn btn-primary">
              Find a Parish
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

function SeasonCard({
  color,
  textColor,
  title,
  period,
  desc,
}: {
  color: string;
  textColor?: string;
  title: string;
  period: string;
  desc: string;
}) {
  return (
    <div className="bg-white rounded-xl border border-border shadow-[var(--shadow-soft)] overflow-hidden">
      <div className={`${color} p-4 flex items-center gap-3`}>
        <h3 className={`font-heading text-xl font-bold ${textColor || "text-white"}`}>{title}</h3>
      </div>
      <div className="p-6">
        <div className="text-xs font-semibold text-gold tracking-wider uppercase mb-2">{period}</div>
        <p className="text-sm text-text-medium leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function HolyDayCard({ date, title, note }: { date: string; title: string; note?: string }) {
  return (
    <div className="bg-white rounded-xl p-5 border border-border shadow-[var(--shadow-soft)] flex items-start gap-4">
      <div className="flex-shrink-0">
        <div className="text-xs font-bold text-gold tracking-wider uppercase">{date}</div>
      </div>
      <div>
        <h3 className="font-heading text-lg font-bold text-navy leading-tight">{title}</h3>
        {note && <p className="text-xs text-text-light mt-1">{note}</p>}
      </div>
    </div>
  );
}

function DateCard({ month, day, title }: { month: string; day: string; title: string }) {
  return (
    <div className="bg-cream rounded-xl p-5 border border-border flex items-center gap-4">
      <div className="bg-navy rounded-lg w-14 h-14 flex flex-col items-center justify-center flex-shrink-0">
        <div className="text-[10px] font-bold text-gold uppercase tracking-wider leading-none">{month}</div>
        <div className="font-heading text-xl font-bold text-white leading-none mt-0.5">{day}</div>
      </div>
      <h3 className="font-heading text-base font-bold text-navy leading-tight">{title}</h3>
    </div>
  );
}
