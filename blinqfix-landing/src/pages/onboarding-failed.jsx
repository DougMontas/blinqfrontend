export const dynamic = "force-dynamic";
export default function FailedRedirect() {
  if (typeof window !== "undefined") {
    window.location.href = "blinqfix://onboarding-failed";
  }
  return (
    <html>
      <head>
        <meta httpEquiv="refresh" content="0;url=blinqfix://onboarding-failed" />
      </head>
      <body>
        <p>Redirecting back to the BlinqFix app...</p>
      </body>
    </html>
  );
}