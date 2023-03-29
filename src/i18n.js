import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Needs to be moved to independant JSON file
const resources = {
        en: {
                translation: {
                        'logout': 'Logout',
                        'login': 'Login',
                        'signup': 'Signup',
                        'language': 'Language',
                        'price':'Price',
                        'amount':'Amount',
                        'closed-price':'Closed price',
                        'open-date':'Open date',
                        'closed-date':'Closed date',
                        'add-new-trade':'Add new trade',
                        'add-trade':'Add trade',
                        'pair-name':'Pair name',
                        'must-be-logged-in':'You must be logged in!',
                        'error':'error',
                        'copywright':'Copyright @ 2013-2023 mTrade Inc. All rights reserved'
                },
        },
        fr: {
                translation: {
                        'logout': 'Se déconnecter',
                        'login': 'Connexion',
                        'signup': 'S\'inscrire',
                        'language':'Langue',
                        'price':'Prix',
                        'amount':'Montant',
                        'closed-price':'Prix fermé',
                        'open-date':'Date d\'ouverture',
                        'closed-date':'Date fermé',
                        'add-new-trade':'Ajouter un nouveau titre',
                        'add-trade':'Ajouter titre',
                        'pair-name':"Nom de la paire",
                        'must-be-logged-in':'Vous devez être identifié!',
                        'error':'erreur',
                        'copywright':'Droits d\'auteur @ 2013-2023 mTrade Inc. Tous droits réservés'
                },
        },
};

const instance1 = i18n.createInstance()

  const DETECTION_OPTIONS = {
    order: [ 'localStorage','navigator'],
  };
  
  instance1
    .use(LanguageDetector)
    .init({
      detection: DETECTION_OPTIONS,
      resources,
      fallbackLng: 'en',
      debug:false
    });


    export default instance1;

