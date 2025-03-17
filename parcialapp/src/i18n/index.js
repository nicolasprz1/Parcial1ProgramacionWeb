// src/i18n/index.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './en.json';
import es from './es.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: en
      },
      es: {
        translation: es
      }
    },
    lng: 'es',          // Idioma inicial (puedes poner 'en' si prefieres)
    fallbackLng: 'en',  // Si no encuentra algo en 'es', usa 'en'
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
