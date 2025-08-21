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

// import { useNavigate } from "react-router-dom";
// import logo from "./assets/blinqfix_logo.jpeg";
// import blinqfixImage from "./assets/blinqfix_image.png";
// import FooterWeb from "./sections/Footer";

// export default function Landing() {
//   const nav = useNavigate();

//   return (
//     <section className="hero flex-center flex-col full-vh px-6 text-center">
//       {/* ── Google-Translate bubble ───────────────────────── */}
//       <div id="google_translate_wrapper" className="translate-float">
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

//       {/* ── Decorative layers ─────────────────────────────── */}
//       <div className="logo-bg" style={{ backgroundImage: `url(${logo})` }} />
//       <div className="hero-bg" />
//       <div
//         className="hero-img"
//         style={{
//           backgroundImage: `url(${blinqfixImage})`,
//           backgroundSize: "contain",
//           backgroundRepeat: "no-repeat",
//           backgroundPosition: "right center",
//           opacity: 0.11,
//           position: "absolute",
//           inset: 0,
//           pointerEvents: "none",
//           zIndex: 2,
//         }}
//       />
//       <div className="cube" />

//       {/* ── Copy & CTAs ───────────────────────────────────── */}
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

//       <div className="btn-row">
//         <button className="btn btn-primary" onClick={() => nav("/customer")}>
//           I need help now
//         </button>
//         <button className="btn btn-outline" onClick={() => nav("/pro")}>
//           Earn as a Service&nbsp;Pro
//         </button>
//       </div>

//       <h6 className="hero-title2" style={{ fontStyle: "italic", marginTop: "1.5rem" }}>
//         Service Pros wanted—territories are going fast!
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

//       <FooterWeb />
//     </section>
//   );
// }

// import React, { useState, useEffect } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import {
//   Zap,
//   Shield,
//   Clock,
//   Star,
//   ArrowRight,
//   Phone,
//   Wrench,
//   Globe,
//   Twitter,
//   Linkedin,
//   Facebook
// } from "lucide-react";
// import { motion } from "framer-motion";

