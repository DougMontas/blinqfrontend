// import { useNavigate } from "react-router-dom";
// import AppBanner from "../sections/AppBanner";
// import logo from "../assets/blinqfix_logo.jpeg";
// import Customers from "./Customers"
// import SuccessRedirect from "./onboarding-success";

// export default function CustomerHome() {
//   const nav = useNavigate();

//   return (
//     <main>
//       {/* HERO */}
//       <section
//         className="hero flex-center flex-col full-vh px-6 text-center"
//         style={{ height: "60vh" }}
//       >
//         <div className="logo-bg" style={{ backgroundImage: `url(${logo})` }} />
//         <div className="hero-bg" />
//         <div className="cube" />

//         <h1 className="hero-title">Need it done right now?</h1>
//         <p className="hero-sub">
//           Book a plumber, electrician or handyman in{" "}
//           <strong>&nbsp;seconds</strong>.
//         </p>
//         <div className="btn-row">
//           <button
//             className="btn btn-primary"
//             onClick={() => alert("Launch booking flow")}
//           >
//             Get a Service Pro
//           </button>
//           <button className="btn btn-outline" onClick={() => nav("/")}>
//             Back
//           </button>
        
//         </div>
//       </section>

//       {/* HOW IT WORKS */}
//       <section className="container px-6 py-16">
//         <h2 className="section-title">How BlinqFix Works</h2>
//         <div className="step-grid">
//           {[
//             "Describe your emergency",
//             "Receive a fixed-price quote",
//             "Track your pro en-route",
//           ].map((txt, i) => (
//             <div className="step" key={i}>
//               <div className="step-circle">{i + 1}</div>
//               <p>{txt}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* TESTIMONIALS */}
//       <section className="container px-6 py-16">
//         <h2 className="section-title">Customers love BlinqFix</h2>
//         <div className="card-grid">
//           <blockquote className="card">
//             “My AC died on a Sunday—tech arrived in 25 min.” — <i>Sophia M.</i>
//           </blockquote>
//           <blockquote className="card">
//             “Fixed-price quote saved us from surprise fees.” — <i>Marco R.</i>
//           </blockquote>
//           <blockquote className="card">
//             “I am a property manager. I am now worry free with all my emergency
//             calls” — <i>Brian T.</i>
//           </blockquote>
//         </div>
//         <h2
//           className="section-title"
//           style={{ marginTop: "1rem", fontStyle: "italic" }}
//         >
//           All service professionals are licensed and insured
//         </h2>
//         <AppBanner />
//       </section>

//       <Customers />

//       <footer className="footer">© {new Date().getFullYear()} BlinqFix</footer>
//     </main>
//   );
// }
import React, { useState } from "react";
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
  ArrowRight
} from "lucide-react";
import AppBanner from "../sections/AppBanner"

// Placeholder data
const testimonials = [
  { text: "My AC died on a Sunday—a licensed tech arrived in 25 minutes flat. Lifesavers!", author: "Sophia M., Homeowner" },
  { text: "The fixed-price quote was a game-changer. No surprise fees, just fast, professional service.", author: "Marco R., Restaurant Owner" },
  { text: "As a property manager, BlinqFix is my go-to for emergency calls. I'm worry-free now.", author: "Brian T., Property Manager" },
];

const trustedByLogos = [
  "https://tailwindui.com/img/logos/158x48/transistor-logo-white.svg",
  "https://tailwindui.com/img/logos/158x48/reform-logo-white.svg",
  "https://tailwindui.com/img/logos/158x48/tuple-logo-white.svg",
  "https://tailwindui.com/img/logos/158x48/savvycal-logo-white.svg",
  "https://tailwindui.com/img/logos/158x48/statamic-logo-white.svg",
];

