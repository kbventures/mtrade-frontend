import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import styles from './menu.module.scss';

const { container, dropDown, buttonToggle, icon, dropDownMenu, dropDownMenuItem, dropDownMenuItemActive } = styles;

export default function LanguageSelector() {
        const [open, setOpen] = useState(false);
        const { t, i18n } = useTranslation();

        const languages = [
                { code: 'en', name: t('english') },
                { code: 'fr', name: t('french') },
        ];

        const [selectedOption, setSelectedOption] = useState('Last 24h');

        const handleOptionChange = (event) => {
                const option = event.target.getAttribute('data-value');
                setSelectedOption(option);
                // setSelectedLanguage(langCode);
                // i18n.changeLanguage(langCode);
                setOpen(false);
        };

        const defaultMenuOptions = [
                // { id: 0, description: selectedOption },
                { id: 1, description: 'Last 24h' },
                { id: 2, description: 'Last 2 Weeks' },
                { id: 3, description: 'Last Past Month' },
                { id: 4, description: 'Past Month' },
                { id: 5, description: 'Pst 3 Months' },
                { id: 6, description: 'Past Year' },
                { id: 7, description: 'Past 2 Years' },
                { id: 8, description: '2023 year' },
                { id: 9, description: '2022 year' },
                { id: 10, description: 'Custom' },
        ];

        const handleOpen = () => {
                setOpen(!open);
        };

        return (
                <div className={container}>
                        <div className={dropDown}>
                                <button
                                        className={buttonToggle}
                                        style={{ color: open ? 'rgb(130, 186, 246)' : 'rgb(130, 186, 246)' }}
                                        type="button"
                                        onClick={handleOpen}
                                >
                                        {/* {i18n.language === 'en' ? t('english') : t('french')} */}
                                        {selectedOption}
                                        <FontAwesomeIcon
                                                style={{ color: open ? 'rgb(130, 186, 246)' : 'rgb(130, 186, 246)' }}
                                                className={icon}
                                                icon={faAngleUp}
                                                size="xs"
                                        />
                                </button>
                                {open && (
                                        <ul className={dropDownMenu}>
                                                {defaultMenuOptions.map((option) => (
                                                        <li
                                                                className={
                                                                        selectedOption !== option.description
                                                                                ? dropDownMenuItem
                                                                                : dropDownMenuItemActive
                                                                }
                                                                key={option.id}
                                                                data-value={option.description}
                                                                onClick={handleOptionChange}
                                                                aria-hidden="true"
                                                        >
                                                                {option.description}
                                                        </li>
                                                ))}
                                        </ul>
                                )}
                        </div>
                </div>
        );
}
