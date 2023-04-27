import React, { useState, useCallback } from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {  } from '@fortawesome/free-brands-svg-icons';
import {
        faCalendar,
        faRefresh,
        faAngleDown,
        faAnglesLeft,
        faAngleLeft,
        faAnglesRight,
        faAngleRight,
} from '@fortawesome/free-solid-svg-icons';
import styles from './trades.module.scss';
import TimeFramePopUp from './Popup/index';

const {
        app,
        dataSet,
        container,
        sectionHeader,
        sectionHeaderTitle,
        sectionHeaderTitleMain,
        sectionHeaderTimeRange,
        sectionHeaderTimeRangeIcon,
        sectionHeaderRow,
        sectionHeaderItem,
        sectionHeaderItemLabel,
        sectionHeaderPopoverWrapper,
        sectionHeaderPopoverTarget,
        sectionHeaderPopoverButton,
        sectionHeaderPopoverButtonText,
        sectionHeaderPopoverButtonSvg,
        columnsFilterWrapper,
        columnsFilterWrapperButton,
        columnsFilterWrapperButtonText,
        popoverWrapper,
        popoverTarget,
        popoverIcon,
        pagination,
        paginationGroup,
        paginationPage,
        paginationInput,
        paginationIcon,
        collapsedTable,
        collapsedTableItem,
        textFormat,
        amountGreenText,
        amountFraction,
} = styles;

