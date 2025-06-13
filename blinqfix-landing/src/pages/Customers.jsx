// src/pages/CustomerMarketing.jsx
import { useNavigate } from 'react-router-dom';

export default function Customers() {
  const nav = useNavigate();

  const s = {
    hero: {
      minHeight: '60vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '0 1.5rem',
      background:
        'radial-gradient(circle at 40% 50%, rgba(119,75,255,.25) 0%, rgba(47,255,216,.25) 60%, #0d0d0d 100%)',
    },
    h1: {
      fontSize: '2.75rem',
      fontWeight: 800,
      marginBottom: '.6rem',
      maxWidth: '46rem',
    },
    sub: {
      fontSize: '1.125rem',
      color: 'rgba(255,255,255,.7)',
      maxWidth: '40rem',
      margin: '0 auto',
    },
    btn: {
      padding: '0.75rem 1.6rem',
      borderRadius: '8px',
      fontWeight: 600,
      border: 'none',
      cursor: 'pointer',
      background: '#2fffd8',
      color: '#0d0d0d',
      boxShadow: '0 8px 20px rgba(47,255,216,.3)',
      marginTop: '1.5rem',
    },
    section: {
      padding: '4rem 1.5rem',
      maxWidth: '64rem',
      margin: '0 auto',
      textAlign: 'center',
    },
    cardGrid: {
      display: 'grid',
      gap: '1.5rem',
      gridTemplateColumns: 'repeat(auto-fit,minmax(250px,1fr))',
      marginTop: '2rem',
    },
    card: {
      padding: '1.5rem',
      border: '1px solid rgba(255,255,255,.1)',
      borderRadius: '1rem',
      background: 'rgba(255,255,255,.05)',
      backdropFilter: 'blur(6px)',
    },
    title2: { fontSize: '2rem', fontWeight: 700, marginBottom: '2rem' },
    steps: {
      display: 'grid',
      gap: '1.5rem',
      marginTop: '1.5rem',
      gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))',
    },
    circle: {
      width: '2.6rem',
      height: '2.6rem',
      borderRadius: '50%',
      background: '#2fffd8',
      color: '#0d0d0d',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 700,
      margin: '0 auto .75rem',
    },
  };

  return (
    <main style={{ color: '#fff', background: '#0d0d0d' }}>
      {/* HERO */}
      <section style={s.hero}>
        <h1 style={s.h1}>Emergency Repairs in Minutes <br/> Fixed Price, No Stress</h1>
        <p style={s.sub}>
          Burst pipe? Power outage? Broken storefront window? BlinqFix connects
          you to a vetted pro <strong>now</strong>. Instant quote, live
          tracking, zero hidden fees.
        </p>
        <button
          style={s.btn}
          onClick={() => alert('Open customer booking flow')}
        >
          Get an Instant Quote
        </button>
      </section>

      {/* WHY CHOOSE BLINQFIX */}
      <section style={s.section}>
        <h2 style={s.title2}>Why Homeowners & Property Managers Choose BlinqFix</h2>
        <div style={s.cardGrid}>
          {[
            ['Instant Fixed-Price Quotes', 'No surprise add-ons or hourly upsells.'],
            ['Vetted Local Pros', 'Background-checked & licensed technicians only.'],
            ['Live ETA Tracking', 'Watch your pro drive to your door—Uber-style.'],
            ['24/7 Support', 'Real humans ready if anything goes sideways.'],
            ['Cash-Free Payments', 'Secure card on file—pay only when work is done.'],
          ].map(([h, p]) => (
            <article key={h} style={s.card}>
              <h3 style={{ marginBottom: '.5rem', color: '#2fffd8' }}>{h}</h3>
              <p style={{ fontSize: '.95rem', color: 'rgba(255,255,255,.8)' }}>
                {p}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      {/* <section style={s.section}>
        <h2 style={s.title2}>3-Step Rescue Plan</h2>
        <div style={s.steps}>
          {[
            'Tell us what’s wrong & snap a photo.',
            'Get an instant fixed-price quote.',
            'Track your pro & relax—pay after it’s fixed.',
          ].map((t, i) => (
            <div key={i}>
              <div style={s.circle}>{i + 1}</div>
              <p style={{ color: 'rgba(255,255,255,.85)' }}>{t}</p>
            </div>
          ))}
        </div>
      </section> */}

      {/* CTA */}
      <section style={{ ...s.section, textAlign: 'center' }}>
        <h2 style={s.title2}>Need to Fix It Fast?</h2>
        <p style={s.sub}>
          Tap “Get an Instant Quote,” choose a time, and watch help arrive.
        </p>
        <button style={s.btn} onClick={() => alert('Open booking flow')}>
        Install Blinqfix App
        </button>
      </section>
    </main>
  );
}
