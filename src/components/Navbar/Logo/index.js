import React from 'react';
import { Link } from 'react-router-dom';
import styles from './logo.module.scss';
import logo from '../../../images/about.png';

const { authLayoutLogo, authLogoPartOne, authLogoPartTwo, mTradeLogo } = styles;

export default function Logo() {
        return (
                <Link style={{ textDecoration: 'none' }} to="/">
                        <div className={authLayoutLogo}>
                                <span className={authLogoPartOne}>M</span>
                                <span className={authLogoPartTwo}>Trade</span>
                                <img className={mTradeLogo} alt="Mindfulness Trade Logo" src={logo} />
                        </div>
                        ;
                </Link>
        );
}
