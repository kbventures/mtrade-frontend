import { useState } from "react";
import { useTradesContext } from "../hooks/useTradesContext";

const TradeForm = () => {
  const { dispatch } = useTradesContext();

  const [pair, setPair] = useState("");
  const [price, setPrice] = useState("");
  const [amount, setAmount] = useState("");
  const [closedPrice, setClosedPrice] = useState("");
  const [openedDate, setOpenDate] = useState("");
  const [closedDate, setClosedDate] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const trade = { pair, price, amount, closedPrice, openedDate, closedDate };

    const response = await fetch("/api/trades", {
      method: "POST",
      body: JSON.stringify(trade),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }

    if (response.ok) {
      setPair("");
      setPrice("");
      setAmount("");
      setClosedPrice("");
      setOpenDate("");
      setClosedDate("");
      setError(null);
      console.log("New trade added", json);
      dispatch({ type: "CREATE_TRADE", payload: json });
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a new Trade</h3>

      <label>Pair Name:</label>
      <input
        type="text"
        onChange={(e) => setPair(e.target.value)}
        value={pair}
      />
      <label>Price:</label>
      <input
        type="number"
        onChange={(e) => setPrice(e.target.value)}
        value={price}
      />
      <label>Amount:</label>
      <input
        type="number"
        onChange={(e) => setAmount(e.target.value)}
        value={amount}
      />
      <label>Closed Price:</label>
      <input
        type="number"
        onChange={(e) => setClosedPrice(e.target.value)}
        value={closedPrice}
      />
      <label>Open Date:</label>
      <input
        type="date"
        onChange={(e) => setOpenDate(e.target.value)}
        value={openedDate}
      />
      <label>Closed Date:</label>
      <input
        type="date"
        onChange={(e) => setClosedDate(e.target.value)}
        value={closedDate}
      />
      <button>Add Trade</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default TradeForm;
