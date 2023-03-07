import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useLogout } from '../../hooks/useLogout';
import { useAuthContext } from '../../hooks/useAuthContext';

import styles from './navbar.module.scss';
// import styles from '../../sass/components/_navigation.module.scss';

const Navbar = () => {
        const { t } = useTranslation();
        const { logout } = useLogout();
        const { user } = useAuthContext();

        const handleClick = () => {
                logout();
        };
        return (
                <header>
                        <div className={styles.container}>
                                <Link to="/">
                                        <h1>mTrade</h1>
                                </Link>
                                <nav>
                                        {user && (
                                                <div>
                                                        <span>{user.email}</span>
                                                        <button type="button" onClick={handleClick}>
                                                                {t('logout')}
                                                        </button>
                                                </div>
                                        )}
                                        {!user && (
                                                <div>
                                                        <Link to="/login">{t('login')}</Link>
                                                        <Link to="/signup">{t('signup')}</Link>
                                                        <Link to="/language">{t('language')}</Link>
                                                </div>
                                        )}
                                </nav>
                        </div>
                </header>
        );
};

export default Navbar;
