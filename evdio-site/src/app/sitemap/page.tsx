import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Sitemap | Diocese of Evansville",
  description:
    "Complete sitemap of the Diocese of Evansville website. Browse all pages and sections.",
};

export default function SitemapPage() {
  return (
    <>
      <PageHero
        label="Navigation"
        title="Sitemap"
        subtitle="A complete directory of every page on our website."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Sitemap" },
        ]}
      />

      <main id="main-content">
        <section className="section-padding bg-warm-white">
          <div className="max-w-[1280px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* About */}
              <SitemapSection
                title="About the Diocese"
                links={[
                  { label: "About Overview", href: "/about" },
                  { label: "Our Bishop", href: "/about/our-bishop" },
                  { label: "Our Vision", href: "/about/our-vision" },
                  { label: "Our History", href: "/about/our-history" },
                  { label: "Leadership", href: "/about/leadership" },
                  { label: "Offices & Departments", href: "/about/offices" },
                  { label: "Staff Directory", href: "/about/staff-directory" },
                  { label: "Clergy Directory", href: "/about/clergy-directory" },
                  { label: "Press Room", href: "/about/press-room" },
                  { label: "Official Statements", href: "/about/statements" },
                  { label: "Transparency Dashboard", href: "/about/dashboard" },
                  { label: "Careers", href: "/about/careers" },
                  { label: "Resources", href: "/about/resources" },
                  { label: "Safe Environment", href: "/about/safe-environment" },
                  { label: "Report Abuse", href: "/about/report-abuse" },
                  { label: "Contact Us", href: "/about/contact" },
                ]}
              />

              {/* Faith */}
              <SitemapSection
                title="Faith & Sacraments"
                links={[
                  { label: "Faith Overview", href: "/faith" },
                  { label: "Become Catholic (OCIA)", href: "/faith/become-catholic" },
                  { label: "Baptism", href: "/faith/baptism" },
                  { label: "First Communion", href: "/faith/first-communion" },
                  { label: "Confirmation", href: "/faith/confirmation" },
                  { label: "Marriage", href: "/faith/marriage" },
                  { label: "Anointing of the Sick", href: "/faith/anointing" },
                  { label: "Vocations", href: "/faith/vocations" },
                  { label: "Diaconate", href: "/faith/deacon" },
                  { label: "Prayer & Worship", href: "/faith/prayer-worship" },
                  { label: "Sacred Music", href: "/faith/music" },
                  { label: "Liturgical Calendar", href: "/faith/calendar" },
                ]}
              />

              {/* Parishes */}
              <SitemapSection
                title="Parishes"
                links={[
                  { label: "Parishes Overview", href: "/parishes" },
                  { label: "Parish Directory", href: "/parishes/directory" },
                  { label: "Mass Times", href: "/parishes/mass-times" },
                  { label: "Watch Mass Online", href: "/parishes/watch-mass" },
                  { label: "North Deanery", href: "/parishes/north-deanery" },
                  { label: "South Deanery", href: "/parishes/south-deanery" },
                  { label: "East Deanery", href: "/parishes/east-deanery" },
                  { label: "West Deanery", href: "/parishes/west-deanery" },
                ]}
              />

              {/* Schools */}
              <SitemapSection
                title="Catholic Schools"
                links={[
                  { label: "Schools Overview", href: "/schools" },
                  { label: "Find a School", href: "/schools/find" },
                  { label: "School Map", href: "/schools/map" },
                  { label: "Enroll Your Child", href: "/schools/enroll" },
                  { label: "Tuition & Affordability", href: "/schools/tuition" },
                  { label: "Accreditation", href: "/schools/accreditation" },
                  { label: "Special Needs Programs", href: "/schools/special-needs" },
                  { label: "Student Health & Wellness", href: "/schools/health" },
                  { label: "Teaching & Staff Careers", href: "/schools/careers" },
                ]}
              />

              {/* Ministries */}
              <SitemapSection
                title="Ministries"
                links={[
                  { label: "Ministries Overview", href: "/ministries" },
                  { label: "Youth Ministry", href: "/ministries/youth" },
                  { label: "Campus Ministry", href: "/ministries/campus-ministry" },
                  { label: "Marriage & Family Life", href: "/ministries/marriage-family" },
                  { label: "Respect Life", href: "/ministries/respect-life" },
                  { label: "Project Rachel", href: "/ministries/project-rachel" },
                  { label: "Expectant Mothers", href: "/ministries/expectant-mothers" },
                  { label: "Men&rsquo;s Ministry", href: "/ministries/mens-ministry" },
                  { label: "Senior Ministry", href: "/ministries/senior-ministry" },
                  { label: "Scholarships & Financial Aid", href: "/ministries/scholarships" },
                  { label: "Ministerio Hispano", href: "/ministries/hispanic" },
                  { label: "Disability & Inclusion", href: "/ministries/disability" },
                  { label: "SPRED (Special Needs Religious Ed)", href: "/ministries/spred" },
                  { label: "Prison & Jail Ministry", href: "/ministries/prison-ministry" },
                  { label: "Social Justice", href: "/ministries/social-justice" },
                ]}
              />

              {/* Give */}
              <SitemapSection
                title="Give"
                links={[
                  { label: "Why Give?", href: "/give" },
                  { label: "Catholic Ministries Appeal", href: "/give/appeal" },
                  { label: "Planned & Legacy Giving", href: "/give/planned-giving" },
                ]}
              />

              {/* Events */}
              <SitemapSection
                title="Events"
                links={[
                  { label: "Events Calendar", href: "/events" },
                  { label: "Retreats", href: "/events/retreats" },
                  { label: "Spaces & Venues", href: "/events/spaces" },
                ]}
              />

              {/* The Message */}
              <SitemapSection
                title="The Message"
                links={[
                  { label: "The Message Home", href: "/the-message" },
                  { label: "About The Message", href: "/the-message/about" },
                  { label: "Diocesan News", href: "/the-message/diocesan-news" },
                  { label: "Local News", href: "/the-message/local-news" },
                  { label: "National News", href: "/the-message/national-news" },
                  { label: "Features", href: "/the-message/features" },
                  { label: "Faith & Spirituality", href: "/the-message/faith-spirituality" },
                  { label: "Columns", href: "/the-message/columns" },
                  { label: "Reviews", href: "/the-message/reviews" },
                  { label: "Archives", href: "/the-message/archives" },
                  { label: "Subscribe", href: "/the-message/subscribe" },
                ]}
              />

              {/* Legal & Utility */}
              <SitemapSection
                title="Legal & Utility"
                links={[
                  { label: "Privacy Policy", href: "/privacy-policy" },
                  { label: "Accessibility", href: "/accessibility" },
                  { label: "Sitemap", href: "/sitemap" },
                ]}
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function SitemapSection({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div className="mb-4">
      <h2 className="font-heading text-xl font-bold text-navy mb-4 pb-2 border-b border-border">{title}</h2>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="text-sm text-text-medium hover:text-blue transition-colors">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