// /* ============================ STYLES ============================ */
// const styles = {
//   container: {
//     minHeight: "100vh",
//     background: "#0a0f1f",
//     fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
//     color: "#e2e8f0",
//     position: "relative",
//     overflow: "hidden",
//   },
//   gridBackground: {
//     position: "absolute",
//     inset: 0,
//     width: "100%",
//     height: "100%",
//     backgroundImage: "linear-gradient(to right, rgba(30, 41, 59, 0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(30, 41, 59, 0.3) 1px, transparent 1px)",
//     backgroundSize: "50px 50px",
//     animation: "pan-grid 45s linear infinite",
//     zIndex: 0,
//   },
//   glowEffect: {
//     position: "absolute",
//     top: "50%",
//     left: "50%",
//     width: "1200px",
//     height: "1200px",
//     background: "radial-gradient(circle, rgba(251, 191, 36, 0.08) 0%, transparent 60%)",
//     transform: "translate(-50%, -50%)",
//     pointerEvents: "none",
//   },
//   translateWrapper: {
//     position: "fixed",
//     top: "24px",
//     right: "24px",
//     zIndex: 1000,
//     display: "flex",
//     alignItems: "center",
//     gap: "8px",
//     background: "rgba(30, 41, 59, 0.5)",
//     backdropFilter: "blur(10px)",
//     padding: "8px 16px",
//     borderRadius: "20px",
//     border: "1px solid rgba(51, 65, 85, 0.5)",
//   },
//   globeButton: {
//     background: "none",
//     border: "none",
//     color: "#e2e8f0",
//     cursor: "pointer",
//   },
//   translateText: {
//     fontSize: "12px",
//     color: "#94a3b8",
//     fontWeight: "500",
//   },
//   heroSection: {
//     position: "relative",
//     zIndex: 10,
//     padding: "140px 24px 100px",
//     textAlign: "center",
//     maxWidth: "1100px",
//     margin: "0 auto",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//   },
//   badge: {
//     display: "inline-flex",
//     alignItems: "center",
//     gap: "8px",
//     background: "rgba(251, 191, 36, 0.1)",
//     border: "1px solid #fbb_f24",
//     padding: "10px 20px",
//     borderRadius: "30px",
//     marginBottom: "32px",
//   },
//   badgeText: {
//     color: "#fbb_f24",
//     fontSize: "14px",
//     fontWeight: "600",
//   },
//   heroTitle: {
//     fontSize: "clamp(3rem, 6vw, 5.5rem)",
//     fontWeight: "800",
//     color: "#ffffff",
//     lineHeight: "1.1",
//     marginBottom: "24px",
//     textShadow: "0 4px 30px rgba(0,0,0,0.4)",
//   },
//   emergencyText: {
//     color: "#ef4444",
//     fontStyle: "italic",
//     textShadow: "0 2px 20px rgba(239, 68, 68, 0.5)",
//   },
//   subtitle: {
//     fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
//     fontWeight: "500",
//     color: "#94a3b8",
//     marginBottom: "40px",
//     maxWidth: "800px",
//   },
//   buttonGroup: {
//     display: "flex",
//     gap: "24px",
//     justifyContent: "center",
//     flexWrap: "wrap",
//     marginBottom: "48px",
//   },
//   primaryButton: {
//     display: "inline-flex",
//     alignItems: "center",
//     gap: "12px",
//     background: "linear-gradient(135deg, #fbb_f24 0%, #f59e0b 100%)",
//     color: "white",
//     border: "none",
//     padding: "18px 36px",
//     borderRadius: "12px",
//     fontSize: "18px",
//     fontWeight: "700",
//     cursor: "pointer",
//     transition: "all 0.3s ease",
//     boxShadow: "0 8px 30px rgba(251, 191, 36, 0.2), inset 0 1px 1px rgba(255,255,255,0.3)",
//   },
//   primaryButtonHover: {
//     transform: "translateY(-4px)",
//     boxShadow: "0 12px 40px rgba(251, 191, 36, 0.3), inset 0 1px 1px rgba(255,255,255,0.3)",
//   },
//   secondaryButton: {
//     display: "inline-flex",
//     alignItems: "center",
//     gap: "12px",
//     background: "rgba(30, 41, 59, 0.5)",
//     backdropFilter: "blur(10px)",
//     color: "#e2e8f0",
//     border: "2px solid #334155",
//     padding: "16px 36px",
//     borderRadius: "12px",
//     fontSize: "18px",
//     fontWeight: "600",
//     cursor: "pointer",
//     transition: "all 0.3s ease",
//   },
//   secondaryButtonHover: {
//     background: "rgba(51, 65, 85, 0.7)",
//     borderColor: "#475569",
//     transform: "translateY(-2px)",
//   },
//   proCallout: {
//     background: "rgba(30, 41, 59, 0.5)",
//     backdropFilter: "blur(10px)",
//     border: "1px solid #334155",
//     borderRadius: "20px",
//     padding: "32px",
//     marginTop: "48px",
//     maxWidth: "800px",
//     textAlign: "left",
//   },
//   proTitle: {
//     fontSize: "22px",
//     fontWeight: "700",
//     color: "#ffffff",
//     marginBottom: "12px",
//   },
//   proDescription: {
//     fontSize: "16px",
//     color: "#94a3b8",
//     lineHeight: "1.7",
//   },
//   featuresSection: {
//     width: "50%",
//     display: "grid",
//     gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
//     gap: "24px",
//     marginTop: "100px",
//     padding: "0 20px",
//     maxWidth: "1200px",
//   },
//   featureCard: {
//     background: "linear-gradient(180deg, rgba(30, 41, 59, 0.8), rgba(30, 41, 59, 0.5))",
//     backdropFilter: "blur(10px)",
//     border: "1px solid #334155",
//     borderRadius: "16px",
//     padding: "32px 24px",
//     textAlign: "center",
//     transition: "all 0.3s ease",
//   },
//   featureCardHover: {
//     transform: "translateY(-8px)",
//     borderColor: "#475569",
//     background: "linear-gradient(180deg, rgba(51, 65, 85, 0.8), rgba(51, 65, 85, 0.5))",
//   },
//   featureIcon: {
//     width: "60px",
//     height: "60px",
//     borderRadius: "16px",
//     background: "linear-gradient(135deg, #fbb_f24 0%, #f59e0b 100%)",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     margin: "0 auto 20px",
//     boxShadow: "0 8px 24px rgba(251, 191, 36, 0.2)",
//   },
//   featureTitle: {
//     fontSize: "20px",
//     fontWeight: "700",
//     color: "#ffffff",
//     marginBottom: "12px",
//   },
//   featureDescription: {
//     fontSize: "15px",
//     color: "#94a3b8",
//     lineHeight: "1.6",
//   },
//   footer: {
//     position: "relative",
//     zIndex: 10,
//     width: "100%",
//     padding: "60px 24px 40px",
//     marginTop: "120px",
//     background: "rgba(10, 15, 31, 0.8)",
//     backdropFilter: "blur(10px)",
//     borderTop: "1px solid #334155",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     textAlign: "center",
//   },
//   footerLogo: {
//     fontSize: "28px",
//     fontWeight: "800",
//     color: "#fff",
//     marginBottom: "24px",
//   },
//   footerNav: {
//     display: "flex",
//     gap: "32px",
//     marginBottom: "32px",
//   },
//   footerLink: {
//     fontSize: "16px",
//     color: "#94a3b8",
//     textDecoration: "none",
//     transition: "color 0.2s ease",
//   },
//   footerLinkHover: {
//     color: "#fbb_f24",
//   },
//   footerSocials: {
//     display: "flex",
//     gap: "24px",
//     marginBottom: "32px",
//   },
//   socialIcon: {
//     color: "#94a3b8",
//     transition: "all 0.2s ease",
//   },
//   socialIconHover: {
//     color: "#ffffff",
//     transform: "scale(1.1)",
//   },
//   footerCopyright: {
//     fontSize: "14px",
//     color: "#475569",
//   },
//   keyframes: `
//     @keyframes pan-grid {
//       0% { background-position: 0% 0%; }
//       100% { background-position: 50px 50px; }
//     }
//   `,
// };

