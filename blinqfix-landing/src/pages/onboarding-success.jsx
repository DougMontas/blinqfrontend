// /onboarding-success/page.js
import { useEffect } from "react";

export default function SuccessRedirect() {
  useEffect(() => {
    const timeout = setTimeout(() => {
      window.location.href = "blinqfix://onboarding-success";
    }, 300); // small delay for hydration

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <head>
        <title>Redirecting...</title>
        <meta httpEquiv="refresh" content="0;url=blinqfix://onboarding-success" />
      </head>
      <body>
        <p>Redirecting you back to the BlinqFix app...</p>
      </body>
    </>
  );
}
