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
