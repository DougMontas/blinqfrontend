// export default ServiceProLandingPage;

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import PricingSection from "../sections/PricingSection";
import blinqfixLogo from "../assets/blinqfix_logo.jpeg";
import AppBanner from "../sections/AppBanner";

const PAGE_CSS = `
*{box-sizing:border-box;margin:0;padding:0}
:root{
  --orange:#F4520C;--orange-light:#FFF0EA;--orange-dark:#C23D06;
  --navy:#0B1628;--navy-mid:#1B2B45;--slate:#4A5872;--slate-light:#8A96A8;
  --cream:#FAFAF7;--white:#FFFFFF;--border:#E5E7EC;
  --green:#1A7F4B;--green-light:#EAF5EF;
  --radius:12px;--radius-lg:20px;
  --shadow:0 2px 16px rgba(11,22,40,.08);--shadow-lg:0 8px 40px rgba(11,22,40,.14)
}
html{scroll-behavior:smooth}
body{font-family:'DM Sans',sans-serif;font-size:16px;color:var(--navy);background:var(--cream);line-height:1.6}
h1,h2,h3,h4,h5{font-family:'Syne',sans-serif;line-height:1.15}
a{text-decoration:none}
img{max-width:100%;display:block}
button{font:inherit}
.getjobs-shell{background:var(--cream);color:var(--navy)}
nav{position:sticky;top:0;z-index:100;background:rgba(255,255,255,.96);backdrop-filter:blur(10px);border-bottom:1px solid var(--border);padding:0 2rem}
.nav-inner{max-width:1160px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;height:64px;gap:2rem}
.logo{display:flex;align-items:center;line-height:0}
.logo img{height:40px;width:auto;object-fit:contain;display:block;filter:brightness(0) saturate(100%)}
.nav-tabs{display:flex;border:1px solid var(--border);border-radius:8px;overflow:hidden}
.nav-tab{padding:6px 20px;font-size:.85rem;font-weight:500;border:none;cursor:pointer;font-family:'DM Sans',sans-serif;color:var(--slate);background:var(--white);display:inline-block}
.nav-tab.active{background:var(--navy);color:var(--white)}
.btn-app{display:flex;align-items:center;gap:6px;padding:8px 18px;border-radius:8px;background:var(--orange);color:var(--white);font-size:.85rem;font-weight:500;border:none;font-family:'DM Sans',sans-serif}
.btn-app:hover{background:var(--orange-dark)}
.pro-hero{position:relative;overflow:hidden;isolation:isolate;background:
radial-gradient(circle at 14% 18%, rgba(244,82,12,.28), transparent 28%),
radial-gradient(circle at 82% 16%, rgba(56,189,248,.2), transparent 24%),
linear-gradient(180deg, #223554 0%, var(--navy-mid) 58%, #142238 100%);padding:5rem 2rem}
.pro-hero::before{content:"";position:absolute;inset:0;background:
radial-gradient(circle at 12% 26%, rgba(255,255,255,.42) 0 2px, transparent 3px),
radial-gradient(circle at 30% 60%, rgba(244,82,12,.55) 0 2.5px, transparent 3.5px),
radial-gradient(circle at 48% 34%, rgba(255,255,255,.32) 0 2px, transparent 3px),
radial-gradient(circle at 70% 22%, rgba(56,189,248,.46) 0 2.5px, transparent 3.5px),
radial-gradient(circle at 84% 52%, rgba(255,255,255,.24) 0 2px, transparent 3px),
linear-gradient(121deg, transparent 18%, rgba(244,82,12,.16) 18.4%, rgba(244,82,12,.16) 18.9%, transparent 19.2%),
linear-gradient(148deg, transparent 46%, rgba(56,189,248,.12) 46.3%, rgba(56,189,248,.12) 46.8%, transparent 47.1%),
linear-gradient(96deg, transparent 67%, rgba(255,255,255,.09) 67.2%, rgba(255,255,255,.09) 67.5%, transparent 67.8%);
opacity:.9;mask-image:radial-gradient(circle at center, white 0%, rgba(255,255,255,.94) 60%, transparent 88%);pointer-events:none}
.pro-hero::after{content:"";position:absolute;inset:-12% -10% auto;height:78%;background:
radial-gradient(circle at 18% 18%, rgba(244,82,12,.24), transparent 34%),
radial-gradient(circle at 78% 20%, rgba(56,189,248,.18), transparent 30%),
radial-gradient(circle at 56% 100%, rgba(255,255,255,.08), transparent 30%);
filter:blur(20px);opacity:.95;pointer-events:none}
.pro-hero-inner{position:relative;z-index:1;max-width:1160px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:3rem;align-items:center}
.hero-badge{display:inline-flex;align-items:center;gap:6px;background:rgba(244,82,12,.2);color:#FF8152;padding:5px 14px;border-radius:100px;font-size:.8rem;font-weight:500;margin-bottom:1.25rem}
.badge-dot{width:7px;height:7px;background:var(--orange);border-radius:50%;animation:pulse 2s infinite}
@keyframes pulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.6;transform:scale(1.3)}}
.pro-hero h1{font-size:clamp(2.2rem,4vw,3.4rem);color:var(--white);font-weight:800;margin-bottom:1.25rem}
.pro-hero h1 em{color:var(--orange);font-style:normal}
.hero-sub{font-size:1.05rem;color:#9CAABF;margin-bottom:2rem;max-width:520px;line-height:1.7}
.hero-cta{display:flex;gap:12px;flex-wrap:wrap}
.btn-primary{padding:14px 28px;border-radius:10px;background:var(--orange);color:var(--white);font-size:1rem;font-weight:600;border:none;cursor:pointer;font-family:'Syne',sans-serif;display:inline-block}
.btn-primary:hover{background:var(--orange-dark)}
.btn-secondary{padding:14px 28px;border-radius:10px;background:transparent;color:var(--white);font-size:1rem;font-weight:500;border:1.5px solid rgba(255,255,255,.25);cursor:pointer;font-family:'DM Sans',sans-serif;display:inline-block}
.btn-secondary:hover{border-color:rgba(255,255,255,.5)}
.quick-stats{display:flex;gap:2rem;margin-top:2rem;flex-wrap:wrap}
.qs-num{font-size:1.4rem;font-weight:800;color:var(--white);font-family:'Syne',sans-serif}
.qs-num.accent{color:var(--orange)}
.qs-label{font-size:.78rem;color:#A8B3C5}
.income-card{text-align:center;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);border-radius:var(--radius-lg);padding:2rem}
.income-label{font-size:1.9rem;color:#9CAABF;margin-bottom:6px}
.income-amt{font-family:'Syne',sans-serif;font-size:3.8rem;font-weight:800;color:var(--white)}
.income-sub{font-size:.82rem;color:#9CAABF;margin-top:4px;margin-bottom:1.25rem}
.month-labels{display:flex;justify-content:space-between;font-size:.75rem;color:#9CAABF;margin-bottom:6px}
.bars-row{display:flex;gap:4px}
.bar-wrap{flex:1;background:rgba(255,255,255,.08);border-radius:100px;height:8px;overflow:hidden}
.bar-fill{height:8px;border-radius:100px;background:var(--orange)}
.bar-fill.dim{background:#374151}
.earnings-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:1.25rem}
.earn-box{background:rgba(255,255,255,.05);border-radius:10px;padding:12px}
.earn-label{font-size:.7rem;color:#9CAABF}
.earn-val{font-size:1.1rem;font-weight:700;color:var(--white)}
.app-download{margin-top:1.75rem;padding-top:1.25rem;border-top:1px solid rgba(255,255,255,.12)}
.app-download-title{font-size:.8rem;color:#A8B3C5;text-transform:uppercase;letter-spacing:.08em;margin-bottom:.85rem}
.store-row{display:flex;gap:1.5rem;flex-wrap:wrap}
.store-col{display:flex;flex-direction:column;align-items:center;gap:.45rem}
.store-link img{height:44px;width:auto}
.qr-image{width:88px;height:88px;border-radius:10px;background:#fff;padding:4px;object-fit:contain;box-shadow:0 4px 14px rgba(0,0,0,.2)}
.qr-caption{font-size:.72rem;color:#A8B3C5;text-transform:uppercase;letter-spacing:.06em}
.section{padding:5rem 2rem}
.section.alt{background:var(--white)}
.section-inner{max-width:1160px;margin:0 auto}
.section-label{font-size:.78rem;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:var(--orange);margin-bottom:.75rem}
.section-title{font-size:clamp(1.8rem,3vw,2.6rem);font-weight:800;color:var(--navy);margin-bottom:1rem}
.section-sub{font-size:1.05rem;color:var(--slate);max-width:100%;line-height:1.7;text-align:center}
.steps-grid{text-align:center;display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:2rem;margin-top:3rem}
.step-card{background:var(--white);border:1px solid var(--border);border-radius:var(--radius-lg);padding:2rem 1.5rem;transition:box-shadow .2s}
.step-card:hover{box-shadow:var(--shadow-lg)}
.step-num{width:44px;height:44px;border-radius:12px;background:var(--orange-light);color:var(--orange);font-family:'Syne',sans-serif;font-size:1.1rem;font-weight:800;display:flex;align-items:center;justify-content:center;margin-bottom:1.25rem}
.step-icon{font-size:4.4rem;margin-bottom:.75rem}
.step-title{font-size:1.05rem;font-weight:700;margin-bottom:.5rem;color:var(--navy)}
.step-desc{font-size:.9rem;color:var(--slate);line-height:1.65}
.features-grid{text-align:center;display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:1.25rem;margin-top:3rem}
.feat-card{text-align:center;background:var(--white);border:1px solid var(--border);border-radius:var(--radius-lg);padding:1.75rem}
.feat-icon{font-size:1.6rem;margin-bottom:1rem;}
.feat-title{text-align:center;font-size:1rem;font-weight:700;color:var(--navy);margin-bottom:.5rem}
.feat-desc{text-align:center;font-size:.88rem;color:var(--slate);line-height:1.65}
.testi-section{background:var(--white);padding:5rem 2rem}
.testi-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:1.5rem;margin-top:2.5rem}
.testi-card{background:var(--cream);border:1px solid var(--border);border-radius:var(--radius-lg);padding:1.75rem}
.testi-stars{color:#F59E0B;font-size:.9rem;margin-bottom:.75rem}
.testi-quote{font-size:.95rem;color:var(--navy);line-height:1.65;margin-bottom:1.25rem;font-style:italic}
.testi-author{display:flex;align-items:center;gap:10px}
.testi-avatar{width:36px;height:36px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:.75rem;font-weight:700;color:var(--white)}
.testi-name{font-size:.88rem;font-weight:600;color:var(--navy)}
.testi-location{font-size:.76rem;color:var(--slate)}
.cta-band{background:var(--orange);padding:4rem 2rem;text-align:center}
.cta-band h2{font-size:clamp(1.8rem,3vw,2.4rem);color:var(--white);font-weight:800;margin-bottom:1rem}
.cta-band p{font-size:1rem;color:rgba(255,255,255,.8);margin-bottom:2rem}
.cta-btns{display:flex;justify-content:center;gap:1rem;flex-wrap:wrap}
.btn-white{padding:14px 28px;border-radius:10px;background:var(--white);color:var(--orange);font-size:1rem;font-weight:700;border:none;cursor:pointer;font-family:'Syne',sans-serif;display:inline-block}
.btn-white:hover{box-shadow:0 6px 20px rgba(0,0,0,.15)}
.btn-outline-white{padding:14px 28px;border-radius:10px;background:transparent;color:var(--white);font-size:1rem;font-weight:500;border:2px solid rgba(255,255,255,.5);cursor:pointer;font-family:'DM Sans',sans-serif;display:inline-block}
.btn-outline-white:hover{border-color:var(--white)}
.page-footer{background:var(--navy);padding:3rem 2rem 2rem}
.footer-inner{max-width:1160px;margin:0 auto}
.footer-top{display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:2rem;margin-bottom:2.5rem}
.footer-logo{display:flex;align-items:center;line-height:0}
.footer-logo img{height:34px;width:auto;object-fit:contain;display:block}
.footer-brand p{font-size:.88rem;color:#6B7280;margin-top:.75rem;max-width:260px;line-height:1.65}
.footer-col h4{font-size:.8rem;font-weight:700;color:#9CAABF;text-transform:uppercase;letter-spacing:.08em;margin-bottom:1rem}
.footer-col a{display:block;font-size:.88rem;color:#6B7280;text-decoration:none;margin-bottom:.5rem;transition:color .15s}
.footer-col a:hover{color:var(--white)}
.footer-bottom{border-top:1px solid rgba(255,255,255,.08);padding-top:1.5rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1rem}
.footer-bottom p{font-size:.8rem;color:#6B7280}
.footer-links{display:flex;gap:1.5rem;flex-wrap:wrap}
.footer-links a{font-size:.8rem;color:#6B7280;text-decoration:none}
.footer-links a:hover{color:#9CAABF}
@media(max-width:900px){.pro-hero-inner{grid-template-columns:1fr}.store-row{justify-content:center}}
@media(max-width:768px){.footer-top{grid-template-columns:1fr 1fr}.nav-tabs{display:none}}
@media(max-width:640px){nav,.pro-hero,.section,.testi-section,.cta-band,.page-footer{padding-left:1rem;padding-right:1rem}.footer-top{grid-template-columns:1fr}.earnings-grid{grid-template-columns:1fr}.quick-stats{gap:1rem}}
`;

