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
import NavBar from '../../components/Navbar/index';
import styles from './demo.module.scss';
import BottomFooter from '../../components/Footer/Bottom/index';

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
                        <div className={headerWrapper}>{/* <NavBar /> */}</div>
                        <div className={mainContainer}>
                                <div className={content}>
                                        <div className={settingsSideNav}>
                                                <div className={accountSettingsSideNavWrapper}>
                                                        <div className={accountSettingsSideNavList}>
                                                                <Link
                                                                        className={`${accountSettingsSideNavListItem} ${active}`}
                                                                >
                                                                        <FontAwesomeIcon
                                                                                size="1x"
                                                                                color="rgb(255, 255, 255)"
                                                                                icon={faUser}
                                                                                className={svg}
                                                                        />
                                                                        Account
                                                                        <FontAwesomeIcon
                                                                                size="xs"
                                                                                color="rgb(255, 255, 255)"
                                                                                icon={faCheck}
                                                                                className={icon}
                                                                        />
                                                                </Link>
                                                                <Link className={accountSettingsSideNavListItem}>
                                                                        <FontAwesomeIcon
                                                                                size="1x"
                                                                                color="rgb(255, 255, 255)"
                                                                                icon={faKey}
                                                                                className={svg}
                                                                        />
                                                                        Binance API Key
                                                                        <FontAwesomeIcon
                                                                                size="xs"
                                                                                color="rgb(255, 255, 255)"
                                                                                icon={faCheck}
                                                                                className={icon}
                                                                        />
                                                                </Link>
                                                                <Link className={accountSettingsSideNavListItem}>
                                                                        <FontAwesomeIcon
                                                                                size="1x"
                                                                                color="rgb(255, 255, 255)"
                                                                                icon={faArrowTrendUp}
                                                                                className={svg}
                                                                        />
                                                                        Trades
                                                                        <FontAwesomeIcon
                                                                                size="xs"
                                                                                color="rgb(255, 255, 255)"
                                                                                icon={faCheck}
                                                                                className={icon}
                                                                        />
                                                                </Link>
                                                                <Link className={accountSettingsSideNavListItem}>
                                                                        <FontAwesomeIcon
                                                                                size="1x"
                                                                                color="rgb(255, 255, 255)"
                                                                                icon={faLock}
                                                                                className={svg}
                                                                        />
                                                                        Security
                                                                        <FontAwesomeIcon
                                                                                size="xs"
                                                                                color="rgb(255, 255, 255)"
                                                                                icon={faCheck}
                                                                                className={icon}
                                                                        />
                                                                </Link>
                                                                <Link className={accountSettingsSideNavListItem}>
                                                                        <FontAwesomeIcon
                                                                                size="1x"
                                                                                color="rgb(255, 255, 255)"
                                                                                icon={faEnvelope}
                                                                                className={svg}
                                                                        />
                                                                        Notifications
                                                                        <FontAwesomeIcon
                                                                                size="xs"
                                                                                color="rgb(255, 255, 255)"
                                                                                icon={faCheck}
                                                                                className={icon}
                                                                        />
                                                                </Link>
                                                                <Link className={accountSettingsSideNavListItem}>
                                                                        <FontAwesomeIcon
                                                                                size="1x"
                                                                                color="rgb(255, 255, 255)"
                                                                                icon={faTrophy}
                                                                                className={svg}
                                                                        />
                                                                        Leaderboard
                                                                        <FontAwesomeIcon
                                                                                size="xs"
                                                                                color="rgb(255, 255, 255)"
                                                                                icon={faCheck}
                                                                                className={icon}
                                                                        />
                                                                </Link>
                                                                <Link className={accountSettingsSideNavListItem}>
                                                                        <FontAwesomeIcon
                                                                                size="1x"
                                                                                color="rgb(255, 255, 255)"
                                                                                icon={faChartLine}
                                                                                className={svg}
                                                                        />
                                                                        Trade Analysis
                                                                        <FontAwesomeIcon
                                                                                size="xs"
                                                                                color="rgb(255, 255, 255)"
                                                                                icon={faCheck}
                                                                                className={icon}
                                                                        />
                                                                </Link>
                                                                <Link className={accountSettingsSideNavListItem}>
                                                                        <FontAwesomeIcon
                                                                                size="1x"
                                                                                color="rgb(255, 255, 255)"
                                                                                icon={faChartPie}
                                                                                className={svg}
                                                                        />
                                                                        Reports
                                                                        <FontAwesomeIcon
                                                                                size="xs"
                                                                                color="rgb(255, 255, 255)"
                                                                                icon={faCheck}
                                                                                className={icon}
                                                                        />
                                                                </Link>
                                                        </div>
                                                        <div className={accountSettingsSideNavListSub}>
                                                                <Link className={accountSettingsSideNavListItem}>
                                                                        <FontAwesomeIcon
                                                                                size="1x"
                                                                                color="rgb(255, 255, 255)"
                                                                                icon={faLightbulb}
                                                                                className={svg}
                                                                        />
                                                                        Knowledge Base
                                                                        <FontAwesomeIcon
                                                                                size="xs"
                                                                                color="rgb(255, 255, 255)"
                                                                                icon={faCheck}
                                                                                className={icon}
                                                                        />
                                                                </Link>
                                                                <Link className={accountSettingsSideNavListItem}>
                                                                        <FontAwesomeIcon
                                                                                size="1x"
                                                                                color="rgb(255, 255, 255)"
                                                                                icon={faCircleQuestion}
                                                                                className={svg}
                                                                        />
                                                                        Support
                                                                        <FontAwesomeIcon
                                                                                size="xs"
                                                                                color="rgb(255, 255, 255)"
                                                                                icon={faCheck}
                                                                                className={icon}
                                                                        />
                                                                </Link>
                                                                <Link className={accountSettingsSideNavListItem}>
                                                                        <FontAwesomeIcon
                                                                                size="1x"
                                                                                color="rgb(255, 255, 255)"
                                                                                icon={faBullhorn}
                                                                                className={svg}
                                                                        />
                                                                        Annoucements
                                                                        <FontAwesomeIcon
                                                                                size="xs"
                                                                                color="rgb(255, 255, 255)"
                                                                                icon={faCheck}
                                                                                className={icon}
                                                                        />
                                                                </Link>
                                                                <Link className={accountSettingsSideNavListItem}>
                                                                        <FontAwesomeIcon
                                                                                size="1x"
                                                                                color="rgb(255, 255, 255)"
                                                                                icon={faBriefcase}
                                                                                className={svg}
                                                                        />
                                                                        Career
                                                                        <FontAwesomeIcon
                                                                                size="xs"
                                                                                color="rgb(255, 255, 255)"
                                                                                icon={faCheck}
                                                                                className={icon}
                                                                        />
                                                                </Link>
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
