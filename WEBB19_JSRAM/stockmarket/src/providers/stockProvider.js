import React, { createContext, useState, useEffect } from "react";

export const APIContext = createContext({});

export const StockProvider = ({ children }) => {
  const [data, setData] = useState(null);

  const fetchStockInfo = async () => {
    const response = await fetch(
      "https://market-data-collector.firebaseio.com/market-collector.json"
    );

    const info = await response.json();
    setData(info);
  };

  useEffect(() => {
    fetchStockInfo();
  }, []);

  return (
    <APIContext.Provider value={{ data, setData }}>
      {children}
    </APIContext.Provider>
  );
};
