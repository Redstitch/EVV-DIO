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
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
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
      {/* Utility Nav */}
      <nav className="utility-nav" aria-label="Utility navigation">
        <div className="flex justify-between items-center max-w-full mx-0 px-10">
          <div className="flex gap-5 items-center">
            <Link href="/about/careers">MyDio Staff Portal</Link>
            <Link href="/about/careers">Careers</Link>
            <Link href="/about/contact">Contact Us</Link>
          </div>
          <div className="flex gap-5 items-center">
            <Link href="/about/safe-environment">Safe Environment</Link>
            <div className="lang-toggle" role="group" aria-label="Language selection">
              <span className="active">EN</span>
              <span className="divider">|</span>
              <span>ES</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Header */}
      <header
        ref={headerRef}
        className={`main-header ${scrolled ? "scrolled" : ""}`}
        role="banner"
      >
        <div
          className={`flex items-center max-w-full mx-0 px-10 transition-all ${
            scrolled ? "h-16" : "h-20"
          }`}
        >
          <Link href="/" className="logo" aria-label="Diocese of Evansville - Home">
            <div className="logo-crest">
              <Image
                src="/images/branding/diocese-crest.png"
                alt="Diocese of Evansville crest"
                width={52}
                height={52}
                priority
              />
            </div>
            <div className="logo-text">
              <span className="name">Diocese of Evansville</span>
              <span className="tagline">The Catholic Church in Southwestern Indiana</span>
            </div>
          </Link>

          {/* Main Nav */}
          <nav
            className="main-nav hidden lg:flex items-center gap-0.5 h-full flex-1 justify-center"
            aria-label="Main navigation"
          >
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
          <div className="header-actions flex items-center gap-3 flex-shrink-0">
            <button className="search-btn hidden lg:flex" aria-label="Search">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
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
                <svg className="chevron" viewBox="0 0 12 12">
                  <polyline points="2 4 6 8 10 4" />
                </svg>
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
          </div>

          {/* Mobile Toggle */}
          <button
            className={`mobile-toggle lg:hidden ${mobileOpen ? "active" : ""}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileDrawer open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
