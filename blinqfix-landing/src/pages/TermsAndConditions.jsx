// import React from "react";
// import { useNavigate, Link } from "react-router-dom";
// import {
//   ArrowLeft,
//   FileText,
//   BookText,
//   CheckSquare,
//   User,
//   Briefcase,
//   Wrench,
//   Shield,
//   Users,
//   Lock,
//   AlertTriangle,
//   Phone,
//   DollarSign,
// } from "lucide-react";

// const Section = ({ title, icon: Icon, children }) => (
//   <section className="card">
//     <div className="section-header">
//       <Icon size={20} color="#60a5fa" />
//       <h2 className="section-title">{title}</h2>
//     </div>
//     {children}
//   </section>
// );

// const P = ({ children }) => <p className="p">{children}</p>;
// const UL = ({ children }) => <ul className="ul">{children}</ul>;
// const LI = ({ children }) => <li className="li">{children}</li>;
// const SubHeading = ({ children }) => <div className="subheading">{children}</div>;
// const PolicyHeading = ({ children }) => <div className="policy-heading">{children}</div>;

// export default function TermsAndConditions() {
//   const navigate = useNavigate();

//   const css = `
//     :root{
//       --bg-1:#0f172a; --bg-2:#1e3a8a; --bg-3:#312e81;
//       --text:#e0e7ff; --muted:#94a3b8; --border:rgba(255,255,255,.1);
//       --border-soft:rgba(255,255,255,.08); --panel:rgba(255,255,255,.05);
//       --link:#1976d2; --accent:#60a5fa; --success:#22c55e;
//     }
//     .legal-page{
//       min-height:100vh; background:linear-gradient(180deg,var(--bg-1),var(--bg-2) 50%,var(--bg-3));
//       color:var(--text); display:flex; flex-direction:column;
//     }
//     .legal-container{
//       width:100%; max-width:900px; margin:0 auto; padding:40px 20px;
//       display:flex; flex-direction:column; gap:16px;
//     }
//     .legal-header{ display:flex; align-items:center; justify-content:space-between; }
//     .back-btn{
//       width:44px; height:44px; border-radius:999px; border:1px solid var(--border);
//       background:rgba(255,255,255,.1); display:inline-flex; align-items:center; justify-content:center; cursor:pointer;
//     }
//     .back-spacer{ width:44px; height:44px; }
//     .header-center{ text-align:center; flex:1; }
//     .badge{
//       display:inline-flex; align-items:center; gap:8px; background:rgba(255,255,255,.1);
//       padding:6px 12px; border-radius:16px; margin-bottom:8px;
//     }
//     .badge-text{ color:#fff; font-size:12px; font-weight:600; }
//     .header-title{ font-size:24px; font-weight:700; color:#fff; }

//     .card{
//       background:var(--panel); border:1px solid var(--border); border-radius:16px; padding:20px;
//     }
//     .intro{ background:linear-gradient(180deg, rgba(255,255,255,.05), rgba(255,255,255,.02)); text-align:center; }
//     .intro-title{ font-size:20px; font-weight:700; color:#fff; margin-bottom:8px; }
//     .intro-sub{ font-size:14px; color:var(--muted); }

//     .section-header{
//       display:flex; align-items:center; gap:12px; padding-bottom:6px; margin-bottom:12px; border-bottom:1px solid var(--border-soft);
//     }
//     .section-title{ font-size:18px; font-weight:700; color:#fff; margin:0; }

//     .p{ font-size:15px; line-height:1.55; margin:0 0 12px; }
//     .ul{ margin:4px 0 12px 18px; padding:0; }
//     .li{ margin:0 0 8px 0; }
//     .subheading, .policy-heading{ font-size:15px; font-weight:700; color:#fff; margin:8px 0 6px; }

//     .notice{
//       background:linear-gradient(180deg, rgba(239,68,68,.1), rgba(220,38,38,.05));
//       border:1px solid var(--border); border-radius:16px; padding:20px;
//     }
//     .notice-title{ display:flex; align-items:center; gap:12px; font-weight:700; color:#fff; margin-bottom:12px; }
//     .notice-text{ font-size:14px; line-height:1.45; color:var(--text); }

