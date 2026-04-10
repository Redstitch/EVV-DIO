import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Healing After Abortion - Project Rachel",
  description:
    "Project Rachel provides confidential support and healing for anyone affected by an abortion experience in the Diocese of Evansville.",
};

export default function ProjectRachelPage() {
  return (
    <>
      <PageHero
        label="Ministries"
        title="Healing After Abortion"
        subtitle="Confidential support and God's mercy for all who have been affected by abortion."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Ministries", href: "/ministries" },
          { label: "Healing After Abortion" },
        ]}
      />

      <main id="main-content">
        <section className="section-padding bg-cream">
          <div className="max-w-[900px] mx-auto">
            <div className="bg-white rounded-xl border border-border p-8 mb-8">
              <h2 className="font-heading text-2xl font-bold text-navy mb-4">About Project Rachel</h2>
              <p className="text-text-medium leading-relaxed mb-4">
                Project Rachel is the Catholic Church&rsquo;s ministry of healing and reconciliation for those who have been involved in or affected by abortion. Named after the Old Testament figure Rachel, who wept for her lost children, this ministry offers a path of hope, mercy, and healing.
              </p>
              <p className="text-text-medium leading-relaxed mb-4">
                If you or someone you know is carrying the pain of an abortion experience, please know that you are not alone. God&rsquo;s mercy is greater than any sin, and healing is possible. Our ministry provides a safe, confidential, and compassionate space to begin the journey toward peace.
              </p>
              <div className="bg-cream rounded-lg p-6 border-l-4 border-gold">
                <p className="text-navy font-medium italic">
                  &ldquo;Thus says the Lord: &lsquo;Cease your cries of mourning, wipe the tears from your eyes. The sorrow you have known shall have its reward&hellip; there is hope for your future.&rsquo;&rdquo; &mdash; Jeremiah 31:16-17
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-border p-8 mb-8">
              <h2 className="font-heading text-2xl font-bold text-navy mb-4">What We Offer</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-gold text-lg mt-0.5">&#8226;</span>
                  <div>
                    <strong className="text-navy">Confidential Referrals</strong>
                    <p className="text-sm text-text-medium">Connection to trained counselors, priests, and support groups who understand the unique dimensions of post-abortion grief.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-gold text-lg mt-0.5">&#8226;</span>
                  <div>
                    <strong className="text-navy">Sacramental Healing</strong>
                    <p className="text-sm text-text-medium">Access to the Sacrament of Reconciliation with a priest trained in post-abortion ministry, and spiritual direction.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-gold text-lg mt-0.5">&#8226;</span>
                  <div>
                    <strong className="text-navy">Retreat Weekends</strong>
                    <p className="text-sm text-text-medium">Rachel&rsquo;s Vineyard retreats provide a safe, supportive environment for women and men to process their grief and experience God&rsquo;s healing love.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-gold text-lg mt-0.5">&#8226;</span>
                  <div>
                    <strong className="text-navy">Support for All Affected</strong>
                    <p className="text-sm text-text-medium">Mothers, fathers, grandparents, siblings, and friends who have been touched by abortion are all welcome to seek support.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-accent-red rounded-xl p-8 text-center">
              <h2 className="font-heading text-2xl font-bold text-white mb-3">Reach Out Today</h2>
              <p className="text-white/80 text-sm mb-6 max-w-[500px] mx-auto leading-relaxed">
                All inquiries are completely confidential. You do not need to give your name. A compassionate listener is ready to help.
              </p>
              <div className="space-y-2">
                <div className="text-gold font-heading text-2xl font-bold">(812) 424-5536</div>
                <div className="text-white/70 text-sm">or email projectrachel@evdio.org</div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Link href="/ministries/respect-life" className="btn btn-secondary">
                Respect for Life Ministry
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
