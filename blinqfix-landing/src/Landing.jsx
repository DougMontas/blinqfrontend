// import { useNavigate } from "react-router-dom";
// import logo from "./assets/blinqfix_logo.jpeg";
// import blinqfixImage from "./assets/blinqfix_image.png"; // alias renamed for clarity

// export default function Landing() {
//   const nav = useNavigate();

//   return (
//     <section className="hero flex-center flex-col full-vh px-6 text-center">
//       {/* Google-translate bubble */}
//       <div id="google_translate_wrapper">
//         <button className="globe-btn">
//           <svg viewBox="0 0 24 24" aria-hidden="true">
//             <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm7.93 9h-3.18a16.9 16.9 0 00-1.12-5.06A8.013 8.013 0 0119.93 11zm-7.93 8a14.91 14.91 0 01-2.24-5H14.3a14.91 14.91 0 01-2.24 5zm-3.36-.94A16.9 16.9 0 015.25 13H2.07a8.013 8.013 0 014.57 5.06zm-4.57-7.06h3.18a16.9 16.9 0 011.12-5.06A8.013 8.013 0 004.07 11zm7.93-8a14.91 14.91 0 012.24 5H9.7A14.91 14.91 0 0111.93 3zm3.36.94A16.9 16.9 0 0118.75 11h3.18a8.013 8.013 0 00-4.57-5.06z" />
//           </svg>
//         </button>
//         <span style={{ fontSize: "0.6rem", marginInline: "5px" }}>
//           Change <br /> Language
//         </span>
//         <div id="google_translate_element" />
//       </div>
//       {/* Decorative layers */}
//       {/* <div className="logo-bg" style={{ backgroundImage: `url(${logo})` }} /> */}
//       <div className="hero-bg" style={{ zIndex: -3 }} />{" "}
//       {/* push farther back */}
//       <div
//         className="hero-img" /* new layer */
//         style={{
//           backgroundImage: `url(${blinqfixImage})`,
//           backgroundSize: "contain",
//           backgroundRepeat: "no-repeat",
//           backgroundPosition: "right center", // right-side emphasis
//           opacity: 0.22, // faint so text pops
//           position: "absolute",
//           inset: 0,
//           width: '102%',
//           zIndex: 2, // between glow and cube
//           pointerEvents: "none",
//         }}
//       />
//       <div className="cube" />
//       {/* Copy */}
//       <h1 className="hero-title">
//         Instant home or business&nbsp;
//         <span style={{ color: "red", fontStyle: "italic", fontWeight: 400 }}>
//           Emergency
//         </span>{" "}
//         repair.
//       </h1>
//       <h2 className="hero-title" style={{ fontSize: "2.4rem" }}>
//         Fixed prices. Zero hassle.
//       </h2>
//       <p className="hero-sub">Connect with a vetted professional in seconds.</p>
//       <p className="hero-sub">
//         The fastest way to get emergency repairs done in America.
//       </p>
//       {/* CTA buttons */}
//       <div className="btn-row">
//         <button className="btn btn-primary" onClick={() => nav("/customer")}>
//           I need help now
//         </button>
//         <button className="btn btn-outline" onClick={() => nav("/pro")}>
//           Earn as a Service&nbsp;Pro
//         </button>
//       </div>
//       <h6
//         className="hero-title2"
//         style={{ fontStyle: "italic", marginTop: "1.5rem" }}
//       >
//         Service Pros wanted, territories are going fast!
//       </h6>
//       <p
//         className="hero-sub"
//         style={{
//           fontSize: "1rem",
//           fontStyle: "italic",
//           fontWeight: 300,
//           maxWidth: "48rem",
//         }}
//       >
//         BlinqFix turns chaos into clarity for everyone involved. Customers gain
//         a trusted, transparent lifeline. Service pros enjoy a steady stream of
//         high-paying emergency jobs without spending a dime on marketing.
//         Download the BlinqFix app today, complete verification, and experience
//         the smartest way to earn more on your terms—or get that urgent repair
//         done right now.
//       </p>
//       {/* Hero image (replaces problematic <Image> component) */}
//       {/* <img
//         src={blinqfixImage}
//         alt="BlinqFix app mockup"
//         style={{
//           position: "absolute", // ← new
//           left: "2rem", // ← new (distance from left edge)
//           top: "50%", // ← new (vertically centered)
//           transform: "translateY(-50%)", // ← new
//           maxWidth: 360,
//           width: "35%",
//           borderRadius: "1rem",
//           boxShadow: "0 8px 30px rgba(0,0,0,.4)",
//           // zIndex: 3,
//         }}
//       /> */}
//     </section>
//   );
// }

