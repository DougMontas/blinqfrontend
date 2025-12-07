// import React from "react";

// const serviceProStyles = `
// :root {
//   /* Brand Colors */
//   --bf-bg: #020617;
//   --bf-bg-secondary: #0f172a;
//   --bf-primary: #06b6d4; /* Cyan 500 */
//   --bf-primary-glow: #06b6d4;
//   --bf-accent: #f97316; /* Orange */

//   /* Text Colors */
//   --bf-text-main: #f8fafc;
//   --bf-text-muted: #94a3b8;
//   --bf-text-dim: #475569;

//   /* Borders & Glass */
//   --bf-border: rgba(148, 163, 184, 0.1);
//   --bf-glass: rgba(15, 23, 42, 0.6);
//   --bf-glass-highlight: rgba(255, 255, 255, 0.03);

//   /* Layout */
//   --bf-radius: 12px;
//   --bf-container: 1120px;
// }

// /* BASE */

// .bf-pro-page {
//   background-color: var(--bf-bg);
//   color: var(--bf-text-main);
//   font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
//     sans-serif;
//   min-height: 100vh;
//   padding: 0 1.5rem;
//   overflow-x: hidden;
//   position: relative;
//   line-height: 1.5;
// }

// /* Background Ambient Glows */

// .bf-bg-glow {
//   position: absolute;
//   width: 500px;
//   height: 500px;
//   border-radius: 50%;
//   filter: blur(100px);
//   opacity: 0.15;
//   z-index: 0;
//   pointer-events: none;
// }

// .bf-bg-glow-1 {
//   top: -100px;
//   left: -100px;
//   background: var(--bf-primary);
// }

// .bf-bg-glow-2 {
//   top: 40%;
//   right: -200px;
//   background: #3b82f6;
// }

// /* Sections Wrapper */

// .bf-pro-hero,
// .bf-section,
// .bf-cta-final,
// .bf-footer {
//   max-width: var(--bf-container);
//   margin: 0 auto;
//   position: relative;
//   z-index: 1;
// }

// /* --- HERO SECTION --- */

// .bf-pro-hero {
//   padding: 5rem 0 4rem;
//   display: grid;
//   gap: 3rem;
//   align-items: center;
// }

// @media (min-width: 968px) {
//   .bf-pro-hero {
//     grid-template-columns: 1.2fr 0.8fr;
//     padding: 6rem 0 4.5rem;
//   }
// }

// .bf-pro-hero-content {
//   max-width: 34rem;
// }

// /* Badges */

// .bf-pro-badge-wrapper {
//   display: flex;
//   align-items: center;
//   gap: 1rem;
//   flex-wrap: wrap;
//   margin-bottom: 1.5rem;
//   font-size: 0.85rem;
//   font-weight: 500;
// }

// .bf-pro-badge {
//   display: inline-flex;
//   align-items: center;
//   gap: 0.5rem;
//   padding: 0.4rem 0.8rem;
//   border-radius: 100px;
//   background: rgba(6, 182, 212, 0.1);
//   color: #22d3ee;
//   border: 1px solid rgba(6, 182, 212, 0.2);
// }

// .bf-pro-badge-text {
//   color: var(--bf-text-muted);
// }

// .bf-pulse {
//   width: 8px;
//   height: 8px;
//   background: #22d3ee;
//   border-radius: 50%;
//   box-shadow: 0 0 0 0 rgba(34, 211, 238, 0.7);
//   animation: pulse-cyan 2s infinite;
// }

// @keyframes pulse-cyan {
//   0% {
//     transform: scale(0.95);
//     box-shadow: 0 0 0 0 rgba(34, 211, 238, 0.7);
//   }
//   70% {
//     transform: scale(1);
//     box-shadow: 0 0 0 6px rgba(34, 211, 238, 0);
//   }
//   100% {
//     transform: scale(0.95);
//     box-shadow: 0 0 0 0 rgba(34, 211, 238, 0);
//   }
// }

// /* Hero text */

// .bf-hero-title {
//   font-size: clamp(2.5rem, 5vw, 4rem);
//   line-height: 1.1;
//   font-weight: 800;
//   letter-spacing: -0.03em;
//   margin-bottom: 1.2rem;
// }

// .text-gradient {
//   background: linear-gradient(135deg, #ffffff 0%, #94a3b8 100%);
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
// }

// .bf-pro-subhead {
//   font-size: 1.125rem;
//   color: var(--bf-text-muted);
//   max-width: 540px;
//   margin-bottom: 2rem;
// }

// /* Feature List */

// .bf-pro-feature-list {
//   list-style: none;
//   padding: 0;
//   margin: 2rem 0 0;
//   display: flex;
//   flex-direction: column;
//   gap: 0.75rem;
// }

// .bf-pro-feature-list li {
//   display: flex;
//   align-items: center;
//   gap: 0.75rem;
//   color: var(--bf-text-main);
//   font-weight: 500;
// }

// /* Icon sizes */

// .icon-check {
//   width: 20px;
//   height: 20px;
//   color: var(--bf-primary);
// }

// .icon-x {
//   width: 20px;
//   height: 20px;
//   color: #ef4444;
// }

// .icon-bolt {
//   width: 24px;
//   height: 24px;
//   color: #eab308;
// }

// /* Buttons */

// .bf-pro-cta-row {
//   display: flex;
//   gap: 1rem;
//   flex-wrap: wrap;
//   margin-bottom: 0.75rem;
// }

// .bf-pro-btn {
//   display: inline-flex;
//   align-items: center;
//   justify-content: center;
//   padding: 0.8rem 1.6rem;
//   border-radius: 99px;
//   font-weight: 600;
//   text-decoration: none;
//   transition: all 0.2s ease;
// }

// .bf-pro-btn-primary {
//   background: var(--bf-text-main);
//   color: var(--bf-bg);
// }

// .bf-pro-btn-primary:hover {
//   transform: translateY(-2px);
//   box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
// }

// .bf-pro-btn-secondary {
//   background: rgba(255, 255, 255, 0.05);
//   color: var(--bf-text-main);
//   border: 1px solid var(--bf-border);
// }

// .bf-pro-btn-secondary:hover {
//   background: rgba(255, 255, 255, 0.1);
// }

// /* =========================
//    APP STORE BADGES + QR
//    ======================= */

// .bf-app-download {
//   margin-top: 2rem;
//   padding-top: 1.5rem;
//   border-top: 1px dashed var(--bf-border);
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   text-align: center;
// }

