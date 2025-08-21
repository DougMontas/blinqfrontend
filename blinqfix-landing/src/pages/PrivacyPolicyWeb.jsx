// import React from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   ArrowLeft, FileText, Shield, ClipboardList, Settings,
//   Share2, CheckSquare, Lock, AlertTriangle, RefreshCw, Mail
// } from "lucide-react"; // ✅ web icons

// const Section = ({ title, icon: Icon, children }) => (
//   <section style={styles.sectionCard}>
//     <div style={styles.sectionGradient}>
//       <div style={styles.sectionHeader}>
//         <Icon size={20} color="#60a5fa" />
//         <h3 style={styles.sectionTitle}>{title}</h3>
//       </div>
//       {children}
//     </div>
//   </section>
// );

// const Paragraph = ({ children }) => <p style={styles.paragraph}>{children}</p>;
// const ListItem  = ({ children }) => <div style={styles.listItem}>• {children}</div>;

// export default function PrivacyPolicyWeb() {
//   const nav = useNavigate();

//   return (
//     <div style={styles.container}>
//       <main style={styles.contentWrap}>
//         <header style={styles.header}>
//           <button onClick={() => nav(-1)} style={styles.backButton} aria-label="Go back">
//             <ArrowLeft size={24} color="#fff" />
//           </button>

//           <div style={styles.headerCenter}>
//             <div style={styles.headerBadge}>
//               <FileText size={16} color="#e0e7ff" />
//               <span style={styles.headerBadgeText}>Legal</span>
//             </div>
//             <h1 style={styles.headerTitle}>Privacy Policy</h1>
//           </div>

//           <div style={{ width: 44 }} />
//         </header>

//         <div style={styles.introCard}>
//           <div style={styles.introGradient}>
//             <div style={styles.introHeader}>
//               <Shield size={32} color="#22c55e" />
//               <h2 style={styles.introTitle}>Privacy Policy for BlinqFix Official App</h2>
//             </div>
//             <p style={styles.effectiveDate}>Effective Date: 5/1/2025</p>
//           </div>
//         </div>

//         <Section title="1. Introduction" icon={FileText}>
//           <Paragraph>
//             BlinqFix (“we,” “our,” or “us”) explains how we collect, use, disclose, and safeguard
//             your information when you use the BlinqFix official application.
//           </Paragraph>
//         </Section>

//         <Section title="2. Information We Collect" icon={ClipboardList}>
//           <Paragraph>We may collect:</Paragraph>
//           <ListItem>Personal information (name, email, phone, payment info)</ListItem>
//           <ListItem>Device information (IP, OS, usage data)</ListItem>
//           <ListItem>Location data (with your consent)</ListItem>
//           <ListItem>User content (photos, videos, messages)</ListItem>
//         </Section>

//         <Section title="3. How We Use Your Information" icon={Settings}>
//           <ListItem>Provide and manage services</ListItem>
//           <ListItem>Process transactions and confirmations</ListItem>
//           <ListItem>Communicate about your account or services</ListItem>
//           <ListItem>Improve the app and experience</ListItem>
//           <ListItem>Comply with legal obligations</ListItem>
//         </Section>

//         <Section title="4. Sharing Your Information" icon={Share2}>
//           <ListItem>Service providers (on our behalf)</ListItem>
//           <ListItem>Business partners (features & delivery)</ListItem>
//           <ListItem>Law enforcement (as required by law)</ListItem>
//         </Section>

//         <Section title="5. Your Choices" icon={CheckSquare}>
//           <ListItem>Access/correct your info in the app</ListItem>
//           <ListItem>Control location in device settings</ListItem>
//           <ListItem>Opt out of marketing messages</ListItem>
//         </Section>

//         <Section title="6. Data Security" icon={Lock}>
//           <Paragraph>We apply appropriate safeguards; no system is 100% secure.</Paragraph>
//         </Section>