// /* ============================ COMPONENTS ============================ */
// const FeatureCard = ({ icon: Icon, title, description }) => {
//   const [isHovered, setIsHovered] = useState(false);
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       viewport={{ once: true, amount: 0.5 }}
//       style={{ ...styles.featureCard, ...(isHovered ? styles.featureCardHover : {}),  }}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       <div style={styles.featureIcon}><Icon size={28} color="white" /></div>
//       <h3 style={styles.featureTitle}>{title}</h3>
//       <p style={styles.featureDescription}>{description}</p>
//     </motion.div>
//   );
// };

// const Button = ({ children, variant = "primary", onClick, icon: Icon }) => {
//   const [isHovered, setIsHovered] = useState(false);
//   const baseStyle = variant === "primary" ? styles.primaryButton : styles.secondaryButton;
//   const hoverStyle = variant === "primary" ? styles.primaryButtonHover : styles.secondaryButtonHover;

//   return (
//     <motion.button
//       whileHover={{ scale: 1.05 }}
//       whileTap={{ scale: 0.98 }}
//       style={{ ...baseStyle, ...(isHovered ? hoverStyle : {}) }}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//       onClick={onClick}
//     >
//       {children}
//       {Icon && <Icon size={20} style={{ marginLeft: '8px' }} />}
//     </motion.button>
//   );
// };

// const Footer = () => {
//   const [hoveredLink, setHoveredLink] = useState(null);
//   const [hoveredSocial, setHoveredSocial] = useState(null);
//   const navLinks = [
//     { name: "For Customers", path: "/customer" },
//     { name: "For Service Pros", path: "/pro" },
//     { name: "Privacy Policy", path: "/privacy-policy" },
//     { name: "Terms of Use", path: "/terms" },
//   ];
//   const socialLinks = [
//     { name: "Twitter", icon: Twitter, path: "#" },
//     { name: "Facebook", icon: Facebook, path: "#" },
//     { name: "LinkedIn", icon: Linkedin, path: "#" },
//   ];

