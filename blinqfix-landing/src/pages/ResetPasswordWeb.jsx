import { useParams } from "react-router-dom";
import { useEffect } from "react";

export default function ResetPasswordWeb() {
  const { token } = useParams();

  useEffect(() => {
    // Redirect to app with deep link
    window.location.href = `blinqfix://reset-password/${token}`;
  }, [token]);

  return <p>Redirecting you to the BlinqFix app...</p>;
}
