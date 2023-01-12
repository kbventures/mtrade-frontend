import { useState } from 'react';
import { useTradesContext } from '../../hooks/useTradesContext';
import { useAuthContext } from '../../hooks/useAuthContext';

import styles from './tradeForm.module.scss';

const TradeForm = () => {
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
                        setError('You must be logged in');
                        return;
                }

                const trade = { pair, price, amount, closedPrice, openedDate, closedDate };

                const response = await fetch('https://real-cyan-mackerel-robe.cyclic.app/api/trades', {
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
                        <h3>Add a new Trade</h3>

                        <label>
                                Pair Name:
                                <input
                                        type="text"
                                        onChange={(e) => setPair(e.target.value)}
                                        value={pair}
                                        className={emptyFields.includes('pair') ? 'error' : ''}
                                />
                        </label>
                        <label>
                                Price:
                                <input
                                        type="number"
                                        onChange={(e) => setPrice(e.target.value)}
                                        value={price}
                                        className={emptyFields.includes('price') ? 'error' : ''}
                                />
                        </label>
                        <label>
                                Amount:
                                <input
                                        type="number"
                                        onChange={(e) => setAmount(e.target.value)}
                                        value={amount}
                                        className={emptyFields.includes('amount') ? 'error' : ''}
                                />
                        </label>
                        <label>
                                Closed Price:
                                <input
                                        type="number"
                                        onChange={(e) => setClosedPrice(e.target.value)}
                                        value={closedPrice}
                                        className={emptyFields.includes('closedPrice') ? 'error' : ''}
                                />
                        </label>
                        <label>
                                Open Date:
                                <input
                                        type="date"
                                        onChange={(e) => setOpenDate(e.target.value)}
                                        value={openedDate}
                                        className={emptyFields.includes('openDate') ? 'error' : ''}
                                />
                        </label>
                        <label>
                                Closed Date:
                                <input
                                        type="date"
                                        onChange={(e) => setClosedDate(e.target.value)}
                                        value={closedDate}
                                        className={emptyFields.includes('closedDate') ? 'error' : ''}
                                />
                        </label>
                        <button type="submit">Add Trade</button>
                        {error && <div className={styles.error}>{error}</div>}
                </form>
        );
};

export default TradeForm;