//         <Section title="7. Children’s Privacy" icon={AlertTriangle}>
//           <Paragraph>Not intended for children under 13.</Paragraph>
//         </Section>

//         <Section title="8. Changes to This Policy" icon={RefreshCw}>
//           <Paragraph>We may update this policy and the Effective Date.</Paragraph>
//         </Section>

//         <Section title="9. Contact Us" icon={Mail}>
//           <Paragraph>
//             Questions? Email <a href="mailto:support@blinqfix.com" style={styles.mailLink}>support@blinqfix.com</a>.
//           </Paragraph>
//         </Section>
//       </main>
//     </div>
//   );
// }

// /* inline styles */
// const styles = {
//   container: {
//     minHeight: "100vh",
//     background: "linear-gradient(180deg, #0f172a, #1e3a8a 50%, #312e81)",
//   },
//   contentWrap: {
//     maxWidth: 980,
//     margin: "0 auto",
//     padding: "40px 20px 64px",
//     color: "#e0e7ff",
//   },
//   header: { display: "flex", alignItems: "center", justifyContent: "space-between", paddingBottom: 20 },
//   backButton: {
//     background: "rgba(255,255,255,0.12)", width: 44, height: 44, border: 0, borderRadius: 999,
//     display: "grid", placeItems: "center", cursor: "pointer",
//   },
//   headerCenter: { display: "flex", alignItems: "center", flex: 1 },
//   headerBadge: {
//     display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.1)",
//     padding: "6px 12px", borderRadius: 16, margin: "0 auto 8px",
//   },
//   headerBadgeText: { color: "#fff", fontSize: 12, fontWeight: 500 },
//   headerTitle: { fontSize: 24, fontWeight: 700, color: "#fff", margin: 0, textAlign: "center" },
//   introCard: { marginBottom: 24, borderRadius: 16, overflow: "hidden" },
//   introGradient: {
//     padding: 24,
//     background: "linear-gradient(180deg, rgba(34,197,94,0.15), rgba(16,185,129,0.05))",
//     border: "1px solid rgba(255,255,255,0.1)",
//   },
//   introHeader: { display: "flex", alignItems: "center", marginBottom: 12, gap: 12 },
//   introTitle: { margin: 0, fontSize: 20, fontWeight: 700, color: "#fff", lineHeight: "28px" },
//   effectiveDate: { margin: 0, fontSize: 14, color: "#e0e7ff", textAlign: "center", fontStyle: "italic" },
//   sectionCard: { marginBottom: 16, borderRadius: 16, overflow: "hidden" },
//   sectionGradient: {
//     padding: 20,
//     background: "linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
//     border: "1px solid rgba(255,255,255,0.1)",
//   },
//   sectionHeader: {
//     display: "flex", alignItems: "center", gap: 12, paddingBottom: 8, marginBottom: 12,
//     borderBottom: "1px solid rgba(255,255,255,0.08)",
//   },
//   sectionTitle: { margin: 0, fontSize: 16, fontWeight: 700, color: "#fff" },
//   paragraph: { fontSize: 15, lineHeight: "22px", color: "#e0e7ff", margin: "0 0 10px" },
//   listItem: { fontSize: 15, lineHeight: "22px", color: "#e0e7ff", margin: "0 0 8px 8px" },
//   mailLink: { color: "#93c5fd", textDecoration: "underline" },
// };


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft, FileText, Shield, ClipboardList, Settings,
  Share2, CheckSquare, Lock, AlertTriangle, RefreshCw, Mail,
  Eye, Database, Users, MessageSquare
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
    background: "linear-gradient(135deg, rgba(34, 197, 94, 0.1) 0%, rgba(16, 185, 129, 0.05) 100%)",
  },
  introHeader: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
    marginBottom: "16px",
  },
  introIconContainer: {
    width: "56px",
    height: "56px",
    borderRadius: "16px",
    background: "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 8px 24px rgba(34, 197, 94, 0.3)",
  },
  introTitle: {
    margin: "0",
    fontSize: "28px",
    fontWeight: "800",
    color: "#1f2937",
    lineHeight: "1.3",
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
  listContainer: {
    display: "grid",
    gap: "12px",
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
    transform: "translateX(4px)",
  },
  listBullet: {
    width: "6px",
    height: "6px",
    borderRadius: "50%",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    marginTop: "8px",
    flexShrink: 0,
  },
  mailLink: {
    color: "#667eea",
    textDecoration: "none",
    fontWeight: "600",
    padding: "4px 8px",
    borderRadius: "6px",
    background: "rgba(102, 126, 234, 0.1)",
    transition: "all 0.2s ease",
  },
  mailLinkHover: {
    background: "rgba(102, 126, 234, 0.2)",
    transform: "translateY(-1px)",
  },
  footer: {
    textAlign: "center",
    padding: "48px 20px 20px",
    color: "rgba(255, 255, 255, 0.8)",
  },
  footerText: {
    fontSize: "16px",
    marginBottom: "16px",
    fontWeight: "500",
  },
  footerSubtext: {
    fontSize: "14px",
    opacity: "0.7",
  },
};

