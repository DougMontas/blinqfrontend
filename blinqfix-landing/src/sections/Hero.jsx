import { useTranslation } from 'react-i18next';

export default function Hero({ onPrimary, onSecondary }) {
  const { t } = useTranslation();
  return (
    <section className="hero flex-center flex-col full-vh px-6 text-center">
      <div className="hero-bg"></div>
      <div className="cube"></div>

      <h1 className="hero-title">{t('heroTitle')}</h1>
      <p className="hero-sub">{t('heroSub')}</p>

      <div className="btn-row">
        <button className="btn btn-primary" onClick={onPrimary}>
          {t('customers')}
        </button>
        <button className="btn btn-outline" onClick={onSecondary}>
          {t('pros')}
        </button>
      </div>
    </section>
  );
}