//     .footer{
//       margin:32px auto 12px; width:100%; max-width:900px; text-align:center; padding:16px 0; border-top:1px solid var(--border);
//     }
//     .footer a{ color:var(--link); text-decoration:none; margin:0 10px; }
//     .copy{ margin-top:8px; font-size:12px; color:var(--muted); }
//   `;

//   return (
//     <div className="legal-page">
//       <style>{css}</style>

//       <div className="legal-container">
//         {/* Header */}
//         <header className="legal-header">
//           <button className="back-btn" onClick={() => navigate(-1)} aria-label="Go back">
//             <ArrowLeft size={24} color="#fff" />
//           </button>

//           <div className="header-center">
//             <div className="badge">
//               <FileText size={16} color="#e0e7ff" />
//               <span className="badge-text">Legal</span>
//             </div>
//             <div className="header-title">Terms of Use</div>
//           </div>

//           <div className="back-spacer" />
//         </header>

//         {/* Intro */}
//         <div className="card intro">
//           <div className="intro-title">BlinqFix Terms of Use for Customers and Service Pros</div>
//           <div className="intro-sub">Effective Date: 05/01/2025</div>
//         </div>

//         {/* 1. Definitions */}
//         <Section title="1. Definitions" icon={BookText}>
//           <UL>
//             <LI>“Platform”: The BlinqFix website, mobile app, software, and related services.</LI>
//             <LI>“User”: Any individual or entity accessing the Platform, including Customers and Service Providers.</LI>
//             <LI>“Customer”: An individual or entity seeking home services through the Platform.</LI>
//             <LI>“Service Provider” / “Contractor”: Independent professionals providing services via the Platform.</LI>
//             <LI>“Services”: Repair, maintenance, installation, clean-up, and other tasks offered or completed through the Platform.</LI>
//             <LI>“Content”: Text, photos, ratings, reviews, communications, and other data uploaded or generated by Users.</LI>
//             <LI>“Booking”: A confirmed job request made in the app.</LI>
//           </UL>
//         </Section>

//         {/* 2. Overview */}
//         <Section title="2. Overview and Acceptance" icon={CheckSquare}>
//           <P>
//             By accessing or using the Platform, you agree to these Terms, the Privacy Policy, the SMS &amp; Phone Number
//             Privacy Policy below, and any additional posted policies. If you do not agree, do not use the Platform.
//           </P>
//         </Section>

//         {/* 3. Account Registration */}
//         <Section title="3. Account Registration & Eligibility" icon={User}>
//           <P>To use the Platform, Users must:</P>
//           <UL>
//             <LI>Provide complete and accurate information</LI>
//             <LI>Maintain security of login credentials</LI>
//             <LI>Be at least 18 years of age and legally able to enter contracts</LI>
//           </UL>
//           <P>BlinqFix may refuse access, suspend, or cancel accounts at its sole discretion for violations or fraud.</P>
//         </Section>

//         {/* 4. Customer Terms */}
//         <Section title="4. Customer Terms (Homeowners)" icon={Wrench}>
//           <SubHeading>4.1 Submitting a Request</SubHeading>
//           <UL>
//             <LI>Provide accurate address, contact, and job details</LI>
//             <LI>Ensure safe access to the property and disclose hazards</LI>
//           </UL>

//           <SubHeading>4.2 Booking, Pricing &amp; Payments</SubHeading>
//           <UL>
//             <LI>
//               Pricing and fees (including any platform/convenience fee) are shown before you confirm. By booking, you
//               authorize payment for the shown amounts and any approved add-ons.
//             </LI>
//             <LI>
//               Some jobs may require additional on-site approval for non-covered scope; you’ll see and confirm before
//               you’re charged.
//             </LI>
//           </UL>

//           <SubHeading>4.3 Cancellations &amp; Refunds</SubHeading>
//           <UL>
//             <LI>Terms are disclosed in-app during booking and may vary by job status and timing.</LI>
//           </UL>

//           <SubHeading>4.4 Conduct</SubHeading>
//           <UL>
//             <LI>Treat Service Pros respectfully and lawfully</LI>
//             <LI>Do not request unsafe or illegal work</LI>
//           </UL>

//           <SubHeading>4.5 Ratings &amp; Reviews</SubHeading>
//           <UL>
//             <LI>
//               Reviews must be accurate, respectful, and free of hateful or harassing content. We may moderate or remove
//               content that violates policy.
//             </LI>
//           </UL>
//         </Section>

