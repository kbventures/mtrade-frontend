import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../components/Navbar/index';
import styles from './demo.module.scss';
import BottomFooter from '../../components/Footer/Bottom/index';

const {
        headerWrapper,
        mainContainer,
        content,
        settingsSideNav,
        accountSettingsSideNav,
        accountSettingsSideNavWrapper,
        accountSettingsSideNavList,
        accountSettingsSideNavListSub,
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
                        <div className={headerWrapper}>{/* <NavBar /> */}</div>
                        <div className={mainContainer}>
                                <div className={content}>
                                        <div className={settingsSideNav}>
                                                <div className={accountSettingsSideNav}>
                                                        <div className={accountSettingsSideNavWrapper}>
                                                                <div className={accountSettingsSideNavList} />
                                                                <div className={accountSettingsSideNavListSub} />
                                                        </div>
                                                </div>
                                        </div>
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
                        <BottomFooter />
                </div>
        );
}
