import { useEffect } from 'react';
import { useTradesContext } from '../../hooks/useTradesContext';
import { useAuthContext } from '../../hooks/useAuthContext';

// scss
import styles from './home.module.scss';

// components
import TradeDetails from '../../components/TradeDetails';
import TradeForm from '../../components/TradeForm';
import Features from '../../components/Features/index';
import Footer from '../../components/Footer/index';

const Home = () => {
        const { trades, dispatch } = useTradesContext();
        const { user } = useAuthContext();

        useEffect(() => {
                const fetchTrades = async () => {
                        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/trades`, {
                                headers: {
                                        Authorization: `Bearer ${user.token}`,
                                },
                        });
                        const json = await response.json();

                        if (response.ok) {
                                dispatch({ type: 'SET_TRADES', payload: json });
                        }
                };

                if (user) {
                        fetchTrades();
                }
        }, [dispatch, user]);

        return (
                <div className={styles.home}>
                        <div>{trades && trades.map((trade) => <TradeDetails key={trade._id} trade={trade} />)}</div>
                        <TradeForm />
                        <Features />
                        <Footer />
                </div>
        );
};

export default Home;
