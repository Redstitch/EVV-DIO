import Link from "next/link";

export function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      {/* Subscribe Section */}
      <div className="subscribe-section">
        <div className="copy">
          <p className="eyebrow">The Message &middot; Subscribe</p>
          <h3>
            Every week in <em>The Message.</em>
          </h3>
          <p>
            Diocesan news, features, and reflections — delivered to your mailbox
            or inbox, every Friday.
          </p>
        </div>
        <form action="#" method="post" aria-label="Subscribe to The Message">
          <input
            type="email"
            name="email"
            placeholder="your@email.com"
            aria-label="Email address"
            required
          />
          <button type="submit">
            Subscribe <span className="arrow" aria-hidden="true">→</span>
          </button>
        </form>
      </div>

      {/* Footer Grid */}
      <div className="footer-grid">
        <div>
          <p className="footer-brand-text">
            Diocese of <em>Evansville</em>
          </p>
          <p className="footer-addr">
            4200 N. Kentucky Avenue
            <br />
            Evansville, Indiana 47711
            <br />
            <a href="tel:8124245536">812-424-5536</a>
          </p>
        </div>
        <div className="footer-col">
          <h4>Find</h4>
          <ul>
            <li><Link href="/parishes">Parishes</Link></li>
            <li><Link href="/parishes/mass-times">Mass Times</Link></li>
            <li><Link href="/schools">Schools</Link></li>
            <li><Link href="/about/clergy-directory">Priests</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Know</h4>
          <ul>
            <li><Link href="/about/our-bishop">Our Bishop</Link></li>
            <li><Link href="/about/our-history">Our History</Link></li>
            <li><Link href="/the-message">The Message</Link></li>
            <li><Link href="/about/safe-environment">Safe Environment</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Give</h4>
          <ul>
            <li><Link href="/give/appeal">Catholic Ministries Appeal</Link></li>
            <li><Link href="/give/planned-giving">Planned Giving</Link></li>
            <li><Link href="/give">Impact Report</Link></li>
            <li><Link href="/give">Stories of Impact</Link></li>
          </ul>
        </div>
      </div>

      {/* Legal */}
      <div className="footer-legal">
        <span>&copy; {new Date().getFullYear()} Diocese of Evansville. All rights reserved.</span>
        <span>
          <Link href="/privacy-policy">Privacy</Link>
          {" · "}
          <Link href="/accessibility">Accessibility</Link>
          {" · "}
          <Link href="/about/press-room">Press Room</Link>
        </span>
      </div>
    </footer>
  );
}
