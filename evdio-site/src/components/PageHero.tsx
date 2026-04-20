import Link from "next/link";

interface Crumb {
  label: string;
  href?: string;
}

interface PageHeroProps {
  label: string;
  title: string;
  subtitle?: string;
  breadcrumbs: Crumb[];
}

export function PageHero({ label, title, subtitle, breadcrumbs }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="page-hero-inner">
        <nav className="crumbs" aria-label="Breadcrumb">
          {breadcrumbs.map((crumb, i) => (
            <span key={i}>
              {i > 0 && <span className="sep" aria-hidden="true">/</span>}
              {crumb.href ? (
                <Link href={crumb.href}>{crumb.label}</Link>
              ) : (
                <b>{crumb.label}</b>
              )}
            </span>
          ))}
        </nav>

        <span className="kicker">{label}</span>

        <h1>{title}</h1>

        {subtitle && (
          <p className="subtitle">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
