import { createContext, useReducer } from "react";

export const TradesContext = createContext();

export const tradesReducer = (state, action) => {
  switch (action.type) {
    case "SET_TRADES":
      return {
        trades: action.payload,
      };
    case "CREATE_TRADE":
      return {
        trades: [action.payload, ...state.trades],
      };
    case "DELETE_TRADE":
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
  return (
    <TradesContext.Provider value={{ ...state, dispatch }}>
      {children}
    </TradesContext.Provider>
  );
};
