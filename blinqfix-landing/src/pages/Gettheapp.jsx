import React, { useState } from "react";

const emergencyStyles = `
:root {
  --bf-bg: #050816;
  --bf-bg-soft: #0b1020;
  --bf-accent: #22d3ee;
  --bf-accent-soft: rgba(34, 211, 238, 0.12);
  --bf-text: #f9fafb;
  --bf-muted: #9ca3af;
  --bf-border: #1f2933;
  --bf-radius-lg: 1.5rem;
  --bf-radius-md: 0.9rem;
  --bf-shadow-soft: 0 20px 40px rgba(0, 0, 0, 0.45);
  --bf-max-width: 1120px;
}

/* PAGE WRAPPER */

.bf-em-page {
  min-height: 100vh;
  background: radial-gradient(circle at top, #1e293b 0, #020617 50%, #000 100%);
  color: var(--bf-text);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "SF Pro Text",
    "Helvetica Neue", Arial, sans-serif;
  padding: 2.5rem 1.25rem 3rem;
}

/* Constrain content width */
.bf-em-page > section,
.bf-em-footer {
  max-width: var(--bf-max-width);
  margin: 0 auto 3rem;
}

/* HERO */

.bf-em-hero {
  display: grid;
  gap: 2.5rem;
  align-items: stretch;
  text-align: center;
}

@media (min-width: 900px) {
  .bf-em-hero {
    grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr);
  }
}

.bf-em-hero-content h1 {
  font-size: clamp(2.4rem, 3.2vw + 1.2rem, 3.4rem);
  line-height: 1.05;
  letter-spacing: -0.03em;
  margin: 0.5rem 0 0.75rem;
}

.bf-em-subhead {
  font-size: 1.02rem;
  line-height: 1.6;
  color: var(--bf-muted);
  max-width: 36rem;
  margin-left: 10%;
}

/* BADGE */

.bf-em-badge {
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25rem;
  padding: 0.6rem 0.9rem;
  border-radius: 999px;
  border: 1px solid rgba(148, 163, 184, 0.4);
  background: rgba(15, 23, 42, 0.9);
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: #e5e7eb;
}

.bf-em-badge-highlight {
  text-transform: none;
  letter-spacing: 0.03em;
  font-weight: 700;
  color: var(--bf-accent);
  margin-left: 35%;
  font-size: 1rem;
}

/* BUTTONS */

.bf-em-cta-row {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin: 1.6rem 0 1.9rem;
}

.bf-em-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem 1.4rem;
  border-radius: 999px;
  font-weight: 600;
  font-size: 0.95rem;
  border: 1px solid transparent;
  cursor: pointer;
  text-decoration: none;
  transition: transform 0.1s ease, box-shadow 0.1s ease, background 0.15s ease,
    border-color 0.15s ease;
  white-space: nowrap;
}

.bf-em-btn-large {
  font-size: 1.4rem;
  padding: 1rem 2rem;
}

.bf-em-btn-primary {
  background: linear-gradient(135deg, #22d3ee, #0ea5e9);
  color: #020617;
  box-shadow: 0 15px 30px rgba(56, 189, 248, 0.4);
}

.bf-em-btn-primary:hover {
  transform: translateY(-1px);
  box-shadow: 0 18px 36px rgba(56, 189, 248, 0.5);
}

.bf-em-btn-secondary {
  background: rgba(15, 23, 42, 0.9);
  color: var(--bf-text);
  border-color: rgba(148, 163, 184, 0.6);
}

.bf-em-btn-secondary:hover {
  background: rgba(15, 23, 42, 0.98);
  transform: translateY(-1px);
}

.bf-em-btn-ghost {
  background: transparent;
  border-color: rgba(148, 163, 184, 0.6);
  color: var(--bf-text);
}

.bf-em-btn-ghost:hover {
  background: rgba(15, 23, 42, 0.7);
}

.bf-em-btn-light {
  background: #f9fafb;
  color: #020617;
}

.bf-em-btn-light:hover {
  background: #e5e7eb;
  transform: translateY(-1px);
}

/* TEXT ME THE APP */

.bf-em-textlink {
  margin-bottom: 1.4rem;
}

.bf-em-textlink-label {
  display: block;
  font-size: 0.82rem;
  color: var(--bf-muted);
  margin-bottom: 0.35rem;
}

.bf-em-textlink-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
}

.bf-em-textlink-row input {
  flex: 1 1 10rem;
  min-width: 0;
  padding: 0.7rem 0.9rem;
  border-radius: 999px;
  border: 1px solid rgba(148, 163, 184, 0.7);
  background: rgba(15, 23, 42, 0.85);
  color: var(--bf-text);
  font-size: 0.9rem;
}

.bf-em-textlink-row input::placeholder {
  color: #6b7280;
}

.bf-em-textlink-row input:focus {
  outline: none;
  border-color: var(--bf-accent);
  box-shadow: 0 0 0 1px rgba(34, 211, 238, 0.7);
}

.bf-em-textlink-confirm {
  font-size: 0.8rem;
  color: var(--bf-muted);
  margin-top: 0.35rem;
}

/* QUICK POINTS */

.bf-em-quick-points {
  list-style: none;
  padding: 0;
  margin: 1.1rem 0 0;
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem;
  justify-content: center;
}

.bf-em-quick-points li {
  position: relative;
  flex: 0 1 210px;
  text-align: center;
  font-size: 0.99rem;
  color: var(--bf-muted);
  line-height: 1.5;
  padding-top: 1.3rem;
}

/* Star icon + glow */
.bf-em-quick-points li::before {
  content: "★";
  position: absolute;
  top: 0;
  left: 50%;
  margin-top: -20px;
  transform: translateX(-50%);
  font-size: 1.3rem;
  color: var(--bf-accent);
  text-shadow: 0 0 12px rgba(34, 211, 238, 0.9);
}

/* HERO ASIDE */

.bf-em-hero-aside {
  display: flex;
  align-items: stretch;
}

.bf-em-hero-card {
  border-radius: var(--bf-radius-lg);
  border: 1px solid rgba(148, 163, 184, 0.5);
  background: linear-gradient(
    150deg,
    rgba(15, 23, 42, 0.95),
    rgba(15, 23, 42, 0.85),
    rgba(15, 23, 42, 0.98)
  );
  padding: 1.6rem 1.6rem 1.8rem;
  box-shadow: var(--bf-shadow-soft);
}

.bf-em-hero-card h2 {
  font-size: 1.2rem;
  margin-top: 0;
  margin-bottom: 0.5rem;
  text-align: center;
}

.bf-em-small-heading {
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--bf-muted);
}

.bf-em-small-heading span {
  color: var(--bf-accent);
}

.bf-em-hero-card p {
  font-size: 0.92rem;
  color: var(--bf-muted);
  text-align: center;
}

.bf-em-hero-list {
  list-style: none;
  padding: 0;
  margin: 1rem 0 0.7rem;
  font-size: 0.9rem;
  text-align: center;
}

.bf-em-hero-list li {
  margin-bottom: 0.35rem;
}

.bf-em-hero-note {
  font-size: 0.8rem;
  color: #e5e7eb;
  margin-top: 0.75rem;
}

/* Banner inside hero card */

.banner-inner {
  margin-top: 3.5rem;
  padding-top: 3rem;
  border-top: 1px solid rgba(148, 163, 184, 0.35);
}

.banner-inner .section-title {
  font-size: 1rem;
  font-weight: 600;
  margin: 0;
}

.banner-inner .hero-sub {
  font-size: 0.9rem;
  color: var(--bf-muted);
  margin: 0.15rem 0 0;
}

/* APP STORE BADGES + QR (inside hero card) */

.bf-em-store-row {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 2.5rem;
  margin-top: 1.4rem;
  flex-wrap: nowrap;
}

.bf-em-store-column {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 220px;
}

.bf-em-store-link {
  display: inline-flex;
  height: 42px;
  transition: opacity 0.2s, transform 0.15s;
}

.bf-em-store-link img {
  height: 100%;
  width: auto;
  display: block;
}

.bf-em-store-link:hover {
  opacity: 0.85;
  transform: translateY(-1px);
}

.bf-em-qr-image {
  margin-top: 0.5rem;
  width: 80px;
  height: 80px;
  border-radius: 10px;
  background: #ffffff;
  padding: 3px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.35);
  object-fit: contain;
}

.bf-em-qr-placeholder {
  margin-top: 0.5rem;
  width: 80px;
  height: 80px;
  border-radius: 10px;
  border: 1px dashed var(--bf-border);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  color: var(--bf-muted);
  text-align: center;
  padding: 0.25rem;
  opacity: 0.9;
}

.bf-em-qr-caption {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--bf-muted);
  margin-top: 0.35rem;
  text-align: center;
}

.bf-em-qr-caption-muted {
  color: var(--bf-border);
}

/* On small phones, allow wrapping/centering */

@media (max-width: 480px) {
  .bf-em-store-row {
    flex-wrap: wrap;
    gap: 1.75rem;
  }

  .bf-em-subhead {
    margin-left: 0;
  }
}

/* SECTIONS */

.bf-em-section {
  border-radius: var(--bf-radius-lg);
  border: 1px solid rgba(15, 23, 42, 0.9);
  background: radial-gradient(circle at top left, #0b1220 0, #020617 55%);
  padding: 1.9rem 1.7rem 2rem;
  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.5);
}

.bf-em-section h2 {
  font-size: 1.5rem;
  margin: 0 0 0.4rem;
  text-align: center;
}

.bf-em-section-sub {
  font-size: 0.92rem;
  color: var(--bf-muted);
  max-width: 36rem;
  margin-left: 25%;
}

/* GRID & CARDS */

.bf-em-grid {
  display: grid;
  gap: 1.1rem;
  margin-top: 1.4rem;
}

@media (min-width: 720px) {
  .bf-em-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

.bf-em-card {
  border-radius: var(--bf-radius-md);
  border: 1px solid var(--bf-border);
  background: rgba(15, 23, 42, 0.9);
  padding: 1rem 1.1rem 1.1rem;
}

.bf-em-card-primary {
  border-color: rgba(34, 211, 238, 0.5);
  background: radial-gradient(circle at top left, #0f172a, #020617);
}

.bf-em-card h3 {
  margin: 0 0 0.4rem;
  font-size: 1rem;
}

.bf-em-card p {
  font-size: 0.9rem;
  color: var(--bf-muted);
}

/* HOW IT WORKS (if used later) */

.bf-em-steps {
  display: grid;
  gap: 1.1rem;
  margin-top: 1.4rem;
}

@media (min-width: 720px) {
  .bf-em-steps {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

.bf-em-step {
  border-radius: var(--bf-radius-md);
  border: 1px solid var(--bf-border);
  background: rgba(15, 23, 42, 0.95);
  padding: 1rem 1.1rem;
}

.bf-em-step-number {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 999px;
  background: var(--bf-accent-soft);
  color: var(--bf-accent);
  font-size: 0.8rem;
  font-weight: 700;
  margin-bottom: 0.4rem;
}

.bf-em-step h3 {
  margin: 0 0 0.25rem;
  font-size: 1rem;
}

.bf-em-step p {
  font-size: 0.9rem;
  color: var(--bf-muted);
}

/* TRUST */

.bf-em-trust-grid {
  margin-top: 1.1rem;
}

/* SOCIAL PROOF */

.bf-em-social {
  text-align: left;
}

.bf-em-rating-summary {
  margin-top: 0.7rem;
  font-size: 0.92rem;
}

.bf-em-stars {
  font-size: 1.2rem;
  letter-spacing: 0.04em;
  color: #facc15;
}

.bf-em-reviews-grid {
  margin-top: 1.1rem;
}

.bf-em-review {
  border-radius: var(--bf-radius-md);
  border: 1px solid var(--bf-border);
  background: rgba(15, 23, 42, 0.95);
  padding: 1rem 1.1rem;
  font-size: 0.9rem;
}

.bf-em-review-text {
  margin: 0 0 0.5rem;
  color: var(--bf-text);
}

.bf-em-review-meta {
  margin: 0;
  color: var(--bf-muted);
  font-size: 0.8rem;
}

/* FAQ */

.bf-em-faq-list {
  margin-top: 1rem;
  display: grid;
  gap: 0.9rem;
}

.bf-em-faq-item h3 {
  margin: 0 0 0.25rem;
  font-size: 0.98rem;
}

.bf-em-faq-item p {
  margin: 0;
  font-size: 0.9rem;
  color: var(--bf-muted);
}

.bf-em-faq-link {
  margin-top: 1rem;
  font-size: 0.88rem;
  color: var(--bf-muted);
}

.bf-em-faq-link a {
  color: var(--bf-accent);
  text-decoration: none;
}

.bf-em-faq-link a:hover {
  text-decoration: underline;
}

/* PRO CTA */

.bf-em-pro-cta {
  background: linear-gradient(135deg, #0f172a, #020617);
  border-color: rgba(34, 211, 238, 0.4);
}

.bf-em-pro-cta-inner {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  align-items: flex-start;
}

.bf-em-pro-cta-inner p {
  font-size: 0.92rem;
  color: var(--bf-muted);
}

/* FOOTER */

.bf-em-footer {
  border-top: 1px solid rgba(31, 41, 55, 0.9);
  padding-top: 1.4rem;
  font-size: 0.8rem;
  color: var(--bf-muted);
  text-align: center;
}
`;

