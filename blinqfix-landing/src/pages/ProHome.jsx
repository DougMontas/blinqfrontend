import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  DollarSign,
  BadgePercent,
  CalendarClock,
  Star,
  Download,
  ArrowRight,
  Wrench,
  TrendingUp,
  CheckCircle,
} from "lucide-react";
import AppBanner from "../sections/AppBanner";
import PricingSection from "../sections/PricingSection";
import { applyPageSeo } from "../utils/seo";

// Placeholder data
const testimonials = [
  {
    text: "It's been a pleasure getting real, paid jobs instead of just leads. My income has doubled.",
    author: "Carlos J., Electrician",
  },
  {
    text: "They are changing the emergency service game. The app is easy, and I only get jobs that are already paid for. No more chasing payments.",
    author: "Anthony U., HVAC Specialist",
  },
  {
    text: "This is the Uber of the trades. No chasing leads, no estimates, and payment is always on time. I'm already signing up for another zipcode.",
    author: "Jerome T., Plumber",
  },
];

export default function ProHome() {
  const navigate = useNavigate();

  // ✅ ADD THIS: ref to the AppBanner section
  const appBannerRef = useRef(null);

  // ✅ ADD THIS: scroll handler
  const scrollToAppBanner = () => {
    // In case the element isn’t mounted yet
    if (!appBannerRef.current) return;

    appBannerRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  React.useEffect(() => {
    return applyPageSeo({
      title: "For Service Pros | Get High-Pay Jobs, Not Leads | BlinqFix",
      description:
        "Join BlinqFix to receive high-pay local jobs without the usual lead fees. Control your schedule, see earnings upfront, and get paid fast.",
      canonical: "https://www.blinqfix.com/pro",
      keywords:
        "contractor jobs app, service pro network, plumber jobs, electrician jobs, handyman jobs, paid home service jobs",
      og: {
        url: "https://www.blinqfix.com/pro",
        title: "For Service Pros | Get Jobs, Not Leads",
        description:
          "BlinqFix helps service pros grow with high-pay jobs, upfront earnings visibility, and flexible scheduling.",
      },
      twitter: {
        title: "BlinqFix for Service Pros",
        description:
          "Earn more with real jobs instead of lead fees. See payouts upfront and work on your terms.",
      },
      schema: [
        {
          id: "blinqfix-pro-schema",
          data: {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "BlinqFix for Service Pros",
            url: "https://www.blinqfix.com/pro",
            description:
              "Landing page for service professionals interested in getting jobs through BlinqFix.",
            mainEntity: {
              "@type": "Service",
              name: "BlinqFix Pro Platform",
              serviceType: [
                "Plumbing",
                "Electrical",
                "HVAC",
                "Handyman",
                "Roofing",
                "Locksmith",
              ],
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
      width: "1700px",
      height: "1700px",
      backgroundImage: `url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6809c4269_driver_marker.png')`,
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      opacity: 0.02,
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
      inset: "-12% -10% auto",
      height: "82%",
      background:
        "radial-gradient(circle at 18% 22%, rgba(34,197,94,0.26), transparent 34%), radial-gradient(circle at 78% 18%, rgba(59,130,246,0.2), transparent 28%), radial-gradient(circle at 54% 88%, rgba(16,185,129,0.16), transparent 36%)",
      filter: "blur(20px)",
      opacity: 0.95,
      pointerEvents: "none",
    },
    heroNetwork: {
      position: "absolute",
      inset: 0,
      backgroundImage:
        "radial-gradient(circle at 14% 24%, rgba(255,255,255,0.42) 0 2px, transparent 3px), radial-gradient(circle at 31% 56%, rgba(34,197,94,0.54) 0 2.5px, transparent 3.5px), radial-gradient(circle at 48% 34%, rgba(59,130,246,0.42) 0 2px, transparent 3px), radial-gradient(circle at 70% 22%, rgba(255,255,255,0.32) 0 2px, transparent 3px), radial-gradient(circle at 85% 52%, rgba(16,185,129,0.52) 0 2.5px, transparent 3.5px), linear-gradient(124deg, transparent 18%, rgba(34,197,94,0.16) 18.4%, rgba(34,197,94,0.16) 18.9%, transparent 19.2%), linear-gradient(151deg, transparent 45%, rgba(59,130,246,0.14) 45.4%, rgba(59,130,246,0.14) 45.9%, transparent 46.2%), linear-gradient(95deg, transparent 68%, rgba(255,255,255,0.1) 68.3%, rgba(255,255,255,0.1) 68.6%, transparent 68.9%)",
      opacity: 0.9,
      maskImage: "radial-gradient(circle at center, white 0%, rgba(255,255,255,0.94) 60%, transparent 88%)",
      pointerEvents: "none",
    },
    heroTitle: {
      fontSize: "clamp(2rem, 5vw, 3.8rem)",
      fontWeight: "800",
      color: "#ffffff",
      lineHeight: 1.2,
      marginBottom: "8px",
      position: "relative",
      zIndex: 1,
    },
    heroSubtitle: {
      fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
      color: "#8b949e",
      marginBottom: "32px",
      maxWidth: "700px",
      position: "relative",
      zIndex: 1,
    },
    strong: {
      color: "#22c55e",
      fontWeight: "700",
    },
    buttonRow: {
      display: "flex",
      gap: "16px",
      position: "relative",
      zIndex: 1,
      flexWrap: "wrap",
      justifyContent: "center",
    },
    primaryButton: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "12px",
      background: "#22c55e",
      color: "#0d1117",
      border: "none",
      padding: "16px 32px",
      borderRadius: "12px",
      fontSize: "18px",
      fontWeight: "600",
      cursor: "pointer",
      transition: "all 0.3s ease",
      boxShadow: "0 4px 14px 0 rgba(34, 197, 94, 0.39)",
    },
    secondaryButton: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "12px",
      background: "#ef4444",
      color: "#ffffff",
      border: "none",
      padding: "16px 32px",
      borderRadius: "12px",
      fontSize: "18px",
      fontWeight: "600",
      cursor: "pointer",
      transition: "all 0.3s ease",
      boxShadow: "0 4px 14px 0 rgba(239, 68, 68, 0.39)",
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
    benefitGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      gap: "32px",
    },
    benefitCard: {
      background: "#161b22",
      border: "1px solid #30363d",
      borderRadius: "16px",
      padding: "32px",
      textAlign: "left",
    },
    benefitIcon: {
      width: "50px",
      height: "50px",
      borderRadius: "12px",
      background: "rgba(34, 197, 94, 0.1)",
      color: "#22c55e",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: "24px",
    },
    benefitTitle: {
      fontSize: "20px",
      fontWeight: "700",
      color: "#ffffff",
      marginBottom: "8px",
    },
    benefitText: {
      fontSize: "16px",
      color: "#8b949e",
      lineHeight: 1.6,
    },
    proCallout: {
      background: "rgba(30, 41, 59, 0.5)",
      backdropFilter: "blur(10px)",
      border: "1px solid #334155",
      borderRadius: "20px",
      padding: "12px",
      marginTop: "28px",
      maxWidth: "800px",
      textAlign: "center",
      marginBottom: "75px",
    },

    proTitle: {
      fontSize: "22px",
      fontWeight: "700",
      color: "#ffffff",
      marginBottom: "12px",
    },
    proDescription: {
      fontSize: "16px",
      color: "#94a3b8",
      lineHeight: "1.7",
    },
    testimonialGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      gap: "32px",
      marginBottom: "64px",
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
      fontStyle: "italic",
      lineHeight: 1.6,
      marginBottom: "16px",
    },
    testimonialAuthor: {
      fontSize: "14px",
      fontWeight: "600",
      color: "#8b949e",
    },
    starContainer: {
      display: "flex",
      gap: "4px",
      color: "#facc15",
      marginBottom: "16px",
    },
    appBanner: {
      background: "linear-gradient(45deg, #161b22, #1a222e)",
      border: "1px solid #30363d",
      borderRadius: "24px",
      padding: "clamp(32px, 5vw, 48px)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "32px",
      textAlign: "center",
    },
    appBannerContent: {},
    appBannerTitle: {
      fontSize: "clamp(1.5rem, 3vw, 2rem)",
      fontWeight: "700",
      color: "#ffffff",
      marginBottom: "12px",
    },
    appBannerText: {
      fontSize: "16px",
      color: "#8b949e",
      marginBottom: "24px",
    },
    appBannerButton: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "12px",
      background: "#22c55e",
      color: "#0d1117",
      border: "none",
      padding: "14px 28px",
      borderRadius: "12px",
      fontSize: "16px",
      fontWeight: "600",
      cursor: "pointer",
      transition: "background 0.3s ease",
    },
    appBannerImage: {},
    footer: {
      padding: "40px 24px",
      textAlign: "center",
      color: "#484f58",
      borderTop: "1px solid #30363d",
      marginTop: "60px",
    },
    responsiveStyles: `
        @media (min-width: 768px) {
            .appBanner {
                flex-direction: row;
                text-align: left;
                justify-content: space-between;
            }
        }
        @media (max-width: 480px) {
            .buttonRow {
                flex-direction: column;
                width: 100%;
                max-width: 300px;
            }
        }
    `,
  };

  return (
    <main style={styles.main}>
      <div style={styles.logoBackground}></div>

      {/* HERO */}
      <section style={styles.hero}>
        <div style={styles.heroGrid}></div>
        <div style={styles.heroGlow}></div>
        <div style={styles.heroNetwork}></div>

        <motion.h1
          style={styles.heroTitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Earn More. Waste Less Time.
        </motion.h1>

        <motion.h1
          style={{ ...styles.heroTitle, color: "#22c55e" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Get Jobs—Not Leads.
        </motion.h1>

        <motion.p
          style={styles.heroSubtitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Fill your downtime with high-pay local jobs—on <strong style={styles.strong}>your</strong> terms.
        </motion.p>

        <motion.div
          style={styles.proCallout}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <h6
            className="hero-title2"
            style={{
              fontStyle: "italic",
              marginTop: "1.5rem",
              textAlign: "center",
              size: "100px",
            }}
          >
            Service Pros wanted, territories are going fast!
          </h6>

          <h3 style={styles.proTitle}>Service Pros: Stop Paying for Leads. Start Earning with real jobs.</h3>

          <p style={styles.proDescription}>
            BlinqFix sends high-paying emergency jobs directly to you, with no marketing costs or lead fees.
            Complete your verification and start claiming exclusive jobs in your territory today.
          </p>
        </motion.div>

        <motion.div
          style={styles.buttonRow}
          className="buttonRow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {/* ✅ UPDATED: scroll to AppBanner instead of alert */}
          <button style={styles.primaryButton} onClick={scrollToAppBanner}>
            <CheckCircle size={20} />
            Become a BlinqFix Pro
          </button>

          <button style={styles.secondaryButton} onClick={() => navigate("/pros")}>
            <TrendingUp size={20} />
            Tell Me More
          </button>

          <button style={styles.outlineButton} onClick={() => navigate("/")}>
            Back
          </button>
        </motion.div>
      </section>

      {/* BENEFITS */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Why Top-Rated Pros Choose BlinqFix</h2>
        <div style={styles.benefitGrid}>
          <motion.article
            style={styles.benefitCard}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <div style={styles.benefitIcon}>
              <DollarSign size={24} />
            </div>
            <h3 style={styles.benefitTitle}>Instant Payouts</h3>
            <p style={styles.benefitText}>
              Funds hit your bank within 24 hours of job completion—no more chasing invoices.
            </p>
          </motion.article>

          <motion.article
            style={styles.benefitCard}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <div style={styles.benefitIcon}>
              <BadgePercent size={24} />
            </div>
            <h3 style={styles.benefitTitle}>No Monthly Fees Available</h3>
            <p style={styles.benefitText}>
              Get started for free. Pay only a small success fee after you complete and get paid for a job.
            </p>
          </motion.article>

          <motion.article
            style={styles.benefitCard}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <div style={styles.benefitIcon}>
              <CalendarClock size={24} />
            </div>
            <h3 style={styles.benefitTitle}>Flexible Schedule</h3>
            <p style={styles.benefitText}>
              You are in complete control. Toggle your availability on or off anytime in the app.
            </p>
          </motion.article>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Join a Network of Elite Professionals</h2>

        <div style={styles.testimonialGrid}>
          {testimonials.map((testimonial, i) => (
            <motion.blockquote
              key={i}
              style={styles.testimonialCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <div style={styles.starContainer}>
                {[...Array(5)].map((_, j) => (
                  <Star key={j} fill="currentColor" size={16} />
                ))}
              </div>
              <p style={styles.testimonialText}>"{testimonial.text}"</p>
              <cite style={styles.testimonialAuthor}>— {testimonial.author}</cite>
            </motion.blockquote>
          ))}
        </div>

        {/* ✅ IMPORTANT: wrap AppBanner in a div with the ref */}
        {/* <div ref={appBannerRef}>
          <AppBanner styles={styles} />
        </div> */}
          <PricingSection 
        ctaCustomerHref="/CustomerDashboard"
        ctaProHref="/providers/apply"
        />
      </section>

      <footer style={styles.footer}>© {new Date().getFullYear()} BlinqFix Inc. All rights reserved.</footer>
      <style>{styles.responsiveStyles}</style>
      
    </main>
  );
}
