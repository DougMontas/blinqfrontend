// CustomerHome.jsx (updated)
// Goal: When user clicks “Get a Service Pro”, smoothly scroll to the AppBanner section.

import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Zap,
  Shield,
  MapPin,
  FileText,
  MessageSquare,
  Star,
  Download,
  ArrowRight,
} from "lucide-react";
import AppBanner from "../sections/AppBanner";
import { applyPageSeo } from "../utils/seo";

// Placeholder data
const testimonials = [
  {
    text: "My AC died on a Sunday—a licensed tech arrived in 25 minutes flat. Lifesavers!",
    author: "Sophia M., Homeowner",
  },
  {
    text: "The fixed-price quote was a game-changer. No surprise fees, just fast, professional service.",
    author: "Marco R., Restaurant Owner",
  },
  {
    text: "As a property manager, BlinqFix is my go-to for emergency calls. I'm worry-free now.",
    author: "Brian T., Property Manager",
  },
];

export default function CustomerHome() {
  const navigate = useNavigate();
  const [hoveredButton, setHoveredButton] = useState(null);

  // ✅ ADD THIS: ref to AppBanner wrapper
  const appBannerRef = useRef(null);

  // ✅ ADD THIS: smooth scroll handler
  const scrollToAppBanner = () => {
    if (!appBannerRef.current) return;
    appBannerRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  React.useEffect(() => {
    return applyPageSeo({
      title: "Emergency Home Repairs | Book a Vetted Local Pro Fast | BlinqFix",
      description:
        "Book vetted plumbers, electricians, and handymen in minutes with BlinqFix. Get upfront pricing, fast dispatch, and live job tracking.",
      canonical: "https://www.blinqfix.com/customer",
      keywords:
        "emergency home repair, emergency plumber, emergency electrician, handyman near me, upfront home repair pricing",
      og: {
        url: "https://www.blinqfix.com/customer",
        title: "Emergency Home Repairs | Book a Local Pro Fast",
        description:
          "BlinqFix helps homeowners and property managers book emergency repair pros fast with upfront pricing and live tracking.",
      },
      twitter: {
        title: "Emergency Home Repairs | BlinqFix",
        description:
          "Need a plumber, electrician, or handyman fast? Book a vetted local pro with upfront pricing.",
      },
      schema: [
        {
          id: "blinqfix-customer-schema",
          data: {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "BlinqFix Customer Home",
            url: "https://www.blinqfix.com/customer",
            description:
              "Customer landing page for booking emergency and on-demand home repair professionals.",
            mainEntity: {
              "@type": "Service",
              name: "Emergency Home Repair Booking",
              serviceType: ["Plumbing", "Electrical", "Handyman"],
              areaServed: { "@type": "Country", name: "United States" },
              provider: {
                "@type": "Organization",
                name: "BlinqFix",
                url: "https://www.blinqfix.com/",
              },
            },
          },
        },
      ],
    });
  }, []);

  const styles = {
    main: {
      background: "#0d1117",
      color: "#e6edf3",
      fontFamily:
        'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      position: "relative",
    },
    logoBackground: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "1000px",
      height: "1000px",
      backgroundImage: `url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6809c4269_driver_marker.png')`,
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      opacity: 0.025,
      zIndex: 0,
      pointerEvents: "none",
    },
    hero: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      padding: "clamp(120px, 20vh, 180px) 24px",
      minHeight: "80vh",
      overflow: "hidden",
      background: "radial-gradient(ellipse at top, #161b22, #0d1117)",
    },
    heroGrid: {
      position: "absolute",
      inset: 0,
      backgroundImage:
        "linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)",
      backgroundSize: "30px 30px",
      opacity: 0.3,
      maskImage: "radial-gradient(ellipse at center, white 0%, transparent 70%)",
    },
    heroGlow: {
      position: "absolute",
      inset: "-10% -12% auto",
      height: "78%",
      background:
        "radial-gradient(circle at 16% 24%, rgba(88,166,255,0.3), transparent 36%), radial-gradient(circle at 80% 18%, rgba(255,123,114,0.22), transparent 30%), radial-gradient(circle at 50% 100%, rgba(34,211,238,0.14), transparent 34%)",
      filter: "blur(18px)",
      opacity: 0.95,
      pointerEvents: "none",
    },
    heroNetwork: {
      position: "absolute",
      inset: 0,
      backgroundImage:
        "radial-gradient(circle at 12% 24%, rgba(255,255,255,0.48) 0 2px, transparent 3px), radial-gradient(circle at 28% 60%, rgba(88,166,255,0.55) 0 2.5px, transparent 3.5px), radial-gradient(circle at 50% 34%, rgba(255,123,114,0.45) 0 2px, transparent 3px), radial-gradient(circle at 71% 26%, rgba(255,255,255,0.4) 0 2px, transparent 3px), radial-gradient(circle at 84% 56%, rgba(34,211,238,0.48) 0 2.5px, transparent 3.5px), linear-gradient(118deg, transparent 18%, rgba(88,166,255,0.16) 18.4%, rgba(88,166,255,0.16) 18.9%, transparent 19.2%), linear-gradient(148deg, transparent 46%, rgba(255,123,114,0.14) 46.3%, rgba(255,123,114,0.14) 46.8%, transparent 47.1%), linear-gradient(92deg, transparent 67%, rgba(255,255,255,0.12) 67.2%, rgba(255,255,255,0.12) 67.5%, transparent 67.8%)",
      opacity: 0.9,
      maskImage: "radial-gradient(circle at center, white 0%, rgba(255,255,255,0.92) 58%, transparent 88%)",
      pointerEvents: "none",
    },
    heroTitle: {
      fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
      fontWeight: "800",
      color: "#ffffff",
      lineHeight: 1.1,
      marginBottom: "16px",
      position: "relative",
      zIndex: 1,
    },
    heroSubtitle: {
      fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
      color: "#8b949e",
      marginBottom: "32px",
      maxWidth: "600px",
      position: "relative",
      zIndex: 1,
    },
    strong: {
      color: "#58a6ff",
      fontWeight: "700",
    },
    buttonRow: {
      display: "flex",
      gap: "16px",
      position: "relative",
      zIndex: 1,
    },
    primaryButton: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "12px",
      background: "#58a6ff",
      color: "#0d1117",
      border: "none",
      padding: "16px 32px",
      borderRadius: "12px",
      fontSize: "18px",
      fontWeight: "600",
      cursor: "pointer",
      transition: "all 0.3s ease",
      boxShadow: "0 4px 14px 0 rgba(0, 118, 255, 0.39)",
    },
    outlineButton: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "12px",
      background: "transparent",
      color: "#c9d1d9",
      border: "2px solid #30363d",
      padding: "14px 32px",
      borderRadius: "12px",
      fontSize: "18px",
      fontWeight: "600",
      cursor: "pointer",
      transition: "all 0.3s ease",
    },
    section: {
      padding: "clamp(60px, 10vh, 100px) 24px",
      maxWidth: "1200px",
      margin: "0 auto",
      textAlign: "center",
      position: "relative",
      zIndex: 10,
    },
    sectionTitle: {
      fontSize: "clamp(2rem, 5vw, 3rem)",
      fontWeight: "800",
      color: "#ffffff",
      marginBottom: "48px",
    },
    stepGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      gap: "32px",
    },
    stepCard: {
      background: "#161b22",
      border: "1px solid #30363d",
      borderRadius: "16px",
      padding: "32px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "16px",
    },
    stepCircle: {
      width: "60px",
      height: "60px",
      borderRadius: "50%",
      background: "#58a6ff",
      color: "#0d1117",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "24px",
      fontWeight: "700",
      marginBottom: "16px",
    },
    stepText: {
      fontSize: "18px",
      color: "#c9d1d9",
      lineHeight: 1.5,
    },
    cardGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "24px",
    },
    testimonialCard: {
      background: "#161b22",
      border: "1px solid #30363d",
      borderRadius: "16px",
      padding: "24px",
      textAlign: "left",
    },
    testimonialText: {
      fontSize: "16px",
      color: "#c9d1d9",
      lineHeight: 1.6,
      marginBottom: "16px",
      fontStyle: "italic",
    },
    testimonialAuthor: {
      fontSize: "14px",
      color: "#8b949e",
      fontWeight: "600",
    },
    guaranteeBanner: {
      marginTop: "48px",
      background: "rgba(88, 166, 255, 0.1)",
      border: "1px solid rgba(88, 166, 255, 0.3)",
      borderRadius: "16px",
      padding: "24px",
      display: "inline-flex",
      alignItems: "center",
      gap: "16px",
    },
    guaranteeText: {
      fontSize: "18px",
      fontWeight: "600",
      color: "#ffffff",
    },
    footer: {
      textAlign: "center",
      padding: "32px 24px",
      borderTop: "1px solid #30363d",
      fontSize: "14px",
      color: "#8b949e",
      position: "relative",
      zIndex: 10,
    },
    sectionb: {
      padding: "4rem 1.5rem",
      maxWidth: "64rem",
      margin: "0 auto",
      textAlign: "center",
    },
    cardGridb: {
      display: "grid",
      gap: "1.5rem",
      gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
      marginTop: "2rem",
    },
    cardb: {
      padding: "1.5rem",
      border: "1px solid rgba(255,255,255,.1)",
      borderRadius: "1rem",
      background: "rgba(255,255,255,.05)",
      backdropFilter: "blur(6px)",
    },
    titleb: { fontSize: "2rem", fontWeight: 700, marginBottom: "2rem" },

    responsive: `
      @media (max-width: 768px) {
        .button-row {
          flex-direction: column;
          width: 100%;
          max-width: 320px;
        }
      }
    `,
  };

  const buttonHover = {
    primary: {
      background: "#79c0ff",
      boxShadow: "0 6px 20px 0 rgba(0, 118, 255, 0.5)",
      transform: "translateY(-2px)",
    },
    outline: {
      background: "#21262d",
      borderColor: "#8b949e",
    },
  };

  return (
    <main style={styles.main}>
      <div style={styles.logoBackground}></div>
      <style>{styles.responsive}</style>

      {/* HERO SECTION */}
      <section style={styles.hero}>
        <div style={styles.heroGrid}></div>
        <div style={styles.heroGlow}></div>
        <div style={styles.heroNetwork}></div>

        <motion.h1
          style={styles.heroTitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Need it done <span style={{ color: "#ff7b72" }}>right now</span>?
        </motion.h1>

        <motion.p
          style={styles.heroSubtitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Book a vetted plumber, electrician, or handyman in <strong style={styles.strong}>seconds</strong>.
          The fastest, most reliable emergency repairs.
        </motion.p>

        <motion.div
          className="button-row"
          style={styles.buttonRow}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* ✅ UPDATED: scroll to AppBanner instead of navigating */}
          <button
            style={{
              ...styles.primaryButton,
              ...(hoveredButton === "primary" && buttonHover.primary),
            }}
            onClick={scrollToAppBanner}
            onMouseEnter={() => setHoveredButton("primary")}
            onMouseLeave={() => setHoveredButton(null)}
          >
            <Zap size={20} /> Get a Service Pro
          </button>

          <button
            style={{
              ...styles.outlineButton,
              ...(hoveredButton === "outline" && buttonHover.outline),
            }}
            onClick={() => navigate("/")}
            onMouseEnter={() => setHoveredButton("outline")}
            onMouseLeave={() => setHoveredButton(null)}
          >
            Back to Home
          </button>
        </motion.div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>How BlinqFix Works</h2>
        <div style={styles.stepGrid}>
          {[
            { icon: MessageSquare, text: "Describe your emergency in simple terms." },
            { icon: FileText, text: "Receive an instant, fixed-price quote. No surprises." },
            { icon: MapPin, text: "Track your licensed pro right to your door." },
          ].map((step, i) => (
            <motion.div
              key={i}
              style={styles.stepCard}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <div style={styles.stepCircle}>
                <step.icon size={28} />
              </div>
              <p style={styles.stepText}>{step.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS & GUARANTEE */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Customers Love BlinqFix</h2>
        <div style={styles.cardGrid}>
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={i}
              style={styles.testimonialCard}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <div style={{ display: "flex", gap: "4px", marginBottom: "12px" }}>
                {[...Array(5)].map((_, i2) => (
                  <Star key={i2} size={16} color="#fdd835" fill="#fdd835" />
                ))}
              </div>
              <p style={styles.testimonialText}>"{t.text}"</p>
              <cite style={styles.testimonialAuthor}>— {t.author}</cite>
            </motion.blockquote>
          ))}
        </div>

        <motion.div
          style={styles.guaranteeBanner}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <Shield size={24} color="#58a6ff" />
          <h3 style={styles.guaranteeText}>All service professionals are licensed, vetted, and insured.</h3>
        </motion.div>
      </section>

      <section style={styles.sectionb}>
        <h2 style={styles.titleb}>Why Homeowners & Property Managers Choose BlinqFix</h2>
        <div style={styles.cardGridb}>
          {[
            ["Instant Fixed-Price Quotes", "No surprise add-ons or hourly upsells."],
            ["Vetted Local Pros", "Background-checked & licensed technicians only."],
            ["Live ETA Tracking", "Watch your pro drive to your door—Uber-style."],
            ["24/7 Support", "Real humans ready if anything goes sideways."],
            ["Cash-Free Payments", "Secure card on file—pay only when work is done."],
          ].map(([h, p]) => (
            <article key={h} style={styles.cardb}>
              <h3 style={{ marginBottom: ".5rem", color: "#2fffd8" }}>{h}</h3>
              <p style={{ fontSize: ".95rem", color: "rgba(255,255,255,.8)" }}>{p}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ✅ IMPORTANT: wrap AppBanner in a div with the ref */}
      <div ref={appBannerRef}>
        <AppBanner />
      </div>

      {/* FOOTER */}
      <footer style={styles.footer}>© {new Date().getFullYear()} BlinqFix, Inc. All Rights Reserved.</footer>
    </main>
  );
}