// .bf-app-label {
//   font-size: 0.85rem;
//   color: var(--bf-text-dim);
//   margin-bottom: 0.9rem;
//   text-transform: uppercase;
//   letter-spacing: 0.06em;
//   font-weight: 600;
// }

// /* Row: Apple column + Google column */
// .bf-badges {
//   display: flex;
//   justify-content: center;
//   align-items: flex-start;
//   gap: 4rem; /* more separation */
//   flex-wrap: nowrap;
// }

// /* Each store column */
// .bf-store-column {
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   max-width: 260px; /* a bit wider */
// }

// /* Store badges */
// .bf-store-link {
//   display: inline-flex;
//   height: 48px; /* larger badges */
//   transition: opacity 0.2s, transform 0.15s;
// }

// .bf-store-link img {
//   height: 100%;
//   width: auto;
//   display: block;
// }

// .bf-store-link:hover {
//   opacity: 0.85;
//   transform: translateY(-1px);
// }

// /* QR IMAGE – slightly larger */
// .bf-qr-image {
//   margin-top: 0.5rem;
//   width: 90px;
//   height: 90px;
//   border-radius: 10px;
//   background: #ffffff;
//   padding: 3px;
//   box-shadow: 0 4px 14px rgba(0, 0, 0, 0.35);
//   object-fit: contain;
// }

// /* Placeholder for future Google QR – same footprint */
// .bf-qr-placeholder {
//   margin-top: 0.5rem;
//   width: 90px;
//   height: 90px;
//   border-radius: 10px;
//   border: 1px dashed var(--bf-border);
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   font-size: 0.75rem;
//   color: var(--bf-text-dim);
//   opacity: 0.9;
// }

// /* Captions */
// .bf-qr-caption {
//   font-size: 0.75rem;
//   text-transform: uppercase;
//   letter-spacing: 0.08em;
//   color: var(--bf-text-muted);
//   margin-top: 0.35rem;
// }

// .bf-qr-caption-muted {
//   color: var(--bf-text-dim);
// }

// /* --- HERO RIGHT (GLASS CARD) --- */

// .bf-pro-hero-visual {
//   display: flex;
//   justify-content: center;
// }

// .bf-glass-card {
//   background: linear-gradient(
//     145deg,
//     rgba(30, 41, 59, 0.7),
//     rgba(15, 23, 42, 0.8)
//   );
//   backdrop-filter: blur(12px);
//   border: 1px solid var(--bf-border);
//   border-top: 1px solid rgba(255, 255, 255, 0.1);
//   border-radius: 20px;
//   padding: 2rem;
//   box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
//   position: relative;
// }

// .bf-rotate-card {
//   transform: rotate(-2deg);
//   transition: transform 0.3s ease;
// }

// .bf-rotate-card:hover {
//   transform: rotate(0deg);
// }

// .bf-card-header {
//   display: flex;
//   gap: 1rem;
//   align-items: center;
//   margin-bottom: 1.5rem;
// }

// .icon-box {
//   width: 48px;
//   height: 48px;
//   background: rgba(234, 179, 8, 0.1);
//   border-radius: 12px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   color: #eab308;
// }

// .bf-card-header h3 {
//   margin: 0;
//   font-size: 1.1rem;
// }

// .bf-card-header p {
//   margin: 0;
//   color: var(--bf-text-muted);
//   font-size: 0.9rem;
// }

// .bf-card-divider {
//   height: 1px;
//   background: var(--bf-border);
//   margin: 0 -2rem 1.5rem;
// }

// .bf-checklist {
//   list-style: none;
//   padding: 0;
//   margin: 0;
//   display: flex;
//   flex-direction: column;
//   gap: 1rem;
// }

// .bf-checklist li {
//   display: flex;
//   align-items: center;
//   gap: 0.75rem;
//   color: var(--bf-text-muted);
//   font-size: 0.95rem;
// }

// .bf-checklist strong {
//   color: var(--bf-text-main);
// }

// .bf-card-footer {
//   margin-top: 1.5rem;
//   font-size: 0.8rem;
//   color: var(--bf-text-dim);
//   display: flex;
//   align-items: center;
//   gap: 0.5rem;
// }

// .bf-status-dot {
//   width: 6px;
//   height: 6px;
//   background: #22c55e;
//   border-radius: 50%;
//   box-shadow: 0 0 10px #22c55e;
// }

// /* --- SECTIONS GENERAL --- */

// .bf-section {
//   margin-bottom: 5rem;
//   padding-top: 2rem;
// }

// .bf-section-header {
//   text-align: center;
//   margin-bottom: 3rem;
// }

// .bf-section-header h2 {
//   font-size: 2rem;
//   margin-bottom: 0.5rem;
// }

// .bf-section-header p {
//   color: var(--bf-text-muted);
// }

// /* --- STEPS --- */

// .bf-grid-steps {
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
//   gap: 2rem;
// }

// .bf-step-card {
//   background: var(--bf-bg-secondary);
//   border: 1px solid var(--bf-border);
//   padding: 2rem;
//   border-radius: 16px;
//   transition: border-color 0.2s;
// }

// .bf-step-card:hover {
//   border-color: rgba(6, 182, 212, 0.3);
// }

// .bf-step-num {
//   font-size: 3rem;
//   font-weight: 800;
//   color: rgba(255, 255, 255, 0.15);
//   line-height: 1;
//   margin-bottom: 0.5rem;
// }

// .bf-step-card h3 {
//   margin-bottom: 0.75rem;
//   color: var(--bf-primary);
// }

// .bf-step-card p {
//   font-size: 0.95rem;
//   color: var(--bf-text-muted);
// }

// /* --- TICKETS (EARNINGS) --- */

// .bf-grid-tickets {
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
//   gap: 1.5rem;
// }

// .bf-ticket-card {
//   background: #182030;
//   border: 1px solid var(--bf-border);
//   border-radius: 16px;
//   padding: 1.5rem;
//   position: relative;
//   display: flex;
//   flex-direction: column;
// }

// .bf-ticket-highlight {
//   border-color: rgba(249, 115, 22, 0.4);
//   background: radial-gradient(
//       circle at top right,
//       rgba(249, 115, 22, 0.1),
//       transparent 60%
//     ),
//     #182030;
// }

// .bf-ticket-badge {
//   position: absolute;
//   top: -10px;
//   right: 20px;
//   background: #f97316;
//   color: white;
//   font-size: 0.7rem;
//   font-weight: 700;
//   text-transform: uppercase;
//   padding: 0.2rem 0.6rem;
//   border-radius: 4px;
// }

// .bf-ticket-header {
//   display: flex;
//   justify-content: space-between;
//   margin-bottom: 1rem;
// }

