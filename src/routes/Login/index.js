import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useLogin } from '../../hooks/useLogin';
import styles from './login.module.scss';
import logo from '../../images/about.png';
import LinkButton from '../../components/LinkButton/index.js';
import Logo from '../../components/Logo/index';

const {
        authLayout,
        authLayoutHeader,
        authLayoutContent,
        authLayoutLogo,
        authLogoPartOne,
        authLogoPartTwo,
        mTradeLogo,
        authLayoutHeaderRight,
        loginSeperator,
        loginForm,
        warning,
        title,
        label,
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
                                        <div className={authLayoutLogo}>
                                                <span className={authLogoPartOne}>m</span>
                                                <span className={authLogoPartTwo}>Trade</span>
                                                <img className={mTradeLogo} alt="Mindfulness Trade Logo" src={logo} />
                                        </div>
                                        <Logo />
                                        <div className={authLayoutHeaderRight}>
                                                <LinkButton to="/signup" className="Primary">
                                                        {t('signup')}
                                                </LinkButton>
                                                <button type="button">English</button>
                                        </div>
                                </div>
                        </div>
                        <div className={loginSeperator}>Login Seperator</div>
                        <div className={authLayoutContent}>
                                <form className={loginForm} onSubmit={handleSubmit}>
                                        <h1 className={title}>{t('login')}</h1>
                                        <p className={warning}>
                                                Please check you are visiting https://mtrade-frontend.vercel.app/
                                        </p>
                                        <label className={label}>
                                                Email
                                                <input
                                                        className={loginInput}
                                                        type="email"
                                                        onChange={(e) => setEmail(e.target.value)}
                                                        value={email}
                                                        placeholder="Email address"
                                                />
                                        </label>
                                        <label className={label}>
                                                Password
                                                <input
                                                        className={loginInput}
                                                        type="password"
                                                        onChange={(e) => setPassword(e.target.value)}
                                                        value={password}
                                                        placeholder="Password"
                                                />
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

/*
TODO
Simple Drop Menu To Toggle Between Langauges
Make Logo Component
Login Seperator
Make Login Page Responsive
Red Border when input missing
There should be flicking cursor when input focussed
*/
