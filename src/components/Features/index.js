import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
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
        ListContent,
        FeatureImg,
} = styles;

const Features = () => {
        const { t } = useTranslation();

        return (
                <section className={features}>
                        <div className={ContentWrapper}>
                                <p className={Title}>Features</p>
                                <p className={SubTitle}>World className trade analysis platform </p>
                                <ul className={FeaturesList}>
                                        <li className={FeatureListItem}>
                                                <img
                                                        src={TradeAnalysisImg}
                                                        className={FeatureImg}
                                                        alt="Trade Analysis"
                                                />
                                                <div className={FeatureInnerItem}>
                                                        <h1>Trade Analysis Analysis</h1>
                                                        <p className={ListContent}>
                                                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                                Maxime mollitia, molestiae quas vel sint commodi
                                                                repudiandae consequuntur voluptatum laborum numquam
                                                                blanditiis harum quisquam eius sed odit
                                                        </p>
                                                </div>
                                        </li>
                                        <li>
                                                <img
                                                        src={CryptoApiImg}
                                                        className={FeatureImg}
                                                        alt="Crypto API Intergration"
                                                />
                                                <div className={FeatureInnerItem}>
                                                        <h1>Crypto Exchange API Intergration</h1>
                                                        <p className={ListContent}>
                                                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                                Maxime mollitia, molestiae quas vel sint commodi
                                                                repudiandae consequuntur voluptatum laborum numquam
                                                                blanditiis harum quisquam eius sed odit
                                                        </p>
                                                </div>
                                        </li>
                                        <li>
                                                <img
                                                        src={HistoricalAnalysis}
                                                        className={FeatureImg}
                                                        alt="Historical Analysis"
                                                />
                                                <div className={FeatureInnerItem}>
                                                        <h1>Historical Data Analsysis</h1>
                                                        <p className={ListContent}>
                                                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                                Maxime mollitia, molestiae quas vel sint commodi
                                                                repudiandae consequuntur voluptatum laborum numquam
                                                                blanditiis harum quisquam eius sed odit
                                                        </p>
                                                </div>
                                        </li>
                                        <li>
                                                <img src={LiveData} className={FeatureImg} alt="Live Data" />
                                                <div className={FeatureInnerItem}>
                                                        <h1>Live Data</h1>
                                                        <p className={ListContent}>
                                                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                                Maxime mollitia, molestiae quas vel sint commodi
                                                                repudiandae consequuntur voluptatum laborum numquam
                                                                blanditiis harum quisquam eius sed odit
                                                        </p>
                                                </div>
                                        </li>
                                        <li>
                                                <img src={SecurityImg} className={FeatureImg} alt="Security" />
                                                <div className={FeatureInnerItem}>
                                                        <h1>Security</h1>
                                                        <p className={ListContent}>
                                                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                                Maxime mollitia, molestiae quas vel sint commodi
                                                                repudiandae consequuntur voluptatum laborum numquam
                                                                blanditiis harum quisquam eius sed odit
                                                        </p>
                                                </div>
                                        </li>
                                </ul>
                        </div>
                </section>
        );
};

export default Features;
