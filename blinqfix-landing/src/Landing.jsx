import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import AppBanner from "./sections/AppBanner";
import TranslateButton from "./sections/TranslateButton.jsx";
import blinqfixLogo from "./assets/blinqfix_logo.jpeg";

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
.homepage-shell{background:var(--cream);color:var(--navy);position:relative}

/* BOTTOM LANGUAGE DOCK */
.translate-dock{
  position:fixed;
  left:50%;
  bottom:0;
  transform:translateX(-50%);
  z-index:1200;
  display:flex;
  flex-direction:column;
  align-items:center;
  pointer-events:auto;
}
.translate-dock-handle{
  border:none;
  outline:none;
  cursor:pointer;
  background:rgba(11,22,40,.96);
  color:#fff;
  display:inline-flex;
  align-items:center;
  gap:8px;
  padding:9px 14px;
  border-top-left-radius:14px;
  border-top-right-radius:14px;
  border-bottom-left-radius:0;
  border-bottom-right-radius:0;
  box-shadow:0 -10px 30px rgba(11,22,40,.28);
  font-size:.82rem;
  font-weight:700;
  letter-spacing:.02em;
}
.translate-dock-handle:hover{
  background:rgba(17,30,52,.98)
}
.translate-dock-panel{
  background:rgba(11,22,40,.96);
  backdrop-filter:blur(10px);
  border:1px solid rgba(255,255,255,.12);
  border-bottom:none;
  border-top-left-radius:16px;
  border-top-right-radius:16px;
  box-shadow:0 -10px 30px rgba(11,22,40,.28);
  padding:10px 12px 14px;
  width:max-content;
  max-width:calc(100vw - 24px);
  visibility:visible;
  opacity:1;
  overflow:visible;
  transform-origin:bottom center;
  max-height:0;
  opacity:0;
  overflow:hidden;
  transform:translateY(8px);
  transition:max-height .22s ease, opacity .22s ease, transform .22s ease;
}
.translate-dock.open .translate-dock-panel{
  max-height:220px;
  opacity:1;
  transform:translateY(0);
}
.translate-dock-panel-inner{
  display:flex;
  align-items:center;
  justify-content:center;
  min-height:40px;
}

/* NAV */
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
  transition:all .18s;
  font-family:'DM Sans',sans-serif;
  color:var(--slate);
  background:var(--white)
}
.nav-tab.active{background:var(--orange);color:var(--white)}
.nav-tab.pro-tab{background:var(--white);color:var(--slate)}
.btn-app{
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
  cursor:pointer;
  font-family:'DM Sans',sans-serif
}
.btn-app:hover{background:var(--orange-dark)}

