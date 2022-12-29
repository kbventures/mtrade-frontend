import { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';

export const TradesContext = createContext();

export const tradesReducer = (state, action) => {
        switch (action.type) {
                case 'SET_TRADES':
                        return {
                                trades: action.payload,
                        };
                case 'CREATE_TRADE':
                        return {
                                trades: [action.payload, ...state.trades],
                        };
                case 'DELETE_TRADE':
                        return {
                                trades: state.trades.filter((t) => t._id !== action.payload._id),
                        };
                default:
                        return state;
        }
};

export const TradesContextProvider = ({ children }) => {
        const [state, dispatch] = useReducer(tradesReducer, {
                trades: null,
        });
        /* eslint-disable-next-line */
        return <TradesContext.Provider value={{ ...state, dispatch }}>{children}</TradesContext.Provider>;
};

TradesContextProvider.propTypes = {
        children: PropTypes.element.isRequired,
};

// const value = useMemo(() => ({ items, setItems }), [items, setItems]);
// // const value = useMemo(() => ({ items, setItems }), [items,setItems]);
// // const value = useMemo(() => ({ items, setItems }), []);

// return (
//   // wrap our React components with our store provider (store has "knowledge of your app")
//   <ItemsContext.Provider value={value}>
//     {/* eventually "children" will be our react app */}
//     {children}
//   </ItemsContext.Provider>
// );
// }

// ItemsProvider.propTypes = {
// children: PropTypes.element.isRequired,
// };
