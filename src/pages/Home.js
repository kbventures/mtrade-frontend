import { useEffect } from "react";
import { useTradesContext } from "../hooks/useTradesContext";
import { useAuthContext } from "../hooks/useAuthContext";

// components
import TradeDetails from "../components/TradeDetails";
import TradeForm from "../components/TradeForm";

const Home = () => {
  const { trades, dispatch } = useTradesContext();
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchTrades = async () => {
      const response = await fetch(
        "https://real-cyan-mackerel-robe.cyclic.app/api/trades",
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_TRADES", payload: json });
      }
    };

    if (user) {
      fetchTrades();
    }
  }, [dispatch, user]);

  return (
    <div className="home">
      <div className="trades">
        {trades &&
          trades.map((trade) => <TradeDetails key={trade._id} trade={trade} />)}
      </div>
      <TradeForm />
    </div>
  );
};

export default Home;
