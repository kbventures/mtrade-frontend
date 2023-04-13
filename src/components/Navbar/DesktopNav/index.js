import React from 'react';
import { Link } from 'react-router-dom';
import styles from './deskTopNav.module.scss';
import Logo from './Logo/index';
import LanguageDetector from './LanguageSelector/index';

const { deskTopNav, navLeft, navRight, menuLeft, menuRight, menuItemsLeft, menuItemsRight, signup, login, link } =
        styles;

export default function DeskTopNav() {
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
                                                                <span>Log In</span>
                                                        </Link>
                                                </li>
                                                <li className={menuItemsRight}>
                                                        <Link className={`${link} ${signup}`} to="/signup">
                                                                <span>Sign Up</span>
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
