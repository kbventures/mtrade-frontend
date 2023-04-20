import React from 'react';
import styles from './footer.module.scss';
// import FooterExtra from './Extra/index';
// import FooterTop from './Top';
// import FooterContent from './Content';
import Bottom from './Bottom';

const { FooterWrapper } = styles;

export default function index() {
        return (
                <div>
                        {/* <FooterExtra /> */}
                        <div className={FooterWrapper}>
                                {/* <FooterTop />
                                <FooterContent /> */}
                                <Bottom />
                        </div>
                </div>
        );
}
