// pages/reset-password/[token].js
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function RedirectToApp() {
  const router = useRouter();
  const { token } = router.query;

  useEffect(() => {
    if (token) {
      const deepLink = `blinqfix://reset-password/${token}`;
      window.location.href = deepLink;
    }
  }, [token]);

  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h2>Redirecting to the BlinqFix App...</h2>
      <p>If nothing happens, open the app and enter your new password.</p>
    </div>
  );
}
