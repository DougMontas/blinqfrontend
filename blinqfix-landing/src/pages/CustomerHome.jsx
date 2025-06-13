import { useNavigate } from "react-router-dom";
import AppBanner from "../sections/AppBanner";
import logo from "../assets/blinqfix_logo.jpeg";
import Customers from "./Customers"

export default function CustomerHome() {
  const nav = useNavigate();

  return (
    <main>
      {/* HERO */}
      <section
        className="hero flex-center flex-col full-vh px-6 text-center"
        style={{ height: "60vh" }}
      >
        <div className="logo-bg" style={{ backgroundImage: `url(${logo})` }} />
        <div className="hero-bg" />
        <div className="cube" />

        <h1 className="hero-title">Need it done right now?</h1>
        <p className="hero-sub">
          Book a plumber, electrician or handyman in{" "}
          <strong>&nbsp;seconds</strong>.
        </p>
        <div className="btn-row">
          <button
            className="btn btn-primary"
            onClick={() => alert("Launch booking flow")}
          >
            Get a Service Pro
          </button>
          <button className="btn btn-outline" onClick={() => nav("/")}>
            Back
          </button>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="container px-6 py-16">
        <h2 className="section-title">How BlinqFix Works</h2>
        <div className="step-grid">
          {[
            "Describe your emergency",
            "Receive a fixed-price quote",
            "Track your pro en-route",
          ].map((txt, i) => (
            <div className="step" key={i}>
              <div className="step-circle">{i + 1}</div>
              <p>{txt}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="container px-6 py-16">
        <h2 className="section-title">Customers love BlinqFix</h2>
        <div className="card-grid">
          <blockquote className="card">
            “My AC died on a Sunday—tech arrived in 25 min.” — <i>Sophia M.</i>
          </blockquote>
          <blockquote className="card">
            “Fixed-price quote saved us from surprise fees.” — <i>Marco R.</i>
          </blockquote>
          <blockquote className="card">
            “I am a property manager. I am now worry free with all my emergency
            calls” — <i>Brian T.</i>
          </blockquote>
        </div>
        <h2
          className="section-title"
          style={{ marginTop: "1rem", fontStyle: "italic" }}
        >
          All service professionals are licensed and insured
        </h2>
        <AppBanner />
      </section>

      <Customers />

      <footer className="footer">© {new Date().getFullYear()} BlinqFix</footer>
    </main>
  );
}
