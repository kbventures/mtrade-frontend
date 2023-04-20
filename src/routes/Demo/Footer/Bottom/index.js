import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
        faDiscord,
        faTwitter,
        faTelegram,
        faInstagram,
        faLinkedin,
        faFacebook,
} from '@fortawesome/free-brands-svg-icons';
import { useTranslation } from 'react-i18next';
import styles from './bottom.module.scss';

const { FooterBottom, FooterContainer, FooterSection, Social, span } = styles;

const Bottom = () => {
        const { t } = useTranslation();
        return (
                <div className={FooterBottom}>
                        <div className={FooterContainer}>
                                <div className={FooterSection}>
                                        <div className={Social}>
                                                <Link to="/">
                                                        <span className={span}>
                                                                <FontAwesomeIcon
                                                                        size="2x"
                                                                        color="rgb(255, 255, 255)"
                                                                        icon={faDiscord}
                                                                />
                                                        </span>
                                                </Link>
                                                <Link>
                                                        <span className={span}>
                                                                <FontAwesomeIcon
                                                                        size="2x"
                                                                        color="rgb(255, 255, 255)"
                                                                        icon={faTwitter}
                                                                />
                                                        </span>
                                                </Link>
                                                <Link>
                                                        <span className={span}>
                                                                <FontAwesomeIcon
                                                                        size="2x"
                                                                        color="rgb(255, 255, 255)"
                                                                        icon={faTelegram}
                                                                />
                                                        </span>
                                                </Link>
                                                <Link>
                                                        <span className={span}>
                                                                <FontAwesomeIcon
                                                                        size="2x"
                                                                        color="rgb(255, 255, 255)"
                                                                        icon={faInstagram}
                                                                />
                                                        </span>
                                                </Link>
                                                <Link>
                                                        <span className={span}>
                                                                <FontAwesomeIcon
                                                                        size="2x"
                                                                        color="rgb(255, 255, 255)"
                                                                        icon={faLinkedin}
                                                                />
                                                        </span>
                                                </Link>
                                                <Link>
                                                        <span className={span}>
                                                                <FontAwesomeIcon
                                                                        size="2x"
                                                                        color="rgb(255, 255, 255)"
                                                                        icon={faTwitter}
                                                                />
                                                        </span>
                                                </Link>
                                                <Link>
                                                        <span className={span}>
                                                                <FontAwesomeIcon
                                                                        size="2x"
                                                                        color="rgb(255, 255, 255)"
                                                                        icon={faFacebook}
                                                                />
                                                        </span>
                                                </Link>
                                        </div>
                                </div>
                                <div className={FooterSection}>{t('copywright')}</div>
                        </div>
                </div>
        );
};

export default Bottom;