// .bf-tag {
//   font-size: 0.75rem;
//   font-weight: 600;
//   padding: 0.2rem 0.5rem;
//   border-radius: 4px;
// }

// .bf-tag-hvac {
//   background: rgba(34, 211, 238, 0.15);
//   color: #22d3ee;
// }

// .bf-tag-plumbing {
//   background: rgba(59, 130, 246, 0.15);
//   color: #60a5fa;
// }

// .bf-tag-elec {
//   background: rgba(234, 179, 8, 0.15);
//   color: #facc15;
// }

// .bf-time {
//   font-size: 0.8rem;
//   color: var(--bf-text-dim);
// }

// .bf-ticket-card h3 {
//   font-size: 1.1rem;
//   margin: 0 0 0.5rem;
// }

// .bf-ticket-desc {
//   font-size: 0.9rem;
//   color: var(--bf-text-muted);
//   margin-bottom: 1.5rem;
//   flex-grow: 1;
// }

// .bf-ticket-price {
//   background: rgba(0, 0, 0, 0.3);
//   padding: 0.75rem;
//   border-radius: 8px;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// }

// .bf-ticket-price span {
//   font-size: 0.8rem;
//   color: var(--bf-text-muted);
// }

// .bf-ticket-price strong {
//   color: #22c55e;
//   font-size: 1.1rem;
// }

// /* --- COMPARISON --- */

// .bf-section-compare {
//   margin-bottom: 4rem;
// }

// .bf-compare-grid {
//   display: grid;
//   grid-template-columns: 1fr;
//   border-radius: 20px;
//   overflow: hidden;
//   border: 1px solid var(--bf-border);
// }

// @media (min-width: 768px) {
//   .bf-compare-grid {
//     grid-template-columns: 1fr 1fr;
//   }
// }

// .bf-compare-col {
//   padding: 3rem 2rem;
// }

// .bf-compare-bad {
//   background: rgba(15, 23, 42, 0.6);
// }

// .bf-compare-good {
//   background: rgba(6, 182, 212, 0.05);
//   position: relative;
// }

// .bf-compare-good::before {
//   content: "";
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 4px;
//   background: var(--bf-primary);
// }

// .bf-compare-col h3 {
//   margin-top: 0;
//   margin-bottom: 1.5rem;
//   font-size: 1.25rem;
// }

// .bf-compare-col ul {
//   list-style: none;
//   padding: 0;
//   display: flex;
//   flex-direction: column;
//   gap: 1rem;
// }

// .bf-compare-col li {
//   display: flex;
//   align-items: center;
//   gap: 1rem;
//   color: var(--bf-text-muted);
// }

// /* --- FINAL CTA & FOOTER --- */

// .bf-cta-final {
//   text-align: center;
//   padding: 4rem 1rem;
//   border-top: 1px solid var(--bf-border);
// }

// .bf-cta-content h2 {
//   font-size: 2rem;
//   margin-bottom: 1rem;
// }

// .bf-cta-content p {
//   color: var(--bf-text-muted);
//   margin-bottom: 2rem;
// }

// .bf-footer {
//   text-align: center;
//   padding: 3rem 0;
//   border-top: 1px solid var(--bf-border);
//   font-size: 0.9rem;
//   color: var(--bf-text-dim);
// }

// /* -------------------------
//    RESPONSIVE SMALL SCREENS
//    ------------------------ */

// @media (max-width: 640px) {
//   .bf-pro-page {
//     padding: 0 1rem;
//   }

//   .bf-hero-title {
//     font-size: 2.3rem;
//   }

//   .bf-section-header {
//     margin-bottom: 2.2rem;
//   }

//   .bf-compare-col {
//     padding: 2.3rem 1.6rem;
//   }

//   .bf-badges {
//     flex-wrap: wrap;
//     gap: 1.5rem;
//   }

//   .bf-store-link {
//     height: 40px; /* slightly smaller on phones */
//   }

//   .bf-qr-image,
//   .bf-qr-placeholder {
//     width: 70px;
//     height: 70px;
//   }
// }
// `;

// // Reusable Icon Components
// const CheckIcon = () => (
//   <svg
//     className="icon-check"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="3"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//   >
//     <polyline points="20 6 9 17 4 12" />
//   </svg>
// );

// const XIcon = () => (
//   <svg
//     className="icon-x"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="3"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//   >
//     <line x1="18" y1="6" x2="6" y2="18" />
//     <line x1="6" y1="6" x2="18" y2="18" />
//   </svg>
// );

// const BoltIcon = () => (
//   <svg className="icon-bolt" viewBox="0 0 24 24" fill="currentColor" stroke="none">
//     <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
//   </svg>
// );

// const ServiceProLandingPage = () => {
//   return (
//     <>
//       <style>{serviceProStyles}</style>

//       <main className="bf-pro-page">
//         {/* BACKGROUND EFFECTS */}
//         <div className="bf-bg-glow bf-bg-glow-1" />
//         <div className="bf-bg-glow bf-bg-glow-2" />

//         {/* HERO SECTION */}
//         <section className="bf-pro-hero">
//           <div className="bf-pro-hero-content">
//             <div className="bf-pro-badge-wrapper">
//               <span className="bf-pro-badge">
//                 <span className="bf-pulse" />
//                 Emergency Work Only Miami-Dade & Broward
//               </span>
//               <span className="bf-pro-badge-text">
//             HVAC • Plumbing • Electrical
//               </span>
//             </div>

//             <h1 className="bf-hero-title">
//               More emergency jobs,
//               <br />
//               <span className="text-gradient">less wasted leads.</span>
//             </h1>

//             <p className="bf-pro-subhead">
//               BlinqFix sends you high-intent emergency on-demand customers ready to book
//               now. Stop fighting over tire-kickers. You choose the jobs, you
//               keep the profit.
//             </p>

//             <div className="bf-pro-cta-row">
//               <a className="bf-pro-btn bf-pro-btn-primary" href="#app-download">
//                 Get the app to join
//                 <svg
//                   width="16"
//                   height="16"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2.5"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   style={{ marginLeft: 8 }}
//                 >
//                   <path d="M5 12h14" />
//                   <path d="m12 5 7 7-7 7" />
//                 </svg>
//               </a>
//               <a className="bf-pro-btn bf-pro-btn-secondary" href="#how-it-works">
//                 How it works
//               </a>
//             </div>

//             <ul className="bf-pro-feature-list">
//               <li>
//                 <CheckIcon /> Real emergency tickets, no junk leads.
//               </li>
//               <li>
//                 <CheckIcon /> See photos, address &amp; issue upfront.
//               </li>
//               <li>
//                 <CheckIcon /> Built for serious trade businesses.
//               </li>
//             </ul>

