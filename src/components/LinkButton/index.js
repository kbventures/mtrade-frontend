import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './linkbutton.module.scss';

const LinkButton = ({ to, children, className }) => {
        const linkButtonClass = `${styles.linkButton} ${styles[`${className}`]}`;

        return (
                <Link href={to} className={linkButtonClass}>
                        <p>{children}</p>
                </Link>
        );
};

export default LinkButton;

LinkButton.propTypes = {
        to: PropTypes.string.isRequired,
        children: PropTypes.string.isRequired,
        className: PropTypes.string,
};

LinkButton.defaultProps = {
        className: '',
};
