import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

const options = {
  fallbackLng: 'pt',
  defaultLocale: 'pt',
  saveMissing: true,
  debug: process.env.APP_ENV === 'dev',
  interpolation: {
    escapeValue: false,
    format: (value, format, lng) => {
      if (format === 'uppercase') return value.toUpperCase();
      return value;
    },
  },
  backend: {
    loadPath: './locales/{{lng}}/{{ns}}.json',
    addPath: './locales/add/{{lng}}/{{ns}}',
    allowMultiLoading: false,
  },
  useSuspense: process && !process.release,
};

// initialize if not already initialized
if (!i18n.isInitialized) {
    i18n
        .use(Backend)
        .use(initReactI18next)
        .use(LanguageDetector)
        .init(options);
}

export default i18n