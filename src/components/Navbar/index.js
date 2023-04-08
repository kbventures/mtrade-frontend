import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import React, { useState } from 'react';
import { useLogout } from '../../hooks/useLogout';
import { useAuthContext } from '../../hooks/useAuthContext';
import Logo from '../Logo/index';
import styles from './navbar.module.scss';
// import HamburgerMenu from '../Hamburger/index';
import HamburgerMenuTest from '../HamburgerTest/index';

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
                <div>
                        {/* <HamburgerMenu /> */}
                        <HamburgerMenuTest />
                </div>
        );
};

export default Navbar;
