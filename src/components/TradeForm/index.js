import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useTradesContext } from '../../hooks/useTradesContext';
import { useAuthContext } from '../../hooks/useAuthContext';

import styles from './tradeForm.module.scss';

const TradeForm = () => {
        const { t } = useTranslation();
        const { dispatch } = useTradesContext();
        const { user } = useAuthContext();

        const [pair, setPair] = useState('');
        const [price, setPrice] = useState('');
        const [amount, setAmount] = useState('');
        const [closedPrice, setClosedPrice] = useState('');
        const [openedDate, setOpenDate] = useState('');
        const [closedDate, setClosedDate] = useState('');
        const [error, setError] = useState(null);
        const [emptyFields, setEmptyFields] = useState([]);

        const handleSubmit = async (e) => {
                e.preventDefault();

                if (!user) {
                        setError(t('must-be-logged-in'));
                        return;
                }
                // eslint-disable-next-line no-console
                console.log(user.token);
                const trade = { pair, price, amount, closedPrice, openedDate, closedDate };
                const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/trades`, {
                        method: 'POST',
                        body: JSON.stringify(trade),
                        headers: {
                                'Content-Type': 'application/json',
                                Authorization: `Bearer ${user.token}`,
                        },
                });

                const json = await response.json();

                if (!response.ok) {
                        setError(json.error);
                        setEmptyFields(json.emptyFields);
                }

                if (response.ok) {
                        setPair('');
                        setPrice('');
                        setAmount('');
                        setClosedPrice('');
                        setOpenDate('');
                        setClosedDate('');
                        setError(null);
                        setEmptyFields([]);
                        dispatch({ type: 'CREATE_TRADE', payload: json });
                }
        };

        return (
                <form className={styles.create} onSubmit={handleSubmit}>
                        <h3>{t('add-new-trade')}</h3>

                        <label>
                                {t('pair-name')}:
                                <input
                                        type="text"
                                        onChange={(e) => setPair(e.target.value)}
                                        value={pair}
                                        className={emptyFields.includes('pair') ? t('error') : ''}
                                />
                        </label>
                        <label>
                                {t('price')}:
                                <input
                                        type="number"
                                        onChange={(e) => setPrice(e.target.value)}
                                        value={price}
                                        className={emptyFields.includes('price') ? t('error') : ''}
                                />
                        </label>
                        <label>
                                {t('amount')}:
                                <input
                                        type="number"
                                        onChange={(e) => setAmount(e.target.value)}
                                        value={amount}
                                        className={emptyFields.includes('amount') ? t('error') : ''}
                                />
                        </label>
                        <label>
                                {t('closed-price')}:
                                <input
                                        type="number"
                                        onChange={(e) => setClosedPrice(e.target.value)}
                                        value={closedPrice}
                                        className={emptyFields.includes('closedPrice') ? t('error') : ''}
                                />
                        </label>
                        <label>
                                {t('open-date')}:
                                <input
                                        type="date"
                                        onChange={(e) => setOpenDate(e.target.value)}
                                        value={openedDate}
                                        className={emptyFields.includes('openDate') ? t('error') : ''}
                                />
                        </label>
                        <label>
                                {t('closed-date')}:
                                <input
                                        type="date"
                                        onChange={(e) => setClosedDate(e.target.value)}
                                        value={closedDate}
                                        className={emptyFields.includes('closedDate') ? t('error') : ''}
                                />
                        </label>
                        <button type="submit">{t('add-trade')}</button>
                        {error && <div className={styles.error}>{error}</div>}
                </form>
        );
};

export default TradeForm;
