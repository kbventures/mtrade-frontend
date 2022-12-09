import { useTradesContext } from "../hooks/useTradesContext";
import { useAuthContext } from "../hooks/useAuthContext";

// date fns
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const TradeDetails = ({ trade }) => {
  const { dispatch } = useTradesContext();
  const { user } = useAuthContext();

  const handleClick = async () => {
    if (!user) {
      return;
    }

    const response = await fetch(
      "https://real-cyan-mackerel-robe.cyclic.app/api/trades/" + trade._id,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );
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
        <strong>Open Date</strong>:
        {formatDistanceToNow(new Date(trade.openedDate), { addSuffix: true })}
      </p>
      <p>
        <strong>Closed Date</strong>:
        {formatDistanceToNow(new Date(trade.closedDate), { addSuffix: true })}
      </p>
      <span className="material-symbols-outlined" onClick={handleClick}>
        Delete
      </span>
    </div>
  );
};

export default TradeDetails;
