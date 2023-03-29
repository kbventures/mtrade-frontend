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
import styles from './bottom.module.scss';

const { FooterBottom, FooterContainer, FooterSection, Social, link } = styles;

export default function index() {
        return (
                <div className={FooterBottom}>
                        <div className={FooterContainer}>
                                <div className={FooterSection}>
                                        <div className={Social}>
                                                <Link style={link}>
                                                        <span>
                                                                <FontAwesomeIcon
                                                                        size="2x"
                                                                        color="rgb(255, 255, 255)"
                                                                        icon={faDiscord}
                                                                />
                                                        </span>
                                                </Link>
                                                <Link>
                                                        <span>
                                                                <FontAwesomeIcon
                                                                        size="2x"
                                                                        color="rgb(255, 255, 255)"
                                                                        icon={faTwitter}
                                                                />
                                                        </span>
                                                </Link>
                                                <Link>
                                                        <span>
                                                                <FontAwesomeIcon
                                                                        size="2x"
                                                                        color="rgb(255, 255, 255)"
                                                                        icon={faTelegram}
                                                                />
                                                        </span>
                                                </Link>
                                                <Link>
                                                        <span>
                                                                <FontAwesomeIcon
                                                                        size="2x"
                                                                        color="rgb(255, 255, 255)"
                                                                        icon={faInstagram}
                                                                />
                                                        </span>
                                                </Link>
                                                <Link>
                                                        <span>
                                                                <FontAwesomeIcon
                                                                        size="2x"
                                                                        color="rgb(255, 255, 255)"
                                                                        icon={faLinkedin}
                                                                />
                                                        </span>
                                                </Link>
                                                <Link>
                                                        <span>
                                                                <FontAwesomeIcon
                                                                        size="2x"
                                                                        color="rgb(255, 255, 255)"
                                                                        icon={faTwitter}
                                                                />
                                                        </span>
                                                </Link>
                                                <Link>
                                                        <span>
                                                                <FontAwesomeIcon
                                                                        size="2x"
                                                                        color="rgb(255, 255, 255)"
                                                                        icon={faFacebook}
                                                                />
                                                        </span>
                                                </Link>
                                        </div>
                                </div>
                                <div className={FooterSection}>
                                        Copyright &#169; 2013-2023 mTrade Inc. All rights reserved
                                </div>
                        </div>
                </div>
        );
}
