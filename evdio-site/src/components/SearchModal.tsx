"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Fuse from "fuse.js";
import Link from "next/link";

interface SearchEntry {
  type: "page" | "article" | "parish" | "clergy" | "mass" | "school";
  title: string;
  desc: string;
  url: string;
  cat?: string;
}

const typeLabels: Record<string, string> = {
  page: "Page",
  article: "The Message",
  parish: "Parish",
  clergy: "Clergy",
  mass: "Mass Times",
  school: "School",
};

const typeColors: Record<string, string> = {
  page: "var(--teal)",
  article: "var(--blue)",
  parish: "#C69331",
  clergy: "var(--navy)",
  mass: "var(--teal)",
  school: "var(--brick)",
};

export function SearchModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchEntry[]>([]);
  const [fuse, setFuse] = useState<Fuse<SearchEntry> | null>(null);
  const [loading, setLoading] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  // Load index on first open
  useEffect(() => {
    if (isOpen && !fuse) {
      setLoading(true);
      fetch("/search-index.json")
        .then((r) => r.json())
        .then((data: SearchEntry[]) => {
          const f = new Fuse(data, {
            keys: [
              { name: "title", weight: 0.6 },
              { name: "desc", weight: 0.3 },
              { name: "cat", weight: 0.1 },
            ],
            threshold: 0.35,
            distance: 200,
            minMatchCharLength: 2,
            includeScore: true,
          });
          setFuse(f);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }
  }, [isOpen, fuse]);

  // Focus input when opening
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      setQuery("");
      setResults([]);
      setActiveIndex(0);
    }
  }, [isOpen]);

  // Search
  useEffect(() => {
    if (!fuse || !query.trim()) {
      setResults([]);
      setActiveIndex(0);
      return;
    }
    const res = fuse.search(query, { limit: 20 });
    setResults(res.map((r) => r.item));
    setActiveIndex(0);
  }, [query, fuse]);

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setActiveIndex((i) => Math.min(i + 1, results.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setActiveIndex((i) => Math.max(i - 1, 0));
      } else if (e.key === "Enter" && results[activeIndex]) {
        e.preventDefault();
        window.location.href = results[activeIndex].url;
        onClose();
      } else if (e.key === "Escape") {
        onClose();
      }
    },
    [results, activeIndex, onClose]
  );

  // Scroll active item into view
  useEffect(() => {
    const el = listRef.current?.children[activeIndex] as HTMLElement;
    if (el) el.scrollIntoView({ block: "nearest" });
  }, [activeIndex]);

  // Close on backdrop click
  if (!isOpen) return null;

  // Group results by type
  const grouped = results.reduce(
    (acc, item) => {
      if (!acc[item.type]) acc[item.type] = [];
      acc[item.type].push(item);
      return acc;
    },
    {} as Record<string, SearchEntry[]>
  );

  // Order: pages, parishes, schools, mass, clergy, articles
  const typeOrder = ["page", "parish", "school", "mass", "clergy", "article"];
  let flatIndex = 0;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "rgba(10,34,64,0.6)",
        backdropFilter: "blur(4px)",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        paddingTop: "12vh",
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 680,
          background: "#fff",
          borderRadius: 20,
          boxShadow: "0 24px 80px rgba(10,34,64,0.25)",
          overflow: "hidden",
          animation: "searchSlideIn 0.25s ease",
        }}
        onKeyDown={handleKeyDown}
      >
        {/* Search input */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            padding: "20px 24px",
            borderBottom: "1px solid var(--line)",
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            stroke="var(--teal)"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <circle cx="8.5" cy="8.5" r="6" />
            <line x1="13" y1="13" x2="18" y2="18" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search parishes, Mass times, articles, clergy..."
            style={{
              flex: 1,
              border: "none",
              outline: "none",
              fontSize: 17,
              fontFamily: "var(--sans)",
              color: "var(--navy)",
              background: "transparent",
            }}
          />
          <kbd
            style={{
              fontSize: 11,
              color: "var(--muted)",
              background: "var(--cream-xlt)",
              padding: "3px 8px",
              borderRadius: 6,
              border: "1px solid var(--line)",
              fontFamily: "var(--sans)",
            }}
          >
            ESC
          </kbd>
        </div>

        {/* Results */}
        <div
          ref={listRef}
          style={{
            maxHeight: "60vh",
            overflowY: "auto",
            padding: query.trim() ? "8px 0" : "24px",
          }}
        >
          {loading && (
            <div
              style={{
                textAlign: "center",
                padding: 40,
                color: "var(--muted)",
                fontSize: 14,
              }}
            >
              Loading search index...
            </div>
          )}

          {!loading && !query.trim() && (
            <div style={{ textAlign: "center", color: "var(--muted)" }}>
              <p style={{ fontSize: 14, marginBottom: 16 }}>
                Search across the entire Diocese of Evansville website
              </p>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 8,
                  justifyContent: "center",
                }}
              >
                {[
                  "Mass times",
                  "Baptism",
                  "St. Benedict",
                  "Jasper",
                  "Enrollment",
                  "Bishop Siegel",
                ].map((s) => (
                  <button
                    key={s}
                    onClick={() => setQuery(s)}
                    style={{
                      padding: "6px 14px",
                      fontSize: 13,
                      borderRadius: 999,
                      border: "1px solid var(--line)",
                      background: "var(--cream-xlt)",
                      color: "var(--navy)",
                      cursor: "pointer",
                      fontFamily: "var(--sans)",
                      transition: "all 0.2s",
                    }}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          {!loading && query.trim() && results.length === 0 && (
            <div
              style={{
                textAlign: "center",
                padding: 40,
                color: "var(--muted)",
                fontSize: 14,
              }}
            >
              No results for &ldquo;{query}&rdquo;
            </div>
          )}

          {!loading &&
            query.trim() &&
            results.length > 0 &&
            typeOrder.map((type) => {
              const items = grouped[type];
              if (!items) return null;
              return (
                <div key={type}>
                  <div
                    style={{
                      fontSize: 10,
                      fontWeight: 700,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "var(--muted)",
                      padding: "12px 24px 4px",
                    }}
                  >
                    {typeLabels[type]}
                  </div>
                  {items.map((item) => {
                    const idx = flatIndex++;
                    const isActive = idx === activeIndex;
                    return (
                      <Link
                        key={item.url + item.title}
                        href={item.url}
                        onClick={onClose}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: 14,
                          padding: "12px 24px",
                          textDecoration: "none",
                          background: isActive
                            ? "rgba(0,78,115,0.06)"
                            : "transparent",
                          transition: "background 0.15s",
                          borderRadius: 8,
                          margin: "0 8px",
                        }}
                        onMouseEnter={() => setActiveIndex(idx)}
                      >
                        <span
                          style={{
                            width: 8,
                            height: 8,
                            borderRadius: "50%",
                            background: typeColors[item.type],
                            flexShrink: 0,
                            marginTop: 7,
                            opacity: 0.7,
                          }}
                        />
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div
                            style={{
                              fontSize: 15,
                              fontWeight: 600,
                              color: "var(--navy)",
                              lineHeight: 1.3,
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                            }}
                            dangerouslySetInnerHTML={{
                              __html: item.title,
                            }}
                          />
                          <div
                            style={{
                              fontSize: 13,
                              color: "var(--muted)",
                              lineHeight: 1.4,
                              marginTop: 2,
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                            }}
                          >
                            {item.desc}
                          </div>
                        </div>
                        {isActive && (
                          <span
                            style={{
                              fontSize: 11,
                              color: "var(--muted)",
                              opacity: 0.5,
                              marginTop: 4,
                              flexShrink: 0,
                            }}
                          >
                            ↵
                          </span>
                        )}
                      </Link>
                    );
                  })}
                </div>
              );
            })}
        </div>

        {/* Footer */}
        {query.trim() && results.length > 0 && (
          <div
            style={{
              padding: "12px 24px",
              borderTop: "1px solid var(--line)",
              display: "flex",
              gap: 16,
              fontSize: 11,
              color: "var(--muted)",
            }}
          >
            <span>
              <kbd style={{ background: "var(--cream-xlt)", padding: "1px 5px", borderRadius: 4, border: "1px solid var(--line)", fontSize: 10 }}>↑↓</kbd> navigate
            </span>
            <span>
              <kbd style={{ background: "var(--cream-xlt)", padding: "1px 5px", borderRadius: 4, border: "1px solid var(--line)", fontSize: 10 }}>↵</kbd> open
            </span>
            <span>
              <kbd style={{ background: "var(--cream-xlt)", padding: "1px 5px", borderRadius: 4, border: "1px solid var(--line)", fontSize: 10 }}>esc</kbd> close
            </span>
            <span style={{ marginLeft: "auto" }}>
              {results.length} result{results.length !== 1 ? "s" : ""}
            </span>
          </div>
        )}
      </div>

      <style>{`
        @keyframes searchSlideIn {
          from { opacity: 0; transform: translateY(-16px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </div>
  );
}
