import { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react"; 

const Landing = lazy(() => import("./Landing"));
const CustomerHome = lazy(() => import("./pages/CustomerHome"));
const ProHome = lazy(() => import("./pages/ProHome"));
const ProviderNetwork = lazy(() => import("./pages/ProviderNetwork"));
const Customers = lazy(() => import("./pages/Customers"));
const SuccessRedirect = lazy(() => import("./pages/onboarding-success"));
const FailedRedirect = lazy(() => import("./pages/onboarding-failed"));
const ResetPasswordWeb = lazy(() => import("./pages/ResetPasswordWeb"));
const TermsAndConditions = lazy(() => import("./pages/TermsAndConditions"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicyWeb"));
const FAQ = lazy(() => import("./pages/FAQ"));
const EmergencyMiamiPage = lazy(() => import("./pages/Gettheapp"));
const ServiceProLandingPage = lazy(() => import("./pages/GetJobs"));
const AccountDeletionPage = lazy(() => import("./pages/AccountDeletion.jsx"));

export default function App() {
  return (
    <>
      <Suspense fallback={<div style={{ minHeight: "100vh" }} aria-busy="true" />}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/customer" element={<CustomerHome />} />
          <Route path="/pro" element={<ProHome />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/pros" element={<ProviderNetwork />} />
          <Route path="/termsandconditions" element={<TermsAndConditions />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/onboarding-success" element={<SuccessRedirect />} />
          <Route path="/onboarding-failed" element={<FailedRedirect />} />
          <Route path="/reset-password/:token" element={<ResetPasswordWeb />} />
          <Route path="/gettheapp" element={<EmergencyMiamiPage />} />
          <Route path="/getjobs" element={<ServiceProLandingPage />} />
          <Route path="/account-deletion" element={<AccountDeletionPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
      <Analytics />
    </>
  );
}
