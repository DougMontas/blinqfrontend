// import React from "react";
// import {
//   Mail,
//   Phone,
//   MapPin,
//   Shield,
//   FileText,
//   HelpCircle,
//   Wrench,
//   Users,
//   Lock,
//   ExternalLink,
// } from "lucide-react";
// import "../../src/App.css";

// /**
//  * FooterWeb
//  * - Works in plain Vite + React
//  * - Uses CSS gradients (no expo-linear-gradient)
//  * - Mobile-first responsive layout
//  *
//  * Routes used below are examples:
//  *  - /legal/terms
//  *  - /legal/privacy
//  *  - /faq?tab=customer
//  *  - /faq?tab=pro
//  * Update them to match your router.
//  *
//  * If you use React Router, you can replace <a> with <Link to="...">.
//  */
// export default function FooterWeb() {
//   const year = new Date().getFullYear();

//   return (
//     <footer className="bf-footer">
//       <div className="bf-footer__container">
//         {/* Brand / mission */}
//         <div className="bf-col bf-brand">
//           <div className="bf-brand__wordmark">BlinqFix</div>
//           <p className="bf-brand__tagline">
//             Reliable pros. Transparent pricing. Faster fixes.
//           </p>

//           <div className="bf-badges">
//             <div className="bf-badge">
//               <Shield size={16} aria-hidden />
//               <span>Verified Professionals</span>
//             </div>
//             <div className="bf-badge">
//               <Lock size={16} aria-hidden />
//               <span>Secure Payments</span>
//             </div>
//           </div>

//           <div className="bf-contact">
//             <a className="bf-contact__item" href="mailto:support@blinqfix.com">
//               <Mail size={16} aria-hidden />
//               <span>support@blinqfix.com</span>
//             </a>
//             {/* Add your real phone when ready */}
//             {/* <a className="bf-contact__item" href="tel:+15551234567">
//               <Phone size={16} aria-hidden />
//               <span>(555) 123-4567</span>
//             </a> */}
//             <div className="bf-contact__item" role="text">
//               <MapPin size={16} aria-hidden />
//               <span>United States</span>
//             </div>
//           </div>
//         </div>

//         {/* For Customers */}
//         <nav className="bf-col" aria-label="For customers">
//           <h3 className="bf-col__title">
//             <Users size={18} aria-hidden /> For Customers
//           </h3>
//           <ul className="bf-links">
//             <li>
//               <a href="/faq?tab=customer">Customer FAQ</a>
//             </li>
//             <li>
//               <a href="/legal/terms">Terms of Use</a>
//             </li>
//             <li>
//               <a href="/legal/privacy">Privacy Policy</a>
//             </li>
//             <li>
//               {/* If your Terms page includes an SMS section, give it id="sms-policy" and link to it */}
//               <a href="/legal/terms#sms-policy">SMS & Phone Number Policy</a>
//             </li>
//           </ul>
//         </nav>

//         {/* For Service Pros */}
//         <nav className="bf-col" aria-label="For service pros">
//           <h3 className="bf-col__title">
//             <Wrench size={18} aria-hidden /> For Service Pros
//           </h3>
//           <ul className="bf-links">
//             <li>
//               <a href="/faq?tab=pro">Service Pro FAQ</a>
//             </li>
//             <li>
//               <a href="/legal/terms">Provider Terms</a>
//             </li>
//             <li>
//               <a href="/join-pro">
//                 Become a Pro <ExternalLink size={14} className="bf-link-icon" />
//               </a>
//             </li>
//           </ul>
//         </nav>

//         {/* Security & Legal */}
//         <nav className="bf-col" aria-label="Security & legal">
//           <h3 className="bf-col__title">
//             <Shield size={18} aria-hidden /> Security & Legal
//           </h3>
//           <ul className="bf-links">
//             <li>
//               <a href="/legal/privacy">Privacy Policy</a>
//             </li>
//             <li>
//               <a href="/legal/terms">Terms & Conditions</a>
//             </li>
//             <li>
//               <a href="/legal/terms#sms-policy">SMS Policy</a>
//             </li>
//             <li>
//               <a href="/legal">
//                 Legal Center <FileText size={14} className="bf-link-icon" />
//               </a>
//             </li>
//           </ul>
//         </nav>
//       </div>

//       {/* Bottom bar */}
//       <div className="bf-bottom">
//         <p className="bf-bottom__copy">
//           © {year} BlinqFix. All rights reserved.
//         </p>
//         <div className="bf-bottom__links">
//           <a href="/legal/terms">Terms</a>
//           <a href="/legal/privacy">Privacy</a>
//           <a href="/faq?tab=customer">Customer FAQ</a>
//           <a href="/faq?tab=pro">Pro FAQ</a>
//         </div>
//       </div>
//     </footer>
//   );
// }

// components/FooterWeb.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../../src/App.css";

export default function FooterWeb({ className = "" }) {
  const year = new Date().getFullYear();

  const LINKS = [
    { label: "Terms & Conditions", to: "/termsandconditions" },
    { label: "Privacy Policy",     to: "/privacypolicy" },
    { label: "FAQ",                to: "/faq" },
    { label: "Help",               href: "mailto:..." },
  ];

  return (
    <footer className={`bfw-footer ${className}`}>
      <nav className="bfw-links" aria-label="Footer">
        {LINKS.map((l, i) =>
          l.href ? (
            <a key={i} className="bfw-link" href={l.href}>
              {l.label}
            </a>
          ) : (
            <Link key={i} className="bfw-link" to={l.to}>
              {l.label}
            </Link>
          )
        )}
      </nav>
      <div className="bfw-copy">© {year} BlinqFix</div>
    </footer>
  );
}