//         {/* 5. Service Provider Terms */}
//         <Section title="5. Service Provider Terms" icon={Briefcase}>
//           <SubHeading>5.1 Overview</SubHeading>
//           <P>By using the Platform as a Service Provider, you agree to be bound by these Terms and applicable policies.</P>

//           <SubHeading>5.2 Platform Access</SubHeading>
//           <P>
//             BlinqFix is a marketplace connecting Clients with independent professionals. BlinqFix does not perform
//             services and is not responsible for contractors’ work.
//           </P>

//           <SubHeading>5.3 Contractor Status</SubHeading>
//           <P>You are an independent contractor—not an employee, partner, agent, or representative of BlinqFix.</P>

//           <SubHeading>5.4 Payment</SubHeading>
//           <P>
//             Payments are processed through the Platform. You receive payment for completed work minus BlinqFix’s
//             platform fee and any agreed fees. You are responsible for taxes and withholdings.
//           </P>

//           <SubHeading>5.5 Platform Fee</SubHeading>
//           <P>A platform service fee (currently 7%) is deducted per transaction for platform tools and services.</P>

//           <SubHeading>5.6 Conduct &amp; Performance</SubHeading>
//           <UL>
//             <LI>Arrive on time and communicate proactively</LI>
//             <LI>Maintain required licenses and insurance</LI>
//             <LI>Perform work safely and professionally</LI>
//             <LI>Accurately represent skills and qualifications</LI>
//           </UL>

//           <SubHeading>5.7 Insurance Requirements</SubHeading>
//           <P>
//             Maintain valid General Liability Insurance (minimum $500,000 per occurrence). BlinqFix must be named as
//             Certificate Holder and Additional Insured. Upload a current COI and keep it updated.
//           </P>

//           <SubHeading>5.8 Non-Circumvention</SubHeading>
//           <P>
//             For 12 months after your last interaction with a BlinqFix customer through the Platform, do not solicit or
//             accept jobs outside the Platform that were originated on BlinqFix.
//           </P>

//           <SubHeading>5.9 Confidentiality</SubHeading>
//           <P>Keep customer and platform information confidential during and after your use of the Platform.</P>

//           <SubHeading>5.10 Termination</SubHeading>
//           <P>BlinqFix may suspend or terminate access for violations or misconduct.</P>
//         </Section>

//         {/* 6. General Rules */}
//         <Section title="6. General Rules & Prohibited Uses" icon={Users}>
//           <UL>
//             <LI>Do not misuse, reverse engineer, or attack the Platform</LI>
//             <LI>Do not upload unlawful, harassing, or infringing content</LI>
//             <LI>Obey all applicable laws and safety standards</LI>
//           </UL>
//         </Section>

//         {/* 7. Privacy & Security */}
//         <Section title="7. Privacy & Security" icon={Lock}>
//           <P>
//             We use industry-standard measures to safeguard your information. See our Privacy Policy and SMS policy below
//             for details on the data we collect and how we use it.
//           </P>
//         </Section>

//         {/* SMS Policy */}
//         <Section title="BlinqFix SMS & Phone Number Privacy Policy" icon={Phone}>
//           <PolicyHeading>1. Information We Collect</PolicyHeading>
//           <P>If you opt in to SMS, we collect your phone number and messaging preferences (e.g., job notifications, marketing).</P>

//           <PolicyHeading>2. How We Use Your Phone Number</PolicyHeading>
//           <UL>
//             <LI>Job Notifications &amp; Updates (Transactional)</LI>
//             <LI>Customers: confirmations, arrival times, progress updates, and completion notices.</LI>
//             <LI>Service Providers: new job opportunities, job details, scheduling changes, and progress updates.</LI>
//             <LI>Promotions &amp; Marketing Messages: offers, platform updates, training, and announcements relevant to your role.</LI>
//           </UL>

//           <PolicyHeading>3. Message Frequency</PolicyHeading>
//           <UL>
//             <LI>Transactional: sent as needed based on your activity.</LI>
//             <LI>Marketing: up to 4 messages/month.</LI>
//           </UL>

//           <PolicyHeading>4. Opting Out</PolicyHeading>
//           <P>Reply STOP to unsubscribe; HELP for help. You may still receive messages needed to complete in-progress transactions.</P>

