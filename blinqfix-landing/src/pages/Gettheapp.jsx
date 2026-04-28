import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import PricingSection from "../sections/PricingSection";
import blinqfixLogo from "../assets/blinqfix_logo.jpeg";

const PAGE_CSS = `
*{box-sizing:border-box;margin:0;padding:0}
:root{
  --orange:#F4520C;--orange-light:#FFF0EA;--orange-dark:#C23D06;
  --navy:#0B1628;--navy-mid:#1B2B45;--slate:#4A5872;--slate-light:#8A96A8;
  --cream:#FAFAF7;--white:#FFFFFF;--border:#E5E7EC;
  --green:#1A7F4B;
  --radius:12px;--radius-lg:20px;
  --shadow:0 2px 16px rgba(11,22,40,.08);--shadow-lg:0 8px 40px rgba(11,22,40,.14)
}
body{
  font-family:'DM Sans',sans-serif;
  font-size:16px;
  color:var(--navy);
  background:var(--cream);
  line-height:1.6
}
h1,h2,h3,h4,h5{font-family:'Syne',sans-serif;line-height:1.15}
a{text-decoration:none}
img{max-width:100%;display:block}
button{font:inherit}
.gettheapp-shell{background:var(--cream);color:var(--navy)}

nav{
  position:sticky;
  top:0;
  z-index:100;
  background:rgba(255,255,255,.96);
  backdrop-filter:blur(10px);
  border-bottom:1px solid var(--border);
  padding:0 2rem
}
.nav-inner{
  max-width:1160px;
  margin:0 auto;
  display:flex;
  align-items:center;
  justify-content:space-between;
  height:64px;
  gap:2rem
}
.logo{
  display:flex;
  align-items:center;
  line-height:0
}
.logo img{
  height:40px;
  width:auto;
  object-fit:contain;
  display:block;
  filter:brightness(0) saturate(100%);
}
.nav-tabs{
  display:flex;
  border:1px solid var(--border);
  border-radius:8px;
  overflow:hidden
}
.nav-tab{
  padding:6px 20px;
  font-size:.85rem;
  font-weight:500;
  border:none;
  cursor:pointer;
  font-family:'DM Sans',sans-serif;
  color:var(--slate);
  background:var(--white);
  display:inline-block
}
.nav-tab.active-pro{
  background:var(--navy);
  color:var(--white)
}
.btn-app-nav{
  display:flex;
  align-items:center;
  gap:6px;
  padding:8px 18px;
  border-radius:8px;
  background:var(--orange);
  color:var(--white);
  font-size:.85rem;
  font-weight:500;
  border:none;
  font-family:'DM Sans',sans-serif
}

/* HERO */
.app-hero{
  position:relative;
  overflow:hidden;
  isolation:isolate;
  background:
    radial-gradient(circle at 16% 18%, rgba(244,82,12,.26), transparent 26%),
    radial-gradient(circle at 84% 20%, rgba(59,130,246,.18), transparent 24%),
    linear-gradient(180deg, #13233c 0%, var(--navy) 62%, #091120 100%);
  padding:5rem 2rem;
  text-align:center
}
.app-hero-inner{
  position:relative;
  z-index:1;
  max-width:920px;
  margin:0 auto
}
.app-hero::before{
  content:"";
  position:absolute;
  inset:0;
  background:
    radial-gradient(circle at 14% 24%, rgba(255,255,255,.42) 0 2px, transparent 3px),
    radial-gradient(circle at 31% 58%, rgba(244,82,12,.52) 0 2.5px, transparent 3.5px),
    radial-gradient(circle at 50% 34%, rgba(255,255,255,.32) 0 2px, transparent 3px),
    radial-gradient(circle at 71% 24%, rgba(59,130,246,.44) 0 2.5px, transparent 3.5px),
    radial-gradient(circle at 85% 54%, rgba(255,255,255,.24) 0 2px, transparent 3px),
    linear-gradient(121deg, transparent 18%, rgba(244,82,12,.15) 18.4%, rgba(244,82,12,.15) 18.9%, transparent 19.2%),
    linear-gradient(149deg, transparent 45%, rgba(59,130,246,.12) 45.3%, rgba(59,130,246,.12) 45.8%, transparent 46.1%),
    linear-gradient(95deg, transparent 67%, rgba(255,255,255,.08) 67.2%, rgba(255,255,255,.08) 67.5%, transparent 67.8%);
  opacity:.9;
  mask-image:radial-gradient(circle at center, white 0%, rgba(255,255,255,.94) 60%, transparent 88%);
  pointer-events:none
}
.app-hero::after{
  content:"";
  position:absolute;
  inset:-12% -10% auto;
  height:78%;
  background:
    radial-gradient(circle at 18% 18%, rgba(244,82,12,.22), transparent 34%),
    radial-gradient(circle at 80% 18%, rgba(59,130,246,.16), transparent 28%),
    radial-gradient(circle at 55% 100%, rgba(255,255,255,.08), transparent 30%);
  filter:blur(22px);
  opacity:.95;
  pointer-events:none
}
.hero-badge{
  display:inline-flex;
  align-items:center;
  gap:6px;
  background:rgba(244,82,12,.15);
  color:#FF8152;
  padding:5px 14px;
  border-radius:100px;
  font-size:.8rem;
  font-weight:500;
  margin-bottom:1.25rem
}
.badge-dot{
  width:7px;
  height:7px;
  background:var(--orange);
  border-radius:50%;
  animation:pulse 2s infinite
}
@keyframes pulse{
  0%,100%{opacity:1;transform:scale(1)}
  50%{opacity:.6;transform:scale(1.3)}
}
.app-hero h1{
  font-size:clamp(2rem,4vw,3.2rem);
  color:var(--white);
  font-weight:800;
  margin-bottom:1rem
}
.app-hero h1 em{
  color:var(--orange);
  font-style:normal
}
.app-hero p{
  font-size:1.1rem;
  color:#D1DAE7;
  max-width:640px;
  margin:0 auto 2.5rem;
  line-height:1.7
}
.store-btns{
  display:flex;
  justify-content:center;
  gap:1rem;
  flex-wrap:wrap;
  margin-bottom:1rem
}
.store-btn{
  display:flex;
  align-items:center;
  gap:12px;
  background:var(--white);
  border-radius:12px;
  padding:12px 24px;
  transition:all .2s;
  border:none;
  cursor:pointer
}
.store-btn:hover{
  transform:translateY(-2px);
  box-shadow:0 8px 24px rgba(0,0,0,.2)
}
.store-icon{
  font-size:1.4rem;
  line-height:1;
  width:1.4rem;
  text-align:center;
  flex-shrink:0
}
.store-text{text-align:left}
.store-sub{font-size:.7rem;color:var(--slate)}
.store-name{
  font-size:1rem;
  font-weight:700;
  color:var(--navy);
  font-family:'Syne',sans-serif
}
.app-meta{
  font-size:.82rem;
  color:#D8E0EA;
  margin-top:1.25rem
}

/* RATING STRIP */
.rating-strip{
  background:var(--navy-mid);
  border-top:1px solid rgba(255,255,255,.08);
  padding:1.5rem 2rem;
  text-align:center
}
.rating-strip-inner{
  max-width:780px;
  margin:0 auto;
  display:flex;
  justify-content:center;
  gap:3rem;
  flex-wrap:wrap
}
.rating-item{text-align:center}
.rating-num{
  font-size:1.35rem;
  font-weight:800;
  color:var(--white);
  font-family:'Syne',sans-serif
}
.rating-label{
  font-size:.76rem;
  color:#B8C5D7
}

/* SECTIONS */
.section{padding:5rem 2rem}
.section.alt{background:var(--white)}
.section-inner{max-width:1160px;margin:0 auto}
.section-label{
  font-size:.78rem;
  font-weight:600;
  letter-spacing:.1em;
  text-transform:uppercase;
  color:var(--orange);
  margin-bottom:.75rem
}
.section-title{
  font-size:clamp(1.8rem,3vw,2.6rem);
  font-weight:800;
  color:var(--navy);
  margin-bottom:1rem
}
.section-sub{
  font-size:1.05rem;
  color:var(--slate);
  max-width:100%;
  line-height:1.7;
  text-align: center
}

/* FEATURES */
.app-features-grid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
  gap:1.5rem;
  margin-top:3rem
}
.app-feat{
  background:var(--white);
  border:1px solid var(--border);
  border-radius:var(--radius-lg);
  padding:2rem;
  text-align:center
}
.app-feat-icon{font-size:2rem;margin-bottom:1rem}
.app-feat-title{
  font-size:1rem;
  font-weight:700;
  color:var(--navy);
  margin-bottom:.5rem
}
.app-feat-desc{
  font-size:.88rem;
  color:var(--slate);
  line-height:1.65
}

/* DUAL CTA */
.dual-cta{
  padding:5rem 2rem;
  background:var(--white)
}
.dual-cta-inner{
  max-width:900px;
  margin:0 auto;
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:1.5rem
}
.cta-card{
  border-radius:var(--radius-lg);
  padding:2.5rem;
  position:relative;
  overflow:hidden
}
.cta-card.homeowner{background:var(--navy)}
.cta-card.pro{background:var(--orange)}
.cta-card h3{
  font-size:1.4rem;
  color:var(--white);
  font-weight:800;
  margin-bottom:.75rem
}
.cta-card p{
  font-size:.95rem;
  color:rgba(255,255,255,.9);
  margin-bottom:1.5rem;
  line-height:1.65
}
.cta-card .badge{
  display:inline-block;
  font-size:.72rem;
  font-weight:700;
  padding:3px 10px;
  border-radius:100px;
  margin-bottom:1rem;
  background:rgba(255,255,255,.12);
  color:rgba(255,255,255,.95)
}
.btn-card{
  display:inline-block;
  padding:12px 24px;
  border-radius:10px;
  font-size:.95rem;
  font-weight:700;
  font-family:'Syne',sans-serif;
  border:none;
  cursor:pointer;
  background:var(--white)
}
.btn-card.homeowner{color:var(--navy)}
.btn-card.pro{color:var(--orange)}

/* QR SECTION */
.qr-section{
  background:var(--cream);
  padding:4rem 2rem;
  text-align:center
}
.qr-grid{
  max-width:760px;
  margin:2rem auto 0;
  display:grid;
  grid-template-columns:repeat(2,minmax(0,1fr));
  gap:1.5rem
}
.qr-box{
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:flex-start;
  background:var(--white);
  border:1px solid var(--border);
  border-radius:var(--radius-lg);
  padding:2rem 1.5rem;
  gap:1rem;
  box-shadow:var(--shadow);
  min-height:100%
}
.qr-frame{
  width:172px;
  height:172px;
  flex-shrink:0;
  display:flex;
  align-items:center;
  justify-content:center;
  background:#ffffff;
  border:1px solid #DDE5EF;
  border-radius:16px;
  padding:10px;
  box-shadow:0 8px 20px rgba(11,22,40,.08);
  overflow:hidden
}
.qr-image{
  width:152px;
  height:152px;
  border-radius:8px;
  object-fit:contain;
  image-rendering:auto
}
.qr-title{
  font-size:1rem;
  font-weight:700;
  color:var(--navy);
  font-family:'Syne',sans-serif
}
.qr-label{
  font-size:.9rem;
  color:var(--slate);
  max-width:240px;
  text-align:center;
  line-height:1.55
}
.qr-helper{
  font-size:.8rem;
  font-weight:700;
  color:var(--navy-mid);
  text-align:center;
  letter-spacing:.02em
}

/* CTA BAND */
.cta-band{
  background:var(--orange);
  padding:4rem 2rem;
  text-align:center
}
.cta-band h2{
  font-size:clamp(1.8rem,3vw,2.4rem);
  color:var(--white);
  font-weight:800;
  margin-bottom:1rem
}
.cta-band p{
  font-size:1rem;
  color:rgba(255,255,255,.9);
  margin-bottom:2rem
}
.cta-btns{
  display:flex;
  justify-content:center;
  gap:1rem;
  flex-wrap:wrap
}
.btn-white{
  padding:14px 28px;
  border-radius:10px;
  background:var(--white);
  color:var(--orange);
  font-size:1rem;
  font-weight:700;
  border:none;
  cursor:pointer;
  font-family:'Syne',sans-serif;
  display:inline-block
}
.btn-white:hover{box-shadow:0 6px 20px rgba(0,0,0,.15)}
.btn-outline-white{
  padding:14px 28px;
  border-radius:10px;
  background:transparent;
  color:var(--white);
  font-size:1rem;
  font-weight:500;
  border:2px solid rgba(255,255,255,.7);
  cursor:pointer;
  font-family:'DM Sans',sans-serif;
  display:inline-block
}
.btn-outline-white:hover{border-color:var(--white)}

/* FOOTER */
.page-footer{
  background:var(--navy);
  padding:3rem 2rem 2rem
}
.footer-inner{max-width:1160px;margin:0 auto}
.footer-top{
  display:grid;
  grid-template-columns:2fr 1fr 1fr 1fr;
  gap:2rem;
  margin-bottom:2.5rem
}
.footer-logo{
  display:flex;
  align-items:center;
  line-height:0
}
.footer-logo img{
  height:34px;
  width:auto;
  object-fit:contain;
  display:block
}
.footer-brand p{
  font-size:.88rem;
  color:#AAB8CA;
  margin-top:.75rem;
  max-width:260px;
  line-height:1.65
}
.footer-col h4{
  font-size:.8rem;
  font-weight:700;
  color:#D7E0EC;
  text-transform:uppercase;
  letter-spacing:.08em;
  margin-bottom:1rem
}
.footer-col a{
  display:block;
  font-size:.88rem;
  color:#B8C5D4;
  text-decoration:none;
  margin-bottom:.5rem;
  transition:color .15s
}
.footer-col a:hover{color:var(--white)}
.footer-bottom{
  border-top:1px solid rgba(255,255,255,.08);
  padding-top:1.5rem;
  display:flex;
  justify-content:space-between;
  align-items:center;
  flex-wrap:wrap;
  gap:1rem
}
.footer-bottom p{
  font-size:.8rem;
  color:#AAB8CA
}
.footer-links{
  display:flex;
  gap:1.5rem;
  flex-wrap:wrap
}
.footer-links a{
  font-size:.8rem;
  color:#B8C5D4;
  text-decoration:none
}
.footer-links a:hover{color:#FFFFFF}

@media(max-width:768px){
  .dual-cta-inner,.qr-grid{grid-template-columns:1fr}
  .rating-strip-inner{gap:1.5rem}
  .footer-top{grid-template-columns:1fr 1fr}
  .nav-tabs{display:none}
}
@media(max-width:640px){
  nav,.app-hero,.rating-strip,.section,.dual-cta,.qr-section,.cta-band,.page-footer{
    padding-left:1rem;
    padding-right:1rem
  }
  .footer-top{grid-template-columns:1fr}
  .qr-frame{
    width:154px;
    height:154px
  }
  .qr-image{
    width:134px;
    height:134px
  }
}
`;

