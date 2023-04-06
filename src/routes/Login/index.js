import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useLogin } from '../../hooks/useLogin';
import styles from './login.module.scss';
import Logo from '../../components/Logo/index';

const {
        authLayout,
        authLayoutHeader,
        authLayoutContent,
        authLayoutHeaderRight,
        baseLinkButton,
        loginSeperator,
        loginForm,
        warning,
        title,
        label,
        cursor,
        loginInput,
        button,
        Error,
        link,
        ReadMoreLink,
        LinkText,
} = styles;

const Login = () => {
        const { t } = useTranslation();
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const { login, error, isLoading } = useLogin();

        const handleSubmit = async (e) => {
                e.preventDefault();

                await login(email, password);
        };

        return (
                <div className={authLayout}>
                        <div className={authLayoutHeader}>
                                <div className={authLayoutHeader}>
                                        <Logo />
                                        <div className={authLayoutHeaderRight}>
                                                <Link to="/signup" className={baseLinkButton}>
                                                        Sign Up
                                                </Link>
                                                <Link to="/signup" className={baseLinkButton}>
                                                        Sign Up
                                                </Link>
                                                {/* <button type="button">English</button> */}
                                        </div>
                                </div>
                        </div>
                        <div className={loginSeperator} />
                        <div className={authLayoutContent}>
                                <form className={loginForm} onSubmit={handleSubmit}>
                                        <h1 className={title}>{t('login')}</h1>
                                        <p className={warning}>
                                                Please check you are visiting https://mtrade-frontend.vercel.app/
                                        </p>
                                        <label className={label}>
                                                Email
                                                <div className={cursor}>
                                                        <input
                                                                className={loginInput}
                                                                type="email"
                                                                onChange={(e) => setEmail(e.target.value)}
                                                                value={email}
                                                                placeholder="Email address"
                                                        />
                                                        <i />
                                                </div>
                                        </label>
                                        <label className={label}>
                                                Password
                                                <div className={cursor}>
                                                        <input
                                                                className={loginInput}
                                                                type="password"
                                                                onChange={(e) => setPassword(e.target.value)}
                                                                value={password}
                                                                placeholder="Password"
                                                        />
                                                        <i />
                                                </div>
                                        </label>
                                        <button className={button} type="submit" disabled={isLoading}>
                                                Log in
                                        </button>
                                        <Link to="/forgotpassword" className={link}>
                                                <p className={ReadMoreLink}>
                                                        <p className={LinkText}>{t('forgotPassword')}</p>
                                                </p>
                                        </Link>
                                        {error && <div className={Error}>{error}</div>}
                                </form>
                        </div>
                </div>
        );
};

export default Login;