const Trades = () => {
        const [showPopup, setShowPopup] = useState(false);

        const handleOpenMenu = useCallback(() => {
                // eslint-disable-next-line no-console
                console.log('handleOpenMenu Clicked!');
                setShowPopup(true);
        }, []);

        const handleCloseMenu = useCallback(() => {
                // eslint-disable-next-line no-console
                console.log('handleOpenClose Clicked!');
                setShowPopup(false);
        }, []);

        return (
                <div>
                        <div className={app}>
                                <div className={dataSet}>
                                        <div className={container}>
                                                <div className={sectionHeader}>
                                                        <div className={sectionHeaderTitle}>
                                                                <span className={sectionHeaderTitleMain}>
                                                                        Public Trades
                                                                </span>
                                                        </div>
                                                        <div
                                                                className={sectionHeaderTimeRange}
                                                                onClick={() => handleOpenMenu()}
                                                                aria-hidden="true"
                                                        >
                                                                <FontAwesomeIcon
                                                                        size="1x"
                                                                        color="rgb(255, 255, 255)"
                                                                        icon={faCalendar}
                                                                        className={sectionHeaderTimeRangeIcon}
                                                                />
                                                                <span>APR 10 2023 - APR 24 2023</span>
                                                                {showPopup &&
                                                                        ReactDOM.createPortal(
                                                                                <TimeFramePopUp
                                                                                        onClose={handleCloseMenu}
                                                                                />,
                                                                                document.body
                                                                        )}
                                                        </div>
                                                        <div className={sectionHeaderRow}>
                                                                <div className={sectionHeaderItem}>
                                                                        <div className={sectionHeaderItemLabel}>
                                                                                Symbol Filter
                                                                        </div>
                                                                        <span className={sectionHeaderPopoverWrapper}>
                                                                                <span
                                                                                        className={
                                                                                                sectionHeaderPopoverTarget
                                                                                        }
                                                                                >
                                                                                        <div>
                                                                                                <button
                                                                                                        className={
                                                                                                                sectionHeaderPopoverButton
                                                                                                        }
                                                                                                        type="button"
                                                                                                >
                                                                                                        <span
                                                                                                                className={
                                                                                                                        sectionHeaderPopoverButtonText
                                                                                                                }
                                                                                                        >
                                                                                                                BTC:USD
                                                                                                        </span>
                                                                                                        <FontAwesomeIcon
                                                                                                                size="1x"
                                                                                                                color="rgb(255, 255, 255)"
                                                                                                                icon={
                                                                                                                        faAngleDown
                                                                                                                }
                                                                                                                className={
                                                                                                                        sectionHeaderPopoverButtonSvg
                                                                                                                }
                                                                                                        />
                                                                                                </button>
                                                                                        </div>
                                                                                </span>
                                                                        </span>
                                                                </div>
                                                                <div className={columnsFilterWrapper}>
                                                                        <button
                                                                                className={columnsFilterWrapperButton}
                                                                                type="button"
                                                                        >
                                                                                <span
                                                                                        className={
                                                                                                columnsFilterWrapperButtonText
                                                                                        }
                                                                                >
                                                                                        Filter Columns
                                                                                </span>
                                                                        </button>
                                                                </div>
                                                                <span className={popoverWrapper}>
                                                                        <span className={popoverTarget}>
                                                                                <FontAwesomeIcon
                                                                                        size="1x"
                                                                                        color="rgb(255, 255, 255)"
                                                                                        icon={faRefresh}
                                                                                        className={popoverIcon}
                                                                                />
                                                                        </span>
                                                                </span>
                                                        </div>
                                                </div>
                                                <div className={pagination}>
                                                        <div className={paginationGroup}>
                                                                <FontAwesomeIcon
                                                                        size="xs"
                                                                        color="rgb(255, 255, 255)"
                                                                        icon={faAnglesLeft}
                                                                        className={paginationIcon}
                                                                />
                                                                <FontAwesomeIcon
                                                                        size="xs"
                                                                        color="rgb(255, 255, 255)"
                                                                        icon={faAngleLeft}
                                                                        className={paginationIcon}
                                                                />
                                                                <span className={paginationPage}>
                                                                        Page
                                                                        <input
                                                                                className={paginationInput}
                                                                                placeholder="1"
                                                                        />
                                                                        of 40
                                                                        <span>+</span>
                                                                </span>
                                                                <FontAwesomeIcon
                                                                        size="xs"
                                                                        color="rgb(255, 255, 255)"
                                                                        icon={faAnglesRight}
                                                                        className={paginationIcon}
                                                                />
                                                                <FontAwesomeIcon
                                                                        size="xs"
                                                                        color="rgb(255, 255, 255)"
                                                                        icon={faAngleRight}
                                                                        className={paginationIcon}
                                                                />
                                                        </div>
                                                </div>
                                                <div className={collapsedTable}>
                                                        <div className={collapsedTableItem}>
                                                                <div>
                                                                        <div>Time (+00:00)</div>
                                                                        <div>
                                                                                <div className={textFormat}>
                                                                                        24-04-23 15:44:17
                                                                                </div>
                                                                        </div>
                                                                </div>
                                                                <div>
                                                                        <div>Type</div>
                                                                        <div>BUY</div>
                                                                </div>
                                                                <div>
                                                                        <div>Price</div>
                                                                        <div>
                                                                                <div className={amountGreenText}>
                                                                                        <span>27269</span>.
                                                                                        <span
                                                                                                className={
                                                                                                        amountFraction
                                                                                                }
                                                                                        >
                                                                                                0000000000
                                                                                        </span>
                                                                                </div>
                                                                        </div>
                                                                </div>
                                                                <div>
                                                                        <div>Amount</div>
                                                                        <div className={amountGreenText}>
                                                                                <span>-0</span>.
                                                                                <span className={amountFraction}>
                                                                                        01500000
                                                                                </span>
                                                                        </div>
                                                                </div>
                                                        </div>
                                                        <div className={collapsedTableItem}>
                                                                <div>
                                                                        <div>Time (+00:00)</div>
                                                                        <div>
                                                                                <div className={textFormat}>
                                                                                        24-04-23 15:44:17
                                                                                </div>
                                                                        </div>
                                                                </div>
                                                                <div>
                                                                        <div>Type</div>
                                                                        <div>BUY</div>
                                                                </div>
                                                                <div>
                                                                        <div>Price</div>
                                                                        <div>
                                                                                <div className={amountGreenText}>
                                                                                        <span>27269</span>.
                                                                                        <span
                                                                                                className={
                                                                                                        amountFraction
                                                                                                }
                                                                                        >
                                                                                                0000000000
                                                                                        </span>
                                                                                </div>
                                                                        </div>
                                                                </div>
                                                                <div>
                                                                        <div>Amount</div>
                                                                        <div className={amountGreenText}>
                                                                                <span>-0</span>.
                                                                                <span className={amountFraction}>
                                                                                        01500000
                                                                                </span>
                                                                        </div>
                                                                </div>
                                                        </div>
                                                        <div className={collapsedTableItem}>
                                                                <div>
                                                                        <div>Time (+00:00)</div>
                                                                        <div>
                                                                                <div className={textFormat}>
                                                                                        24-04-23 15:44:17
                                                                                </div>
                                                                        </div>
                                                                </div>
                                                                <div>
                                                                        <div>Type</div>
                                                                        <div>BUY</div>
                                                                </div>
                                                                <div>
                                                                        <div>Price</div>
                                                                        <div>
                                                                                <div className={amountGreenText}>
                                                                                        <span>27269</span>.
                                                                                        <span
                                                                                                className={
                                                                                                        amountFraction
                                                                                                }
                                                                                        >
                                                                                                0000000000
                                                                                        </span>
                                                                                </div>
                                                                        </div>
                                                                </div>
                                                                <div>
                                                                        <div>Amount</div>
                                                                        <div className={amountGreenText}>
                                                                                <span>-0</span>.
                                                                                <span className={amountFraction}>
                                                                                        01500000
                                                                                </span>
                                                                        </div>
                                                                </div>
                                                        </div>
                                                        <div className={collapsedTableItem}>
                                                                <div>
                                                                        <div>Time (+00:00)</div>
                                                                        <div>
                                                                                <div className={textFormat}>
                                                                                        24-04-23 15:44:17
                                                                                </div>
                                                                        </div>
                                                                </div>
                                                                <div>
                                                                        <div>Type</div>
                                                                        <div>BUY</div>
                                                                </div>
                                                                <div>
                                                                        <div>Price</div>
                                                                        <div>
                                                                                <div className={amountGreenText}>
                                                                                        <span>27269</span>.
                                                                                        <span
                                                                                                className={
                                                                                                        amountFraction
                                                                                                }
                                                                                        >
                                                                                                0000000000
                                                                                        </span>
                                                                                </div>
                                                                        </div>
                                                                </div>
                                                                <div>
                                                                        <div>Amount</div>
                                                                        <div className={amountGreenText}>
                                                                                <span>-0</span>.
                                                                                <span className={amountFraction}>
                                                                                        01500000
                                                                                </span>
                                                                        </div>
                                                                </div>
                                                        </div>
                                                        <div className={collapsedTableItem}>
                                                                <div>
                                                                        <div>Time (+00:00)</div>
                                                                        <div>
                                                                                <div className={textFormat}>
                                                                                        24-04-23 15:44:17
                                                                                </div>
                                                                        </div>
                                                                </div>
                                                                <div>
                                                                        <div>Type</div>
                                                                        <div>BUY</div>
                                                                </div>
                                                                <div>
                                                                        <div>Price</div>
                                                                        <div>
                                                                                <div className={amountGreenText}>
                                                                                        <span>27269</span>.
                                                                                        <span
                                                                                                className={
                                                                                                        amountFraction
                                                                                                }
                                                                                        >
                                                                                                0000000000
                                                                                        </span>
                                                                                </div>
                                                                        </div>
                                                                </div>
                                                                <div>
                                                                        <div>Amount</div>
                                                                        <div className={amountGreenText}>
                                                                                <span>-0</span>.
                                                                                <span className={amountFraction}>
                                                                                        01500000
                                                                                </span>
                                                                        </div>
                                                                </div>
                                                        </div>
                                                        <div className={collapsedTableItem}>
                                                                <div>
                                                                        <div>Time (+00:00)</div>
                                                                        <div>
                                                                                <div className={textFormat}>
                                                                                        24-04-23 15:44:17
                                                                                </div>
                                                                        </div>
                                                                </div>
                                                                <div>
                                                                        <div>Type</div>
                                                                        <div>BUY</div>
                                                                </div>
                                                                <div>
                                                                        <div>Price</div>
                                                                        <div>
                                                                                <div className={amountGreenText}>
                                                                                        <span>27269</span>.
                                                                                        <span
                                                                                                className={
                                                                                                        amountFraction
                                                                                                }
                                                                                        >
                                                                                                0000000000
                                                                                        </span>
                                                                                </div>
                                                                        </div>
                                                                </div>
                                                                <div>
                                                                        <div>Amount</div>
                                                                        <div className={amountGreenText}>
                                                                                <span>-0</span>.
                                                                                <span className={amountFraction}>
                                                                                        01500000
                                                                                </span>
                                                                        </div>
                                                                </div>
                                                        </div>
                                                        <div className={collapsedTableItem}>
                                                                <div>
                                                                        <div>Time (+00:00)</div>
                                                                        <div>
                                                                                <div className={textFormat}>
                                                                                        24-04-23 15:44:17
                                                                                </div>
                                                                        </div>
                                                                </div>
                                                                <div>
                                                                        <div>Type</div>
                                                                        <div>BUY</div>
                                                                </div>
                                                                <div>
                                                                        <div>Price</div>
                                                                        <div>
                                                                                <div className={amountGreenText}>
                                                                                        <span>27269</span>.
                                                                                        <span
                                                                                                className={
                                                                                                        amountFraction
                                                                                                }
                                                                                        >
                                                                                                0000000000
                                                                                        </span>
                                                                                </div>
                                                                        </div>
                                                                </div>
                                                                <div>
                                                                        <div>Amount</div>
                                                                        <div className={amountGreenText}>
                                                                                <span>-0</span>.
                                                                                <span className={amountFraction}>
                                                                                        01500000
                                                                                </span>
                                                                        </div>
                                                                </div>
                                                        </div>
                                                        <div className={collapsedTableItem}>
                                                                <div>
                                                                        <div>Time (+00:00)</div>
                                                                        <div>
                                                                                <div className={textFormat}>
                                                                                        24-04-23 15:44:17
                                                                                </div>
                                                                        </div>
                                                                </div>
                                                                <div>
                                                                        <div>Type</div>
                                                                        <div>BUY</div>
                                                                </div>
                                                                <div>
                                                                        <div>Price</div>
                                                                        <div>
                                                                                <div className={amountGreenText}>
                                                                                        <span>27269</span>.
                                                                                        <span
                                                                                                className={
                                                                                                        amountFraction
                                                                                                }
                                                                                        >
                                                                                                0000000000
                                                                                        </span>
                                                                                </div>
                                                                        </div>
                                                                </div>
                                                                <div>
                                                                        <div>Amount</div>
                                                                        <div className={amountGreenText}>
                                                                                <span>-0</span>.
                                                                                <span className={amountFraction}>
                                                                                        01500000
                                                                                </span>
                                                                        </div>
                                                                </div>
                                                        </div>
                                                        <div className={collapsedTableItem}>
                                                                <div>
                                                                        <div>Time (+00:00)</div>
                                                                        <div>
                                                                                <div className={textFormat}>
                                                                                        24-04-23 15:44:17
                                                                                </div>
                                                                        </div>
                                                                </div>
                                                                <div>
                                                                        <div>Type</div>
                                                                        <div>BUY</div>
                                                                </div>
                                                                <div>
                                                                        <div>Price</div>
                                                                        <div>
                                                                                <div className={amountGreenText}>
                                                                                        <span>27269</span>.
                                                                                        <span
                                                                                                className={
                                                                                                        amountFraction
                                                                                                }
                                                                                        >
                                                                                                0000000000
                                                                                        </span>
                                                                                </div>
                                                                        </div>
                                                                </div>
                                                                <div>
                                                                        <div>Amount</div>
                                                                        <div className={amountGreenText}>
                                                                                <span>-0</span>.
                                                                                <span className={amountFraction}>
                                                                                        01500000
                                                                                </span>
                                                                        </div>
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>
        );
};

export default Trades;