const steps = [
  {
    num: "1",
    icon: "📱",
    title: "Create Your Profile",
    desc: "Set up your trade profile, service area, and availability so jobs can reach you faster.",
  },
  {
    num: "2",
    icon: "⚡",
    title: "Get Job Alerts",
    desc: "Receive incoming opportunities and review the job details before deciding whether to take them.",
  },
  {
    num: "3",
    icon: "💵",
    title: "Complete the Work",
    desc: "Handle the job, keep communication organized, and get paid through the platform flow.",
  },
];

const features = [
  {
    icon: "🚫",
    title: "No Lead-Fee Chaos",
    desc: "Built to avoid the usual pay-per-lead scramble and reduce wasted time chasing cold prospects.",
  },
  {
    icon: "📸",
    title: "Job Details Upfront",
    desc: "See the address, issue summary, and photos when available so you can prepare before you go.",
  },
  {
    icon: "🗓️",
    title: "Run It From the Field",
    desc: "Use the mobile flow to review jobs, stay organized, and keep the day moving without office overhead.",
  },
  {
    icon: "🏆",
    title: "Early-Adopter Offer",
    desc: "The first 50 service pros can access the Gold subscription free for 12 months.",
  },
];

const testimonials = [
  {
    stars: "★★★★★",
    quote:
      "I set my availability each morning and jobs start rolling in. It has become a much cleaner pipeline than chasing random leads.",
    initials: "JM",
    bg: "#1A7F4B",
    name: "James M. — HVAC Tech",
    location: "Atlanta, GA · Member since 2023",
  },
  {
    stars: "★★★★★",
    quote:
      "What I like is the speed. The jobs feel more direct, and I am not wasting energy competing on every little estimate request.",
    initials: "AR",
    bg: "#185FA5",
    name: "Anthony R. — Plumber",
    location: "Miami, FL · Member since 2024",
  },
  {
    stars: "★★★★★",
    quote:
      "The app flow is easier than juggling texts, calls, and spreadsheets. It feels more like actual dispatch than a lead site.",
    initials: "KL",
    bg: "#854F0B",
    name: "Kevin L. — Electrician",
    location: "Fort Lauderdale, FL · Member since 2024",
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

const ServiceProLandingPage = () => {
  useEffect(() => {
    document.title =
      "BlinqFix for Pros | Get Local Jobs & Grow Your Contractor Business";

    ensureMeta('meta[name="description"]', {
      name: "description",
      content:
        "Explore BlinqFix for service pros. Learn how the platform helps pros review jobs, manage work from the field, and grow with less lead-site friction.",
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
      content: "https://www.blinqfix.com/getjobs",
    });
    ensureMeta('meta[property="og:title"]', {
      property: "og:title",
      content: "BlinqFix for Pros | Get Local Jobs & Grow Your Business",
    });
    ensureMeta('meta[property="og:description"]', {
      property: "og:description",
      content:
        "Explore how BlinqFix works for service pros and why it is designed differently from typical lead sites.",
    });
    ensureMeta('meta[name="twitter:card"]', {
      name: "twitter:card",
      content: "summary_large_image",
    });
    ensureMeta('meta[name="twitter:title"]', {
      name: "twitter:title",
      content: "BlinqFix for Pros | Get Local Contractor Jobs",
    });
    ensureMeta('meta[name="twitter:description"]', {
      name: "twitter:description",
      content:
        "Explore how BlinqFix works for service pros and why it is designed differently from typical lead sites.",
    });
    ensureMeta(
      'link[rel="canonical"]',
      {
        rel: "canonical",
        href: "https://www.blinqfix.com/getjobs",
      },
      "link"
    );

    const scriptId = "blinqfix-getjobs-schema";
    let schema = document.getElementById(scriptId);
    if (!schema) {
      schema = document.createElement("script");
      schema.type = "application/ld+json";
      schema.id = scriptId;
      document.head.appendChild(schema);
    }
    schema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "BlinqFix for Service Pros",
      url: "https://www.blinqfix.com/getjobs",
      description:
        "Information page for service pros interested in using the BlinqFix platform.",
      mainEntity: {
        "@type": "Service",
        name: "BlinqFix Pro Network",
        serviceType: [
          "Plumbing",
          "Electrical",
          "HVAC",
          "Handyman",
          "Roofing",
          "Locksmith",
        ],
        areaServed: { "@type": "Country", name: "United States" },
      },
      publisher: {
        "@type": "Organization",
        name: "BlinqFix",
        url: "https://www.blinqfix.com",
      },
    });

    return () => {
      const existing = document.getElementById(scriptId);
      if (existing) existing.remove();
    };
  }, []);

  return (
    <div className="getjobs-shell">
      <style>{PAGE_CSS}</style>

      <nav>
        <div className="nav-inner">
          <Link to="/" className="logo" aria-label="BlinqFix home">
            <img src={blinqfixLogo} alt="BlinqFix" />
          </Link>
          <div className="nav-tabs">
            <Link to="/" className="nav-tab">
              For Homeowners
            </Link>
            <Link to="/getjobs" className="nav-tab active">
              For Service Pros
            </Link>
          </div>
          <Link to="/gettheapp" className="btn-app">
            📱 Get the App
          </Link>
        </div>
      </nav>

      <main>
        <section className="pro-hero">
          <div className="pro-hero-inner">
            <div>
              <div className="hero-badge">
                <span className="badge-dot"></span> Jobs Available in Your Area
                Right Now
              </div>
              <h1>
                Grow Your Business.
                <br />
                More Jobs, <em>Less Leads.</em>
              </h1>
              <p className="hero-sub">
                BlinqFix is built for service pros who want a cleaner way to
                review jobs, work from the field, and spend less time fighting
                over weak leads.
              </p>
              <div className="hero-cta">
                <a href="#banner-inner2" className="btn-primary">
                  Get the App to Join
                </a>
                <a href="#how-pros-work" className="btn-secondary">
                  How It Works
                </a>
              </div>
              <div className="quick-stats">
                <div>
                  <div className="qs-num accent">First 50</div>
                  <div className="qs-label">
                    Pros get Gold free for 12 months
                  </div>
                </div>
                <div>
                  <div className="qs-num">Field-Ready</div>
                  <div className="qs-label">Built to manage work on the go</div>
                </div>
                <div>
                  <div className="qs-num">Less Noise</div>
                  <div className="qs-label">
                    Designed to reduce junk lead friction
                  </div>
                </div>
              </div>

              <div id="app-download" className="app-download">
                <div className="app-download-title">
                  Run your business from the field
                </div>
                {/* <AppBanner /> */}
                {/* <div className="store-row">
                  <div className="store-col">
                    <a
                      href="https://apps.apple.com/us/app/blinqfix-app/id6747390132"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="store-link"
                    >
                      <img
                        src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                        alt="Download on the App Store"
                      />
                    </a>
                    <img src="/blinqfix_app_qr_IOS.png" alt="Scan to download BlinqFix on the App Store" className="qr-image" />
                    <span className="qr-caption">Scan with your iOS device</span>
                  </div>

                  <div className="store-col">
                    <a
                      href="https://play.google.com/store/apps/details?id=com.blinqfix.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="store-link"
                    >
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/250px-Google_Play_Store_badge_EN.svg.png"
                        alt="Get it on Google Play"
                      />
                    </a>
                    <img src="/blinqfix_playstore_qr.png" alt="Scan to download BlinqFix on Google Play" className="qr-image" />
                    <span className="qr-caption">Scan with your Android device</span>
                  </div>
                </div> */}
              </div>
            </div>

            <div className="income-card">
              <div className="income-label">
                Potential Weekly Payout Snapshot
              </div>
              {/* <div className="income-amt">$2,450</div> */}
              <div className="income-sub">
                Illustrative example based on multiple completed jobs — not a
                guaranteed result.
              </div>
              <div className="month-labels">
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
              </div>
              <div className="bars-row">
                <div className="bar-wrap">
                  <div className="bar-fill" style={{ width: "55%" }}></div>
                </div>
                <div className="bar-wrap">
                  <div className="bar-fill" style={{ width: "82%" }}></div>
                </div>
                <div className="bar-wrap">
                  <div className="bar-fill" style={{ width: "64%" }}></div>
                </div>
                <div className="bar-wrap">
                  <div className="bar-fill" style={{ width: "88%" }}></div>
                </div>
                <div className="bar-wrap">
                  <div className="bar-fill" style={{ width: "71%" }}></div>
                </div>
                <div className="bar-wrap">
                  <div className="bar-fill dim" style={{ width: "46%" }}></div>
                </div>
              </div>
              <div className="earnings-grid">
                <div className="earn-box">
                  <div className="earn-label">Top Ticket</div>
                  <div className="earn-val">$780</div>
                </div>
                <div className="earn-box">
                  <div className="earn-label">Average Job</div>
                  <div className="earn-val">$245</div>
                </div>
                <div className="earn-box">
                  <div className="earn-label">High-Intent Jobs</div>
                  <div className="earn-val">Clearer fit</div>
                </div>
                <div className="earn-box">
                  <div className="earn-label">Mobile Access</div>
                  <div className="earn-val">iOS + Android</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="how-pros-work">
          <div className="section-inner">
            <p className="section-label">How Pros Use BlinqFix</p>
            <h2 className="section-title">
              A Simpler Flow for Service Businesses
            </h2>
            <p className="section-sub">
              The goal is to help serious tradespeople move faster from alert to
              completed job without getting buried in lead-site nonsense.
            </p>
            <div className="steps-grid">
              {steps.map((step) => (
                <div className="step-card" key={step.num}>
                  <div className="step-num">{step.num}</div>
                  <div className="step-icon">{step.icon}</div>
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-desc">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section alt">
          <div className="section-inner">
            <p className="section-label">Why It Feels Different</p>
            <h2 className="section-title">
              Built Around Real Work, Not Lead Spam
            </h2>
            <p className="section-sub">
              The pro-side experience should help you evaluate opportunities
              faster and manage the day from your phone.
            </p>
            <div className="features-grid">
              {features.map((feature) => (
                <div className="feat-card" key={feature.title}>
                  <div className="feat-icon">{feature.icon}</div>
                  <h3 className="feat-title">{feature.title}</h3>
                  <p className="feat-desc">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <PricingSection
          ctaCustomerHref="/CustomerDashboard"
          ctaProHref="/providers/apply"
        />
        <AppBanner />
        <section className="testi-section">
          <div className="section-inner">
            <p className="section-label">Pro Feedback</p>
            <h2 className="section-title">What Service Pros Say</h2>
            {/* <p className="section-sub">Examples of the kind of feedback this page is trying to communicate — cleaner workflow, better focus, less wasted energy.</p> */}
            <div className="testi-grid">
              {testimonials.map((item) => (
                <div className="testi-card" key={item.name}>
                  <div className="testi-stars">{item.stars}</div>
                  <p className="testi-quote">“{item.quote}”</p>
                  <div className="testi-author">
                    <div
                      className="testi-avatar"
                      style={{ background: item.bg }}
                    >
                      {item.initials}
                    </div>
                    <div>
                      <div className="testi-name">{item.name}</div>
                      <div className="testi-location">{item.location}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="cta-band">
          <h2>Ready to Fill Your Calendar?</h2>
          <p>
            Explore the app, review the pro flow, and decide whether BlinqFix
            fits your business.
          </p>
          <div className="cta-btns">
            <Link to="/getjobs" className="btn-white">
              Join as a Pro — It’s Free
            </Link>
            <Link to="/gettheapp" className="btn-outline-white">
              Are You a Homeowner?
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
              <Link to="/">Book a Pro</Link>
              <Link to="/#how-it-works">How It Works</Link>
              <Link to="/gettheapp">Download App</Link>
              <Link to="/faq">FAQ</Link>
            </div>
            <div className="footer-col">
              <h4>Service Pros</h4>
              <Link to="/getjobs">Join as a Pro</Link>
              <a href="#how-pros-work">How Pros Earn</a>
              <Link to="/providers/apply">Apply</Link>
              <Link to="/gettheapp">Get the App</Link>
            </div>
            <div className="footer-col">
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

export default ServiceProLandingPage;
