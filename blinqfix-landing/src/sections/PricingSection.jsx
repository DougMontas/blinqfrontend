import React, { useCallback, useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Crown,
  Home,
  Wrench,
  Zap,
  ShieldCheck,
  Bell,
  MapPin,
  Users,
  BadgePercent,
  Star,
  Timer,
  Flame,
} from "lucide-react";
import AppBanner from "./AppBanner";

// ─── Ambassador counter logic ─────────────────────────────────────────────────
const LAUNCH_DATE = new Date("2026-05-01T00:00:00Z");
const AMBASSADOR_TOTAL = 500;
const DAILY_RATE = 3; // average signups per day

function getSpotsRemaining() {
  const now = new Date();
  const daysElapsed = Math.max(
    0,
    Math.floor((now - LAUNCH_DATE) / 86400000)
  );
  const dayOfYear = Math.floor(
    (now - new Date(now.getFullYear(), 0, 0)) / 86400000
  );
  const variance = (dayOfYear * 17 + 3) % 5; // deterministic 0-4
  const claimed = Math.min(
    daysElapsed * DAILY_RATE + variance,
    AMBASSADOR_TOTAL
  );
  return Math.max(0, AMBASSADOR_TOTAL - claimed);
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function PricingSection({
  customerFeePercent = 7,
  proZipPrice = 49.99,
  proSlotsMin = 5,
  proSlotsMax = 7,
  promoFirstN = 500,
  promoMonthsFree = 12,
  onCustomerClick,
  onProClick,
  downloadTargetId = "download",
}) {
  const money = (n) =>
    new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(
      Number(n || 0)
    );

  const spotsRemaining = getSpotsRemaining();
  const spotsClaimed = AMBASSADOR_TOTAL - spotsRemaining;
  const progressPct = Math.min((spotsClaimed / AMBASSADOR_TOTAL) * 100, 100);
  const promoValue = (proZipPrice * promoMonthsFree).toFixed(2);

  // Animated counter: count down from spotsRemaining + 18 to spotsRemaining
  const [displayCount, setDisplayCount] = useState(spotsRemaining + 18);
  const counterRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = counterRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const start = spotsRemaining + 18;
          const end = spotsRemaining;
          const duration = 2000;
          const t0 = performance.now();
          const tick = (now) => {
            const elapsed = now - t0;
            const p = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setDisplayCount(Math.round(start - (start - end) * eased));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [spotsRemaining]);

  const scrollToDownload = useCallback(() => {
    const el = document.getElementById(downloadTargetId);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    if (window.history?.replaceState)
      window.history.replaceState(null, "", `#${downloadTargetId}`);
  }, [downloadTargetId]);

  const handleProClick = (e) => {
    if (onProClick) onProClick(e);
    scrollToDownload();
  };
  const handleCustomerClick = (e) => {
    if (onCustomerClick) onCustomerClick(e);
    scrollToDownload();
  };

  return (
    <section className="bf-priceWrap" aria-label="BlinqFix Pricing">
      <style>{css}</style>

      <div className="bf-priceContainer">
        {/* ── Header ── */}
        <div className="bf-priceHeader">
          <div className="bf-pill">
            <BadgePercent size={16} />
            <span>SIMPLE PRICING • EMERGENCY-FIRST MARKETPLACE</span>
          </div>
          <h2 className="bf-title">
            Pricing built for speed{" "}
            <span className="bf-titleEm">and reliability.</span>
          </h2>
          <p className="bf-subtitle">
            Customers join free and pay per job. Service Pros can join free, or
            subscribe to a zipcode to get local priority job alerts.
          </p>
        </div>

        {/* ── Ambassador Banner ── */}
        <motion.div
          className="bf-ambassador"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          {/* Glow layers */}
          <div className="bf-amb-glow1" aria-hidden="true" />
          <div className="bf-amb-glow2" aria-hidden="true" />

          {/* Top kicker row */}
          <div className="bf-amb-kicker">
            <Crown size={14} />
            <span>BLINQFIX AMBASSADOR PROGRAM</span>
            <span className="bf-amb-kickerDot" />
            <Flame size={13} />
            <span>LAUNCH OFFER — LIMITED TIME</span>
          </div>

          {/* Main body */}
          <div className="bf-amb-body">
            {/* Counter block */}
            <div className="bf-amb-counter" ref={counterRef}>
              <div className="bf-amb-counterRing" aria-hidden="true" />
              <div className="bf-amb-counterNum">{displayCount}</div>
              <div className="bf-amb-counterLabel">
                Ambassador spots
                <br />
                <span className="bf-amb-counterSub">remaining of {promoFirstN}</span>
              </div>
            </div>

            {/* Value block */}
            <div className="bf-amb-value">
              <div className="bf-amb-headline">
                First{" "}
                <em className="bf-amb-hl">{promoFirstN} Service Pros</em> get the{" "}
                <em className="bf-amb-hl">Pro subscription free</em> for{" "}
                <em className="bf-amb-hl">{promoMonthsFree} months</em>
              </div>
              <div className="bf-amb-valueBadge">
                <Star size={13} fill="currentColor" />
                <span>${promoValue} value — yours free</span>
              </div>
              <p className="bf-amb-desc">
                Secure your zipcode before competitors do. Lock in priority job
                alerts, keep 93% of every job, and grow your client base with
                zero subscription cost for a full year.
              </p>

              {/* Progress bar */}
              <div className="bf-amb-progress">
                <div className="bf-amb-progressTrack">
                  <div
                    className="bf-amb-progressFill"
                    style={{ width: `${progressPct}%` }}
                  />
                </div>
                <div className="bf-amb-progressMeta">
                  <span>
                    <span className="bf-amb-progressClaimed">{spotsClaimed}</span>
                    {" "}claimed
                  </span>
                  <span>{spotsRemaining} left</span>
                </div>
              </div>

              {/* Perks row */}
              <div className="bf-amb-perks">
                <span className="bf-amb-perk">
                  <Bell size={13} /> Priority alerts
                </span>
                <span className="bf-amb-perk">
                  <Users size={13} /> Limited seats
                </span>
                <span className="bf-amb-perk">
                  <MapPin size={13} /> Per-trade coverage
                </span>
                <span className="bf-amb-perk">
                  <Timer size={13} /> Cancel anytime after
                </span>
              </div>
            </div>
          </div>

          {/* CTA row */}
          <div className="bf-amb-ctas">
            <button
              className="bf-btn bf-btnAmbassador"
              onClick={handleProClick}
              type="button"
            >
              <Crown size={17} />
              Claim My Ambassador Spot
              <ArrowRight size={17} />
            </button>
            <button
              className="bf-btn bf-btnCustomer"
              onClick={handleCustomerClick}
              type="button"
            >
              <Zap size={17} />
              Request Service
              <ArrowRight size={17} />
            </button>
          </div>
        </motion.div>

        {/* ── Pricing cards ── */}
        <div className="bf-cardGrid">
          {/* Customers */}
          <motion.article
            className="bf-card bf-cardCustomer"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45 }}
          >
            <div className="bf-cardTop">
              <div className="bf-cardIcon customer">
                <Home size={20} />
              </div>
              <div>
                <div className="bf-cardTitleRow">
                  <h3 className="bf-cardTitle">Customers</h3>
                  <span className="bf-chip">HOMEOWNERS • PROPERTY MANAGERS</span>
                </div>
              </div>
            </div>

            <div className="bf-priceRow">
              <div className="bf-priceBig">
                Free <span className="bf-priceUnit">to join</span>
              </div>
              <div className="bf-priceNote">
                Pay for the job in-app. A small platform fee helps support fast
                dispatch &amp; secure payments.
              </div>
            </div>

            <ul className="bf-list">
              <li>
                <span className="bf-dot ok" />
                Transparent checkout: job total +{" "}
                <strong>{customerFeePercent}%</strong> BlinqFix platform fee
              </li>
              <li>
                <span className="bf-dot ok" />
                Fixed price quote upfront
              </li>
              <li>
                <span className="bf-dot ok" />
                Track your pro's ETA Uber-style
              </li>
            </ul>

            <div className="bf-cardCtaRow">
              <button
                className="bf-btn bf-btnPrimary"
                onClick={handleCustomerClick}
                type="button"
              >
                Get a Service Pro <ArrowRight size={18} />
              </button>
            </div>
          </motion.article>

          {/* Service Pros */}
          <motion.article
            className="bf-card bf-cardPro"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45, delay: 0.05 }}
          >
            <div className="bf-cardTop">
              <div className="bf-cardIcon pro">
                <Wrench size={20} />
              </div>
              <div>
                <div className="bf-cardTitleRow">
                  <h3 className="bf-cardTitle">Service Pros</h3>
                  <span className="bf-chip">FREE + PRO OPTIONS</span>
                </div>
              </div>
            </div>

            <div className="bf-priceRow">
              <div className="bf-priceBig">
                Free{" "}
                <span className="bf-priceUnit">
                  to join (Free tier available)
                </span>
              </div>
              <div className="bf-priceNote">
                Want priority alerts in a specific trade + zipcode? Subscribe
                and get notified first.
              </div>
            </div>

            <div className="bf-proMiniGrid">
              <div className="bf-mini">
                <div className="bf-miniLabel">Pro</div>
                <div className="bf-miniValue">
                  {money(proZipPrice)}/mo{" "}
                  <span className="bf-miniUnit">per zipcode</span>
                </div>
                <div className="bf-miniHint">Per trade • cancel anytime</div>
              </div>
              <div className="bf-mini">
                <div className="bf-miniLabel">Capacity</div>
                <div className="bf-miniValue">
                  {proSlotsMin} – {proSlotsMax}{" "}
                  <span className="bf-miniUnit">pros</span>
                </div>
                <div className="bf-miniHint">Per trade • per zipcode</div>
              </div>
            </div>

            <ul className="bf-list">
              <li>
                <span className="bf-dot ok" />
                <strong>Subscribed pros</strong> get job alerts first
              </li>
              <li>
                <span className="bf-dot ok" />
                <strong>Keep 93% of the job plus gain a customer for life</strong>{" "}
                - 7% BlinqFix platform fee
              </li>
              <li>
                <span className="bf-dot ok" />
                <strong>First to accept</strong> gets the job
              </li>
              <li>
                <span className="bf-dot ok" />
                If no subscriber accepts, it's sent to{" "}
                <strong>Free tier</strong> pros
              </li>
              <li>
                <span className="bf-dot ok" />
                Designed for serious trade businesses (not junk leads)
              </li>
            </ul>

            <div className="bf-cardCtaRow">
              <button
                className="bf-btn bf-btnPro"
                onClick={handleProClick}
                type="button"
              >
                Become a BlinqFix Pro <ArrowRight size={18} />
              </button>
            </div>
          </motion.article>
        </div>

        {/* ── How it works strip ── */}
        <div className="bf-flow">
          <div className="bf-flowItem">
            <div className="bf-flowIcon">
              <Bell size={18} />
            </div>
            <div>
              <div className="bf-flowTitle">Priority Alerts</div>
              <div className="bf-flowText">
                Subscribed pros get notified first in their zipcode.
              </div>
            </div>
          </div>
          <div className="bf-flowItem">
            <div className="bf-flowIcon">
              <Zap size={18} />
            </div>
            <div>
              <div className="bf-flowTitle">Fast Assignment</div>
              <div className="bf-flowText">
                First pro to accept gets the job no bidding wars.
              </div>
            </div>
          </div>
          <div className="bf-flowItem">
            <div className="bf-flowIcon">
              <ShieldCheck size={18} />
            </div>
            <div>
              <div className="bf-flowTitle">Secure Payments</div>
              <div className="bf-flowText">
                Customers pay in app &amp; payouts are streamlined.
              </div>
            </div>
          </div>
        </div>

        <p className="bf-footnote">
          Pricing and capacity may vary by market and trade. Promotional offer
          applies to qualified early sign ups while available.
        </p>

        <div id={downloadTargetId} className="bf-downloadTarget" />
      </div>
    </section>
  );
}

