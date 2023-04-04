import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Needs to be moved to independant JSON file
const resources = {
        en: {
                translation: {
                        'logout': 'Logout',
                        'login': 'Login',
                        'demo':'View Demo',
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
                        'copywright':'Copyright @ 2013-2023 mTrade Inc. All rights reserved',
                        'features':'Features',
                        'featuresTitle':'World class trade analysis platform',
                        'tradeAnalysis':'Trade Analysis',
                        'tradeAnalysisContent':'Our platform provides an in-depht and mindful analysis from you trade history. In effect giving a real sense on your trading performance and how to potentially improve your trades.',
                        'apiIntergration':'Crypto API Intergration',
                        'apiIntergrationContent':'Our platform provides the most sophisticated technology available which eneables you to connect diretly to the worlds largest crypto exchange API Binance and therefore instant access to the best industry data.',
                        'historicalData':'Historical Data Analysis',
                        'historicalDataContent':' mTrade is data agnostic. For us to provide advice and analysis, it does not matter where your trade originated. Using a simple CSV file, you are up and running and performing a performance analysis.',
                        'liveData':'Live Data',
                        'liveDataContent':'We provide instant easy to use data feeds from the best sources with beautiful custom made charts in order to enable you to strategise you next trade and minimise context switching.',
                        'security':'Security',
                        'securityContent':'Security is always paramount to our minds to protect our clients best interest. mTrade maintains and promotes the most up to date industry standards in client data privacy and security.',
                        'readMoreLink':'Read more about our features',
                        'freedom':'Delivering mindful analysis of your trades',
                        'ourAnalysis':'Your assets. Your Trades. Our Analysis.'
                },
        },
        fr: {
                translation: {
                        'logout': 'Se déconnecter',
                        'login': 'Connexion',
                        'demo':'Voir la démo',
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
                        'copywright':'Droits d\'auteur @ 2013-2023 mTrade Inc. Tous droits réservés',
                        'tradeAnalysis':'Analyse commericale',
                        'tradeAnalysisContent':'Notre plateforme fournit une analyse approfondie et consciente de votre histoire commerciale. Donnant en effet un vrai sens sur vos performances de trading et comment les améliorer potentiellement vos métiers.',
                        'apiIntergration':'Intégration de l\'API Crypto',
                        'apiIntergrationContent':'Notre plate-forme fournit la technologie la plus sophistiquée disponible qui vous permet de vous connecter directement à la plus grande API d\'échange cryptographique au monde, Binance, et donc d\'accéder instantanément aux meilleures données de l\'industrie.',
                        'historicalData':'Données Historique',
                        'historicalDataContent':'mTrade est indépendant des données. Pour que nous puissions vous fournir des conseils et des analyses, peu importe l\'origine de votre commerce. À l\'aide d\'un simple fichier CSV, vous êtes opérationnel et effectuez une analyse des performances.',
                        'liveData':'Données en direct',
                        'liveDataContent':'Nous fournissons des flux de données instantanés et faciles à utiliser à partir des meilleures sources avec de superbes graphiques personnalisés afin de vous permettre d\'élaborer une stratégie pour votre prochaine transaction et de minimiser les changements de contexte.',
                        'security':'Sécurité',
                        'securityContent':'La sécurité est toujours primordiale pour nous afin de protéger les meilleurs intérêts de nos clients. mTrade maintient et promeut les normes les plus récentes de l\'industrie en matière de confidentialité et de sécurité des données des clients.',
                        'readMoreLink':'En savoir plus sur nos fonctionnalités',
                        'freedom':'Fournir une analyse consciente de vos transactions',
                        'ouAnalysis':'Vos atouts. Vos métiers. Notre Analyse.',

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

