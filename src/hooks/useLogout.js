import { useAuthContext } from "./useAuthContext";
import { useTradesContext } from "./useTradesContext";

export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const { dispatch: tradesDispatch } = useTradesContext();

  const logout = () => {
    //remove user from storage
    localStorage.removeItem("user");

    //dispatch logout action
    dispatch({ type: "LOGOUT" });
    tradesDispatch({ type: "SET_TRADES", payload: null });
  };
  return { logout };
};