const css = `
.bf-downloadTarget{
  margin-top: 22px;
  scroll-margin-top: 90px;
}

/* ====== WRAPPER ====== */
.bf-priceWrap{
  background: radial-gradient(1200px 700px at 50% 0%, rgba(88,166,255,.18), transparent 55%),
              radial-gradient(1000px 600px at 20% 40%, rgba(34,197,94,.14), transparent 55%),
              #0d1117;
  color:#e6edf3;
  padding: clamp(56px, 7vw, 92px) 16px;
  overflow: hidden;
}
.bf-priceContainer{ max-width: 1120px; margin: 0 auto; }

/* ====== HEADER ====== */
.bf-priceHeader{ text-align:center; margin-bottom: clamp(18px, 3vw, 28px); }
.bf-pill{
  display:inline-flex; align-items:center; gap:10px;
  padding: 10px 16px; border-radius: 999px;
  background: rgba(255,255,255,.05);
  border: 1px solid rgba(255,255,255,.10);
  color: rgba(255,255,255,.75);
  text-transform: uppercase; letter-spacing: .12em;
  font-weight: 700; font-size: 12px;
}
.bf-title{
  margin: 18px auto 10px;
  font-size: clamp(30px, 5.4vw, 56px);
  line-height: 1.05; font-weight: 900;
  letter-spacing: -0.03em;
  max-width: 18ch;
}
.bf-titleEm{ color: rgba(255,255,255,.92); }
.bf-subtitle{
  margin: 0 auto;
  max-width: 60ch;
  font-size: clamp(15px, 2.2vw, 18px);
  line-height: 1.6;
  color: rgba(230,237,243,.72);
}

/* ====== AMBASSADOR BANNER ====== */
.bf-ambassador{
  position: relative;
  overflow: hidden;
  margin: clamp(18px,3vw,28px) 0 22px;
  border-radius: 26px;
  padding: clamp(20px,3vw,32px);
  border: 1px solid rgba(250,204,21,.45);
  background: radial-gradient(900px 400px at 0% 0%, rgba(250,204,21,.12), transparent 60%),
              radial-gradient(700px 400px at 100% 100%, rgba(34,197,94,.10), transparent 60%),
              rgba(13,17,23,.95);
  box-shadow: 0 0 0 1px rgba(250,204,21,.12),
              0 24px 80px rgba(0,0,0,.50),
              0 0 120px rgba(250,204,21,.06) inset;
}
.bf-amb-glow1{
  position:absolute; top:-60px; left:-60px;
  width:280px; height:280px; border-radius:50%;
  background: radial-gradient(circle, rgba(250,204,21,.18) 0%, transparent 70%);
  pointer-events:none;
}
.bf-amb-glow2{
  position:absolute; bottom:-80px; right:-40px;
  width:320px; height:320px; border-radius:50%;
  background: radial-gradient(circle, rgba(34,197,94,.14) 0%, transparent 70%);
  pointer-events:none;
}

/* Kicker row */
.bf-amb-kicker{
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 6px 14px;
  border-radius: 999px;
  background: rgba(250,204,21,.12);
  border: 1px solid rgba(250,204,21,.28);
  color: #fde68a;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: .12em;
  text-transform: uppercase;
  margin-bottom: 22px;
}
.bf-amb-kickerDot{
  width: 3px; height: 3px; border-radius:50%;
  background: rgba(253,230,138,.5);
}

/* Body layout */
.bf-amb-body{
  display: flex;
  gap: clamp(20px, 4vw, 40px);
  align-items: center;
  flex-wrap: wrap;
}

/* Counter */
.bf-amb-counter{
  position: relative;
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: clamp(140px, 18vw, 180px);
  height: clamp(140px, 18vw, 180px);
  border-radius: 50%;
  background: radial-gradient(circle at 40% 30%, rgba(250,204,21,.18), rgba(0,0,0,.5) 70%);
  border: 2px solid rgba(250,204,21,.35);
  box-shadow: 0 0 40px rgba(250,204,21,.12), 0 0 0 8px rgba(250,204,21,.05);
  text-align: center;
  z-index: 1;
}
.bf-amb-counterRing{
  position: absolute;
  inset: -8px;
  border-radius: 50%;
  border: 1px dashed rgba(250,204,21,.22);
  animation: bf-spin 24s linear infinite;
}
@keyframes bf-spin{ to{ transform: rotate(360deg); } }
.bf-amb-counterNum{
  font-size: clamp(38px, 5vw, 54px);
  font-weight: 950;
  letter-spacing: -0.04em;
  color: #fef08a;
  line-height: 1;
  font-variant-numeric: tabular-nums;
  text-shadow: 0 0 24px rgba(250,204,21,.4);
}
.bf-amb-counterLabel{
  font-size: 11px;
  font-weight: 700;
  color: rgba(253,230,138,.75);
  letter-spacing: .02em;
  margin-top: 6px;
  line-height: 1.4;
}
.bf-amb-counterSub{
  font-size: 10px;
  color: rgba(253,230,138,.5);
  font-weight: 600;
}

/* Value copy */
.bf-amb-value{ flex: 1 1 260px; min-width: 0; }
.bf-amb-headline{
  font-size: clamp(16px, 2.4vw, 22px);
  font-weight: 800;
  line-height: 1.4;
  color: rgba(230,237,243,.90);
  margin-bottom: 10px;
}
.bf-amb-hl{
  font-style: normal;
  color: #fde68a;
}
.bf-amb-valueBadge{
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 6px 14px;
  border-radius: 999px;
  background: rgba(34,197,94,.12);
  border: 1px solid rgba(34,197,94,.30);
  color: #34d399;
  font-size: 13px;
  font-weight: 800;
  margin-bottom: 12px;
}
.bf-amb-desc{
  color: rgba(230,237,243,.62);
  font-size: 14px;
  line-height: 1.65;
  margin-bottom: 16px;
}

/* Progress bar */
.bf-amb-progress{ margin-bottom: 16px; }
.bf-amb-progressTrack{
  height: 6px;
  border-radius: 999px;
  background: rgba(255,255,255,.08);
  overflow: hidden;
  margin-bottom: 6px;
}
.bf-amb-progressFill{
  height: 100%;
  border-radius: 999px;
  background: linear-gradient(90deg, #facc15, #22c55e);
  box-shadow: 0 0 8px rgba(250,204,21,.4);
  transition: width 1.2s ease;
}
.bf-amb-progressMeta{
  display: flex;
  justify-content: space-between;
  font-size: 11px;
  color: rgba(230,237,243,.50);
  font-weight: 600;
}
.bf-amb-progressClaimed{
  color: #fde68a;
  font-weight: 800;
}

/* Perk chips */
.bf-amb-perks{
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.bf-amb-perk{
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  border-radius: 999px;
  background: rgba(255,255,255,.04);
  border: 1px solid rgba(255,255,255,.09);
  font-size: 12px;
  color: rgba(230,237,243,.65);
  font-weight: 600;
}

/* CTA row */
.bf-amb-ctas{
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 22px;
  padding-top: 20px;
  border-top: 1px solid rgba(255,255,255,.07);
}

/* ====== BUTTONS ====== */
.bf-btn{
  appearance:none; border: none; cursor: pointer;
  display:inline-flex; align-items:center; justify-content:center;
  gap: 10px; padding: 12px 18px; border-radius: 14px;
  font-weight: 800; font-size: 14px;
  transition: transform .15s ease, box-shadow .15s ease, background .15s ease;
  white-space: nowrap;
}
.bf-btn:active{ transform: translateY(0) scale(.99); }
.bf-btnAmbassador{
  background: linear-gradient(135deg, #facc15, #f59e0b);
  color: #0d1117;
  box-shadow: 0 10px 32px rgba(250,204,21,.35),
              0 0 0 1px rgba(250,204,21,.25);
  font-size: 15px;
  padding: 14px 22px;
}
.bf-btnAmbassador:hover{
  transform: translateY(-2px);
  box-shadow: 0 16px 48px rgba(250,204,21,.45);
}
.bf-btnPrimary{
  width: 100%;
  background: #58a6ff; color: #0d1117;
  box-shadow: 0 10px 30px rgba(88,166,255,.25);
}
.bf-btnPro{
  background: #22c55e; color: #0d1117;
  box-shadow: 0 10px 30px rgba(34,197,94,.22);
}
.bf-btnCustomer{
  background: rgba(255,255,255,.06);
  color: rgba(255,255,255,.9);
  border: 1px solid rgba(255,255,255,.14);
}
.bf-btn:hover{
  transform: translateY(-1px);
  box-shadow: 0 14px 40px rgba(0,0,0,.35);
}

/* ====== GRID ====== */
.bf-cardGrid{
  display: grid;
  gap: 16px;
  grid-template-columns: 1fr;
  margin-top: 14px;
}
.bf-card{
  border-radius: 22px;
  padding: 18px;
  border: 1px solid rgba(255,255,255,.10);
  background: rgba(255,255,255,.04);
  box-shadow: 0 18px 60px rgba(0,0,0,.30);
  min-width: 0;
}
.bf-cardCustomer{
  background: radial-gradient(700px 380px at 0% 0%, rgba(88,166,255,.14), transparent 65%),
              rgba(255,255,255,.04);
}
.bf-cardPro{
  background: radial-gradient(700px 380px at 0% 0%, rgba(34,197,94,.14), transparent 65%),
              rgba(255,255,255,.04);
}
.bf-cardTop{ display:flex; align-items:flex-start; gap: 12px; margin-bottom: 12px; }
.bf-cardIcon{
  width: 44px; height: 44px; border-radius: 16px;
  display:flex; align-items:center; justify-content:center;
  border: 1px solid rgba(255,255,255,.14);
  flex: 0 0 auto;
}
.bf-cardIcon.customer{ background: rgba(88,166,255,.12); color: #79c0ff; }
.bf-cardIcon.pro{ background: rgba(34,197,94,.12); color: #34d399; }
.bf-cardTitleRow{ display:flex; flex-wrap: wrap; align-items:center; gap: 10px; }
.bf-cardTitle{ margin: 0; font-size: 22px; font-weight: 900; letter-spacing: -0.02em; }
.bf-chip{
  font-size: 12px; font-weight: 800; letter-spacing: .12em;
  color: rgba(255,255,255,.72);
  padding: 8px 12px; border-radius: 999px;
  background: rgba(255,255,255,.04);
  border: 1px solid rgba(255,255,255,.10);
}
.bf-priceRow{ margin: 12px 0 10px; }
.bf-priceBig{ font-size: 48px; font-weight: 950; letter-spacing: -0.04em; line-height: 1; }
.bf-priceUnit{ font-size: 16px; font-weight: 800; color: rgba(230,237,243,.70); margin-left: 8px; }
.bf-priceNote{ margin-top: 8px; color: rgba(230,237,243,.70); font-size: 14px; line-height: 1.6; }
.bf-list{
  list-style:none; padding: 0; margin: 14px 0 0;
  display:flex; flex-direction: column; gap: 10px;
  color: rgba(230,237,243,.78); font-size: 14px; line-height: 1.5;
}
.bf-dot{
  width: 10px; height: 10px; border-radius: 999px;
  display:inline-block; margin-right: 10px; transform: translateY(1px);
}
.bf-dot.ok{ background: #22c55e; box-shadow: 0 0 0 4px rgba(34,197,94,.14); }
.bf-cardCtaRow{ margin-top: 14px; }

/* Pro mini grid */
.bf-proMiniGrid{ display:grid; grid-template-columns: 1fr; gap: 12px; margin-top: 14px; }
.bf-mini{
  border-radius: 18px; padding: 14px;
  background: rgba(0,0,0,.22);
  border: 1px solid rgba(255,255,255,.08);
}
.bf-miniLabel{
  font-size: 12px; font-weight: 900; letter-spacing: .14em;
  text-transform: uppercase; color: rgba(255,255,255,.70);
  margin-bottom: 8px;
}
.bf-miniValue{ font-size: 18px; font-weight: 950; letter-spacing: -0.02em; color: rgba(255,255,255,.92); }
.bf-miniUnit{ font-size: 12px; font-weight: 900; color: rgba(230,237,243,.65); margin-left: 8px; }
.bf-miniHint{ margin-top: 6px; font-size: 12px; color: rgba(230,237,243,.60); }

/* Flow strip */
.bf-flow{
  margin-top: 18px;
  border-radius: 22px;
  border: 1px solid rgba(255,255,255,.10);
  background: rgba(255,255,255,.03);
  display:grid;
  gap: 12px;
  padding: 14px;
}
.bf-flowItem{ display:flex; gap: 12px; align-items:flex-start; }
.bf-flowIcon{
  width: 40px; height: 40px; border-radius: 14px;
  background: rgba(255,255,255,.04);
  border: 1px solid rgba(255,255,255,.08);
  display:flex; align-items:center; justify-content:center;
  color: rgba(255,255,255,.75);
  flex: 0 0 auto;
}
.bf-flowTitle{ font-weight: 900; color: rgba(255,255,255,.90); margin-bottom: 2px; }
.bf-flowText{ color: rgba(230,237,243,.70); font-size: 14px; line-height: 1.5; }
.bf-footnote{
  margin: 16px 0 0;
  text-align:center;
  color: rgba(230,237,243,.55);
  font-size: 12px;
  line-height: 1.5;
}

/* ====== RESPONSIVE ====== */
@media (min-width: 720px){
  .bf-proMiniGrid{ grid-template-columns: 1fr 1fr; }
  .bf-flow{ grid-template-columns: 1fr 1fr 1fr; }
}
@media (min-width: 920px){
  .bf-cardGrid{ grid-template-columns: 1fr 1fr; }
}

/* ====== MOBILE ====== */
@media (max-width: 680px){
  .bf-amb-body{ flex-direction: column; align-items: center; }
  .bf-amb-counter{ width: 150px; height: 150px; }
  .bf-amb-ctas{ flex-direction: column; }
  .bf-btn{ width: 100%; justify-content: center; white-space: normal; }
  .bf-priceBig{ font-size: 42px; }
}
@media (max-width: 480px){
  .bf-amb-counter{ width: 130px; height: 130px; }
  .bf-amb-counterNum{ font-size: 36px; }
}
`;
