import { useTranslation } from 'react-i18next';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLogout } from '../../hooks/useLogout';
import { useAuthContext } from '../../hooks/useAuthContext';
import Logo from './Logo/index';
import styles from './navbar.module.scss';
import LinkButton from './LinkButton/index';
import DeskTopNav from './DesktopNav';
import LanguageSelector from './LanguageSelector/index';

const { navigationContainer, mobileNav, menuToggle, menuButtonContainer, menuButton, menu, menuItem, link } = styles;

const Navbar = () => {
        const { t } = useTranslation();
        const { logout } = useLogout();
        const { user } = useAuthContext();

        const handleClick = () => {
                logout();
        };

        const [isMenuOpen, setIsMenuOpen] = useState(false);

        const handleMenuClick = () => {
                setIsMenuOpen(!isMenuOpen);
        };

        // New
        const [checked, setChecked] = React.useState(false);
        const checkHandler = () => {
                setChecked(!checked);
        };
        return (
                // <header>
                //         <div className={styles.container}>
                //                 <Logo />
                //                 <nav>
                //                         {user && (
                //                                 <div>
                //                                         <span>{user.email}</span>
                //                                         <button type="button" onClick={handleClick}>
                //                                                 {t('logout')}
                //                                         </button>
                //                                 </div>
                //                         )}
                //                         {!user && (
                //                                 <div>
                //                                         <Link to="/login">{t('login')}</Link>
                //                                         <Link to="/signup">{t('signup')}</Link>
                //                                         <Link to="/language">{t('language')}</Link>
                //                                 </div>
                //                         )}
                //                 </nav>
                //         </div>
                // </header>
                <div className={navigationContainer}>
                        <nav className={mobileNav}>
                                <Logo />
                                <input
                                        className={menuToggle}
                                        type="checkbox"
                                        id="test"
                                        checked={checked}
                                        onChange={() => checkHandler()}
                                />
                                <label className={menuButtonContainer} htmlFor="test">
                                        <div className={menuButton} />
                                </label>
                                <ul className={menu}>
                                        <li className={menuItem}>
                                                <Link className={link} to="">
                                                        {t('aboutus')}
                                                </Link>
                                        </li>
                                        {/* <li className={menuItem}>
                                                <LanguageSelector />
                                        </li> */}
                                        <li className={menuItem}>
                                                <LinkButton to="/login" className="Secondary">
                                                        {t('login')}
                                                </LinkButton>
                                                <LinkButton to="/signup" className="Primary">
                                                        {t('signup')}
                                                </LinkButton>
                                        </li>
                                </ul>
                        </nav>
                        <DeskTopNav />
                </div>
        );
};

export default Navbar;
