import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export const useTradesContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw Error("useTradescotext must be used inside an TradesContextProvider");
  }

  return context;
};
