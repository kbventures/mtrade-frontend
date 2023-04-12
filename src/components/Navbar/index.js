import { useTranslation } from 'react-i18next';
import React, { useState } from 'react';
import { useLogout } from '../../hooks/useLogout';
import { useAuthContext } from '../../hooks/useAuthContext';
import Logo from './Logo/index';
import styles from './navbar.module.scss';
// import HamburgerMenu from '../HamburgerMenu/index';
import LinkButton from './LinkButton/index';
import DeskTopNav from './DesktopNav';

const { navigationContainer, mobileNav, menuToggle, menuButtonContainer, menuButton, menu, menuItem } = styles;

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
        // eslint-disable-next-line no-console
        console.log(checked);
        const checkHandler = () => {
                setChecked(!checked);
                // eslint-disable-next-line no-console
                console.log(checked);
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
                                {/* <p>Checked? {checked.toString()}</p> */}
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
                                        <li className={menuItem}>About Us</li>
                                        <li className={menuItem}>English</li>
                                        <li className={menuItem}>
                                                <LinkButton to="/login" className="Secondary">
                                                        Log In
                                                </LinkButton>
                                                <LinkButton to="/signup" className="Primary">
                                                        Sign up
                                                </LinkButton>
                                        </li>
                                        {/* <li className={menuItem}>Test</li> */}
                                </ul>
                        </nav>
                        <DeskTopNav />
                </div>
        );
};

export default Navbar;
