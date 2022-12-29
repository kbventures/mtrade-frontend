import { useContext } from 'react';
import { TradesContext } from '../context/TradeContext';

export const useTradesContext = () => {
        const context = useContext(TradesContext);

        if (!context) {
                throw Error('useTradescotext must be used inside an TradesContextProvider');
        }

        return context;
};
