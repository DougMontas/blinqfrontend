import React, { useEffect, useMemo, useRef, useState } from "react";
import { Globe } from "lucide-react";

const GOOGLE_ELEMENT_ID = "google_translate_element_singleton";

const LANGUAGES = [
  { code: "en", label: "English" },
  { code: "es", label: "Español" },
  { code: "fr", label: "Français" },
  { code: "pt", label: "Português" },
  { code: "ht", label: "Kreyòl Ayisyen" },
  { code: "it", label: "Italiano" },
  { code: "de", label: "Deutsch" },
  { code: "ru", label: "Русский" },
  { code: "zh-CN", label: "中文(简体)" },
  { code: "ar", label: "العربية" },
];

function getCookie(name) {
  const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const match = document.cookie.match(new RegExp(`(?:^|; )${escaped}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : "";
}

function setGoogleTranslateCookie(value) {
  const hostname = window.location.hostname;
  const secure = window.location.protocol === "https:" ? ";Secure" : "";
  const maxAge = 60 * 60 * 24 * 365;

  const base = `googtrans=${encodeURIComponent(value)};path=/;max-age=${maxAge};SameSite=Lax${secure}`;
  document.cookie = base;

  if (hostname && hostname !== "localhost") {
    const parts = hostname.split(".");
    if (parts.length >= 2) {
      const rootDomain = `.${parts.slice(-2).join(".")}`;
      document.cookie = `${base};domain=${rootDomain}`;
      document.cookie = `${base};domain=${hostname}`;
    }
  }
}

function clearGoogleTranslateCookie() {
  const hostname = window.location.hostname;
  const secure = window.location.protocol === "https:" ? ";Secure" : "";

  const expired = `googtrans=;path=/;expires=Thu, 01 Jan 1970 00:00:00 GMT;SameSite=Lax${secure}`;
  document.cookie = expired;

  if (hostname && hostname !== "localhost") {
    const parts = hostname.split(".");
    if (parts.length >= 2) {
      const rootDomain = `.${parts.slice(-2).join(".")}`;
      document.cookie = `${expired};domain=${rootDomain}`;
      document.cookie = `${expired};domain=${hostname}`;
    }
  }
}

function getCurrentLanguage() {
  const raw = getCookie("googtrans");
  if (!raw) return "en";

  const parts = raw.split("/");
  const target = parts[2];
  return target || "en";
}

export default function TranslateButton() {
  const [open, setOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("en");
  const rootRef = useRef(null);

  const currentLabel = useMemo(() => {
    return LANGUAGES.find((l) => l.code === currentLang)?.label || "Language";
  }, [currentLang]);

  useEffect(() => {
    setCurrentLang(getCurrentLanguage());

    if (!window.googleTranslateElementInit) {
      window.googleTranslateElementInit = () => {
        const container = document.getElementById(GOOGLE_ELEMENT_ID);
        const alreadyMounted =
          container &&
          (container.childNodes.length > 0 ||
            document.querySelector(`#${GOOGLE_ELEMENT_ID} .goog-te-combo`));

        if (
          window.google &&
          window.google.translate &&
          window.google.translate.TranslateElement &&
          container &&
          !alreadyMounted
        ) {
          new window.google.translate.TranslateElement(
            {
              pageLanguage: "en",
              autoDisplay: false,
              layout:
                window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            },
            GOOGLE_ELEMENT_ID
          );
        }
      };
    }

    const existingScript = document.getElementById("google-translate-script");
    if (!existingScript) {
      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    } else if (
      window.google &&
      window.google.translate &&
      window.google.translate.TranslateElement &&
      window.googleTranslateElementInit
    ) {
      window.googleTranslateElementInit();
    }

    const handleClickOutside = (event) => {
      if (rootRef.current && !rootRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  const applyLanguage = (langCode) => {
    setOpen(false);

    if (langCode === "en") {
      clearGoogleTranslateCookie();
      setCurrentLang("en");
      window.location.reload();
      return;
    }

    setGoogleTranslateCookie(`/en/${langCode}`);
    setCurrentLang(langCode);
    window.location.reload();
  };

  return (
    <div
      ref={rootRef}
      style={{
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        position: "relative",
      }}
    >
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-label="Toggle language options"
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          background: "#161b22",
          color: "#c9d1d9",
          padding: "10px 16px",
          borderRadius: 999,
          border: "1px solid #30363d",
          cursor: "pointer",
          boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
          fontWeight: 600,
          minWidth: 170,
          justifyContent: "center",
        }}
      >
        <Globe size={18} />
        <span style={{ fontSize: 12 }}>{currentLabel}</span>
      </button>

      {open && (
        <div
          style={{
            marginTop: 8,
            background: "rgba(15, 23, 42, 0.98)",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: 12,
            minWidth: 220,
            maxHeight: 260,
            overflowY: "auto",
            boxShadow: "0 12px 28px rgba(0,0,0,0.35)",
            padding: 8,
          }}
        >
          {LANGUAGES.map((lang) => {
            const active = currentLang === lang.code;
            return (
              <button
                key={lang.code}
                type="button"
                onClick={() => applyLanguage(lang.code)}
                style={{
                  width: "100%",
                  textAlign: "left",
                  background: active ? "rgba(244,82,12,0.14)" : "transparent",
                  color: "#e5e7eb",
                  border: "none",
                  borderRadius: 10,
                  padding: "10px 12px",
                  cursor: "pointer",
                  fontSize: 14,
                  fontWeight: active ? 700 : 500,
                }}
              >
                {lang.label}
              </button>
            );
          })}
        </div>
      )}

      <div
        id={GOOGLE_ELEMENT_ID}
        style={{
          position: "absolute",
          width: 1,
          height: 1,
          overflow: "hidden",
          opacity: 0,
          pointerEvents: "none",
        }}
      />
    </div>
  );
}