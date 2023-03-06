import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './language.module.css';

const Language = () => {
        const { t, i18n } = useTranslation();
        const changeLanguage = (lng) => {
                i18n.changeLanguage(lng);
        };
        return (
                <div className={styles.container}>
                        <header className={styles.header}>
                                <p>{t('paragraph')}</p>
                                <button type="button" className="btn" onClick={() => changeLanguage('en')}>
                                        english
                                </button>
                                <button type="button" className="btn" onClick={() => changeLanguage('fr')}>
                                        french
                                </button>
                        </header>
                </div>
        );
};

export default Language;
