import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Zap,
  DollarSign,
  CalendarClock,
  ShieldCheck,
  BarChart2,
  PhoneCall,
  ArrowRight,
  Download
} from "lucide-react";
import AppBanner from "../sections/AppBanner";
import { applyPageSeo } from "../utils/seo";

const benefits = [
  { icon: Zap, title: "Zero Marketing Spend", description: "We send paid jobs directly to you. No ads, no cold calls, no lead fees." },
  { icon: DollarSign, title: "Instant, Guaranteed Payouts", description: "Funds are deposited directly to your account within 48 hours of job completion." },
  { icon: CalendarClock, title: "Total Schedule Flexibility", description: "You are in control. Toggle your availability on or off anytime right from the app." },
  { icon: ShieldCheck, title: "Vetted & Paid Jobs", description: "Every job is verified and fully paid for by the customer before you even see the alert." },
  { icon: BarChart2, title: "Transparent Earnings", description: "See your exact net earnings for every job before you decide to accept it." },
  { icon: PhoneCall, title: "24/7 Pro Support", description: "Our dedicated contractor hotline is always available to help solve on-site issues." },
];

const earnings = [
  { trade: "Plumber", avgPayout: "$375", net: "$348.75" },
  { trade: "HVAC Tech", avgPayout: "$540", net: "$502.20" },
  { trade: "Roofer", avgPayout: "$650", net: "$604.50" },
  { trade: "Electrician", avgPayout: "$320", net: "$297.60" },
  { trade: "Locksmith", avgPayout: "$140", net: "$130.20" },
  { trade: "Cleaner", avgPayout: "$420", net: "$390.60" },
  { trade: "Handyman", avgPayout: "$165", net: "$153.45" },
  { trade: "Labor Crew*", avgPayout: "$220", net: "$204.60" },
];