//   return (
//     <footer style={styles.footer}>
//       <div style={styles.footerLogo}>BlinqFix</div>
//       <nav style={styles.footerNav}>
//         {navLinks.map(link => (
//           <Link
//             key={link.name}
//             to={link.path}
//             style={{ ...styles.footerLink, ...(hoveredLink === link.name ? styles.footerLinkHover : {}) }}
//             onMouseEnter={() => setHoveredLink(link.name)}
//             onMouseLeave={() => setHoveredLink(null)}
//           >
//             {link.name}
//           </Link>
//         ))}
//       </nav>
//       <div style={styles.footerSocials}>
//         {socialLinks.map(link => (
//           <a
//             key={link.name}
//             href={link.path}
//             target="_blank"
//             rel="noopener noreferrer"
//             onMouseEnter={() => setHoveredSocial(link.name)}
//             onMouseLeave={() => setHoveredSocial(null)}
//           >
//             <link.icon style={{ ...styles.socialIcon, ...(hoveredSocial === link.name ? styles.socialIconHover : {}) }} size={24} />
//           </a>
//         ))}
//       </div>
//       <p style={styles.footerCopyright}>© {new Date().getFullYear()} BlinqFix, Inc. All rights reserved.</p>
//     </footer>
//   );
// };

// /* ============================ MAIN COMPONENT ============================ */
// export default function Home() {
//   const navigate = useNavigate();
//   const features = [
//     { icon: Zap, title: "On-Demand Matching", description: "Our smart system connects you to the nearest vetted pro in under 30 seconds." },
//     { icon: Shield, title: "Vetted & Insured", description: "Every professional is background-checked, licensed, and fully insured for your peace of mind." },
//     { icon: Wrench, title: "Fixed, Upfront Pricing", description: "No surprises. See the total cost for your service before you book. No hidden fees, ever." },
//     { icon: Star, title: "Quality Guaranteed", description: "We stand by our work. Every job is backed by the BlinqFix 100% satisfaction guarantee." }
//   ];

//   return (
//     <div style={styles.container}>
//       <style>{styles.keyframes}</style>
//       <div style={styles.gridBackground} />
//       <div style={styles.glowEffect} />

//       <div style={styles.translateWrapper}>
//         <button style={styles.globeButton}><Globe size={18} /></button>
//         <span style={styles.translateText}>Language</span>
//         <div id="google_translate_element" />
//       </div>

//       <main style={styles.heroSection}>
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//         >
//           <div style={styles.badge}>
//             <Zap size={16} color="#fbb_f24" />
//             <span style={styles.badgeText}>Emergency Repairs • On-Demand</span>
//           </div>
//         </motion.div>

//         <motion.h1
//           style={styles.heroTitle}
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.4 }}
//         >
//           Your <span style={styles.emergencyText}>Emergency</span> Repair Lifeline.
//         </motion.h1>

//         <motion.p
//           style={styles.subtitle}
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.6 }}
//         >
//           Instant connection to vetted service professionals for your home or business. Fixed prices, zero hassle.
//         </motion.p>

//         <motion.div
//           style={styles.buttonGroup}
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.8 }}
//         >
//           <Button
//             variant="primary"
//             onClick={() => navigate("/customer")}
//             icon={Phone}
//           >
//             Get Help Now
//           </Button>
//           <Button
//             variant="secondary"
//             onClick={() => navigate("/pro")}
//             icon={ArrowRight}
//           >
//             Become a Service Pro
//           </Button>
//         </motion.div>

//         <motion.div
//           style={styles.proCallout}
//           initial={{ opacity: 0, scale: 0.95 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8, delay: 1 }}
//         >
//           <h3 style={styles.proTitle}>
//             Service Pros: Stop Paying for Leads. Start Earning.
//           </h3>
//           <p style={styles.proDescription}>
//             BlinqFix sends high-paying emergency jobs directly to you, with no marketing costs or lead fees. Complete your verification and start claiming exclusive jobs in your territory today.
//           </p>
//         </motion.div>

//         <div style={styles.featuresSection}>
//           {features.map((feature, index) => (
//             <FeatureCard
//               key={index}
//               icon={feature.icon}
//               title={feature.title}
//               description={feature.description}
//             />
//           ))}
//         </div>
//       </main>

//       <Footer />
//     </div>
//   );
// }

//working
import React, { useState, useEffect, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  Zap,
  Shield,
  Clock,
  Star,
  ArrowRight,
  Phone,
  Wrench,
  Globe,
  Twitter,
  Linkedin,
  Facebook,
} from "lucide-react";
import { motion } from "framer-motion";
import AppBanner from "./sections/AppBanner";
import logo from "./assets/blinqfix_logo.jpeg";
import TranslateButton from "./sections/TranslateButton.jsx";
// import Footer from "./sections/Footer"

