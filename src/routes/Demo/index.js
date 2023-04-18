import React from 'react';
import NavBar from '../../components/Navbar/index';
import styles from './demo.module.scss';

const { mainSideNav, accountSettingsTitle } = styles;

export default function Demo() {
        return (
                <div>
                        <NavBar />
                        <div className={mainSideNav}>
                                <h4 className={accountSettingsTitle}>Account</h4>
                        </div>
                </div>
        );
}
