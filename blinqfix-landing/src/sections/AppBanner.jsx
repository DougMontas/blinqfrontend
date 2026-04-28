import { motion } from 'framer-motion';

export default function AppBanner() {
  return (
   
    <section className="app-banner" style={{ width: "100%" }}>
  <motion.div
    className="app-banner-bg"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1 }}
  />

  <div id="banner-inner2" className="banner-inner">
    <h3 className="section-title" style={{ marginBottom: "0.5rem" }}>
      Get the Blinqfix app
    </h3>
    <p className="hero-sub" style={{ maxWidth: "22rem" }}>
      Book or accept jobs on the go. Download BlinqFix for iOS and Android.
    </p>

    <div
      className="badge-row"
      style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}
    >
      {/* APP STORE + QR */}
      <div id="score-column" className="store-column">
        <a
          href="https://apps.apple.com/us/app/blinqfix-app/id6747390132"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "block",
            width: "180px",
            height: "60px",
            overflow: "hidden",
          }}
        >
          <img
            src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
            alt="Download on the App Store"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              display: "block",
            }}
          />
        </a>

        {/* QR under Apple badge */}
        <img
          src="/blinqfix_app_qr.png"
          alt="Scan to download BlinqFix on the App Store"
          className="qr-image"
        />
        <span className="qr-caption">Scan with your iOS device</span>
      </div>

      {/* GOOGLE PLAY + placeholder QR */}
      <div className="store-column">
        <a
          href="https://play.google.com/store/apps/details?id=com.blinqfix.app"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "block",
            width: "180px",
            height: "60px",
            overflow: "hidden",
          }}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/250px-Google_Play_Store_badge_EN.svg.png"
            alt="Get it on Google Play"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              display: "block",
              
            }}
          />
        </a>

        <div className="qr-placeholder">
        <img
          src="/blinqfix_playstore_qr.png"
          alt="Scan to download BlinqFix on the Google Play Store"
          className="qr-image"
          style={{
            marginTop: "2px"
          }}
        />
        </div>
        <span className="qr-caption qr-caption-muted">
          Scan with your Android device
        </span>
      </div>
    </div>
  </div>
</section>

    
  );
}