//             {/* APP STORE BADGES + QR */}
//             <div id="app-download" className="bf-app-download">
//               <p className="bf-app-label">Run your business from the field:</p>

//               <div className="bf-badges">
//                 {/* APP STORE + QR */}
//                 <div className="bf-store-column">
//                   <a
//                     href="https://apps.apple.com/us/app/blinqfix-app/id6747390132"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="bf-store-link"
//                   >
//                     <img
//                       src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
//                       alt="Download on the App Store"
//                     />
//                   </a>

//                   <img
//                     src="/blinqfix_app_qr.png"
//                     alt="Scan to download BlinqFix on the App Store"
//                     className="bf-qr-image"
//                   />
//                   <span className="bf-qr-caption">
//                     Scan with your iPhone
//                   </span>
//                 </div>

//                 {/* GOOGLE PLAY + COMING SOON (QR SLOT READY) */}
//                 <div className="bf-store-column">
//                   <a
//                     href="https://play.google.com/store"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="bf-store-link"
//                   >
//                     <img
//                       src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/250px-Google_Play_Store_badge_EN.svg.png"
//                       alt="Get it on Google Play"
//                     />
//                   </a>

//                   <div className="bf-qr-placeholder">ANDROID APP COMING SOON</div>
//                   <span className="bf-qr-caption bf-qr-caption-muted">
                    
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* HERO RIGHT: VALUE CARD */}
//           <aside className="bf-pro-hero-visual">
//             <div className="bf-glass-card bf-rotate-card">
//               <div className="bf-card-header">
//                 <div className="icon-box">
//                   <BoltIcon />
//                 </div>
//                 <div>
//                   <h3>Built for Trades</h3>
//                   <p>Designed for the field, not the office.</p>
//                 </div>
//               </div>
//               <div className="bf-card-divider" />
//               <ul className="bf-checklist">
//                 <li>
//                   <CheckIcon />{" "}
//                   <span>
//                     <strong>Zero</strong> upfront lead costs
//                   </span>
//                 </li>
//                 <li>
//                   <CheckIcon />{" "}
//                   <span>
//                     <strong>Exclusive</strong> zip code targeting
//                   </span>
//                 </li>
//                 <li>
//                   <CheckIcon />{" "}
//                   <span>
//                     <strong>Instant</strong> payout options
//                   </span>
//                 </li>
//               </ul>
//               <div className="bf-card-footer">
//                 <span className="bf-status-dot" /> Live in Miami-Dade
//                 &amp; Broward
//               </div>
//             </div>
//           </aside>
//         </section>

//         {/* HOW IT WORKS */}
//         <section id="how-it-works" className="bf-section">
//           <div className="bf-section-header">
//             <h2>How BlinqFix works</h2>
//             <p>A streamlined workflow designed to get you paid faster.</p>
//           </div>

//           <div className="bf-grid-steps">
//             <div className="bf-step-card">
//               <div className="bf-step-num">1</div>
//               <h3>Create Profile</h3>
//               <p>
//                 Upload your license, insurance, and logo. Tell us your trade
//                 and set your coverage zones.
//               </p>
//             </div>
//             <div className="bf-step-card">
//               <div className="bf-step-num">2</div>
//               <h3>Set Schedule</h3>
//               <p>
//                 Toggle your availability for emergency calls. Nights, weekends,
//                 or 24/7 — you control the flow.
//               </p>
//             </div>
//             <div className="bf-step-card">
//               <div className="bf-step-num">3</div>
//               <h3>Accept Jobs</h3>
//               <p>
//                 Review the issue, photos, and price. Accept the ticket
//                 instantly and head to the site.
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* LIVE TICKETS PREVIEW */}
//         <section className="bf-section">
//           <div className="bf-section-header">
//             <h2>Real tickets. Real revenue.</h2>
//             <p>No bidding wars. Here is what typical emergency tickets look like.</p>
//           </div>

//           <div className="bf-grid-tickets">
//             {/* Ticket 1 */}
//             <article className="bf-ticket-card">
//               <div className="bf-ticket-header">
//                 <span className="bf-tag bf-tag-hvac">HVAC</span>
//                 <span className="bf-time">8:45pm • Miami</span>
//               </div>
//               <h3>AC System Failure / No Cool</h3>
//               <p className="bf-ticket-desc">
//                 Customer reports unit freezing up. Photos of condenser included.
//               </p>
//               <div className="bf-ticket-price">
//                 <span>Est. Payout</span>
//                 <strong>$275 – $450</strong>
//               </div>
//             </article>

//             {/* Ticket 2 */}
//             <article className="bf-ticket-card bf-ticket-highlight">
//               <div className="bf-ticket-badge">High Demand</div>
//               <div className="bf-ticket-header">
//                 <span className="bf-tag bf-tag-plumbing">Plumbing</span>
//                 <span className="bf-time">7:10pm • Ft. Lauderdale</span>
//               </div>
//               <h3>Burst Pipe / Active Leak</h3>
//               <p className="bf-ticket-desc">
//                 Main water shutoff failed. Flooding in kitchen. Urgent response
//                 needed.
//               </p>
//               <div className="bf-ticket-price">
//                 <span>Est. Payout</span>
//                 <strong>$350 – $650</strong>
//               </div>
//             </article>

//             {/* Ticket 3 */}
//             <article className="bf-ticket-card">
//               <div className="bf-ticket-header">
//                 <span className="bf-tag bf-tag-elec">Electrical</span>
//                 <span className="bf-time">3:30pm • Hollywood</span>
//               </div>
//               <h3>Breaker Trips / Burning Smell</h3>
//               <p className="bf-ticket-desc">
//                 Panel is hot to touch. Partial power outage in master bed.
//               </p>
//               <div className="bf-ticket-price">
//                 <span>Est. Payout</span>
//                 <strong>$250 – $400</strong>
//               </div>
//             </article>
//           </div>
//         </section>