//           <PolicyHeading>5. Data Sharing &amp; Disclosure</PolicyHeading>
//           <P>We don’t sell or rent your number. We may share it with providers who send messages on our behalf (e.g., Twilio) or with authorities if required by law.</P>

//           <PolicyHeading>6. Data Security</PolicyHeading>
//           <P>We use industry-standard safeguards for phone numbers and preferences.</P>

//           <PolicyHeading>7. Changes</PolicyHeading>
//           <P>We may update this policy; changes will show an updated Effective Date.</P>

//           <PolicyHeading>8. Contact</PolicyHeading>
//           <P>Email: support@blinqfix.com<br/>Message &amp; data rates may apply.</P>
//         </Section>

//         {/* 8 & 9 */}
//         <Section title="8. Disclaimers & Limitation of Liability" icon={Shield}>
//           <P>
//             The Platform is provided “as is.” To the fullest extent permitted by law, BlinqFix disclaims warranties of
//             merchantability, fitness, and non-infringement, and is not liable for indirect or consequential damages.
//           </P>
//         </Section>

//         <Section title="9. Changes to Terms" icon={FileText}>
//           <P>We may update these Terms from time to time. Updates will be posted with an effective date. Continued use constitutes acceptance.</P>
//         </Section>

//         {/* Notice */}
//         <div className="notice">
//           <div className="notice-title">
//             <AlertTriangle size={20} color="#f87171" />
//             <span>Important Notice</span>
//           </div>
//           <div className="notice-text">
//             By using the BlinqFix platform, you acknowledge you’ve read and agree to these Terms and the SMS &amp; Phone
//             Number Privacy Policy.
//           </div>
//         </div>
//       </div>

//       {/* Simple footer (same-file styles) */}
//       <footer className="footer">
//         <div>
//           <Link to="/legal/terms">Terms &amp; Conditions</Link>
//           · <Link to="/legal/privacy">Privacy Policy</Link>
//           · <Link to="/help/faq">FAQ</Link>
//           · <a href="mailto:support@blinqfix.com?subject=Need%20Help&body=Hi,%20I%20need%20assistance%20with...">Help</a>
//         </div>
//         <div className="copy">© {new Date().getFullYear()} BlinqFix</div>
//       </footer>
//     </div>
//   );
// }


import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  ArrowLeft,
  FileText,
  BookText,
  CheckSquare,
  User,
  Briefcase,
  Wrench,
  Shield,
  Users,
  Lock,
  AlertTriangle,
  Phone,
  DollarSign,
  Info
} from "lucide-react";