export default function CustomerHome() {
  const navigate = useNavigate();
  const [hoveredButton, setHoveredButton] = useState(null);

  const styles = {
    main: {
      background: "#0d1117",
      color: "#e6edf3",
      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
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
      backgroundImage: "linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)",
      backgroundSize: "30px 30px",
      opacity: 0.3,
      maskImage: "radial-gradient(ellipse at center, white 0%, transparent 70%)",
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
    appCTA: {
      background: "linear-gradient(45deg, #1f6feb, #58a6ff)",
      borderRadius: "24px",
      padding: "48px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "24px",
      marginTop: "48px",
    },
    ctaTitle: {
      fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
      fontWeight: "800",
      color: "#ffffff",
    },
    appButtons: {
      display: "flex",
      gap: "16px",
      flexWrap: "wrap",
      justifyContent: "center",
    },
    appButton: {
      display: "inline-flex",
      alignItems: "center",
      gap: "12px",
      background: "rgba(255, 255, 255, 0.9)",
      color: "#0d1117",
      padding: "12px 24px",
      borderRadius: "12px",
      fontSize: "16px",
      fontWeight: "600",
      textDecoration: "none",
      transition: "transform 0.2s ease",
    },
    trustedBy: {
      borderTop: "1px solid #30363d",
      marginTop: "60px",
    },
    trustedByTitle: {
      fontSize: "16px",
      color: "#8b949e",
      textTransform: "uppercase",
      letterSpacing: "1.5px",
      marginBottom: "32px",
    },
    logoGrid: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center",
      gap: "48px",
      opacity: 0.7,
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
      padding: '4rem 1.5rem',
      maxWidth: '64rem',
      margin: '0 auto',
      textAlign: 'center',
    },
    cardGridb: {
      display: 'grid',
      gap: '1.5rem',
      gridTemplateColumns: 'repeat(auto-fit,minmax(250px,1fr))',
      marginTop: '2rem',
    },
    cardb: {
      padding: '1.5rem',
      border: '1px solid rgba(255,255,255,.1)',
      borderRadius: '1rem',
      background: 'rgba(255,255,255,.05)',
      backdropFilter: 'blur(6px)',
    },
    titleb: { fontSize: '2rem', fontWeight: 700, marginBottom: '2rem' },

    responsive: `
      @media (max-width: 768px) {
        .button-row {
          flex-direction: column;
          width: 100%;
          max-width: 320px;
        }
      }
    `
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
    }
  };

  return (
    <main style={styles.main}>
      <div style={styles.logoBackground}></div>
      <style>{styles.responsive}</style>

      {/* HERO SECTION */}
      <section style={styles.hero}>
        <div style={styles.heroGrid}></div>
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
          Book a vetted plumber, electrician, or handyman in <strong style={styles.strong}>seconds</strong>. The fastest, most reliable emergency repairs.
        </motion.p>
        <motion.div
          className="button-row"
          style={styles.buttonRow}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <button 
            style={{...styles.primaryButton, ...(hoveredButton === 'primary' && buttonHover.primary)}}
            onClick={() => navigate("/CustomerDashboard")}
            onMouseEnter={() => setHoveredButton('primary')}
            onMouseLeave={() => setHoveredButton(null)}
          >
            <Zap size={20} /> Get a Service Pro
          </button>
          <button 
            style={{...styles.outlineButton, ...(hoveredButton === 'outline' && buttonHover.outline)}}
            onClick={() => navigate("/")}
            onMouseEnter={() => setHoveredButton('outline')}
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
              <div style={styles.stepCircle}><step.icon size={28} /></div>
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
              <div style={{ display: 'flex', gap: '4px', marginBottom: '12px' }}>
                {[...Array(5)].map((_, i) => <Star key={i} size={16} color="#fdd835" fill="#fdd835" />)}
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
            ['Instant Fixed-Price Quotes', 'No surprise add-ons or hourly upsells.'],
            ['Vetted Local Pros', 'Background-checked & licensed technicians only.'],
            ['Live ETA Tracking', 'Watch your pro drive to your door—Uber-style.'],
            ['24/7 Support', 'Real humans ready if anything goes sideways.'],
            ['Cash-Free Payments', 'Secure card on file—pay only when work is done.'],
          ].map(([h, p]) => (
            <article key={h} style={styles.cardb}>
              <h3 style={{ marginBottom: '.5rem', color: '#2fffd8' }}>{h}</h3>
              <p style={{ fontSize: '.95rem', color: 'rgba(255,255,255,.8)' }}>
                {p}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* APP CTA */}
      <AppBanner />
      {/* <section style={styles.section}>
        <div style={styles.appCTA}>
          <h2 style={styles.ctaTitle}>Get the BlinqFix App</h2>
          <p style={styles.heroSubtitle}>The fastest way to manage emergencies is right from your pocket.</p>
          <div style={styles.appButtons}>
            <a href="#" style={styles.appButton}><Download size={20} /> App Store</a>
            <a href="#" style={styles.appButton}><Download size={20} /> Google Play</a>
          </div>
        </div>
      </section> */}

      {/* TRUSTED BY */}
      {/* <section style={{...styles.section, ...styles.trustedBy}}>
        <h3 style={styles.trustedByTitle}>Trusted by businesses across the nation</h3>
        <div style={styles.logoGrid}>
          {trustedByLogos.map((logo, i) => (
            <img key={i} src={logo} alt={`Client logo ${i+1}`} style={{ height: "32px" }} />
          ))}
        </div>
      </section> */}
      
      {/* FOOTER */}
      <footer style={styles.footer}>
        © {new Date().getFullYear()} BlinqFix, Inc. All Rights Reserved.
      </footer>
    </main>
  );
}