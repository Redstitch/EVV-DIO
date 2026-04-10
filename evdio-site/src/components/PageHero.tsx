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
      {/* Decorative elements */}
      <div className="page-hero-orb" aria-hidden="true" />
      <div className="page-hero-grain" />

      <div className="page-hero-inner">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          {breadcrumbs.map((crumb, i) => (
            <span key={i} className="breadcrumb-item">
              {i > 0 && <span className="breadcrumb-sep">/</span>}
              {crumb.href ? (
                <Link href={crumb.href} className="breadcrumb-link">
                  {crumb.label}
                </Link>
              ) : (
                <span className="breadcrumb-current">{crumb.label}</span>
              )}
            </span>
          ))}
        </nav>

        <div className="page-hero-label">
          <span className="page-hero-rule" />
          {label}
        </div>

        <h1 className="page-hero-title">{title}</h1>

        {subtitle && (
          <p className="page-hero-subtitle">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