//         {/* COMPARISON */}
//         <section className="bf-section bf-section-compare">
//           <div className="bf-compare-grid">
//             <div className="bf-compare-col bf-compare-bad">
//               <h3>Typical Lead Sites</h3>
//               <ul>
//                 <li>
//                   <XIcon /> Pay upfront for shared leads
//                 </li>
//                 <li>
//                   <XIcon /> Compete with 5 other pros
//                 </li>
//                 <li>
//                   <XIcon /> Tire-kickers &amp; price shoppers
//                 </li>
//                 <li>
//                   <XIcon /> Complicated refunds
//                 </li>
//               </ul>
//             </div>
//             <div className="bf-compare-col bf-compare-good">
//               <h3>The BlinqFix Way</h3>
//               <ul>
//                 <li>
//                   <CheckIcon /> Join for Free or Secure a zipcode
//                 </li>
//                 <li>
//                   <CheckIcon /> Accept job assignment first, it&apos;s yours
//                 </li>
//                 <li>
//                   <CheckIcon /> High-intent emergency needs
//                 </li>
//                 <li>
//                   <CheckIcon /> Automated weekly payouts
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </section>

//         {/* CTA */}
//         <section className="bf-cta-final">
//           <div className="bf-cta-content">
//             <h2>Ready to fill your schedule?</h2>
//             <p>Join the network of top-rated pros in South Florida.</p>
//             <a className="bf-pro-btn bf-pro-btn-primary" href="#app-download">
//               Apply Now
//             </a>
//           </div>
//         </section>

//         <footer className="bf-footer">
//           <p>© {new Date().getFullYear()} BlinqFix. Built for the trades.</p>
//         </footer>
//       </main>
//     </>
//   );
// };

// export default ServiceProLandingPage;


import React from "react";

