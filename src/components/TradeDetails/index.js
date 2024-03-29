import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { useTradesContext } from '../../hooks/useTradesContext';
import { useAuthContext } from '../../hooks/useAuthContext';

// date fns
import styles from './tradeDetails.module.scss';

const TradeDetails = ({ trade }) => {
        const { t } = useTranslation();
        const { dispatch } = useTradesContext();
        const { user } = useAuthContext();

        const handleClick = async () => {
                if (!user) {
                        return;
                }

                const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/trades/${trade._id}`, {
                        method: 'DELETE',
                        headers: {
                                Authorization: `Bearer ${user.token}`,
                        },
                });
                const json = await response.json();

                if (response.ok) {
                        dispatch({ type: 'DELETE_TRADE', payload: json });
                }
        };

        return (
                <div className={styles.tradeDetails}>
                        <h4>
                                <strong>{trade.pair}</strong>
                        </h4>
                        <p>
                                <strong>{t('price')}</strong>:{trade.price}
                        </p>
                        <p>
                                <strong>{t('amount')}</strong>:{trade.amount}
                        </p>
                        <p>
                                <strong>{t('closed-price')}</strong>:{trade.closedPrice}
                        </p>
                        <p>
                                <strong>{t('open-date')}</strong>:
                                {formatDistanceToNow(new Date(trade.openedDate), { addSuffix: true })}
                        </p>
                        <p>
                                <strong>{t('closed-date')}</strong>:
                                {formatDistanceToNow(new Date(trade.closedDate), { addSuffix: true })}
                        </p>
                        {/* Force to change span to on button due to linting.. check later */}
                        <button type="button" className="material-symbols-outlined" onClick={handleClick}>
                                {t('delete')}
                        </button>
                </div>
        );
};

TradeDetails.propTypes = {
        trade: PropTypes.shape({
                pair: PropTypes.string.isRequired,
                price: PropTypes.number,
                amount: PropTypes.number.isRequired,
                closedPrice: PropTypes.number.isRequired,
                openedDate: PropTypes.string.isRequired,
                closedDate: PropTypes.string.isRequired,
                _id: PropTypes.string.isRequired,
        }),
};

export default TradeDetails;