/* ============================ STYLES ============================ */
const styles = {
  container: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #2d1b69 100%)",
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  contentWrap: {
    maxWidth: "1000px",
    margin: "0 auto",
    padding: "40px 20px 80px",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: "32px",
    marginBottom: "32px",
  },
  backButton: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: "48px",
    height: "48px",
    background: "rgba(255, 255, 255, 0.15)",
    // border: "none",
    borderRadius: "16px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
  },
  backButtonHover: {
    background: "rgba(255, 255, 255, 0.25)",
    transform: "translateY(-2px)",
  },
  headerCenter: {
    textAlign: "center",
    flex: 1,
  },
  headerBadge: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    background: "rgba(255, 255, 255, 0.15)",
    padding: "8px 16px",
    borderRadius: "20px",
    marginBottom: "16px",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
  },
  headerBadgeText: {
    color: "#ffffff",
    fontSize: "14px",
    fontWeight: "600",
  },
  headerTitle: {
    fontSize: "42px",
    fontWeight: "900",
    color: "#ffffff",
    margin: "0",
    background: "linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  },
  introCard: {
    marginBottom: "40px",
    borderRadius: "24px",
    overflow: "hidden",
    background: "rgba(255, 255, 255, 0.95)",
    boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255, 255, 255, 0.2)",
  },
  introGradient: {
    padding: "32px",
    background: "linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.05) 100%)",
  },
  introHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "16px",
    marginBottom: "16px",
  },
  introIconContainer: {
    width: "56px",
    height: "56px",
    borderRadius: "16px",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 8px 24px rgba(102, 126, 234, 0.3)",
  },
  introTitle: {
    margin: "0",
    fontSize: "28px",
    fontWeight: "800",
    color: "#1f2937",
    lineHeight: "1.3",
    textAlign: "center",
  },
  effectiveDate: {
    margin: "0",
    fontSize: "16px",
    color: "#6b7280",
    fontStyle: "italic",
    textAlign: "center",
    padding: "16px",
    background: "rgba(102, 126, 234, 0.05)",
    borderRadius: "12px",
    border: "1px solid rgba(102, 126, 234, 0.1)",
  },
  sectionCard: {
    marginBottom: "24px",
    borderRadius: "20px",
    overflow: "hidden",
    background: "rgba(255, 255, 255, 0.95)",
    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    transition: "all 0.3s ease",
  },
  sectionCardHover: {
    transform: "translateY(-4px)",
    boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)",
  },
  sectionGradient: {
    padding: "28px",
  },
  sectionHeader: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
    paddingBottom: "16px",
    marginBottom: "20px",
    borderBottom: "2px solid rgba(102, 126, 234, 0.1)",
  },
  sectionIconContainer: {
    width: "44px",
    height: "44px",
    borderRadius: "12px",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 6px 20px rgba(102, 126, 234, 0.3)",
  },
  sectionTitle: {
    margin: "0",
    fontSize: "20px",
    fontWeight: "700",
    color: "#1f2937",
  },
  paragraph: {
    fontSize: "16px",
    lineHeight: "1.7",
    color: "#4b5563",
    margin: "0 0 16px 0",
    fontWeight: "400",
  },
  list: {
    display: "grid",
    gap: "12px",
    margin: "0 0 16px 0",
    padding: "0",
    listStyle: "none",
  },
  listItem: {
    display: "flex",
    alignItems: "flex-start",
    gap: "12px",
    fontSize: "16px",
    lineHeight: "1.6",
    color: "#4b5563",
    padding: "12px 16px",
    background: "rgba(102, 126, 234, 0.05)",
    borderRadius: "12px",
    border: "1px solid rgba(102, 126, 234, 0.1)",
    transition: "all 0.2s ease",
  },
  listItemHover: {
    background: "rgba(102, 126, 234, 0.1)",
    borderColor: "rgba(102, 126, 234, 0.2)",
    transform: "translateX(4px)",
  },
  listBullet: {
    color: "#667eea",
    marginTop: "2px",
    flexShrink: 0,
  },
  subheading: {
    fontSize: "18px",
    fontWeight: "700",
    color: "#1f2937",
    margin: "24px 0 16px 0",
    paddingBottom: "8px",
    borderBottom: "1px solid rgba(102, 126, 234, 0.15)",
    position: "relative",
  },
  subheadingAccent: {
    content: '""',
    position: "absolute",
    bottom: "-1px",
    left: "0",
    width: "40px",
    height: "2px",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  },
  noticeCard: {
    background: "rgba(255, 255, 255, 0.95)",
    border: "1px solid rgba(239, 68, 68, 0.3)",
    boxShadow: "0 20px 40px rgba(239, 68, 68, 0.1)",
  },
  noticeGradient: {
    background: "linear-gradient(135deg, rgba(239, 68, 68, 0.08) 0%, rgba(220, 38, 38, 0.05) 100%)",
  },
  noticeIconContainer: {
    background: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
    boxShadow: "0 6px 20px rgba(239, 68, 68, 0.3)",
  },
  noticeTitle: {
    color: "#dc2626",
    fontWeight: "700",
  },
  footer: {
    marginTop: "48px",
    textAlign: "center",
    padding: "32px 20px",
    borderTop: "1px solid rgba(255, 255, 255, 0.2)",
  },
  footerLinks: {
    display: "flex",
    justifyContent: "center",
    gap: "32px",
    marginBottom: "24px",
    flexWrap: "wrap",
  },
  footerLink: {
    color: "#ffffff",
    textDecoration: "none",
    fontWeight: "500",
    fontSize: "16px",
    transition: "all 0.2s ease",
    padding: "8px 16px",
    borderRadius: "8px",
    background: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(10px)",
  },
  footerLinkHover: {
    background: "rgba(255, 255, 255, 0.2)",
    transform: "translateY(-2px)",
  },
  copyright: {
    fontSize: "14px",
    color: "rgba(255, 255, 255, 0.7)",
    fontWeight: "400",
  },
};

