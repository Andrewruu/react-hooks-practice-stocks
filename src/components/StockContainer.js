import React from "react";
import Stock from "./Stock";

function StockContainer({stocks,addStock}) {
  const showStocks = stocks.map((stock)=>(<Stock key={stock.id} stock={stock} stockClicked={addStock}/>))
  console.log(stocks)
  return (
    <div>
      <h2>Stocks</h2>
      {showStocks}
    </div>
  );
}

export default StockContainer;
