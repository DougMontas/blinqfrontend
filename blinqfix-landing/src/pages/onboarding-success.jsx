// /onboarding-success/page.js
// import { useEffect } from "react";

// export default function SuccessRedirect() {
//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       window.location.href = "blinqfix://onboarding-success";
//     }, 300); // small delay for hydration

//     return () => clearTimeout(timeout);
//   }, []);

//   return (
//     <>
//       <head>
//         <title>Redirecting...</title>
//         <meta httpEquiv="refresh" content="0;url=blinqfix://onboarding-success" />
//       </head>
//       <body>
//         <p>Redirecting you back to the BlinqFix app...</p>
//       </body>
//     </>
//   );
// }


import { useEffect } from "react";

export default function SuccessRedirect() {
  useEffect(() => {
    const timeout = setTimeout(() => {
      window.location.href = "blinqfix://onboarding-success";
    }, 300); // 300ms delay to allow hydration or fallback

    return () => clearTimeout(timeout);
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
