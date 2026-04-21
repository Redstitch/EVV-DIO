import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Meeting Rooms & Spaces",
  description:
    "Reserve meeting rooms and event spaces at the Catholic Center, Sarto Retreat Center, and parish halls across the Diocese of Evansville.",
};

export default function SpacesPage() {
  return (
    <>
      <section className="feature-head" aria-labelledby="title">
        <div className="grid">
          <div className="text">
            <p className="kicker">EVENTS</p>
            <h1 id="title">Meeting <em>Spaces.</em></h1>
            <p className="deck">Reserve spaces for meetings, events, and gatherings across the diocese.</p>
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
        <section className="section-padding bg-cream">
          <div className="max-w-[1280px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <SpaceCard
                name="Catholic Center"
                address="4200 N. Kentucky Avenue, Evansville, IN 47711"
                description="The diocesan offices include several conference rooms and a large meeting hall available for parish groups, ministry meetings, and diocesan events."
                capacity="20-200 guests"
                amenities={["AV equipment", "Wi-Fi", "Catering kitchen", "Accessible entrance"]}
                contact="(812) 424-5536"
              />
              <SpaceCard
                name="Sarto Retreat Center"
                address="4200 Kentucky Avenue, Evansville, IN 47714"
                description="A peaceful retreat setting with overnight accommodations, a chapel, conference rooms, and dining facilities. Ideal for retreats, formation days, and team-building events."
                capacity="Up to 60 overnight, 100 day"
                amenities={["Chapel", "Overnight rooms", "Full kitchen", "Walking grounds"]}
                contact="(812) 464-1042"
              />
              <SpaceCard
                name="Parish Halls"
                address="Various locations across the diocese"
                description="Many parishes in the diocese have fellowship halls, meeting rooms, and classrooms available for community use. Contact individual parishes to inquire about availability and rates."
                capacity="Varies by parish"
                amenities={["Kitchen facilities", "Tables & chairs", "Parking", "AV in some locations"]}
                contact="See parish directory"
              />
            </div>

            <div className="mt-12 bg-white rounded-xl border border-border p-8">
              <h2 className="font-heading text-2xl font-bold text-navy mb-4">Reservation Guidelines</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-heading text-lg font-bold text-navy mb-2">How to Reserve</h3>
                  <ul className="space-y-2 text-sm text-text-medium">
                    <li className="flex items-start gap-2">
                      <span className="text-gold font-bold">1.</span>
                      Contact the facility directly by phone or email.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gold font-bold">2.</span>
                      Provide the date, time, expected attendance, and purpose of your event.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gold font-bold">3.</span>
                      Complete the reservation form and submit any required deposit.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gold font-bold">4.</span>
                      You will receive a confirmation with setup instructions and policies.
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-navy mb-2">Policies</h3>
                  <ul className="space-y-2 text-sm text-text-medium">
                    <li className="flex items-start gap-2">
                      <span className="text-gold mt-1">&#8226;</span>
                      Diocesan and parish events receive priority scheduling.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gold mt-1">&#8226;</span>
                      All events must be consistent with the mission of the Catholic Church.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gold mt-1">&#8226;</span>
                      Proof of liability insurance may be required for outside groups.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gold mt-1">&#8226;</span>
                      Facilities must be left clean and in their original arrangement.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Link href="/events" className="btn btn-secondary">
                Back to Events
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function SpaceCard({
  name,
  address,
  description,
  capacity,
  amenities,
  contact,
}: {
  name: string;
  address: string;
  description: string;
  capacity: string;
  amenities: string[];
  contact: string;
}) {
  return (
    <div className="bg-white rounded-xl border border-border p-7 flex flex-col">
      <h3 className="font-heading text-xl font-bold text-navy mb-1">{name}</h3>
      <p className="text-xs text-text-light mb-3">{address}</p>
      <p className="text-sm text-text-medium leading-relaxed mb-4 flex-1">{description}</p>
      <div className="bg-cream rounded-lg p-4 mb-4">
        <div className="text-xs font-bold text-navy uppercase tracking-wider mb-1">Capacity</div>
        <div className="text-sm text-text-medium">{capacity}</div>
      </div>
      <div className="mb-4">
        <div className="text-xs font-bold text-navy uppercase tracking-wider mb-2">Amenities</div>
        <div className="flex flex-wrap gap-1.5">
          {amenities.map((a) => (
            <span key={a} className="bg-gold/10 text-navy text-[11px] px-2 py-0.5 rounded">
              {a}
            </span>
          ))}
        </div>
      </div>
      <div className="text-sm text-blue font-semibold">{contact}</div>
    </div>
  );
}