export default function ProviderNetwork() {
  const navigate = useNavigate();

  React.useEffect(() => {
    return applyPageSeo({
      title: "Provider Network | Join the BlinqFix Pro Network",
      description:
        "Explore the BlinqFix provider network for plumbers, HVAC techs, electricians, roofers, locksmiths, cleaners, and handymen across the U.S.",
      canonical: "https://www.blinqfix.com/pros",
      keywords:
        "provider network, contractor network, service provider platform, locksmith jobs, roofer jobs, hvac contractor jobs",
      og: {
        url: "https://www.blinqfix.com/pros",
        title: "Provider Network | BlinqFix",
        description:
          "Learn how the BlinqFix provider network works for trade professionals across multiple service categories.",
      },
      twitter: {
        title: "BlinqFix Provider Network",
        description:
          "A nationwide provider network for service pros who want transparent job flow and fast payouts.",
      },
      schema: [
        {
          id: "blinqfix-provider-network-schema",
          data: {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "BlinqFix Provider Network",
            url: "https://www.blinqfix.com/pros",
            description:
              "Overview of the BlinqFix provider network for service professionals.",
            mainEntity: {
              "@type": "Service",
              name: "BlinqFix Provider Network",
              serviceType: [
                "Plumbing",
                "Electrical",
                "HVAC",
                "Roofing",
                "Locksmith",
                "Cleaning",
                "Handyman",
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
      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
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
      minHeight: "70vh",
      overflow: "hidden",
      background: "radial-gradient(ellipse at top, #161b22, #0d1117)",
    },
    heroGrid: {
      position: "absolute",
      inset: 0,
      backgroundImage: "linear-gradient(rgba(34,197,94,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(34,197,94,0.07) 1px, transparent 1px)",
      backgroundSize: "40px 40px",
      opacity: 0.3,
      maskImage: "radial-gradient(ellipse at center, white 0%, transparent 70%)",
    },
    heroGlow: {
      position: "absolute",
      inset: "-12% -12% auto",
      height: "84%",
      background:
        "radial-gradient(circle at 16% 20%, rgba(34,197,94,0.26), transparent 32%), radial-gradient(circle at 82% 18%, rgba(52,211,153,0.18), transparent 26%), radial-gradient(circle at 58% 88%, rgba(14,165,233,0.15), transparent 34%)",
      filter: "blur(22px)",
      opacity: 0.95,
      pointerEvents: "none",
    },
    heroNetwork: {
      position: "absolute",
      inset: 0,
      backgroundImage:
        "radial-gradient(circle at 12% 24%, rgba(255,255,255,0.34) 0 2px, transparent 3px), radial-gradient(circle at 26% 60%, rgba(34,197,94,0.58) 0 2.5px, transparent 3.5px), radial-gradient(circle at 47% 33%, rgba(52,211,153,0.42) 0 2px, transparent 3px), radial-gradient(circle at 68% 22%, rgba(255,255,255,0.28) 0 2px, transparent 3px), radial-gradient(circle at 84% 54%, rgba(14,165,233,0.44) 0 2.5px, transparent 3.5px), linear-gradient(121deg, transparent 18%, rgba(34,197,94,0.17) 18.4%, rgba(34,197,94,0.17) 18.9%, transparent 19.2%), linear-gradient(146deg, transparent 45%, rgba(52,211,153,0.12) 45.4%, rgba(52,211,153,0.12) 45.9%, transparent 46.2%), linear-gradient(96deg, transparent 66%, rgba(255,255,255,0.09) 66.3%, rgba(255,255,255,0.09) 66.6%, transparent 66.9%)",
      opacity: 0.9,
      maskImage: "radial-gradient(circle at center, white 0%, rgba(255,255,255,0.9) 60%, transparent 88%)",
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
    strong: {
      color: "#22c55e",
      fontWeight: "700",
    },
    heroSubtitle: {
      fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
      color: "#8b949e",
      marginBottom: "32px",
      maxWidth: "700px",
      position: "relative",
      zIndex: 1,
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
      position: "relative",
      zIndex: 1,
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
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "24px",
    },
    benefitCard: {
      background: "#161b22",
      border: "1px solid #30363d",
      borderRadius: "16px",
      padding: "24px",
      textAlign: "left",
      display: "flex",
      gap: "16px",
      alignItems: "flex-start",
    },
    benefitIcon: {
      flexShrink: 0,
      width: "48px",
      height: "48px",
      borderRadius: "12px",
      background: "rgba(34, 197, 94, 0.1)",
      color: "#22c55e",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    benefitTitle: {
      fontSize: "18px",
      fontWeight: "600",
      color: "#ffffff",
      marginBottom: "8px",
    },
    benefitDescription: {
      fontSize: "16px",
      color: "#8b949e",
      lineHeight: 1.6,
    },
    tableContainer: {
      overflowX: "auto",
      background: "#161b22",
      border: "1px solid #30363d",
      borderRadius: "16px",
      padding: "12px",
    },
    earningsTable: {
      width: "100%",
      borderCollapse: "collapse",
      minWidth: "600px",
    },
    th: {
      padding: "16px",
      textAlign: "center",
      fontSize: "14px",
      color: "#8b949e",
      textTransform: "uppercase",
      letterSpacing: "0.05em",
      borderBottom: "1px solid #30363d",
    },
    td: {
      padding: "16px",
      textAlign: "center",
      fontSize: "16px",
      color: "#c9d1d9",
      borderBottom: "1px solid #21262d",
    },
    tr: {
      transition: "background-color 0.2s ease",
    },
    tableNote: {
      textAlign: "center",
      marginTop: "16px",
      fontSize: "14px",
      color: "#8b949e",
    },
    finalCtaSection: {
      background: "radial-gradient(ellipse at bottom, #161b22, #0d1117)",
      borderTop: "1px solid #30363d",
    },
    finalCtaTitle: {
      fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
      fontWeight: "800",
      color: "#ffffff",
      marginBottom: "16px",
      textAlign: "center"
    },
    footer: {
      borderTop: "1px solid #30363d",
      padding: "32px 24px",
      textAlign: "center",
      fontSize: "14px",
      color: "#8b949e",
    },
    responsiveStyles: `
      .benefit-grid-item:hover {
        transform: translateY(-5px);
        transition: transform 0.3s ease;
      }
      tr:last-child td {
        border-bottom: none;
      }
      tr:hover {
        background-color: #21262d;
      }
      @media (max-width: 768px) {
        .benefit-grid {
          grid-template-columns: 1fr;
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
          BlinqFix Pro Network: <br/> 
          <span style={styles.strong}>Get Jobs, Not Leads.</span>
        </motion.h1>
        <motion.p 
          style={styles.heroSubtitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Stop wasting time and money. We connect your trade skills to high-paying, verified emergency jobs—fast. You pick the gigs, we deliver the work.
        </motion.p>
        <motion.button 
          style={styles.primaryButton} 
          onClick={() => navigate("/pro")}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Download size={20} />
          Join the Network
        </motion.button>
      </section>

      {/* UNIVERSAL BENEFITS */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Universal Benefits for Every Trade</h2>
        <div style={styles.benefitGrid} className="benefit-grid">
          {benefits.map((benefit, i) => (
            <motion.article 
              key={benefit.title} 
              style={styles.benefitCard}
              className="benefit-grid-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <div style={styles.benefitIcon}><benefit.icon size={24}/></div>
              <div>
                <h3 style={styles.benefitTitle}>{benefit.title}</h3>
                <p style={styles.benefitDescription}>{benefit.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* EARNINGS TABLE */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Provider Earnings Snapshot</h2>
        <div style={styles.tableContainer}>
          <table style={styles.earningsTable}>
            <thead>
              <tr style={styles.tr}>
                <th style={styles.th}>Trade</th>
                <th style={styles.th}>Avg. Emergency Payout</th>
                <th style={styles.th}>Your Net Take-Home (93%)</th>
              </tr>
            </thead>
            <tbody>
              {earnings.map((row) => (
                <tr key={row.trade} style={styles.tr}>
                  <td style={{ ...styles.td, color: "#fff", fontWeight: "600" }}>{row.trade}</td>
                  <td style={styles.td}>{row.avgPayout}</td>
                  <td style={{ ...styles.td, color: "#22c55e", fontWeight: "700" }}>{row.net}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={styles.tableNote}>
          *Rate shown per worker. Price varies with location and peak times. Net is after standard 7% platform fee.
        </p>
      </section>

      {/* FINAL CTA */}
      <h2 style={styles.finalCtaTitle}>
          Ready to Start Earning?
        </h2>
      <AppBanner />
      {/* <section style={{...styles.section, ...styles.finalCtaSection}}>
        <h2 style={styles.finalCtaTitle}>
          Ready to Start Earning?
        </h2>
        <p style={styles.heroSubtitle}>
          Download the BlinqFix Pro App, complete your secure verification in minutes, and get your first paid job alert today.
        </p>
        <button style={styles.primaryButton} onClick={() => navigate("/pro")}>
          <Download size={20} />
          Get the App & Sign Up
        </button>
      </section> */}

      <footer style={styles.footer}>
        © {new Date().getFullYear()} BlinqFix Inc. All Rights Reserved.
      </footer>
      <style>{styles.responsiveStyles}</style>
    </main>
  );
}
