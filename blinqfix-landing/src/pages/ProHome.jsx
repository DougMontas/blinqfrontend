// import { useNavigate } from 'react-router-dom';
// import logo from '../assets/blinqfix_logo.jpeg';
// import AppBanner from "../sections/AppBanner";


// export default function ProHome() {
//   const nav = useNavigate();

//   return (
//     <main>
     
//       {/* HERO */}
      
//       <section
//         className="hero flex-center flex-col full-vh px-6 text-center"
//         style={{ height: '60vh' }}
//       >
//         <div className="logo-bg"
//             style={{ backgroundImage: `url(${logo})` }}/>
//         <div className="hero-bg" />
//         <div className="cube" />

//         <h1 className="hero-title">Earn more. Waste less time.</h1>
//         <h1 className="hero-title">Get Jobs - Not Leads.</h1>
//         <p className="hero-sub">
//           Fill your downtime with high-pay local jobs—on <strong>your</strong> terms.
//         </p>

//         <div className="btn-row">
//           <button
//             className="btn btn-primary"
//             style={{color: 'black'}}
//             onClick={() => alert('Launch pro signup flow')}
//           >
//             Become a BlinqFix Pro
//           </button>
//           <button className="btn btn-primary !important" style={{background: 'red', color:'white'}} onClick={() => nav('/pros')}>
//             Tell Me More
//           </button>
//           <button className="btn btn-outline" onClick={() => nav('/')}>
//             Back
//           </button>
//         </div>
//       </section>

//       {/* BENEFITS */}
//       <section className="container px-6 py-16">
//         <h2 className="section-title">Why Pros choose BlinqFix</h2>
//         <div className="card-grid">
//           <article className="card benefit-card">
//             <h3>Instant payouts</h3>
//             <p>Funds hit your bank within 24 hours—no invoices.</p>
//           </article>
//           <article className="card benefit-card">
//             <h3>No monthly fees option available</h3>
//             <p>Only a small success fee after you complete a job.</p>
//           </article>
//           <article className="card benefit-card">
//             <h3>Flexible schedule</h3>
//             <p>Toggle availability on/off anytime in the app.</p>
//           </article>
//         </div>
//       </section>

//       {/* TESTIMONIALS */}
//       <section className="container px-6 py-16">
//         <h2 className="section-title">Customers love BlinqFix</h2>
//         <div className="card-grid">
//           <blockquote className="card">
//             “It's been a pleasure getting jobs. real jobs!! I am now making real money.” — <i>Carlos J.</i>
//           </blockquote>
//           <blockquote className="card">
//             “They are changing the emergency serivce calls. Easy to use app. I only get the job invite once the job is paid for.” — <i>Anthony U.</i>
//           </blockquote>
//           <blockquote className="card">
//             “It's the uber of the trade world. No need to chase leads, no need to do an estimate, payment is always on time. I am now looking to sign up for another zipcode.” — <i>Jerome T.</i>
//           </blockquote>
//         </div>
//           <AppBanner />
//       </section>

//       <footer className="footer">© {new Date().getFullYear()} BlinqFix</footer>
//     </main>
//   );
// }



import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  DollarSign,
  BadgePercent,
  CalendarClock,
  Star,
  Download,
  ArrowRight,
  Wrench, // Changed from Tool to Wrench
  TrendingUp,
  CheckCircle
} from "lucide-react";
import AppBanner from "../sections/AppBanner";

// Placeholder data
const testimonials = [
  { text: "It's been a pleasure getting real, paid jobs instead of just leads. My income has doubled.", author: "Carlos J., Electrician" },
  { text: "They are changing the emergency service game. The app is easy, and I only get jobs that are already paid for. No more chasing payments.", author: "Anthony U., HVAC Specialist" },
  { text: "This is the Uber of the trades. No chasing leads, no estimates, and payment is always on time. I'm already signing up for another zipcode.", author: "Jerome T., Plumber" },
];

// AppBanner now accepts 'styles' as a prop
// const AppBanner = ({ styles }) => (
//   <div style={styles.appBanner}>
//     <div style={styles.appBannerContent}>
//       <h3 style={styles.appBannerTitle}>Take control of your work with the BlinqFix Pro App.</h3>
//       <p style={styles.appBannerText}>Accept jobs, manage your schedule, and get paid—all in one place.</p>
//       <button style={styles.appBannerButton}>
//         <Download size={20} />
//         <span>Download the App</span>
//       </button>
//     </div>
//     {/* Placeholder for an app image */}
//     <div style={styles.appBannerImage}>
//        <Wrench size={80} color="#22c55e" /> {/* Changed icon to Wrench */}
//     </div>
//   </div>
// );


export default function ProHome() {
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
      justifyContent: "center"
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
      marginBottom: '75px'
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
        marginBottom: "64px"
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
        background: 'linear-gradient(45deg, #161b22, #1a222e)',
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
    `
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
          Earn More. Waste Less Time.
        </motion.h1>
        <motion.h1 
          style={{ ...styles.heroTitle, color: '#22c55e' }}
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
            style={{ fontStyle: "italic", marginTop: "1.5rem", textAlign: "center", size: '100px' }}
          >
            Service Pros wanted, territories are going fast!
          </h6>
          <h3 style={styles.proTitle}>
            Service Pros: Stop Paying for Leads. Start Earning with real jobs.
          </h3>
          <p style={styles.proDescription}>
            BlinqFix sends high-paying emergency jobs directly to you, with no
            marketing costs or lead fees. Complete your verification and start
            claiming exclusive jobs in your territory today.
          </p>
        </motion.div>



        <motion.div 
          style={styles.buttonRow}
          className="buttonRow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <button style={styles.primaryButton} onClick={() => alert('Launch pro signup flow')}>
             <CheckCircle size={20}/>
             Become a BlinqFix Pro
          </button>
          <button style={styles.secondaryButton} onClick={() => navigate('/pros')}> {/* Changed nav to navigate */}
            <TrendingUp size={20}/>
            Tell Me More
          </button>
          <button style={styles.outlineButton} onClick={() => navigate('/')}> {/* Changed nav to navigate */}
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
              <div style={styles.benefitIcon}><DollarSign size={24}/></div>
              <h3 style={styles.benefitTitle}>Instant Payouts</h3>
              <p style={styles.benefitText}>Funds hit your bank within 24 hours of job completion—no more chasing invoices.</p>
            </motion.article>
            <motion.article 
              style={styles.benefitCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <div style={styles.benefitIcon}><BadgePercent size={24}/></div>
              <h3 style={styles.benefitTitle}>No Monthly Fees Available</h3>
              <p style={styles.benefitText}>Get started for free. Pay only a small success fee after you complete and get paid for a job.</p>
            </motion.article>
            <motion.article 
              style={styles.benefitCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <div style={styles.benefitIcon}><CalendarClock size={24}/></div>
              <h3 style={styles.benefitTitle}>Flexible Schedule</h3>
              <p style={styles.benefitText}>You are in complete control. Toggle your availability on or off anytime in the app.</p>
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
                        {[...Array(5)].map((_, j) => <Star key={j} fill="currentColor" size={16}/>)}
                    </div>
                    <p style={styles.testimonialText}>"{testimonial.text}"</p>
                    <cite style={styles.testimonialAuthor}>— {testimonial.author}</cite>
                </motion.blockquote>
            ))}
        </div>
        <AppBanner styles={styles} /> {/* Passed styles prop */}
      </section>

      <footer style={styles.footer}>© {new Date().getFullYear()} BlinqFix Inc. All rights reserved.</footer>
      <style>{styles.responsiveStyles}</style>
    </main>
  );
}
