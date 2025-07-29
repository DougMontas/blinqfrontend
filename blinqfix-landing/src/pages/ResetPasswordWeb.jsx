// import { useParams } from "react-router-dom";
// import { useEffect } from "react";

// export default function ResetPasswordWeb() {
//   const { token } = useParams();

//   useEffect(() => {
//     // Redirect to app with deep link
//     // window.location.href = `blinqfix://reset-password/${token}`;
//     window.location.href = `blinqfix://ResetPasswordScreen?token=${token}`
//   }, [token]);

//   return <p>Redirecting you to the BlinqFix app...</p>;
// }


import { useParams } from "react-router-dom";
import { useEffect } from "react";

export default function ResetPasswordWeb() {
  const { token } = useParams();

  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      window.location.href = `blinqfix://reset-password/${token}`;
      ;
    } else {
      // Optionally redirect to a helpful page
      window.location.href = `https://blinqfix.com/download`; // or home
    }
  }, [token]);

  return <p>Redirecting you to the BlinqFix app...</p>;
}
