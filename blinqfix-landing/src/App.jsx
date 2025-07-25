import { Routes, Route, Navigate } from "react-router-dom";
import Landing from "./Landing";
import CustomerHome from "./pages/CustomerHome";
import ProHome from "./pages/ProHome";
import ProviderNetwork from "./pages/ProviderNetwork";
import Customers from "./pages/Customers";
import SuccessRedirect from "./pages/onboarding-success";
import FailedRedirect from "./pages/onboarding-failed";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/customer" element={<CustomerHome />} />
      <Route path="/pro" element={<ProHome />} />
      <Route path="/customers" element={<Customers />} />
      <Route path="/pros" element={<ProviderNetwork />} />
      <Route path="/onboarding-success" element={<SuccessRedirect />} />
      <Route path="/onboarding-failed" element={<FailedRedirect />} />
      <Route path="/reset-password/:token" element={<ResetPasswordWeb />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
