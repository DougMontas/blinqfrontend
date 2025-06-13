import { motion } from 'framer-motion'

const testimonials = [
  {
    name: 'Sarah K.',
    text: 'My pipe burst at midnight—BlinqFix had a plumber ringing my doorbell in 12 minutes!',
  },
  {
    name: 'Miguel R.',
    text: 'La tarifa fija me dio tranquilidad; el electricista llegó rápido y todo quedó perfecto.',
  },
  {
    name: 'Dana P.',
    text: 'I wish Uber for home repair existed sooner. Booking was smoother than ordering food.',
  },
]

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24">
      <h2 className="mb-12 text-center text-3xl font-bold">Happy homeowners</h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t, i) => (
          <motion.blockquote
            key={i}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <p className="text-white/80">“{t.text}”</p>
            <footer className="mt-4 text-right text-sm text-white/60">— {t.name}</footer>
          </motion.blockquote>
        ))}
      </div>
    </section>
  )
}
