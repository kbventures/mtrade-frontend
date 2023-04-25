import React from 'react';
import PropTypes from 'prop-types';
import styles from './popup.module.scss'; /* import the CSS file */

const { popup, overlay } = styles;
function Popup({ onClose }) {
        return (
                <div className={overlay}>
                        <div className={popup}>
                                <h1>Testing</h1>
                        </div>
                </div>
        );
}

Popup.propTypes = {
        onClose: PropTypes.func.isRequired,
};

export default Popup;
