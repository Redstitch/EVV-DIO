"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { MobileDrawer } from "./MobileDrawer";
import { navItems, giveItem } from "@/lib/navigation";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMega, setOpenMega] = useState<string | null>(null);
  const megaTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
  }, [mobileOpen]);

  function handleMegaEnter(key: string) {
    if (megaTimeoutRef.current) clearTimeout(megaTimeoutRef.current);
    megaTimeoutRef.current = setTimeout(() => setOpenMega(key), 80);
  }

  function handleMegaLeave() {
    if (megaTimeoutRef.current) clearTimeout(megaTimeoutRef.current);
    megaTimeoutRef.current = setTimeout(() => setOpenMega(null), 150);
  }

  useEffect(() => {
    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpenMega(null);
        setMobileOpen(false);
      }
    }
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <>
      {/* Utility Strip (teal) */}
      <div className="utility-nav">
        <div className="row">
          <span>
            4200 N. Kentucky Ave, Evansville IN &middot;{" "}
            <a href="tel:8124245536">812-424-5536</a>
          </span>
          <span className="links">
            <Link href="/parishes">Find a Parish</Link>
            <Link href="/parishes/mass-times">Mass Times</Link>
            <Link href="/parishes/watch-mass">Watch Mass Online</Link>
            <span className="lang" aria-label="Language">
              <a href="#" className="active" aria-current="true">EN</a>
              <span className="sep" aria-hidden="true">&middot;</span>
              <a href="#" lang="es" hrefLang="es">ES</a>
            </span>
          </span>
        </div>
      </div>

      {/* Main Header (navy) */}
      <header
        className={`main-header ${scrolled ? "scrolled" : ""}`}
        role="banner"
      >
        <div className="row">
          <Link href="/" className="logo" aria-label="Diocese of Evansville - Home">
            <Image
              src="/images/branding/diocese-logo-reversed.png"
              alt="Diocese of Evansville"
              width={200}
              height={60}
              priority
              style={{ width: "auto", height: "60px" }}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="main-nav" aria-label="Primary">
            {navItems.map((item) => (
              <div
                key={item.key}
                className={`nav-item-wrap ${item.alignRight ? "align-right" : ""} ${
                  openMega === item.key ? "mega-open" : ""
                }`}
                onMouseEnter={() => handleMegaEnter(item.key)}
                onMouseLeave={handleMegaLeave}
              >
                <Link href={item.href}>
                  {item.label}
                  {item.children && (
                    <svg className="chevron" viewBox="0 0 12 12">
                      <polyline points="2 4 6 8 10 4" />
                    </svg>
                  )}
                </Link>
                {item.children && (
                  <div className={`mega-menu ${item.menuWidth || ""}`}>
                    <div
                      className={`grid gap-x-10 ${
                        item.cols === 4
                          ? "grid-cols-4"
                          : item.cols === 3
                            ? "grid-cols-3"
                            : "grid-cols-2"
                      }`}
                    >
                      {item.children.map((col, ci) => (
                        <div key={ci} className="mega-col">
                          {col.heading && <h4>{col.heading}</h4>}
                          {col.links.map((link, li) => (
                            <Link
                              key={li}
                              href={link.href}
                              className={`${link.featured ? "featured" : ""} ${
                                link.external ? "external" : ""
                              }`}
                            >
                              {link.label}
                            </Link>
                          ))}
                          {col.highlight && (
                            <div className="mega-highlight">
                              <h4>{col.highlight.title}</h4>
                              <p>{col.highlight.text}</p>
                              <Link href={col.highlight.href} className="mega-btn">
                                {col.highlight.btnText}
                              </Link>
                            </div>
                          )}
                          {col.cta && (
                            <div className="mega-cta">
                              <Link href={col.cta.href}>
                                {col.cta.label}
                                <svg viewBox="0 0 24 24">
                                  <line x1="5" y1="12" x2="19" y2="12" />
                                  <polyline points="12 5 19 12 12 19" />
                                </svg>
                              </Link>
                            </div>
                          )}
                          {col.note && <p className="mega-note">{col.note}</p>}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Header Actions */}
          <div className="header-actions">
            <button className="search-btn" aria-label="Search the site">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="9" cy="9" r="6.5" />
                <line x1="14" y1="14" x2="18" y2="18" />
              </svg>
            </button>
            <div
              className={`nav-item-wrap give-wrap align-right ${
                openMega === giveItem.key ? "mega-open" : ""
              }`}
              onMouseEnter={() => handleMegaEnter(giveItem.key)}
              onMouseLeave={handleMegaLeave}
            >
              <Link href={giveItem.href} className="give-btn">
                {giveItem.label}
              </Link>
              {giveItem.children && (
                <div className={`mega-menu ${giveItem.menuWidth || ""}`}>
                  <div
                    className={`grid gap-x-10 ${
                      giveItem.cols === 4
                        ? "grid-cols-4"
                        : giveItem.cols === 3
                          ? "grid-cols-3"
                          : "grid-cols-2"
                    }`}
                  >
                    {giveItem.children.map((col, ci) => (
                      <div key={ci} className="mega-col">
                        {col.heading && <h4>{col.heading}</h4>}
                        {col.links.map((link, li) => (
                          <Link
                            key={li}
                            href={link.href}
                            className={`${link.featured ? "featured" : ""} ${
                              link.external ? "external" : ""
                            }`}
                          >
                            {link.label}
                          </Link>
                        ))}
                        {col.highlight && (
                          <div className="mega-highlight">
                            <h4>{col.highlight.title}</h4>
                            <p>{col.highlight.text}</p>
                            <Link href={col.highlight.href} className="mega-btn">
                              {col.highlight.btnText}
                            </Link>
                          </div>
                        )}
                        {col.cta && (
                          <div className="mega-cta">
                            <Link href={col.cta.href}>
                              {col.cta.label}
                              <svg viewBox="0 0 24 24">
                                <line x1="5" y1="12" x2="19" y2="12" />
                                <polyline points="12 5 19 12 12 19" />
                              </svg>
                            </Link>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Mobile Toggle */}
            <button
              className={`mobile-toggle ${mobileOpen ? "active" : ""}`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileDrawer open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
