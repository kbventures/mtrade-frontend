import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './linkbutton.module.scss';

const LinkButton = ({ to, children, className, otherClassName }) => {
        const linkButtonClass = `${styles.baseLinkButton} ${styles[className]} ${styles[otherClassName]}`;

        return (
                <Link className={styles.link} to={to}>
                        <p className={linkButtonClass}>{children}</p>
                </Link>
        );
};

export default LinkButton;

LinkButton.propTypes = {
        to: PropTypes.string.isRequired,
        children: PropTypes.string.isRequired,
        className: PropTypes.string,
        otherClassName: PropTypes.string,
};

LinkButton.defaultProps = {
        className: '',
        otherClassName: '',
};
