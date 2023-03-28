import React from 'react';
import styles from './bottom.module.scss';

const { FooterExtra, ContentWrapper, ExtraFooterContent, JoinMsg, ButtonsRow, RegisterBtn, LoginBtn } = styles;

export default function index() {
        return (
                <div>
                        <div className={FooterExtra}>
                                <div className={ContentWrapper}>
                                        <div className={ExtraFooterContent}>
                                                <div className={JoinMsg}>Join mTrade and improve your trades today</div>
                                                <div className={ButtonsRow}>
                                                        <a href="/signup">
                                                                <button type="button" className={RegisterBtn}>
                                                                        Signup
                                                                </button>
                                                        </a>
                                                        <a href="/login">
                                                                <button type="button" className={LoginBtn}>
                                                                        Login
                                                                </button>
                                                        </a>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>
        );
}
