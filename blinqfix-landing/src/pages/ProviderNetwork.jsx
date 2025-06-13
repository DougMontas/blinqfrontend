// src/pages/ProviderNetwork.jsx
import { useNavigate } from "react-router-dom";

export default function ProviderNetwork() {
  const nav = useNavigate();

  /* quick inline-style map */
  const s = {
    hero: {
      minHeight: "60vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "0 1.5rem",
      textAlign: "center",
      background:
        "radial-gradient(circle at 40% 50%, rgba(47,255,216,.35) 0%, rgba(119,75,255,.25) 60%, #0d0d0d 100%)",
    },
    heroTitle: {
      fontSize: "2.8rem",
      fontWeight: 800,
      marginBottom: ".5rem",
      maxWidth: "48rem",
    },
    heroSub: {
      fontSize: "1.125rem",
      color: "rgba(255,255,255,.7)",
      maxWidth: "42rem",
      margin: "0 auto",
    },
    btn: (variant) => ({
      padding: "0.75rem 1.5rem",
      borderRadius: "8px",
      fontWeight: 600,
      marginTop: "1.5rem",
      cursor: "pointer",
      border: "none",
      ...(variant === "primary"
        ? {
            background: "#2fffd8",
            color: "#0d0d0d",
            boxShadow: "0 8px 20px rgba(47,255,216,.3)",
          }
        : {
            background: "transparent",
            color: "#fff",
            border: "1px solid rgba(255,255,255,.25)",
          }),
    }),
    section: {
      padding: "4rem 1.5rem",
      maxWidth: "64rem",
      margin: "0 auto",
      textAlign: "center",
    },
    cardGrid: {
      display: "grid",
      gap: "1.5rem",
      gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
    },
    card: {
      padding: "1.5rem",
      border: "1px solid rgba(255,255,255,.1)",
      borderRadius: "1rem",
      background: "rgba(255,255,255,.05)",
      backdropFilter: "blur(6px)",
    },
    earningsTable: {
      width: "100%",
      borderCollapse: "collapse",
      marginTop: "1.5rem",
    },
    th: {
      border: "1px solid rgba(255,255,255,.1)",
      padding: ".5rem",
      background: "rgba(255,255,255,.05)",
    },
    td: {
      border: "1px solid rgba(255,255,255,.1)",
      padding: ".5rem",
    },
  };

  return (
    <main style={{ color: "#fff", background: "#0d0d0d" }}>
      {/* HERO */}
      <section style={s.hero}>
        <h1 style={s.heroTitle}>
          BlinqFix Pro Network <br/> Earn More On Your Terms
        </h1>
        <p style={s.heroSub}>
          Connect your trade skills to high-paying emergency jobs—fast. You pick
          the gigs, we deliver the jobs.
        </p>
        <button style={s.btn("primary")} onClick={() => nav("/pro")}>
        Install Blinqfix App
        </button>
      </section>

      {/* UNIVERSAL BENEFITS */}
      <section style={s.section}>
        <h2 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "2rem" }}>
          Universal Benefits for Every Trade
        </h2>
        <div style={s.cardGrid}>
          {[
            [
              "Zero Marketing Spend",
              "We ping you with job invites—no ads, no cold calls. You take the job.",
            ],
            ["Fast, Guaranteed Payouts", "93 % of invoices paid within 48 hrs."],
            ["Flexible Schedule", "Toggle availability log on/off anytime."],
            ["Transparent Earnings", "See net revenue before accepting."],
            ["24/7 Pro Support", "Contractor hotline solves on-site issues."],
          ].map(([title, body]) => (
            <article key={title} style={s.card}>
              <h3
                style={{
                  marginBottom: ".5rem",
                  color: "#2fffd8",
                  fontSize: "1.125rem",
                  fontWeight: 700,
                }}
              >
                {title}
              </h3>
              <p style={{ fontSize: ".95rem", color: "rgba(255,255,255,.8)" }}>
                {body}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* EARNINGS TABLE */}
      <section style={s.section}>
        <h2 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "2rem" }}>
          Provider Earnings Snapshot
        </h2>

        <table style={s.earningsTable}>
          <thead>
            <tr>
              {["Trade", "Avg Emergency Payout", "Your Net (93 %)"].map((h) => (
                <th key={h} style={s.th}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[
              ["Plumber", "$375", "$348.75"],
              ["HVAC Tech", "$540", "$502.20"],
              ["Roofer", "$650", "$604.50"],
              ["Electrician", "$320", "$297.60"],
              ["Locksmith", "$140", "$130.20"],
              ["Cleaner", "$420", "$390.60"],
              ["Handyman", "$165", "$153.45"],
              ["Labor Crew*", "$220", "$204.60"],
            ].map((row) => (
              <tr key={row[0]}>
                {row.map((cell) => (
                  <td key={cell} style={s.td}>
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <p
          style={{
            fontSize: ".9rem",
            color: "rgba(255,255,255,.7)",
            marginTop: ".5rem",
          }}
        >
          *Rate shown per worker. Price varies with location and peak times. 
        </p>
      </section>

      {/* FINAL CTA */}
      <section style={{ ...s.section, textAlign: "center" }}>
        <h2 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "1rem" }}>
          Start Earning in 5 Minutes
        </h2>
        <p style={s.heroSub}>
          Download the BlinqFix Provider App, complete verification, <br/> and watch
          job alerts roll in.
        </p>
        <section
          className="flex-center flex-col px-6 text-center"
          style={{ height: "4vh" }}
        >
          <div className="btn-row">
            <button
              className="btn btn-primary"
              onClick={() => alert("Launch booking flow")}
            >
              Install Blinqfix App
            </button>
            <button className="btn btn-outline" onClick={() => nav("/")}>
              Back
            </button>
          </div>
        </section>
      </section>

      <footer
        style={{
          borderTop: "1px solid rgba(255,255,255,.1)",
          padding: "2rem",
          textAlign: "center",
          fontSize: ".875rem",
          color: "rgba(255,255,255,.7)",
        }}
      >
        © {new Date().getFullYear()} BlinqFix
      </footer>
    </main>
  );
}
