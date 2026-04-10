"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { navItems } from "@/lib/navigation";

interface MobileDrawerProps {
  open: boolean;
  onClose: () => void;
}

export function MobileDrawer({ open, onClose }: MobileDrawerProps) {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (open && closeRef.current) {
      closeRef.current.focus();
    }
  }, [open]);

  function toggleAccordion(key: string) {
    setOpenAccordion(openAccordion === key ? null : key);
  }

  return (
    <>
      {/* Overlay */}
      <div
        className={`mobile-drawer-overlay ${open ? "active" : ""}`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <nav
        className={`mobile-drawer ${open ? "active" : ""}`}
        aria-label="Mobile navigation"
        aria-hidden={!open}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 px-5 border-b border-border flex-shrink-0">
          <div className="logo-text">
            <span className="name text-lg">Diocese of Evansville</span>
            <span className="tagline text-[10px]">Southwestern Indiana</span>
          </div>
          <button
            ref={closeRef}
            className="drawer-close-btn"
            onClick={onClose}
            aria-label="Close menu"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Search */}
        <div className="p-4 px-5 border-b border-border flex-shrink-0">
          <div className="flex">
            <input
              type="search"
              placeholder="Search the diocese..."
              aria-label="Search the diocese"
              className="flex-1 px-3.5 py-2.5 border-[1.5px] border-border border-r-0 rounded-l-md bg-white text-text-dark text-sm font-body outline-none focus:border-blue"
            />
            <button
              aria-label="Search"
              className="px-4 py-2.5 bg-navy text-white border-none rounded-r-md flex items-center justify-center hover:bg-blue transition-colors"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                className="w-[18px] h-[18px]"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>
          </div>
        </div>

        {/* Language Toggle */}
        <div className="px-5 py-2.5 border-b border-border flex items-center gap-2 flex-shrink-0">
          <span className="text-xs text-text-light font-medium uppercase tracking-wide">
            Language:
          </span>
          <div className="flex items-center gap-1">
            <Link
              href="#"
              className="px-2.5 py-1 rounded bg-navy text-white text-[13px] font-medium no-underline"
            >
              EN
            </Link>
            <Link
              href="#"
              className="px-2.5 py-1 rounded text-text-medium text-[13px] font-medium hover:bg-cream no-underline"
            >
              ES
            </Link>
          </div>
        </div>

        {/* Nav Accordions */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden">
          {navItems.map((item) => (
            <div key={item.key} className="drawer-accordion">
              <button
                className="drawer-accordion-trigger"
                onClick={() => toggleAccordion(item.key)}
                aria-expanded={openAccordion === item.key}
              >
                {item.label}
                <span
                  className={`accordion-icon ${
                    openAccordion === item.key ? "rotate-180" : ""
                  } transition-transform duration-300`}
                >
                  <svg viewBox="0 0 24 24">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </span>
              </button>
              <div
                className="overflow-hidden transition-all duration-400"
                style={{
                  maxHeight: openAccordion === item.key ? "2000px" : "0px",
                }}
              >
                <div className="px-5 pb-4">
                  {item.children?.map((col, ci) => (
                    <div key={ci}>
                      {col.heading && (
                        <div className="drawer-group-label">{col.heading}</div>
                      )}
                      {col.links.map((link, li) => (
                        <Link
                          key={li}
                          href={link.href}
                          className={link.featured ? "featured" : ""}
                          onClick={onClose}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom: Utility + Give */}
        <div className="flex-shrink-0 border-t border-border">
          <div className="px-5 py-3 flex flex-wrap gap-x-4 gap-y-2">
            <Link
              href="/about/careers"
              className="text-xs text-text-light hover:text-blue transition-colors no-underline"
            >
              MyDio Staff Portal
            </Link>
            <Link
              href="/about/careers"
              className="text-xs text-text-light hover:text-blue transition-colors no-underline"
            >
              Careers
            </Link>
            <Link
              href="/about/contact"
              className="text-xs text-text-light hover:text-blue transition-colors no-underline"
            >
              Contact Us
            </Link>
            <Link
              href="/about/safe-environment"
              className="text-xs text-text-light hover:text-blue transition-colors no-underline"
            >
              Safe Environment
            </Link>
          </div>
          <div className="px-5 py-4 bg-cream">
            <Link
              href="/give"
              className="give-btn block text-center py-3.5 px-6 text-[15px] rounded-lg"
              style={{ animation: "none" }}
            >
              Give Now
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
