import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Needs to be moved to independant JSON file
const resources = {
        en: {
                translation: {
                        logout: 'Logout',
                        login: 'Login',
                        signup: 'Signup',
                        language: 'Language',
                        price: 'Price',
                        amount: 'Amount',
                        'closed-price': 'Closed price',
                        'open-date': 'Open date',
                        'closed-date': 'Closed date',
                        'add-new-trade': 'Add new trade',
                        'add-trade': 'Add trade',
                        'pair-name': 'Pair name',
                        'must-be-logged-in': 'You must be logged in!',
                        error: 'error',
                },
        },
        fr: {
                translation: {
                        logout: 'Se déconnecter',
                        login: 'Connexion',
                        signup: "S'inscrire",
                        language: 'Langue',
                        price: 'Prix',
                        amount: 'Montant',
                        'closed-price': 'Prix fermé',
                        'open-date': "Date d'ouverture",
                        'closed-date': 'Date fermé',
                        'add-new-trade': 'Ajouter un nouveau titre',
                        'add-trade': 'Ajouter titre',
                        'pair-name': 'Nom de la paire',
                        'must-be-logged-in': 'Vous devez être identifié!',
                        error: 'erreur',
                },
        },
};

const DETECTION_OPTIONS = {
        order: ['localStorage', 'navigator'],
};

i18n.use(LanguageDetector).use(initReactI18next).init({
        detection: DETECTION_OPTIONS,
        resources,
        fallbackLng: 'en',
        debug: false,
});

export default i18n;
