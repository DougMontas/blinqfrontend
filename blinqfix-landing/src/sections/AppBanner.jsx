// import { motion } from 'framer-motion'

// export default function AppBanner() {
//   return (
//     <section className="relative bg-white/5 py-16">
//       <motion.div
//         className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/20 via-accent/10 to-purple-800/10 blur-3xl"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         viewport={{ once: true }}
//         transition={{ duration: 1 }}
//       />

//       <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-6 text-center">
//         <h3 className="text-2xl font-bold">Get the app</h3>
//         <p className="max-w-md text-white/70">
//           Book or accept jobs on the go. Download BlinqFix for iOS and Android.
//         </p>
//         <div className="flex flex-wrap items-center justify-center gap-4">
//           <img
//             src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
//             alt="Download on the App Store"
//             className=""
//           />
//           <img
//             src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
//             alt="Get it on Google Play"
//             className=""
//             style={{width: "100", height: "100"}}
//           />
//         </div>
//       </div>
//     </section>
//   )
// }


import { motion } from 'framer-motion';

export default function AppBanner() {
  return (
    <section className="app-banner">
      <motion.div
        className="app-banner-bg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      />

      <div className="banner-inner">
        <h3 className="section-title" style={{ marginBottom: '0.5rem' }}>
          Get the app
        </h3>
        <p className="hero-sub" style={{ maxWidth: '22rem' }}>
          Book or accept jobs on the go. Download BlinqFix for iOS and Android.
        </p>

        <div className="badge-row">
          <img
            src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
            alt="Download on the App Store"
            className="store-badge"
          />
          <img
            src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
            alt="Get it on Google Play"
            className="store-badge"
          />
        </div>
      </div>
    </section>
  );
}
