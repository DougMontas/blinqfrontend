// components/FooterWeb.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../../src/App.css";

export default function FooterWeb({ className = "" }) {
  const year = new Date().getFullYear();

  const LINKS = [
    { label: "Terms & Conditions", to: "/termsandconditions" },
    { label: "Privacy Policy",     to: "/privacypolicy" },
    { label: "FAQ",                to: "/faq" },
    { label: "Help",               href: "mailto:..." },
  ];

  return (
    <footer className={`bfw-footer ${className}`}>
      <nav className="bfw-links" aria-label="Footer">
        {LINKS.map((l, i) =>
          l.href ? (
            <a key={i} className="bfw-link" href={l.href}>
              {l.label}
            </a>
          ) : (
            <Link key={i} className="bfw-link" to={l.to}>
              {l.label}
            </Link>
          )
        )}
      </nav>
      <div className="bfw-copy">© {year} BlinqFix</div>
    </footer>
  );
}
