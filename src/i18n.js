import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';


// Needs to be moved to independant JSON file
const resources = {
        en: {
                translation: {
                        'logout': 'Logout',
                        'login': 'Login',
                        'signup': 'Signup',
                        'language': 'Language'
                },
        },
        fr: {
                translation: {
                        'logout': 'Se déconnecter',
                        'login': 'Connexion',
                        'signup': 'S\'inscrire',
                        'language':'Langue'
                },
        },
};

  const DETECTION_OPTIONS = {
    order: [ 'localStorage','navigator'],
  };
  
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      detection: DETECTION_OPTIONS,
      resources,
      fallbackLng: 'en'
    });


    export default i18n;