const EmergencyMiamiPage = () => {
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleTextLinkSubmit = (e) => {
    e.preventDefault();
    if (phone.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <>
      <style>{emergencyStyles}</style>

      <main className="bf-em-page">
        {/* HERO */}
        <section className="bf-em-hero">
          <div className="bf-em-hero-content">
            <p className="bf-em-badge">
              Emergency HVAC &amp; Plumbing &amp; more • Miami-Dade &amp; Broward
              <span className="bf-em-badge-highlight">Get a service pro fast!</span>
            </p>

            <h1>Emergency home repairs in minutes, not days.</h1>

            <p className="bf-em-subhead">
              Burst pipes, AC failure, leaks, and more. Get vetted pros
              on-demand with the BlinqFix app. Request help in a few taps and
              track your pro in real time.
            </p>

            <div className="bf-em-cta-row">
              <a
                className="bf-em-btn bf-em-btn-primary bf-em-btn-large"
                href="blinqfix://open/emergency"
              >
                Get the app today. It&apos;s FREE!
              </a>
            </div>

            {/* Optional text-me-the-app form */}
            {/* <form className="bf-em-textlink" onSubmit={handleTextLinkSubmit}>
              <label htmlFor="phone" className="bf-em-textlink-label">
                Prefer a text? We’ll send you the app link:
              </label>
              <div className="bf-em-textlink-row">
                <input
                  id="phone"
                  type="tel"
                  placeholder="(305) 555-1234"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <button type="submit" className="bf-em-btn bf-em-btn-ghost">
                  Text me the app
                </button>
              </div>
              {submitted && (
                <p className="bf-em-textlink-confirm">
                  Thanks! (Demo) You’d now receive a text with the app link.
                </p>
              )}
            </form> */}

            <ul className="bf-em-quick-points">
              <li>No calling five different contractors.</li>
              <li>Clear, smart estimates before work starts.</li>
              <li>Secure payment and receipts in one app.</li>
            </ul>
          </div>

          <aside className="bf-em-hero-aside">
            <div className="bf-em-hero-card">
              <h2 className="bf-em-small-heading">
                Get more details at <span>www.blinqfix.com</span>
              </h2>

              <h2>Built for real on-demand jobs</h2>
              <p>
                When the AC dies in August or a pipe bursts at 10:30 pm,
                BlinqFix helps you move from panic to a clear plan.
              </p>
              <ul className="bf-em-hero-list">
                <li>Vetted &amp; insured pros</li>
                <li>Transparent, smart pricing</li>
                <li>Live status and ETA tracking</li>
              </ul>

              <div className="banner-inner">
                <h3 className="section-title" style={{ marginBottom: "0.5rem" }}>
                  Get the BlinqFix app
                </h3>
                <p className="hero-sub" style={{ maxWidth: "22rem" }}>
                  Book or accept jobs on the go. Download BlinqFix for iOS and
                  Android
                </p>

                <div className="bf-em-store-row">
                  {/* APPLE */}
                  <div className="bf-em-store-column">
                    <a
                      href="https://apps.apple.com/us/app/blinqfix-app/id6747390132"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bf-em-store-link"
                    >
                      <img
                        src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                        alt="Download on the App Store"
                      />
                    </a>

                    <img
                      src="/blinqfix_app_qr.png"
                      alt="Scan to download BlinqFix on the App Store"
                      className="bf-em-qr-image"
                    />
                    <span className="bf-em-qr-caption">
                      Scan with your iPhone
                    </span>
                  </div>

                  {/* GOOGLE (placeholder QR for now) */}
                  <div className="bf-em-store-column">
                    <a
                      href="https://play.google.com/store/games"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bf-em-store-link"
                    >
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/250px-Google_Play_Store_badge_EN.svg.png"
                        alt="Get it on Google Play"
                      />
                    </a>

                    <div className="bf-em-qr-placeholder">
                      ANDROID APP COMING SOON
                    </div>
                    <span className="bf-em-qr-caption bf-em-qr-caption-muted" />
                  </div>
                </div>
              </div>

              <p className="bf-em-hero-note">
                Currently serving Miami-Dade &amp; Broward County
              </p>
            </div>
          </aside>
        </section>

        {/* EMERGENCIES WE HANDLE */}
        <section className="bf-em-section bf-em-emergencies">
          <h2>Emergencies we handle in South Florida</h2>
          <p className="bf-em-section-sub">
            Priority focus today: HVAC and plumbing emergencies across
            Miami-Dade Broward.
          </p>
          <p style={{textAlign: "center"}} className="bf-em-section-sub">
           Additional trades coming online over time.
          </p>

          <div className="bf-em-grid">
            <article className="bf-em-card bf-em-card-primary">
              <h3>HVAC – No cool / no heat</h3>
              <p>
                AC not cooling, system dead, or blowing warm air during peak
                heat. We prioritize HVAC when temperatures make it unsafe or
                unlivable.
              </p>
            </article>

            <article className="bf-em-card bf-em-card-primary">
              <h3>Plumbing – Burst or leaking pipes</h3>
              <p>
                Active leaks, burst pipes, overflowing toilets, and clogged main
                lines. Upload photos so your plumber arrives prepared.
              </p>
            </article>

            <article className="bf-em-card">
              <h3>Leaks &amp; water intrusion</h3>
              <p>
                Ceiling leaks, flooding around doors or windows, and
                storm-related water issues that can damage floors and walls.
              </p>
            </article>

            <article className="bf-em-card">
              <h3>Electrical concerns</h3>
              <p>
                Burning smells, sparks, partial outages, and unsafe fixtures. We
                help route you to qualified electricians where available.
              </p>
            </article>

            <article className="bf-em-card">
              <h3>Roof leaks &amp; storm damage</h3>
              <p>
                Sudden leaks, missing shingles, or storm damage that can worsen
                quickly if left untreated.
              </p>
            </article>

            <article className="bf-em-card">
              <h3>Business-critical issues</h3>
              <p>
                Emergencies in small businesses like cafés, salons, and offices
                where HVAC or plumbing problems can shut you down.
              </p>
            </article>
          </div>
        </section>

        {/* TRUST SECTION */}
        <section className="bf-em-section bf-em-trust">
          <h2>Why Miami-Dade &amp; Broward trust BlinqFix</h2>

          <div className="bf-em-grid bf-em-trust-grid">
            <article className="bf-em-card">
              <h3>Vetted &amp; insured pros</h3>
              <p>
                We work with licensed, insured providers and collect key
                documentation so you’re not rolling the dice in an emergency.
              </p>
            </article>
            <article className="bf-em-card">
              <h3>Transparent, smart pricing</h3>
              <p>
                Estimates are based on a smart pricing matrix built for
                emergency work — not random guesswork on the phone.
              </p>
            </article>
            <article className="bf-em-card">
              <h3>Real-time tracking &amp; updates</h3>
              <p>
                See when a pro accepts your job, track their arrival on a map,
                and get notified at each step until the work is done.
              </p>
            </article>
          </div>
        </section>

        {/* SOCIAL PROOF */}
        <section className="bf-em-section bf-em-social">
          <h2>From panic to fixed  Real Stories</h2>

          <div className="bf-em-rating-summary">
            <div className="bf-em-stars" aria-hidden="true">
              ★★★★★
            </div>
            <p>
              <strong>4.9 / 5 average rating</strong> • Dozens of emergency jobs
              completed across South Florida.
            </p>
          </div>

          <div className="bf-em-grid bf-em-reviews-grid">
            <article className="bf-em-review">
              <p className="bf-em-review-text">
                “Our AC died on a Sunday afternoon. We requested help through
                BlinqFix and had a tech on the way in under an hour.”
              </p>
              <p className="bf-em-review-meta">— Homeowner in Kendall</p>
            </article>

            <article className="bf-em-review">
              <p className="bf-em-review-text">
                “A pipe burst in our duplex. Instead of calling around, I used
                BlinqFix and tracked the plumber’s ETA from my phone.”
              </p>
              <p className="bf-em-review-meta">— Landlord in Fort Lauderdale</p>
            </article>

            <article className="bf-em-review">
              <p className="bf-em-review-text">
                “I run a small café. When a plumbing issue shut us down,
                BlinqFix helped me get someone out fast so we could reopen.”
              </p>
              <p className="bf-em-review-meta">— Café owner in Miami Beach</p>
            </article>
          </div>
        </section>

        {/* FAQ */}
        <section className="bf-em-section bf-em-faq">
          <h2>Emergency FAQ</h2>

          <div className="bf-em-faq-list">
            <article className="bf-em-faq-item">
              <h3>How fast can someone come?</h3>
              <p>
                Response times vary by location, time of day, and demand, but
                BlinqFix is built for emergency and urgent jobs first. The app
                shows you when a provider accepts your job and their estimated
                arrival time. Usually between 15 and 30 minutes.
              </p>
            </article>

            <article className="bf-em-faq-item">
              <h3>What’s considered an emergency?</h3>
              <p>
                Active leaks, burst pipes, no-cool/no-heat HVAC, dangerous
                electrical issues, and sudden water intrusion all qualify as
                emergencies. If you consider it an emergency, then it&apos;s an
                emergency.
              </p>
            </article>

            <article className="bf-em-faq-item">
              <h3>How much does it cost?</h3>
              <p>
                Pricing depends on the issue, time, and location. You’ll see an
                upfront estimate based on our pricing algorithm. If the provider
                discovers additional work on-site, they’ll explain any changes
                before proceeding whenever possible.
              </p>
            </article>

            <article className="bf-em-faq-item">
              <h3>How do I pay?</h3>
              <p>
                All payments are handled securely through the BlinqFix app using
                our payment partner Stripe.
              </p>
            </article>

            <article className="bf-em-faq-item">
              <h3>Is BlinqFix available in my area?</h3>
              <p>
                We’re currently focused on Miami-Dade and Broward County, with
                more Florida markets coming soon. The app will tell you if we
                serve your address.
              </p>
            </article>
          </div>

          <p className="bf-em-faq-link">
            Want more details? Visit our full help center at{" "}
            <a href="/help/faq">blinqfix.com/help/faq</a>.
          </p>
        </section>

        {/* SERVICE PROS CTA */}
        <section className="bf-em-section bf-em-pro-cta">
          <div className="bf-em-pro-cta-inner">
            <h2>Are you an HVAC or Plumbing pro in South Florida?</h2>
            <p>
              BlinqFix sends you real emergency jobs, not endless quote
              requests. Choose your tier, get high intent jobs, and keep your
              crew busy.
            </p>
            <a className="bf-em-btn bf-em-btn-light" href="/pro">
              Learn more about BlinqFix for pros
            </a>
          </div>
        </section>

        <footer className="bf-em-footer">
          <p>© {new Date().getFullYear()} BlinqFix. Emergency repairs, handled.</p>
        </footer>
      </main>
    </>
  );
};

export default EmergencyMiamiPage;
