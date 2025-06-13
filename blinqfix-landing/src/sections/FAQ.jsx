import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const faqs = [
  {
    q_en: 'How are prices calculated?',
    a_en: 'Our algorithm factors labor, local zip code rates, and parts.',
    q_es: '¿Cómo se calculan los precios?',
    a_es: 'Nuestro algoritmo considera mano de obra, tarifas locales y piezas.',
  },
  {
    q_en: 'Are pros background‑checked?',
    a_en: 'Yes—every technician passes ID verification and background screening.',
    q_es: '¿Los profesionales están verificados?',
    a_es: 'Sí—todos pasan verificación de identidad y antecedentes.',
  },
]

export default function FAQ() {
  const { i18n } = useTranslation()
  const [open, setOpen] = useState(null)
  const lang = i18n.language

  return (
    <section className="mx-auto max-w-4xl px-6 py-24">
      <h2 className="mb-8 text-center text-3xl font-bold">
        {lang === 'es' ? 'Preguntas frecuentes' : 'Frequently asked questions'}
      </h2>

      <ul>
        {faqs.map((item, idx) => {
          const question = lang === 'es' ? item.q_es : item.q_en
          const answer = lang === 'es' ? item.a_es : item.a_en
          const isOpen = open === idx

          return (
            <li key={idx} className="mb-4 rounded-xl border border-white/10 bg-white/5">
              <button
                onClick={() => setOpen(isOpen ? null : idx)}
                className="flex w-full items-center justify-between p-4 text-left"
              >
                <span>{question}</span>
                <svg
                  className={`h-5 w-5 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden px-4 pb-4"
                  >
                    <p className="text-white/70">{answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          )
        })}
      </ul>
    </section>
  )
}