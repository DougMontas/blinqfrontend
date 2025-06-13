import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      heroTitle: 'Instant home repair. Fixed prices. Zero hassle.',
      heroSub:   'Connect with a vetted professional in seconds.',
      customers: 'I’m a Customer',
      pros:      'I’m a Service Pro',
      appTitle:  'Get the BlinqFix app',
      appSub:    'Book or accept jobs on the go.',
      faqTitle:  'Frequently Asked Questions',
      q1: 'How are prices calculated?',
      a1: 'Our algorithm factors local labor, parts and urgency.',
      q2: 'Is my payment secure?',
      a2: 'Yes — Stripe handles payments with full PCI-DSS compliance.',
    },
  },
  es: {
    translation: {
      heroTitle: 'Reparaciones al instante. Precios fijos. Sin complicaciones.',
      heroSub:   'Conéctate con un profesional verificado en segundos.',
      customers: 'Soy Cliente',
      pros:      'Soy Profesional',
      appTitle:  'Obtén la app de BlinqFix',
      appSub:    'Reserva o acepta trabajos desde tu móvil.',
      faqTitle:  'Preguntas frecuentes',
      q1: '¿Cómo se calculan los precios?',
      a1: 'Nuestro algoritmo considera mano de obra, piezas y urgencia.',
      q2: '¿El pago es seguro?',
      a2: 'Sí — Stripe procesa los pagos con cumplimiento PCI-DSS completo.',
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});

export default i18n;
