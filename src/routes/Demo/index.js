import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
        faUser,
        faKey,
        faTrophy,
        faLock,
        faChartLine,
        faChartPie,
        faArrowTrendUp,
        faEnvelope,
        faBriefcase,
        faBullhorn,
        faCircleQuestion,
        faLightbulb,
        faCheck,
} from '@fortawesome/free-solid-svg-icons';
import Footer from './Footer/Bottom/index';
import styles from './demo.module.scss';
import NavBar from './Navbar/index';
import SideBarMenu from './SideBarMenu/index';

const {
        headerWrapper,
        mainContainer,
        content,
        settingsSideNav,
        accountSettingsSideNavWrapper,
        accountSettingsSideNavList,
        accountSettingsSideNavListSub,
        accountSettingsSideNavListItem,
        svg,
        active,
        icon,
        mainSideNav,
        accountSettingsWrapper,
        accountSettingsTitle,
        settingsTabHeader,
        settingsTabHeaderTitle,
        settingsTabsContent,
        userSettingsItemWrapper,
        userSettingsItemLabel,
        userSettingsItemContent,
        userSettingsItemValue,
        userSettingsItemRightContent,
        userSettingsItemRightButton,
} = styles;

export default function Demo() {
        return (
                <div>
                        <div className={headerWrapper}>
                                <NavBar />
                        </div>
                        <div className={mainContainer}>
                                <div className={content}>
                                        <SideBarMenu />
                                        <div className={mainSideNav}>
                                                <div className={accountSettingsWrapper}>
                                                        <h4 className={accountSettingsTitle}>Account</h4>
                                                        <div className={settingsTabHeader}>
                                                                <div className={settingsTabHeaderTitle}>Account</div>
                                                        </div>
                                                        <div className={settingsTabsContent}>
                                                                <div>
                                                                        <div className={userSettingsItemWrapper}>
                                                                                <div className={userSettingsItemLabel}>
                                                                                        Username
                                                                                </div>
                                                                                <div
                                                                                        className={
                                                                                                userSettingsItemContent
                                                                                        }
                                                                                >
                                                                                        <div
                                                                                                className={
                                                                                                        userSettingsItemValue
                                                                                                }
                                                                                        >
                                                                                                kbeaudin
                                                                                        </div>
                                                                                        <div
                                                                                                className={
                                                                                                        userSettingsItemRightContent
                                                                                                }
                                                                                        >
                                                                                                <button
                                                                                                        type="button"
                                                                                                        className={
                                                                                                                userSettingsItemRightButton
                                                                                                        }
                                                                                                >
                                                                                                        Change
                                                                                                </button>
                                                                                        </div>
                                                                                </div>
                                                                        </div>
                                                                        <div className={userSettingsItemWrapper}>
                                                                                <div className={userSettingsItemLabel}>
                                                                                        Password
                                                                                </div>
                                                                                <div
                                                                                        className={
                                                                                                userSettingsItemContent
                                                                                        }
                                                                                >
                                                                                        <div
                                                                                                className={
                                                                                                        userSettingsItemValue
                                                                                                }
                                                                                        >
                                                                                                ********
                                                                                        </div>
                                                                                        <div
                                                                                                className={
                                                                                                        userSettingsItemRightContent
                                                                                                }
                                                                                        >
                                                                                                <button
                                                                                                        type="button"
                                                                                                        className={
                                                                                                                userSettingsItemRightButton
                                                                                                        }
                                                                                                >
                                                                                                        Change
                                                                                                </button>
                                                                                        </div>
                                                                                </div>
                                                                        </div>
                                                                        <div className={userSettingsItemWrapper}>
                                                                                <div className={userSettingsItemLabel}>
                                                                                        Email
                                                                                </div>
                                                                                <div
                                                                                        className={
                                                                                                userSettingsItemContent
                                                                                        }
                                                                                >
                                                                                        <div
                                                                                                className={
                                                                                                        userSettingsItemValue
                                                                                                }
                                                                                        >
                                                                                                ********
                                                                                        </div>
                                                                                        <div
                                                                                                className={
                                                                                                        userSettingsItemRightContent
                                                                                                }
                                                                                        >
                                                                                                <button
                                                                                                        type="button"
                                                                                                        className={
                                                                                                                userSettingsItemRightButton
                                                                                                        }
                                                                                                >
                                                                                                        Change
                                                                                                </button>
                                                                                        </div>
                                                                                </div>
                                                                        </div>
                                                                        <div className={userSettingsItemWrapper}>
                                                                                <div className={userSettingsItemLabel}>
                                                                                        Language
                                                                                </div>
                                                                                <div
                                                                                        className={
                                                                                                userSettingsItemContent
                                                                                        }
                                                                                >
                                                                                        <div
                                                                                                className={
                                                                                                        userSettingsItemValue
                                                                                                }
                                                                                        >
                                                                                                English
                                                                                        </div>
                                                                                        <div
                                                                                                className={
                                                                                                        userSettingsItemRightContent
                                                                                                }
                                                                                        >
                                                                                                <button
                                                                                                        type="button"
                                                                                                        className={
                                                                                                                userSettingsItemRightButton
                                                                                                        }
                                                                                                >
                                                                                                        Language
                                                                                                        Selector
                                                                                                </button>
                                                                                        </div>
                                                                                </div>
                                                                        </div>
                                                                        <div className={userSettingsItemWrapper}>
                                                                                <div className={userSettingsItemLabel}>
                                                                                        Status
                                                                                </div>
                                                                                <div
                                                                                        className={
                                                                                                userSettingsItemContent
                                                                                        }
                                                                                >
                                                                                        <div
                                                                                                className={
                                                                                                        userSettingsItemValue
                                                                                                }
                                                                                        >
                                                                                                Active
                                                                                        </div>
                                                                                        <div
                                                                                                className={
                                                                                                        userSettingsItemRightButton
                                                                                                }
                                                                                        >
                                                                                                <button
                                                                                                        type="button"
                                                                                                        className={
                                                                                                                userSettingsItemRightButton
                                                                                                        }
                                                                                                >
                                                                                                        Deactivate
                                                                                                </button>
                                                                                        </div>
                                                                                </div>
                                                                        </div>
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </div>
                        <Footer />
                </div>
        );
}
