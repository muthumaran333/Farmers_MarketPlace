import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import your translation JSON files
import enTranslation from './locales/en.json';
import frTranslation from './locales/fr.json';
import esTranslation from './locales/es.json';

// i18n configuration
i18n
  .use(LanguageDetector) // Detect the language
  .use(initReactI18next) // Pass i18n instance to react-i18next
  .init({
    resources: {
      en: { translation: enTranslation },
      fr: { translation: frTranslation },
      es: { translation: esTranslation },
    },
    fallbackLng: 'en', // Default language
    debug: true, // Enable debug mode
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;
