import React from "react";

const styles = {
  main: {
    maxWidth: "760px",
    margin: "0 auto",
    padding: "32px 16px",
    fontFamily:
      "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  },
  header: { marginBottom: "32px" },
  h1: {
    fontSize: "2rem",
    fontWeight: 700,
    marginBottom: "8px",
  },
  lead: {
    color: "#555",
    fontSize: "0.98rem",
  },
  section: { marginBottom: "32px" },
  h2: {
    fontSize: "1.35rem",
    fontWeight: 600,
    marginBottom: "8px",
  },
  h3: {
    fontSize: "1.05rem",
    fontWeight: 600,
    marginTop: "16px",
    marginBottom: "4px",
  },
  list: {
    paddingLeft: "20px",
    marginTop: "4px",
    marginBottom: "12px",
  },
  listTight: {
    paddingLeft: "20px",
    marginTop: "4px",
    marginBottom: "8px",
  },
  muted: {
    color: "#555",
    fontSize: "0.95rem",
  },
  footer: {
    borderTop: "1px solid #eee",
    paddingTop: "12px",
    marginTop: "12px",
    color: "#777",
    fontSize: "0.85rem",
  },
};

const AccountDeletionPage = () => {
  const year = new Date().getFullYear();

  // Optional: set the page title for this route
  React.useEffect(() => {
    document.title = "BlinqFix Account & Data Deletion";
  }, []);

  return (
    <main style={styles.main}>
      {/* HEADER */}
      <header style={styles.header}>
        <h1 style={styles.h1}>BlinqFix Account &amp; Data Deletion</h1>
        <p style={styles.lead}>
          This page explains how to delete your BlinqFix account and how we
          handle your personal data when you request deletion.
        </p>
      </header>

      {/* 1. In-app deletion */}
      <section style={styles.section}>
        <h2 style={styles.h2}>1. Delete your account from inside the BlinqFix app</h2>
        <p style={{ marginBottom: "8px" }}>
          The fastest way to delete your account is directly from the BlinqFix
          mobile app. Once you submit a deletion request in the app, your
          account will be scheduled for permanent removal.
        </p>

        <h3 style={styles.h3}>For Customers</h3>
        <ol style={styles.list}>
          <li>
            Open the <strong>BlinqFix</strong> app on your device.
          </li>
          <li>
            Go to <strong>Profile</strong> or <strong>Account</strong>.
          </li>
          <li>Tap <strong>Settings</strong>.</li>
          <li>
            Select <strong>Account</strong> &gt; <strong>Delete account</strong>.
          </li>
          <li>Follow the on-screen instructions to confirm deletion.</li>
        </ol>

        <h3 style={{ ...styles.h3, marginTop: "8px" }}>For Service Pros</h3>
        <ol style={styles.list}>
          <li>Open the <strong>BlinqFix</strong> app.</li>
          <li>
            Go to your <strong>Profile</strong> or <strong>Account</strong> area.
          </li>
          <li>Tap <strong>Settings</strong>.</li>
          <li>
            Select <strong>Account</strong> &gt; <strong>Delete account</strong>.
          </li>
          <li>Review what will be deleted and confirm your request.</li>
        </ol>

        <p style={styles.muted}>
          If you have any open jobs, ongoing disputes, or pending payouts,
          deletion may be delayed until those items are resolved.
        </p>
      </section>

      {/* 2. If you can't access the app */}
      <section style={styles.section}>
        <h2 style={styles.h2}>2. If you can’t access the app</h2>
        <p style={{ marginBottom: "8px" }}>
          If you no longer have access to the email or device linked to your
          account, you can request deletion by contacting our support team.
        </p>

        <p style={{ marginBottom: "8px" }}>
          Please email us at:
          <br />
          <strong>support@blinqfix.com</strong>
        </p>

        <p style={{ marginBottom: "8px" }}>
          To help us verify your identity, include the following information in
          your email:
        </p>
        <ul style={styles.listTight}>
          <li>
            Subject line: <strong>Account Deletion Request</strong>
          </li>
          <li>Full name associated with your BlinqFix account</li>
          <li>Email address and phone number used in the app</li>
          <li>
            Whether you are a <strong>Customer</strong> or{" "}
            <strong>Service Pro</strong>
          </li>
          <li>
            Optional: any recent job ID or booking reference (if available)
          </li>
        </ul>

        <p style={styles.muted}>
          For your security, we may ask for additional information to confirm
          that you are the owner of the account before completing deletion.
        </p>
      </section>

      {/* 3. What happens when your account is deleted */}
      <section style={styles.section}>
        <h2 style={styles.h2}>3. What happens when your account is deleted</h2>
        <p style={{ marginBottom: "8px" }}>
          When your deletion request is processed, we will permanently remove or
          anonymize personal data that is no longer needed. This typically
          includes:
        </p>
        <ul style={styles.listTight}>
          <li>Your profile information (name, contact details, profile photo)</li>
          <li>Login credentials associated with your account</li>
          <li>Saved addresses and preferences</li>
          <li>
            Optional profile details you provided (bio, service categories, etc.)
          </li>
          <li>Push notification tokens linked to your device</li>
        </ul>

        <p style={{ marginBottom: "8px" }}>
          Some information may need to be retained for a limited period for
          legal, regulatory, fraud-prevention, or financial-record reasons. When
          this happens, we restrict the use of that data and keep it only for as
          long as required by applicable law.
        </p>

        <p style={styles.muted}>
          After deletion is complete, you will no longer be able to log in with
          that account. If you decide to use BlinqFix again, you will need to
          create a new account.
        </p>
      </section>

      {/* 4. Timelines */}
      <section style={styles.section}>
        <h2 style={styles.h2}>4. How long does it take?</h2>
        <p style={{ marginBottom: "8px" }}>
          We aim to begin processing account deletion requests as quickly as
          possible. In most cases:
        </p>
        <ul style={styles.listTight}>
          <li>
            In-app deletion requests are typically processed within{" "}
            <strong>30 days</strong>.
          </li>
          <li>
            Requests made by email are acknowledged within{" "}
            <strong>7 days</strong>, and then processed within{" "}
            <strong>30 days</strong> after verification.
          </li>
        </ul>

        <p style={styles.muted}>
          Timelines may vary if we need to retain certain information to resolve
          disputes, detect fraud, or comply with applicable laws.
        </p>
      </section>

      {/* 5. Payments and legal obligations */}
      <section style={styles.section}>
        <h2 style={styles.h2}>5. Data related to payments and legal obligations</h2>
        <p style={{ marginBottom: "8px" }}>
          BlinqFix uses third-party payment processors (such as Stripe) to
          securely handle payments and payouts. These providers may have their
          own legal obligations to retain certain transaction records.
        </p>
        <p style={{ marginBottom: 0 }}>
          Where required by law (for example, for tax, accounting, or
          anti-fraud purposes), we and our payment partners may retain limited
          transaction details even after your account is deleted. This data is
          restricted and is not used for marketing or new product purposes.
        </p>
      </section>

      {/* 6. Questions / contact */}
      <section style={styles.section}>
        <h2 style={styles.h2}>6. Questions about your privacy</h2>
        <p style={{ marginBottom: "8px" }}>
          If you have any questions about how BlinqFix handles your data, or
          about a specific deletion request, please contact us at:
        </p>
        <p style={{ marginBottom: "8px" }}>
          <strong>Email:</strong> support@blinqfix.com
          <br />
          <strong>Website:</strong>{" "}
          <a
            href="https://blinqfix.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://blinqfix.com
          </a>
        </p>

        <p style={{ ...styles.muted, marginBottom: 0 }}>
          You can also review our full{" "}
          <a
            href="https://blinqfix.com/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy Policy
          </a>{" "}
          for more information about how we collect, use, and protect your
          information.
        </p>
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        &copy; {year} BlinqFix. All rights reserved.
      </footer>
    </main>
  );
};

export default AccountDeletionPage;