/* ============================ COMPONENTS ============================ */
const Section = ({ title, icon: Icon, children, isNotice = false }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const cardStyle = isNotice 
    ? { ...styles.sectionCard, ...styles.noticeCard }
    : styles.sectionCard;
  
  const gradientStyle = isNotice
    ? { ...styles.sectionGradient, ...styles.noticeGradient }
    : styles.sectionGradient;
    
  const iconStyle = isNotice 
    ? styles.noticeIconContainer 
    : styles.sectionIconContainer;
    
  const titleStyle = isNotice 
    ? { ...styles.sectionTitle, ...styles.noticeTitle }
    : styles.sectionTitle;

  return (
    <section 
      style={{ ...cardStyle, ...(isHovered && !isNotice ? styles.sectionCardHover : {}) }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={gradientStyle}>
        <div style={styles.sectionHeader}>
          <div style={iconStyle}>
            <Icon size={20} color="#ffffff" />
          </div>
          <h2 style={titleStyle}>{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
};

const Paragraph = ({ children }) => <p style={styles.paragraph}>{children}</p>;

const List = ({ children }) => <ul style={styles.list}>{children}</ul>;

const ListItem = ({ children }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <li 
      style={{...styles.listItem, ...(isHovered ? styles.listItemHover : {})}}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CheckSquare size={16} style={styles.listBullet} />
      <span>{children}</span>
    </li>
  );
};

const SubHeading = ({ children }) => (
  <div style={styles.subheading}>
    {children}
    <div style={styles.subheadingAccent}></div>
  </div>
);

const FooterLink = ({ to, children }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <Link 
      to={to} 
      style={{...styles.footerLink, ...(isHovered ? styles.footerLinkHover : {})}}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </Link>
  );
};

/* ============================ MAIN COMPONENT ============================ */
export default function ProviderTermsAndAgreement() {
  const navigate = useNavigate();
  const [backButtonHovered, setBackButtonHovered] = useState(false);

  return (
    <div style={styles.container}>
      <main style={styles.contentWrap}>
        {/* Header */}
        <header style={styles.header}>
          <button 
            onClick={() => navigate(-1)} 
            style={{ ...styles.backButton, ...(backButtonHovered ? styles.backButtonHover : {}) }}
            onMouseEnter={() => setBackButtonHovered(true)}
            onMouseLeave={() => setBackButtonHovered(false)}
            aria-label="Go back"
          >
            <ArrowLeft size={24} color="#fff" />
          </button>
          <div style={styles.headerCenter}>
            <div style={styles.headerBadge}>
              <FileText size={16} color="#e0e7ff" />
              <span style={styles.headerBadgeText}>Legal</span>
            </div>
            <h1 style={styles.headerTitle}>Terms of Use</h1>
          </div>
          <div style={{ width: "48px" }} />
        </header>

        {/* Intro Card */}
        <div style={styles.introCard}>
          <div style={styles.introGradient}>
            <div style={styles.introHeader}>
              <div style={styles.introIconContainer}>
                <FileText size={24} color="#ffffff" />
              </div>
            </div>
            <h2 style={styles.introTitle}>BlinqFix Terms of Use for Customers and Service Professionals</h2>
            <p style={styles.effectiveDate}>Effective Date: May 1, 2025</p>
          </div>
        </div>

        {/* Sections */}
        <Section title="1. Definitions" icon={BookText}>
          <List>
            <ListItem>"Platform": The BlinqFix website, mobile app, software, and related services.</ListItem>
            <ListItem>"User": Any individual or entity accessing the Platform, including Customers and Service Providers.</ListItem>
            <ListItem>"Customer": An individual or entity seeking home services through the Platform.</ListItem>
            <ListItem>"Service Provider" / "Contractor": Independent professionals providing services via the Platform.</ListItem>
            <ListItem>"Services": Repair, maintenance, installation, clean-up, and other tasks offered or completed through the Platform.</ListItem>
            <ListItem>"Content": Text, photos, ratings, reviews, communications, and other data uploaded or generated by Users.</ListItem>
            <ListItem>"Booking": A confirmed job request made in the app.</ListItem>
          </List>
        </Section>
        
        <Section title="2. Overview and Acceptance" icon={CheckSquare}>
          <Paragraph>
            By accessing or using the Platform, you agree to these Terms, the Privacy Policy, the SMS &amp; Phone Number
            Privacy Policy below, and any additional posted policies. If you do not agree, do not use the Platform.
          </Paragraph>
        </Section>

        <Section title="3. Account Registration & Eligibility" icon={User}>
          <Paragraph>To use the Platform, Users must:</Paragraph>
          <List>
            <ListItem>Provide complete and accurate information</ListItem>
            <ListItem>Maintain security of login credentials</ListItem>
            <ListItem>Be at least 18 years of age and legally able to enter contracts</ListItem>
          </List>
          <Paragraph>BlinqFix may refuse access, suspend, or cancel accounts at its sole discretion for violations or fraud.</Paragraph>
        </Section>

        <Section title="4. Customer Terms (Homeowners)" icon={Wrench}>
          <SubHeading>4.1 Submitting a Request</SubHeading>
          <List>
            <ListItem>Provide accurate address, contact, and job details</ListItem>
            <ListItem>Ensure safe access to the property and disclose hazards</ListItem>
          </List>

          <SubHeading>4.2 Booking, Pricing &amp; Payments</SubHeading>
          <List>
            <ListItem>
              Pricing and fees (including any platform/convenience fee) are shown before you confirm. By booking, you
              authorize payment for the shown amounts and any approved add-ons.
            </ListItem>
            <ListItem>
              Some jobs may require additional on-site approval for non-covered scope; you'll see and confirm before
              you're charged.
            </ListItem>
          </List>

          <SubHeading>4.3 Cancellations &amp; Refunds</SubHeading>
          <Paragraph>Terms are disclosed in-app during booking and may vary by job status and timing.</Paragraph>

          <SubHeading>4.4 Conduct</SubHeading>
          <List>
            <ListItem>Treat Service Pros respectfully and lawfully</ListItem>
            <ListItem>Do not request unsafe or illegal work</ListItem>
          </List>

          <SubHeading>4.5 Ratings &amp; Reviews</SubHeading>
          <Paragraph>
            Reviews must be accurate, respectful, and free of hateful or harassing content. We may moderate or remove
            content that violates policy.
          </Paragraph>
        </Section>

        <Section title="5. Service Provider Terms" icon={Briefcase}>
          <SubHeading>5.1 Overview</SubHeading>
          <Paragraph>By using the Platform as a Service Provider, you agree to be bound by these Terms and applicable policies.</Paragraph>

          <SubHeading>5.2 Platform Access</SubHeading>
          <Paragraph>
            BlinqFix is a marketplace connecting Clients with independent professionals. BlinqFix does not perform
            services and is not responsible for contractors' work.
          </Paragraph>

          <SubHeading>5.3 Contractor Status</SubHeading>
          <Paragraph>You are an independent contractor—not an employee, partner, agent, or representative of BlinqFix.</Paragraph>

          <SubHeading>5.4 Payment</SubHeading>
          <Paragraph>
            Payments are processed through the Platform. You receive payment for completed work minus BlinqFix's
            platform fee and any agreed fees. You are responsible for taxes and withholdings.
          </Paragraph>

          <SubHeading>5.5 Platform Fee</SubHeading>
          <Paragraph>A platform service fee (currently 7%) is deducted per transaction for platform tools and services.</Paragraph>

          <SubHeading>5.6 Conduct &amp; Performance</SubHeading>
          <List>
            <ListItem>Arrive on time and communicate proactively</ListItem>
            <ListItem>Maintain required licenses and insurance</ListItem>
            <ListItem>Perform work safely and professionally</ListItem>
            <ListItem>Accurately represent skills and qualifications</ListItem>
          </List>

          <SubHeading>5.7 Insurance Requirements</SubHeading>
          <Paragraph>
            Maintain valid General Liability Insurance (minimum $500,000 per occurrence). BlinqFix must be named as
            Certificate Holder and Additional Insured. Upload a current COI and keep it updated.
          </Paragraph>

          <SubHeading>5.8 Non-Circumvention</SubHeading>
          <Paragraph>
            For 12 months after your last interaction with a BlinqFix customer through the Platform, do not solicit or
            accept jobs outside the Platform that were originated on BlinqFix.
          </Paragraph>

          <SubHeading>5.9 Confidentiality</SubHeading>
          <Paragraph>Keep customer and platform information confidential during and after your use of the Platform.</Paragraph>

          <SubHeading>5.10 Termination</SubHeading>
          <Paragraph>BlinqFix may suspend or terminate access for violations or misconduct.</Paragraph>
        </Section>

        <Section title="6. General Rules & Prohibited Uses" icon={Users}>
          <List>
            <ListItem>Do not misuse, reverse engineer, or attack the Platform</ListItem>
            <ListItem>Do not upload unlawful, harassing, or infringing content</ListItem>
            <ListItem>Obey all applicable laws and safety standards</ListItem>
          </List>
        </Section>

        <Section title="7. Privacy & Security" icon={Lock}>
          <Paragraph>
            We use industry-standard measures to safeguard your information. See our Privacy Policy and SMS policy below
            for details on the data we collect and how we use it.
          </Paragraph>
        </Section>

        <Section title="BlinqFix SMS & Phone Number Privacy Policy" icon={Phone}>
          <SubHeading>1. Information We Collect</SubHeading>
          <Paragraph>If you opt in to SMS, we collect your phone number and messaging preferences (e.g., job notifications, marketing).</Paragraph>

          <SubHeading>2. How We Use Your Phone Number</SubHeading>
          <List>
            <ListItem>Job Notifications &amp; Updates (Transactional)</ListItem>
            <ListItem>Customers: confirmations, arrival times, progress updates, and completion notices.</ListItem>
            <ListItem>Service Providers: new job opportunities, job details, scheduling changes, and progress updates.</ListItem>
            <ListItem>Promotions &amp; Marketing Messages: offers, platform updates, training, and announcements relevant to your role.</ListItem>
          </List>

          <SubHeading>3. Message Frequency</SubHeading>
          <List>
            <ListItem>Transactional: sent as needed based on your activity.</ListItem>
            <ListItem>Marketing: up to 4 messages/month.</ListItem>
          </List>

          <SubHeading>4. Opting Out</SubHeading>
          <Paragraph>Reply STOP to unsubscribe; HELP for help. You may still receive messages needed to complete in-progress transactions.</Paragraph>

          <SubHeading>5. Data Sharing &amp; Disclosure</SubHeading>
          <Paragraph>We don't sell or rent your number. We may share it with providers who send messages on our behalf (e.g., Twilio) or with authorities if required by law.</Paragraph>

          <SubHeading>6. Data Security</SubHeading>
          <Paragraph>We use industry-standard safeguards for phone numbers and preferences.</Paragraph>

          <SubHeading>7. Changes</SubHeading>
          <Paragraph>We may update this policy; changes will show an updated Effective Date.</Paragraph>

          <SubHeading>8. Contact</SubHeading>
          <Paragraph>Email: support@blinqfix.com<br />Message &amp; data rates may apply.</Paragraph>
        </Section>

        <Section title="8. Disclaimers & Limitation of Liability" icon={Shield}>
          <Paragraph>
            The Platform is provided "as is." To the fullest extent permitted by law, BlinqFix disclaims warranties of
            merchantability, fitness, and non-infringement, and is not liable for indirect or consequential damages.
          </Paragraph>
        </Section>

        <Section title="9. Changes to Terms" icon={FileText}>
          <Paragraph>We may update these Terms from time to time. Updates will be posted with an effective date. Continued use constitutes acceptance.</Paragraph>
        </Section>

        <Section title="Important Notice" icon={AlertTriangle} isNotice={true}>
          <Paragraph>
            By using the BlinqFix platform, you acknowledge you've read and agree to these Terms and the SMS &amp; Phone
            Number Privacy Policy.
          </Paragraph>
        </Section>

        <footer style={styles.footer}>
          {/* <div style={styles.footerLinks}>
            <FooterLink to="/legal/terms">Terms &amp; Conditions</FooterLink>
            <FooterLink to="/legal/privacy">Privacy Policy</FooterLink>
            <FooterLink to="/help/faq">FAQ</FooterLink>
            <a 
              href="mailto:support@blinqfix.com?subject=Need%20Help&body=Hi,%20I%20need%20assistance%20with..."
              style={styles.footerLink}
            >
              Help
            </a>
          </div> */}
          <p style={styles.copyright}>© {new Date().getFullYear()} BlinqFix</p>
        </footer>
      </main>
    </div>
  );
}