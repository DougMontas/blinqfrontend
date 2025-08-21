import React, { useEffect, useRef, useState } from "react";
import { Globe } from "lucide-react";

export default function TranslateButton() {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    console.log("[TranslateButton] Mounting...");

    // Initialize only once
    if (!window.googleTranslateElementInit) {
      window.googleTranslateElementInit = () => {
        console.log("[TranslateButton] Initializing Google Translate...");
        if (!document.querySelector(".goog-te-combo")) {
          new window.google.translate.TranslateElement(
            {
              pageLanguage: "en",
              layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            },
            "google_translate_element"
          );
        }
      };
    }

    const existingScript = document.getElementById("google-translate-script");
    if (!existingScript) {
      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
      console.log("[TranslateButton] Script injected");
    }

    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    // Hide duplicate select boxes on open
    if (open) {
      const combos = document.querySelectorAll(".goog-te-combo");
      if (combos.length > 1) {
        for (let i = 1; i < combos.length; i++) {
          combos[i].style.display = "none";
        }
      }
    }
  }, [open]);

  return (
    <div
      ref={ref}
      style={{
        position: "fixed",
        top: 24,
        right: 24,
        zIndex: 999,
        background: "rgba(30, 41, 59, 0.5)",
        padding: "8px 16px",
        borderRadius: "20px",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(51, 65, 85, 0.5)",
        overflow: "hidden",
      }}
    >
      <button
        onClick={() => {
          console.log("[TranslateButton] Toggle pressed");
          setOpen(!open);
        }}
        style={{
          display: 'flex',
          alignItems: "center",
          gap: "8px",
          background: "#161b22",
          color: "#c9d1d9",
          padding: "10px 16px",
          borderRadius: "50px",
          border: "1px solid #30363d",
          cursor: "pointer",
          boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
          transition: "all 0.2s ease-in-out",
          fontWeight: 500,
        }}
      >
        <Globe size={18} />
        <span style={{ marginLeft: 6, fontSize: 12 }}>Language</span>
      </button>

      <div
        id="google_translate_element"
        style={{
          marginTop: 8,
          display: open ? "block" : "none",
          backgroundColor: "rgba(15, 23, 42, 0.9)",
          padding: 6,
          borderRadius: 8,
          maxWidth: 200,
          overflowX: "auto",
          whiteSpace: "nowrap",
        }}
      />
    </div>
  );
}
