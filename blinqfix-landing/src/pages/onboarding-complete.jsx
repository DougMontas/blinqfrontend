// app/onboarding-complete/page.js
export const dynamic = "force-dynamic";

export default function OnboardingCompleteRedirect() {
  if (typeof window !== "undefined") {
    window.location.href = "blinqfix://onboarding-complete"; // Custom URI scheme
  }

  return (
    <html>
      <head>
        <meta httpEquiv="refresh" content="0;url=blinqfix://onboarding-complete" />
      </head>
      <body>
        <p>Redirecting back to the BlinqFix app...</p>
      </body>
    </html>
  );
}