const serviceProStyles = `
:root {
  /* Brand Colors */
  --bf-bg: #020617;
  --bf-bg-secondary: #0f172a;
  --bf-primary: #06b6d4; /* Cyan 500 */
  --bf-primary-glow: #06b6d4;
  --bf-accent: #f97316; /* Orange */
  --bf-gold: #facc15;

  /* Text Colors */
  --bf-text-main: #f8fafc;
  --bf-text-muted: #94a3b8;
  --bf-text-dim: #475569;

  /* Borders & Glass */
  --bf-border: rgba(148, 163, 184, 0.1);
  --bf-glass: rgba(15, 23, 42, 0.6);
  --bf-glass-highlight: rgba(255, 255, 255, 0.03);

  /* Layout */
  --bf-radius: 12px;
  --bf-container: 1120px;
}

/* BASE */

.bf-pro-page {
  background-color: var(--bf-bg);
  color: var(--bf-text-main);
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    sans-serif;
  min-height: 100vh;
  padding: 0 1.5rem;
  overflow-x: hidden;
  position: relative;
  line-height: 1.5;
}

/* Background Ambient Glows */

.bf-bg-glow {
  position: absolute;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.15;
  z-index: 0;
  pointer-events: none;
}

.bf-bg-glow-1 {
  top: -100px;
  left: -100px;
  background: var(--bf-primary);
}

.bf-bg-glow-2 {
  top: 40%;
  right: -200px;
  background: #3b82f6;
}

/* Sections Wrapper */

.bf-pro-hero,
.bf-section,
.bf-cta-final,
.bf-footer {
  max-width: var(--bf-container);
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

/* --- HERO SECTION --- */

.bf-pro-hero {
  padding: 5rem 0 4rem;
  display: grid;
  gap: 3rem;
  align-items: center;
}

@media (min-width: 968px) {
  .bf-pro-hero {
    grid-template-columns: 1.2fr 0.8fr;
    padding: 6rem 0 4.5rem;
  }
}

.bf-pro-hero-content {
  max-width: 34rem;
}

/* Badges */

.bf-pro-badge-wrapper {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
  font-size: 0.85rem;
  font-weight: 500;
}

.bf-pro-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 0.8rem;
  border-radius: 100px;
  background: rgba(6, 182, 212, 0.1);
  color: #22d3ee;
  border: 1px solid rgba(6, 182, 212, 0.2);
}

.bf-pro-badge-text {
  color: var(--bf-text-muted);
}

.bf-pulse {
  width: 8px;
  height: 8px;
  background: #22d3ee;
  border-radius: 50%;
  box-shadow: 0 0 0 0 rgba(34, 211, 238, 0.7);
  animation: pulse-cyan 2s infinite;
}

@keyframes pulse-cyan {
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(34, 211, 238, 0.7);
  }
  70% {
    transform: scale(1);
    box-shadow: 0 0 0 6px rgba(34, 211, 238, 0);
  }
  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(34, 211, 238, 0);
  }
}

/* Hero text */

.bf-hero-title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  line-height: 1.1;
  font-weight: 800;
  letter-spacing: -0.03em;
  margin-bottom: 1.2rem;
}

.text-gradient {
  background: linear-gradient(135deg, #ffffff 0%, #94a3b8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.bf-pro-subhead {
  font-size: 1.125rem;
  color: var(--bf-text-muted);
  max-width: 540px;
  margin-bottom: 2rem;
}

/* Feature List */

.bf-pro-feature-list {
  list-style: none;
  padding: 0;
  margin: 2rem 0 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.bf-pro-feature-list li {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--bf-text-main);
  font-weight: 500;
}

/* Icon sizes */

.icon-check {
  width: 20px;
  height: 20px;
  color: var(--bf-primary);
}

.icon-x {
  width: 20px;
  height: 20px;
  color: #ef4444;
}

.icon-bolt {
  width: 24px;
  height: 24px;
  color: #eab308;
}

/* Buttons */

.bf-pro-cta-row {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 0.75rem;
}

.bf-pro-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem 1.6rem;
  border-radius: 99px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s ease;
}

.bf-pro-btn-primary {
  background: var(--bf-text-main);
  color: var(--bf-bg);
}

.bf-pro-btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
}

.bf-pro-btn-secondary {
  background: rgba(255, 255, 255, 0.05);
  color: var(--bf-text-main);
  border: 1px solid var(--bf-border);
}

.bf-pro-btn-secondary:hover {
  background: rgba(255, 255, 255, 0.1);
}

/* =========================
   APP STORE BADGES + QR
   ======================= */

.bf-app-download {
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px dashed var(--bf-border);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.bf-app-label {
  font-size: 0.85rem;
  color: var(--bf-text-dim);
  margin-bottom: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-weight: 600;
}

/* Row: Apple column + Google column */
.bf-badges {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 4rem;
  flex-wrap: nowrap;
}

/* Each store column */
.bf-store-column {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 260px;
}

/* Store badges */
.bf-store-link {
  display: inline-flex;
  height: 48px;
  transition: opacity 0.2s, transform 0.15s;
}

.bf-store-link img {
  height: 100%;
  width: auto;
  display: block;
}

.bf-store-link:hover {
  opacity: 0.85;
  transform: translateY(-1px);
}

/* QR IMAGE */
.bf-qr-image {
  margin-top: 0.5rem;
  width: 90px;
  height: 90px;
  border-radius: 10px;
  background: #ffffff;
  padding: 3px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.35);
  object-fit: contain;
}

/* Placeholder for future Google QR */
.bf-qr-placeholder {
  margin-top: 0.5rem;
  width: 90px;
  height: 90px;
  border-radius: 10px;
  border: 1px dashed var(--bf-border);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  color: var(--bf-text-dim);
  opacity: 0.9;
}

/* Captions */
.bf-qr-caption {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--bf-text-muted);
  margin-top: 0.35rem;
}

.bf-qr-caption-muted {
  color: var(--bf-text-dim);
}

/* --- HERO RIGHT (PROMO + GLASS CARD) --- */

.bf-pro-hero-visual {
  display: flex;
  flex-direction: column;
  gap: 1.65rem;
  align-items: center;
  margin-top: -50%;
}

/* NEW GOLD PROMO CARD */
.bf-promo-card {
  width: 100%;
  max-width: 360px;
  border-radius: 999px;
  padding: 0.75rem 1.1rem;
  background: radial-gradient(circle at top left, #1e293b 0, #020617 70%);
  border: 1px solid rgba(250, 204, 21, 0.6);
  box-shadow: 0 18px 40px rgba(250, 204, 21, 0.25);
  display: flex;
  align-items: center;
  gap: 0.8rem;
}

.bf-promo-dot {
  width: 12px;
  height: 12px;
  border-radius: 999px;
  background: var(--bf-gold);
  box-shadow: 0 0 0 0 rgba(250, 204, 21, 0.75);
  animation: promo-pulse 1.9s infinite;
}

@keyframes promo-pulse {
  0% {
    transform: scale(0.9);
    box-shadow: 0 0 0 0 rgba(250, 204, 21, 0.7);
  }
  70% {
    transform: scale(1);
    box-shadow: 0 0 0 10px rgba(250, 204, 21, 0);
  }
  100% {
    transform: scale(0.9);
    box-shadow: 0 0 0 0 rgba(250, 204, 21, 0);
  }
}

.bf-promo-text-main {
  font-size: 1.4rem;
  font-weight: 600;
  color: #fefce8;
  text-align: center;
}

.bf-promo-text-main span {
  color: var(--bf-gold);
  
}

.bf-promo-sub {
  font-size: 0.75rem;
  color: var(--bf-text-muted);
  text-align: center;
}

/* GLASS CARD */

.bf-glass-card {
  background: linear-gradient(
    145deg,
    rgba(30, 41, 59, 0.7),
    rgba(15, 23, 42, 0.8)
  );
  backdrop-filter: blur(12px);
  border: 1px solid var(--bf-border);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
  position: relative;
  max-width: 360px;
  width: 100%;
}

.bf-rotate-card {
  transform: rotate(-2deg);
  transition: transform 0.3s ease;
}

.bf-rotate-card:hover {
  transform: rotate(0deg);
}

.bf-card-header {
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-bottom: 1.5rem;
}

.icon-box {
  width: 48px;
  height: 48px;
  background: rgba(234, 179, 8, 0.1);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #eab308;
}

.bf-card-header h3 {
  margin: 0;
  font-size: 1.1rem;
}

.bf-card-header p {
  margin: 0;
  color: var(--bf-text-muted);
  font-size: 0.9rem;
}

.bf-card-divider {
  height: 1px;
  background: var(--bf-border);
  margin: 0 -2rem 1.5rem;
}

.bf-checklist {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.bf-checklist li {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--bf-text-muted);
  font-size: 0.95rem;
}

.bf-checklist strong {
  color: var(--bf-text-main);
}

.bf-card-footer {
  margin-top: 1.5rem;
  font-size: 0.8rem;
  color: var(--bf-text-dim);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.bf-status-dot {
  width: 6px;
  height: 6px;
  background: #22c55e;
  border-radius: 50%;
  box-shadow: 0 0 10px #22c55e;
}

/* --- SECTIONS GENERAL --- */

.bf-section {
  margin-bottom: 5rem;
  padding-top: 2rem;
}

.bf-section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.bf-section-header h2 {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.bf-section-header p {
  color: var(--bf-text-muted);
}

/* --- STEPS --- */

.bf-grid-steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.bf-step-card {
  background: var(--bf-bg-secondary);
  border: 1px solid var(--bf-border);
  padding: 2rem;
  border-radius: 16px;
  transition: border-color 0.2s;
}

.bf-step-card:hover {
  border-color: rgba(6, 182, 212, 0.3);
}

.bf-step-num {
  font-size: 3rem;
  font-weight: 800;
  color: rgba(255, 255, 255, 0.15);
  line-height: 1;
  margin-bottom: 0.5rem;
}

.bf-step-card h3 {
  margin-bottom: 0.75rem;
  color: var(--bf-primary);
}

.bf-step-card p {
  font-size: 0.95rem;
  color: var(--bf-text-muted);
}

/* --- TICKETS (EARNINGS) --- */

.bf-grid-tickets {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.bf-ticket-card {
  background: #182030;
  border: 1px solid var(--bf-border);
  border-radius: 16px;
  padding: 1.5rem;
  position: relative;
  display: flex;
  flex-direction: column;
}

.bf-ticket-highlight {
  border-color: rgba(249, 115, 22, 0.4);
  background: radial-gradient(
      circle at top right,
      rgba(249, 115, 22, 0.1),
      transparent 60%
    ),
    #182030;
}

.bf-ticket-badge {
  position: absolute;
  top: -10px;
  right: 20px;
  background: #f97316;
  color: white;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  padding: 0.2rem 0.6rem;
  border-radius: 4px;
}

.bf-ticket-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.bf-tag {
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
}

.bf-tag-hvac {
  background: rgba(34, 211, 238, 0.15);
  color: #22d3ee;
}

.bf-tag-plumbing {
  background: rgba(59, 130, 246, 0.15);
  color: #60a5fa;
}

.bf-tag-elec {
  background: rgba(234, 179, 8, 0.15);
  color: #facc15;
}

.bf-time {
  font-size: 0.8rem;
  color: var(--bf-text-dim);
}

.bf-ticket-card h3 {
  font-size: 1.1rem;
  margin: 0 0 0.5rem;
}

.bf-ticket-desc {
  font-size: 0.9rem;
  color: var(--bf-text-muted);
  margin-bottom: 1.5rem;
  flex-grow: 1;
}

.bf-ticket-price {
  background: rgba(0, 0, 0, 0.3);
  padding: 0.75rem;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.bf-ticket-price span {
  font-size: 0.8rem;
  color: var(--bf-text-muted);
}

.bf-ticket-price strong {
  color: #22c55e;
  font-size: 1.1rem;
}

/* --- COMPARISON --- */

.bf-section-compare {
  margin-bottom: 4rem;
}

.bf-compare-grid {
  display: grid;
  grid-template-columns: 1fr;
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid var(--bf-border);
}

@media (min-width: 768px) {
  .bf-compare-grid {
    grid-template-columns: 1fr 1fr;
  }
}

.bf-compare-col {
  padding: 3rem 2rem;
}

.bf-compare-bad {
  background: rgba(15, 23, 42, 0.6);
}

.bf-compare-good {
  background: rgba(6, 182, 212, 0.05);
  position: relative;
}

.bf-compare-good::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: var(--bf-primary);
}

.bf-compare-col h3 {
  margin-top: 0;
  margin-bottom: 1.5rem;
  font-size: 1.25rem;
}

.bf-compare-col ul {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.bf-compare-col li {
  display: flex;
  align-items: center;
  gap: 1rem;
  color: var(--bf-text-muted);
}

/* --- FINAL CTA & FOOTER --- */

.bf-cta-final {
  text-align: center;
  padding: 4rem 1rem;
  border-top: 1px solid var(--bf-border);
}

.bf-cta-content h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.bf-cta-content p {
  color: var(--bf-text-muted);
  margin-bottom: 2rem;
}

.bf-footer {
  text-align: center;
  padding: 3rem 0;
  border-top: 1px solid var(--bf-border);
  font-size: 0.9rem;
  color: var(--bf-text-dim);
}

/* -------------------------
   RESPONSIVE SMALL SCREENS
   ------------------------ */

@media (max-width: 640px) {
  .bf-pro-page {
    padding: 0 1rem;
  }

  .bf-hero-title {
    font-size: 2.3rem;
  }

  .bf-section-header {
    margin-bottom: 2.2rem;
  }

  .bf-compare-col {
    padding: 2.3rem 1.6rem;
  }

  .bf-badges {
    flex-wrap: wrap;
    gap: 1.5rem;
  }

  .bf-store-link {
    height: 40px;
  }

  .bf-qr-image,
  .bf-qr-placeholder {
    width: 70px;
    height: 70px;
  }
}
`;

