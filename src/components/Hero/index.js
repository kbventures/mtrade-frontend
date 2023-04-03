import { useTranslation } from 'react-i18next';
import LinkButton from '../LinkButton/index';

import styles from './hero.module.scss';

const { hero, ContentWrapper, SubTitle, Content } = styles;

const Hero = () => {
        const { t } = useTranslation();

        return (
                <section className={hero}>
                        <div className={ContentWrapper}>
                                <h1 className={SubTitle}>{t('freedom')}</h1>
                                <p className={Content}>{t('ourAnalysis')}</p>
                                <LinkButton to="/signup" className="Primary">
                                        Sign up
                                </LinkButton>
                                <LinkButton to="/demo">View Demo</LinkButton>
                        </div>
                </section>
        );
};

export default Hero;
