import { useEffect, useState } from "react";
import TradeDetails from "../components/TradeDetails";
import TradeForm from "../components/TradeForm";

const Home = () => {
  const [trades, setTrades] = useState(null);
  useEffect(() => {
    const fetchTrades = async () => {
      const response = await fetch("/api/trades");
      const json = await response.json();

      if (response.ok) {
        setTrades(json);
      }
    };

    fetchTrades();
  }, []);
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
