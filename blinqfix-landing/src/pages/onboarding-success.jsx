import { useEffect } from "react";
import { applyPageSeo } from "../utils/seo";

export default function SuccessRedirect() {
  useEffect(() => {
    const cleanupSeo = applyPageSeo({
      title: "Onboarding Success Redirect | BlinqFix",
      description: "Redirecting back to the BlinqFix app after onboarding.",
      canonical: "https://www.blinqfix.com/",
      robots: "noindex, nofollow",
      og: {
        url: "https://www.blinqfix.com/",
        title: "Onboarding Success Redirect | BlinqFix",
        description: "Utility redirect for the BlinqFix onboarding success flow.",
      },
      twitter: {
        title: "Onboarding Success Redirect | BlinqFix",
        description: "Utility redirect for the BlinqFix onboarding success flow.",
      },
    });

    const timeout = setTimeout(() => {
      window.location.href = "blinqfix://onboarding-success";
    }, 300); // 300ms delay to allow hydration or fallback

    return () => {
      clearTimeout(timeout);
      cleanupSeo();
    };
  }, []);

  return (
    <>
      <title>Redirecting...</title>
      <meta httpEquiv="refresh" content="0;url=blinqfix://onboarding-success" />
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h2>Redirecting...</h2>
        <p>If you're not redirected, <a href="blinqfix://onboarding-success">tap here to return to the app</a>.</p>
      </div>
    </>
  );
}
