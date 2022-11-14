const TradeDetails = ({ trade }) => {
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
    </div>
  );
};

export default TradeDetails;
