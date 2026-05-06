"use client";

import { useEffect, useCallback } from "react";

declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: () => void;
  }
}

export function LanguageToggle() {
  useEffect(() => {
    // Only load once
    if (document.getElementById("google-translate-script")) return;

    // Initialize Google Translate
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,es",
          autoDisplay: false,
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        "google_translate_element"
      );
    };

    const script = document.createElement("script");
    script.id = "google-translate-script";
    script.src =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const switchLanguage = useCallback((lang: string) => {
    // Find the Google Translate select element
    const select = document.querySelector(
      ".goog-te-combo"
    ) as HTMLSelectElement;
    if (select) {
      select.value = lang === "es" ? "es" : "en";
      select.dispatchEvent(new Event("change"));
    }
  }, []);

  return (
    <>
      {/* Hidden Google Translate widget */}
      <div
        id="google_translate_element"
        style={{ position: "absolute", top: -9999, left: -9999 }}
      />

      {/* Our styled toggle */}
      <span className="lang" aria-label="Language">
        <button
          onClick={() => switchLanguage("en")}
          className="lang-btn active"
          aria-current="true"
          type="button"
        >
          EN
        </button>
        <span className="sep" aria-hidden="true">
          &middot;
        </span>
        <button
          onClick={() => switchLanguage("es")}
          className="lang-btn"
          lang="es"
          type="button"
        >
          ES
        </button>
      </span>
    </>
  );
}
