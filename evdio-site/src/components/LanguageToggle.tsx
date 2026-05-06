"use client";

import { useState, useEffect } from "react";

export function LanguageToggle() {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    // Check if already translated (cookie from Google Translate)
    const match = document.cookie.match(/googtrans=\/en\/(\w+)/);
    if (match && match[1] === "es") {
      setLang("es");
    }
  }, []);

  function switchToSpanish() {
    // Set the Google Translate cookie
    document.cookie = "googtrans=/en/es; path=/";
    document.cookie = "googtrans=/en/es; path=/; domain=" + window.location.hostname;
    setLang("es");
    window.location.reload();
  }

  function switchToEnglish() {
    // Clear the Google Translate cookie
    document.cookie = "googtrans=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    document.cookie = "googtrans=; path=/; domain=" + window.location.hostname + "; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    setLang("en");
    window.location.reload();
  }

  return (
    <span className="lang" aria-label="Language">
      <button
        onClick={switchToEnglish}
        className={`lang-btn ${lang === "en" ? "active" : ""}`}
        type="button"
      >
        EN
      </button>
      <span className="sep" aria-hidden="true">
        &middot;
      </span>
      <button
        onClick={switchToSpanish}
        className={`lang-btn ${lang === "es" ? "active" : ""}`}
        lang="es"
        type="button"
      >
        ES
      </button>
    </span>
  );
}