/* ============================ STYLES ============================ */
const styles = {
  container: {
    minHeight: "100vh",
    background: "#0a0f1f",
    fontFamily:
      'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    color: "#e2e8f0",
    position: "relative",
    overflow: "hidden",
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
    opacity: 0.025,
    zIndex: 0,
    pointerEvents: "none",
  },
  // gridBackground: {
  //   position: "absolute",
  //   inset: 0,
  //   width: "100%",
  //   height: "100%",
  //   backgroundImage: "linear-gradient(to right, rgba(30, 41, 59, 0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(30, 41, 59, 0.3) 1px, transparent 1px)",
  //   backgroundSize: "50px 50px",
  //   animation: "pan-grid 45s linear infinite",
  //   zIndex: 0,
  // },
  glowEffect: {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "1200px",
    height: "1200px",
    background:
      "radial-gradient(circle, rgba(251, 191, 36, 0.08) 0%, transparent 60%)",
    transform: "translate(-50%, -50%)",
    pointerEvents: "none",
  },

  translateWrapper: {
    position: "fixed",
    top: "24px",
    right: "24px",
    zIndex: 1000,
    display: "flex",
    alignItems: "center",
    gap: "8px",
    background: "rgba(30, 41, 59, 0.5)",
    backdropFilter: "blur(10px)",
    padding: "8px 16px",
    borderRadius: "20px",
    border: "1px solid rgba(51, 65, 85, 0.5)",
  },
  globeButton: {
    background: "none",
    border: "none",
    color: "#e2e8f0",
    cursor: "pointer",
  },
  translateText: {
    fontSize: "12px",
    color: "#94a3b8",
    fontWeight: "500",
  },
  heroSection: {
    position: "relative",
    zIndex: 10,
    padding: "140px 24px 100px",
    textAlign: "center",
    maxWidth: "1100px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  badge: {
    // display: "inline-flex",
    // alignItems: "start",
    gap: "8px",
    background: "rgba(251, 191, 36, 0.1)",
    border: "1px solid #fbb_f24",
    padding: "20px",
    borderRadius: "30px",
    marginBottom: "32px",
    // textAlign: "left"
  },
  badgeText: {
    color: "#fbb_f24",
    fontSize: "14px",
    fontWeight: "600",
    // textAlign: "left"
  },
  heroTitle: {
    fontSize: "clamp(3rem, 6vw, 5.5rem)",
    fontWeight: "800",
    color: "#ffffff",
    lineHeight: "1.1",
    marginBottom: "24px",
    textShadow: "0 4px 30px rgba(0,0,0,0.4)",
  },
  emergencyText: {
    color: "#ef4444",
    fontStyle: "italic",
    textShadow: "0 2px 20px rgba(239, 68, 68, 0.5)",
  },
  subtitle: {
    fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
    fontWeight: "500",
    color: "#94a3b8",
    marginBottom: "40px",
    maxWidth: "800px",
  },
  buttonGroup: {
    display: "flex",
    gap: "24px",
    justifyContent: "center",
    flexWrap: "wrap",
    marginBottom: "48px",
  },
  primaryButton: {
    display: "inline-flex",
    alignItems: "center",
    gap: "12px",
    background: "linear-gradient(135deg, #fbb_f24 0%, #f59e0b 100%)",
    color: "white",
    border: "none",
    padding: "18px 36px",
    borderRadius: "12px",
    fontSize: "18px",
    fontWeight: "700",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow:
      "0 8px 30px rgba(251, 191, 36, 0.2), inset 0 1px 1px rgba(255,255,255,0.3)",
  },
  primaryButtonHover: {
    transform: "translateY(-4px)",
    boxShadow:
      "0 12px 40px rgba(251, 191, 36, 0.3), inset 0 1px 1px rgba(255,255,255,0.3)",
  },
  secondaryButton: {
    display: "inline-flex",
    alignItems: "center",
    gap: "12px",
    background: "rgba(30, 41, 59, 0.5)",
    backdropFilter: "blur(10px)",
    color: "#e2e8f0",
    border: "2px solid #334155",
    padding: "16px 36px",
    borderRadius: "12px",
    fontSize: "18px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
  secondaryButtonHover: {
    background: "rgba(51, 65, 85, 0.7)",
    borderColor: "#475569",
    transform: "translateY(-2px)",
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
  featuresSection: {
    width: "75%",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "24px",
    marginTop: "100px",
    padding: "0 20px",
    maxWidth: "1200px",
  },
  featureCard: {
    background:
      "linear-gradient(180deg, rgba(30, 41, 59, 0.8), rgba(30, 41, 59, 0.5))",
    backdropFilter: "blur(10px)",
    border: "1px solid #334155",
    borderRadius: "16px",
    padding: "32px 24px",
    textAlign: "center",
    transition: "all 0.3s ease",
  },
  featureCardHover: {
    transform: "translateY(-8px)",
    borderColor: "#475569",
    background:
      "linear-gradient(180deg, rgba(51, 65, 85, 0.8), rgba(51, 65, 85, 0.5))",
  },
  featureIcon: {
    width: "60px",
    height: "60px",
    borderRadius: "16px",
    background: "linear-gradient(135deg, #ffffff 0%, #f59e0b 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 20px",
    boxShadow: "0 8px 24px rgba(251, 191, 36, 0.2)",
  },
  featureTitle: {
    fontSize: "20px",
    fontWeight: "700",
    color: "#ffffff",
    marginBottom: "12px",
  },
  featureDescription: {
    fontSize: "15px",
    color: "white",
    lineHeight: "1.6",
  },
  footer: {
    position: "relative",
    zIndex: 10,
    width: "100%",
    padding: "60px 24px 40px",
    marginTop: "120px",
    background: "rgba(10, 15, 31, 0.8)",
    backdropFilter: "blur(10px)",
    borderTop: "1px solid #334155",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
  footerLogo: {
    height: "50px",
    width: "auto",
    marginBottom: "24px",
    opacity: 0.9,
  },
  footerNav: {
    display: "flex",
    gap: "32px",
    marginBottom: "32px",
  },
  footerLink: {
    fontSize: "16px",
    color: "blue",
    textDecoration: "none",
    transition: "color 0.2s ease",
  },
  footerLinkHover: {
    color: "#fbb_f24",
  },
  footerSocials: {
    display: "flex",
    gap: "24px",
    marginBottom: "32px",
  },
  socialIcon: {
    color: "#94a3b8",
    transition: "all 0.2s ease",
  },
  socialIconHover: {
    color: "#ffffff",
    transform: "scale(1.1)",
  },
  footerCopyright: {
    fontSize: "14px",
    color: "#475569",
  },
  keyframes: `
    @keyframes pan-grid {
      0% { background-position: 0% 0%; }
      100% { background-position: 50px 50px; }
    }
  `,
};

/* ============================ COMPONENTS ============================ */
const FeatureCard = ({ icon: Icon, title, description }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.5 }}
      style={{
        ...styles.featureCard,
        ...(isHovered ? styles.featureCardHover : {}),
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={styles.featureIcon}>
        <Icon size={28} color="#1e293b" />
      </div>
      <h3 style={styles.featureTitle}>{title}</h3>
      <p style={styles.featureDescription}>{description}</p>
    </motion.div>
  );
};

const Button = ({ children, variant = "primary", onClick, icon: Icon }) => {
  const [isHovered, setIsHovered] = useState(false);
  const baseStyle =
    variant === "primary" ? styles.primaryButton : styles.secondaryButton;
  const hoverStyle =
    variant === "primary"
      ? styles.primaryButtonHover
      : styles.secondaryButtonHover;

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      style={{ ...baseStyle, ...(isHovered ? hoverStyle : {}), color: "white" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {children}
      {Icon && <Icon size={20} style={{ marginLeft: "8px" }} />}
    </motion.button>
  );
};

const Footer = () => {
  const [hoveredLink, setHoveredLink] = useState(null);
  const [hoveredSocial, setHoveredSocial] = useState(null);
  const navLinks = [
    { name: "Home & Business Owners", path: "/customer" },
    { name: "Service Pros", path: "/pro" },
    { name: "Privacy Policy", path: "/privacypolicy" },
    { name: "Terms of Use", path: "/termsandconditions" },
    { name: "FAQ", path: "/faq" },
  ];
  const socialLinks = [
    { name: "Twitter", icon: Twitter, path: "#" },
    { name: "Facebook", icon: Facebook, path: "#" },
    { name: "LinkedIn", icon: Linkedin, path: "#" },
  ];

  return (
    <>
      <AppBanner />
      <footer style={styles.footer}>
        <img
          src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6809c4269_driver_marker.png"
          alt="BlinqFix Logo"
          style={styles.footerLogo}
        />
        <nav style={styles.footerNav}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              style={{
                ...styles.footerLink,
                ...(hoveredLink === link.name ? styles.footerLinkHover : {}),
              }}
              onMouseEnter={() => setHoveredLink(link.name)}
              onMouseLeave={() => setHoveredLink(null)}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        {/* <div style={styles.footerSocials}>
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.path}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setHoveredSocial(link.name)}
            onMouseLeave={() => setHoveredSocial(null)}
          >
            <link.icon
              style={{
                ...styles.socialIcon,
                ...(hoveredSocial === link.name ? styles.socialIconHover : {}),
              }}
              size={24}
            />
          </a>
        ))}
      </div> */}
        <p style={styles.footerCopyright}>
          © {new Date().getFullYear()} BlinqFix, Inc. All rights reserved.
        </p>
      </footer>
    </>
  );
};

/* ============================ MAIN COMPONENT ============================ */
export default function Home() {
  const navigate = useNavigate();

  const features = [
    {
      icon: Zap,
      title: "On-Demand Matching",
      description:
        "Our smart system connects you to the nearest vetted pro in under 30 seconds.",
    },
    {
      icon: Shield,
      title: "Vetted & Insured",
      description:
        "Every professional is background-checked, licensed, and fully insured for your peace of mind.",
    },
    {
      icon: Wrench,
      title: "Fixed, Upfront Pricing",
      description:
        "No surprises. See the total cost for your service before you book. No hidden fees, ever.",
    },
    {
      icon: Star,
      title: "Quality Guaranteed",
      description:
        "We stand by our work. Every job is backed by the BlinqFix 100% satisfaction guarantee.",
    },
  ];

  return (
    <div style={styles.container}>
      <style>{styles.keyframes}</style>
      <style>{`
 .goog-te-banner-frame.skiptranslate,
 .goog-logo-link,
 .goog-te-gadget span {
   display: none !important;
 }
 .goog-te-gadget .goog-te-combo {
  background: #1e293b;
  color: #fff;
  border-radius: 4px;
  padding: 4px;
  font-size: 13px;
}
`}</style>
      <div style={styles.logoBackground} />
      <div style={styles.gridBackground} />
      <div style={styles.glowEffect} />

      <TranslateButton />

      <main style={styles.heroSection}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src={logo}
            alt="BlinqFix Logo"
            style={{ height: "200px", width: "auto", opacity: 100, margin: 0 }}
          ></img>

          {/* <div style={styles.badge}>
            <Zap size={56} color="#fbb_f24" />
            <span style={styles.badgeText}>Emergency Repairs • On-Demand</span>
          </div> */}
        </motion.div>

        <motion.h1
          style={styles.heroTitle}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Your <span style={styles.emergencyText}>Emergency</span> Repair
          Lifeline.
        </motion.h1>

        <motion.p
          style={styles.subtitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Instant connection to vetted service professionals for your home or
          business. Fixed prices, zero hassle.
        </motion.p>

        <motion.div
          style={styles.buttonGroup}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Button
            variant="primary"
            onClick={() => navigate("/customer")}
            icon={Phone}
          >
            Get Help Now
          </Button>
          <Button
            variant="secondary"
            onClick={() => navigate("/pro")}
            icon={ArrowRight}
          >
            Become a Service Pro
          </Button>
        </motion.div>

        <motion.div
          style={styles.proCallout}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <h6
            className="hero-title2"
            style={{ fontStyle: "italic", marginTop: "1.5rem" }}
          >
            The fastest way to get emergency repairs done in America.
          </h6>
          <p style={styles.proDescription}>
            BlinqFix turns chaos into clarity for everyone involved. Customers
            gain a trusted, transparent lifeline. Service pros enjoy a steady
            stream of high-paying emergency jobs without spending a dime on
            marketing. Download the BlinqFix app today, complete verification,
            and experience the smartest way to earn more on your terms—or get
            that urgent repair done right now.
          </p>
        </motion.div>

        <div style={styles.featuresSection}>
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
        <Footer />
      </main>
    </div>
  );
}
