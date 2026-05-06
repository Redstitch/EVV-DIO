"use client";

import { useState, useCallback } from "react";

export function LanguageToggle() {
  const [lang, setLang] = useState("en");

  const switchLanguage = useCallback((targetLang: string) => {
    setLang(targetLang);

    if (targetLang === "en") {
      // Restore original page
      const frame = document.querySelector(
        "iframe.goog-te-menu-frame"
      ) as HTMLIFrameElement;
      if (frame) {
        const innerDoc = frame.contentDocument || frame.contentWindow?.document;
        if (innerDoc) {
          const restore = innerDoc.querySelector(
            ".goog-te-menu2-item:first-child"
          ) as HTMLElement;
          if (restore) {
            restore.click();
            return;
          }
        }
      }
      // Fallback: clear cookie and reload
      document.cookie = "googtrans=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
      document.cookie =
        "googtrans=; path=/; domain=" +
        window.location.hostname +
        "; expires=Thu, 01 Jan 1970 00:00:00 GMT";
      window.location.reload();
    } else {
      // Trigger Spanish translation
      const select = document.querySelector(
        ".goog-te-combo"
      ) as HTMLSelectElement;
      if (select) {
        select.value = "es";
        select.dispatchEvent(new Event("change"));
      } else {
        // Fallback: set cookie and reload
        document.cookie = "googtrans=/en/es; path=/";
        document.cookie =
          "googtrans=/en/es; path=/; domain=" + window.location.hostname;
        window.location.reload();
      }
    }
  }, []);

  return (
    <span className="lang" aria-label="Language">
      <button
        onClick={() => switchLanguage("en")}
        className={`lang-btn ${lang === "en" ? "active" : ""}`}
        type="button"
      >
        EN
      </button>
      <span className="sep" aria-hidden="true">
        &middot;
      </span>
      <button
        onClick={() => switchLanguage("es")}
        className={`lang-btn ${lang === "es" ? "active" : ""}`}
        lang="es"
        type="button"
      >
        ES
      </button>
    </span>
  );
}
