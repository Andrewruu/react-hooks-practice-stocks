import React from "react";
import Stock from "./Stock";

function PortfolioContainer({stocks,removeStock}) {
  const showStocks = stocks.map((stock)=>(<Stock key={stock.id} stock={stock} stockClicked={removeStock}/>))
  return (
    <div>
      <h2>My Portfolio</h2>
      {showStocks}
    </div>
  );
}

export default PortfolioContainer;
