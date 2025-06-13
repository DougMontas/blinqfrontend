import { useNavigate } from 'react-router-dom';
import logo from '../assets/blinqfix_logo.jpeg';
import AppBanner from "../sections/AppBanner";


export default function ProHome() {
  const nav = useNavigate();

  return (
    <main>
     
      {/* HERO */}
      
      <section
        className="hero flex-center flex-col full-vh px-6 text-center"
        style={{ height: '60vh' }}
      >
        <div className="logo-bg"
            style={{ backgroundImage: `url(${logo})` }}/>
        <div className="hero-bg" />
        <div className="cube" />

        <h1 className="hero-title">Earn more. Waste less time.</h1>
        <h1 className="hero-title">Get Jobs - Not Leads.</h1>
        <p className="hero-sub">
          Fill your downtime with high-pay local jobs—on <strong>your</strong> terms.
        </p>

        <div className="btn-row">
          <button
            className="btn btn-primary"
            style={{color: 'black'}}
            onClick={() => alert('Launch pro signup flow')}
          >
            Become a BlinqFix Pro
          </button>
          <button className="btn btn-primary !important" style={{background: 'red', color:'white'}} onClick={() => nav('/pros')}>
            Tell Me More
          </button>
          <button className="btn btn-outline" onClick={() => nav('/')}>
            Back
          </button>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="container px-6 py-16">
        <h2 className="section-title">Why Pros choose BlinqFix</h2>
        <div className="card-grid">
          <article className="card benefit-card">
            <h3>Instant payouts</h3>
            <p>Funds hit your bank within 24 hours—no invoices.</p>
          </article>
          <article className="card benefit-card">
            <h3>No monthly fees option available</h3>
            <p>Only a small success fee after you complete a job.</p>
          </article>
          <article className="card benefit-card">
            <h3>Flexible schedule</h3>
            <p>Toggle availability on/off anytime in the app.</p>
          </article>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="container px-6 py-16">
        <h2 className="section-title">Customers love BlinqFix</h2>
        <div className="card-grid">
          <blockquote className="card">
            “It's been a pleasure getting jobs. real jobs!! I am now making real money.” — <i>Carlos J.</i>
          </blockquote>
          <blockquote className="card">
            “They are changing the emergency serivce calls. Easy to use app. I only get the job invite once the job is paid for.” — <i>Anthony U.</i>
          </blockquote>
          <blockquote className="card">
            “It's the uber of the trade world. No need to chase leads, no need to do an estimate, payment is always on time. I am now looking to sign up for another zipcode.” — <i>Jerome T.</i>
          </blockquote>
        </div>
          <AppBanner />
      </section>

      <footer className="footer">© {new Date().getFullYear()} BlinqFix</footer>
    </main>
  );
}
