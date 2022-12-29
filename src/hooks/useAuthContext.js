import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export const useAuthContext = () => {
        const context = useContext(AuthContext);

        if (!context) {
                throw Error('useTradescotext must be used inside an TradesContextProvider');
        }

        return context;
};
