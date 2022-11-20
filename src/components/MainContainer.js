import React, { useEffect, useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([])
  const [myStocks, setMyStocks] = useState([])
  const [sortBy, setSortBy] = useState("Alphabetically");
  const [filterBy, setFilterBy] = useState("Tech");

  useEffect(()=>{
    fetch('http://localhost:3001/stocks')
    .then(res=>res.json())
    .then(setStocks)
  },[])
  
  function handleAddStocks(addStock){
    const stockInPortfolio = myStocks.find(
      (stock) => stock.id === addStock.id
    );
    if (!stockInPortfolio) {
      setMyStocks([...myStocks, addStock]);
    }
  }
  
  function handleRemoveStock(stockToRemove) {
    setMyStocks((myStocks) =>
    myStocks.filter((stock) => stock.id !== stockToRemove.id)
    );
  }

  const sortedStocks = [...stocks].sort((stock1, stock2) => {
    if (sortBy === "Alphabetically") {
      return stock1.name.localeCompare(stock2.name);
    } else {
      return stock1.price - stock2.price;
    }
  });

  const filteredStocks = sortedStocks.filter(
    (stock) => stock.type === filterBy
  );

  return (
    <div>
      <SearchBar sortBy={sortBy} onChangeSort={setSortBy} filterBy={filterBy} onChangeFilter={setFilterBy}/>
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={filteredStocks} addStock={handleAddStocks} />
        </div>
        <div className="col-4">
          <PortfolioContainer stocks={myStocks} removeStock={handleRemoveStock} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
