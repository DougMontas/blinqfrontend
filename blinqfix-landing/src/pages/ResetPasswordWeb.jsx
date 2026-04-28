import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { applyPageSeo } from "../utils/seo";

export default function ResetPasswordWeb() {
  const { token } = useParams();

  useEffect(() => {
    const cleanupSeo = applyPageSeo({
      title: "Reset Password Redirect | BlinqFix",
      description: "Redirecting back to the BlinqFix app to reset your password.",
      canonical: "https://www.blinqfix.com/",
      robots: "noindex, nofollow",
      og: {
        url: "https://www.blinqfix.com/",
        title: "Reset Password Redirect | BlinqFix",
        description: "Utility redirect for resetting a BlinqFix password in-app.",
      },
      twitter: {
        title: "Reset Password Redirect | BlinqFix",
        description: "Utility redirect for resetting a BlinqFix password in-app.",
      },
    });

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      window.location.href = `blinqfix://reset-password/${token}`;
      ;
    } else {
      // Optionally redirect to a helpful page
      window.location.href = `https://blinqfix.com/download`; // or home
    }

    return cleanupSeo;
  }, [token]);

  return <p>Redirecting you to the BlinqFix app...</p>;
}
