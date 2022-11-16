import { useTradesContext } from "../hooks/useTradesContext";

const TradeDetails = ({ trade }) => {
  const { dispatch } = useTradesContext();

  const handleClick = async () => {
    const response = await fetch("/api/trades/" + trade._id, {
      method: "DELETE",
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_TRADE", payload: json });
    }
  };

  return (
    <div className="trade-details">
      <h4>
        <strong>{trade.pair}</strong>
      </h4>
      <p>
        <strong>Price</strong>:{trade.price}
      </p>
      <p>
        <strong>Amount</strong>:{trade.amount}
      </p>
      <p>
        <strong>Closed Price</strong>:{trade.closedPrice}
      </p>
      <p>
        <strong>Open Date</strong>:{trade.openedDate}
      </p>
      <p>
        <strong>Closed Date</strong>:{trade.closedDate}
      </p>
      <span onClick={handleClick}>Delete</span>
    </div>
  );
};

export default TradeDetails;