// Reusable Icon Components
const CheckIcon = () => (
  <svg
    className="icon-check"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const XIcon = () => (
  <svg
    className="icon-x"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const BoltIcon = () => (
  <svg className="icon-bolt" viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
);

const ServiceProLandingPage = () => {
  return (
    <>
      <style>{serviceProStyles}</style>

      <main className="bf-pro-page">
        {/* BACKGROUND EFFECTS */}
        <div className="bf-bg-glow bf-bg-glow-1" />
        <div className="bf-bg-glow bf-bg-glow-2" />

        {/* HERO SECTION */}
        <section className="bf-pro-hero">
          <div className="bf-pro-hero-content">
            <div className="bf-pro-badge-wrapper">
              <span className="bf-pro-badge">
                <span className="bf-pulse" />
                Emergency Work Only - Miami Dade & Broward - HVAC • Plumbing • Electrical
              </span>
              <span className="bf-pro-badge-text">
                
              </span>
            </div>

            <h1 className="bf-hero-title">
              More emergency jobs,
              <br />
              <span className="text-gradient">less wasted leads.</span>
            </h1>

            <p className="bf-pro-subhead">
              BlinqFix sends you high intent emergency on demand customers ready
              to book now. Stop fighting over estimates. You accept the jobs,
              you keep the profit. 
            </p>

            <div className="bf-pro-cta-row">
              <a className="bf-pro-btn bf-pro-btn-primary" href="#app-download">
                Get the app to join
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ marginLeft: 8 }}
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
              <a className="bf-pro-btn bf-pro-btn-secondary" href="#how-it-works">
                How it works
              </a>
            </div>

            <ul className="bf-pro-feature-list">
              <li>
                <CheckIcon /> Real emergency tickets, no junk leads.
              </li>
              <li>
                <CheckIcon /> See photos, address &amp; issue upfront.
              </li>
              <li>
                <CheckIcon /> Built for serious trade businesses.
              </li>
            </ul>

            {/* APP STORE BADGES + QR */}
            <div id="app-download" className="bf-app-download">
              <p className="bf-app-label">Run your business from the field:</p>

              <div className="bf-badges">
                {/* APP STORE + QR */}
                <div className="bf-store-column">
                  <a
                    href="https://apps.apple.com/us/app/blinqfix-app/id6747390132"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bf-store-link"
                  >
                    <img
                      src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                      alt="Download on the App Store"
                    />
                  </a>

                  <img
                    src="/blinqfix_app_qr.png"
                    alt="Scan to download BlinqFix on the App Store"
                    className="bf-qr-image"
                  />
                  <span className="bf-qr-caption">
                    Scan with your iPhone camera
                  </span>
                </div>

                {/* GOOGLE PLAY + COMING SOON (QR SLOT READY) */}
                <div className="bf-store-column">
                  <a
                    href="https://play.google.com/store"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bf-store-link"
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/250px-Google_Play_Store_badge_EN.svg.png"
                      alt="Get it on Google Play"
                    />
                  </a>

                  <div className="bf-qr-placeholder">QR coming soon</div>
                  <span className="bf-qr-caption bf-qr-caption-muted">
                    Android app coming soon
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* HERO RIGHT: PROMO + VALUE CARD */}
          <aside className="bf-pro-hero-visual">
            {/* NEW GOLD PROMO */}
            <div className="bf-promo-card">
              <div className="bf-promo-dot" />
              <div>
                <div className="bf-promo-text-main">
                  First <span>50 Service Pros</span>
                </div>
                <div className="bf-promo-sub">
                  Get the <strong>Gold subscription</strong> FREE for{" "}
                  <strong>12 months</strong>.
                </div>
              </div>
            </div>

            {/* Built for Trades card */}
            {/* <div className="bf-glass-card bf-rotate-card">
              <div className="bf-card-header">
                <div className="icon-box">
                  <BoltIcon />
                </div>
                <div>
                  <h3>Built for Trades</h3>
                  <p>Designed for the field, not the office.</p>
                </div>
              </div>
              <div className="bf-card-divider" />
              <ul className="bf-checklist">
                <li>
                  <CheckIcon />{" "}
                  <span>
                    <strong>Zero</strong> upfront lead costs
                  </span>
                </li>
                <li>
                  <CheckIcon />{" "}
                  <span>
                    <strong>Exclusive</strong> zip code targeting
                  </span>
                </li>
                <li>
                  <CheckIcon />{" "}
                  <span>
                    <strong>Instant</strong> payout options
                  </span>
                </li>
              </ul>
              <div className="bf-card-footer">
                <span className="bf-status-dot" /> Live in Miami-Dade
                &amp; Broward
              </div>
            </div> */}
            <div className="bf-glass-card bf-rotate-card">
  <div className="bf-card-header">
    <div className="icon-box">
      <BoltIcon />
    </div>
    <div>
      <h3>Built for On-Demand Jobs</h3>
      <p>Designed for the field, not the office.</p>
    </div>
  </div>

  <div className="bf-card-divider" />

  <ul className="bf-checklist">
    <li>
      <CheckIcon />{" "}
      <span>
        <strong>Zero</strong> upfront lead costs
      </span>
    </li>
    <li>
      <CheckIcon />{" "}
      <span>
        <strong>Free tier</strong> available to start taking jobs
      </span>
    </li>
    <li>
      <CheckIcon />{" "}
      <span>
        <strong>Gold subscription</strong> just <strong>$49/mo</strong> per zip code
      </span>
    </li>
    <li>
      <CheckIcon />{" "}
      <span>
        <strong>Only 7 pros</strong> per zip code per trade
      </span>
    </li>
    <li>
      <CheckIcon />{" "}
      <span>
        <strong>No contracts</strong> — cancel anytime
      </span>
    </li>
    <li>
      <CheckIcon />{" "}
      <span>
        <strong>Subscribers</strong> get notified about new jobs first
      </span>
    </li>
    <li>
      <CheckIcon />{" "}
      <span>
        <strong>Earn 93% of the job</strong>
      </span>
    </li>
  </ul>

  <div className="bf-card-footer">
    <span className="bf-status-dot" /> Live in Miami-Dade &amp; Broward
  </div>
</div>

          </aside>
        </section>

      

        {/* HOW IT WORKS */}
        <section id="how-it-works" className="bf-section">
          <div className="bf-section-header">
            <h2>How BlinqFix works</h2>
            <p>A streamlined workflow designed to get you paid faster.</p>
          </div>

          <div className="bf-grid-steps">
            <div className="bf-step-card">
              <div className="bf-step-num">1</div>
              <h3>Create Profile</h3>
              <p>
                Upload your license, insurance, and logo. Tell us your trade
                and set your coverage zones.
              </p>
            </div>
            <div className="bf-step-card">
              <div className="bf-step-num">2</div>
              <h3>Set Schedule</h3>
              <p>
                Toggle your availability for emergency calls. Nights, weekends,
                or 24/7 — you control the flow.
              </p>
            </div>
            <div className="bf-step-card">
              <div className="bf-step-num">3</div>
              <h3>Accept Jobs</h3>
              <p>
                Review the issue, photos, and price. Accept the ticket
                instantly and head to the site.
              </p>
            </div>
          </div>
        </section>

        {/* LIVE TICKETS PREVIEW */}
        <section className="bf-section">
          <div className="bf-section-header">
            <h2>Real tickets. Real revenue.</h2>
            <p>No bidding wars. Here is what typical emergency tickets look like.</p>
          </div>

          <div className="bf-grid-tickets">
            {/* Ticket 1 */}
            <article className="bf-ticket-card">
              <div className="bf-ticket-header">
                <span className="bf-tag bf-tag-hvac">HVAC</span>
                <span className="bf-time">8:45pm • Miami</span>
              </div>
              <h3>AC System Failure / No Cool</h3>
              <p className="bf-ticket-desc">
                Customer reports unit freezing up. Photos of condenser included.
              </p>
              <div className="bf-ticket-price">
                <span>Est. Payout</span>
                <strong>$275 – $450</strong>
              </div>
            </article>

            {/* Ticket 2 */}
            <article className="bf-ticket-card bf-ticket-highlight">
              <div className="bf-ticket-badge">High Demand</div>
              <div className="bf-ticket-header">
                <span className="bf-tag bf-tag-plumbing">Plumbing</span>
                <span className="bf-time">7:10pm • Ft. Lauderdale</span>
              </div>
              <h3>Burst Pipe / Active Leak</h3>
              <p className="bf-ticket-desc">
                Main water shutoff failed. Flooding in kitchen. Urgent response
                needed.
              </p>
              <div className="bf-ticket-price">
                <span>Est. Payout</span>
                <strong>$350 – $650</strong>
              </div>
            </article>

            {/* Ticket 3 */}
            <article className="bf-ticket-card">
              <div className="bf-ticket-header">
                <span className="bf-tag bf-tag-elec">Electrical</span>
                <span className="bf-time">3:30pm • Hollywood</span>
              </div>
              <h3>Breaker Trips / Burning Smell</h3>
              <p className="bf-ticket-desc">
                Panel is hot to touch. Partial power outage in master bed.
              </p>
              <div className="bf-ticket-price">
                <span>Est. Payout</span>
                <strong>$250 – $400</strong>
              </div>
            </article>
          </div>
        </section>

        {/* COMPARISON */}
        <section className="bf-section bf-section-compare">
          <div className="bf-compare-grid">
            <div className="bf-compare-col bf-compare-bad">
              <h3>Typical Lead Sites</h3>
              <ul>
                <li>
                  <XIcon /> Pay upfront for shared leads
                </li>
                <li>
                  <XIcon /> Compete with 25 other pros
                </li>
                <li>
                  <XIcon /> Tire-kickers &amp; price shoppers
                </li>
                <li>
                  <XIcon /> Complicated refunds
                </li>
              </ul>
            </div>
            <div className="bf-compare-col bf-compare-good">
              <h3>The BlinqFix Way</h3>
              <ul>
                <li>
                  <CheckIcon /> Join for Free or Secure a zipcode
                </li>
                <li>
                  <CheckIcon /> Accept job assignment first, it&apos;s yours
                </li>
                <li>
                  <CheckIcon /> High-intent emergency needs
                </li>
                <li>
                  <CheckIcon /> Automated weekly payouts
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bf-cta-final">
          <div className="bf-cta-content">
            <h2>Ready to fill your schedule?</h2>
            <p>Join the network of top-rated pros in South Florida.</p>
            <a className="bf-pro-btn bf-pro-btn-primary" href="/providers/apply">
              Apply Now
            </a>
          </div>
        </section>

        <footer className="bf-footer">
          <p>© {new Date().getFullYear()} BlinqFix. Built for the trades.</p>
        </footer>
      </main>
    </>
  );
};

export default ServiceProLandingPage;
