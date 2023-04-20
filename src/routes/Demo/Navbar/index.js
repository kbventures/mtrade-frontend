import { useTranslation } from 'react-i18next';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faGreaterThan } from '@fortawesome/free-solid-svg-icons';
import Logo from './Logo/index';
import styles from './navbar.module.scss';
import SideBarMenuOnClick from './SideBarMenuOnClick/index';

const { navigationContainer, mobileNav, greaterThan, leftContainer, link, toggleButton, sideBar, open } = styles;

const Navbar = () => {
        const [isOpen, setIsOpen] = useState(false);

        const handleToggleSidebar = () => {
                setIsOpen(!isOpen);
        };
        // eslint-disable-next-line no-console
        console.log(isOpen);

        return (
                <div className={navigationContainer}>
                        <nav className={mobileNav}>
                                <div className={leftContainer}>
                                        <div className={`${sideBar} ${isOpen ? open : ''}`}>
                                                <SideBarMenuOnClick />
                                        </div>
                                        <button type="button" className={toggleButton} onClick={handleToggleSidebar}>
                                                <FontAwesomeIcon
                                                        size="2x"
                                                        color="rgb(255, 255, 255)"
                                                        icon={faGreaterThan}
                                                        className={greaterThan}
                                                />
                                        </button>

                                        <Logo />
                                </div>
                                <FontAwesomeIcon size="1x" color="rgb(255, 255, 255)" icon={faUser} />
                        </nav>
                </div>
        );
};

export default Navbar;
