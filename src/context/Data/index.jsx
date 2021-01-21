import React, { createContext, useState, useContext } from "react";

const DataContext = createContext();

export default function DataProvider({ children }) {
  const [data, setData] = useState([]);

  return (
    <DataContext.Provider
      value={{
        data,
        setData
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  const context = useContext(DataContext);
  if (!context) throw new Error("useData must be used within a DataProvider");
  const { data, setData } = context;
  return { data, setData };
}