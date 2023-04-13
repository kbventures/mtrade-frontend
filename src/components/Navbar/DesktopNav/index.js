import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from './deskTopNav.module.scss';
import Logo from './Logo/index';
import LanguageDetector from './LanguageSelector/index';

const { deskTopNav, navLeft, navRight, menuLeft, menuRight, menuItemsLeft, menuItemsRight, signup, login, link, span } =
        styles;

export default function DeskTopNav() {
        const { t } = useTranslation();

        return (
                <div>
                        <nav className={deskTopNav}>
                                <div className={navLeft}>
                                        <Logo />
                                        <ul className={menuLeft}>
                                                <li className={menuItemsLeft}>About Us</li>
                                                <li className={menuItemsLeft}>More</li>
                                        </ul>
                                </div>
                                <div className={navRight}>
                                        <ul className={menuRight}>
                                                <li className={menuItemsRight}>
                                                        <Link className={`${link} ${login}`} to="/login">
                                                                <span className={span}>{t('login')}</span>
                                                        </Link>
                                                </li>
                                                <li className={menuItemsRight}>
                                                        <Link className={`${link} ${signup}`} to="/signup">
                                                                <span className={span}>{t('signup')}</span>
                                                        </Link>
                                                </li>
                                                <li className={menuItemsRight}>
                                                        <LanguageDetector />
                                                </li>
                                        </ul>
                                </div>
                        </nav>
                </div>
        );
}
