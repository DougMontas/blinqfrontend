import React from "react";
import { applyPageSeo } from "../utils/seo";

// src/pages/CustomerMarketing.jsx
export default function Customers() {
  React.useEffect(() => {
    return applyPageSeo({
      title: "Emergency Repairs in Minutes | Fixed-Price Help | BlinqFix",
      description:
        "Get fixed-price emergency repair help in minutes. BlinqFix connects homeowners and property managers with vetted local pros and live ETA tracking.",
      canonical: "https://www.blinqfix.com/customers",
      keywords:
        "fixed price home repair, emergency repairs, property manager repair app, live eta handyman, fast home service booking",
      og: {
        url: "https://www.blinqfix.com/customers",
        title: "Emergency Repairs in Minutes | BlinqFix",
        description:
          "Burst pipe, outage, or urgent repair? Get a vetted pro with fixed pricing and live tracking.",
      },
      twitter: {
        title: "Emergency Repairs in Minutes",
        description:
          "Fixed-price emergency repairs with vetted pros and live ETA tracking through BlinqFix.",
      },
      schema: [
        {
          id: "blinqfix-customers-schema",
          data: {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "BlinqFix Emergency Repairs",
            url: "https://www.blinqfix.com/customers",
            description:
              "Emergency repair landing page for homeowners and property managers.",
            mainEntity: {
              "@type": "Service",
              name: "Fixed-Price Emergency Repair Booking",
              serviceType: ["Emergency Plumbing", "Emergency Electrical", "Handyman"],
              areaServed: { "@type": "Country", name: "United States" },
              provider: {
                "@type": "Organization",
                name: "BlinqFix",
                url: "https://www.blinqfix.com/",
              },
            },
          },
        },
      ],
    });
  }, []);

  const s = {
    hero: {
      minHeight: '60vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '0 1.5rem',
      position: 'relative',
      overflow: 'hidden',
      background:
        'radial-gradient(circle at 40% 50%, rgba(119,75,255,.25) 0%, rgba(47,255,216,.25) 60%, #0d0d0d 100%)',
    },
    heroGlow: {
      position: 'absolute',
      inset: '-10% -10% auto',
      height: '82%',
      background:
        'radial-gradient(circle at 16% 22%, rgba(47,255,216,.24), transparent 32%), radial-gradient(circle at 82% 18%, rgba(119,75,255,.24), transparent 28%), radial-gradient(circle at 54% 90%, rgba(255,190,92,.12), transparent 34%)',
      filter: 'blur(22px)',
      opacity: 0.95,
      pointerEvents: 'none',
    },
    heroNetwork: {
      position: 'absolute',
      inset: 0,
      backgroundImage:
        'radial-gradient(circle at 14% 24%, rgba(255,255,255,.42) 0 2px, transparent 3px), radial-gradient(circle at 30% 58%, rgba(47,255,216,.55) 0 2.5px, transparent 3.5px), radial-gradient(circle at 50% 34%, rgba(119,75,255,.5) 0 2px, transparent 3px), radial-gradient(circle at 72% 24%, rgba(255,255,255,.32) 0 2px, transparent 3px), radial-gradient(circle at 84% 54%, rgba(255,190,92,.45) 0 2.5px, transparent 3.5px), linear-gradient(120deg, transparent 18%, rgba(47,255,216,.14) 18.4%, rgba(47,255,216,.14) 18.9%, transparent 19.2%), linear-gradient(148deg, transparent 45%, rgba(119,75,255,.14) 45.3%, rgba(119,75,255,.14) 45.8%, transparent 46.1%), linear-gradient(94deg, transparent 67%, rgba(255,255,255,.1) 67.2%, rgba(255,255,255,.1) 67.5%, transparent 67.8%)',
      opacity: 0.88,
      maskImage: 'radial-gradient(circle at center, white 0%, rgba(255,255,255,.92) 58%, transparent 88%)',
      pointerEvents: 'none',
    },
    h1: {
      fontSize: '2.75rem',
      fontWeight: 800,
      marginBottom: '.6rem',
      maxWidth: '46rem',
      position: 'relative',
      zIndex: 1,
    },
    sub: {
      fontSize: '1.125rem',
      color: 'rgba(255,255,255,.7)',
      maxWidth: '40rem',
      margin: '0 auto',
      position: 'relative',
      zIndex: 1,
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
      position: 'relative',
      zIndex: 1,
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
        <div style={s.heroGlow}></div>
        <div style={s.heroNetwork}></div>
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