const features = [
  {
    icon: "⚡",
    title: "Fast Booking",
    desc: "Request help quickly for emergency and scheduled home repairs without the usual phone tag.",
  },
  {
    icon: "📍",
    title: "Live Tracking",
    desc: "Follow job progress and arrival updates in one place instead of waiting around for vague windows.",
  },
  {
    icon: "💬",
    title: "In-App Messaging",
    desc: "Share photos, job details, and updates inside the same conversation thread tied to the repair.",
  },
  {
    icon: "🧾",
    title: "Receipts & Records",
    desc: "Keep a clearer history of repairs, payments, and home-service activity in one app.",
  },
];

function ensureMeta(selector, attrs, tagName = "meta") {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement(tagName);
    document.head.appendChild(el);
  }
  Object.entries(attrs).forEach(([key, value]) => el.setAttribute(key, value));
}

const GetTheAppPage = () => {
  useEffect(() => {
    document.title = "Download BlinqFix App | iOS & Android Home Services App";

    ensureMeta('meta[name="description"]', {
      name: "description",
      content:
        "Download the BlinqFix app for iOS or Android to request home-service help fast or explore the platform as a service pro.",
    });
    ensureMeta('meta[name="robots"]', {
      name: "robots",
      content: "index, follow",
    });
    ensureMeta('meta[property="og:type"]', {
      property: "og:type",
      content: "website",
    });
    ensureMeta('meta[property="og:url"]', {
      property: "og:url",
      content: "https://www.blinqfix.com/gettheapp",
    });
    ensureMeta('meta[property="og:title"]', {
      property: "og:title",
      content: "Download BlinqFix | Home Services App for iOS & Android",
    });
    ensureMeta('meta[property="og:description"]', {
      property: "og:description",
      content:
        "Download BlinqFix and request home-service help fast on iOS or Android.",
    });
    ensureMeta('meta[name="twitter:card"]', {
      name: "twitter:card",
      content: "summary_large_image",
    });
    ensureMeta('meta[name="twitter:title"]', {
      name: "twitter:title",
      content: "Download BlinqFix | Home Services App",
    });
    ensureMeta('meta[name="twitter:description"]', {
      name: "twitter:description",
      content:
        "Download BlinqFix and request home-service help fast on iOS or Android.",
    });
    ensureMeta(
      'link[rel="canonical"]',
      {
        rel: "canonical",
        href: "https://www.blinqfix.com/gettheapp",
      },
      "link"
    );

    const scriptId = "blinqfix-gettheapp-schema";
    let schema = document.getElementById(scriptId);
    if (!schema) {
      schema = document.createElement("script");
      schema.type = "application/ld+json";
      schema.id = scriptId;
      document.head.appendChild(schema);
    }
    schema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "MobileApplication",
      name: "BlinqFix",
      url: "https://www.blinqfix.com/gettheapp",
      description:
        "Mobile app for requesting home-service help and managing repair jobs.",
      applicationCategory: "LifestyleApplication",
      operatingSystem: "iOS, Android",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      publisher: {
        "@type": "Organization",
        name: "BlinqFix",
        url: "https://www.blinqfix.com",
      },
    });

    return () => {
      const existing = document.getElementById("blinqfix-gettheapp-schema");
      if (existing) existing.remove();
    };
  }, []);

  return (
    <div className="gettheapp-shell">
      <style>{PAGE_CSS}</style>

      <nav>
        <div className="nav-inner">
          <Link to="/" className="logo" aria-label="BlinqFix home">
            <img src={blinqfixLogo} alt="BlinqFix" />
          </Link>
          <div className="nav-tabs">
            <Link to="/gettheapp" className="nav-tab">
              For Homeowners
            </Link>
            <Link to="/getjobs" className="nav-tab">
              For Service Pros
            </Link>
          </div>
          <Link to="/gettheapp" className="btn-app-nav">
            📱 Get the App
          </Link>
        </div>
      </nav>

      <main>
        <section className="app-hero">
          <div className="app-hero-inner">
            <div className="hero-badge">
              <span className="badge-dot"></span> Available on iOS & Android
            </div>
            <h1>Get the BlinqFix App</h1>
            <p>
              Book or accept jobs on the go. Download BlinqFix for iOS and
              Android.
            </p>

            <div className="store-btns">
              <a
                href="https://apps.apple.com/us/app/blinqfix-app/id6747390132"
                target="_blank"
                rel="noopener noreferrer"
                className="store-btn"
                aria-label="Download on the App Store"
              >
                <span className="store-icon">&#63743;</span>
                <div className="store-text">
                  <div className="store-sub">Download on the</div>
                  <div className="store-name">App Store</div>
                </div>
              </a>

              <a
                href="https://play.google.com/store/apps/details?id=com.blinqfix.app"
                target="_blank"
                rel="noopener noreferrer"
                className="store-btn"
                aria-label="Get it on Google Play"
              >
                <span className="store-icon">&#9654;</span>
                <div className="store-text">
                  <div className="store-sub">Get it on</div>
                  <div className="store-name">Google Play</div>
                </div>
              </a>
            </div>

            <p className="app-meta">
              Free to download · iOS and Android · Use it to request service or
              explore the platform
            </p>
          </div>
        </section>

        <div className="rating-strip">
          <div className="rating-strip-inner">
            <div className="rating-item">
              <div className="rating-num">iOS</div>
              <div className="rating-label">Available now</div>
            </div>
            <div className="rating-item">
              <div className="rating-num">Android</div>
              <div className="rating-label">Available now</div>
            </div>
            <div className="rating-item">
              <div className="rating-num">1 App</div>
              <div className="rating-label">From request to payment</div>
            </div>
            <div className="rating-item">
              <div className="rating-num">Fast</div>
              <div className="rating-label">Better than phone tag</div>
            </div>
          </div>
        </div>

        <section className="section">
          <div className="section-inner">
            <p className="section-label">App Features</p>
            <h2 className="section-title">Everything You Need in One Place</h2>
            <p className="section-sub">
              Built for homeowners who need repairs handled faster and with less
              friction.
            </p>

            <div className="app-features-grid">
              {features.map((feature) => (
                <div className="app-feat" key={feature.title}>
                  <div className="app-feat-icon">{feature.icon}</div>
                  <h3 className="app-feat-title">{feature.title}</h3>
                  <p className="app-feat-desc">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <PricingSection ctaCustomerHref="/customer" ctaProHref="/pro" />

        <section className="dual-cta">
          <div className="dual-cta-inner">
            <div className="cta-card homeowner">
              <span className="badge">For Homeowners</span>
              <h3>Need a Repair?</h3>
              <p>
                Use the app to request help, track progress, and keep
                communication and payment in one place.
              </p>
              <Link to="/gettheapp" className="btn-card homeowner">
                I'm a Homeowner →
              </Link>
            </div>

            <div className="cta-card pro">
              <span className="badge">For Service Pros</span>
              <h3>Want Real Jobs?</h3>
              <p>
                Explore how BlinqFix works for service pros and see whether the
                platform fits your trade and market.
              </p>
              <Link to="/getjobs" className="btn-card pro">
                I'm a Pro →
              </Link>
            </div>
          </div>
        </section>

        <section className="qr-section">
          <div className="section-inner">
            <p className="section-label">Scan to Download</p>
            <h2 className="section-title">Download from Your Phone</h2>
            <p className="section-sub" style={{ textAlign: "center" }}>
              Use the store links above or scan the QR code that matches your
              device.
            </p>

            <div className="qr-grid">
              <div className="qr-box">
                <div className="qr-frame">
                  <img
                    src="/blinqfix_app_qr.png"
                    alt="Scan to download BlinqFix on the App Store"
                    className="qr-image"
                    width="152"
                    height="152"
                  />
                </div>
                <p className="qr-title">iPhone / iPad</p>
                <p className="qr-label">
                  Point your camera at this code to open the App Store download
                  page.
                </p>
                <p className="qr-helper">iOS App Store QR</p>
              </div>

              <div className="qr-box">
                <div className="qr-frame">
                  <img
                    src="/blinqfix_playstore_qr.png"
                    alt="Scan to download BlinqFix on Google Play"
                    className="qr-image"
                    width="152"
                    height="152"
                  />
                </div>
                <p className="qr-title">Android</p>
                <p className="qr-label">
                  Point your camera at this code to open the Google Play
                  download page.
                </p>
                <p className="qr-helper">Google Play QR</p>
              </div>
            </div>
          </div>
        </section>

        <div className="cta-band">
          <h2>
            Whether You Own a Home or Swing a Wrench — BlinqFix Has You Covered.
          </h2>
          <p>
            Choose the homeowner flow if you need help now, or visit the pro
            page to learn how the platform works for service pros.
          </p>
          <div className="cta-btns">
            <Link to="/gettheapp" className="btn-white">
              I'm a Homeowner
            </Link>
            <Link to="/getjobs" className="btn-outline-white">
              I'm a Service Pro
            </Link>
          </div>
        </div>
      </main>

      <footer className="page-footer">
        <div className="footer-inner">
          <div className="footer-top">
            <div className="footer-brand">
              <div className="footer-logo">
                <img src={blinqfixLogo} alt="BlinqFix" />
              </div>
              <p>
                Emergency and scheduled home services with a cleaner booking
                flow for homeowners and service pros.
              </p>
            </div>
            {/* <div className="footer-col">
              <h4>Homeowners</h4>
              <Link to="/customer">Book a Pro</Link>
              <Link to="/">Home</Link>
              <Link to="/gettheapp">Download App</Link>
              <Link to="/faq">FAQ</Link>
            </div>
            <div className="footer-col">
              <h4>Service Pros</h4>
              <Link to="/getjobs">Join as a Pro</Link>
              <Link to="/pro">Pro Sign Up</Link>
              <Link to="/getjobs">How Pros Earn</Link>
              <Link to="/gettheapp">Get the App</Link>
            </div> */}
            {/* <div className="footer-col">
              <h4>Company</h4>
              <Link to="/privacypolicy">Privacy Policy</Link>
              <Link to="/termsandconditions">Terms of Service</Link>
              <Link to="/faq">FAQ</Link>
            </div> */}
          </div>
          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} BlinqFix. All rights reserved.</p>
            <div className="footer-links">
              <Link to="/privacypolicy">Privacy Policy</Link>
              <Link to="/termsandconditions">Terms of Service</Link>
              <Link to="/faq">FAQ</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GetTheAppPage;
