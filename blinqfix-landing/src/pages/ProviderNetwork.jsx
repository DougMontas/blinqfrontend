// // src/pages/ProviderNetwork.jsx
// import { useNavigate } from "react-router-dom";

// export default function ProviderNetwork() {
//   const nav = useNavigate();

//   /* quick inline-style map */
//   const s = {
//     hero: {
//       minHeight: "60vh",
//       display: "flex",
//       flexDirection: "column",
//       alignItems: "center",
//       justifyContent: "center",
//       padding: "0 1.5rem",
//       textAlign: "center",
//       background:
//         "radial-gradient(circle at 40% 50%, rgba(47,255,216,.35) 0%, rgba(119,75,255,.25) 60%, #0d0d0d 100%)",
//     },
//     heroTitle: {
//       fontSize: "2.8rem",
//       fontWeight: 800,
//       marginBottom: ".5rem",
//       maxWidth: "48rem",
//     },
//     heroSub: {
//       fontSize: "1.125rem",
//       color: "rgba(255,255,255,.7)",
//       maxWidth: "42rem",
//       margin: "0 auto",
//     },
//     btn: (variant) => ({
//       padding: "0.75rem 1.5rem",
//       borderRadius: "8px",
//       fontWeight: 600,
//       marginTop: "1.5rem",
//       cursor: "pointer",
//       border: "none",
//       ...(variant === "primary"
//         ? {
//             background: "#2fffd8",
//             color: "#0d0d0d",
//             boxShadow: "0 8px 20px rgba(47,255,216,.3)",
//           }
//         : {
//             background: "transparent",
//             color: "#fff",
//             border: "1px solid rgba(255,255,255,.25)",
//           }),
//     }),
//     section: {
//       padding: "4rem 1.5rem",
//       maxWidth: "64rem",
//       margin: "0 auto",
//       textAlign: "center",
//     },
//     cardGrid: {
//       display: "grid",
//       gap: "1.5rem",
//       gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
//     },
//     card: {
//       padding: "1.5rem",
//       border: "1px solid rgba(255,255,255,.1)",
//       borderRadius: "1rem",
//       background: "rgba(255,255,255,.05)",
//       backdropFilter: "blur(6px)",
//     },
//     earningsTable: {
//       width: "100%",
//       borderCollapse: "collapse",
//       marginTop: "1.5rem",
//     },
//     th: {
//       border: "1px solid rgba(255,255,255,.1)",
//       padding: ".5rem",
//       background: "rgba(255,255,255,.05)",
//     },
//     td: {
//       border: "1px solid rgba(255,255,255,.1)",
//       padding: ".5rem",
//     },
//   };

//   return (
//     <main style={{ color: "#fff", background: "#0d0d0d" }}>
//       {/* HERO */}
//       <section style={s.hero}>
//         <h1 style={s.heroTitle}>
//           BlinqFix Pro Network <br/> Earn More On Your Terms
//         </h1>
//         <p style={s.heroSub}>
//           Connect your trade skills to high-paying emergency jobs—fast. You pick
//           the gigs, we deliver the jobs.
//         </p>
//         <button style={s.btn("primary")} onClick={() => nav("/pro")}>
//         Install Blinqfix App
//         </button>
//       </section>

//       {/* UNIVERSAL BENEFITS */}
//       <section style={s.section}>
//         <h2 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "2rem" }}>
//           Universal Benefits for Every Trade
//         </h2>
//         <div style={s.cardGrid}>
//           {[
//             [
//               "Zero Marketing Spend",
//               "We ping you with job invites—no ads, no cold calls. You take the job.",
//             ],
//             ["Fast, Guaranteed Payouts", "93 % of invoices paid within 48 hrs."],
//             ["Flexible Schedule", "Toggle availability log on/off anytime."],
//             ["Transparent Earnings", "See net revenue before accepting."],
//             ["24/7 Pro Support", "Contractor hotline solves on-site issues."],
//           ].map(([title, body]) => (
//             <article key={title} style={s.card}>
//               <h3
//                 style={{
//                   marginBottom: ".5rem",
//                   color: "#2fffd8",
//                   fontSize: "1.125rem",
//                   fontWeight: 700,
//                 }}
//               >
//                 {title}
//               </h3>
//               <p style={{ fontSize: ".95rem", color: "rgba(255,255,255,.8)" }}>
//                 {body}
//               </p>
//             </article>
//           ))}
//         </div>
//       </section>

//       {/* EARNINGS TABLE */}
//       <section style={s.section}>
//         <h2 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "2rem" }}>
//           Provider Earnings Snapshot
//         </h2>

//         <table style={s.earningsTable}>
//           <thead>
//             <tr>
//               {["Trade", "Avg Emergency Payout", "Your Net (93 %)"].map((h) => (
//                 <th key={h} style={s.th}>
//                   {h}
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {[
//               ["Plumber", "$375", "$348.75"],
//               ["HVAC Tech", "$540", "$502.20"],
//               ["Roofer", "$650", "$604.50"],
//               ["Electrician", "$320", "$297.60"],
//               ["Locksmith", "$140", "$130.20"],
//               ["Cleaner", "$420", "$390.60"],
//               ["Handyman", "$165", "$153.45"],
//               ["Labor Crew*", "$220", "$204.60"],
//             ].map((row) => (
//               <tr key={row[0]}>
//                 {row.map((cell) => (
//                   <td key={cell} style={s.td}>
//                     {cell}
//                   </td>
//                 ))}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         <p
//           style={{
//             fontSize: ".9rem",
//             color: "rgba(255,255,255,.7)",
//             marginTop: ".5rem",
//           }}
//         >
//           *Rate shown per worker. Price varies with location and peak times. 
//         </p>
//       </section>

//       {/* FINAL CTA */}
//       <section style={{ ...s.section, textAlign: "center" }}>
//         <h2 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "1rem" }}>
//           Start Earning in 5 Minutes
//         </h2>
//         <p style={s.heroSub}>
//           Download the BlinqFix Provider App, complete verification, <br/> and watch
//           job alerts roll in.
//         </p>
//         <section
//           className="flex-center flex-col px-6 text-center"
//           style={{ height: "4vh" }}
//         >
//           <div className="btn-row">
//             <button
//               className="btn btn-primary"
//               onClick={() => alert("Launch booking flow")}
//             >
//               Install Blinqfix App
//             </button>
//             <button className="btn btn-outline" onClick={() => nav("/")}>
//               Back
//             </button>
//           </div>
//         </section>
//       </section>

//       <footer
//         style={{
//           borderTop: "1px solid rgba(255,255,255,.1)",
//           padding: "2rem",
//           textAlign: "center",
//           fontSize: ".875rem",
//           color: "rgba(255,255,255,.7)",
//         }}
//       >
//         © {new Date().getFullYear()} BlinqFix
//       </footer>
//     </main>
//   );
// }


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