// app/stripe/onboarding-success/page.js
export const dynamic = "force-dynamic";
export default function SuccessRedirect() {
  if (typeof window !== "undefined") {
    window.location.href = "blinqfix://onboarding-success";
  }
  return (
    <html>
      <head>
        <meta httpEquiv="refresh" content="0;url=blinqfix://onboarding-success" />
      </head>
      <body>
        <p>Redirecting back to the BlinqFix app...</p>
      </body>
    </html>
  );
}