/* ============================ COMPONENTS ============================ */
const Section = ({ title, icon: Icon, children }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section 
      style={{
        ...styles.sectionCard,
        ...(isHovered ? styles.sectionCardHover : {})
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={styles.sectionGradient}>
        <div style={styles.sectionHeader}>
          <div style={styles.sectionIconContainer}>
            <Icon size={20} color="#ffffff" />
          </div>
          <h3 style={styles.sectionTitle}>{title}</h3>
        </div>
        {children}
      </div>
    </section>
  );
};

const Paragraph = ({ children }) => (
  <p style={styles.paragraph}>{children}</p>
);

const ListItem = ({ children }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      style={{
        ...styles.listItem,
        ...(isHovered ? styles.listItemHover : {})
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={styles.listBullet} />
      <span>{children}</span>
    </div>
  );
};

const ListContainer = ({ children }) => (
  <div style={styles.listContainer}>{children}</div>
);

/* ============================ MAIN COMPONENT ============================ */
export default function PrivacyPolicy() {
  const navigate = useNavigate();
  const [backButtonHovered, setBackButtonHovered] = useState(false);

  return (
    <div style={styles.container}>
      <main style={styles.contentWrap}>
        {/* Header */}
        <header style={styles.header}>
          <button 
            onClick={() => navigate(-1)} 
            style={{
              ...styles.backButton,
              ...(backButtonHovered ? styles.backButtonHover : {})
            }}
            onMouseEnter={() => setBackButtonHovered(true)}
            onMouseLeave={() => setBackButtonHovered(false)}
            aria-label="Go back"
          >
            <ArrowLeft size={24} color="#fff" />
          </button>

          <div style={styles.headerCenter}>
            <div style={styles.headerBadge}>
              <FileText size={16} color="#ffffff" />
              <span style={styles.headerBadgeText}>Legal Document</span>
            </div>
            <h1 style={styles.headerTitle}>Privacy Policy</h1>
          </div>

          <div style={{ width: "48px" }} />
        </header>

        {/* Introduction Card */}
        <div style={styles.introCard}>
          <div style={styles.introGradient}>
            <div style={styles.introHeader}>
              <div style={styles.introIconContainer}>
                <Shield size={28} color="#ffffff" />
              </div>
              <h2 style={styles.introTitle}>Privacy Policy for BlinqFix Official App</h2>
            </div>
            <p style={styles.effectiveDate}>Effective Date: May 1, 2025</p>
          </div>
        </div>

        {/* Sections */}
        <Section title="1. Introduction" icon={FileText}>
          <Paragraph>
            BlinqFix ("we," "our," or "us") explains how we collect, use, disclose, and safeguard
            your information when you use the BlinqFix official application. Your privacy is important
            to us, and we are committed to protecting your personal information.
          </Paragraph>
        </Section>

        <Section title="2. Information We Collect" icon={Database}>
          <Paragraph>We may collect the following types of information:</Paragraph>
          <ListContainer>
            <ListItem>Personal information (name, email, phone number, payment information)</ListItem>
            <ListItem>Device information (IP address, operating system, usage data)</ListItem>
            <ListItem>Location data (with your explicit consent)</ListItem>
            <ListItem>User-generated content (photos, videos, messages, reviews)</ListItem>
            <ListItem>Service preferences and booking history</ListItem>
          </ListContainer>
        </Section>

        <Section title="3. How We Use Your Information" icon={Settings}>
          <Paragraph>Your information is used to:</Paragraph>
          <ListContainer>
            <ListItem>Provide and manage our services effectively</ListItem>
            <ListItem>Process transactions and send confirmations</ListItem>
            <ListItem>Communicate about your account or services</ListItem>
            <ListItem>Improve the app functionality and user experience</ListItem>
            <ListItem>Comply with legal obligations and regulations</ListItem>
            <ListItem>Prevent fraud and ensure platform security</ListItem>
          </ListContainer>
        </Section>

        <Section title="4. Sharing Your Information" icon={Share2}>
          <Paragraph>We may share your information with:</Paragraph>
          <ListContainer>
            <ListItem>Trusted service providers who work on our behalf</ListItem>
            <ListItem>Business partners for enhanced features and service delivery</ListItem>
            <ListItem>Law enforcement agencies when required by law</ListItem>
            <ListItem>Professional service providers to complete your bookings</ListItem>
          </ListContainer>
        </Section>

        <Section title="5. Your Privacy Rights" icon={CheckSquare}>
          <Paragraph>You have the right to:</Paragraph>
          <ListContainer>
            <ListItem>Access and correct your personal information through the app</ListItem>
            <ListItem>Control location tracking in your device settings</ListItem>
            <ListItem>Opt out of marketing communications at any time</ListItem>
            <ListItem>Request deletion of your account and associated data</ListItem>
            <ListItem>Receive a copy of your personal data we hold</ListItem>
          </ListContainer>
        </Section>

        <Section title="6. Data Security" icon={Lock}>
          <Paragraph>
            We implement appropriate technical and organizational safeguards to protect your 
            personal information. However, no system is 100% secure, and we cannot guarantee 
            absolute security. We regularly review and update our security measures to maintain 
            the highest standards of protection.
          </Paragraph>
        </Section>

        <Section title="7. Children's Privacy" icon={AlertTriangle}>
          <Paragraph>
            Our service is not intended for children under 13 years of age. We do not knowingly 
            collect personal information from children under 13. If we become aware that we have 
            collected such information, we will take steps to delete it promptly.
          </Paragraph>
        </Section>

        <Section title="8. Changes to This Policy" icon={RefreshCw}>
          <Paragraph>
            We may update this privacy policy from time to time to reflect changes in our 
            practices or legal requirements. We will notify you of significant changes and 
            update the effective date accordingly. Continued use of our service constitutes 
            acceptance of any changes.
          </Paragraph>
        </Section>

        <Section title="9. Contact Us" icon={Mail}>
          <Paragraph>
            If you have questions about this privacy policy or our data practices, please contact us at{" "}
            <a 
              href="mailto:support@blinqfix.com" 
              style={styles.mailLink}
              onMouseEnter={(e) => Object.assign(e.target.style, styles.mailLinkHover)}
              onMouseLeave={(e) => Object.assign(e.target.style, styles.mailLink)}
            >
              support@blinqfix.com
            </a>
            . We're here to help and will respond to your inquiries promptly.
          </Paragraph>
        </Section>

        {/* Footer */}
        <div style={styles.footer}>
          <p style={styles.footerText}>
            Your privacy matters to us at BlinqFix
          </p>
          <p style={styles.footerSubtext}>
            This policy helps ensure transparency in how we handle your information
          </p>
        </div>
      </main>
    </div>
  );
}