import React, { useCallback } from "react";
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
} from "lucide-react";
import AppBanner from "./AppBanner";

export default function PricingSection({
  // Pricing knobs
  customerFeePercent = 7,
  proZipPrice = 49.99,
  proSlotsMin = 5,
  proSlotsMax = 7,

  // Promo knobs
  promoFirstN = 50,
  promoMonthsFree = 12,

  // Optional: override button behavior (if you want custom analytics etc.)
  onCustomerClick,
  onProClick,

  // Where to scroll (must match the id below)
  downloadTargetId = "download",
}) {
  const money = (n) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(Number(n || 0));

  const scrollToDownload = useCallback(() => {
    const el = document.getElementById(downloadTargetId);
    if (!el) return;

    // Smooth scroll to the banner
    el.scrollIntoView({ behavior: "smooth", block: "start" });

    // Optional: update URL hash without "jumping"
    if (window.history && window.history.replaceState) {
      window.history.replaceState(null, "", `#${downloadTargetId}`);
    }
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
        {/* Header */}
        <div className="bf-priceHeader">
          <div className="bf-pill">
            <BadgePercent size={16} />
            <span>SIMPLE PRICING • EMERGENCY-FIRST MARKETPLACE</span>
          </div>

          <h2 className="bf-title">
            Pricing built for speed{" "}
            <span className="bf-titleEm"> and reliability.</span>
          </h2>

          <p className="bf-subtitle">
            Customers join free and pay per job. Service Pros can join free, or
            subscribe to a zipcode to get local priority job alerts.
          </p>
        </div>

        {/* Promo */}
        <motion.div
          className="bf-promoCard"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.45 }}
        >
          <div className="bf-promoLeft">
            <div className="bf-promoIcon">
              <Crown size={20} />
            </div>

            <div className="bf-promoCopy">
              <div className="bf-promoKicker">
                Limited-time launch promotion
              </div>
              <div className="bf-promoText">
                <strong>First {promoFirstN} Service Pros</strong> get the{" "}
                <strong>Pro</strong> subscription <strong>FREE</strong> for{" "}
                <strong>{promoMonthsFree} months</strong>. Secure your zipcode
                early.
              </div>

              <div className="bf-promoMeta">
                <span className="bf-metaItem">
                  <Bell size={16} /> Priority alerts first
                </span>
                <span className="bf-metaItem">
                  <Users size={16} /> Limited seats per zipcode
                </span>
                <span className="bf-metaItem">
                  <MapPin size={16} /> Per-trade coverage
                </span>
              </div>
            </div>
          </div>

          <div className="bf-promoActions">
            <button
              className="bf-btn bf-btnPro"
              onClick={handleProClick}
              type="button"
            >
              <Wrench size={18} />
              Claim Pro Access
              <ArrowRight size={18} />
            </button>

            <button
              className="bf-btn bf-btnCustomer"
              onClick={handleCustomerClick}
              type="button"
            >
              <Zap size={18} />
              Request Service
              <ArrowRight size={18} />
            </button>
          </div>
        </motion.div>

        {/* Cards */}
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
                  <span className="bf-chip">
                    HOMEOWNERS • PROPERTY MANAGERS
                  </span>
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
                Track your pro’s ETA Uber-style
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
                  to join ( Free tier available )
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
                <strong>
                  Keep 93% of the job plus gain a customer for life
                </strong>{" "}
                - 7% BlinqFix platform fee
              </li>
              <li>
                <span className="bf-dot ok" />
                <strong>First to accept</strong> gets the job
              </li>
              <li>
                <span className="bf-dot ok" />
                If no subscriber accepts, it’s sent to{" "}
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

        {/* How it works strip */}
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
                Customers pay in app & payouts are streamlined.
              </div>
            </div>
          </div>
        </div>

        <p className="bf-footnote">
          Pricing and capacity may vary by market and trade. Promotional offer
          applies to qualified early sign ups while available.
        </p>

        {/* DOWNLOAD TARGET */}
        <div id={downloadTargetId} className="bf-downloadTarget">
          {/* <AppBanner /> */}
        </div>
      </div>
    </section>
  );
}

const css = `
/* existing css unchanged... */

.bf-downloadTarget{
  margin-top: 22px;
  scroll-margin-top: 90px; /* IMPORTANT: prevents header overlap when scrolling */
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

/* ====== PROMO ====== */
.bf-promoCard{
  margin: clamp(18px, 3vw, 26px) 0 22px;
  border-radius: 22px;
  padding: clamp(14px, 2.4vw, 18px);
  border: 1px solid rgba(250, 204, 21, .35);
  background: radial-gradient(800px 260px at 0% 0%, rgba(250,204,21,.18), transparent 60%),
              rgba(255,255,255,.04);
  box-shadow: 0 18px 60px rgba(0,0,0,.35);
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: space-between;
}
.bf-promoLeft{ display:flex; gap: 14px; align-items:flex-start; min-width: 0; }
.bf-promoIcon{
  width: 44px; height: 44px; border-radius: 14px;
  display:flex; align-items:center; justify-content:center;
  background: rgba(250,204,21,.14);
  border: 1px solid rgba(250,204,21,.25);
  color: #facc15;
  flex: 0 0 auto;
}
.bf-promoCopy{ min-width:0; }
.bf-promoKicker{ font-weight: 800; color: rgba(255,255,255,.92); font-size: 14px; margin-bottom: 6px; }
.bf-promoText{ color: rgba(230,237,243,.78); line-height: 1.5; font-size: 14px; }
.bf-promoMeta{ display:flex; flex-wrap: wrap; gap: 10px 14px; margin-top: 10px; }
.bf-metaItem{
  display:inline-flex; align-items:center; gap: 8px;
  font-size: 12px; color: rgba(230,237,243,.65);
  background: rgba(255,255,255,.04);
  border: 1px solid rgba(255,255,255,.08);
  padding: 8px 10px; border-radius: 999px;
}
.bf-promoActions{ display:flex; gap: 10px; flex: 0 0 auto; }

/* ====== BUTTONS ====== */
.bf-btn{
  appearance:none; border: none; cursor: pointer;
  display:inline-flex; align-items:center; justify-content:center;
  gap: 10px; padding: 12px 16px; border-radius: 14px;
  font-weight: 800; font-size: 14px;
  transition: transform .15s ease, box-shadow .15s ease, background .15s ease, border-color .15s ease;
  white-space: nowrap;
}
.bf-btn:active{ transform: translateY(0px) scale(.99); }
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

/* ====== RESPONSIVE BREAKPOINTS ====== */
@media (min-width: 720px){
  .bf-proMiniGrid{ grid-template-columns: 1fr 1fr; }
  .bf-flow{ grid-template-columns: 1fr 1fr 1fr; }
}
@media (min-width: 920px){
  .bf-cardGrid{ grid-template-columns: 1fr 1fr; }
  .bf-promoCard{ padding: 18px 18px; }
}

/* ====== MOBILE FIXES ====== */
@media (max-width: 680px){
  .bf-promoCard{ flex-direction: column; align-items: stretch; }
  .bf-promoActions{ width: 100%; flex-direction: column; }
  .bf-btn{ width: 100%; justify-content: center; white-space: normal; }
  .bf-priceBig{ font-size: 42px; }
}
`;