import { useNavigate } from "react-router-dom";
import logo from "./assets/blinqfix_logo.jpeg";
import blinqfixImage from "./assets/blinqfix_image.png";

export default function Landing() {
  const nav = useNavigate();

  return (
    <section className="hero flex-center flex-col full-vh px-6 text-center">
      {/* ── Google-Translate bubble ───────────────────────── */}
      <div id="google_translate_wrapper" className="translate-float">
        <button className="globe-btn">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm7.93 9h-3.18a16.9 16.9 0 00-1.12-5.06A8.013 8.013 0 0119.93 11zm-7.93 8a14.91 14.91 0 01-2.24-5H14.3a14.91 14.91 0 01-2.24 5zm-3.36-.94A16.9 16.9 0 015.25 13H2.07a8.013 8.013 0 014.57 5.06zm-4.57-7.06h3.18a16.9 16.9 0 011.12-5.06A8.013 8.013 0 004.07 11zm7.93-8a14.91 14.91 0 012.24 5H9.7A14.91 14.91 0 0111.93 3zm3.36.94A16.9 16.9 0 0118.75 11h3.18a8.013 8.013 0 00-4.57-5.06z" />
          </svg>
        </button>
        <span style={{ fontSize: "0.6rem", marginInline: "5px" }}>
          Change <br /> Language
        </span>
        <div id="google_translate_element" />
      </div>

      {/* ── Decorative layers ─────────────────────────────── */}
      <div className="logo-bg" style={{ backgroundImage: `url(${logo})` }} />
      <div className="hero-bg" />
      <div
        className="hero-img"
        style={{
          backgroundImage: `url(${blinqfixImage})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right center",
          opacity: 0.11,
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          zIndex: 2,
        }}
      />
      <div className="cube" />

      {/* ── Copy & CTAs ───────────────────────────────────── */}
      <h1 className="hero-title">
        Instant home or business&nbsp;
        <span style={{ color: "red", fontStyle: "italic", fontWeight: 400 }}>
          Emergency
        </span>{" "}
        repair.
      </h1>
      <h2 className="hero-title" style={{ fontSize: "2.4rem" }}>
        Fixed prices. Zero hassle.
      </h2>
      <p className="hero-sub">Connect with a vetted professional in seconds.</p>
      <p className="hero-sub">
        The fastest way to get emergency repairs done in America.
      </p>

      <div className="btn-row">
        <button className="btn btn-primary" onClick={() => nav("/customer")}>
          I need help now
        </button>
        <button className="btn btn-outline" onClick={() => nav("/pro")}>
          Earn as a Service&nbsp;Pro
        </button>
      </div>

      <h6 className="hero-title2" style={{ fontStyle: "italic", marginTop: "1.5rem" }}>
        Service Pros wanted—territories are going fast!
      </h6>

      <p
        className="hero-sub"
        style={{
          fontSize: "1rem",
          fontStyle: "italic",
          fontWeight: 300,
          maxWidth: "48rem",
        }}
      >
        BlinqFix turns chaos into clarity for everyone involved. Customers gain
        a trusted, transparent lifeline. Service pros enjoy a steady stream of
        high-paying emergency jobs without spending a dime on marketing.
        Download the BlinqFix app today, complete verification, and experience
        the smartest way to earn more on your terms—or get that urgent repair
        done right now.
      </p>
    </section>
  );
}

