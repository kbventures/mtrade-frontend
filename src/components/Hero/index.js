import { useTranslation } from 'react-i18next';
import LinkButton from '../LinkButton/index';

import styles from './hero.module.scss';

const { hero, ContentWrapper, SubTitle, Content, Row } = styles;

const Hero = () => {
        const { t } = useTranslation();

        return (
                <section className={hero}>
                        <div className={ContentWrapper}>
                                <h1 className={SubTitle}>{t('freedom')}</h1>
                                <p className={Content}>{t('ourAnalysis')}</p>
                                <div className={Row}>
                                        <LinkButton to="/signup" className="Primary">
                                                {t('signup')}
                                        </LinkButton>
                                        <LinkButton to="/demo" className="Secondary" otherClassName="margin">
                                                {t('demo')}
                                        </LinkButton>
                                </div>
                        </div>
                </section>
        );
};

export default Hero;
