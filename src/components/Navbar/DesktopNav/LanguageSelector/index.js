import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons';
import styles from './languageSelector.module.scss';

const { container, dropDown, buttonToggle, icon, dropDownMenu, dropDownMenuItem } = styles;

export default function LanguageSelector() {
        const [open, setOpen] = useState(false);
        const { t, i18n } = useTranslation();

        const languages = [
                { code: 'en', name: t('english') },
                { code: 'fr', name: t('french') },
        ];

        const handleLanguageChange = (event) => {
                const langCode = event.target.getAttribute('data-value');
                setSelectedLanguage(langCode);
                i18n.changeLanguage(langCode);
                setOpen(false);
        };

        const [selectedLanguage, setSelectedLanguage] = useState(languages[0].code);

        const handleOpen = () => {
                setOpen(!open);
        };

        return (
                <div className={container}>
                        <div className={dropDown}>
                                <button
                                        className={buttonToggle}
                                        type="button"
                                        onMouseEnter={handleOpen}
                                        onMouseLeave={handleOpen}
                                >
                                        {i18n.language === 'en' ? t('english') : t('french')}
                                        <FontAwesomeIcon className={icon} icon={faGreaterThan} />
                                </button>
                                {open && (
                                        <ul className={dropDownMenu}>
                                                {languages.map((language) => (
                                                        <li
                                                                className={dropDownMenuItem}
                                                                key={language.code}
                                                                data-value={language.code}
                                                                onClick={handleLanguageChange}
                                                                aria-hidden="true"
                                                        >
                                                                {language.name}
                                                        </li>
                                                ))}
                                        </ul>
                                )}
                        </div>
                </div>
        );
}