/* HERO */
.hero{
  background:var(--navy);
  padding:0 2rem;
  overflow:hidden;
  position:relative;
  isolation:isolate
}
.hero::before{
  content:'';
  position:absolute;
  inset:0;
  background:radial-gradient(ellipse 80% 60% at 70% 50%,rgba(244,82,12,.18) 0%,transparent 70%);
  pointer-events:none
}
.hero::after{
  content:'';
  position:absolute;
  inset:-10% -5% auto auto;
  width:42rem;
  height:42rem;
  background:radial-gradient(circle,rgba(56,189,248,.14) 0%,rgba(37,99,235,.1) 28%,transparent 68%);
  filter:blur(12px);
  pointer-events:none;
  z-index:0
}
.hero-network{
  position:absolute;
  inset:0;
  pointer-events:none;
  z-index:1;
  overflow:hidden
}
.hero-network::before{
  content:'';
  position:absolute;
  inset:0;
  background:
    radial-gradient(circle at 12% 22%, rgba(148,163,184,.18) 0 2px, transparent 3px),
    radial-gradient(circle at 22% 42%, rgba(96,165,250,.22) 0 3px, transparent 4px),
    radial-gradient(circle at 35% 18%, rgba(125,211,252,.18) 0 2px, transparent 3px),
    radial-gradient(circle at 46% 36%, rgba(191,219,254,.16) 0 2px, transparent 3px),
    radial-gradient(circle at 62% 24%, rgba(96,165,250,.2) 0 3px, transparent 4px),
    radial-gradient(circle at 74% 44%, rgba(125,211,252,.18) 0 2px, transparent 3px),
    radial-gradient(circle at 84% 18%, rgba(148,163,184,.18) 0 2px, transparent 3px),
    linear-gradient(120deg, transparent 11%, rgba(96,165,250,.12) 11.3%, rgba(96,165,250,.12) 11.6%, transparent 12%),
    linear-gradient(152deg, transparent 20%, rgba(148,163,184,.08) 20.2%, rgba(148,163,184,.08) 20.45%, transparent 21%),
    linear-gradient(168deg, transparent 31%, rgba(125,211,252,.1) 31.2%, rgba(125,211,252,.1) 31.45%, transparent 32%),
    linear-gradient(120deg, transparent 43%, rgba(96,165,250,.09) 43.2%, rgba(96,165,250,.09) 43.45%, transparent 44%),
    linear-gradient(166deg, transparent 58%, rgba(191,219,254,.08) 58.2%, rgba(191,219,254,.08) 58.45%, transparent 59%),
    linear-gradient(128deg, transparent 71%, rgba(125,211,252,.12) 71.2%, rgba(125,211,252,.12) 71.45%, transparent 72%);
  opacity:.9
}
.network-ring{
  position:absolute;
  border:1px solid rgba(148,163,184,.12);
  border-radius:999px;
  box-shadow:0 0 0 1px rgba(15,23,42,.16) inset
}
.network-ring.nr1{
  width:16rem;
  height:16rem;
  top:8%;
  right:18%
}
.network-ring.nr2{
  width:24rem;
  height:24rem;
  top:22%;
  right:-4%;
  border-color:rgba(96,165,250,.1)
}
.network-ring.nr3{
  width:20rem;
  height:20rem;
  bottom:-8%;
  left:-3%;
  border-color:rgba(148,163,184,.08)
}
.hero-inner{
  max-width:1160px;
  margin:0 auto;
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:3rem;
  align-items:center;
  padding:5rem 0 4.5rem;
  position:relative;
  z-index:2
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
.hero h1{
  font-size:clamp(2.4rem,4.5vw,3.6rem);
  color:var(--white);
  font-weight:800;
  margin-bottom:1.25rem
}
.hero h1 em{color:var(--orange);font-style:normal}
.hero-sub{
  font-size:1.1rem;
  color:#9CAABF;
  margin-bottom:2rem;
  max-width:480px;
  line-height:1.7
}
.hero-cta{
  display:flex;
  gap:12px;
  flex-wrap:wrap
}
.btn-primary{
  padding:14px 28px;
  border-radius:10px;
  background:var(--orange);
  color:var(--white);
  font-size:1rem;
  font-weight:600;
  border:none;
  cursor:pointer;
  font-family:'Syne',sans-serif;
  display:inline-block
}
.btn-primary:hover{background:var(--orange-dark)}
.btn-secondary{
  padding:14px 28px;
  border-radius:10px;
  background:transparent;
  color:var(--white);
  font-size:1rem;
  font-weight:500;
  border:1.5px solid rgba(255,255,255,.25);
  cursor:pointer;
  font-family:'DM Sans',sans-serif;
  display:inline-block
}
.btn-secondary:hover{border-color:rgba(255,255,255,.5)}
.hero-trust{
  display:flex;
  align-items:center;
  gap:12px;
  margin-top:2rem
}
.trust-avatars{display:flex}
.trust-avatar{
  width:32px;
  height:32px;
  border-radius:50%;
  border:2px solid var(--navy);
  font-size:.72rem;
  font-weight:600;
  display:flex;
  align-items:center;
  justify-content:center;
  color:var(--white);
  margin-left:-8px
}
.trust-avatar:first-child{margin-left:0}
.trust-note{font-size:.82rem;color:#9CAABF}
.trust-note strong{color:#D0D8E8}

/* PHONE */
.hero-visual{position:relative;display:flex;justify-content:center}
.phone-mockup{
  width:240px;
  background:#111827;
  border-radius:32px;
  border:6px solid #1F2937;
  padding:28px 16px 20px;
  position:relative;
  z-index:2;
  box-shadow:0 24px 80px rgba(0,0,0,.5)
}
.phone-notch{
  width:72px;
  height:8px;
  background:#1F2937;
  border-radius:100px;
  margin:0 auto 20px
}
.phone-status{
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-bottom:18px
}
.phone-time{font-size:.75rem;color:#9CA3AF;font-weight:500}
.phone-label{
  font-size:.65rem;
  color:#6B7280;
  text-transform:uppercase;
  letter-spacing:.08em
}
.phone-heading{
  font-size:.9rem;
  color:#F9FAFB;
  font-weight:700;
  font-family:'Syne',sans-serif;
  margin:4px 0 10px
}
.dispatch-card{
  background:#1F2937;
  border-radius:10px;
  padding:10px 12px;
  margin-bottom:8px
}
.dispatch-row{
  display:flex;
  align-items:center;
  gap:8px;
  margin-bottom:6px
}
.dispatch-icon{
  width:28px;
  height:28px;
  border-radius:8px;
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:14px;
  flex-shrink:0
}
.dispatch-meta{flex:1}
.dispatch-name{font-size:.7rem;color:#F9FAFB;font-weight:600}
.dispatch-dist{font-size:.62rem;color:#6B7280}
.dispatch-eta{
  font-size:.65rem;
  font-weight:700;
  color:var(--orange);
  background:rgba(244,82,12,.12);
  padding:2px 7px;
  border-radius:100px
}
.dispatch-eta.green{
  color:#2ACA44;
  background:rgba(42,202,68,.12)
}
.dispatch-bar{
  background:#374151;
  border-radius:100px;
  height:3px;
  margin-top:8px
}
.dispatch-fill{
  background:var(--orange);
  height:3px;
  border-radius:100px;
  width:65%;
  animation:prog 3s ease-in-out infinite alternate
}
@keyframes prog{from{width:40%}to{width:80%}}
.job-card{
  background:#1F2937;
  border-radius:10px;
  padding:10px 12px;
  margin-top:8px
}
.job-row{
  display:flex;
  justify-content:space-between;
  align-items:center
}
.job-label{font-size:.7rem;color:#9CA3AF}
.job-status{font-size:.72rem;font-weight:700;color:var(--orange)}
.job-title{font-size:1rem;color:#F9FAFB;font-weight:700;margin:4px 0}
.job-stars{color:#F59E0B;font-size:10px}
.job-confirm{font-size:.62rem;color:#9CA3AF;margin-left:5px}
// .float-badge{
//   position:absolute;
//   background:var(--white);
//   border-radius:12px;
//   padding:8px 12px;
//   box-shadow:var(--shadow-lg);
//   font-size:.78rem;
//   font-weight:600;
//   white-space:nowrap;
//   line-height:1.4
// }
.float-badge{
  position:absolute;
  background:var(--white);
  border-radius:12px;
  padding:8px 12px;
  box-shadow:var(--shadow-lg);
  font-size:.78rem;
  font-weight:600;
  white-space:nowrap;
  line-height:1.4
}
.float-card{
  position:absolute;
  display:flex;
  align-items:center;
  gap:12px;
  min-width:220px;
  padding:14px 16px;
  border-radius:16px;
  background:rgba(255,255,255,.96);
  border:1px solid rgba(11,22,40,.08);
  box-shadow:0 16px 40px rgba(11,22,40,.18);
  backdrop-filter:blur(10px);
}

.float-card-primary{
  background:linear-gradient(135deg, rgba(255,255,255,.98), rgba(255,240,234,.96));
}

.float-card-secondary{
  background:linear-gradient(135deg, rgba(255,255,255,.98), rgba(234,245,239,.96));
}

.float-card-icon{
  width:42px;
  height:42px;
  border-radius:12px;
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:1.1rem;
  flex-shrink:0;
  background:var(--navy);
  color:var(--white);
  box-shadow:0 8px 18px rgba(11,22,40,.16);
}

.float-card-content{
  display:flex;
  flex-direction:column;
  gap:2px;
}

.float-card-title{
  font-size:.92rem;
  font-weight:800;
  color:var(--navy);
  font-family:'Syne',sans-serif;
  line-height:1.1;
}

.float-card-sub{
  font-size:.72rem;
  font-weight:500;
  color:var(--slate);
  letter-spacing:.02em;
  line-height:1.3;
}
@media(max-width:1100px){
  .float-card{
    min-width:190px;
    padding:12px 14px;
  }

  .fb1{left:-20%}
  .fb2{right:-18%}
}

.fb1{
  top:8%;
  left:-34%;
}

.fb2{
  bottom:18%;
  right:-30%;
}
.fb1{top:10%;left:-30%}
.fb2{bottom:20%;right:-25%}
.fb-sub{font-size:.65rem;font-weight:400;color:var(--slate)}
.fb1{top:10%;left:-30%}
.fb2{bottom:20%;right:-25%}
.fb-sub{font-size:.65rem;font-weight:400;color:var(--slate)}

/* STRIP */
.services-strip{
  background:var(--orange);
  padding:1rem 2rem;
  overflow:hidden
}
.svc-scroll{
  max-width:1160px;
  margin:0 auto;
  display:flex;
  gap:2.5rem;
  align-items:center;
  overflow-x:auto;
  scrollbar-width:none
}
.svc-scroll::-webkit-scrollbar{display:none}
.svc-item{
  display:flex;
  align-items:center;
  gap:8px;
  font-size:.85rem;
  font-weight:600;
  color:var(--white);
  white-space:nowrap;
  flex-shrink:0
}

/* TRUST BAR */
.trust-bar{
  background:var(--white);
  border-top:1px solid var(--border);
  padding:2rem
}
.trust-bar-inner{
  max-width:1160px;
  margin:0 auto;
  display:flex;
  align-items:center;
  justify-content:space-evenly;
  flex-wrap:wrap;
  gap:1.5rem
}
.trust-item{display:flex;align-items:center;gap:8px}
.trust-icon{font-size:1.1rem}
.trust-big{
  font-size:1.1rem;
  font-weight:700;
  color:var(--navy);
  font-family:'Syne',sans-serif
}
.trust-small{font-size:.76rem;color:var(--slate)}

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
  text-align:center
}

/* STEPS */
.steps-grid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(200px,1fr));
  gap:2rem;
  margin-top:3rem
}
.step-card{
  background:var(--white);
  border:1px solid var(--border);
  border-radius:var(--radius-lg);
  padding:2rem 1.5rem;
  transition:box-shadow .2s
}
.step-card:hover{box-shadow:var(--shadow-lg)}
.step-num{
  width:44px;
  height:44px;
  border-radius:12px;
  background:var(--orange-light);
  color:var(--orange);
  font-family:'Syne',sans-serif;
  font-size:1.1rem;
  font-weight:800;
  display:flex;
  align-items:center;
  justify-content:center;
  margin-bottom:1.25rem

}
.step-icon{font-size:4.4rem;margin-bottom:.75rem;text-align:center}
.step-title{
  font-size:1.05rem;
  font-weight:700;
  text-align:center;
  margin-bottom:.5rem;
  color:var(--navy)
}
.step-desc{
  font-size:.9rem;
  color:var(--slate);
  text-align:center;
  line-height:1.65
}

/* SERVICES GRID */
.services-grid{
  display:grid;
  grid-template-columns:repeat(4, minmax(0, 1fr));
  gap:1rem;
  margin-top:2.5rem
}
.svc-card{
  background:var(--white);
  border:1px solid var(--border);
  border-radius:var(--radius);
  padding:1.5rem 1.25rem;
  text-align:center;
  transition:all .2s;
  height:100%
}
.svc-card:hover{
  border-color:var(--orange);
  box-shadow:0 4px 20px rgba(244,82,12,.12);
  transform:translateY(-2px)
}
.svc-emoji{font-size:2rem;margin-bottom:.75rem}
.svc-name{font-size:.9rem;font-weight:600;color:var(--navy)}
.svc-avail{font-size:.76rem;color:var(--green);margin-top:3px}

/* SPLIT */
.split{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:4rem;
  align-items:center
}
.proof-list{
  list-style:none;
  display:flex;
  flex-direction:column;
  gap:12px;
  margin:1.5rem 0 2rem
}
.proof-item{
  display:flex;
  align-items:flex-start;
  gap:10px;
  font-size:.95rem;
  color:var(--slate)
}
.proof-check{color:var(--green);font-weight:700;flex-shrink:0}
.stat-row{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:1rem;
  margin-top:1.5rem
}
.stat-box{
  background:var(--white);
  border:1px solid var(--border);
  border-radius:var(--radius);
  padding:1.25rem;
  text-align:center
}
.stat-num{
  font-family:'Syne',sans-serif;
  font-size:1.8rem;
  font-weight:800;
  color:var(--navy)
}
.stat-label{font-size:.78rem;color:var(--slate);margin-top:2px}

/* VISUAL CARD */
.visual-card{
  background:var(--white);
  border:1px solid var(--border);
  border-radius:var(--radius-lg);
  padding:2rem;
  box-shadow:var(--shadow)
}
.vc-header{
  display:flex;
  align-items:center;
  gap:10px;
  margin-bottom:1.5rem
}
.vc-dot{width:12px;height:12px;border-radius:50%}
.map-placeholder{
  background:#F0F4F8;
  border-radius:10px;
  height:180px;
  display:flex;
  align-items:center;
  justify-content:center;
  position:relative;
  overflow:hidden;
  margin-bottom:1rem
}
.map-grid{
  position:absolute;
  inset:0;
  background-image:linear-gradient(var(--border) 1px,transparent 1px),linear-gradient(90deg,var(--border) 1px,transparent 1px);
  background-size:24px 24px;
  opacity:.6
}
.map-pin{
  width:32px;
  height:32px;
  background:var(--orange);
  border-radius:50% 50% 50% 0;
  transform:rotate(-45deg);
  box-shadow:0 4px 12px rgba(244,82,12,.4);
  display:flex;
  align-items:center;
  justify-content:center;
  position:relative;
  z-index:2
}
.map-pin-inner{
  color:var(--white);
  transform:rotate(45deg);
  font-size:12px
}
.map-ripple{
  position:absolute;
  width:60px;
  height:60px;
  border:2px dashed rgba(244,82,12,.3);
  border-radius:50%;
  z-index:1;
  animation:ripple 2s ease-out infinite
}
@keyframes ripple{
  0%{width:40px;height:40px;opacity:.8}
  100%{width:120px;height:120px;opacity:0}
}
.pro-row{
  display:flex;
  align-items:center;
  gap:10px;
  padding:8px 0;
  border-bottom:1px solid var(--border)
}
.pro-row:last-child{border-bottom:none}
.pro-avatar{
  width:36px;
  height:36px;
  border-radius:50%;
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:.75rem;
  font-weight:700;
  color:var(--white);
  flex-shrink:0
}
.pro-info{flex:1}
.pro-name{font-size:.88rem;font-weight:600;color:var(--navy)}
.pro-trade{font-size:.76rem;color:var(--slate)}
.pro-eta{font-size:.76rem;font-weight:600;color:var(--green)}

/* TESTIMONIALS */
.testi-section{
  background:var(--white);
  padding:5rem 2rem
}
.testi-grid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
  gap:1.5rem;
  margin-top:2.5rem
}
.testi-card{
  background:var(--cream);
  border:1px solid var(--border);
  border-radius:var(--radius-lg);
  padding:1.75rem
}
.testi-stars{
  color:#F59E0B;
  font-size:.9rem;
  margin-bottom:.75rem
}
.testi-quote{
  font-size:.95rem;
  color:var(--navy);
  line-height:1.65;
  margin-bottom:1.25rem;
  font-style:italic
}
.testi-author{
  display:flex;
  align-items:center;
  gap:10px
}
.testi-avatar{
  width:36px;
  height:36px;
  border-radius:50%;
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:.75rem;
  font-weight:700;
  color:var(--white)
}
.testi-name{font-size:.88rem;font-weight:600;color:var(--navy)}
.testi-location{font-size:.76rem;color:var(--slate)}

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
  color:rgba(255,255,255,.8);
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
  border:2px solid rgba(255,255,255,.5);
  cursor:pointer;
  font-family:'DM Sans',sans-serif;
  display:inline-block
}
.btn-outline-white:hover{border-color:var(--white)}

/* FOOTER */
footer{
  background:var(--navy);
  padding:3rem 2rem 5.5rem
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
  color:#6B7280;
  margin-top:.75rem;
  max-width:260px;
  line-height:1.65
}
.footer-col h4{
  font-size:.8rem;
  font-weight:700;
  color:#9CAABF;
  text-transform:uppercase;
  letter-spacing:.08em;
  margin-bottom:1rem
}
.footer-col a{
  display:block;
  font-size:.88rem;
  color:#6B7280;
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
.footer-bottom p{font-size:.8rem;color:#6B7280}
.footer-links{display:flex;gap:1.5rem;flex-wrap:wrap}
.footer-links a{
  font-size:.8rem;
  color:#6B7280;
  text-decoration:none
}
.footer-links a:hover{color:#9CAABF}

@media(max-width:992px){
  .split{grid-template-columns:1fr;gap:2rem}
  .footer-top{grid-template-columns:1fr 1fr}
  .services-grid{grid-template-columns:repeat(2, minmax(0, 1fr))}
}
@media(max-width:768px){
  .hero-inner{grid-template-columns:1fr;padding:3rem 0 2.5rem}
  .hero-visual{display:none}
  .stat-row{grid-template-columns:repeat(2,1fr)}
  .nav-tabs{display:none}
  .translate-dock{
    left:12px;
    right:12px;
    width:auto;
    max-width:none;
  }
}
@media(max-width:640px){
  nav,.hero,.services-strip,.trust-bar,.section,.testi-section,.cta-band,footer{
    padding-left:1rem;
    padding-right:1rem
  }
  .nav-inner{gap:1rem}
  .btn-app{padding:8px 12px;font-size:.78rem}
  .footer-top{grid-template-columns:1fr}
  .stat-row{grid-template-columns:1fr}
  .services-grid{grid-template-columns:1fr}
}
`;

const services = [
  { emoji: "🔌", name: "Electrical", avail: "24/7 Available" },
  { emoji: "🚰", name: "Plumbing", avail: "24/7 Available" },
  { emoji: "❄️", name: "HVAC", avail: "Fast Dispatch" },
  { emoji: "🪚", name: "Handyman", avail: "Same-Day Help" },
  { emoji: "🔒", name: "Locksmith", avail: "Emergency Service" },
  { emoji: "🏠", name: "Roofing", avail: "Storm Response" },
  { emoji: "🧽", name: "Cleaning", avail: "On Demand" },
  { emoji: "🛠️", name: "General Repair", avail: "Local Pros" },
];

const testimonials = [
  {
    stars: "★★★★★",
    quote:
      "Our water heater burst at 10 PM. I opened BlinqFix and had a plumber at my house in under an hour. Easy, fast, and transparent.",
    initials: "MR",
    bg: "#1A7F4B",
    name: "Maria R.",
    location: "Miami, FL",
  },
  {
    stars: "★★★★★",
    quote:
      "I needed an emergency electrician on a Sunday and expected chaos. BlinqFix made it simple. I booked, tracked the pro, and paid in-app.",
    initials: "JL",
    bg: "#185FA5",
    name: "Jason L.",
    location: "Dallas, TX",
  },
  {
    stars: "★★★★★",
    quote:
      "BlinqFix connected me with an HVAC tech the same day. Whole family was comfortable again by evening. Life savers.",
    initials: "AP",
    bg: "#854F0B",
    name: "Alicia P.",
    location: "Phoenix, AZ",
  },
];



export default function Home() {
  const [isTranslateOpen, setIsTranslateOpen] = useState(false);
  const translateDockRef = useRef(null);

  useEffect(() => {
    document.title =
      "BlinqFix | 24/7 Emergency Home Services — Book a Local Pro in Minutes";

    const ensureMeta = (selector, attrs) => {
      let el = document.head.querySelector(selector);
      if (!el) {
        el = document.createElement("meta");
        document.head.appendChild(el);
      }
      Object.entries(attrs).forEach(([key, value]) =>
        el.setAttribute(key, value)
      );
      return el;
    };

    const ensureLink = (selector, attrs) => {
      let el = document.head.querySelector(selector);
      if (!el) {
        el = document.createElement("link");
        document.head.appendChild(el);
      }
      Object.entries(attrs).forEach(([key, value]) =>
        el.setAttribute(key, value)
      );
      return el;
    };

    ensureMeta('meta[name="description"]', {
      name: "description",
      content:
        "BlinqFix connects homeowners with local service pros for emergency and scheduled home repairs. Book fast, track your pro, and pay securely.",
    });
    ensureMeta('meta[name="robots"]', {
      name: "robots",
      content: "index, follow",
    });
    ensureMeta('meta[property="og:title"]', {
      property: "og:title",
      content: "BlinqFix | 24/7 Emergency Home Services",
    });
    ensureMeta('meta[property="og:description"]', {
      property: "og:description",
      content: "Book a local pro fast for emergency or scheduled home repairs.",
    });
    ensureMeta('meta[property="og:type"]', {
      property: "og:type",
      content: "website",
    });
    ensureMeta('meta[property="og:url"]', {
      property: "og:url",
      content: "https://www.blinqfix.com/",
    });
    ensureMeta('meta[name="twitter:card"]', {
      name: "twitter:card",
      content: "summary_large_image",
    });
    ensureMeta('meta[name="twitter:title"]', {
      name: "twitter:title",
      content: "BlinqFix | 24/7 Emergency Home Services",
    });
    ensureMeta('meta[name="twitter:description"]', {
      name: "twitter:description",
      content: "Book a local pro fast for emergency or scheduled home repairs.",
    });
    ensureLink('link[rel="canonical"]', {
      rel: "canonical",
      href: "https://www.blinqfix.com/",
    });

    const scriptId = "blinqfix-home-schema";
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
      name: "BlinqFix",
      url: "https://www.blinqfix.com/",
      description:
        "BlinqFix helps homeowners connect with local service pros for emergency and scheduled home repairs.",
      mainEntity: {
        "@type": "Service",
        name: "Home Repair Booking Platform",
        serviceType: [
          "Plumbing",
          "Electrical",
          "HVAC",
          "Handyman",
          "Locksmith",
          "Roofing",
        ],
        areaServed: { "@type": "Country", name: "United States" },
      },
    });

    const handleClickOutside = (event) => {
      if (
        translateDockRef.current &&
        !translateDockRef.current.contains(event.target)
      ) {
        setIsTranslateOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      const existing = document.getElementById(scriptId);
      if (existing) existing.remove();
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  return (
    <div className="homepage-shell">
      <style>{PAGE_CSS}</style>

      <div
        ref={translateDockRef}
        className={`translate-dock${isTranslateOpen ? " open" : ""}`}
        aria-label="Language selector"
      >
        <button
          type="button"
          className="translate-dock-handle"
          aria-expanded={isTranslateOpen}
          aria-label="Toggle language selector"
          onClick={() => setIsTranslateOpen((prev) => !prev)}
        >
          🌐 Language
        </button>
        <div className="translate-dock-panel">
          <div className="translate-dock-panel-inner">
            <TranslateButton />
          </div>
        </div>
      </div>

      <nav>
        <div className="nav-inner">
          <Link to="/" className="logo" aria-label="BlinqFix home">
            <img src={blinqfixLogo} alt="BlinqFix" />
          </Link>

          <div className="nav-tabs">
            <Link to="/gettheapp" className="nav-tab active">
              For Homeowners
            </Link>
            <Link to="/getjobs" className="nav-tab pro-tab">
              For Service Pros
            </Link>
          </div>

          <Link to="/gettheapp" className="btn-app">
            📱 Get the App
          </Link>
        </div>
      </nav>

      <main>
        <section className="hero">
          <div className="hero-network" aria-hidden="true">
            <span className="network-ring nr1"></span>
            <span className="network-ring nr2"></span>
            <span className="network-ring nr3"></span>
          </div>
          <div className="hero-inner">
            <div>
              <div className="hero-badge">
                <span className="badge-dot"></span> Pros Available Now in Your
                Area
              </div>
              <h1>
                Fix It <em>Fast.</em>
                <br />
                Fix It Now.
                <br />
                24/7 Emergency
                <br />
                Home & Business Services.
              </h1>
              <p className="hero-sub">
                BlinqFix connects you with local electricians, plumbers, HVAC
                techs, and handymen in minutes, not days. Emergency or
                scheduled.
              </p>
              <div className="hero-cta">
                <Link to="/gettheapp" className="btn-primary">
                  Book a Pro Now
                </Link>
                <a href="#how-it-works" className="btn-secondary">
                  How It Works
                </a>
              </div>
              <div className="hero-trust">
                <div className="trust-avatars">
                  <div
                    className="trust-avatar"
                    style={{ background: "#1A7F4B" }}
                  >
                    MR
                  </div>
                  <div
                    className="trust-avatar"
                    style={{ background: "#C23D06" }}
                  >
                    JL
                  </div>
                  <div
                    className="trust-avatar"
                    style={{ background: "#185FA5" }}
                  >
                    SK
                  </div>
                  <div
                    className="trust-avatar"
                    style={{ background: "#854F0B" }}
                  >
                    AP
                  </div>
                </div>
                <p className="trust-note">
                  <strong>Fast help</strong> when home repairs cannot wait
                </p>
              </div>
            </div>

            <div className="hero-visual" aria-hidden="true">
              <div className="phone-mockup">
                <div className="phone-notch"></div>
                <div className="phone-status">
                  <span className="phone-time">9:42 AM</span>
                  <span style={{ fontSize: ".7rem", color: "#6B7280" }}>
                    ●●●
                  </span>
                </div>
                <p className="phone-label">Emergency Dispatch</p>
                <p className="phone-heading">Pros Nearby</p>

                <div className="dispatch-card">
                  <div className="dispatch-row">
                    <div
                      className="dispatch-icon"
                      style={{ background: "#1E3A5F" }}
                    >
                      🛠
                    </div>
                    <div className="dispatch-meta">
                      <div className="dispatch-name">Mike T.</div>
                      <div className="dispatch-dist">
                        Licensed Plumber · 2.1 mi away
                      </div>
                    </div>
                    <div className="dispatch-eta">12 min</div>
                  </div>
                  <div className="dispatch-bar">
                    <div className="dispatch-fill"></div>
                  </div>
                </div>

                <div className="dispatch-card">
                  <div className="dispatch-row">
                    <div
                      className="dispatch-icon"
                      style={{ background: "#164E63" }}
                    >
                      ⚡
                    </div>
                    <div className="dispatch-meta">
                      <div className="dispatch-name">Sarah K.</div>
                      <div className="dispatch-dist">
                        Electrician · 3.4 mi away
                      </div>
                    </div>
                    <div className="dispatch-eta green">18 min</div>
                  </div>
                  <div className="dispatch-bar">
                    <div
                      className="dispatch-fill"
                      style={{ width: "54%" }}
                    ></div>
                  </div>
                </div>

                <div className="job-card">
                  <div className="job-row">
                    <span className="job-label">Current Job</span>
                    <span className="job-status">Dispatching</span>
                  </div>
                  <div className="job-title">Burst pipe repair</div>
                  <div>
                    <span className="job-stars">★★★★★</span>
                    <span className="job-confirm">
                      {" "}
                      real-time status updates
                    </span>
                  </div>
                </div>
              </div>

              {/* <div className="float-badge fb1">
                Same-Day Help
                <div className="fb-sub">Emergency / On-Demand</div>
              </div>
              <div className="float-badge fb2">
                Track Your Pro
                <div className="fb-sub">Know when they arrive</div>
              </div>
            </div>*/}
              <div className="float-card float-card-primary fb1">
                <div className="float-card-icon">⚡</div>
                <div className="float-card-content">
                  <div className="float-card-title">Same-Day Help</div>
                  <div className="float-card-sub">Emergency / On-Demand</div>
                </div>
              </div>

              <div className="float-card float-card-secondary fb2">
                <div className="float-card-icon">📍</div>
                <div className="float-card-content">
                  <div className="float-card-title">Track Your Pro</div>
                  <div className="float-card-sub">Know when they arrive</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="services-strip">
          <div className="svc-scroll">
            <div className="svc-item">⚡ Electrical</div>
            <div className="svc-item">🚰 Plumbing</div>
            <div className="svc-item">❄️ HVAC</div>
            <div className="svc-item">🪚 Handyman</div>
            <div className="svc-item">🔒 Locksmith</div>
            <div className="svc-item">🏠 Roofing</div>
            <div className="svc-item">🧽 Cleaning</div>
            <div className="svc-item">🛠️ General Repair</div>
          </div>
        </div>

        <div className="trust-bar">
          <div className="trust-bar-inner">
            <div className="trust-item">
              <div className="trust-icon">⏱️</div>
              <div>
                <div className="trust-big">Fast Response</div>
                <div className="trust-small">Built for urgent home issues</div>
              </div>
            </div>
            <div className="trust-item">
              <div className="trust-icon">📍</div>
              <div>
                <div className="trust-big">Local Coverage</div>
                <div className="trust-small">Connect with nearby pros</div>
              </div>
            </div>
            <div className="trust-item">
              <div className="trust-icon">💳</div>
              <div>
                <div className="trust-big">In-App Payments</div>
                <div className="trust-small">Simple checkout and receipts</div>
              </div>
            </div>
            <div className="trust-item">
              <div className="trust-icon">💬</div>
              <div>
                <div className="trust-big">Clear Updates</div>
                <div className="trust-small">
                  Track and message in one place
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="section" id="how-it-works">
          <div className="section-inner">
            <p className="section-label">How It Works</p>
            <h2 className="section-title">Get Help in 3 Simple Steps</h2>
            <p className="section-sub">
              When something breaks, speed matters. BlinqFix helps you request
              help fast and keep the whole job organized.
            </p>

            <div className="steps-grid">
              <div className="step-card">
                <div className="step-num">1</div>
                <div className="step-icon">📱</div>
                <h3 className="step-title">Request Service</h3>
                <p className="step-desc">
                  Open the app, describe the issue, and tell us what you need.
                  Emergency or scheduled — both are supported.
                </p>
              </div>
              <div className="step-card">
                <div className="step-num">2</div>
                <div className="step-icon">📍</div>
                <h3 className="step-title">Get Matched</h3>
                <p className="step-desc">
                  BlinqFix connects you with a nearby pro and keeps you updated
                  on status, timing, and job progress.
                </p>
              </div>
              <div className="step-card">
                <div className="step-num">3</div>
                <div className="step-icon">✅</div>
                <h3 className="step-title">Get It Done</h3>
                <p className="step-desc">
                  Message, track, and pay in one place once the work is
                  complete. No messy back-and-forth.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section alt">
          <div className="section-inner">
            <p className="section-label">Popular Services</p>
            <h2 className="section-title">Emergency or On-Demand</h2>
            <p className="section-sub">
              Browse common service categories and request the help you need
              without long delays or endless phone calls.
            </p>

            <div className="services-grid">
              {services.map((service) => (
                <Link
                  key={service.name}
                  to="/gettheapp"
                  className="svc-card"
                  aria-label={`Request ${service.name} service`}
                >
                  <div className="svc-emoji">{service.emoji}</div>
                  <div className="svc-name">{service.name}</div>
                  <div className="svc-avail">{service.avail}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section-inner split">
            <div>
              <p className="section-label">Why Homeowners Use BlinqFix</p>
              <h2 className="section-title">
                A Faster, Cleaner Way to Handle Repairs
              </h2>
              <p className="section-sub">
                Instead of scrambling through calls and texts, you can manage
                the whole repair flow in one place.
              </p>
              <ul className="proof-list">
                <li className="proof-item">
                  <span className="proof-check">✓</span>
                  <span>
                    Request help quickly for urgent and non-urgent repairs.
                  </span>
                </li>
                <li className="proof-item">
                  <span className="proof-check">✓</span>
                  <span>
                    Track your pro and receive clearer arrival expectations.
                  </span>
                </li>
                <li className="proof-item">
                  <span className="proof-check">✓</span>
                  <span>
                    Keep communication, updates, and payment tied to one job
                    thread.
                  </span>
                </li>
                <li className="proof-item">
                  <span className="proof-check">✓</span>
                  <span>
                    Use one platform for common household service needs.
                  </span>
                </li>
              </ul>

              <div className="stat-row">
                <div className="stat-box">
                  <div className="stat-num">24/7</div>
                  <div className="stat-label">Emergency request flow</div>
                </div>
                <div className="stat-box">
                  <div className="stat-num">1 App</div>
                  <div className="stat-label">Booking to payment</div>
                </div>
                <div className="stat-box">
                  <div className="stat-num">Fast</div>
                  <div className="stat-label">Better than phone tag</div>
                </div>
              </div>
            </div>

            <div className="visual-card">
              <div className="vc-header">
                <div className="vc-dot" style={{ background: "#F4520C" }}></div>
                <div className="vc-dot" style={{ background: "#F59E0B" }}></div>
                <div className="vc-dot" style={{ background: "#1A7F4B" }}></div>
                <strong>Live Job View</strong>
              </div>

              <div className="map-placeholder">
                <div className="map-grid"></div>
                <div className="map-ripple"></div>
                <div className="map-pin">
                  <span className="map-pin-inner">📍</span>
                </div>
              </div>

              <div className="pro-row">
                <div className="pro-avatar" style={{ background: "#185FA5" }}>
                  SK
                </div>
                <div className="pro-info">
                  <div className="pro-name">Sarah K.</div>
                  <div className="pro-trade">Electrician</div>
                </div>
                <div className="pro-eta">18 min</div>
              </div>
              <div className="pro-row">
                <div className="pro-avatar" style={{ background: "#1A7F4B" }}>
                  MT
                </div>
                <div className="pro-info">
                  <div className="pro-name">Mike T.</div>
                  <div className="pro-trade">Plumber</div>
                </div>
                <div className="pro-eta">12 min</div>
              </div>
              <div className="pro-row">
                <div className="pro-avatar" style={{ background: "#C23D06" }}>
                  JR
                </div>
                <div className="pro-info">
                  <div className="pro-name">Javier R.</div>
                  <div className="pro-trade">HVAC Tech</div>
                </div>
                <div className="pro-eta">22 min</div>
              </div>
            </div>
          </div>
        </section>

        <section className="testi-section">
          <div className="section-inner">
            <p className="section-label">Homeowner Reviews</p>
            <h2 className="section-title">
              What People Like About the Experience
            </h2>
            <p className="section-sub">
              Fast coordination and less friction are the recurring themes.
            </p>

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
          <h2>Ready to Get It Fixed?</h2>
          <p>
            Use the homeowner flow to request service fast, or explore the app
            page first.
          </p>
          <div className="cta-btns">
            <Link to="/gettheapp" className="btn-white">
              Get Help Now
            </Link>
            <Link to="/getjobs" className="btn-outline-white">
              Are You a Pro? Join BlinqFix
            </Link>
          </div>
        </div>
      </main>

      <AppBanner />

      <footer>
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
              <a href="#how-it-works">How It Works</a>
              <Link to="/gettheapp">Download App</Link>
              <Link to="/faq">FAQ</Link>
            </div> */}

            {/* <div className="footer-col">
              <h4>Service Pros</h4>
              <Link to="/getjobs">Join as a Pro</Link>
              <Link to="/pro">Pro Sign Up</Link>
              <Link to="/getjobs">How Pros Earn</Link>
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
}
