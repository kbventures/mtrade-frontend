import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons';
import SecurityImg from '../../images/icon-security.png';
import CryptoApiImg from '../../images/icon-exchange.png';
import TradeAnalysisImg from '../../images/icon-customizable_interface.png';
import LiveData from '../../images/icon-margin_trading.png';
import HistoricalAnalysis from '../../images/icon-order_type.png';

import styles from './features.module.scss';

const {
        features,
        ContentWrapper,
        Title,
        SubTitle,
        FeaturesList,
        FeatureListItem,
        FeatureInnerItem,
        cardTitle,
        ListContent,
        FeatureImg,
        ReadMoreLink,
        link,
        LinkText,
} = styles;

const Features = () => {
        const { t } = useTranslation();

        return (
                <section className={features}>
                        <div className={ContentWrapper}>
                                <p className={Title}>{t('features')}</p>
                                <p className={SubTitle}>{t('featuresTitle')}</p>
                                <ul className={FeaturesList}>
                                        <li className={FeatureListItem}>
                                                <img
                                                        src={TradeAnalysisImg}
                                                        className={FeatureImg}
                                                        alt="Trade Analysis"
                                                />
                                                <div className={FeatureInnerItem}>
                                                        <h1 className={cardTitle}>{t('tradeAnalysis')}</h1>
                                                        <p className={ListContent}>{t('tradeAnalysisContent')}</p>
                                                </div>
                                        </li>
                                        <li className={FeatureListItem}>
                                                <img
                                                        src={CryptoApiImg}
                                                        className={FeatureImg}
                                                        alt="Crypto API Intergration"
                                                />
                                                <div className={FeatureInnerItem}>
                                                        <h1 className={cardTitle}>{t('apiIntergration')}</h1>
                                                        <p className={ListContent}>{t('apiIntergrationContent')}</p>
                                                </div>
                                        </li>
                                        <li className={FeatureListItem}>
                                                <img
                                                        src={HistoricalAnalysis}
                                                        className={FeatureImg}
                                                        alt="Historical Analysis"
                                                />
                                                <div className={FeatureInnerItem}>
                                                        <h1 className={cardTitle}>{t('historicalData')}</h1>
                                                        <p className={ListContent}>{t('historicalDataContent')}</p>
                                                </div>
                                        </li>
                                        <li className={FeatureListItem}>
                                                <img src={LiveData} className={FeatureImg} alt="Live Data" />
                                                <div className={FeatureInnerItem}>
                                                        <h1 className={cardTitle}>{t('liveData')}</h1>
                                                        <p className={ListContent}>{t('liveDataContent')}</p>
                                                </div>
                                        </li>
                                        <li className={FeatureListItem}>
                                                <img src={SecurityImg} className={FeatureImg} alt="Security" />
                                                <div className={FeatureInnerItem}>
                                                        <h1 className={cardTitle}>{t('security')}</h1>
                                                        <p className={ListContent}>{t('securityContent')}</p>
                                                </div>
                                        </li>
                                </ul>
                                <Link className={link}>
                                        <p className={ReadMoreLink}>
                                                <FontAwesomeIcon icon={faGreaterThan} />
                                                <span className={LinkText}>{t('readMoreLink')}</span>
                                        </p>
                                </Link>
                        </div>
                </section>
        );
};

export default Features;
