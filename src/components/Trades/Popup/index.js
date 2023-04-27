import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import styles from './popup.module.scss';
import Menu from './Menu/index';

const {
        overlay,
        container,
        timeFrame,
        timeFrameHeader,
        timeFrameHeaderIcon,
        timeFrameHeaderTitle,
        timeFrameBody,
        timeFrameBodyContainer,
        timeFrameBodyRangeSelectRow,
        timeFrameBodyPopoverWrapper,
        timeFrameBodyPopoverTarget,
        timeFrameBodyPopoverButton,
        timeFrameBodyPopoverButtonText,
        timeFrameBodyPopoverIcon,
        timeFrameFooter,
        timeFrameFooterButtonsRow,
        timeFrameFooterCancelButton,
        timeFrameFooterConfirmButton,
        timeFrameFooterCancelButtonText,
        timeFrameFooterConfirmButtonText,
} = styles;
function TimeFramePopUp(props) {
        const { onClose } = props;
        // eslint-disable-next-line no-console
        console.log(props);

        const handleClick = (e) => {
                e.stopPropagation();
                onClose();
        };
        return (
                <div className={overlay}>
                        <div className={container}>
                                <div className={timeFrame}>
                                        <div className={timeFrameHeader}>
                                                <FontAwesomeIcon
                                                        size="1x"
                                                        color="rgb(255, 255, 255)"
                                                        icon={faCalendar}
                                                        className={timeFrameHeaderIcon}
                                                />
                                                <h4 className={timeFrameHeaderTitle}>Select Query range</h4>
                                        </div>
                                        <div className={timeFrameBody}>
                                                <div className={timeFrameBodyContainer}>
                                                        <div className={timeFrameBodyRangeSelectRow}>
                                                                <span className={timeFrameBodyPopoverWrapper}>
                                                                        <span className={timeFrameBodyPopoverTarget}>
                                                                                <div>
                                                                                        <Menu />
                                                                                        {/* <button
                                                                                                type="button"
                                                                                                className={
                                                                                                        timeFrameBodyPopoverButton
                                                                                                }
                                                                                        >
                                                                                                <span
                                                                                                        className={
                                                                                                                timeFrameBodyPopoverButtonText
                                                                                                        }
                                                                                                >
                                                                                                        Last 24H
                                                                                                </span>
                                                                                                <FontAwesomeIcon
                                                                                                        size="xs"
                                                                                                        color="rgb(255, 255, 255)"
                                                                                                        icon={
                                                                                                                faAngleDown
                                                                                                        }
                                                                                                        className={
                                                                                                                timeFrameBodyPopoverIcon
                                                                                                        }
                                                                                                />
                                                                                        </button> */}
                                                                                </div>
                                                                        </span>
                                                                </span>
                                                        </div>
                                                </div>
                                        </div>
                                        <div className={timeFrameFooter}>
                                                <div className={timeFrameFooterButtonsRow} aria-hidden="true">
                                                        <button
                                                                onClick={handleClick}
                                                                type="button"
                                                                className={timeFrameFooterCancelButton}
                                                        >
                                                                <span className={timeFrameFooterCancelButtonText}>
                                                                        Cancel
                                                                </span>
                                                        </button>
                                                        <button type="button" className={timeFrameFooterConfirmButton}>
                                                                <span className={timeFrameFooterConfirmButtonText}>
                                                                        Confirm
                                                                </span>
                                                        </button>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>
        );
}

TimeFramePopUp.propTypes = {
        onClose: PropTypes.func.isRequired,
};

export default TimeFramePopUp;
